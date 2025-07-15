// sur Javascript:
const data = require('./data.json')
// console.log(data)

// sur Node:
// const fs = require('fs');
// const filepath = 'data.json';

// const content = fs.readFileSync(filepath, {encoding: 'utf8', flag: 'r'});
// const data = JSON.parse(content);

// 1. vérifier le type de data

console.log(typeof data)

// 2. afficher premier objet du tableau d'objets

console.log(data[0])

// 3. affiche dans la console, le nombre d'objects contenu dans le tableau
 
console.log(data.length)

// 4. affiche candidate arrivée au 4e rang

const ranking = data.find(data => data.ranking === 4)
console.log(ranking)

// 5. affiche l'âge moyen des candidates
