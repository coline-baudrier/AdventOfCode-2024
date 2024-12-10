"use strict";
/*
Le but est de repérer les niveaux qui répondent aux critères cumulés :
- Les niveaux doivent tous être soit décroissant, soit crossant par rapport au précédent
- La différence entre deux niveaux consécutifs doit être comprise entre 1 et 3

1. Lire le fichier
2. Séparer chaque ligne en une liste de nombre
3. Pour chaque rapport vérifier que tous les nombres sont croissants ou décroissants
4. Pour chaque rapport vérifier si les différences entre les niveaux consécutifs sont entre 1 et 3
5. Lorsqu'un rapport satisfait toutes les conditons, il est ajout& dans Safe
*/
Object.defineProperty(exports, "__esModule", { value: true });
// Import
const fs = require("fs");
const path = require("path");
// Variables
const levels = [];
// Lecture du fichier d'entrée
const fileName = path.resolve(__dirname, '../../input/day02.txt');
let fileContent = fs.readFileSync(fileName, 'utf8');
// Stockage des données du .txt
const lines = fileContent.split('\n');
// Stocker chaque ligne dans un tableau
for (const line of lines) {
    const levels = line.split(' ').map(Number);
    let isSafe = true; // Les booléens Coline !!!
    for (let i = 0; i < levels.length - 1; i++) {
        const diff = levels[i] - levels[i + 1];
        // Pas d'égalité entre deux niveaux
        if (levels[i] === levels[i + 1]) {
            console.log(`Rapport "${line}" unsafe : deux niveaux consécutifs sont égaux.`);
            isSafe = false;
            break;
        }
        else if (diff <= -3 || diff >= 3) {
            console.log(`Rapport "${line}" unsafe : différence ${diff} hors des limites (-3 à 3).`);
            isSafe = false;
            break;
        }
        if (isSafe) {
            console.log(`Rapport "${line}" est safe.`);
        }
    }
}
// Affichage des résultats
console.log(levels);
