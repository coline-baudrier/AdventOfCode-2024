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

import * as fs from 'fs';
import * as path from 'path';

// Lecture du fichier d'entrée
const fileName: string = path.resolve(__dirname, '../../input/day03.txt');
let fileContent: string = fs.readFileSync(fileName, 'utf8');

const searchSent: RegExp = /mul\((\d{1,3}),(\d{1,3})\)/g;
// (\d{1,3}) : capture un nombre composé de 1 à 3 chiffres

let match: RegExpExecArray | null ; //Typage spécifique à TypeScript
let total: number = 0;

//https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/RegExp/exec
//La méthode exec() exécute la recherche d'une correspondance sur une chaîne de caractères donnée. Elle renvoie un tableau contenant les résultats ou null.
//exec() peut être utilisée afin de parcourir plusieurs correspondances dans un texte (avec des groupes capturants) (contrairement à String.prototype.match()).
while ((match = searchSent.exec(fileContent)) !== null) {
    const x: number = parseInt(match[1], 10);
    const y: number = parseInt(match[2], 10);
    total += x * y;
}

// Voir le résultat

//Renvoie la position
console.log("Position de la première correspondance :", fileContent.search(searchSent));
//Un tableau qui contient les correspondances est renvoyé
console.log("Correspondances trouvées :", fileContent.match(searchSent));
//Voir le total
console.log("Total des multiplications :", total);
