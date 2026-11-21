# Cadeau surprise avec code secret

Page web pour téléphone : un cadenas en forme de cœur s'ouvre avec un code. Derrière, il y a des photos, une chanson et une lettre.

Adresse prévue : https://shayma-et-bilal.github.io/cadeau/

## Remplir le contenu
Tout se règle dans `contenu.js` : le code, l'indice, les prénoms, les photos, la chanson et la lettre.

- **Photos** : ajoute-les dans `photos/` (en .jpg, idéalement moins de 1 Mo chacune), puis écris leur nom dans `contenu.js`.
- **Chanson** : ajoute un `.mp3` dans `musique/` (il se lance dès que le code est bon), ou colle un lien Spotify ou YouTube.

## QR code
- `qr/qr-coeur.png` : 1080×1080 px, pour imprimer ou envoyer.
- `qr/qr-coeur.svg` : version vectorielle, nette à toutes les tailles.
- Pour changer l'adresse : `python outils/qr_coeur.py "https://nouvelle-adresse/"`.

## À savoir
- **Ce n'est pas une vraie protection.** Le code bloque l'écran, mais quelqu'un qui lit le code source de la page peut voir le contenu.
- **Le dépôt est public.** Les photos et le texte mis ici sont visibles sur GitHub. N'y mets rien de trop privé.
- **Droits de la musique.** Un mp3 du commerce publié sur un site public pose une question de droits d'auteur. Le lien Spotify ou YouTube évite ce problème.
