const candidates = ['Le Filip','Ruby On The Nail','Leona Winter','Lula Strega','Misty Phoenix',
  'Perseo','Norma Bell','Edeha Noire','Magnetica','Afrodite Amour'];

let list = document.getElementById("myList")



// Etape 1
console.log(candidates[0])


// // Etape 2
// console.log(candidates[7])

// // Etape 3
// console.log(candidates)

// Etape 4

for (let i = 0; i < candidates.length; i++) {
    let li = document.createElement('li')
    li.innerText = candidates[i]
    list.appendChild(li)
}
