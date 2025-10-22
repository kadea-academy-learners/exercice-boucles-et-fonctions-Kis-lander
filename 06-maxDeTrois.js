/*
  Énoncé :
  Crée une fonction `maxDeTrois(a, b, c)` qui :
    - retourne "Les trois nombres sont égaux" si les trois valeurs sont identiques
    - retourne le plus grand des trois sinon
    - retourne null si le nombre d'arguments est incorrect ou si un argument n'est pas un nombre

  Signature attendue :
    function maxDeTrois(a, b, c) -> number | string | null

  Placeholder : levée d'erreur pour indiquer que l'exercice doit être implémenté.
*/
function maxDeTrois(a, b, c) {
    // Vérification du nombre d'arguments
    if (arguments.length !== 3) return null;
    // Vérification que tous les arguments sont des nombres
    if (typeof a !== 'number' || typeof b !== 'number' || typeof c !== 'number') return null;
    // Vérification si les trois nombres sont égaux
    if (a === b && b === c) return "Les trois nombres sont égaux";
    // Retour du plus grand des trois nombres
    return Math.max(a, b, c);
}
// Exemples de tests
console.log(maxDeTrois(5, 5, 5)); // "Les trois nombres sont égaux"
console.log(maxDeTrois(3, 7, 5)); // 7
console.log(maxDeTrois(2, 'a', 4)); // null
console.log(maxDeTrois(1, 2)); // null

// Ne pas modifier la ligne ci-dessous
module.exports = { maxDeTrois };
