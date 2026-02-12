from django.test import TestCase
from django.contrib.auth.models import User
from rest_framework.test import APITestCase, APIClient
from rest_framework import status
from django.urls import reverse
from apps.movies.models import Movie
from .models import Comment


# ============= Tests des modèles =============
class CommentModelTest(TestCase):

    def setUp(self):
        self.user = User.objects.create_user(username="testuser", password="password")
        self.movie = Movie.objects.create(
            title="Test Movie",
            synopsis="A test synopsis",
            genre="Drama",
            release_date="2023-01-01",
            cast="Actor 1, Actor 2",
            poster_url="http://example.com/poster.jpg",
            backdrop_url="http://example.com/backdrop.jpg",
        )

    def test_create_comment(self):
        """Test that a comment can be created."""
        comment = Comment.objects.create(movie=self.movie, user=self.user, text="Great movie!")
        self.assertEqual(comment.text, "Great movie!")
        self.assertEqual(comment.movie, self.movie)
        self.assertEqual(comment.user, self.user)

    def test_comment_str(self):
        """Test the string representation of a comment."""
        comment = Comment.objects.create(movie=self.movie, user=self.user, text="Great movie!")
        self.assertEqual(str(comment), f"{self.user.username} on {self.movie.title}")


# ============= Tests des vues (API) =============
class CommentViewSetTest(APITestCase):
    """Tests pour les endpoints de l'API Comments"""

    def setUp(self):
        """Crée des données de test avant chaque test"""
        self.user1 = User.objects.create_user(username="user1", password="password")
        self.user2 = User.objects.create_user(username="user2", password="password")
        
        self.movie1 = Movie.objects.create(
            title="Movie 1",
            synopsis="Synopsis 1",
            genre="Action",
            release_date="2023-01-01",
            cast="Actor 1",
            poster_url="http://example.com/1.jpg",
            backdrop_url="http://example.com/1b.jpg",
        )
        
        self.movie2 = Movie.objects.create(
            title="Movie 2",
            synopsis="Synopsis 2",
            genre="Drama",
            release_date="2023-02-01",
            cast="Actor 2",
            poster_url="http://example.com/2.jpg",
            backdrop_url="http://example.com/2b.jpg",
        )
        
        # Créer des commentaires de test
        self.comment1 = Comment.objects.create(
            movie=self.movie1,
            user=self.user1,
            text="Great movie!"
        )
        
        self.comment2 = Comment.objects.create(
            movie=self.movie1,
            user=self.user2,
            text="I loved it!"
        )
        
        self.client = APIClient()

    def test_list_comments(self):
        """Test GET /api/comments/ - Lister tous les commentaires"""
        url = reverse('comment-list')
        response = self.client.get(url)
        
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        results = response.data.get('results', response.data)
        self.assertGreaterEqual(len(results), 2)

    def test_filter_comments_by_movie(self):
        """Test GET /api/comments/?movie_id=1 - Filtrer par film"""
        url = reverse('comment-list')
        response = self.client.get(url, {'movie_id': self.movie1.id})
        
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        results = response.data.get('results', response.data)
        self.assertEqual(len(results), 2)
        for comment in results:
            self.assertEqual(comment['movie'], self.movie1.id)

    def test_create_comment_authenticated(self):
        """Test POST /api/comments/ - Créer un commentaire (utilisateur authentifié)"""
        self.client.force_authenticate(user=self.user1)
        
        url = reverse('comment-list')
        data = {
            'movie': self.movie2.id,
            'text': 'Awesome movie!'
        }
        
        response = self.client.post(url, data, format='json')
        
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)
        self.assertEqual(Comment.objects.count(), 3)
        self.assertEqual(response.data['text'], 'Awesome movie!')

    def test_create_comment_unauthenticated(self):
        """Test POST /api/comments/ - Non authentifié ne peut pas commenter"""
        url = reverse('comment-list')
        data = {
            'movie': self.movie2.id,
            'text': 'Test comment'
        }
        
        response = self.client.post(url, data, format='json')
        
        self.assertEqual(response.status_code, status.HTTP_401_UNAUTHORIZED)

    def test_retrieve_comment(self):
        """Test GET /api/comments/{id}/ - Récupérer un commentaire spécifique"""
        url = reverse('comment-detail', kwargs={'pk': self.comment1.pk})
        response = self.client.get(url)
        
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(response.data['text'], 'Great movie!')
        self.assertEqual(response.data['movie'], self.movie1.id)

    def test_update_comment_as_owner(self):
        """Test PUT /api/comments/{id}/ - Propriétaire peut modifier"""
        self.client.force_authenticate(user=self.user1)
        
        url = reverse('comment-detail', kwargs={'pk': self.comment1.pk})
        data = {
            'movie': self.movie1.id,
            'text': 'Updated comment!'
        }
        
        response = self.client.put(url, data, format='json')
        
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.comment1.refresh_from_db()
        self.assertEqual(self.comment1.text, 'Updated comment!')

    def test_update_comment_as_non_owner(self):
        """Test PUT /api/comments/{id}/ - Non-propriétaire ne peut pas modifier"""
        self.client.force_authenticate(user=self.user2)
        
        url = reverse('comment-detail', kwargs={'pk': self.comment1.pk})
        data = {
            'movie': self.movie1.id,
            'text': 'Trying to update'
        }
        
        response = self.client.put(url, data, format='json')
        
        self.assertEqual(response.status_code, status.HTTP_403_FORBIDDEN)
        self.comment1.refresh_from_db()
        self.assertEqual(self.comment1.text, 'Great movie!')  # Inchangé

    def test_delete_comment_as_owner(self):
        """Test DELETE /api/comments/{id}/ - Propriétaire peut supprimer"""
        self.client.force_authenticate(user=self.user1)
        
        url = reverse('comment-detail', kwargs={'pk': self.comment1.pk})
        response = self.client.delete(url)
        
        self.assertEqual(response.status_code, status.HTTP_204_NO_CONTENT)
        self.assertEqual(Comment.objects.count(), 1)

    def test_delete_comment_as_non_owner(self):
        """Test DELETE /api/comments/{id}/ - Non-propriétaire ne peut pas supprimer"""
        self.client.force_authenticate(user=self.user2)
        
        url = reverse('comment-detail', kwargs={'pk': self.comment1.pk})
        response = self.client.delete(url)
        
        self.assertEqual(response.status_code, status.HTTP_403_FORBIDDEN)
        self.assertEqual(Comment.objects.count(), 2)  # Aucun commentaire supprimé
