/*
  ============================================================
  TON CONTENU : c'est le seul fichier à modifier.
  ============================================================
  - Garde les guillemets "..." autour des textes.
  - Une virgule sépare chaque élément d'une liste.
  - Photos : mets tes fichiers dans le dossier photos/ puis écris leur nom ici.
*/
window.CADEAU = {
  // 0. Le premier écran, dès qu'elle scanne le QR code : les mots forment un cœur
  intro: {
    centre: "ma paix",
    mots: [
      "mon monde",
      "celle qui touche mon âme",
      "celle qui apaise mon âme",
      "ma princesse",
      "Qamary",
      "celle que mon âme aime",
      "celle qui fait battre mon cœur",
      "tes yeux sont mes bijoux dans cette dunya",
      "tu es ma lune et tes yeux des étoiles",
      "tu es mon soleil",
      "mon amour",
      "mon puzzle",
      "ma chérie",
      "ma SHIMA",
      "mon bébé",
      "la plus belle du monde",
      "la plus intelligente",
      "la plus gentille",
      "la plus cultivée",
      "la plus sincère",
      "la plus juste",
      "la plus marrante",
      "la plus folle",
      "la plus douce",
      "la plus marocaine"
    ],
    bouton: "Continuer"
  },

  // 1. Le code secret à taper (4 à 6 chiffres)
  code: "1704",
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
  oui: "Oui",
  // Le texte du bouton « Non » change à chaque appui (un texte par appui)
  non: ["Non", "Tu es sûre ?", "Vraiment ?", "Réfléchis bien…", "Dernière chance !"],
  essaisNon: 5,      // à chaque « Non », le bouton fuit et rapetisse, « Oui » grossit ; au 5e, « Non » disparaît
  apresOui: "Tu viens de faire de moi l'homme le plus heureux du monde.",
  // La signature tout à la fin (laisse "" pour ne pas l'afficher)
  finNoms: "Shayma & Bilal",
  finDate: "",       // exemple : "14 février 2027"

  // Optionnel : ton numéro WhatsApp pour qu'elle t'envoie sa réponse.
  // Format international sans + ni espaces, ex. "33612345678". "" = pas de bouton.
  whatsapp: "",
  messageWhatsapp: "OUI 💍"
};
