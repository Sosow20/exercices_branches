// Nous voulons savoir si les chauffeurs sont autorisés à conduire suivant leur âge. L’âge légal en France est maintenant de 17 ans.

// Déclare une fonction qui prend en paramètre un prénom et un âge.
// Dans cette fonction, nous allons afficher dans la console si le chauffeur est autorisé à conduire ou pas en comparant son âge à l’âge légal.
// Appeler la fonction avec les chauffeurs suivant :
// Mathieu 22 ans
// Léa 15 ans
// Jean 17 ans


let legalAge = 17

function userAllowedToRide(name, age) {
    if (age >= legalAge) {
        console.log('le chauffeur est autorisé à conduire' )
    } else {
        console.log(`le chauffeur n'est pas autorisé à conduire`)
    }
}

userAllowedToRide('Mathieu', 22)
userAllowedToRide('Léa', 15)
userAllowedToRide('Jean', 17)