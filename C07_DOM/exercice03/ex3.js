// Pour cet exercice, on va créer un bouton qui compte les cliques.

// Pour cela créé un <button id="counter">0 clics!</button> dans ton HTML. 
// Ensuite, ajoute un script JS :

// Récupère le bouton dans le code JavaScript
// Créé une variable let count = 0 pour compter le nombre de clics
// Ajoute un évènement sur le bouton avec addEventListener
// À chaque clic, incrémente la variable count
// puis modifie le texte à l’intérieur du bouton avec la nouvelle valeur de count

// On sélectionne l'élément HTML ayant l'ID "counter" et on le stocke dans une constante nommée addBouton
const addBouton = document.getElementById("counter");

// On initialise une variable count à 0 pour garder en mémoire le nombre de clics
let count = 0;

// On ajoute un écouteur d'événement "click" sur le bouton "counter"
addBouton.addEventListener("click", () => {
    // À chaque clic, on incrémente la variable count de 1
    count = count + 1;

    // Puis on met à jour le contenu texte de l'élément "counter" avec la nouvelle valeur de count
    document.getElementById("counter").textContent = count;
});

// On ajoute un autre écouteur d'événement "click", cette fois sur un élément ayant l'ID "reset"
document.getElementById("reset").addEventListener("click", function() {
    // Quand on clique sur le bouton "reset", on remet count à 0
    count = 0;

    // Et on met à jour le texte de l'élément "counter" pour refléter la réinitialisation
    document.getElementById("counter").textContent = count;
});