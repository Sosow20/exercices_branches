// 1. Ré-écris ce code en utilisant la syntaxe récente de Javascript des template literals et en utilisant des fonctions.

function genererRapportUtilisateur(nom, age, ville, profession, estAbonne) {
  let rapport = "Rapport utilisateur :\\n";
  rapport += "Nom : " + nom + "\\n";
  rapport += "Age : " + age + " ans\\n";
  rapport += "Ville : " + ville + "\\n";
  rapport += "Profession : " + profession + "\\n";
  if (estAbonne == true) {
    rapport += "Statut : Abonné\\n";
  } else {
    rapport += "Statut : Non abonné\\n";
  }
  if (age < 18) {
    rapport += "Catégorie : Jeune\\n";
  } else if (age >= 18 && age < 60) {
    rapport += "Catégorie : Adulte\\n";
  } else {
    rapport += "Catégorie : Senior\\n";
  }
  return rapport;
}