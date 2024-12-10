# 🎄 Advent of Code 2024 - Analyse de Données 🎄

Ce projet vise à résoudre les défis quotidiens de l'**Advent of Code 2024** en utilisant TypeScript et Pascal, avec un focus sur l'analyse de données et la manipulation d'algorithmes.

## 🚀 Description du Projet

Chaque jour, un nouveau problème est proposé dans le cadre de l'Advent of Code. Les solutions doivent analyser des données complexes et fournir des résultats en respectant les contraintes définies. Ce projet utilise :
- **TypeScript** pour les solutions rapides et dynamiques.
- **Pascal** pour des implémentations classiques et performantes.

Les données proviennent d'un fichier `.txt` et doivent être traitées pour répondre aux problématiques spécifiques.

---

## 📂 Structure du Projet

```
advent-of-code-2024/
├── input/              # Fichiers d'entrée contenant les données à analyser
│   ├── day01.txt       # Données pour le jour 1
│   ├── day02.txt       # Données pour le jour 2
├── ts/                 # Solutions en TypeScript
│   ├── src/            # Code source TypeScript
│   │   ├── day01.ts    # Solution pour le jour 1
│   │   ├── day02.ts    # Solution pour le jour 2
│   └── dist/           # Code compilé
├── pascal/             # Solutions en Pascal
│   ├── src/            # Code source Pascal
│   │   ├── day01.pas   # Solution pour le jour 1
│   │   ├── day02.pas   # Solution pour le jour 2
│   └── bin/            # Fichiers compilés Pascal
├── README.md           # Documentation du projet
├── run.sh              # Script pour exécuter les solutions
└── package.json        # Configuration TypeScript
```

---

## 🛠️ Installation et Pré-requis

1. **Cloner le dépôt :**
   ```bash
   git clone git@github.com:coline-baudrier/AdventOfCode-2024.git
   cd AdventOfCode-2024
   ```

2. **Installer les dépendances TypeScript :**
   ```bash
   cd ts
   npm install
   ```

3. **Configurer votre environnement Pascal :**
    - Installer Free Pascal Compiler (FPC) si ce n'est pas déjà fait.

---

## 💻 Commandes Disponibles

### Exécution des solutions TypeScript

1. **Compiler le code TypeScript :**
   ```bash
   cd ts
   npx tsc
   ```

2. **Exécuter une solution pour un jour donné :**
   ```bash
   node dist/src/day01.js
   ```

### Exécution des solutions Pascal

1. **Compiler et exécuter une solution Pascal :**
   ```bash
   cd pascal
   make DAY=01 run
   ```

### Utiliser le script global

1. **Exécuter une solution (TypeScript ou Pascal) :**
   ```bash
   ./run.sh ts 01       # Exécute la solution TypeScript pour le jour 1
   ./run.sh pascal 01   # Exécute la solution Pascal pour le jour 1
   ```

---

## 📝 Auteur

Ce projet est développé dans le cadre de l'Advent of Code 2024.

- **Contact** : [coline-baudrier](https://github.com/coline-baudrier)

---
