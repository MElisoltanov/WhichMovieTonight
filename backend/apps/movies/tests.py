from django.test import TestCase
from django.contrib.auth.models import User
from rest_framework.test import APITestCase, APIClient
from rest_framework import status
from django.urls import reverse
from .models import Movie
from django.db.models import Avg


# ============= Tests des modèles =============
class MovieModelTest(TestCase):

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

    def test_get_cast_list(self):
        """Test that get_cast_list returns a list of cast members."""
        cast_list = self.movie.get_cast_list()
        self.assertEqual(cast_list, ["Actor 1", "Actor 2"])

    def test_average_rating_no_ratings(self):
        """Test that average_rating returns None when there are no ratings."""
        self.assertIsNone(self.movie.average_rating())

    def test_average_rating_with_ratings(self):
        """Test that average_rating calculates the correct average."""
        self.movie.ratings.create(score=4, user=self.user)
        user2 = User.objects.create_user(username="testuser2", password="password")
        self.movie.ratings.create(score=5, user=user2)
        self.assertEqual(self.movie.average_rating(), 4.5)

    def test_rating_count(self):
        """Test that rating_count returns the correct number of ratings."""
        self.movie.ratings.create(score=4, user=self.user)
        user2 = User.objects.create_user(username="testuser2", password="password")
        self.movie.ratings.create(score=5, user=user2)
        self.assertEqual(self.movie.rating_count(), 2)


