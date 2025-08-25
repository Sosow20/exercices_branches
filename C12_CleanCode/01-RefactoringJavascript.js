//^Enoncé

// La fonction f1 permet de calculer la somme des nombres contenus dans un tableau.

// Peux-tu faire du refactoring dans ce code pour qu'il soit plus simple à la relecture ?

// function f1(arr) {
//     let n = 0;
//     for (let i = 0; i < arr.length; i++) {
//         n += arr[i];
//     }
//     return n;
// }

// console.log(f1([1, 2, 3, 4]));  // Devrait retourner 10
// console.log(f1([1, 2]));        // Devrait retourner 3
// console.log(f1([0]));           // Devrait retourner 0
// console.log(f1([1, 0]))         // Devrait retourner 1

// Implémente la gestion des erreurs dans les cas suivants

// console.log(f1([1, "Haha"]))    // Devrait retourner 1
// console.log(f1())               // Devrait retourner "Erreur: Vous devez passer un tableau de nombres"
// console.log(f1("Huhu"))         // Devrait retourner "Erreur: Vous devez passer un tableau de nombres"

function somme(tableaux) {
    let nombre = 0
    for (let i = 0; i < tableaux.length; i++) {
        nombre += tableaux[i]
    }
        return nombre
    }


console.log(somme([1, 2, 3, 4]))
// console.log(somme([1, 2]));
// console.log(somme([0]));
// console.log(somme([1, 0]))
// console.log(somme([1, "Haha"])) (mettre dans la fonction un message d'erreur )
// console.log(somme())
// console.log(somme("Huhu"))         