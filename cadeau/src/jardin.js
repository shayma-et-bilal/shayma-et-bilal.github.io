/*
  Jardin de nuit : premier écran de la demande.
  Les fleurs poussent l'une après l'autre ; chaque éclosion révèle une phrase.
  À la fin, une grande pivoine s'ouvre au centre et « ma paix » s'écrit.
  Tout est dessiné à la volée (SVG + CSS), animé avec GSAP. Aucun fichier externe.

  Compilé dans cadeau/dist/jardin.js (depuis la racine du dépôt) :
    npx esbuild cadeau/src/jardin.js --bundle --minify --format=esm --target=es2020 --outfile=cadeau/dist/jardin.js

  API :
    const j = creerJardin(conteneur, { phrases, centre, reduit, onFin });
    j.lancer(); j.toutMontrer(); j.detruire();
*/
import gsap from 'gsap';

const NS = 'http://www.w3.org/2000/svg';
const TAU = Math.PI * 2;
const DEG = Math.PI / 180;
const clamp = (v, a, b) => (v < a ? a : v > b ? b : v);
const lerp = (a, b, t) => a + (b - a) * t;
const n1 = (v) => Math.round(v * 10) / 10;
const n2 = (v) => Math.round(v * 100) / 100;
const n3 = (v) => Math.round(v * 1000) / 1000;

