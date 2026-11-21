/*
  ============================================================
  TON CONTENU : c'est le seul fichier à modifier.
  ============================================================
  - Garde les guillemets "..." autour des textes.
  - Une virgule sépare chaque élément d'une liste.
  - Photos : mets tes fichiers dans le dossier photos/ puis écris leur nom ici.
  - Chanson : mets un fichier .mp3 dans musique/ OU colle un lien (Spotify, YouTube...).
*/
window.CADEAU = {
  // Le code secret à taper (4 à 6 chiffres)
  code: "1402",

  // Petite phrase affichée sous le cadenas (laisse "" pour ne rien afficher)
  indice: "Indice : notre date à nous (JJMM)",

  // À qui est destiné le cadeau, et de qui il vient
  pour: "Mon amour",
  de: "Moi",

  // Le titre qui apparaît après l'ouverture
  titre: "Une petite surprise, rien que pour toi",

  // Tes photos (exemples à remplacer)
  photos: [
    { src: "photos/exemple-1.svg", legende: "Notre premier souvenir" },
    { src: "photos/exemple-2.svg", legende: "Ce jour-là, j'ai su" },
    { src: "photos/exemple-3.svg", legende: "Et ce n'est que le début" }
  ],

  // Votre chanson
  chanson: {
    fichier: "",          // exemple : "musique/notre-chanson.mp3"
    lien: "",             // exemple : "https://open.spotify.com/track/..."
    titre: "Titre de notre chanson",
    artiste: "Artiste"
  },

  // La lettre : un texte par paragraphe
  lettre: [
    "Ici, tu écriras ta lettre.",
    "Chaque texte entre guillemets devient un nouveau paragraphe.",
    "Écris avec ton cœur, c'est tout ce qui compte."
  ],
  signature: "Je t'aime",

  // Le message de la fin
  fin: "Merci d'exister."
};
