"""Génère le QR code avec un cœur au centre (SVG + PNG).

Usage :
    pip install segno pillow
    python qr_coeur.py "https://shayma-et-bilal.github.io/cadeau/"

Le niveau de correction d'erreur est H (jusqu'à environ 30 % du code peut
être masqué), ce qui laisse la place au cœur du milieu.
"""
import math
import sys
from pathlib import Path

import segno
from PIL import Image, ImageDraw

URL = sys.argv[1] if len(sys.argv) > 1 else "https://shayma-et-bilal.github.io/cadeau/"
# Types de modules « foncés » fournis par segno, et ceux qu'on ne doit jamais effacer
TYPES_SOMBRES = {getattr(segno.consts, nom) for nom in dir(segno.consts)
                 if nom.startswith("TYPE_") and nom.endswith("_DARK")} | {segno.consts.TYPE_DARKMODULE}
TYPES_PROTEGES = {segno.consts.TYPE_ALIGNMENT_PATTERN_DARK, segno.consts.TYPE_TIMING_DARK}
SORTIE = Path(__file__).resolve().parent.parent / "qr"

ENCRE = "#5c0b2a"      # modules : bordeaux foncé (bon contraste sur blanc)
YEUX = "#b0154f"       # contour des 3 grands carrés
COEUR = "#e8336d"
FOND = "#ffffff"
MARGE = 4              # zone blanche obligatoire autour du code (en modules)
PART_COEUR = 0.25      # largeur de la zone du cœur, en part de la largeur du code


def points_coeur(cx, cy, taille, n=120):
    """Contour d'un cœur (courbe classique), centré en (cx, cy)."""
    pts = []
    for i in range(n):
        t = 2 * math.pi * i / n
        x = 16 * math.sin(t) ** 3
        y = 13 * math.cos(t) - 5 * math.cos(2 * t) - 2 * math.cos(3 * t) - math.cos(4 * t)
        pts.append((x, -y))
    # la courbe va de x∈[-16,16] et y∈[-12,17] : on recentre puis on met à l'échelle
    ys = [p[1] for p in pts]
    decal = (max(ys) + min(ys)) / 2
    k = taille / 34
    return [(cx + x * k, cy + (y - decal) * k) for x, y in pts]


def main():
    qr = segno.make(URL, error="h", micro=False)
    lignes = list(qr.matrix_iter(scale=1, border=0, verbose=True))
    n = len(lignes)

    # Zone centrale libérée pour le cœur (nombre impair de modules)
    zone = int(round(n * PART_COEUR))
    if zone % 2 == 0:
        zone += 1
    debut = (n - zone) // 2
    fin = debut + zone

    def est_oeil(r, c):
        return (r < 7 and c < 7) or (r < 7 and c >= n - 7) or (r >= n - 7 and c < 7)

    def libere(r, c):
        return debut <= r < fin and debut <= c < fin

    total = n + 2 * MARGE
    m = 24                                  # taille d'un module en px pour le PNG
    cote = total * m

    svg = [f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {total} {total}" width="{cote}" height="{cote}">',
           f'<rect width="{total}" height="{total}" fill="{FOND}"/>']
    img = Image.new("RGB", (cote * 2, cote * 2), FOND)   # dessin 2× puis réduction (bords lisses)
    d = ImageDraw.Draw(img)
    s = m * 2

    # Modules ordinaires : petits carrés arrondis
    for r, ligne in enumerate(lignes):
        for c, val in enumerate(ligne):
            if val not in TYPES_SOMBRES or est_oeil(r, c):
                continue
            if libere(r, c) and val not in TYPES_PROTEGES:
                continue
            x, y = c + MARGE, r + MARGE
            svg.append(f'<rect x="{x + .06:.2f}" y="{y + .06:.2f}" width=".88" height=".88" rx=".3" fill="{ENCRE}"/>')
            d.rounded_rectangle([x * s + .06 * s, y * s + .06 * s, (x + .94) * s, (y + .94) * s], radius=.3 * s, fill=ENCRE)

    # Les 3 « yeux » : contour arrondi + pastille centrale
    for (r0, c0) in [(0, 0), (0, n - 7), (n - 7, 0)]:
        x, y = c0 + MARGE, r0 + MARGE
        svg.append(f'<rect x="{x + .5}" y="{y + .5}" width="6" height="6" rx="1.6" fill="none" stroke="{YEUX}" stroke-width="1"/>')
        svg.append(f'<rect x="{x + 2}" y="{y + 2}" width="3" height="3" rx=".9" fill="{ENCRE}"/>')
        d.rounded_rectangle([x * s, y * s, (x + 7) * s, (y + 7) * s], radius=2 * s, fill=YEUX)
        d.rounded_rectangle([(x + 1) * s, (y + 1) * s, (x + 6) * s, (y + 6) * s], radius=1.1 * s, fill=FOND)
        d.rounded_rectangle([(x + 2) * s, (y + 2) * s, (x + 5) * s, (y + 5) * s], radius=.9 * s, fill=ENCRE)

    # Le cœur au centre
    centre = MARGE + n / 2
    taille = zone - 1.2
    pts = points_coeur(centre, centre, taille)
    chemin = "M" + " L".join(f"{x:.3f} {y:.3f}" for x, y in pts) + " Z"
    svg.append(f'<path d="{chemin}" fill="{COEUR}"/>')
    d.polygon([(x * s, y * s) for x, y in pts], fill=COEUR)
    # reflet discret
    reflet = points_coeur(centre - taille * .2, centre - taille * .2, taille * .22)
    svg.append('<path d="M' + " L".join(f"{x:.3f} {y:.3f}" for x, y in reflet) + ' Z" fill="#ffffff" fill-opacity=".35"/>')
    d.polygon([(x * s, y * s) for x, y in reflet], fill="#f7a3bd")

    svg.append("</svg>")
    SORTIE.mkdir(parents=True, exist_ok=True)
    (SORTIE / "qr-coeur.svg").write_text("\n".join(svg), encoding="utf-8")
    img.resize((cote, cote), Image.LANCZOS).save(SORTIE / "qr-coeur.png", optimize=True)
    print(f"URL : {URL}\nVersion QR : {qr.version}-{qr.error} ({n}×{n} modules), zone du cœur : {zone}×{zone}")
    print(f"Fichiers : {SORTIE / 'qr-coeur.svg'} et {SORTIE / 'qr-coeur.png'} ({cote}×{cote} px)")


if __name__ == "__main__":
    main()
