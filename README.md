# Kasa

[![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-8-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vite.dev/)
[![JavaScript](https://img.shields.io/badge/JavaScript-ES2022-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/fr/docs/Web/JavaScript)
[![Status](https://img.shields.io/badge/Status-In%20progress-orange?style=for-the-badge)](https://github.com/jeremyroussel4/kasa)

## À propos du projet

Ce projet est réalisé dans le cadre du huitième projet de la formation
Développeur Web d'OpenClassrooms.

L'objectif est de développer le frontend de Kasa, une application de
location de logements, avec React et Vite. L'application récupère les
données des logements depuis une API locale et les présente dans une
interface responsive conforme aux maquettes fournies.

Les fonctionnalités prévues sont notamment :

- consulter la liste des logements ;
- naviguer entre la page d'accueil et les pages de détail ;
- afficher une galerie de photos avec navigation circulaire ;
- ouvrir et fermer les sections d'information ;
- gérer les URL et les identifiants de logements inexistants ;
- vérifier les composants avec des tests unitaires.

## Technologies utilisées

- React
- Vite
- JavaScript
- React Router (prévu)
- CSS
- API REST avec `fetch`
- Git et GitHub

## Organisation du projet

Le dépôt GitHub contient le frontend React situé dans le dossier
`front/` du projet local. Le backend fourni par OpenClassrooms et les
documents de suivi restent séparés du dépôt frontend.

```text
.
├── public/
├── src/
│   ├── assets/
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
├── .gitignore
├── index.html
├── package.json
├── package-lock.json
├── README.md
└── vite.config.js
```

## Installation et lancement

### 1. Cloner le dépôt

```bash
git clone git@github.com:jeremyroussel4/kasa.git
cd kasa
```

### 2. Installer les dépendances du frontend

```bash
npm install
```

### 3. Récupérer et lancer le backend

Le backend de test est fourni séparément par
[OpenClassrooms](https://github.com/OpenClassrooms-Student-Center/TesteurLogiciel_appli_location_immobiliere_React).
Clone-le dans le même dossier parent que le frontend :

```bash
git clone https://github.com/OpenClassrooms-Student-Center/TesteurLogiciel_appli_location_immobiliere_React.git ../kasa-backend
```

Dans un premier terminal, lance l'API :

```bash
cd ../kasa-backend/backend
npm install
node server.js
```

L'API est disponible à l'adresse :

```text
http://localhost:8080/api/properties
```

### 4. Lancer le frontend

Dans un second terminal, retourne dans le dossier cloné du frontend :

```bash
cd /chemin/vers/kasa
npm run dev
```

Le frontend est généralement disponible à l'adresse :

```text
http://localhost:5173
```

Le backend doit rester lancé pendant l'utilisation de l'application.

## Scripts disponibles

Depuis le dossier du frontend :

```bash
npm run dev      # lancer le serveur de développement
npm run build    # créer le build de production
npm run preview  # prévisualiser le build de production
npm run lint     # analyser le code avec Oxlint
```

## Compétences mises en pratique

- création de composants React réutilisables ;
- gestion des props et de l'état local ;
- navigation avec React Router (prévue) ;
- récupération de données depuis une API REST ;
- gestion des états de chargement et d'erreur ;
- responsive design et animations CSS ;
- tests unitaires de composants ;
- utilisation de Git et GitHub.

## Auteur

Jeremy Roussel

Projet réalisé dans le cadre de la formation Développeur Web
OpenClassrooms.
