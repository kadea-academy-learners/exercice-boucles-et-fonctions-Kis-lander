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
  // Vérification : n doit être un nombre fini
  if (typeof n !== 'number' || !Number.isFinite(n)) {
    return null;
  }

  // Vérification : n doit être un entier
  if (!Number.isInteger(n)) {
    return null;
  }

  // Si n est impair
  if (n % 2 !== 0) {
    return true;
  } else { // Sinon, n est pair
    return false;
  }
}
console.log(estImpair(3));      // → true
console.log(estImpair(10));     // → false
console.log(estImpair("3"));    // → null
console.log(estImpair(2.5));    // → null

// Ne pas modifier la ligne ci-dessous
module.exports = { estImpair };
