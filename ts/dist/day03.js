"use strict";
/*
Le but est d'analyser une mémoire corrompue qui contient des intructions mélangées, les instructions valides ont un format spécifique mul(X,Y) où :
- X et Y sont des nombres (1 à 3 chiffres chacun)
- Elles doivent suivre un format exact : pas d'espace, pas de caractères supplémentaires

Il faut identifier toutes les instructions mul(X,Y) valides dans la mémoire, calculer le résultat de leur multiplication et additionner tous les résultats pour trouver la somme totale

1. Lire le contenu du texte
2. Identifier toutes les parties du texte correspondant au format exact de mul(X,Y)
3. Rejeter toutes les instructions qui ont des caractères supplémentaires
4. Rejeter toutes les instructions qui ne respectent pas la syntaxe exacte (pas d'espace, parenthèses mal formées,...)
5 Pour chaque instruction valide, extraire les deux nombres des parenthèses
6. Multiplier X par Y
7. Additionner tous les produits pour avoir le résultat final
*/
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require("fs");
const path = require("path");
// Lecture du fichier d'entrée
const fileName = path.resolve(__dirname, '../../input/day03.txt');
let fileContent = fs.readFileSync(fileName, 'utf8');
const searchSent = /mul\((\d{1,3}),(\d{1,3})\)/g;
// (\d{1,3}) : capture un nombre composé de 1 à 3 chiffres
let match;
let total = 0;
//https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/RegExp/exec
while ((match = searchSent.exec(fileContent)) !== null) {
    const x = parseInt(match[1], 10);
    const y = parseInt(match[2], 10);
    total += x * y;
}
// Voir le résultat
//Renvoie la position
console.log(fileContent.search(searchSent));
//Un tableau qui contient les correspondances est renvoyé
console.log(fileContent.match(searchSent));
//Voir le total
console.log("Total : ", total);
