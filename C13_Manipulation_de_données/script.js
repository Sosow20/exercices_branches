// Etape 1

// const obj = {
//   "candidate": "Le Filip",
//   "age": 29,
//   "city": "Paris",
//   "region": "Île-de-France"
// }

//  console.log(obj.candidate)

// Etape 2

const data = [
	{
		"candidate": "Afrodite Amour",
		"age": 27,
		"city": "Lyon",
		"region": "Auvergne-Rhône-Alpes"
	},
	{
		"candidate": "Edeha Noire",
		"age": 34,
		"city": "Lyon",
		"region": "Auvergne-Rhône-Alpes"
	},
	{
		"candidate": "Le Filip",
		"age": 29,
		"city": "Paris",
		"region": "Île-de-France"
	}
]

// méthode 1 créer Tableau
// const nameCandidate = data.map(d => d.candidate)
// console.log(nameCandidate)

// méthode 2 parcourir les éléments
data.forEach( d => console.log(d.candidate))