# ============= Tests des vues (API) =============
class MovieViewSetTest(APITestCase):
    """Tests pour les endpoints de l'API Movies"""

    def setUp(self):
        """Crée des données de test avant chaque test"""
        # Créer des utilisateurs : un normal et un admin
        self.user = User.objects.create_user(username="user", password="password")
        self.admin = User.objects.create_user(username="admin", password="password", is_staff=True)
        
        # Créer des films de test
        self.movie1 = Movie.objects.create(
            title="Inception",
            synopsis="Un voleur qui s'infiltre dans les rêves",
            genre="Science-Fiction",
            release_date="2010-07-16",
            cast="Leonardo DiCaprio, Marion Cotillard",
            poster_url="http://example.com/inception.jpg",
            backdrop_url="http://example.com/inception_backdrop.jpg",
            netflix_available=True
        )
        
        self.movie2 = Movie.objects.create(
            title="The Matrix",
            synopsis="Un hacker découvre la vraie nature de sa réalité",
            genre="Science-Fiction",
            release_date="1999-03-31",
            cast="Keanu Reeves, Laurence Fishburne",
            poster_url="http://example.com/matrix.jpg",
            backdrop_url="http://example.com/matrix_backdrop.jpg",
            prime_video_available=True
        )
        
        # Client API pour faire les requêtes
        self.client = APIClient()

    def test_list_movies(self):
        """Test GET /api/movies/ - Lister tous les films"""
        url = reverse('movie-list')
        response = self.client.get(url)
        
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        # La réponse est paginée, les films sont dans 'results'
        results = response.data.get('results', response.data)
        
        # Vérifier qu'il y a au moins 2 films
        self.assertGreaterEqual(len(results), 2)
        # Vérifier que les films créés sont présents
        titles = [movie['title'] for movie in results]
        self.assertIn('Inception', titles)
        self.assertIn('The Matrix', titles)

    def test_retrieve_movie(self):
        """Test GET /api/movies/{id}/ - Récupérer un film spécifique"""
        url = reverse('movie-detail', kwargs={'pk': self.movie1.pk})
        response = self.client.get(url)
        
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(response.data['title'], 'Inception')
        self.assertEqual(response.data['genre'], 'Science-Fiction')
        self.assertIn('cast_list', response.data)  # Vérifier que cast_list est présent

    def test_create_movie_as_admin(self):
        """Test POST /api/movies/ - Créer un film (admin autorisé)"""
        self.client.force_authenticate(user=self.admin)
        
        url = reverse('movie-list')
        data = {
            'title': 'Interstellar',
            'synopsis': 'Voyage dans l\'espace',
            'genre': 'Science-Fiction',
            'release_date': '2014-11-07',
            'cast': 'Matthew McConaughey, Anne Hathaway',
            'poster_url': 'http://example.com/interstellar.jpg',
            'backdrop_url': 'http://example.com/interstellar_backdrop.jpg',
            'netflix_available': False,
            'disney_plus_available': False,
            'prime_video_available': True
        }
        
        response = self.client.post(url, data, format='json')
        
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)
        self.assertEqual(Movie.objects.count(), 3)
        self.assertEqual(response.data['title'], 'Interstellar')

    def test_create_movie_as_regular_user(self):
        """Test POST /api/movies/ - Utilisateur normal ne peut pas créer"""
        self.client.force_authenticate(user=self.user)
        
        url = reverse('movie-list')
        data = {
            'title': 'Interstellar',
            'synopsis': 'Voyage dans l\'espace',
            'genre': 'Science-Fiction',
            'release_date': '2014-11-07',
            'cast': 'Matthew McConaughey',
            'poster_url': 'http://example.com/interstellar.jpg',
            'backdrop_url': 'http://example.com/interstellar_backdrop.jpg'
        }
        
        response = self.client.post(url, data, format='json')
        
        self.assertEqual(response.status_code, status.HTTP_403_FORBIDDEN)
        self.assertEqual(Movie.objects.count(), 2)  # Aucun nouveau film créé

    def test_create_movie_unauthenticated(self):
        """Test POST /api/movies/ - Utilisateur non authentifié ne peut pas créer"""
        url = reverse('movie-list')
        data = {'title': 'Test'}
        
        response = self.client.post(url, data, format='json')
        
        # Code 401 (Unauthorized) attendu pour utilisateur non authentifié
        self.assertEqual(response.status_code, status.HTTP_401_UNAUTHORIZED)

    def test_update_movie_as_admin(self):
        """Test PUT /api/movies/{id}/ - Admin peut modifier"""
        self.client.force_authenticate(user=self.admin)
        
        url = reverse('movie-detail', kwargs={'pk': self.movie1.pk})
        data = {
            'title': 'Inception Updated',
            'synopsis': self.movie1.synopsis,
            'genre': self.movie1.genre,
            'release_date': self.movie1.release_date,
            'cast': self.movie1.cast,
            'poster_url': self.movie1.poster_url,
            'backdrop_url': self.movie1.backdrop_url
        }
        
        response = self.client.put(url, data, format='json')
        
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.movie1.refresh_from_db()
        self.assertEqual(self.movie1.title, 'Inception Updated')

    def test_delete_movie_as_admin(self):
        """Test DELETE /api/movies/{id}/ - Admin peut supprimer"""
        self.client.force_authenticate(user=self.admin)
        
        url = reverse('movie-detail', kwargs={'pk': self.movie1.pk})
        response = self.client.delete(url)
        
        self.assertEqual(response.status_code, status.HTTP_204_NO_CONTENT)
        self.assertEqual(Movie.objects.count(), 1)

    def test_search_movies(self):
        """Test GET /api/movies/?search=matrix - Rechercher des films"""
        url = reverse('movie-list')
        response = self.client.get(url, {'search': 'matrix'})
        
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        # La réponse est paginée, les films sont dans 'results'
        results = response.data.get('results', response.data)
        
        # Vérifier que le film Matrix est dans les résultats
        titles = [movie['title'] for movie in results]
        self.assertIn('The Matrix', titles)
        # Vérifier que Inception n'est pas dans les résultats (ne contient pas 'matrix')
        self.assertNotIn('Inception', titles)

    def test_search_movies_by_actor(self):
        """Test recherche par acteur"""
        url = reverse('movie-list')
        response = self.client.get(url, {'search': 'DiCaprio'})
        
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        # La réponse est paginée, les films sont dans 'results'
        results = response.data.get('results', response.data)
        
        # Vérifier que Inception est dans les résultats (DiCaprio est dans le cast)
        titles = [movie['title'] for movie in results]
        self.assertIn('Inception', titles)
        # Vérifier que The Matrix n'est pas dans les résultats
        self.assertNotIn('The Matrix', titles)
