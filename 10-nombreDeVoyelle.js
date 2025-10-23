/*
  Énoncé :
  Écris une fonction `nombreDeVoyelles(phrase)` qui retourne le nombre de voyelles
  (a, e, i, o, u, y) dans une chaîne, insensible à la casse.

  Signature attendue :
    function nombreDeVoyelles(phrase) -> number

  Placeholder : levée d'erreur pour indiquer que l'exercice doit être implémenté.
*/
function nombreDeVoyelles(phrase) {
  // Exercice non implémenté : doit compter les voyelles
  // Placeholder neutre : retourne 0 pour indiquer non-implémentation
  // Vérifie que l'entrée est une chaîne
  if (typeof phrase !== "string") {
    return 0;
  }

  let n = 0;
  // Convertir la phrase en minuscules pour ignorer la casse
  phrase = phrase.toLowerCase();

  for (let i = 0; i < phrase.length; i++) {
    if (
      phrase[i] === "a" ||
      phrase[i] === "e" ||
      phrase[i] === "i" ||
      phrase[i] === "o" ||
      phrase[i] === "u" ||
      phrase[i] === "y"
    ) {
      n++;
    }
  }

  return n;
}

// Exemple d'utilisation :
console.log(nombreDeVoyelles("kadea"));
console.log(nombreDeVoyelles("Bonjour")); 
console.log(nombreDeVoyelles("123"));
console.log(nombreDeVoyelles("KHB"));

// Ne pas modifier la ligne ci-dessous
module.exports = { nombreDeVoyelles }
