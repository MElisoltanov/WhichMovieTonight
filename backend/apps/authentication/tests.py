from django.test import TestCase
from django.contrib.auth.models import User
from rest_framework.test import APITestCase, APIClient
from rest_framework import status
from django.urls import reverse
from rest_framework_simplejwt.tokens import RefreshToken


# ============= Tests des vues (API) =============
class AuthenticationViewSetTest(APITestCase):
    """Tests pour les endpoints d'authentification"""

    def setUp(self):
        """Crée des données de test avant chaque test"""
        self.user = User.objects.create_user(
            username="testuser",
            email="test@example.com",
            password="testpass123"
        )
        self.client = APIClient()

    def test_register_user(self):
        """Test POST /api/auth/register/ - Inscription d'un nouvel utilisateur"""
        url = reverse('register')
        data = {
            'username': 'newuser',
            'email': 'newuser@example.com',
            'password': 'newpass123',
            'password2': 'newpass123'
        }
        
        response = self.client.post(url, data, format='json')
        
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)
        self.assertIn('access', response.data)
        self.assertIn('refresh', response.data)
        self.assertIn('user', response.data)
        self.assertEqual(response.data['user']['username'], 'newuser')
        self.assertEqual(User.objects.count(), 2)

    def test_register_user_password_mismatch(self):
        """Test inscription avec mots de passe différents"""
        url = reverse('register')
        data = {
            'username': 'newuser',
            'email': 'newuser@example.com',
            'password': 'newpass123',
            'password2': 'differentpass'
        }
        
        response = self.client.post(url, data, format='json')
        
        self.assertEqual(response.status_code, status.HTTP_400_BAD_REQUEST)
        self.assertEqual(User.objects.count(), 1)  # Aucun nouvel utilisateur créé

    def test_register_user_existing_username(self):
        """Test inscription avec un nom d'utilisateur déjà existant"""
        url = reverse('register')
        data = {
            'username': 'testuser',  # Déjà existant
            'email': 'another@example.com',
            'password': 'newpass123',
            'password2': 'newpass123'
        }
        
        response = self.client.post(url, data, format='json')
        
        self.assertEqual(response.status_code, status.HTTP_400_BAD_REQUEST)
        self.assertEqual(User.objects.count(), 1)

    def test_get_user_info_authenticated(self):
        """Test GET /api/auth/user/ - Récupérer les infos de l'utilisateur connecté"""
        self.client.force_authenticate(user=self.user)
        
        url = reverse('user_info')
        response = self.client.get(url)
        
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(response.data['username'], 'testuser')
        self.assertEqual(response.data['email'], 'test@example.com')

    def test_get_user_info_unauthenticated(self):
        """Test GET /api/auth/user/ - Non authentifié ne peut pas accéder"""
        url = reverse('user_info')
        response = self.client.get(url)
        
        self.assertEqual(response.status_code, status.HTTP_401_UNAUTHORIZED)

    def test_logout_authenticated(self):
        """Test POST /api/auth/logout/ - Déconnexion avec token valide"""
        self.client.force_authenticate(user=self.user)
        
        # Générer un refresh token
        refresh = RefreshToken.for_user(self.user)
        
        url = reverse('logout')
        data = {
            'refresh_token': str(refresh)
        }
        
        response = self.client.post(url, data, format='json')
        
        self.assertEqual(response.status_code, status.HTTP_205_RESET_CONTENT)
        self.assertIn('message', response.data)

    def test_logout_invalid_token(self):
        """Test POST /api/auth/logout/ - Déconnexion avec token invalide"""
        self.client.force_authenticate(user=self.user)
        
        url = reverse('logout')
        data = {
            'refresh_token': 'invalid_token'
        }
        
        response = self.client.post(url, data, format='json')
        
        self.assertEqual(response.status_code, status.HTTP_400_BAD_REQUEST)
        self.assertIn('error', response.data)

    def test_logout_unauthenticated(self):
        """Test POST /api/auth/logout/ - Non authentifié ne peut pas se déconnecter"""
        url = reverse('logout')
        data = {
            'refresh_token': 'some_token'
        }
        
        response = self.client.post(url, data, format='json')
        
        self.assertEqual(response.status_code, status.HTTP_401_UNAUTHORIZED)
