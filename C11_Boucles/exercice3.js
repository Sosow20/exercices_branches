// Nous souhaitons créer un décompte.

// Demande à l'utilisateur (à l'aide de prompt) un nombre entre 0 et 10.
// Affiche ensuite tous les nombres sous le nombre indiqué par l'utilisateur (s'il rentre 4, on affichera 4, 3, 2, 1, 0).
// Attention, si l'utilisateur rentre un chiffre erroné il faudra afficher message d'erreur.



// Demande à l'utilisateur de choisir un nombre entre 0 et 10
// Le résultat du prompt (une chaîne) est converti en nombre
let input = Number(prompt('choisis un nombre entre 0 et 10'))  // on convertit l'input en nombre et on affiche le message dans la boîte de dialogue


if (input > 10 || input < 0) {                      // Vérifie si le nombre est en dehors de l'intervalle [0, 10]
    alert("le chiffre n'est pas entre 0 et 10")     // Si le nombre est invalide, affiche une alerte
} else {

    for (let i = input; i >= 0; i--) {             // Si le nombre est valide, lance une boucle pour compter à rebours jusqu'à 0
        alert(i)                                   // Affiche chaque nombre dans une alerte
    }
}