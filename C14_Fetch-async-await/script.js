// Exercice 1:
// async function fetchOffers() {
// const response = await fetch("https://api.allorigins.win/raw?url=https://codepassport.dev/api/offers");
// const offers = await response.json();
// console.log(offers);
// }

// fetchOffers()


// https://dummyjson.com/posts

// Créer loadPost,
// créer la fonction avec "async",
// créer une variable response,
// utiliser await et fetch,
// passer l'url en parametre de fetch,
// créer une variable data en appelant .json() sur response,
// ne pas oublier await,
// retourner la data

async function loadPost(){
    const response = await fetch('https://api.allorigins.win/raw?url=https://dummyjson.com/posts');
    const data = await response.json();
    
    return console.log(data)
}

loadPost()


GVeTGNvHZopfMwTwXkwl








