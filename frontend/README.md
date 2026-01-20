# WhichMovieTonight - Frontend

## 📖 Guide de configuration du projet (de A à Z)

Ce guide explique comment configurer l'environnement de développement frontend pour le projet **WhichMovieTonight**, étape par étape, même si tu débutes en développement web.

---

## 🎯 Objectif du projet

Créer une application web moderne avec **React** (bibliothèque JavaScript pour créer des interfaces utilisateur) et **Vite** (outil de build ultra-rapide pour le développement).

---

## 📋 Prérequis

Avant de commencer, assure-toi d'avoir :
- Un terminal (ligne de commande)
- Git installé
- Accès à un conteneur Docker ou à un système Linux/macOS/Windows

---

## 🚀 Étapes de configuration

### 1️⃣ Créer le dossier du projet

```bash
mkdir -p /root/home/WhichMovieTonight/frontend
cd /root/home/WhichMovieTonight/frontend
```

**Pourquoi ?** 
- `mkdir -p` crée le dossier et tous les dossiers parents nécessaires
- On se déplace ensuite dans ce dossier pour y travailler

---

### 2️⃣ Créer un fichier .gitignore

Le fichier `.gitignore` indique à Git quels fichiers **ne pas suivre** (ne pas versionner).

**Pourquoi c'est important ?**
- Évite de versionner des fichiers inutiles (node_modules, logs, fichiers temporaires)
- Évite de pousser des fichiers sensibles (.env avec mots de passe)
- Réduit la taille du dépôt Git

**Fichiers typiquement ignorés :**
- `node_modules/` : contient toutes les dépendances (très lourd, se réinstalle avec `npm install`)
- `.env` : contient des variables d'environnement (clés API, mots de passe)
- `dist/` et `build/` : fichiers générés lors de la compilation
- Fichiers système : `.DS_Store` (macOS), `Thumbs.db` (Windows)

**Est-ce qu'on doit pousser le .gitignore sur Git ?**  
✅ **OUI !** Le `.gitignore` doit être versionné pour que tous les développeurs du projet ignorent les mêmes fichiers.

---

### 3️⃣ Initialiser un projet Node.js

```bash
npm init -y
```

**Qu'est-ce que ça fait ?**
- Crée un fichier `package.json` qui décrit le projet
- L'option `-y` accepte automatiquement les valeurs par défaut

**À quoi sert package.json ?**
- Liste les dépendances du projet (bibliothèques nécessaires)
- Définit les scripts (commandes) du projet (`npm run dev`, `npm run build`)
- Stocke les métadonnées (nom, version, auteur)

---

### 4️⃣ Créer un projet Vite + React

```bash
npm create vite@latest . -- --template react
```

**Décomposition de la commande :**
- `npm create vite@latest` : utilise l'outil `create-vite` pour créer un projet
- `.` : crée le projet dans le dossier actuel (et non dans un sous-dossier)
- `--template react` : utilise le template React (au lieu de Vue, Svelte, etc.)

**Qu'est-ce que Vite ?**
- Outil de build moderne et ultra-rapide
- Utilise le Hot Module Replacement (HMR) : les modifications s'affichent instantanément dans le navigateur
- Remplace des outils plus anciens comme Webpack

**Qu'est-ce que React ?**
- Bibliothèque JavaScript développée par Facebook/Meta
- Permet de créer des interfaces utilisateur avec des composants réutilisables
- Très populaire dans l'industrie

---

### 5️⃣ Problème rencontré : Version de Node.js incompatible

**Erreur obtenue :**
```
EBADENGINE Unsupported engine
required: { node: '^20.19.0 || >=22.12.0' }
current: { node: 'v18.19.1' }
```

**Pourquoi cette erreur ?**
- Vite 7.x nécessite Node.js version 20.19+ ou 22.12+
- La version installée était v18.19.1 (trop ancienne)
- Certaines fonctions JavaScript modernes (comme `crypto.hash`) n'existent pas dans Node.js v18

**Solution : Installer Node.js 22 avec NVM**

NVM (Node Version Manager) permet de gérer plusieurs versions de Node.js.

```bash
# Installer NVM
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash

# Charger NVM dans la session actuelle
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"

# Installer Node.js 22
nvm install 22

# Utiliser Node.js 22
nvm use 22

# Vérifier la version
node -v  # Devrait afficher v22.x.x
```

**Pourquoi utiliser NVM ?**
- Permet de changer facilement de version de Node.js selon les projets
- Évite les conflits de version entre différents projets
- Installation simple sans droits administrateur

---

### 6️⃣ Nettoyer et réinstaller les dépendances

Après avoir mis à jour Node.js, il faut réinstaller les dépendances avec la nouvelle version.

```bash
# Supprimer les dépendances installées avec l'ancienne version
rm -rf node_modules package-lock.json

# Réinstaller avec Node.js 22
npm install
```

