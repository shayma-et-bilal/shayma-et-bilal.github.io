# Cadeau surprise : la demande en mariage

Page pour téléphone, à ouvrir avec le QR code. Adresse : https://shayma-et-bilal.github.io/cadeau/

## Déroulé
0. **Les mots en cœur** (premier écran, dès le scan) : le contour d'un cœur se dessine, puis tes mots doux le remplissent phrase par phrase. « ma paix » s'allume au centre et le cœur se met à battre. Un toucher affiche tout d'un coup, puis le bouton « Continuer » mène au code. Les phrases se règlent dans `contenu.js` (`intro`). La mise en page s'adapte toute seule à la longueur du texte et à la taille de l'écran.
1. **Code secret** : cadenas en forme de cœur avec un clavier à chiffres.
2. **Photos** : vos photos façon polaroid, à faire glisser.
3. **Lettre** : une enveloppe à toucher, qui s'ouvre sur ta lettre.
4. **Cadeau en 3D** : une boîte à toucher plusieurs fois. À chaque appui, elle s'écrase et rebondit, le couvercle saute et une lumière filtre de l'intérieur. Au dernier appui, la boîte se tasse, le couvercle s'envole, une onde de choc part, un faisceau de lumière jaillit avec des étincelles et des cœurs.
5. **Bague en 3D** : la bague (or et diamant) sort de la boîte en tournant. La caméra la suit vers le haut pendant que la boîte quitte l'image. Un éclat traverse le diamant, puis « Veux-tu m'épouser ? » apparaît avec **Oui** et **Non**. À chaque « Non », le bouton saute ailleurs sur l'écran (jamais sur la question ni sur « Oui »), rapetisse et change de texte (« Tu es sûre ? », « Vraiment ? », « Réfléchis bien… », « Dernière chance ! »), pendant que « Oui » grossit et se met à pulser. Au 5e « Non », le bouton disparaît (réglable avec `essaisNon` dans `contenu.js`). Au « Oui », la bague fait deux tours et lance cœurs, étincelles et confettis. Le message « Tu as dit oui » s'affiche, puis laisse place au verset (Sourate An-Naba, 78:8) et à la signature « Shayma & Bilal ».

Sans WebGL (très vieux téléphone), la page affiche automatiquement la version 2D du cadeau.

## Scène 3D (pour modifier l'animation)
Le code source est dans `src/cadeau3d.js` (Three.js et GSAP). Après une modification, recompile depuis la racine du dépôt avec `npm install` puis `npm run build:cadeau`. Ça génère `dist/cadeau3d.js`.

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

## Sources
- Verset : Sourate An-Naba (78), verset 8. Texte arabe (écriture uthmani) et traduction française de Muhammad Hamidullah récupérés sur l'API de quran.com (traduction n° 31). C'est la même source que le site d'invitation. Le texte s'affiche en police Amiri Quran.
