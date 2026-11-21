// Décor marocain généré en SVG : arcs polylobés, zellige, étoiles à 8 branches (khatam), séparateurs.
const GOLD = '#d9b56c';

export function starPts(cx, cy, R, rot = 0) {
  const r = R * 0.7654, pts = [];
  for (let i = 0; i < 16; i++) {
    const a = rot + (i * Math.PI) / 8 - Math.PI / 2, rad = i % 2 ? r : R;
    pts.push(`${(cx + Math.cos(a) * rad).toFixed(2)},${(cy + Math.sin(a) * rad).toFixed(2)}`);
  }
  return pts.join(' ');
}

// arc polylobé (lobes tournés vers l'extérieur, pointes vers l'intérieur)
function cubic(p0, p1, p2, p3, t) {
  const u = 1 - t;
  return [u * u * u * p0[0] + 3 * u * u * t * p1[0] + 3 * u * t * t * p2[0] + t * t * t * p3[0],
    u * u * u * p0[1] + 3 * u * u * t * p1[1] + 3 * u * t * t * p2[1] + t * t * t * p3[1]];
}
export function archPath(w, h, { spring = 0.42, inset = 0, lobes = 0, peak = 0.06 } = {}) {
  const sy = Math.max(h * spring, w * 0.55) + inset;
  const P0 = [inset, sy], P1 = [inset, sy * 0.4], P2 = [w * 0.16 + inset * 0.5, inset + h * peak * 0.3], P3 = [w / 2, inset];
  if (!lobes) {
    const r = [w - inset, sy], r1 = [w - inset, sy * 0.4], r2 = [w - (w * 0.16 + inset * 0.5), inset + h * peak * 0.3];
    return `M${inset},${h} L${P0} C${P1} ${P2} ${P3} C${r2} ${r1} ${r} L${w - inset},${h}`;
  }
  const n = lobes; const left = [];
  for (let i = 0; i <= n; i++) left.push(cubic(P0, P1, P2, P3, i / n));
  const right = left.slice(0, -1).reverse().map(([x, y]) => [w - x, y]);
  const all = left.concat(right);
  let d = `M${inset},${h} L${all[0][0].toFixed(1)},${all[0][1].toFixed(1)}`;
  for (let i = 1; i < all.length; i++) {
    const [x0, y0] = all[i - 1], [x1, y1] = all[i];
    const r = (Math.hypot(x1 - x0, y1 - y0) / 2) * 1.08;
    d += ` A${r.toFixed(1)},${r.toFixed(1)} 0 0 1 ${x1.toFixed(1)},${y1.toFixed(1)}`;
  }
  return d + ` L${w - inset},${h}`;
}

export function archSVG(w, h, { lobes = 11, glow = true, fill = false } = {}) {
  const outer = archPath(w, h, { inset: 1.5 });
  const mid = archPath(w, h, { inset: 9 });
  const inner = archPath(w, h, { inset: 17, lobes });
  const apexY = 1.5;
  return `<svg viewBox="0 0 ${w} ${h}" width="${w}" height="${h}" fill="none" aria-hidden="true">
    <defs><linearGradient id="ag${w | 0}" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#f3dc9e"/><stop offset=".5" stop-color="${GOLD}"/><stop offset="1" stop-color="#8a6a2e" stop-opacity=".0"/></linearGradient>
      <linearGradient id="af${w | 0}" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#0e3a3a" stop-opacity=".82"/><stop offset=".35" stop-color="#070b1e" stop-opacity=".9"/><stop offset="1" stop-color="#05061a" stop-opacity=".94"/></linearGradient></defs>
    ${fill ? `<path d="${outer} Z" fill="url(#af${w | 0})"/>` : ''}
    <path class="draw" d="${outer}" stroke="url(#ag${w | 0})" stroke-width="1.6"${glow ? ' filter="drop-shadow(0 0 6px rgba(217,181,108,.55))"' : ''}/>
    <path class="draw" d="${mid}" stroke="url(#ag${w | 0})" stroke-width=".7" opacity=".55"/>
    <path class="draw" d="${inner}" stroke="url(#ag${w | 0})" stroke-width="1.1"/>
    <polygon class="pop" points="${starPts(w / 2, apexY + 2, 7)}" fill="#0a0d24" stroke="${GOLD}" stroke-width="1.1" transform="translate(0,-10)"/>
    <circle class="pop" cx="${w / 2}" cy="${apexY - 8}" r="1.6" fill="${GOLD}"/>
  </svg>`;
}

