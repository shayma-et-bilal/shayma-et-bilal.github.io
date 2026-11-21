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

  // Musique de fond : dépose ton fichier audio ici (mp3 ou m4a).
  // Si le fichier n'existe pas, le bouton son est simplement masqué.
  musique: "assets/musique.mp3",
  volume: 0.55,    // 0 à 1
};
