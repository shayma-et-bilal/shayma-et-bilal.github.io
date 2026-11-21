/* =========================================================
   À REMPLIR : les infos de la soirée
   Laisse "" (vide) si tu ne sais pas encore : le site affiche
   « à venir » et cache les boutons qui n'ont pas d'info.
   ========================================================= */
window.CONFIG = {
  date: "",        // ex : "2027-06-12T19:00"  (heure locale, format AAAA-MM-JJTHH:MM)
  lieu: "",        // ex : "Salle Les Jardins d'Agadir"
  adresse: "",     // ex : "12 rue des Roses, 51100 Reims"  (sert au bouton Itinéraire)
  whatsapp: "",    // ex : "33612345678"  (indicatif pays sans le +, sans espaces)
  messageRsvp: "Salam ! Je confirme ma présence aux fiançailles de Shayma & Bilal 🌙",

  // Récitation jouée une fois quand on appuie sur la lune (sourate Al-Fâtiha, Mishary Alafasy).
  // Mets "" pour l'enlever ; la musique ci-dessous (en boucle) serait alors utilisée à la place.
  recitation: "assets/fatiha.mp3",
  musique: "assets/musique.mp3",
  volume: 0.9,     // 0 à 1
};
