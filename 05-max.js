/*
  Énoncé :
  Crée une fonction `max(a, b)` qui retourne :
    - le plus grand des deux nombres
    - la chaîne "Les deux nombres sont égaux" si les deux sont identiques
    - null si un argument n'est pas un nombre valide

  Signature attendue :
    function max(a, b) -> number | string | null

  Placeholder : levée d'erreur pour indiquer que l'exercice doit être implémenté.
*/
function max(a, b) {
    // Vérification que les deux arguments sont des nombres valides
    if (typeof a !== "number" || typeof b !== "number" || isNaN(a) || isNaN(b)) {
        return null;
    }

    // Vérification de l'égalité
    if (a === b) {
        return "Les deux nombres sont égaux";
    }

    // Retour du plus grand
    return a > b ? a : b;
}

// Exemples de tests
console.log(max(5, 10)); // 10
console.log(max(7, 7));  // "Les deux nombres sont égaux"
console.log(max(4, "test")); // null


// Ne pas modifier la ligne ci-dessous
module.exports = { max }