// Hasard reproductible (même écran → même jardin)
function alea(graine) {
  let a = graine >>> 0 || 1;
  return () => {
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

// Courbes de mouvement calculées au rendu (feuilles, pétales)
const sortieRetour = (t, s = 1.7) => {
  if (t <= 0) return 0;
  if (t >= 1) return 1;
  const u = t - 1;
  return 1 + u * u * ((s + 1) * u + s);
};
const ressort = (() => {
  const k = 6, w = 8.6, n = 1 - Math.exp(-k) * Math.cos(w);
  return (t) => (t <= 0 ? 0 : t >= 1 ? 1 : (1 - Math.exp(-k * t) * Math.cos(w * t)) / n);
})();
const douce = (t) => (t <= 0 ? 0 : t >= 1 ? 1 : t * t * (3 - 2 * t));

/* ------------------------------------------------------------------ */
/*  Palette                                                            */
/* ------------------------------------------------------------------ */
// Dégradés de pétale : base → milieu → pointe (effet lavis)
const DEGRADES = {
  ivoire: ['#d7b0a3', '#eee0d1', '#fbf7f1'],
  blush: ['#b46f78', '#e1b6ac', '#f6e4dc'],
  rose: ['#6c2433', '#b8757d', '#e7c3ba'],
  vin: ['#2b0c14', '#6a2332', '#a5525f'],
  or: ['#8a6634', '#d3b077', '#f2e3c2'],
  lune: ['#b9a27a', '#ebe2d1', '#fffdf8'],
  mauve: ['#4a3149', '#856381', '#c4a6ba'],
  creme: ['#c9a58c', '#ead8c4', '#f8efe4'],
};
const COUPE = { ivoire: 'creme', lune: 'creme', blush: 'blush', rose: 'rose', vin: 'vin', or: 'or', mauve: 'mauve' };
const FONCE = { blush: 'rose', rose: 'vin', vin: 'vin', ivoire: 'blush', lune: 'ivoire', or: 'or', mauve: 'mauve' };

// Fleur de chaque phrase : [espèce, couleur, taille]
const FLEURS = [
  ['rose', 'rose', 1.14], // mon monde
  ['anemone', 'ivoire', 1], // celle qui touche mon âme
  ['lys', 'ivoire', 1], // celle qui apaise mon âme
  ['pivoine', 'blush', 1.04], // ma princesse
  ['anemone', 'lune', 1.06], // Qamary
  ['tulipe', 'blush', 1], // celle que mon âme aime
  ['rose', 'vin', 1], // celle qui fait battre mon cœur
  ['anemone', 'blush', 1], // tes yeux sont mes bijoux…
  ['gypso', 'ivoire', 1], // tu es ma lune et tes yeux des étoiles
  ['cosmos', 'or', 1], // tu es mon soleil
  ['pivoine', 'rose', 1.04], // mon amour
  ['marguerite', 'ivoire', 1], // mon puzzle
  ['tulipe', 'vin', 1], // ma chérie
  ['rose', 'ivoire', 1.06], // ma SHIMA
  ['baies', 'vin', 1], // mon bébé
  ['lys', 'blush', 1], // la plus belle du monde
  ['anemone', 'vin', 1], // la plus intelligente
  ['cosmos', 'ivoire', 1], // la plus gentille
  ['tulipe', 'rose', 1], // la plus cultivée
  ['marguerite', 'blush', 1], // la plus sincère
  ['lavande', 'mauve', 1], // la plus juste
  ['cosmos', 'blush', 1], // la plus marrante
  ['anemone', 'rose', 1], // la plus folle
  ['pivoine', 'blush', 1], // la plus douce
  ['rose', 'rose', 1.04], // la plus marocaine (rose de Damas)
];
// Rayon de la corolle (px à 390 de large)
const RAYON = { rose: 17, pivoine: 19, anemone: 15.5, cosmos: 14.5, marguerite: 13, lys: 17, tulipe: 14.5, gypso: 17, lavande: 14, baies: 13.5 };
// Décalage entre le point d'attache de la tige et le centre de la corolle (× rayon)
const ATTACHE = { rose: 0, pivoine: 0, anemone: 0, cosmos: 0, marguerite: 0, tulipe: 0.78, lys: 0.5, gypso: 0.6, lavande: 0.9, baies: 0.62 };
// Écrasement vertical (vue de trois quarts)
const ECRASE = { rose: 0.86, pivoine: 0.9, anemone: 0.92, cosmos: 0.9, marguerite: 0.88 };

const estSurnom = (t) => /^\p{Lu}\p{Ll}+$/u.test(t.trim()) || /\p{Lu}{3,}/u.test(t);

/* ------------------------------------------------------------------ */
/*  Style injecté                                                      */
/* ------------------------------------------------------------------ */
const STYLE_ID = 'jardin-style';
const CSS = `
.jardin{position:absolute;top:0;left:0;right:0;bottom:0;overflow:hidden;pointer-events:none;-webkit-user-select:none;user-select:none;contain:layout paint}
.jardin>svg{position:absolute;left:0;top:0;display:block;overflow:visible}
.jardin .j-scene{will-change:opacity}
.jardin .j-amb{position:absolute;opacity:0;pointer-events:none;will-change:opacity;background:radial-gradient(closest-side,rgba(224,191,134,.2),rgba(201,138,143,.07) 48%,rgba(201,138,143,0) 100%)}
.jardin .j-mots{position:absolute;top:0;left:0;right:0;bottom:0;will-change:opacity}
.jardin .j-mot{position:absolute;margin:0;padding:0;white-space:nowrap;font-family:"Cormorant Garamond",Cormorant,Garamond,Georgia,serif;font-style:italic;font-weight:500;line-height:1.15;color:#f4ece1;letter-spacing:.012em;opacity:0;font-kerning:normal;text-rendering:optimizeLegibility;will-change:opacity,transform}
.jardin .j-mot.j-or{color:#dcbd86;font-weight:600;letter-spacing:.03em}
.jardin .j-paix{position:absolute;margin:0;padding:.32em .5em;white-space:nowrap;font-family:"Great Vibes","Cormorant Garamond",cursive;font-weight:400;line-height:1;color:#f8f1e7;opacity:0;--m:0;will-change:opacity,transform;-webkit-mask-image:linear-gradient(100deg,#000 calc(var(--m) * 135% - 35%),transparent calc(var(--m) * 135%));mask-image:linear-gradient(100deg,#000 calc(var(--m) * 135% - 35%),transparent calc(var(--m) * 135%))}
.jardin .j-paix.j-nu{-webkit-mask-image:none;mask-image:none}
.jardin .jt{fill:none;stroke:url(#jg-tige);stroke-linecap:round}
.jardin .jf{fill:url(#jg-feuille);stroke:#a3b49e;stroke-opacity:.26;stroke-width:.5}
.jardin .je{fill:url(#jg-euca);stroke:#c8d3c2;stroke-opacity:.22;stroke-width:.45}
.jardin .jp{stroke:#dfc28c;stroke-width:.4;stroke-opacity:.4;fill-opacity:.9;stroke-linejoin:round;stroke-linecap:round}
.jardin .jp.jo{stroke-width:.5;stroke-opacity:.66}
`;
let instances = 0;
function injecterStyle() {
  if (document.getElementById(STYLE_ID)) return;
  const s = document.createElement('style');
  s.id = STYLE_ID;
  s.textContent = CSS;
  document.head.appendChild(s);
}

/* ------------------------------------------------------------------ */
/*  Outils SVG et formes                                               */
/* ------------------------------------------------------------------ */
function el(tag, attrs, parent) {
  const e = document.createElementNS(NS, tag);
  if (attrs) for (const k in attrs) e.setAttribute(k, attrs[k]);
  if (parent) parent.appendChild(e);
  return e;
}

// Pétale dessiné vers le haut, base en (0,0), pointe en (0,-l)
function petale(forme, l, w, a = 1, rng = null) {
  const J = (v) => v * (rng ? 1 + (rng() - 0.5) * 0.14 : 1);
  const P = (x, y) => `${n1(J(x))} ${n1(J(y))}`;
  switch (forme) {
    case 'volant':
      return `M0 0C${P(w * 0.5, -l * 0.05)} ${P(w * 1.02 * a, -l * 0.4)} ${P(w * 0.88 * a, -l * 0.72)}Q${P(w * 0.72, -l * 1.02)} ${P(w * 0.36, -l * 0.9)}Q${P(w * 0.04, -l * 1.06)} ${P(-w * 0.3, -l * 0.91)}Q${P(-w * 0.68, -l * 1.01)} ${P(-w * 0.88 / a, -l * 0.7)}C${P(-w * 1.02 / a, -l * 0.4)} ${P(-w * 0.5, -l * 0.05)} 0 0Z`;
    case 'dent':
      return `M0 0C${P(w * 0.36, -l * 0.1)} ${P(w * 1.0, -l * 0.46)} ${P(w * 0.92, -l * 0.82)}C${P(w * 0.88, -l * 0.97)} ${P(w * 0.6, -l * 1.0)} ${P(w * 0.42, -l * 0.98)}L${P(w * 0.2, -l * 0.9)}L${P(0, -l * 0.99)}L${P(-w * 0.2, -l * 0.9)}L${P(-w * 0.42, -l * 0.98)}C${P(-w * 0.6, -l * 1.0)} ${P(-w * 0.88, -l * 0.97)} ${P(-w * 0.92, -l * 0.82)}C${P(-w * 1.0, -l * 0.46)} ${P(-w * 0.36, -l * 0.1)} 0 0Z`;
    case 'pointe':
      return `M0 0C${P(w * 0.8, -l * 0.14)} ${P(w * 1.02, -l * 0.56)} ${P(w * 0.12 * a, -l)}C${P(-w * 0.95, -l * 0.58)} ${P(-w * 0.78, -l * 0.14)} 0 0Z`;
    case 'fin':
      return `M0 0C${P(w * 0.62, -l * 0.22)} ${P(w * 0.58, -l * 0.84)} ${P(0, -l)}C${P(-w * 0.58, -l * 0.84)} ${P(-w * 0.62, -l * 0.22)} 0 0Z`;
    default:
      return `M0 0C${P(w * 0.52, -l * 0.05)} ${P(w * 1.04 * a, -l * 0.42)} ${P(w * 0.86 * a, -l * 0.75)}C${P(w * 0.64, -l * 1.03)} ${P(-w * 0.64, -l * 1.03)} ${P(-w * 0.86 / a, -l * 0.75)}C${P(-w * 1.04 / a, -l * 0.42)} ${P(-w * 0.52, -l * 0.05)} 0 0Z`;
  }
}
// nervures fines (tracé aller-retour : aucune surface, seulement le trait)
const trait = (x0, y0, cx, cy, x1, y1) => `M${n1(x0)} ${n1(y0)}Q${n1(cx)} ${n1(cy)} ${n1(x1)} ${n1(y1)}Q${n1(cx)} ${n1(cy)} ${n1(x0)} ${n1(y0)}`;
const nervure = (l, w, n = 1) => {
  let d = trait(0, -l * 0.08, w * 0.1, -l * 0.45, 0, -l * 0.76);
  if (n >= 3) d += trait(w * 0.06, -l * 0.12, w * 0.4, -l * 0.34, w * 0.44, -l * 0.62) + trait(-w * 0.06, -l * 0.12, -w * 0.4, -l * 0.34, -w * 0.44, -l * 0.62);
  return d;
};
const feuille = (l, w) =>
  `M0 0C${n1(w * 0.7)} ${n1(-l * 0.18)} ${n1(w * 0.82)} ${n1(-l * 0.66)} 0 ${n1(-l)}C${n1(-w * 0.62)} ${n1(-l * 0.7)} ${n1(-w * 0.72)} ${n1(-l * 0.2)} 0 0Z` + trait(0, -l * 0.04, w * 0.08, -l * 0.5, 0, -l * 0.9);
const feuilleRonde = (r) =>
  `M0 0C${n1(r * 0.95)} ${n1(-r * 0.05)} ${n1(r * 1.1)} ${n1(-r * 1.75)} 0 ${n1(-r * 1.9)}C${n1(-r * 1.1)} ${n1(-r * 1.75)} ${n1(-r * 0.95)} ${n1(-r * 0.05)} 0 0Z`;
// Petits disques regroupés dans un seul chemin (étamines, fleurettes, baies)
const disque = (x, y, r) => `M${n1(x - r)} ${n1(y)}a${n2(r)} ${n2(r)} 0 1 0 ${n2(2 * r)} 0a${n2(r)} ${n2(r)} 0 1 0 ${n2(-2 * r)} 0`;
const ovale = (x, y, rx, ry, rot) => {
  const c = Math.cos(rot * DEG), s = Math.sin(rot * DEG);
  const x0 = x - rx * c, y0 = y - rx * s;
  return `M${n1(x0)} ${n1(y0)}a${n2(rx)} ${n2(ry)} ${n1(rot)} 1 0 ${n2(2 * rx * c)} ${n2(2 * rx * s)}a${n2(rx)} ${n2(ry)} ${n1(rot)} 1 0 ${n2(-2 * rx * c)} ${n2(-2 * rx * s)}`;
};
// Sépales : petites pointes vertes autour de la base du bouton
function sepales(r, n, ecart) {
  let d = '';
  for (let k = 0; k < n; k++) {
    const a = (-ecart / 2 + (ecart * k) / Math.max(1, n - 1)) * DEG;
    const rot = (x, y) => `${n1(x * Math.cos(a) - y * Math.sin(a))} ${n1(x * Math.sin(a) + y * Math.cos(a))}`;
    d += `M${rot(-r * 0.16, 0)}Q${rot(-r * 0.2, -r * 0.5)} ${rot(0, -r)}Q${rot(r * 0.2, -r * 0.5)} ${rot(r * 0.16, 0)}Z`;
  }
  return d;
}

// Courbe de Bézier cubique échantillonnée (longueur, points, tangentes)
function courbe(P0, P1, P2, P3, n = 36) {
  const pts = [];
  let L = 0, px = P0[0], py = P0[1];
  for (let i = 0; i <= n; i++) {
    const t = i / n, m = 1 - t;
    const x = m * m * m * P0[0] + 3 * m * m * t * P1[0] + 3 * m * t * t * P2[0] + t * t * t * P3[0];
    const y = m * m * m * P0[1] + 3 * m * m * t * P1[1] + 3 * m * t * t * P2[1] + t * t * t * P3[1];
    if (i) L += Math.hypot(x - px, y - py);
    pts.push({ x, y, s: L });
    px = x; py = y;
  }
  for (const p of pts) p.u = L ? p.s / L : 0;
  return { P0, P1, P2, P3, pts, L, d: `M${n1(P0[0])} ${n1(P0[1])}C${n1(P1[0])} ${n1(P1[1])} ${n1(P2[0])} ${n1(P2[1])} ${n1(P3[0])} ${n1(P3[1])}` };
}
function surCourbe(c, u) {
  const pts = c.pts;
  u = clamp(u, 0, 1);
  let lo = 0, hi = pts.length - 1;
  while (hi - lo > 1) {
    const mid = (lo + hi) >> 1;
    if (pts[mid].u < u) lo = mid; else hi = mid;
  }
  const a = pts[lo], b = pts[hi];
  const f = b.u > a.u ? (u - a.u) / (b.u - a.u) : 0;
  const dx = b.x - a.x, dy = b.y - a.y;
  return { x: lerp(a.x, b.x, f), y: lerp(a.y, b.y, f), ang: Math.atan2(dx, -dy) / DEG };
}

/* ------------------------------------------------------------------ */
/*  Géométrie de mise en page                                          */
/* ------------------------------------------------------------------ */
const distRectPt = (r, x, y) => {
  const dx = Math.max(r.x - x, 0, x - (r.x + r.w));
  const dy = Math.max(r.y - y, 0, y - (r.y + r.h));
  return Math.sqrt(dx * dx + dy * dy);
};
// distance au carré (comparaisons rapides)
const d2RectPt = (r, x, y) => {
  const dx = Math.max(r.x - x, 0, x - (r.x + r.w));
  const dy = Math.max(r.y - y, 0, y - (r.y + r.h));
  return dx * dx + dy * dy;
};
const d2 = (ax, ay, bx, by) => (ax - bx) * (ax - bx) + (ay - by) * (ay - by);
const rectsSeCoupent = (a, b, gx, gy) => a.x - gx < b.x + b.w && a.x + a.w + gx > b.x && a.y - gy < b.y + b.h && a.y + a.h + gy > b.y;
const ecartRects = (a, b) => {
  const dx = Math.max(a.x - (b.x + b.w), b.x - (a.x + a.w), 0);
  const dy = Math.max(a.y - (b.y + b.h), b.y - (a.y + a.h), 0);
  return Math.sqrt(dx * dx + dy * dy);
};

function creerMesureur() {
  const ctx = document.createElement('canvas').getContext('2d');
  return {
    texte(t, fs, poids) {
      ctx.font = `italic ${poids} ${fs}px "Cormorant Garamond", Georgia, serif`;
      return ctx.measureText(t).width;
    },
    paix(t, fs) {
      ctx.font = `400 ${fs}px "Great Vibes", cursive`;
      const m = ctx.measureText(t);
      const aL = m.actualBoundingBoxLeft ?? 0, aR = m.actualBoundingBoxRight ?? m.width;
      return {
        av: m.width, aL, aR,
        asc: m.actualBoundingBoxAscent ?? fs * 0.6, desc: m.actualBoundingBoxDescent ?? fs * 0.3,
        fA: m.fontBoundingBoxAscent ?? fs * 0.95, fD: m.fontBoundingBoxDescent ?? fs * 0.45,
      };
    },
  };
}

function sousBezier(P, t0, t1) {
  const m = (a, b, t) => [a[0] + (b[0] - a[0]) * t, a[1] + (b[1] - a[1]) * t];
  const cut = (p, t) => {
    const a = m(p[0], p[1], t), b = m(p[1], p[2], t), c = m(p[2], p[3], t);
    const d = m(a, b, t), e = m(b, c, t), f = m(d, e, t);
    return [[p[0], a, d, f], [f, e, c, p[3]]];
  };
  const L = t1 >= 1 ? P : cut(P, t1)[0];
  return t0 <= 0 ? L : cut(L, t0 / t1)[1];
}

// Découpe une tige en tronçons : ceux qui passent derrière une phrase s'effaceront quand elle apparaîtra
// (comme une tige qui passe sous l'étiquette d'une planche botanique)
function segmentsTige(c, caches, pad) {
  const pts = c.pts;
  const n = pts.length - 1;
  const etiq = new Array(pts.length).fill(-2);
  for (let i = 0; i <= n; i++) {
    const p = pts[i];
    for (const { R, id } of caches) if (p.x > R.x - pad && p.x < R.x + R.w + pad && p.y > R.y - pad && p.y < R.y + R.h + pad) { etiq[i] = id; break; }
  }
  const morceaux = [];
  let debut = 0;
  for (let i = 1; i <= n; i++) {
    if (etiq[i] !== etiq[debut] || i === n) {
      const fin = i === n && etiq[i] === etiq[debut] ? n : i;
      morceaux.push({ a: pts[debut].u, b: pts[fin].u, id: etiq[debut] });
      debut = i;
    }
  }
  if (debut < n) morceaux.push({ a: pts[debut].u, b: 1, id: etiq[debut] });
  const uVersT = (uu) => {
    for (let i = 1; i <= n; i++) if (pts[i].u >= uu) { const a = pts[i - 1], b = pts[i]; return (i - 1 + (b.u > a.u ? (uu - a.u) / (b.u - a.u) : 0)) / n; }
    return 1;
  };
  const P = [c.P0, c.P1, c.P2, c.P3];
  return morceaux.filter((m) => m.b > m.a).map(({ a, b, id }) => {
    const q = sousBezier(P, uVersT(a), uVersT(b));
    return { u0: a, u1: b, L: (b - a) * c.L, cache: id, d: `M${n1(q[0][0])} ${n1(q[0][1])}C${n1(q[1][0])} ${n1(q[1][1])} ${n1(q[2][0])} ${n1(q[2][1])} ${n1(q[3][0])} ${n1(q[3][1])}` };
  });
}

function miseEnPage(W, H, phrases, centre, mesure) {
  const col = Math.min(W, 480), X0 = (W - col) / 2, k = col / 390, kb = clamp(k, 0.84, 1.16);
  const fs0 = clamp(col * 0.0395, 13, 17.5);
  const marge = clamp(col * 0.032, 9, 18);
  const reg = { x0: X0 + marge, x1: X0 + col - marge, y0: clamp(H * 0.022, 12, 22), y1: H - 128 };
  const span = reg.y1 - reg.y0;
  const son = { x: W * 0.5, y: 0, w: W, h: 66 };
  const cx = W / 2;

  // compact : écrans très bas (ex. 320×460) → échelle typographique resserrée, centre plus petit
  const geometrie = (compact) => {
    /* --- Le centre : « ma paix » et sa pivoine --- */
    const fsP = clamp(col * 0.1313, 40, 62) * [1, 0.88, 0.8][compact];
    const mp = mesure.paix(centre, fsP);
    const gw = mp.aL + mp.aR, gh = mp.asc + mp.desc;
    const yP = reg.y0 + span * (compact ? 0.5 : 0.53); // centre du mot
    const Rc = clamp(col * 0.12, 36, 58) * [1, 0.78, 0.66][compact];
    const cyB = yP - gh / 2 - 1 - Rc * 0.86;
    const paixR = { x: cx - gw / 2 - 10, y: yP - gh / 2 - 6, w: gw + 20, h: gh + 12 };
    const centreB = { x: cx, y: cyB, r: Rc * 1.04 + 6 };
    const padX = fsP * 0.5, padY = fsP * 0.32;
    const baseDansBoite = (fsP - (mp.fA + mp.fD)) / 2 + mp.fA;
    const paix = {
      fs: fsP,
      left: cx - (mp.aR - mp.aL) / 2 - padX,
      top: yP - (baseDansBoite - mp.asc + baseDansBoite + mp.desc) / 2 - padY,
      rect: { x: cx - gw / 2, y: yP - gh / 2, w: gw, h: gh },
    };

    /* --- Les phrases : tailles, coupures en deux lignes --- */
    const echelle = [[1, 1.12, 1.26], [1, 1.05, 1.1], [1, 1, 1.05]][compact];
    const mots = phrases.map((t, i) => {
      const or = estSurnom(t);
      const tier = i === 0 || or ? 2 : t.length <= 12 ? 1 : 0;
      const fs = n2(fs0 * echelle[tier]);
      const poids = or ? 600 : 500;
      const ls = or ? 0.03 : 0.012;
      const mes = (s) => mesure.texte(s, fs, poids) + s.length * ls * fs;
      const w1 = mes(t);
      const lh = fs * 1.15;
      const vars = [];
      if (w1 <= col * (compact ? 0.58 : 0.5)) vars.push({ lignes: [t], w: w1 + fs * 0.2, h: lh });
      const m = t.split(' ');
      if (m.length >= 3 && (w1 > fs * 6.5 || compact === 2)) {
        let best = null;
        for (let j = 1; j < m.length; j++) {
          const a = m.slice(0, j).join(' '), b = m.slice(j).join(' ');
          const wa = mes(a), wb = mes(b);
          const sc = Math.max(wa, wb) + Math.abs(wa - wb) * 0.2;
          if (!best || sc < best.sc) best = { sc, lignes: [a, b], w: Math.max(wa, wb) };
        }
        vars.push({ lignes: best.lignes, w: best.w + fs * 0.2, h: lh * 2 });
      }
      if (!vars.length) vars.push({ lignes: [t], w: w1 + fs * 0.2, h: lh });
      const [type, couleur, taille] = FLEURS[i % FLEURS.length];
      return { i, t, or, tier, fs, poids, vars, type, couleur, r0: RAYON[type] * kb * taille * [1, 0.85, 0.74][compact], repos: or ? 0.8 : tier === 2 ? 0.72 : tier === 1 ? 0.64 : 0.58 };
    });

    /* --- Cibles : remplissage du bas vers le haut, proportionnel à la place libre --- */
    const pas = 4;
    const profil = [];
    let cumul = 0;
    for (let y = reg.y1; y >= reg.y0; y -= pas) {
      let libre = reg.x1 - reg.x0;
      const dy = Math.abs(y - centreB.y);
      if (dy < centreB.r + 14) libre -= 2 * Math.sqrt((centreB.r + 14) ** 2 - dy * dy) + 30;
      if (y > paixR.y - 10 && y < paixR.y + paixR.h + 10) libre -= paixR.w + 30;
      if (y < son.h) libre -= reg.x1 - son.x;
      cumul += Math.max(0, libre) * pas;
      profil.push({ y, c: cumul });
    }
    const aire = mots.map((m) => {
      const v = m.vars[m.vars.length - 1];
      return (v.w + 2 * m.r0 + 30) * (Math.max(v.h, 1.6 * m.r0) + 14);
    });
    const ordre = mots.map((m) => m.i);
    if (ordre.length > 3) ordre.splice(0, 3, 1, 0, 2); // la première fleur un peu plus haut, plus visible
    const totalAire = aire.reduce((a, b) => a + b, 0);
    const densite = totalAire / cumul;
    const cible = [];
    let acc = 0;
    for (const i of ordre) {
      const f = 0.015 + 0.96 * ((acc + aire[i] / 2) / totalAire);
      acc += aire[i];
      const c = f * cumul;
      let y = reg.y0;
      for (const p of profil) if (p.c >= c) { y = p.y; break; }
      cible[i] = y;
    }
    return { fsP, Rc, cyB, paixR, centreB, paix, mots, cible, densite, compact };
  };
  let GEO = geometrie(0);
  if (GEO.densite > 1.25) GEO = geometrie(1);
  let { Rc, cyB, paixR, centreB, paix, mots, cible, densite } = GEO;
  const bandeC = { x: cx - 6, y: 0, w: 12, h: H };
  const RELS = [['d', 0], ['d', -0.32], ['d', 0.32], ['g', 0], ['g', -0.32], ['g', 0.32], ['h', 0]];

  /* --- Placement glouton avec score ; si ça coince, on resserre et on recommence --- */
  function tenter(pf, rf) {
    const rng = alea(W * 7919 + H * 131 + phrases.length * 17);
    const placesM = [], placesF = [], tiges = [], ratees = [];
    bandeC.y = paixR.y + paixR.h; bandeC.h = H - bandeC.y;
    const gB = (fs) => (5 + fs * 0.26) * Math.min(1, pf + 0.15);
    const rectOK = (R, i, relax) => {
      if (R.x < reg.x0 || R.x + R.w > reg.x1 || R.y < reg.y0 || R.y + R.h > reg.y1) return false;
      if (rectsSeCoupent(R, son, 0, 0)) return false;
      if (rectsSeCoupent(R, paixR, 10 * relax, 6 * relax)) return false;
      if (d2RectPt(R, centreB.x, centreB.y) < (centreB.r + 6 * relax) ** 2) return false;
      const fs = mots[i].fs;
      const gx = Math.max(10, Math.max(14, fs * 0.95) * relax), gy = Math.max(3.5, Math.max(4, fs * 0.34) * relax);
      for (const q of placesM) if (rectsSeCoupent(R, q.R, gx, gy)) return false;
      for (const f of placesF) { const m = f.r + Math.max(6, 13 * relax); if (d2RectPt(R, f.x, f.y) < m * m) return false; }
      return true;
    };
    const fleurOK = (x, y, r, relax) => {
      if (x - r < X0 + 3 || x + r > X0 + col - 3 || y - r < reg.y0 - 4 || y > reg.y1 + r * 0.4) return false;
      if (d2(x, y, centreB.x, centreB.y) < (centreB.r + r + 6 * relax) ** 2) return false;
      if (d2RectPt(paixR, x, y) < (r + 6 * relax) ** 2) return false;
      if (d2RectPt(son, x, y) < (r + 2) ** 2) return false;
      for (const f of placesF) if (d2(x, y, f.x, f.y) < (f.r + r + 5 * relax) ** 2) return false;
      const mr = (r + Math.max(6, 13 * relax)) ** 2;
      for (const q of placesM) if (d2RectPt(q.R, x, y) < mr) return false;
      return true;
    };
    const vusM = new Uint8Array(64);
    const routerTige = (ax, ay, i, R0) => {
      let best = null;
      // obstacles du couloir (calculés une fois pour toutes les variantes)
      const xa = ax - 120 * kb, xb = ax + 120 * kb;
      const fF = placesF.filter((f) => f.i !== i && f.x > xa - f.r && f.x < xb + f.r && f.y > ay);
      const fM = placesM.filter((q) => q.R.x < xb && q.R.x + q.R.w > xa && q.R.y + q.R.h > ay);
      for (const d of [0, -18, 18, -38, 38, -62, 62]) {
        for (const pli of [0, -24, 24, -46, 46]) {
          let cout = Math.abs(d) * 0.012 + Math.abs(pli) * 0.016;
          if (best && cout >= best.cout) continue;
          const x0 = ax + d * kb, y0 = H + 6, h = y0 - ay;
          const x1 = x0 + pli * 0.35 * kb, y1 = y0 - h * 0.4, x2 = ax + pli * kb, y2 = ay + h * 0.34;
          vusM.fill(0);
          for (let s = 1; s < 14 && (!best || cout < best.cout); s++) {
            const t = s / 14, m = 1 - t;
            const a = m * m * m, b2 = 3 * m * m * t, c3 = 3 * m * t * t, e = t * t * t;
            const x = a * x0 + b2 * x1 + c3 * x2 + e * ax;
            const y = a * y0 + b2 * y1 + c3 * y2 + e * ay;
            if (y < ay + 4) continue;
            if (d2(x, y, centreB.x, centreB.y) < (centreB.r + 4) ** 2) cout += 6;
            if (d2RectPt(paixR, x, y) < 25) cout += 6;
            if (x < X0 - 10 || x > X0 + col + 10) cout += 3;
            for (let k = 0; k < fF.length; k++) { const f = fF[k]; if (d2(x, y, f.x, f.y) < (f.r + 3) ** 2) cout += 4; }
            for (let k = 0; k < fM.length; k++) if (!vusM[k] && d2RectPt(fM[k].R, x, y) < 9) { vusM[k] = 1; cout += 1.4; }
            if (R0 && d2RectPt(R0, x, y) < 9) cout += 8;
          }
          if (!best || cout < best.cout) best = { cout, P0: [x0, y0], P1: [x1, y1], P2: [x2, y2], P3: [ax, ay] };
        }
      }
      return best;
    };
    const K = 7;
    // grille d'occupation (centres de cellules) + table de sommes : pré-filtre en O(1), sans faux rejet
    const C = 2, GW = Math.ceil(W / C) + 1, GH = Math.ceil(H / C) + 1;
    const occ = new Uint8Array(GW * GH), S = new Int32Array((GW + 1) * (GH + 1));
    const marquer = (x0, y0, x1, y1, dedans) => {
      const i0 = Math.max(0, Math.ceil((x0 - C / 2) / C)), i1 = Math.min(GW - 1, Math.floor((x1 - C / 2) / C));
      const j0 = Math.max(0, Math.ceil((y0 - C / 2) / C)), j1 = Math.min(GH - 1, Math.floor((y1 - C / 2) / C));
      for (let j = j0; j <= j1; j++) for (let i = i0; i <= i1; i++) if (!dedans || dedans(i * C + C / 2, j * C + C / 2)) occ[j * GW + i] = 1;
    };
    const jMin = Math.max(0, Math.floor(reg.y0 / C) - 2), jMax = Math.min(GH - 1, Math.ceil(reg.y1 / C) + 2);
    const preparerGrille = (gx, gy, pr, relax) => {
      occ.fill(0, jMin * GW, (jMax + 1) * GW);
      for (const q of placesM) marquer(q.R.x - gx, q.R.y - gy, q.R.x + q.R.w + gx, q.R.y + q.R.h + gy);
      for (const f of placesF) { const rr = f.r + pr; marquer(f.x - rr, f.y - rr, f.x + rr, f.y + rr, (x, y) => d2(x, y, f.x, f.y) < rr * rr); }
      const rc = centreB.r + 6 * relax;
      marquer(centreB.x - rc, centreB.y - rc, centreB.x + rc, centreB.y + rc, (x, y) => d2(x, y, centreB.x, centreB.y) < rc * rc);
      marquer(paixR.x - 10 * relax, paixR.y - 6 * relax, paixR.x + paixR.w + 10 * relax, paixR.y + paixR.h + 6 * relax);
      const L = GW + 1;
      for (let j = jMin; j <= jMax; j++) {
        let ligne = 0;
        for (let i = 0; i < GW; i++) { ligne += occ[j * GW + i]; S[(j + 1) * L + i + 1] = S[j * L + i + 1] + ligne; }
      }
    };
    const occupe = (x0, y0, x1, y1) => {
      const i0 = Math.max(0, Math.ceil((x0 - C / 2) / C)), i1 = Math.min(GW - 1, Math.floor((x1 - C / 2) / C));
      const j0 = Math.max(0, Math.ceil((y0 - C / 2) / C)), j1 = Math.min(GH - 1, Math.floor((y1 - C / 2) / C));
      if (i1 < i0 || j1 < j0) return false;
      const L = GW + 1;
      return S[(j1 + 1) * L + i1 + 1] - S[j0 * L + i1 + 1] - S[(j1 + 1) * L + i0] + S[j0 * L + i0] > 0;
    };
    const placer = (m, relax, fenetre) => {
      const i = m.i, r = m.r0 * rf * (relax < 1 ? 0.9 : 1);
      const ty = cible[i];
      const side = i === 0 ? -0.35 : i % 2 ? 1 : -1;
      const tx = cx + side * col * 0.2;
      const off = ATTACHE[m.type] * r;
      const sq = ECRASE[m.type] || 1;
      const stepX = 8 * kb, stepY = 6.5 * kb;
      const rl = relax * pf;
      const g = gB(m.fs);
      const sY = span * 0.075, sX = col * 0.3, E1 = 26 * pf, E2 = 22 * pf;
      preparerGrille(Math.max(10, Math.max(14, m.fs * 0.95) * rl), Math.max(3.5, Math.max(4, m.fs * 0.34) * rl), Math.max(6, 13 * rl), rl);

      // on explore d'abord près de la cible : le seuil du top-K élague vite le reste
      const ys = [], xs = [];
      for (let by = ty - fenetre; by <= ty + fenetre; by += stepY) ys.push(by);
      for (let bx = X0 + r + 4; bx <= X0 + col - r - 4; bx += stepX) xs.push(bx);
      ys.sort((a, b) => Math.abs(a - ty) - Math.abs(b - ty));
      xs.sort((a, b) => Math.abs(a - tx) - Math.abs(b - tx));
      const cacheF = new Int8Array(ys.length * xs.length);
      const top = [];
      let seuil = Infinity;
      for (const v of m.vars) {
        const pv = v.lignes.length === 2 && m.vars.length > 1 ? 0.12 : 0;
        for (let iy = 0; iy < ys.length; iy++) {
          const by = ys[iy];
          for (let ix = 0; ix < xs.length; ix++) {
            const bx = xs[ix];
            for (const [rel, o] of RELS) {
              let Rx, Ry;
              if (rel === 'd') { Rx = bx + r + g; Ry = by - v.h / 2 + o * v.h; }
              else if (rel === 'g') { Rx = bx - r - g - v.w; Ry = by - v.h / 2 + o * v.h; }
              else { Rx = bx - v.w / 2 + o * v.w; Ry = by - r * sq - g * 0.6 - v.h; }
              const ux = (bx + Rx + v.w / 2) / 2, uy = (by + Ry + v.h / 2) / 2;
              const dyc = (uy - ty) / sY;
              let sc = dyc * dyc * (dyc < 0 ? 1.5 : 1) + 0.3 * ((ux - tx) / sX) ** 2 + pv + (rel === 'h' ? 0.25 : 0) + (o ? 0.06 : 0);
              if (sc >= seuil) continue;
              if (Rx < reg.x0 || Rx + v.w > reg.x1 || Ry < reg.y0 || Ry + v.h > reg.y1) continue;
              if (occupe(Rx, Ry, Rx + v.w, Ry + v.h)) continue;
              const R = { x: Rx, y: Ry, w: v.w, h: v.h };
              if (!rectOK(R, i, rl)) continue;
              const cle = iy * xs.length + ix;
              if (!cacheF[cle]) cacheF[cle] = fleurOK(bx, by, r, rl) ? 1 : 2;
              if (cacheF[cle] === 2) continue;
              for (const q of placesM) {
                const e = ecartRects(R, q.R);
                if (e < E1) sc += ((E1 - e) / E1) ** 2 * 0.5;
              }
              for (const f of placesF) {
                const e = Math.sqrt(d2(bx, by, f.x, f.y)) - f.r - r;
                if (e < E2) sc += ((E2 - e) / E2) ** 2 * 0.35;
                const e2 = distRectPt(R, f.x, f.y) - f.r;
                if (e2 < E2) sc += ((E2 - e2) / E2) ** 2 * 0.25;
              }
              if (rectsSeCoupent(R, bandeC, 0, 0)) sc += 0.5;
              if (sc >= seuil) continue;
              let k = top.length;
              while (k > 0 && top[k - 1].sc > sc) k--;
              top.splice(k, 0, { sc, bx, by, R, v, rel });
              if (top.length > K) top.pop();
              if (top.length === K) seuil = top[K - 1].sc;
            }
          }
        }
      }
      if (!top.length) return null;
      let best = null;
      for (const c of top) {
        const t = routerTige(c.bx, c.by + off, i, c.R);
        let cout = c.sc + t.cout * 0.12;
        for (const tg of tiges) {
          let coupe = false;
          for (const p of tg.pts) {
            if (p.y > tg.ay + 6 && d2(p.x, p.y, c.bx, c.by) < (r + 2) ** 2) cout += 0.5;
            if (!coupe && p.x > c.R.x - 2 && p.x < c.R.x + c.R.w + 2 && p.y > c.R.y - 2 && p.y < c.R.y + c.R.h + 2) coupe = true;
          }
          if (coupe) cout += 0.18;
        }
        if (!best || cout < best.cout) best = { ...c, cout, tige: t };
      }
      return { ...best, r };
    };

    const fleurs = [];
    let echecs = 0;
    for (const m of mots) {
      let res = placer(m, 1, span * 0.15);
      if (!res) res = placer(m, 1, span * 0.4);
      if (!res) res = placer(m, 0.8, span);
      if (!res) res = placer(m, 0.62, span);
      if (!res) { echecs++; ratees.push(m.i); if (pf > 0.3) return { echecs, ratees }; }
      if (!res) {
        const v = m.vars[m.vars.length - 1];
        res = { bx: reg.x0 + m.r0, by: reg.y1 - m.r0, r: m.r0, v, rel: 'd', R: { x: reg.x0 + 2 * m.r0 + 8, y: reg.y1 - v.h, w: v.w, h: v.h }, tige: routerTige(reg.x0 + m.r0, reg.y1, m.i), force: true };
      }
      placesM.push({ i: m.i, R: res.R, v: res.v, rel: res.rel, force: !!res.force });
      placesF.push({ i: m.i, x: res.bx, y: res.by, r: res.r });
      const t = res.tige;
      const c = courbe(t.P0, t.P1, t.P2, t.P3, 30);
      tiges.push({ i: m.i, pts: c.pts, ay: t.P3[1] });
      fleurs.push({ i: m.i, type: m.type, couleur: m.couleur, r: res.r, bx: res.bx, by: res.by, P: [t.P0, t.P1, t.P2, t.P3], phrase: true, dore: m.or || (m.type === 'rose' && m.couleur === 'ivoire') });
    }
    return { echecs, placesM, placesF, fleurs, ratees };
  }

  let essai = null;
  const essais = [];
  // espacement de départ choisi d'après la place disponible, puis on resserre si besoin
  const pf0 = clamp(1.27 - 0.52 * densite, 0.4, 1);
  const pas = [];
  for (let pf = pf0; pf > 0.27; pf *= 0.87) pas.push([pf, 1 - (1 - pf) * 0.55]);
  for (const [pf, rf] of pas) {
    const t0 = performance.now();
    essai = tenter(pf, rf);
    essais.push([n3(pf), Math.round(performance.now() - t0), essai.echecs, (essai.ratees || []).join('/')]);
    if (!essai.echecs) break;
  }
  if (essai.echecs && GEO.compact < 2) {
    // écran vraiment bas : centre et fleurs plus petits, phrases coupées plus volontiers
    GEO = geometrie(2);
    ({ Rc, cyB, paixR, centreB, paix, mots, cible, densite } = GEO);
    for (const pf of [0.42, 0.34, 0.28]) {
      const t0 = performance.now();
      essai = tenter(pf, 1 - (1 - pf) * 0.55);
      essais.push([pf, Math.round(performance.now() - t0), essai.echecs, (essai.ratees || []).join('/'), 'c2']);
      if (!essai.echecs) break;
    }
  }
  const { placesM, placesF, fleurs } = essai;
  for (const q of placesM) {
    const m = mots[q.i];
    m.R = q.R;
    m.lignes = q.v.lignes;
    m.align = q.rel === 'd' ? 'left' : q.rel === 'g' ? 'right' : 'center';
    m.force = q.force;
  }
  const rng = alea(W * 3301 + H * 17);
  const rectsMots = placesM.map((q) => q.R);
  const cachesMots = placesM.map((q) => ({ R: q.R, id: q.i }));

  /* --- Tiges définitives (échantillonnage fin), découpées derrière les phrases --- */
  for (const f of fleurs) {
    const [P0, P1, P2, P3] = f.P;
    f.tige = courbe(P0, P1, P2, P3, 60);
    f.tige.segs = segmentsTige(courbe(P0, P1, P2, P3, Math.max(40, Math.ceil(f.tige.L / 3))), cachesMots.filter((c) => c.id !== f.i), 3);
  }

  /* --- Feuilles le long des tiges (là où il n'y a ni phrase ni fleur) --- */
  const zoneLibre = (x, y, rr, pad = 2) => {
    for (const R of rectsMots) if (distRectPt(R, x, y) < rr + pad) return false;
    for (const f of placesF) if (Math.hypot(x - f.x, y - f.y) < f.r + rr + pad) return false;
    if (Math.hypot(x - centreB.x, y - centreB.y) < centreB.r + rr) return false;
    if (distRectPt(paixR, x, y) < rr + 4) return false;
    return true;
  };
  for (const f of fleurs) {
    const c = f.tige;
    f.feuilles = [];
    const nb = clamp(Math.round(c.L / 80), 1, 6);
    let side = rng() < 0.5 ? -1 : 1;
    const longue = f.type === 'tulipe';
    const fine = f.type === 'lys' || f.type === 'lavande';
    const essais = longue ? [0.04, 0.1, 0.16] : [];
    if (!longue) for (let u = 0.06; u < 0.88; u += 0.055) essais.push(u);
    let dernier = -1;
    for (const u of essais) {
      if (f.feuilles.length >= nb) break;
      if (dernier >= 0 && (u - dernier) * c.L < 34 * kb) continue;
      const p = surCourbe(c, u);
      const haut = 1 - u;
      const l = (longue ? 44 + rng() * 18 : fine ? 13 + rng() * 6 : (13 + rng() * 9) * (0.75 + 0.45 * haut)) * kb;
      const ang = p.ang + side * (longue ? 14 + rng() * 10 : 36 + rng() * 22);
      const mx = p.x + Math.sin(ang * DEG) * l * 0.5, my = p.y - Math.cos(ang * DEG) * l * 0.5;
      if (my < reg.y1 + 24 && !zoneLibre(mx, my, l * 0.48, 3)) continue;
      f.feuilles.push({ u, ang, l, w: l * (longue ? 0.2 : fine ? 0.22 : 0.42), cote: side });
      side = -side;
      dernier = u;
    }
  }

  /* --- La pivoine du centre --- */
  const tigeC = courbe([cx + 6 * kb, H + 6], [cx + 10 * kb, H - (H - cyB) * 0.35], [cx - 4 * kb, cyB + (H - cyB) * 0.4], [cx, cyB], 60);
  tigeC.segs = segmentsTige(courbe(tigeC.P0, tigeC.P1, tigeC.P2, tigeC.P3, Math.ceil(tigeC.L / 3)), cachesMots.concat([{ R: paixR, id: -1 }]), 3);
  const centreF = {
    i: -1, type: 'pivoine', couleur: 'ivoire', r: Rc, bx: cx, by: cyB, tige: tigeC, centre: true, dore: true,
    feuilles: [
      { u: 0.07, ang: -48, l: 30 * kb, w: 13 * kb, cote: -1 },
      { u: 0.13, ang: 44, l: 26 * kb, w: 11 * kb, cote: 1 },
    ],
  };

  /* --- Végétation de complément --- */
  const remplissage = [];
  const heurte = (x, y, rr, pad) => !zoneLibre(x, y, rr, pad);
  // 1) le sol : herbes, eucalyptus, lavande, baies, boutons, gypsophile
  const types = [['herbe', 0.34], ['euca', 0.14], ['lavande', 0.15], ['baies', 0.1], ['bouton', 0.13], ['gypso', 0.08], ['marguerite', 0.06]];
  const tirer = () => {
    let x = rng();
    for (const [t, p] of types) { if ((x -= p) <= 0) return t; }
    return 'herbe';
  };
  const ajouterSol = (x, hMax, prof) => {
    const type = tirer();
    let h = (28 + rng() * (hMax - 28)) * kb;
    const rr = (type === 'herbe' ? 4 : type === 'euca' ? 9 : 7) * kb;
    while (h > 24 && heurte(x, H - h, rr, 5)) h -= 8;
    if (h < 20) return;
    const pli = (rng() - 0.5) * 22 * kb;
    const P0 = [x + (rng() - 0.5) * 10, H + 4], P3 = [x + pli, H - h];
    const c = courbe(P0, [P0[0], P0[1] - h * 0.4], [P3[0] - pli * 0.4, P3[1] + h * 0.35], P3, 16);
    remplissage.push({ type, sol: true, prof, h, x, tige: c, r: (type === 'gypso' ? 10 : type === 'marguerite' ? 7 : type === 'baies' ? 8 : 6.5) * kb, couleur: type === 'marguerite' ? 'ivoire' : type === 'baies' ? (rng() < 0.5 ? 'vin' : 'rose') : type === 'bouton' ? (rng() < 0.5 ? 'blush' : 'rose') : 'mauve' });
  };
  for (let x = X0 - 4; x <= X0 + col + 4; x += (10 + rng() * 9) * kb) ajouterSol(x, 120 + rng() * 30, 0);
  if (W > col + 40) {
    for (let x = 6; x < X0 - 10; x += 30 + rng() * 40) ajouterSol(x, 90 + rng() * 80, 1);
    for (let x = X0 + col + 14; x < W - 4; x += 30 + rng() * 40) ajouterSol(x, 90 + rng() * 80, 1);
  }
  // 2) au fond, dans les vides : fleurettes discrètes, un peu floues
  const fondT = ['gypso', 'marguerite', 'bouton', 'lavande', 'baies', 'gypso', 'anemone', 'cosmos'];
  const fonds = [];
  const large = W > col + 40;
  for (let n = 0; n < (large ? 40 : 30) && fonds.length < (large ? 17 : 11); n++) {
    const surCote = large && n % 2 === 0;
    let x, y, rr;
    if (surCote) {
      const gauche = rng() < 0.5;
      x = gauche ? 20 + rng() * (X0 - 40) : X0 + col + 20 + rng() * (X0 - 40);
      y = H * (0.18 + rng() * 0.62);
      rr = (8 + rng() * 8) * kb;
    } else {
      x = reg.x0 + rng() * (reg.x1 - reg.x0);
      y = reg.y0 + 20 + rng() * (reg.y1 - reg.y0 - 40);
      rr = (5 + rng() * 4) * kb;
    }
    if (heurte(x, y, rr, surCote ? 2 : 8)) continue;
    if (fonds.some((f) => Math.hypot(f.x - x, f.y - y) < f.r + rr + 12)) continue;
    if (distRectPt(son, x, y) < rr + 6) continue;
    const type = fondT[(rng() * fondT.length) | 0];
    const pli = (rng() - 0.5) * 30 * kb;
    const h = H + 4 - y;
    const P0 = [x + (rng() - 0.5) * 24 * kb, H + 4];
    const c = courbe(P0, [P0[0], P0[1] - h * 0.4], [x - pli * 0.3, y + h * 0.3], [x, y], 40);
    c.segs = segmentsTige(c, cachesMots, 3);
    // quelques feuilles, là où elles ne gênent aucune phrase
    const feuilles = [];
    let cote = rng() < 0.5 ? -1 : 1;
    for (const u of [0.16, 0.3, 0.46, 0.62]) {
      if (feuilles.length >= (surCote ? 3 : 2)) break;
      const pt = surCourbe(c, u);
      const l = (9 + rng() * 9) * kb;
      const ang = pt.ang + cote * (38 + rng() * 24);
      const mx = pt.x + Math.sin(ang * DEG) * l * 0.5, my = pt.y - Math.cos(ang * DEG) * l * 0.5;
      if (!surCote && my < reg.y1 + 24 && !zoneLibre(mx, my, l * 0.48, 3)) continue;
      feuilles.push({ u, ang, l, w: l * 0.4, cote });
      cote = -cote;
    }
    fonds.push({ type, fond: true, x, y, r: rr, tige: c, feuilles, couleur: ['ivoire', 'blush', 'rose', 'vin'][(rng() * 4) | 0], flou: false });
  }
  fonds.sort((a, b) => b.r - a.r).slice(0, 3).forEach((f) => (f.flou = true));
  remplissage.push(...fonds);

  return { W, H, col, X0, k, kb, reg, son, cx, mots, fleurs, centre: centreF, paix, paixR, centreB, remplissage, fs0, essai: { echecs: essai.echecs, essais, densite: n3(densite) } };
}

/* ------------------------------------------------------------------ */
/*  Construction des plantes                                           */
/* ------------------------------------------------------------------ */
function creerDefs(svg, H) {
  const d = el('defs', null, svg);
  const lin = (id, stops, extra) => {
    const g = el('linearGradient', Object.assign({ id, x1: 0, y1: 1, x2: 0, y2: 0 }, extra), d);
    for (const [o, c, a = 1] of stops) el('stop', { offset: o, 'stop-color': c, 'stop-opacity': a }, g);
  };
  const rad = (id, stops, extra) => {
    const g = el('radialGradient', Object.assign({ id }, extra), d);
    for (const [o, c, a = 1] of stops) el('stop', { offset: o, 'stop-color': c, 'stop-opacity': a }, g);
  };
  for (const nom in DEGRADES) {
    const [a, b, c] = DEGRADES[nom];
    lin('jg-' + nom, [[0, a], [0.5, b], [1, c]]);
  }
  lin('jg-feuille', [[0, '#27311f'], [0.55, '#4d5d4a'], [1, '#879b83']]);
  lin('jg-euca', [[0, '#435242'], [0.6, '#728670'], [1, '#a8b7a2']]);
  lin('jg-tige', [[0, '#182014'], [0.5, '#323f2e'], [1, '#5d6f58']], { gradientUnits: 'userSpaceOnUse', x1: 0, y1: H, x2: 0, y2: 0 });
  rad('jg-halo', [[0, '#f4ddb0', 0.5], [0.42, '#d6b47a', 0.16], [1, '#d6b47a', 0]]);
  rad('jg-lum', [[0, '#fff7e6', 1], [0.14, '#f7dda8', 0.8], [0.42, '#d6b47a', 0.22], [1, '#d6b47a', 0]]);
  rad('jg-voile', [[0, '#0f1114', 0.78], [0.55, '#0f1114', 0.5], [1, '#0f1114', 0]]);
  rad('jg-lavis', [[0, '#5e1d2a', 0.55], [1, '#5e1d2a', 0]]);
  rad('jg-lavis-or', [[0, '#b0823f', 0.5], [1, '#b0823f', 0]]);
  for (const nom in DEGRADES) rad('jg-diff-' + nom, [[0, DEGRADES[nom][1], 0.2], [0.55, DEGRADES[nom][1], 0.07], [1, DEGRADES[nom][1], 0]]);
  const f = el('filter', { id: 'jf-flou', x: '-30%', y: '-30%', width: '160%', height: '160%' }, d);
  el('feGaussianBlur', { stdDeviation: 0.9 }, f);
}

function batirTete(p, rng) {
  const { type, r } = p;
  const c = p.couleur;
  const G = p.gTete;
  const fill = `url(#jg-${c})`;
  const fonce = `url(#jg-${FONCE[c] || c})`;
  const cls = p.dore ? 'jp jo' : 'jp';
  const off = (ATTACHE[type] || 0) * r;
  p.parties = [];
  p.mode = 'radial';
  if (p.avecHalo) p.eHalo = el('circle', { cx: 0, cy: n1(-off), r: n1(r * 2.4), fill: 'url(#jg-halo)', opacity: 0, display: 'none' }, G);
  const ajouter = (d, ang, o = {}) => {
    const e = el('path', { d, class: o.cls || cls, fill: o.fill || fill, transform: 'scale(0)' }, o.parent || p.gPet);
    p.parties.push({ el: e, ang, a0: o.a0 ?? ang, tw: o.tw ?? 0, s0x: o.s0x ?? 0.2, s0y: o.s0y ?? 0.12, sc: o.sc ?? 1, sx: o.sx ?? 1, d: o.d ?? 0, span: o.span ?? 0.62, tx: o.tx || 0, ty: o.ty || 0, lt: -1 });
    return e;
  };
  const bouton = (h) => {
    p.gSep = el('g', { transform: 'scale(0)' }, G);
    el('path', { d: sepales(h * 0.8, 3, 110), class: 'jf' }, p.gSep);
    p.gPet = el('g', { opacity: 0 }, G);
    p.gBud = el('g', { transform: 'scale(0)' }, G);
    p.eBud = el('path', { d: `M0 ${n1(h * 0.12)}C${n1(h * 0.42)} ${n1(h * 0.02)} ${n1(h * 0.36)} ${n1(-h * 0.5)} 0 ${n1(-h * 0.74)}C${n1(-h * 0.36)} ${n1(-h * 0.5)} ${n1(-h * 0.42)} ${n1(h * 0.02)} 0 ${n1(h * 0.12)}Z`, class: cls, fill: fonce }, p.gBud);
  };
  const coeur = () => (p.gCoeur = el('g', { transform: 'scale(0)' }, G));
  // lavis : le pigment qui « bave » doucement autour de la fleur
  const diffusion = (cy = 0) => { if (p.avecHalo) el('circle', { cy: n1(cy), r: n1(r * 1.3), fill: `url(#jg-diff-${c})` }, p.gPet); };
  const rot0 = rng() * 360;
  const j = (a) => (rng() - 0.5) * a;

  switch (type) {
    case 'rose': {
      bouton(r * 0.75);
      diffusion();
      // pétales ouverts, puis une coupe de pétales tournés vers le cœur
      for (let q = 0; q < 5; q++) {
        const ang = rot0 + q * 72 + j(12), l = r * (0.94 + rng() * 0.1), w = r * (0.76 + rng() * 0.1);
        ajouter(petale('rond', l, w, 1 + j(0.25), rng) + nervure(l, w, 3), ang, { tw: -40, d: 0.3 + q * 0.022 });
      }
      for (let q = 0; q < 5; q++) {
        const ang = rot0 + 36 + q * 72 + j(12), l = r * (0.72 + rng() * 0.08), w = r * (0.64 + rng() * 0.08);
        ajouter(petale('rond', l, w, 1 + j(0.25), rng) + nervure(l, w, 3), ang, { tw: -34, d: 0.18 + q * 0.022 });
      }
      el('circle', { r: n1(r * 0.55), fill: c === 'ivoire' || c === 'lune' ? 'url(#jg-lavis-or)' : 'url(#jg-lavis)' }, p.gPet);
      for (let q = 0; q < 5; q++) {
        const ang = rot0 + 18 + q * 72 + j(14), rho = r * 0.36, l = r * 0.42, w = r * (0.5 + rng() * 0.08);
        ajouter(petale('rond', l, w, 1 + j(0.3), rng), ang + 180 + j(20), { tw: 30, d: 0.06 + q * 0.02, fill: `url(#jg-${COUPE[c] || c})`, tx: Math.sin(ang * DEG) * rho, ty: -Math.cos(ang * DEG) * rho });
      }
      coeur();
      const s = r * 0.24;
      el('path', {
        d: `M${n1(-s * 0.8)} ${n1(s * 0.1)}C${n1(-s * 0.85)} ${n1(-s * 0.72)} ${n1(s * 0.78)} ${n1(-s * 0.86)} ${n1(s * 0.86)} ${n1(-s * 0.04)}C${n1(s * 0.9)} ${n1(s * 0.66)} ${n1(-s * 0.26)} ${n1(s * 0.86)} ${n1(-s * 0.36)} ${n1(s * 0.1)}C${n1(-s * 0.42)} ${n1(-s * 0.36)} ${n1(s * 0.3)} ${n1(-s * 0.46)} ${n1(s * 0.36)} ${n1(s * 0.02)}`,
        fill: fonce, 'fill-opacity': 0.85, stroke: c === 'vin' || c === 'rose' ? '#e8c1b8' : '#c9a266', 'stroke-opacity': 0.55, 'stroke-width': 0.5, 'stroke-linecap': 'round',
      }, p.gCoeur);
      break;
    }
    case 'pivoine': {
      bouton(r * 0.7);
      diffusion();
      const centre = p.centre;
      // [nombre, longueur, largeur, décalage, forme, rayon (>0 : pétales tournés vers le cœur), teinte foncée]
      const anneaux = centre
        ? [[12, 1, 0.52, 0, 'volant', 0, 0], [11, 0.86, 0.5, 15, 'volant', 0, 0], [10, 0.5, 0.46, 6, 'volant', 0.64, 1], [9, 0.52, 0.42, 22, 'volant', 0, 0], [8, 0.34, 0.36, 10, 'rond', 0.38, 1], [6, 0.24, 0.26, 30, 'rond', 0, 0]]
        : [[9, 1, 0.6, 0, 'volant', 0, 0], [8, 0.8, 0.56, 20, 'volant', 0, 0], [8, 0.46, 0.5, 8, 'volant', 0.52, 1], [6, 0.36, 0.36, 30, 'volant', 0, 0], [5, 0.24, 0.3, 14, 'rond', 0.26, 1]];
      const nA = anneaux.length;
      anneaux.forEach(([n, lf, wf, dec, forme, rho, f], ri) => {
        for (let q = 0; q < n; q++) {
          const ang = rot0 + dec + (q * 360) / n + j(14);
          const l = r * lf * (ri === 0 ? 0.8 + rng() * 0.2 : 0.86 + rng() * 0.16), w = r * wf * (0.86 + rng() * 0.24);
          const dd = (nA - 1 - ri) * (centre ? 0.085 : 0.1) + q * 0.014;
          if (rho) {
            const rr = r * rho * (0.85 + rng() * 0.3);
            ajouter(petale(forme, l, w, 1 + j(0.3), rng), ang + 180 + j(24), { tw: 26, d: dd, fill: f ? `url(#jg-${COUPE[c] || c})` : fill, tx: Math.sin(ang * DEG) * rr, ty: -Math.cos(ang * DEG) * rr, span: centre ? 0.56 : 0.6 });
          } else {
            ajouter(petale(forme, l, w, 1 + j(0.3), rng) + (ri < 2 ? nervure(l, w, 3) : ''), ang, { tw: -30 - ri * 8, d: dd, span: centre ? 0.56 : 0.6 });
          }
        }
        if (ri === 1) el('circle', { r: n1(r * 0.6), fill: c === 'ivoire' || c === 'lune' ? 'url(#jg-lavis-or)' : 'url(#jg-lavis)', opacity: 0.8 }, p.gPet);
      });
      coeur();
      let dEt = '';
      const nE = centre ? 22 : 10;
      for (let q = 0; q < nE; q++) {
        const a = q * 2.4, rr = r * 0.13 * Math.sqrt((q + 0.5) / nE);
        dEt += disque(Math.cos(a) * rr, Math.sin(a) * rr, r * (centre ? 0.024 : 0.03));
      }
      el('path', { d: dEt, fill: '#ecd29b', 'fill-opacity': 0.95 }, p.gCoeur);
      break;
    }
    case 'anemone': {
      bouton(r * 0.7);
      diffusion();
      const nA = r < 10 ? 5 : 7;
      for (let q = 0; q < nA; q++) {
        const ext = nA === 5 || q < 4;
        const ang = rot0 + (nA === 5 ? q * 72 : ext ? q * 90 : 45 + (q - 4) * 120) + j(10);
        const l = r * (ext ? 0.96 + rng() * 0.06 : 0.86 + rng() * 0.06), w = r * (ext ? 0.66 : 0.6) * (0.94 + rng() * 0.1);
        ajouter(petale('rond', l, w, 1 + j(0.3), rng) + nervure(l, w, 3), ang, { tw: -42, d: (ext ? 0.12 : 0) + q * 0.03 });
      }
      el('circle', { r: n1(r * 0.48), fill: c === 'vin' ? 'url(#jg-lavis-or)' : 'url(#jg-lavis)' }, p.gPet);
      coeur();
      el('circle', { r: n1(r * 0.24), fill: '#1c0b11', stroke: '#d6b47a', 'stroke-width': 0.4, 'stroke-opacity': 0.5 }, p.gCoeur);
      let dE = '', dP = '';
      for (let q = 0; q < 18; q++) {
        const a = (q / 18) * TAU + j(0.2), rr = r * (0.33 + j(0.06));
        dE += disque(Math.cos(a) * rr, Math.sin(a) * rr, r * 0.045);
        if (q % 2 === 0) dP += disque(Math.cos(a + 0.2) * r * 0.14, Math.sin(a + 0.2) * r * 0.14, r * 0.03);
      }
      el('path', { d: dE, fill: '#2a121a' }, p.gCoeur);
      el('path', { d: dP, fill: '#d6b47a', 'fill-opacity': 0.85 }, p.gCoeur);
      break;
    }
    case 'cosmos':
    case 'marguerite': {
      bouton(r * 0.62);
      diffusion();
      const cos = type === 'cosmos';
      const n = cos ? (r < 10 ? 6 : 8) : r < 10 ? 9 : 13;
      for (let q = 0; q < n; q++) {
        const ang = rot0 + (q * 360) / n + j(cos ? 8 : 5);
        const l = r * (0.88 + rng() * 0.12), w = r * (cos ? 0.43 : 0.19);
        ajouter(petale(cos ? 'dent' : 'fin', l, w, 1, rng) + nervure(l, w, cos ? 3 : 1), ang, { tw: -26, d: q * (cos ? 0.03 : 0.018) });
      }
      coeur();
      el('circle', { r: n1(r * (cos ? 0.2 : 0.25)), fill: 'url(#jg-or)', stroke: '#8a6634', 'stroke-width': 0.4, 'stroke-opacity': 0.6 }, p.gCoeur);
      let dP = '';
      for (let q = 0; q < 10; q++) {
        const a = q * 2.4, rr = r * 0.16 * Math.sqrt((q + 0.5) / 10);
        dP += disque(Math.cos(a) * rr, Math.sin(a) * rr, r * 0.03);
      }
      el('path', { d: dP, fill: '#7d5a2b', 'fill-opacity': 0.7 }, p.gCoeur);
      break;
    }
    case 'tulipe': {
      p.mode = 'calice';
      p.gPet = el('g', null, G);
      diffusion(-off);
      const l = r * 1.6, w = r * 0.5;
      const def = [[-17, 0.92, fonce, 0], [16, 0.94, fonce, 0], [-7, 1, fill, 0.06], [8, 1, fill, 0.06], [0, 1.03, fill, 0.1]];
      for (const [a, sc, f, d] of def) {
        ajouter(petale('pointe', l * sc, w * (sc > 1 ? 1.12 : 1), 1 + j(0.6), rng) + nervure(l * sc, w, 3), a * 1.25, { a0: a * 0.3, s0x: 0.78, s0y: 1, sc: 1, fill: f, d, span: 0.8 });
      }
      break;
    }
    case 'lys': {
      p.mode = 'calice';
      p.gPet = el('g', null, G);
      diffusion(-off);
      const l = r * 1.3, w = r * 0.27;
      const def = [[-80, 0.78, fonce, 0], [-8, 0.95, fonce, 0], [72, 0.8, fonce, 0], [-44, 0.98, fill, 0.08], [34, 1, fill, 0.08], [90, 0.72, fill, 0.12]];
      for (const [a, sc, f, d] of def) {
        ajouter(petale('pointe', l * sc, w, a > 0 ? 3 : -3, rng) + nervure(l * sc, w, 1), a, { a0: a * 0.08, s0x: 0.55, s0y: 0.6, sc: 1, fill: f, d, span: 0.75 });
      }
      el('circle', { r: n1(r * 0.3), fill: 'url(#jg-lavis-or)' }, p.gPet);
      coeur();
      let dF = '', dA = '', dT = '';
      for (let q = 0; q < 6; q++) {
        const a = (-36 + q * 14.4) * DEG;
        const L = r * (0.8 + rng() * 0.14);
        const x = Math.sin(a) * L, y = -Math.cos(a) * L;
        dF += trait(0, 0, x * 0.3, y * 0.6, x, y);
        dA += ovale(x, y, r * 0.09, r * 0.042, a / DEG + 90);
      }
      for (const a of [-44, 34]) {
        for (let q = 0; q < 5; q++) {
          const dd = r * (0.22 + q * 0.09), aa = (a + j(16)) * DEG;
          dT += disque(Math.sin(aa) * dd, -Math.cos(aa) * dd, r * 0.022);
        }
      }
      el('path', { d: dT, fill: c === 'ivoire' ? '#b97f84' : '#7a2e3b', 'fill-opacity': 0.7 }, p.gCoeur);
      el('path', { d: dF, fill: 'none', stroke: '#c3c99f', 'stroke-width': 0.5, 'stroke-opacity': 0.8 }, p.gCoeur);
      el('path', { d: dA, fill: '#b37a3a' }, p.gCoeur);
      break;
    }
    case 'gypso': {
      p.mode = 'grappe';
      p.gPet = el('g', null, G);
      const cx = 0, cy = -off;
      const n = 5;
      let dB = `M0 0L0 ${n1(-r * 0.28)}`;
      const fourche = [0, -r * 0.28];
      for (let q = 0; q < n; q++) {
        const a = (-60 + (q * 120) / (n - 1) + j(16)) * DEG;
        const dd = r * (0.42 + rng() * 0.22);
        const x = cx + Math.sin(a) * dd, y = cy - Math.cos(a) * dd * 0.8;
        dB += `M${n1(fourche[0])} ${n1(fourche[1])}Q${n1(x * 0.4)} ${n1(y * 0.6)} ${n1(x)} ${n1(y)}`;
        const g = el('g', { transform: 'scale(0)' }, p.gPet);
        let dF = '';
        const nf = 8 + ((rng() * 4) | 0);
        for (let f = 0; f < nf; f++) {
          const aa = rng() * TAU, rr = r * 0.24 * Math.sqrt(rng());
          dF += disque(Math.cos(aa) * rr, Math.sin(aa) * rr, (0.9 + rng() * 0.8) * clamp(r / 16, 0.8, 1.2));
        }
        el('path', { d: dF, fill: '#f4ece1', 'fill-opacity': 0.92 }, g);
        p.parties.push({ el: g, grappe: true, x, y, d: q * 0.1, span: 0.55, lt: -1 });
      }
      p.eBranche = el('path', { d: dB, fill: 'none', stroke: '#9aac94', 'stroke-width': 0.6, 'stroke-opacity': 0, 'stroke-linecap': 'round' }, G);
      G.insertBefore(p.eBranche, p.gPet);
      break;
    }
    case 'lavande': {
      p.mode = 'grappe';
      p.gPet = el('g', null, G);
      const hh = r * 1.8;
      p.eBranche = el('path', { d: `M0 0L0 ${n1(-hh)}`, fill: 'none', stroke: '#7d8f78', 'stroke-width': 0.7, 'stroke-opacity': 0 }, p.gPet);
      for (let part = 0; part < 3; part++) {
        let dF = '';
        const g = el('g', { transform: 'scale(0)' }, p.gPet);
        const y0 = -hh * (0.12 + part * 0.3), y1 = -hh * (0.36 + part * 0.32);
        for (let q = 0; q < 6; q++) {
          const y = lerp(y0, y1, q / 5) - (y0 + y1) / 2;
          const s = 1 - (part * 6 + q) / 24;
          const side = q % 2 ? 1 : -1;
          dF += ovale(side * r * 0.1, y, r * 0.15 * s + 0.6, r * 0.1 * s + 0.4, side * 60);
        }
        el('path', { d: dF, fill: 'url(#jg-mauve)' }, g);
        p.parties.push({ el: g, grappe: true, x: 0, y: (y0 + y1) / 2, d: part * 0.2, span: 0.5, lt: -1 });
      }
      break;
    }
    case 'baies': {
      p.mode = 'grappe';
      p.gPet = el('g', null, G);
      let dB = '';
      const pos = [];
      for (let q = 0; q < 7; q++) {
        const a = (-70 + q * 23 + j(10)) * DEG;
        const dd = r * (0.5 + rng() * 0.45);
        const x = Math.sin(a) * dd, y = -off - Math.cos(a) * dd * 0.75 + r * 0.1;
        pos.push([x, y, r * (0.17 + rng() * 0.07)]);
        dB += `M0 0Q${n1(x * 0.2)} ${n1(y * 0.6)} ${n1(x)} ${n1(y)}`;
      }
      p.eBranche = el('path', { d: dB, fill: 'none', stroke: '#6f7b5f', 'stroke-width': 0.7, 'stroke-opacity': 0, 'stroke-linecap': 'round' }, G);
      G.insertBefore(p.eBranche, p.gPet);
      for (let part = 0; part < 2; part++) {
        const g = el('g', { transform: 'scale(0)' }, p.gPet);
        let dF = '', dH = '';
        let sx = 0, sy = 0, nb = 0;
        pos.forEach(([x, y, rr], q) => { if (q % 2 === part) { sx += x; sy += y; nb++; } });
        sx /= nb; sy /= nb;
        pos.forEach(([x, y, rr], q) => {
          if (q % 2 !== part) return;
          dF += disque(x - sx, y - sy, rr);
          dH += disque(x - sx - rr * 0.35, y - sy - rr * 0.35, rr * 0.28);
        });
        el('path', { d: dF, fill: c === 'rose' ? '#b87a80' : '#7a2e3b', stroke: '#d6b47a', 'stroke-width': 0.4, 'stroke-opacity': 0.5 }, g);
        el('path', { d: dH, fill: '#f0d9c8', 'fill-opacity': 0.55 }, g);
        p.parties.push({ el: g, grappe: true, x: sx, y: sy, d: part * 0.22, span: 0.6, lt: -1 });
      }
      break;
    }
    case 'bouton':
    default: {
      p.mode = 'radial';
      bouton(r * 1.1);
      p.boutonSeul = true;
      break;
    }
  }
}

function batirPlante(spec, parent, parentTete, rng, kb, opts = {}) {
  const p = {
    type: spec.type, couleur: spec.couleur || 'blush', r: spec.r, dore: !!spec.dore, centre: !!spec.centre,
    avecHalo: !!(spec.phrase || spec.centre), tige: spec.tige,
    s: { g: 0, bud: 0, open: 0, halo: 0, vent: 0 }, l: {}, feuilles: [],
  };
  const c = spec.tige;
  p.L = c.L;
  p.base = c.P0;
  p.g = el('g', null, parent);
  if (opts.opacite != null) p.g.setAttribute('opacity', opts.opacite);
  const largeur = opts.largeurTige || 1.4;
  const segs = spec.type === 'herbe' ? [] : c.segs || [{ u0: 0, u1: 1, L: c.L, d: c.d }];
  p.segs = segs.map((sg) => ({
    u0: sg.u0, u1: sg.u1, L: sg.L, lt: -1, cache: sg.cache ?? -2, lo: -1,
    el: el('path', { d: sg.d, class: 'jt', 'stroke-width': n2(largeur), 'stroke-dasharray': `${n1(sg.L + 2)} ${n1(sg.L + 6)}`, 'stroke-dashoffset': n1(sg.L + 2), opacity: 0 }, p.g),
  }));
  for (const f of spec.feuilles || []) {
    const pt = surCourbe(c, f.u);
    const e = el('path', { d: feuille(f.l, f.w), class: 'jf', transform: 'scale(0)' }, p.g);
    p.feuilles.push({ el: e, u: f.u, du: 0.14, x: pt.x, y: pt.y, ang: f.ang, tw: -f.cote * 48, lt: -1 });
  }
  if (spec.type === 'euca') {
    const nb = Math.max(3, Math.round(c.L / (14 * kb)));
    for (let q = 0; q < nb; q++) {
      const u = 0.12 + (0.88 * q) / nb;
      const pt = surCourbe(c, u);
      const cote = q % 2 ? 1 : -1;
      const rr = (3.2 + 2.2 * (1 - u)) * kb;
      const e = el('path', { d: feuilleRonde(rr), class: 'je', transform: 'scale(0)' }, p.g);
      p.feuilles.push({ el: e, u, du: 0.12, x: pt.x, y: pt.y, ang: pt.ang + cote * (58 + rng() * 20), tw: -cote * 40, lt: -1 });
    }
  }
  if (spec.type === 'herbe') {
    // touffe de brins : un seul chemin, qui pousse depuis le sol
    let d = '';
    const n = 2 + ((rng() * 3) | 0);
    for (let q = 0; q < n; q++) {
      const l = spec.h * (0.55 + rng() * 0.5), cb = (rng() - 0.5) * l * 0.5, w = (2 + rng() * 1.6) * kb, xo = (q - (n - 1) / 2) * 2.4 * kb;
      d += `M${n1(xo - w / 2)} 0Q${n1(xo - w * 0.25 + cb * 0.45)} ${n1(-l * 0.55)} ${n1(xo + cb)} ${n1(-l)}Q${n1(xo + w * 0.3 + cb * 0.45)} ${n1(-l * 0.5)} ${n1(xo + w / 2)} 0Z`;
    }
    p.eHerbe = el('path', { d, fill: 'url(#jg-feuille)', transform: `translate(${n1(spec.x)} ${n1(spec.H + 2)}) scale(1 0)` }, p.g);
    p.herbeX = spec.x;
    p.herbeY = spec.H + 2;
    p.type = 'herbe';
    return p;
  }
  if (spec.type === 'euca') return p;
  // la tête
  const top = c.P3;
  const finTige = surCourbe(c, 0.98);
  const ecr = ECRASE[spec.type] || 1;
  p.ax = top[0]; p.ay = top[1];
  p.tilt = clamp(finTige.ang * 0.7, -16, 16) + (rng() - 0.5) * (ecr < 1 ? 8 : 4);
  p.ecr = ecr;
  const gT = parentTete ? el('g', null, parentTete) : p.g;
  p.g2 = parentTete ? gT : null;
  p.gTete = el('g', { transform: `translate(${n1(p.ax)} ${n1(p.ay)}) rotate(${n1(p.tilt)}) scale(1 ${ecr})` }, gT);
  if (spec.flou) p.gTete.setAttribute('filter', 'url(#jf-flou)');
  batirTete(p, rng);
  return p;
}

/* ------------------------------------------------------------------ */
/*  Rendu (à chaque image, seulement ce qui change)                    */
/* ------------------------------------------------------------------ */
function rendrePlante(p, t, ventOK) {
  const s = p.s, l = p.l;
  if (s.g !== l.g) {
    l.g = s.g;
    for (const sg of p.segs) {
      const lp = clamp((s.g - sg.u0) / (sg.u1 - sg.u0), 0, 1);
      if (lp === sg.lt) continue;
      sg.lt = lp;
      sg.el.setAttribute('stroke-dashoffset', n2((sg.L + 2) * (1 - lp)));
    }
    if (p.eHerbe) p.eHerbe.setAttribute('transform', `translate(${n1(p.herbeX)} ${n1(p.herbeY)}) scale(1 ${n3(douce(s.g))})`);
    for (const f of p.feuilles) {
      const lp = clamp((s.g - f.u) / f.du, 0, 1);
      if (lp === f.lt) continue;
      f.lt = lp;
      const e = sortieRetour(lp, 2.2);
      f.el.setAttribute('transform', `translate(${n1(f.x)} ${n1(f.y)}) rotate(${n2(f.ang + (1 - e) * f.tw)}) scale(${n3(e)})`);
    }
    if (p.lum) {
      const pt = surCourbe(p.tige, s.g);
      p.lum.x = pt.x; p.lum.y = pt.y;
    }
  }
  if (p.gTete && (s.bud !== l.bud || s.open !== l.open)) {
    l.bud = s.bud; l.open = s.open;
    const b = sortieRetour(s.bud, 1.9);
    if (p.mode === 'calice') {
      l.hs = b;
    } else {
      if (p.gSep) p.gSep.setAttribute('transform', `scale(${n3(b)})`);
      if (p.gBud) {
        const fondu = p.boutonSeul ? 1 : 1 - clamp(s.open * 2.6, 0, 1);
        p.gBud.setAttribute('transform', `scale(${n3(b * (1 + 0.15 * s.open))})`);
        p.eBud.setAttribute('opacity', n3(fondu));
      }
    }
    if (p.gPet) {
      if (p.mode === 'radial') p.gPet.setAttribute('opacity', n3(clamp(s.open * 6, 0, 1)));
      if (p.eBranche) p.eBranche.setAttribute('stroke-opacity', n3(clamp(s.bud * 1.5, 0, 1) * 0.85));
    }
    for (const q of p.parties) {
      const tt = clamp((s.open - q.d) / q.span, 0, 1);
      if (tt === q.lt) continue;
      q.lt = tt;
      const e = ressort(tt);
      if (q.grappe) {
        q.el.setAttribute('transform', `translate(${n2(q.x)} ${n2(q.y)}) scale(${n3(sortieRetour(tt, 2))})`);
      } else {
        const rot = lerp(q.a0, q.ang, e) + (1 - e) * q.tw;
        const sx = lerp(q.s0x, q.sc, e) * q.sx, sy = lerp(q.s0y, q.sc, e);
        q.el.setAttribute('transform', (q.tx || q.ty ? `translate(${n2(q.tx * e)} ${n2(q.ty * e)}) ` : '') + `rotate(${n2(rot)}) scale(${n3(sx)} ${n3(sy)})`);
      }
    }
    if (p.gCoeur) {
      const tc = clamp((s.open - 0.42) / 0.5, 0, 1);
      p.gCoeur.setAttribute('transform', `scale(${n3(sortieRetour(tc, 1.6))})`);
    }
    l.tete = null;
  }
  // tronçons qui passent derrière une phrase : ils s'effacent quand elle apparaît
  for (const sg of p.segs) {
    const masque = sg.texte ? clamp(sg.texte.s.o * 2.2, 0, 1) : 0;
    const op = sg.lt > 0.002 ? n3(1 - masque) : 0;
    if (op !== sg.lo) { sg.lo = op; sg.el.setAttribute('opacity', op); }
  }
  if (p.eHalo && s.halo !== l.halo) {
    l.halo = s.halo;
    p.eHalo.setAttribute('opacity', n3(s.halo * 0.9));
    p.eHalo.setAttribute('display', s.halo > 0.002 ? 'inline' : 'none');
  }
  // vent : la plante entière oscille autour de sa base, la tête un peu plus
  let a = 0, ah = 0, dx = 0;
  if (ventOK && s.vent > 0 && p.vent) {
    const v = p.vent;
    const onde = Math.sin(TAU * (t / v.per) + v.ph) + 0.35 * Math.sin(TAU * (t / (v.per * 0.47)) + v.ph * 1.7);
    if (v.amp) a = s.vent * v.amp * onde;
    ah = s.vent * v.ampT * Math.sin(TAU * (t / (v.per * 0.83)) + v.ph + 1.1);
    dx = s.vent * v.dx * onde;
  }
  const ar = n3(a);
  if (ar !== l.a) {
    l.a = ar;
    const tr = ar ? `rotate(${ar} ${n1(p.base[0])} ${n1(p.base[1])})` : '';
    p.g.setAttribute('transform', tr);
    if (p.g2) p.g2.setAttribute('transform', tr);
  }
  if (p.gTete) {
    const hs = p.mode === 'calice' ? n3(l.hs ?? 0) : 1;
    const ahr = n2(ah), dxr = n2(dx);
    const cle = hs + '|' + ahr + '|' + dxr;
    if (l.tete !== cle) {
      l.tete = cle;
      p.gTete.setAttribute('transform', `translate(${n2(p.ax + dxr)} ${n1(p.ay)}) rotate(${n2(p.tilt + ahr)}) scale(${hs} ${n3(hs * p.ecr)})`);
    }
  }
}

const ombreMot = (g) =>
  `0 0 9px rgba(236,206,150,${n3(0.75 * g)}),0 0 22px rgba(214,180,122,${n3(0.5 * g)}),0 0 2px rgba(15,17,20,.95),0 0 6px rgba(15,17,20,.85),0 0 13px rgba(15,17,20,.6)`;
const ombrePaix = (g) =>
  `0 0 10px rgba(240,214,166,${n3(0.6 * g)}),0 0 30px rgba(214,180,122,${n3(0.42 * g)}),0 0 60px rgba(201,138,143,${n3(0.25 * g)}),0 0 3px rgba(15,17,20,.7)`;

const hexa = (h) => [parseInt(h.slice(1, 3), 16), parseInt(h.slice(3, 5), 16), parseInt(h.slice(5, 7), 16)];
const melange = (a, b, t) => `rgb(${a.map((v, i) => Math.round(v + (b[i] - v) * t)).join(',')})`;

function rendreTexte(m) {
  const s = m.s, l = m.l, st = m.el.style;
  if (s.o !== l.o) { l.o = s.o; st.opacity = n3(s.o); }
  if (s.y !== l.y) { l.y = s.y; st.transform = `translate3d(0,${n2(s.y)}px,0)`; }
  if (s.b !== l.b) { l.b = s.b; st.filter = s.b > 0.05 ? `blur(${n2(s.b)}px)` : 'none'; }
  if (s.g !== l.g) { l.g = s.g; st.textShadow = m.ombre(s.g); }
  if (m.c0 && s.c !== l.c) { l.c = s.c; st.color = melange(m.c0, m.c1, s.c); }
  if (s.m !== undefined && s.m !== l.m) {
    l.m = s.m;
    if (s.m >= 0.999) m.el.classList.add('j-nu');
    else { m.el.classList.remove('j-nu'); st.setProperty('--m', n3(s.m)); }
  }
}

/* ------------------------------------------------------------------ */
/*  Le module                                                          */
/* ------------------------------------------------------------------ */
export function creerJardin(conteneur, { phrases = [], centre = 'ma paix', reduit = false, onFin } = {}) {
  injecterStyle();
  instances++;
  const racine = document.createElement('div');
  racine.className = 'jardin';
  racine.setAttribute('aria-hidden', 'true');
  conteneur.appendChild(racine);

  let sc = null; // la scène construite (dépend de la taille)
  let pret = false, lance = false, sautDemande = false, finAppelee = false, detruit = false;
  let mode = 'attente'; // attente | sequence | cascade | fini
  let largeurFaite = 0;
  let cache = false;
  let image = 0;

  const finir = () => {
    if (finAppelee || detruit) return;
    finAppelee = true;
    mode = 'fini';
    if (typeof onFin === 'function') {
      try { onFin(); } catch (e) { console.error(e); }
    }
  };

  /* --- construction de la scène pour la taille actuelle --- */
  function construire() {
    const W = Math.round(racine.clientWidth || conteneur.clientWidth || window.innerWidth);
    const H = Math.round(racine.clientHeight || conteneur.clientHeight || window.innerHeight);
    largeurFaite = W;
    const t0 = performance.now();
    const lay = miseEnPage(W, H, phrases, centre, creerMesureur());
    lay.ms = Math.round(performance.now() - t0);
    const rng = alea(W * 31 + H * 7);
    const kb = lay.kb;

    // lueur chaude finale : calque HTML (opacité composée par le GPU, sans repeindre le SVG)
    const eAmb = document.createElement('div');
    eAmb.className = 'j-amb';
    const ay = lay.centreB.y + lay.centreB.r * 0.6;
    eAmb.style.cssText = `left:${n1(lay.cx - lay.col * 0.75)}px;top:${n1(ay - lay.col * 0.85)}px;width:${n1(lay.col * 1.5)}px;height:${n1(lay.col * 1.7)}px`;
    racine.appendChild(eAmb);
    const svg = el('svg', { class: 'j-scene', width: W, height: H, viewBox: `0 0 ${W} ${H}` });
    racine.appendChild(svg);
    creerDefs(svg, H);
    const gFond = el('g', { opacity: 0.42 }, svg);
    const gPlantes = el('g', null, svg);
    const gTetes = el('g', null, svg);
    const gSol = el('g', null, svg);
    const gCT = el('g', null, svg);
    const eVoile = el('ellipse', { cx: n1(lay.cx), cy: n1(lay.paixR.y + lay.paixR.h / 2), rx: n1(lay.paixR.w * 0.72), ry: n1(lay.paixR.h * 0.95), fill: 'url(#jg-voile)', opacity: 0 }, svg);
    const gCH = el('g', null, svg);
    const gPollen = el('g', null, svg);
    const gLum = el('g', null, svg);

    const mots = document.createElement('div');
    mots.className = 'j-mots';
    racine.appendChild(mots);
    // pétales qui tombent : devant les fleurs, derrière les mots
    const avant = el('svg', { class: 'j-avant', width: W, height: H, viewBox: `0 0 ${W} ${H}` });
    racine.insertBefore(avant, mots);

    /* plantes de complément (fond puis sol) */
    const plantes = [];
    const fond = [], sol = [];
    for (const f of lay.remplissage) {
      const spec = Object.assign({}, f, { H, couleur: f.couleur });
      if (f.fond) {
        const p = batirPlante(spec, gFond, null, rng, kb, { largeurTige: 0.8 * kb });
        p.fond = true;
        fond.push(p);
      } else {
        const p = batirPlante(spec, gSol, null, rng, kb, { largeurTige: (0.8 + rng() * 0.4) * kb, opacite: f.prof ? 0.5 : 0.92 });
        p.sol = true;
        sol.push(p);
      }
    }
    /* fleurs des phrases : les plus hautes derrière */
    const fleurs = [];
    const ordreZ = lay.fleurs.slice().sort((a, b) => a.by - b.by);
    for (const f of ordreZ) {
      const p = batirPlante(f, gPlantes, gTetes, rng, kb, { largeurTige: (f.r > 17 * kb ? 1.5 : 1.25) * kb });
      p.index = f.i;
      fleurs[f.i] = p;
    }
    // tête dans un calque au-dessus des tiges : g2 suit le vent de la plante
    const pc = batirPlante(lay.centre, gCT, gCH, rng, kb, { largeurTige: 2.4 * kb });
    pc.estCentre = true;
    plantes.push(...fond, ...fleurs, ...sol, pc);

    /* le vent : amplitude limitée pour que la corolle ne bouge que de ~2 px */
    for (const p of plantes) {
      const L = Math.max(40, p.L || 60);
      p.vent = {
        amp: p.sol ? clamp((3 / L) / DEG, 0.2, 1.8) : 0,
        ampT: p.fond ? 0 : p.sol ? 2.5 : p.estCentre ? 1.2 : 2.6,
        dx: p.fond || p.sol ? 0 : p.estCentre ? 0.6 : 0.9,
        per: 3.8 + rng() * 2.2,
        ph: (p.base[0] / W) * 2.6 + rng() * 0.8,
      };
      if (p.gTete && p.gTete.getAttribute('filter')) p.vent.ampT = 0;
    }

    /* textes */
    const textes = lay.mots.map((m) => {
      const e = document.createElement('p');
      e.className = 'j-mot' + (m.or ? ' j-or' : '');
      e.style.left = n2(m.R.x) + 'px';
      e.style.top = n2(m.R.y) + 'px';
      e.style.fontSize = m.fs + 'px';
      e.style.textAlign = m.align;
      e.style.width = n2(m.R.w) + 'px';
      m.lignes.forEach((ligne, q) => {
        if (q) e.appendChild(document.createElement('br'));
        e.appendChild(document.createTextNode(ligne));
      });
      mots.appendChild(e);
      return { el: e, s: { o: 0, y: 6 * kb, b: 6, g: 0, c: 0 }, l: {}, repos: m.repos, ombre: ombreMot, i: m.i, R: m.R, c0: hexa(m.or ? '#ebcf96' : '#f8f2ea'), c1: hexa(m.or ? '#d4b37c' : '#ead9cd') };
    });
    const ePaix = document.createElement('p');
    ePaix.className = 'j-paix';
    ePaix.textContent = centre;
    ePaix.style.fontSize = n2(lay.paix.fs) + 'px';
    ePaix.style.left = n2(lay.paix.left) + 'px';
    ePaix.style.top = n2(lay.paix.top) + 'px';
    racine.appendChild(ePaix);
    const paix = { el: ePaix, s: { o: 0, y: 8 * kb, b: 6, g: 0, m: 0 }, l: {}, ombre: ombrePaix };
    for (const p of plantes) for (const sg of p.segs || []) sg.texte = sg.cache === -1 ? paix : sg.cache >= 0 ? textes[sg.cache] : null;

    /* lumières (pointe de la première tige, puis de la tige du centre) */
    const lumieres = [];
    const creerLum = (p) => {
      const e = el('circle', { cx: n1(p.base[0]), cy: n1(p.base[1] - 6), r: 0, fill: 'url(#jg-lum)', opacity: 0 }, gLum);
      const L = { el: e, s: { o: 0, r: 0 }, l: {}, x: p.base[0], y: p.base[1] - 6, p };
      p.lum = L;
      lumieres.push(L);
      return L;
    };
    const lum0 = fleurs[0] ? creerLum(fleurs[0]) : null;
    const lumC = creerLum(pc);

    /* pollen : quelques étincelles d'or qui montent de chaque éclosion */
    const pollen = [];
    const creerPollen = (p, n, base) => {
      const cxp = p.ax, cyp = p.ay - (ATTACHE[p.type] || 0) * p.r;
      for (let q = 0; q < n; q++) {
        const e = el('circle', { r: n2((0.7 + rng() * 0.9) * kb), fill: '#f2dcab', opacity: 0, cx: n1(cxp), cy: n1(cyp) }, gPollen);
        pollen.push({ el: e, s: { p: 0, o: 0 }, l: {}, x0: cxp + (rng() - 0.5) * p.r, y0: cyp - p.r * 0.3, haut: (26 + rng() * 34) * kb, ph: rng() * TAU, amp: (4 + rng() * 6) * kb, p, base, q });
      }
    };
    fleurs.forEach((p, i) => p && creerPollen(p, i < 8 ? 3 : 2, i));
    creerPollen(pc, 10, -1);

    /* pétales qui tombent (finale) */
    const chute = [];
    for (let q = 0; q < 7; q++) {
      const l = (8 + rng() * 5) * kb, w = l * (0.55 + rng() * 0.2);
      const e = el('path', { d: petale('rond', l, w, 1 + (rng() - 0.5) * 0.3) + nervure(l, w), class: 'jp', fill: `url(#jg-${q % 3 === 2 ? 'blush' : 'ivoire'})`, opacity: 0 }, avant);
      const x0 = lay.cx + (rng() - 0.5) * lay.col * 0.8;
      chute.push({ el: e, s: { p: 0, o: 0 }, l: {}, x0, y0: q < 3 ? lay.centreB.y + (rng() - 0.5) * 20 : -20 - rng() * 40, dx: (rng() - 0.5) * 70 * kb, amp: (10 + rng() * 14) * kb, rot0: rng() * 360, spin: (rng() < 0.5 ? -1 : 1) * (160 + rng() * 260), ph: rng() * TAU });
    }

    const etatScene = { s: { dim: 1, amb: 0, voile: 0 }, l: {} };

    sc = { lay, svg, mots, avant, plantes, fleurs, fond, sol, pc, textes, paix, lumieres, lum0, lumC, pollen, chute, etatScene, eAmb, eVoile, tl: null, cascade: null };
    racine.__jardin = { lay, sc };
    sc.tl = creerSequence(sc);
  }

  /* --- la séquence principale --- */
  function horaire(n) {
    // Instants où chaque phrase apparaît (une phrase est lisible ~0,22 s après).
    // Les cinq premières restent seules ≥ 1,8 s avant l'éclosion suivante, la sixième ~1,2 s ;
    // ensuite le crescendo accélère, sans descendre sous 0,55 s : chaque phrase reste
    // « seule ou presque » (au plus une autre en train d'apparaître) pendant ≥ 0,9 s.
    const D = [2.12, 2.12, 2.12, 2.12, 2.12, 1.9, 1.1, 0.9, 0.8, 0.72, 0.68, 0.66, 0.65, 0.65, 0.65, 0.65, 0.65, 0.65, 0.65, 0.65, 0.65, 0.65, 0.65, 0.68];
    const B = [2.2];
    for (let i = 1; i < n; i++) B.push(B[i - 1] + (D[i - 1] ?? 0.65));
    return B;
  }

  function creerSequence(sc) {
    const tl = gsap.timeline({ paused: true });
    const { fleurs, textes, pc, paix, lum0, lumC, pollen, chute, etatScene, sol, fond, lay } = sc;
    const n = textes.length;
    const B = horaire(n);
    sc.B = B;

    // 0) une seule lumière chaude, en bas
    if (lum0) {
      tl.to(lum0.s, { o: 1, r: 1, duration: 1.2, ease: 'sine.inOut' }, 0.1);
    }
    fleurs.forEach((p, i) => {
      if (!p) return;
      const m = textes[i];
      const b = B[i];
      const lent = i < 6;
      const vitesse = lent ? 135 + i * 12 : 250 + (i - 6) * 20;
      const dur = i === 0 ? 1.6 : clamp(p.L / vitesse, lent ? 1.3 : 0.95, 2.1);
      const g0 = b - 0.3 - dur;
      tl.to(p.s, { g: 1, duration: dur, ease: i === 0 ? 'sine.inOut' : 'power1.inOut' }, g0);
      tl.to(p.s, { bud: 1, duration: lent ? 0.55 : 0.42, ease: 'none' }, b - (lent ? 0.68 : 0.52));
      tl.to(p.s, { open: 1, duration: lent ? 1.6 : 1.1, ease: 'power1.out' }, b - (lent ? 0.1 : 0.15));
      tl.to(p.s, { halo: 1, duration: 0.6, ease: 'sine.out' }, b - 0.15);
      tl.to(p.s, { vent: 1, duration: 2.5, ease: 'sine.inOut' }, b + 0.9);
      tl.to(m.s, { o: 1, duration: 0.45, ease: 'power2.out' }, b);
      tl.to(m.s, { b: 0, duration: 0.34, ease: 'power2.out' }, b);
      tl.to(m.s, { y: 0, duration: 1.2, ease: 'power3.out' }, b);
      tl.to(m.s, { g: 1, duration: 0.5, ease: 'sine.out' }, b + 0.05);
      const repos = i < 6 ? B[i + 1] + 0.4 : Math.max(b + 1.0, (B[i + 1] ?? b + 0.8) + 0.25);
      tl.to(m.s, { o: m.repos, g: 0, c: 1, duration: 1.3, ease: 'sine.inOut' }, repos);
      tl.to(p.s, { halo: 0, duration: 1.6, ease: 'sine.inOut' }, repos);
      if (i === 0 && lum0) tl.to(lum0.s, { o: 0, r: 1.8, duration: 0.9, ease: 'sine.out' }, b - 0.45);
    });
    // pollen
    for (const q of pollen) {
      const t0 = q.base >= 0 ? B[q.base] + 0.05 + q.q * 0.16 : 0;
      if (q.base < 0) continue;
      const d = 1.7 + (q.q % 3) * 0.35;
      tl.fromTo(q.s, { p: 0, o: 0 }, { p: 1, duration: d, ease: 'sine.out', immediateRender: false }, t0);
      tl.fromTo(q.s, { o: 0 }, { o: 1, duration: 0.25, ease: 'sine.out', immediateRender: false }, t0);
      tl.to(q.s, { o: 0, duration: d * 0.6, ease: 'sine.in' }, t0 + d * 0.4);
    }
    // le sol se garnit peu à peu (de part et d'autre de la première fleur), le fond plus tard
    const x0 = fleurs[0] ? fleurs[0].base[0] : lay.cx;
    const solTri = sol.slice().sort((a, b) => Math.abs(a.base[0] - x0) - Math.abs(b.base[0] - x0));
    const tSol0 = B[1] - 0.6, tSol1 = B[Math.min(n - 1, 16)];
    solTri.forEach((p, q) => {
      const t = lerp(tSol0, tSol1, q / Math.max(1, solTri.length - 1)) + (q % 3) * 0.12;
      const dur = 1.3 + (q % 4) * 0.25;
      tl.to(p.s, { g: 1, duration: dur, ease: 'sine.out' }, t);
      tl.to(p.s, { bud: 1, duration: 0.5, ease: 'none' }, t + dur * 0.85);
      tl.to(p.s, { open: 1, duration: 0.9, ease: 'power1.out' }, t + dur * 0.85 + 0.25);
      tl.to(p.s, { vent: 1, duration: 2, ease: 'sine.inOut' }, t + dur);
    });
    const fondTri = fond.slice().sort((a, b) => b.base[1] - a.base[1] || b.tige.P3[1] - a.tige.P3[1]);
    const tF0 = B[Math.min(n - 1, 7)], tF1 = B[n - 1];
    fondTri.sort((a, b) => b.tige.P3[1] - a.tige.P3[1]).forEach((p, q) => {
      const t = lerp(tF0, tF1, q / Math.max(1, fondTri.length - 1));
      tl.to(p.s, { g: 1, duration: 1.4, ease: 'sine.inOut' }, t - 1.2);
      tl.to(p.s, { bud: 1, duration: 0.45, ease: 'none' }, t);
      tl.to(p.s, { open: 1, duration: 1.0, ease: 'power1.out' }, t + 0.25);
      tl.to(p.s, { vent: 1, duration: 2, ease: 'sine.inOut' }, t + 0.6);
    });

    // finale
    const T = B[n - 1] ?? 3;
    tl.to(lumC.s, { o: 0.9, r: 0.8, duration: 0.8, ease: 'sine.inOut' }, T - 1.5);
    tl.to(pc.s, { g: 1, duration: 3.0, ease: 'sine.inOut' }, T - 1.35);
    const Tpause = T + 1.0;
    tl.to(etatScene.s, { dim: 0.7, duration: 0.6, ease: 'sine.inOut' }, Tpause);
    tl.to(pc.s, { bud: 1, duration: 0.7, ease: 'none' }, Tpause + 0.05);
    const Touv = Tpause + 0.7;
    tl.to(lumC.s, { o: 0, r: 2.2, duration: 1.0, ease: 'sine.out' }, Touv - 0.25);
    tl.to(pc.s, { open: 1, duration: 1.75, ease: 'power1.out' }, Touv);
    tl.to(pc.s, { halo: 1, duration: 1.3, ease: 'sine.inOut' }, Touv);
    tl.to(etatScene.s, { dim: 1, amb: 1, duration: 1.8, ease: 'sine.inOut' }, Touv + 0.2);
    const Tpaix = Touv + 0.4;
    tl.to(etatScene.s, { voile: 1, duration: 1.2, ease: 'sine.inOut' }, Tpaix - 0.4);
    tl.to(paix.s, { o: 1, duration: 0.9, ease: 'sine.out' }, Tpaix);
    tl.to(paix.s, { m: 1, duration: 1.4, ease: 'power1.inOut' }, Tpaix);
    tl.to(paix.s, { b: 0, duration: 1.1, ease: 'power2.out' }, Tpaix);
    tl.to(paix.s, { y: 0, duration: 1.7, ease: 'power3.out' }, Tpaix);
    tl.to(paix.s, { g: 1, duration: 1.4, ease: 'sine.inOut' }, Tpaix + 0.1);
    tl.to(pc.s, { vent: 1, duration: 3, ease: 'sine.inOut' }, Touv + 1.6);
    for (const q of pollen) {
      if (q.base >= 0) continue;
      const t0 = Touv + 0.2 + q.q * 0.12, d = 2.2 + (q.q % 3) * 0.4;
      tl.fromTo(q.s, { p: 0, o: 0 }, { p: 1, duration: d, ease: 'sine.out', immediateRender: false }, t0);
      tl.fromTo(q.s, { o: 0 }, { o: 1, duration: 0.3, immediateRender: false }, t0);
      tl.to(q.s, { o: 0, duration: d * 0.6, ease: 'sine.in' }, t0 + d * 0.4);
    }
    chute.forEach((c, q) => {
      const t0 = Touv + 0.5 + q * 0.6, d = 6.5 + (q % 3) * 0.9;
      tl.to(c.s, { p: 1, duration: d, ease: 'none' }, t0);
      tl.to(c.s, { o: 0.85, duration: 0.8, ease: 'sine.out' }, t0);
      tl.to(c.s, { o: 0, duration: 1.4, ease: 'sine.in' }, t0 + d - 1.4);
    });
    tl.to(textes.map((m) => m.s), { o: (q) => (textes[q].repos >= 0.8 ? 0.5 : 0.34), duration: 1.8, ease: 'sine.inOut' }, Tpaix - 0.4);
    tl.call(finir, null, Tpaix + 4.2);
    sc.duree = Tpaix + 4.2;
    sc.Tpaix = Tpaix;
    return tl;
  }

  /* --- état final immédiat (réduit / après un redimensionnement) --- */
  function etatFinal(sc, avecVent) {
    for (const p of sc.plantes) Object.assign(p.s, { g: 1, bud: 1, open: 1, halo: p.estCentre ? 1 : 0, vent: avecVent ? 1 : 0 });
    for (const m of sc.textes) Object.assign(m.s, { o: m.repos, y: 0, b: 0, g: 0, c: 1 });
    Object.assign(sc.paix.s, { o: 1, y: 0, b: 0, g: 1, m: 1 });
    Object.assign(sc.etatScene.s, { dim: 1, amb: 1, voile: 1 });
    for (const L of sc.lumieres) L.s.o = 0;
    for (const q of sc.pollen) q.s.o = 0;
    for (const c of sc.chute) { c.s.o = 0; c.s.p = 1; }
  }

  /* --- cascade rapide (toucher pour tout voir) --- */
  function cascade() {
    if (!sc || mode === 'fini' || mode === 'cascade') return;
    mode = 'cascade';
    sc.tl.pause();
    const c = gsap.timeline();
    sc.cascade = c;
    const ordre = sc.plantes.filter((p) => !p.estCentre).sort((a, b) => (b.ay ?? b.base[1]) - (a.ay ?? a.base[1]));
    const N = ordre.length;
    ordre.forEach((p, q) => {
      const t = (q / Math.max(1, N - 1)) * 0.7;
      c.to(p.s, { g: 1, duration: 0.5, ease: 'power2.out' }, t);
      c.to(p.s, { bud: 1, duration: 0.25, ease: 'none' }, t + 0.25);
      c.to(p.s, { open: 1, duration: 0.55, ease: 'power1.out' }, t + 0.38);
      c.to(p.s, { halo: 0, duration: 0.5 }, t + 0.3);
      c.to(p.s, { vent: 1, duration: 1.5 }, t + 0.8);
    });
    const tt = sc.textes.slice().sort((a, b) => b.R.y - a.R.y);
    tt.forEach((m, q) => {
      const t = 0.3 + (q / Math.max(1, tt.length - 1)) * 0.65;
      c.to(m.s, { o: m.repos, y: 0, b: 0, g: 0, c: 1, duration: 0.45, ease: 'sine.out' }, t);
    });
    for (const L of sc.lumieres) c.to(L.s, { o: 0, duration: 0.3 }, 0);
    for (const q of sc.pollen) c.to(q.s, { o: 0, duration: 0.25 }, 0);
    const pc = sc.pc;
    c.to(sc.etatScene.s, { dim: 1, amb: 1, duration: 0.9, ease: 'sine.inOut' }, 0.5);
    c.to(pc.s, { g: 1, duration: 0.7, ease: 'power2.out' }, 0.1);
    c.to(pc.s, { bud: 1, duration: 0.25, ease: 'none' }, 0.65);
    c.to(pc.s, { open: 1, duration: 0.75, ease: 'power1.out' }, 0.75);
    c.to(pc.s, { halo: 1, duration: 0.6 }, 0.75);
    c.to(sc.etatScene.s, { voile: 1, duration: 0.5 }, 0.8);
    c.to(sc.paix.s, { o: 1, b: 0, y: 0, duration: 0.5, ease: 'sine.out' }, 0.95);
    c.to(sc.paix.s, { m: 1, duration: 0.55, ease: 'power1.inOut' }, 0.95);
    c.to(sc.paix.s, { g: 1, duration: 0.6 }, 1.0);
    c.to(pc.s, { vent: 1, duration: 2 }, 1.4);
    sc.chute.forEach((ch, q) => {
      if (q > 3) return;
      const t0 = 1.1 + q * 0.45, d = 6 + q * 0.7;
      c.set(ch.s, { p: 0, o: 0 }, t0);
      c.to(ch.s, { p: 1, duration: d, ease: 'none' }, t0);
      c.to(ch.s, { o: 0.85, duration: 0.7 }, t0);
      c.to(ch.s, { o: 0, duration: 1.2, ease: 'sine.in' }, t0 + d - 1.2);
    });
    c.call(finir, null, 1.5);
  }

  /* --- version « mouvement réduit » : simples fondus --- */
  function sequenceReduite() {
    mode = 'sequence';
    etatFinal(sc, false);
    const opac = sc.textes.map((m) => m.s.o);
    for (const m of sc.textes) m.s.o = 0;
    sc.paix.s.o = 0;
    sc.etatScene.s.dim = 0;
    const c = gsap.timeline();
    sc.cascade = c;
    c.to(sc.etatScene.s, { dim: 1, duration: 1.6, ease: 'sine.inOut' }, 0);
    sc.textes.forEach((m, q) => c.to(m.s, { o: opac[q], duration: 0.9, ease: 'sine.inOut' }, 0.5 + q * 0.06));
    c.to(sc.paix.s, { o: 1, duration: 1.2, ease: 'sine.inOut' }, 2.0);
    c.call(finir, null, 3.1);
  }

  /* --- rendu à chaque image --- */
  function rendre() {
    if (!sc || detruit) return;
    image++;
    const t = performance.now() / 1000;
    const ventOK = !reduit && !cache;
    // au repos, le vent se contente de 30 images/s
    if (mode === 'fini' && image % 2 && !sc.tl.isActive() && !(sc.cascade && sc.cascade.isActive())) return;
    for (const p of sc.plantes) rendrePlante(p, t, ventOK);
    for (const m of sc.textes) rendreTexte(m);
    rendreTexte(sc.paix);
    for (const L of sc.lumieres) {
      const s = L.s, l = L.l;
      const x = n1(L.p.lum.x), y = n1(L.p.lum.y - 2);
      if (s.o !== l.o || s.r !== l.r || x !== l.x || y !== l.y) {
        l.o = s.o; l.r = s.r; l.x = x; l.y = y;
        L.el.setAttribute('opacity', n3(s.o));
        L.el.setAttribute('r', n1(s.r * 30 * sc.lay.kb));
        L.el.setAttribute('cx', x);
        L.el.setAttribute('cy', y);
      }
    }
    for (const q of sc.pollen) {
      const s = q.s, l = q.l;
      if (s.p === l.p && s.o === l.o) continue;
      l.p = s.p; l.o = s.o;
      q.el.setAttribute('opacity', n3(s.o * 0.9));
      if (s.o > 0) {
        q.el.setAttribute('cx', n1(q.x0 + Math.sin(s.p * 3.6 + q.ph) * q.amp));
        q.el.setAttribute('cy', n1(q.y0 - s.p * q.haut));
      }
    }
    const H = sc.lay.H;
    for (const c of sc.chute) {
      const s = c.s, l = c.l;
      if (s.p === l.p && s.o === l.o) continue;
      l.p = s.p; l.o = s.o;
      c.el.setAttribute('opacity', n3(s.o));
      if (s.o > 0) {
        const y = lerp(c.y0, H + 30, s.p);
        const x = c.x0 + c.dx * s.p + Math.sin(s.p * 7 + c.ph) * c.amp;
        c.el.setAttribute('transform', `translate(${n1(x)} ${n1(y)}) rotate(${n1(c.rot0 + c.spin * s.p)}) scale(1 ${n2(0.55 + 0.45 * Math.abs(Math.cos(s.p * 9 + c.ph)))})`);
      }
    }
    const e = sc.etatScene, es = e.s, el2 = e.l;
    if (es.dim !== el2.dim) { el2.dim = es.dim; sc.svg.style.opacity = n3(es.dim); sc.mots.style.opacity = n3(es.dim); }
    if (es.amb !== el2.amb || mode === 'fini') {
      el2.amb = es.amb;
      const souffle = mode === 'fini' && !reduit ? 0.92 + 0.08 * Math.sin(t * 1.3) : 1;
      sc.eAmb.style.opacity = n3(es.amb * souffle);
    }
    if (es.voile !== el2.voile) { el2.voile = es.voile; sc.eVoile.setAttribute('opacity', n3(es.voile)); }
  }
  gsap.ticker.add(rendre);

  /* --- départ --- */
  function demarrer() {
    if (!sc || detruit) return;
    if (sautDemande) {
      if (reduit) { etatFinal(sc, false); rendre(); finir(); return; }
      cascade();
      return;
    }
    if (reduit) { sequenceReduite(); return; }
    mode = 'sequence';
    sc.tl.play(0);
  }

  const polices = attendrePolices(phrases.join('') + centre).then(() => {
    if (detruit) return;
    construire();
    pret = true;
    rendre();
    if (lance || sautDemande) demarrer();
  });

  /* --- rotation : on refait la mise en page si la largeur change --- */
  let minuterieRO = 0;
  const reconstruire = () => {
    if (!sc || detruit) return;
    const W = Math.round(racine.clientWidth);
    if (!W || Math.abs(W - largeurFaite) < 2) return;
    const temps = sc.tl.time();
    const enCours = mode === 'sequence' && !reduit && sc.tl.isActive();
    const etait = mode;
    defaire();
    construire();
    if (etait === 'fini' || etait === 'cascade' || (etait === 'sequence' && reduit)) {
      etatFinal(sc, !reduit);
      if (etait !== 'fini') finir();
    } else if (etait === 'sequence') {
      sc.tl.time(temps, true);
      if (enCours && !cache) sc.tl.play();
      mode = 'sequence';
    }
    rendre();
  };
  const ro = typeof ResizeObserver !== 'undefined' ? new ResizeObserver(() => {
    clearTimeout(minuterieRO);
    minuterieRO = setTimeout(reconstruire, 180);
  }) : null;
  if (ro) ro.observe(racine);

  /* --- onglet caché : on met tout en pause --- */
  let repriseTl = false, repriseC = false;
  const visibilite = () => {
    cache = document.hidden;
    if (!sc) return;
    if (cache) {
      repriseTl = sc.tl.isActive();
      repriseC = !!(sc.cascade && sc.cascade.isActive());
      sc.tl.pause();
      if (sc.cascade) sc.cascade.pause();
    } else {
      if (repriseTl) sc.tl.play();
      if (repriseC && sc.cascade) sc.cascade.play();
    }
  };
  document.addEventListener('visibilitychange', visibilite);

  function defaire() {
    if (!sc) return;
    sc.tl.kill();
    if (sc.cascade) sc.cascade.kill();
    racine.textContent = '';
    sc = null;
  }

  let fige = false;
  return {
    figer() {
      if (detruit || fige) return;
      fige = true;
      gsap.ticker.remove(rendre);
      if (sc) { sc.tl.pause(); if (sc.cascade) sc.cascade.pause(); }
    },
    reprendre() {
      if (detruit || !fige) return;
      fige = false;
      gsap.ticker.add(rendre);
      if (sc) { sc.tl.play(); if (sc.cascade) sc.cascade.play(); }
    },
    lancer() {
      if (lance || detruit) return;
      lance = true;
      if (pret) demarrer();
    },
    toutMontrer() {
      if (detruit || finAppelee) return;
      sautDemande = true;
      lance = true;
      if (!pret) return;
      if (reduit) {
        if (sc.cascade) sc.cascade.kill();
        const c = gsap.timeline();
        sc.cascade = c;
        mode = 'cascade';
        etatFinal(sc, false);
        const op = sc.textes.map((m) => m.s.o);
        for (const m of sc.textes) m.s.o = 0;
        sc.paix.s.o = 0;
        c.to(sc.textes.map((m) => m.s), { o: (q) => op[q], duration: 0.4 }, 0);
        c.to(sc.paix.s, { o: 1, duration: 0.4 }, 0.1);
        c.to(sc.etatScene.s, { dim: 1, duration: 0.4 }, 0);
        c.call(finir, null, 0.5);
        return;
      }
      if (mode === 'attente') { cascade(); return; }
      cascade();
    },
    detruire() {
      if (detruit) return;
      detruit = true;
      gsap.ticker.remove(rendre);
      document.removeEventListener('visibilitychange', visibilite);
      if (ro) ro.disconnect();
      clearTimeout(minuterieRO);
      defaire();
      racine.remove();
      instances--;
      if (instances <= 0) {
        const s = document.getElementById(STYLE_ID);
        if (s) s.remove();
      }
    },
  };
}

function attendrePolices(texte) {
  if (!document.fonts || !document.fonts.load) return Promise.resolve();
  const t = texte || 'a';
  const p = Promise.all([
    document.fonts.load('italic 500 20px "Cormorant Garamond"', t),
    document.fonts.load('italic 600 20px "Cormorant Garamond"', t),
    document.fonts.load('400 40px "Great Vibes"', t),
  ]).catch(() => {});
  return Promise.race([p, new Promise((r) => setTimeout(r, 2500))]);
}
