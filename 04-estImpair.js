/*
  Énoncé :
  Écris une fonction `estImpair(n)` qui retourne :
    - true si `n` est un entier impair
    - false si `n` est un entier pair
    - null pour les entrées non numériques ou invalides

  Signature attendue :
    function estImpair(n) -> boolean | null

  Placeholder : levée d'erreur pour indiquer que l'exercice doit être implémenté.
*/
function estImpair(n) {
  // Vérification : n doit être un nombre entier
  if (typeof n !== 'number') {
    return null;
  } else if (n % 2 !== 0) {
    return true; // Si n est impair
  } else if (n % 2 === 0) { 
    return false; // Sinon, n est pair
  }
}
console.log(estImpair("a"));          

// Ne pas modifier la ligne ci-dessous
module.exports = { estImpair };
