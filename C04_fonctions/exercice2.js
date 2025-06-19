// Écris une fonction qui prend en argument un nombre entier et retourne son carré. Affiche le résultat dans la console. 
// Objectif : Je donne 3 à ma fonction, j’obtiens 9. Je donne 2 à ma fonction, j’obtiens 4.

// Stocke le résultat de la fonction dans une variable (c’est-à-dire, créé une variable qui sera égale à l’appel de la fonction). 
// Nous allons utiliser cette variable pour la donner à une autre fonction . 
// Ecris une autre fonction qui va multiplier par 10, la variable précédente. Affiche le résultat dans la console. 
// Objectif : Je donne 9 à ma fonction de multiplication, j’obtiens 90.

// Modifie le code existant et demande à l’utilisateur via une fonction existante (que tu dois rechercher), le nombre qui sera en entrée de la première fonction. 
// Objectif : L’utilisateur rentre un nombre, disons 4. Dans la console, je dois voir successivement 16 et 160.


// Etape 1

function nombreCarré(nombre) {
    return nombre * nombre
    
}

// console.log(nombreCarré(3))
// console.log(nombreCarré(2))

// Etape 2

let result = nombreCarré(3)

function multiplication (result) {
    return result * 10
}
// console.log(multiplication(result))



//Etape 3
let fenêtre = prompt("écris un  nombre") // affiche la fenêtre avec indicateur "ecris un nombre" + barre utilisateur
let userWrite = Number(fenêtre) // ça permet dans la barre utilisateur de convertir string en nombre 
let resultUserCarré = nombreCarré(userWrite) // lorsque l'utilisateur va taper un nombre, la formule déjà établie va donner comme résultat le nombre au carré
let resultUserMultiplication = multiplication (resultUserCarré)// idem formule multiplication 
alert(resultUserCarré)// affiche resultat carré
alert(resultUserMultiplication)// affiche resultat multiplication 


// prompt("message") affiche une boîte de dialogue où l'utilisateur peut saisir du texte
// prompt() retourne toujours une chaîne de caractères, même si l'utilisateur tape un nombre
// Number() convertit cette chaîne en nombre pour les calculs


