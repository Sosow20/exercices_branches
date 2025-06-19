/*1) En javascript, déclare 2 variables dans lesquelles tu affecteras respectivement ton nom et prénom (choisis un nom pertinent pour chaque variable !). 
Avec l’instruction alert(……), tu afficheras "Bonjour, nom prénom".

2) En javascript, déclare une variable constante et assigne lui une valeur numérique, c'est-à-dire un nombre, par exemple, 64.

Déclare une autre variable qui contient ton âge.

Déclare une autre variable qui contiendra le résultat de la soustraction de 64 moins ton âge en utilisant les deux variables précédentes.

Avec l’instruction alert(….) , tu afficheras "Résultat soustraction années à travailler avant la retraite ! Courage ! En développant ce sera plus fun ! ".*/

//1)

let nom = "Cherifi";
let prénom = "Sofia";
function alert(nom, prénom) {
    return `Bonjour, ${nom} ${prénom} `   
}
console.log(alert(nom, prénom))


//2)


const number = 64
let âge = 30
const result = number - âge


function alert(result){
return `${result} années à travailler avant la retraite ! Courage !`
}
console.log(alert(result))



    