// bande de zellige (étoiles khatam colorées + croisillons)
export function zelligeURI() {
  const cols = ['#1d4f8f', '#0f6b57', '#a8462a', '#0f6b57'];
  let s = `<svg xmlns='http://www.w3.org/2000/svg' width='240' height='60' viewBox='0 0 240 60'><rect width='240' height='60' fill='#0a0e26'/>`;
  for (let i = 0; i < 4; i++) {
    const cx = 30 + i * 60;
    s += `<polygon points='${starPts(cx, 30, 25)}' fill='${cols[i]}' stroke='${GOLD}' stroke-width='1.2'/>`;
    s += `<polygon points='${starPts(cx, 30, 11, Math.PI / 8)}' fill='#efe4cc' stroke='${GOLD}' stroke-width='.8'/>`;
    s += `<circle cx='${cx}' cy='30' r='3' fill='${cols[(i + 2) % 4]}'/>`;
    s += `<polygon points='${cx + 30},18 ${cx + 36},30 ${cx + 30},42 ${cx + 24},30' fill='#efe4cc' stroke='${GOLD}' stroke-width='.8'/>`;
    s += `<polygon points='${cx},-6 ${cx + 6},2 ${cx},10 ${cx - 6},2' fill='${GOLD}' opacity='.55'/><polygon points='${cx},50 ${cx + 6},58 ${cx},66 ${cx - 6},58' fill='${GOLD}' opacity='.55'/>`;
  }
  s += `<line x1='0' y1='.6' x2='240' y2='.6' stroke='${GOLD}'/><line x1='0' y1='59.4' x2='240' y2='59.4' stroke='${GOLD}'/></svg>`;
  return `url("data:image/svg+xml,${encodeURIComponent(s)}")`;
}

// motif khatam en filigrane (fond)
export function khatamURI(op = 0.09) {
  const s = `<svg xmlns='http://www.w3.org/2000/svg' width='120' height='120' viewBox='0 0 120 120'><g fill='none' stroke='${GOLD}' stroke-width='.8' opacity='${op}'>
    <polygon points='${starPts(60, 60, 34)}'/><polygon points='${starPts(60, 60, 16, Math.PI / 8)}'/>
    <polygon points='${starPts(0, 0, 34)}'/><polygon points='${starPts(120, 0, 34)}'/><polygon points='${starPts(0, 120, 34)}'/><polygon points='${starPts(120, 120, 34)}'/>
    <path d='M60 26 L60 0 M60 94 L60 120 M26 60 L0 60 M94 60 L120 60'/></g></svg>`;
  return `url("data:image/svg+xml,${encodeURIComponent(s)}")`;
}

export function dividerSVG() {
  return `<svg viewBox="0 0 360 30" fill="none" aria-hidden="true">
    <defs><linearGradient id="dl" x1="0" x2="1"><stop offset="0" stop-color="${GOLD}" stop-opacity="0"/><stop offset="1" stop-color="${GOLD}"/></linearGradient>
    <linearGradient id="dr" x1="1" x2="0"><stop offset="0" stop-color="${GOLD}" stop-opacity="0"/><stop offset="1" stop-color="${GOLD}"/></linearGradient></defs>
    <path class="draw" d="M8 15 H146" stroke="url(#dl)" stroke-width="1"/><path class="draw" d="M352 15 H214" stroke="url(#dr)" stroke-width="1"/>
    <polygon class="pop" points="152,15 158,10 164,15 158,20" fill="${GOLD}"/><polygon class="pop" points="208,15 202,10 196,15 202,20" fill="${GOLD}"/>
    <polygon class="pop spin" points="${starPts(180, 15, 12)}" stroke="${GOLD}" stroke-width="1.2" fill="#0a0d24"/>
    <polygon class="pop" points="${starPts(180, 15, 5, Math.PI / 8)}" fill="${GOLD}"/>
  </svg>`;
}

export function cornerSVG() {
  return `<svg viewBox="0 0 60 60" fill="none" aria-hidden="true"><path d="M2 58 V18 Q2 2 18 2 H58" stroke="${GOLD}" stroke-width="1.2"/>
    <path d="M8 58 V22 Q8 8 22 8 H58" stroke="${GOLD}" stroke-width=".6" opacity=".6"/>
    <polygon points="${starPts(15, 15, 6)}" fill="${GOLD}"/></svg>`;
}

export function decorate(root = document) {
  root.querySelectorAll('[data-divider]').forEach((el) => { el.innerHTML = dividerSVG(); });
  root.querySelectorAll('[data-corners]').forEach((el) => {
    ['tl', 'tr', 'bl', 'br'].forEach((c) => { const s = document.createElement('span'); s.className = `corner ${c}`; s.innerHTML = cornerSVG(); el.appendChild(s); });
  });
  document.documentElement.style.setProperty('--zellige', zelligeURI());
  document.documentElement.style.setProperty('--khatam', khatamURI());
  const arches = () => root.querySelectorAll('[data-arch]').forEach((el) => {
    const r = el.getBoundingClientRect(); if (!r.width) return;
    el.innerHTML = archSVG(Math.round(r.width), Math.round(r.height), { lobes: +(el.dataset.lobes || 11), fill: 'fill' in el.dataset });
  });
  arches();
  let to; addEventListener('resize', () => { clearTimeout(to); to = setTimeout(arches, 150); });
  return { arches };
}
