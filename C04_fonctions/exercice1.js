// Ecris une fonction addition3Numbers() qui affichera la somme de 1 + 2 + 3 dans la console. 
// Objectif : Voir dans la console : “Le résultat de la somme est 6”

// Ecris une nouvelle fonction addition3NumbersWithArg(…) qui affichera aussi le résultat d’une addition de 3 nombres mais cette fois-ci à partir de 3 arguments. 
// Déclarer 3 variables qui prennent chacune une valeur de votre choix. Passez ces variables à la fonction addition3NumbersWithArg(…).
// Objectif : Voir dans la console : “Le résultat de la somme est X”. X étant le résultat de la somme de vos trois valeurs de variables.

// Appelez addition3NumbersWithArg() 3 fois avec des valeurs d’argument différentes. 
// Objectif : Voir dans la console : “Le résultat de la somme est X ” “Le résultat de la somme est Y” “Le résultat de la somme est Z”


// Etape 1 fonction addition3Numbers():

function addition3Numbers(somme){
    return `le résultat de la somme est ${somme}`
    
}
console.log(addition3Numbers(1 + 2 + 3))


// Etape 2 function addition3NumbersWithArg():

function addition3NumbersWithArg(number1, number2, number3){
    let somme = number1 + number2 + number3
    console.log("le résultat de la somme est", somme)
}
addition3NumbersWithArg(1, 2, 3)
addition3NumbersWithArg(6, 8, 2)
addition3NumbersWithArg(8, 10, 1)

