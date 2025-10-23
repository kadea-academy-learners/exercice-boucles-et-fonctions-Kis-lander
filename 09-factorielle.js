/*
  Énoncé :
  Écris une fonction `factorielle(n)` qui retourne la factorielle de `n`.
  - Si n est négatif ou invalide, retourner 0
  - Exemple : factorielle(5) => 120

  Signature attendue :
    function factorielle(n) -> number

  Placeholder : levée d'erreur pour indiquer que l'exercice doit être implémenté.
*/
function factorielle(n) {
  // Exercice non implémenté : calculer la factorielle de n
  // Placeholder neutre : retourne 0 pour indiquer non-implémentation
  
  // Vérifie que n est un nombre entier non négatif
  if (typeof n !== "number" || n < 0 || !Number.isInteger(n)) {
    return 0;
  }
  // Cas de base : 0! = 1
  if (n === 0) {
    return 1;
  }
  // Calcul itératif de la factorielle
  let resultat = 1;
  for (let i = 1; i <= n; i++) {
    resultat *= i;
  }
  return resultat;
}
// Exemple d'utilisation :
console.log(factorielle(5));
console.log(factorielle(-2));
console.log(factorielle("test"));

// Ne pas modifier la ligne ci-dessous
module.exports = { factorielle }
