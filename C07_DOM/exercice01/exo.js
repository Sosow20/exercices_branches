const pageTitle = document.querySelector('h1')
console.log(pageTitle)
const subscribeButton = document.querySelector("#newsletter")

// par défault, l'utilisateur n'a pas clické, donc l'utilisateur n'a toujours pas clické, donc = false
let UserIsSubscribed = false
subscribeButton.addEventListener('click', () => {
    
    if (UserIsSubscribed){
        // l'user est déjà souscrit le bouton auparavant, donc on passe à false
        subscribeButton.innerText = "subscribe"
         
        //on inverse la valeur booléen 
         UserIsSubscribed = false
    } else {
    // l'user n'a pas déjà clické le bouton auparavant, donc on passe à true
     subscribeButton.innerText = "unsubscribe"

     //on inverse la valeur booléen
     UserIsSubscribed = true
    }
    });