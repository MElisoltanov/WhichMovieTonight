# DemoDay – Stage 1 Report

## Table des matières

- [0. Team Formation & Roles Definition](#0-team-formation--roles-definition)
  - [0.1. Présentation de l’équipe](#01-présentation-de-léquipe)
  - [0.2. Rôles et responsabilités](#02-rôles-et-responsabilités)
  - [0.3. Outils de communication et de collaboration](#03-outils-de-communication-et-de-collaboration)
  - [0.4. Normes d’équipe](#04-normes-déquipe)
  - [0.5. Parties prenantes](#05-parties-prenantes)
- [1. Brainstorming & Idea Evaluation](#1-brainstorming--idea-evaluation)
  - [1.1. Méthodologie de brainstorming](#11-méthodologie-de-brainstorming)
  - [1.2. Idées explorées](#12-idées-explorées)
- [2. Final Decision & MVP Refinement](#2-final-decision--mvp-refinement)
  - [2.1. Problème ciblé](#21-problème-ciblé)
  - [2.2. Solution proposée](#22-solution-proposée)
  - [2.3. Utilisateurs cibles](#23-utilisateurs-cibles)
  - [2.4. Type d’application](#24-type-dapplication)
  - [2.5. Features clés & objectifs (SMART)](#25-features-clés--objectifs-smart)
  - [2.6. Périmètre du projet (scope)](#26-périmètre-du-projet-scope)
  - [2.7. Risques & mitigation](#27-risques--mitigation)
  - [2.8. Résultat attendu](#28-résultat-attendu)
- [3. Summary – MVP Selected](#3-summary--mvp-selected)

---

## 0. Team Formation & Roles Definition

### 0.1. Présentation de l’équipe

- **Nombre de membres** : 2 (binôme)
- **Contexte** : Projet portfolio / DemoDay, Stage 1 (idée, MVP, organisation d’équipe).

Chaque membre a partagé :
- Son parcours (formation, expérience pro / perso).
- Ses forces techniques (front, back, UI/UX, data, etc.).
- Ses intérêts (type de produit, type d’utilisateurs, domaines métier).

### 0.2. Rôles et responsabilités

Rôles techniques (adaptables selon l’avancement du projet) :

- **Project Manager (temporaire)**  
  - Coordination globale du Stage 1.  
  - Animation des réunions, suivi des tâches, respect des deadlines.  
  - Centralisation de la documentation (ce rapport, notes, décisions).

- **Frontend Developer**  
  - Implémentation de l’interface utilisateur (pages principales du MVP).  
  - Intégration avec l’API backend, gestion de l’état et des formulaires.  
  - Collaboration avec la partie UI/UX pour respecter le design.

- **Backend Developer**  
  - Conception du modèle de données et de l’API.  
  - Gestion de l’authentification (si nécessaire), de la persistance et de la logique métier.  
  - Exposition des endpoints nécessaires au MVP.

- **UI/UX Designer (rôle partagé)**  
  - Définition des user flows clés.  
  - Création de wireframes simples pour les principales vues de l’application.  
  - Prise en compte de l’accessibilité de base et de la simplicité d’usage.

Les rôles ont été attribués en fonction :
- Des compétences actuelles.
- De la volonté de chacun de progresser sur certains aspects (ex. une personne plus à l’aise en back prend le lead backend mais contribue aussi un peu au front, ou inversement).

Ces rôles sont évolutifs : ils pourront être ajustés au fur et à mesure des stages suivants (planning, implémentation, etc.).

### 0.3. Outils de communication et de collaboration

- **Communication instantanée** :  
  - Discord / Teams / Slack (selon ce que l’équipe utilise) pour :
    - Messages rapides.
    - Appels vocaux pour les sessions de travail.
    - Canaux dédiés (général, technique, design, récap).

- **Gestion de tâches & documentation** :  
  - GitHub (issues, projects/board) ou Notion pour :
    - Suivi des tâches par stage (Stage 1, Stage 2, …).
    - Documentation partagée (ce rapport, décision d’architecture, etc.).
    - Historique des décisions (pourquoi telle idée, pourquoi ce MVP).

- **Code source** :  
  - GitHub (repo du projet) avec :
    - Branches par feature.
    - Pull requests pour revue et validation.
    - README et docs en Markdown (dont ce Stage 1).

### 0.4. Normes d’équipe

- **Réunions** :
  - 1 réunion de kick-off pour le Stage 1 (présentation, idées, critères).
  - Points réguliers (hebdo ou bi‑hebdo) pour :
    - Vérifier l’avancement.
    - Ajuster les priorités.
    - Prendre des décisions sur la suite.

- **Communication** :
  - Utiliser un canal principal (ex. #demo-day) pour les infos importantes.
  - Informer l’autre en cas d’indisponibilité ou de retard.
  - Résumer les décisions écrites après chaque réunion (court compte‑rendu).

- **Décision** :
  - Recherche de consensus.
  - Si désaccord persistant : se baser sur les critères définis (impact, faisabilité, temps, risques).

### 0.5. Parties prenantes

Pour ce projet portfolio, les parties prenantes principales sont :

- **L’équipe projet** (les 2 membres)  
  - Responsables de la conception, de la mise en œuvre et de la documentation.

- **Encadrants / formateurs**  
  - Attentes : respect du cahier des charges, qualité du MVP, clarté de la documentation, capacité à justifier les choix.

- **Utilisateurs finaux (selon l’idée choisie)**  
  - Leur profil et leurs besoins sont décrits dans la section MVP (ci‑dessous).  
  - Ils influencent les priorités fonctionnelles (features du MVP).

---

## 1. Brainstorming & Idea Evaluation

### 1.1. Méthodologie de brainstorming

Approche utilisée :

- **Recherche individuelle** :
  - Réflexion sur des problèmes concrets rencontrés par chacun (vie quotidienne, loisirs, santé, sport, etc.).
  - Recherche d’inspiration dans des tendances actuelles (plateformes de streaming, télé‑médecine, gestion de salle de sport…).

- **Session de brainstorming en binôme** :
  - Mise en commun des idées sous forme de liste.
  - Discussion ouverte sans jugement initial pour encourager la créativité.

Technique principale utilisée :  
- **“How Might We…?”**  
  Formulation d’opportunités sous forme de questions, ex. :
  - « Comment pourrait‑on aider un groupe d’amis à choisir plus facilement un film le soir ? »
  - « Comment pourrait‑on faciliter la collaboration entre professionnels de santé ? »
  - « Comment pourrait‑on simplifier la gestion des abonnements dans une salle de sport ? »

---

### 1.2. Idées explorées

#### Idée 1 – « WhichMovieTonight » (sélectionnée)

- **Description courte**  
  Une application qui aide un groupe d’amis ou une famille à choisir un film à regarder ensemble, en se basant sur :
  - Les préférences de chacun.
  - Un système de votes / matching.
  - Éventuellement des données issues d’APIs de films (notes, genres, plateformes).

- **Problème adressé**  
  - Choisir un film en groupe est souvent long et frustrant (beaucoup de temps perdu à scroller, désaccords, indécision).
  - Manque d’outil simple pour concilier les goûts de plusieurs personnes.

- **Avantages**  
  - Problème concret, que les deux membres de l’équipe connaissent bien.
  - Terrain ludique et accessible.
  - MVP ciblé mais extensible (recommandations, historiques, partage de listes).

- **Challenges / Risques**  
  - Besoin éventuel d’intégrer une API externe (TMDB, OMDb, etc.).
  - Gestion des préférences utilisateurs (interface claire pour les non‑tech).

- **Rang / Décision**  
  - **Idée retenue comme MVP** pour le projet DemoDay.

---

#### Idée 2 – Plateforme de collaboration médicale (tutoré)

- **Description courte**  
  Une plateforme qui permettrait à des professionnels de santé (médecins, infirmiers, spécialistes) de :
  - Partager des dossiers, des observations.
  - Collaborer autour de cas complexes.
  - Centraliser certaines informations pour améliorer la coordination.

- **Raison de l’idée**  
  - Inspirée par des besoins réels dans le domaine médical (manque d’outils ergonomiques, lourdeurs des systèmes existants).
  - Potentiel fort en termes d’impact (qualité des soins, gain de temps).

- **Raisons du rejet (pour ce projet)**  
  - Domaine sensible (données de santé, confidentialité, RGPD).
  - Complexité forte en termes de sécurité, conformité, gestion des droits.
  - Risque de scope trop large pour un MVP de projet étudiant à durée limitée.

- **Rang**  
  - **Classée comme intéressante mais trop risquée et trop ambitieuse** pour le contexte actuel.

---

#### Idée 3 – Logiciel de gestion de salle de sport (tutoré)

- **Description courte**  
  Une solution pour gérer une salle de sport :
  - Gestion des abonnements, présences, réservations de créneaux / cours.
  - Suivi des paiements, éventuellement des programmes pour les adhérents.

- **Intérêt**  
  - Problématique réelle (gestion administrative lourde, besoin d’automatisation).
  - Utilisateurs bien identifiés (gérants, coachs, adhérents).
  - Possibilité de décliner certains modules en SaaS.

- **Raisons du rejet (pour ce projet)**  
  - Nombre important de modules à couvrir dès le MVP (abonnements, paiements, planning, etc.).
  - Risque de sous‑spécifier le produit faute de temps (MVP trop large, manque de profondeur sur chaque feature).
  - Priorité donnée à une idée plus simple à cadrer techniquement et fonctionnellement.

- **Rang**  
  - **Idée viable pour un projet plus long**, mais rejetée pour ce Stage 1.

---

## 2. Final Decision & MVP Refinement

### 2.1. Problème ciblé

**Problème**  
Choisir un film en groupe est souvent un enfer :
- Discussions interminables (« je l’ai déjà vu », « j’aime pas ce genre », « trop long », etc.).
- Perte de temps à parcourir les catalogues de plateformes (Netflix, Prime, etc.).
- Frustration et parfois abandon : on finit par ne rien regarder ou toujours le même type de film.

Il manque un outil simple qui :
- Centralise les options.
- Prend en compte les goûts de chacun.
- Propose une suggestion claire, en peu de temps.

### 2.2. Solution proposée

**“WhichMovieTonight” – MVP**

Une application qui permet :
- À chaque participant de renseigner rapidement ses préférences (genres aimés / détestés, durée approximative, langue, etc.).
- Au groupe de générer une liste de films compatibles avec les préférences croisées.
- D’organiser un mini vote / swipe pour arriver à un choix final.

Fonctionnement général du MVP :
1. Création d’une session (par un “host”) avec un code ou lien partageable.
2. Chaque participant rejoint la session et renseigne ses préférences de base.
3. L’application propose une sélection de films filtrée.
4. Le groupe vote (like/dislike / classement).
5. L’application affiche le film “gagnant” (meilleure compatibilité + votes).

### 2.3. Utilisateurs cibles

- Groupes d’amis qui regardent des films/séries ensemble.
- Couples ou familles qui ont des goûts différents.
- Petites communautés (colocs, clubs ciné informels).

Ils ne sont pas forcément “tech” : l’interface doit rester très simple, mobile‑friendly et rapide à comprendre.

### 2.4. Type d’application

- **Type** : Application **web** (responsive, utilisable sur mobile et desktop).
- **Détails** :
  - MVP probablement en SPA ou simple application web avec quelques pages :
    - Page d’accueil / présentation.
    - Création / rejoindre une session.
    - Choix des préférences utilisateur.
    - Interface de proposition / vote.
    - Résultat final (film choisi + quelques détails).

---

### 2.5. Features clés & objectifs (SMART)

#### Feature 1 – Création et gestion de session

- **Description** : Un utilisateur peut créer une session de “movie night”, obtenir un code / lien, et voir les participants qui rejoignent.
- **Objectif SMART** :  
  D’ici la fin du Stage 2, permettre à un utilisateur de créer une session unique et de la partager, avec au moins 2 participants connectés simultanément, dans 100 % des cas de test définis.

#### Feature 2 – Saisie des préférences utilisateurs

- **Description** : Chaque participant renseigne :
  - Genres aimés / non aimés.
  - Durée approximative souhaitée (ex. < 90 min, 90–120 min, > 120 min).
  - Langue / VO ou VF (optionnel pour le MVP selon le temps).
- **Objectif SMART** :  
  Collecter au minimum 3 préférences par utilisateur et les stocker en base, avec un temps de saisie moyen inférieur à 1 minute pour un utilisateur “novice”, dans un prototype validé par l’équipe.

#### Feature 3 – Proposition & sélection du film

- **Description** : 
  - Génération d’une liste de films en fonction des préférences croisées du groupe (dans le MVP, la liste peut être simulée ou basée sur un petit dataset statique, avec la possibilité d’ajouter une vraie API ultérieurement).
  - Interface simple pour que chaque participant vote / like / dislike.
  - Calcul du film gagnant et affichage des infos clés.
- **Objectif SMART** :  
  Permettre à un groupe de 3 à 5 personnes de choisir un film en moins de 5 minutes, depuis la création de la session jusqu’à l’affichage du film sélectionné, dans au moins 80 % des tests d’usage effectués.

---

### 2.6. Périmètre du projet (scope)

**In‑Scope (pour le MVP)**

- Application web responsive (mobile + desktop).
- Création / rejoindre une session.
- Saisie basique des préférences (genres, durée, éventuellement langue).
- Génération d’une sélection de films à partir :
  - D’un dataset simple (JSON / base) ou d’un appel API limité.
- Système de choix / vote pour le film final.
- Ecran de résultat avec :
  - Titre du film.
  - Genre.
  - Durée.
  - Note moyenne (optionnel).
  - Lien / info de plateforme (facultatif dans le MVP).

**Out‑of‑Scope (pour ce MVP)**

- Recommandations ultra personnalisées par historique long terme.
- Intégration complète avec plusieurs plateformes de streaming (connexion au compte Netflix, etc.).
- Gestion avancée de comptes utilisateurs persistants (auth complète, profil détaillé, etc.).
- Système de chat en temps réel intégré.
- Modération / signalement de contenus.

---

### 2.7. Risques & mitigation

#### Risque 1 – Complexité technique (APIs externes)

- **Description** : Intégrer une API de films (TMDB, OMDb) peut être plus complexe que prévu (quotas, schéma de données, latence).
- **Mitigation** :
  - Pour le MVP, prévoir un **dataset statique** de films (JSON) pour valider les features de base.
  - Intégrer une API seulement si le temps le permet, en couche optionnelle.

#### Risque 2 – Temps limité vs scope

- **Description** : Risque de vouloir ajouter trop de features (chat, historique, comptes, multi‑plateformes).
- **Mitigation** :
  - Se concentrer strictement sur les features identifiées comme MVP.
  - Maintenir une “wishlist” pour les futures versions, sans les intégrer au scope initial.

#### Risque 3 – Manque d’expérience sur certaines technologies

- **Description** : L’équipe peut manquer d’expérience sur certains frameworks / libs (front ou back).
- **Mitigation** :
  - Choisir une stack maîtrisable ou déjà connue par au moins un membre.
  - Prévoir du temps de montée en compétence (tutos, docs) au début de la phase de dev.
  - Favoriser une architecture simple (pas d’over‑engineering).

---

### 2.8. Résultat attendu

À l’issue des prochains stages, l’équipe vise :

- Un **MVP fonctionnel** de “WhichMovieTonight” :
  - Démontrable en quelques minutes.
  - Compréhensible par un utilisateur extérieur (démo simple).
- Une **documentation claire** :
  - Ce Stage 1 Report dans le repo.
  - Une traçabilité des choix (pourquoi ce MVP, pourquoi telle architecture, etc.).
- Une **équipe alignée** :
  - Rôles clarifiés.
  - Process de collaboration en place (outils, normes, réunions).

---

## 3. Summary – MVP Selected

**MVP retenu** : **WhichMovieTonight** – une application web qui aide un groupe à choisir un film rapidement, en croisant les préférences de chacun et en facilitant le vote.

**Pourquoi cette idée ?**

- Alignée avec les intérêts et l’expérience de l’équipe (usage quotidien, problème bien connu).
- **Faisable** dans le cadre d’un projet portfolio :
  - Scope clair.
  - Difficultés techniques gérables.
- **Évolutive** :
  - Ajout possible d’APIs de films, comptes utilisateurs, features sociales.
- **Centrée utilisateur** :
  - Vise à réduire un irritant réel (perte de temps, frustration).

**Impact potentiel**

- Expérience utilisateur plus fluide pour les “movie nights”.
- Gain de temps et réduction des discussions sans fin.
- Base solide pour démontrer :
  - La capacité de l’équipe à mener un projet de bout en bout.
  - Des compétences full‑stack (front + back + UX + organisation).

Ce document constitue la base de référence pour la suite du projet (Stage 2 et au‑delà) et sera inclus dans le README du repository pour expliciter le contexte et les choix de l’équipe.