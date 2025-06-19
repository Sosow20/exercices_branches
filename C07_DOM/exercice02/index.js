
// Copie ce code dans un fichier index.js à côté du HTML, puis remplace les TODO par le bon code pour résoudre l’exercice :

// JS à copier/coller (index.js)

const horoscope = [
  {
    sign: 'Bélier',
    description: "Cette développeuse·eur est toujours prête à débugger avec le casque de la bravoure, même si cela signifie se lancer tête la première dans un tas d'erreurs de syntaxe.",
  },
  {
    sign: 'Taureau',
    description: "Aussi obstiné·e qu'un bug qui ne veut pas être résolu, cette développeuse·eur ne s'arrêtera pas avant que son code soit aussi solide qu'un mur de pierre.",
  },
  {
    sign: 'Gémeaux',
    description: "Capable de parler Java et Python en même temps, cette développeuse·eur est aussi adaptable qu'un caméléon dans une boîte de crayons de couleur.",
  },
  {
    sign: 'Cancer',
    description: 'La personne développeuse qui protège son code comme une maman lionne avec ses petits. Elle vous donnera un coup de patte si vous touchez à sa précieuse base de données.',
  }
];

// TODO: recupère l'élément <div id="horoscope">
// 1. Récupérer la div dans laquelle on va injecter le contenu

const container = document.getElementById('horoscope')

// 2. Boucler sur le tableau

for (const item of horoscope) {
  // Créer les éléments(balises) HTML
  const article = document.createElement('article');
  const h2 = document.createElement('h2');
  const p = document.createElement('p');

  // Remplir le contenu HTML (ici on met le texte (=textContent) de item du tableau horoscope ici 'sign' dans la balise 'h2') 

  h2.textContent = item.sign;
  p.textContent = item.description;

  // Assembler les éléments (ici on relie les balises h2 et p qui sont les enfants (appenChild) à la balise parent article(parent))

  article.appendChild(h2);
  article.appendChild(p);

  // TODO: remplace le console.log par le code qui ajoute un article
	// pour chaque item avec le format suivant :
	// <article>
	//   <h2>Sign</h2>
	//   <p>Description</p>
	// </article>

  // Ajouter l'article dans le conteneur c'est à dire on récupère les enfants ('h2' et 'p') du parent 'article' dans le container donc le dic qui contient le tableau horoscope

  container.appendChild(article);
}



