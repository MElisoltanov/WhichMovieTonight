WhichMovieTonight/                                     # Dossier racine du projet
├── backend/                                           # Code backend (Django + DRF + PostgreSQL)
│   ├── manage.py                                      # Script Django principal (migrations, runserver, etc.)
│   ├── requirements.txt                               # Liste des dépendances Python à installer
│   ├── Dockerfile                                     # Image Docker pour lancer le backend
│   ├── whichmovietonight/                             # Dossier de configuration principale du projet Django
│   │   ├── __init__.py                                # Indique que c’est un package Python
│   │   ├── settings.py                                # Configuration globale Django (DB, apps, DRF, etc.)
│   │   ├── urls.py                                    # Point d’entrée des routes backend (inclut les urls des apps)
│   │   ├── asgi.py                                    # Point d’entrée ASGI (pour WebSockets, etc.)
│   │   └── wsgi.py                                    # Point d’entrée WSGI (serveur web classique)
│   ├── movies/                                        # App Django pour les films, notes et commentaires
│   │   ├── __init__.py                                # Indique que c’est un package Python
│   │   ├── apps.py                                    # Déclaration de l’app “movies” pour Django
│   │   ├── models.py                                  # Modèles Movie, Rating, Comment, etc.
│   │   ├── serializers.py                             # Sérialise les modèles en JSON pour l’API (DRF)
│   │   ├── views.py                                   # Logique des endpoints API (liste films, détail, créer note, etc.)
│   │   ├── urls.py                                    # Routes spécifiques à l’app “movies”
│   │   ├── admin.py                                   # Enregistrement des modèles dans l’admin Django
│   │   └── tests.py                                   # Tests unitaires / d’intégration pour l’app “movies”
│   ├── users/                                         # App Django pour la gestion des utilisateurs et de l’auth
│   │   ├── __init__.py                                # Indique que c’est un package Python
│   │   ├── apps.py                                    # Déclaration de l’app “users” pour Django
│   │   ├── models.py                                  # Modèle utilisateur custom (si besoin) ou lié à l’auth
│   │   ├── serializers.py                             # Sérialise les données user (register, login, profil)
│   │   ├── views.py                                   # Endpoints d’auth (register, login, me, etc.)
│   │   ├── urls.py                                    # Routes spécifiques à l’authentification
│   │   ├── admin.py                                   # Gestion des utilisateurs dans l’admin Django
│   │   └── tests.py                                   # Tests pour l’auth et la gestion des utilisateurs
│   └── availability/                                  # App Django pour la dispo des films sur les plateformes
│       ├── __init__.py                                # Indique que c’est un package Python
│       ├── apps.py                                    # Déclaration de l’app “availability” pour Django
│       ├── services.py                                # Logique d’appel à l’API externe (JustWatch, etc.)
│       ├── views.py                                   # Endpoints API pour récupérer la disponibilité d’un film
│       ├── urls.py                                    # Routes spécifiques à la dispo (ex: /movies/<id>/availability/)
│       └── tests.py                                   # Tests pour la logique d’API externe et les vues associées
│
├── frontend/                                          # Code frontend (React + Tailwind)
│   ├── package.json                                   # Dépendances JS et scripts (dev, build, test)
│   ├── vite.config.js                                 # Config du bundler / framework (Vite)
│   ├── tailwind.config.js                             # Config Tailwind (chemins des fichiers, thèmes, etc.)
│   ├── postcss.config.js                              # Config PostCSS utilisée par Tailwind lors du build
│   ├── index.html                                     # Page HTML racine où l’app React est montée
│   └── src/                                           # Code source React
│       ├── main.jsx                                   # Point d’entrée JS : monte <App /> dans index.html
│       ├── App.jsx                                    # Composant racine, contient les routes et le layout global
│       ├── index.css                                  # Fichier CSS principal (inclut Tailwind + styles globaux)
│       ├── components/                                # Composants réutilisables de l’interface
│       │   ├── Layout.jsx                             # Layout général (navbar, wrapper de page, etc.)
│       │   ├── MovieCard.jsx                          # Carte d’un film (affichage résumé dans une liste)
│       │   ├── MovieList.jsx                          # Liste de MovieCard (page d’accueil, recherche, etc.)
│       │   ├── MovieDetails.jsx                       # Détail complet d’un film (synopsis, genres, notes)
│       │   ├── RatingForm.jsx                         # Formulaire pour ajouter / modifier une note
│       │   ├── CommentList.jsx                        # Affichage de la liste des commentaires d’un film
│       │   └── Navbar.jsx                             # Barre de navigation (logo, liens, login/logout)
│       ├── pages/                                     # Pages principales (routage)
│       │   ├── Home.jsx                               # Page d’accueil : liste de films, filtres simples
│       │   ├── MoviePage.jsx                          # Page d’un film : utilise MovieDetails, RatingForm, CommentList
│       │   ├── Login.jsx                              # Page de connexion (formulaire + appel API auth)
│       │   ├── Register.jsx                           # Page d’inscription (formulaire + appel API auth)
│       │   └── Profile.jsx (optionnel)                # Page profil utilisateur (notes, commentaires, etc.)
│       ├── api/                                       # Fonctions pour appeler l’API backend
│       │   ├── client.js                              # Instance axios/fetch configurée (baseURL, headers, token)
│       │   ├── movies.js                              # Fonctions pour appeler les endpoints films (liste, détail, note)
│       │   ├── auth.js                                # Fonctions pour login, register, récupérer l’utilisateur
│       │   └── availability.js                        # Fonctions pour récupérer la dispo d’un film via l’API backend
│       └── hooks/                                     # Hooks React personnalisés
│           ├── useAuth.js                             # Gère l’état d’auth (user, token, login/logout) côté front
│           └── useMovies.js                           # Gère la récupération / état des films (loading, erreurs, données)
│
├── docker-compose.yml                                 # Définition des services (backend, base PostgreSQL, frontend, etc.)
└── README.md                                          # Documentation du projet (MVP, setup, commandes, etc.)