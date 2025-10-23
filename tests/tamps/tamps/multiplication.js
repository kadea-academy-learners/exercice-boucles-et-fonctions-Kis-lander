/*
  Énoncé :
  Écris une fonction nommée `multiplication(a, b)` qui retourne le résultat de a * b.

  Signature attendue :
    function multiplication(a, b) -> number

  Placeholder : levée d'erreur pour indiquer que l'exercice doit être implémenté.
*/
function multiplication(a, b) {
  // Vérifier le nombre d'arguments
  if (typeof a !== "number" || typeof b !== "number") {
    return undefined;
  } else if (a === 0 || b === 0) {
    return 0;
  } else {
    return a * b;
  }
}

console.log(multiplication(5, 4)); // 12

// Ne pas modifier la ligne ci-dessous
module.exports = { multiplication }
