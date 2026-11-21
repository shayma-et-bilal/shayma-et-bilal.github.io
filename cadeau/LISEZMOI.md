# Cadeau surprise : la demande en mariage

Page pour téléphone, à ouvrir avec le QR code. Adresse : https://shayma-et-bilal.github.io/cadeau/

## Déroulé
1. **Code secret** : cadenas en forme de cœur avec un clavier à chiffres.
2. **Photos** : vos photos façon polaroid, à faire glisser.
3. **Lettre** : une enveloppe à toucher, qui s'ouvre sur ta lettre.
4. **Cadeau** : une boîte à toucher plusieurs fois. Elle bouge de plus en plus fort, puis le couvercle s'envole.
5. **Bague** : la bague apparaît avec « Veux-tu m'épouser ? ». Un appui sur « Oui » lance les confettis et ton message.

Chaque action a son bruitage : touches, erreur, ouverture, papier, coups sur la boîte, magie, cloche de la bague, fanfare du oui. Les sons sont fabriqués par le navigateur, il n'y a aucun fichier audio. Le bouton 🔊 en haut à droite coupe le son.

## Remplir le contenu
Tout se règle dans `contenu.js` : le code, l'indice, les prénoms, les photos, la lettre, le nombre d'appuis sur le cadeau, la question, les boutons, le message après le oui et le WhatsApp (optionnel).

Les photos vont dans `photos/`, en .jpg, idéalement moins de 1 Mo chacune.

## QR code
- `qr/qr-coeur.png` : 1080×1080 px, pour imprimer ou envoyer.
- `qr/qr-coeur.svg` : version vectorielle.
- Pour changer l'adresse : `python outils/qr_coeur.py "https://nouvelle-adresse/"`.

## À savoir
- **Ce n'est pas une vraie protection.** Le code bloque l'écran, mais quelqu'un qui lit le code source de la page peut voir le contenu.
- **Le dépôt est public.** Les photos et le texte mis ici sont visibles sur GitHub.
- **Le son.** Sur iPhone en mode silencieux, les bruitages peuvent être coupés. La page demande à Safari de les jouer quand même, mais ça dépend de la version d'iOS. Pour être sûr, désactive le mode silencieux.
