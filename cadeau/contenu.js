/*
  ============================================================
  TON CONTENU : c'est le seul fichier à modifier.
  ============================================================
  - Garde les guillemets "..." autour des textes.
  - Une virgule sépare chaque élément d'une liste.
  - Photos : mets tes fichiers dans le dossier photos/ puis écris leur nom ici.
*/
window.CADEAU = {
  // 1. Le code secret à taper (4 à 6 chiffres)
  code: "1402",
  indice: "Indice : notre date à nous (JJMM)",   // "" pour ne rien afficher

  // À qui est destiné le cadeau, et de qui il vient
  pour: "Mon amour",
  de: "Moi",

  // 2. Les photos (exemples à remplacer)
  photosTitre: "Nos souvenirs",
  photos: [
    { src: "photos/exemple-1.svg", legende: "Notre premier souvenir" },
    { src: "photos/exemple-2.svg", legende: "Ce jour-là, j'ai su" },
    { src: "photos/exemple-3.svg", legende: "Et ce n'est que le début" }
  ],

  // 3. La lettre : un texte par paragraphe (exemple à remplacer)
  lettre: [
    "Ici, tu écriras ta lettre.",
    "Chaque texte entre guillemets devient un nouveau paragraphe.",
    "Écris avec ton cœur, c'est tout ce qui compte."
  ],
  signature: "Je t'aime",

  // 4. Le cadeau : nombre d'appuis pour l'ouvrir
  cadeauTitre: "Il reste une dernière surprise…",
  appuis: 5,

  // 5. La demande
  question: "Veux-tu m'épouser ?",
  boutons: ["Oui 💍", "Évidemment ❤"],          // les deux veulent dire oui
  apresOui: "Tu viens de faire de moi l'homme le plus heureux du monde.",

  // Optionnel : ton numéro WhatsApp pour qu'elle t'envoie sa réponse.
  // Format international sans + ni espaces, ex. "33612345678". "" = pas de bouton.
  whatsapp: "",
  messageWhatsapp: "OUI 💍"
};
