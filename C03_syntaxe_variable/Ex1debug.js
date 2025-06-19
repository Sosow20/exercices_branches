// Nous souhaitons faire la somme du prix de plusieurs articles
// Prix de deux articles
/*let a1 = 10
let a2 = 20
// Nous calculons le total
const tot = a1 + a2
// Prix d'un troisieme article
let a3 = "50"
// Nous ajoutons a3 au total
tot = tot + a3

console.log("Le prix total avant reduction est de : ", tot)
console.log("Le prix total après reduction est de : ", tot2)

//Nous appliquons 20% de reduction
let tot2 = tot - tot*0,2*/

// Correction

// Nous souhaitons faire la somme du prix de plusieurs articles
// Prix de deux articles
let a1 = 10
let a2 = 20
// Nous calculons le total
const tot1 = a1 + a2
// Prix d'un troisieme article
let a3 = 50
// Nous ajoutons a3 au total
tot2 = tot1 + a3

console.log("Le prix total avant reduction est de : ", tot2)

//Nous appliquons 20% de reduction
let pourcentage = 20
let tot3 = tot1 - tot2 * (pourcentage/100)
console.log("Le prix total après reduction est de : ", tot3)