**Pourquoi supprimer node_modules et package-lock.json ?**
- `node_modules/` peut contenir des binaires compilés pour Node.js v18
- `package-lock.json` verrouille les versions exactes des dépendances
- Repartir de zéro évite les incompatibilités

---

### 7️⃣ Configurer le serveur pour Docker (optionnel mais recommandé)

Pour éviter d'avoir à taper `npm run dev -- --host` à chaque fois, modifie le script `dev` dans `package.json` :

```json
"scripts": {
  "dev": "vite --host",
  "build": "vite build",
  "lint": "eslint .",
  "preview": "vite preview"
}
```

**Pourquoi ajouter --host par défaut ?**
- Dans un conteneur Docker, le serveur doit être accessible depuis l'hôte
- Sans `--host`, Vite écoute uniquement sur `127.0.0.1` (localhost du conteneur)
- Avec `--host`, Vite écoute sur `0.0.0.0` (toutes les interfaces réseau)
- Tu peux maintenant simplement utiliser `npm run dev`

---

### 8️⃣ Lancer le serveur de développement

```bash
npm run dev
```

**Que fait cette commande ?**
- Exécute le script `dev` défini dans `package.json`
- Lance Vite en mode développement avec Hot Module Replacement (HMR)
- Expose le serveur sur toutes les interfaces réseau grâce à `--host`

**Résultat attendu :**
```
VITE v7.3.1  ready in 64 ms

➜  Local:   http://localhost:5173/
➜  Network: http://172.17.0.3:5173/
```

---

## 🎉 Résultat final

Une application React fonctionnelle accessible dans le navigateur avec :
- ⚡ Rechargement à chaud (HMR) : les modifications s'affichent instantanément
- 🎨 Interface par défaut Vite + React
- 🛠️ Prêt pour le développement

---

## 📦 Structure du projet

```
frontend/
├── node_modules/      # Dépendances (ne pas versionner)
├── public/            # Fichiers statiques (images, favicon)
├── src/               # Code source de l'application
│   ├── App.jsx        # Composant principal
│   ├── main.jsx       # Point d'entrée
│   └── ...
├── .gitignore         # Fichiers à ignorer par Git
├── index.html         # Page HTML principale
├── package.json       # Configuration du projet
├── vite.config.js     # Configuration de Vite
└── README.md          # Ce fichier
```

---

## 🔄 Commandes Git utiles

### Pousser le code sur GitHub

```bash
# Ajouter les fichiers au staging
git add .gitignore package.json vite.config.js src/ public/ index.html

# Créer un commit
git commit -m "Configuration initiale du frontend avec Vite + React"

# Pousser sur la branche frontend (première fois)
git push -u origin frontend
```

**Explication de `git push -u origin frontend` :**
- `git push` : envoie les commits locaux vers le dépôt distant
- `-u` (ou `--set-upstream`) : configure le suivi entre la branche locale et distante
- `origin` : nom du dépôt distant (par défaut sur GitHub)
- `frontend` : nom de la branche à pousser

**Après le premier push avec `-u` :**
Tu pourras simplement utiliser `git push` sans préciser la branche.

---

## 🐛 Problèmes courants et solutions

### ❌ "npm: command not found"
**Solution :** Installer Node.js et npm avec NVM (voir étape 5)

### ❌ "EBADENGINE Unsupported engine"
**Solution :** Mettre à jour Node.js vers la version requise (voir étape 5)

### ❌ "crypto.hash is not a function"
**Solution :** Utiliser Node.js v20+ ou v22+ (fonction ajoutée dans les versions récentes)

### ❌ Page web ne s'affiche pas
**Solution :** Vérifie que le script `dev` dans `package.json` contient `"vite --host"`. Si tu as oublié de le modifier, tu peux aussi utiliser temporairement `npm run dev -- --host`

### ❌ Node.js v18 au lieu de v22 dans un nouveau terminal
**Solution :** Charge NVM avec `source ~/.bashrc` ou `export NVM_DIR="$HOME/.nvm" && [ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"`

### ❌ "Port 5173 already in use"
**Solution :** Arrêter le serveur existant avec `Ctrl+C` ou `pkill -f vite`

---

## 📚 Ressources pour aller plus loin

- [Documentation React](https://react.dev/)
- [Documentation Vite](https://vitejs.dev/)
- [Documentation NVM](https://github.com/nvm-sh/nvm)
- [Git - Guide simple](https://rogerdudler.github.io/git-guide/index.fr.html)

---

## 👨‍💻 Prochaines étapes

1. Modifier `src/App.jsx` pour créer l'interface de WhichMovieTonight
2. Installer des bibliothèques supplémentaires si nécessaire (React Router, Axios, etc.)
3. Créer des composants réutilisables
4. Connecter le frontend au backend (API)

---

**✨ Bon développement !**