/*
Le but est de retrouver la distance totale entre chaque nombre par rapport aux listes.

1. Lire le fichier texte
2. Séparer les colonnes
3. Trier les deux listes en ordre croissant
4. Associer les nombres entre eux de façon ordonnée
5. Calculer les distances entre eux (différence absolue)
6. Donner le résultat final (somme de toutes les distances
*/

// Import
import * as fs from 'fs';
import * as path from 'path';

// Liste des variables
const leftSide: number[] = [];
const rightSide: number[] = [];
let distanceTotale = 0;

// Lecture du fichier d'entrée
const fileName: string = path.resolve(__dirname, '../../input/day01.txt');
let fileContent = fs.readFileSync(fileName, 'utf8');

// Stockage des données du .txt
const lines = fileContent.split('\n');

// for (let i = 0; i < lines.length; i++) {
//     number.push(lines[i].split('   '));
//     leftSide.push(number[i][0]);
//     rightSide.push(number[i][1]);
// }

for (const line of lines) {
    const [left, right] = line.split('   ').map(Number);
    leftSide.push(left);
    rightSide.push(right);
}

// Tri par ordre croissant
leftSide.sort();
rightSide.sort();

// Calcul de la distance absolue
for (let j = 0; j < leftSide.length; j++) {
    let distance = Math.abs(rightSide[j] - leftSide[j]);
   distanceTotale = distanceTotale + distance;
}

// Affichage des résultats
console.log('La distance totale est : ' + distanceTotale);