/*
  Scène 3D du cadeau : une boîte qu'on tape plusieurs fois, puis la bague qui en sort.
  Construit avec Three.js + GSAP. Compilé dans cadeau/dist/cadeau3d.js :
    npm run build:cadeau
*/
import * as THREE from 'three';
import gsap from 'gsap';
import { RoundedBoxGeometry } from 'three/examples/jsm/geometries/RoundedBoxGeometry.js';
import { RoomEnvironment } from 'three/examples/jsm/environments/RoomEnvironment.js';

const TAU = Math.PI * 2;
const rand = (a, b) => a + Math.random() * (b - a);
const pick = (t) => t[(Math.random() * t.length) | 0];
const rgb = (h) => { const n = parseInt(h.slice(1), 16); return [(n >> 16 & 255) / 255, (n >> 8 & 255) / 255, (n & 255) / 255]; };

const OR = ['#e9cf98', '#d6b47a', '#f4e6c8'];
const ROSE = ['#e8c1b8', '#f4ece1', '#c98a8f']; // pétales : blush, ivoire, rose ancien
const BLANC = ['#ffffff', '#f4ece1'];

// Dimensions de la boîte (unités 3D)
const W = 1.55, H = 1.25, LH = 0.34, LW = W + 0.12;
const COUV_Y = H + LH / 2 - 0.05;
const BAGUE_Y = 3.2;
const ROT_BOITE = -0.55;

export function webglOK() {
  try { const c = document.createElement('canvas'); return !!c.getContext('webgl2'); }
  catch (e) { return false; }
}

/* ---------- Textures dessinées à la volée ---------- */
function texture(dessin, taille = 128) {
  const c = document.createElement('canvas');
  c.width = c.height = taille;
  dessin(c.getContext('2d'), taille);
  const t = new THREE.CanvasTexture(c);
  t.colorSpace = THREE.SRGBColorSpace;
  return t;
}
const texLueur = () => texture((g, s) => {
  const r = g.createRadialGradient(s / 2, s / 2, 0, s / 2, s / 2, s / 2);
  r.addColorStop(0, 'rgba(255,255,255,1)'); r.addColorStop(0.22, 'rgba(255,255,255,.5)');
  r.addColorStop(0.55, 'rgba(255,255,255,.12)'); r.addColorStop(1, 'rgba(255,255,255,0)');
  g.fillStyle = r; g.fillRect(0, 0, s, s);
});
const texEtoile = () => texture((g, s) => {
  const c = s / 2;
  const r = g.createRadialGradient(c, c, 0, c, c, c * 0.45);
  r.addColorStop(0, 'rgba(255,255,255,1)'); r.addColorStop(0.35, 'rgba(255,255,255,.35)'); r.addColorStop(1, 'rgba(255,255,255,0)');
  g.fillStyle = r; g.fillRect(0, 0, s, s);
  g.globalCompositeOperation = 'lighter';
  [[0, c, s * 0.05], [Math.PI / 2, c, s * 0.05], [Math.PI / 4, c * 0.55, s * 0.03], [-Math.PI / 4, c * 0.55, s * 0.03]].forEach(([a, L, w]) => {
    g.save(); g.translate(c, c); g.rotate(a);
    const l = g.createLinearGradient(-L, 0, L, 0);
    l.addColorStop(0, 'rgba(255,255,255,0)'); l.addColorStop(0.5, 'rgba(255,255,255,1)'); l.addColorStop(1, 'rgba(255,255,255,0)');
    g.fillStyle = l; g.beginPath(); g.ellipse(0, 0, L, w / 2, 0, 0, TAU); g.fill(); g.restore();
  });
});
// Pétale (forme de goutte, légère nervure) : remplace les cœurs
const texPetale = () => texture((g, s) => {
  g.translate(s / 2, s / 2);
  g.shadowColor = 'rgba(255,255,255,.6)'; g.shadowBlur = s * 0.08;
  const d = g.createLinearGradient(0, -s * 0.4, 0, s * 0.4);
  d.addColorStop(0, 'rgba(255,255,255,1)'); d.addColorStop(1, 'rgba(255,255,255,.7)');
  g.fillStyle = d;
  g.beginPath();
  g.moveTo(0, -s * 0.42);
  g.bezierCurveTo(s * 0.3, -s * 0.2, s * 0.26, s * 0.22, 0, s * 0.42);
  g.bezierCurveTo(-s * 0.26, s * 0.22, -s * 0.3, -s * 0.2, 0, -s * 0.42);
  g.fill();
  g.shadowBlur = 0; g.strokeStyle = 'rgba(0,0,0,.12)'; g.lineWidth = s * 0.012;
  g.beginPath(); g.moveTo(0, -s * 0.3); g.quadraticCurveTo(s * 0.03, 0, 0, s * 0.34); g.stroke();
});
const texOmbre = () => texture((g, s) => {
  const r = g.createRadialGradient(s / 2, s / 2, 0, s / 2, s / 2, s / 2);
  r.addColorStop(0, 'rgba(0,0,0,.75)'); r.addColorStop(0.5, 'rgba(0,0,0,.35)'); r.addColorStop(1, 'rgba(0,0,0,0)');
  g.fillStyle = r; g.fillRect(0, 0, s, s);
});
const texInterieur = () => texture((g, s) => {
  const r = g.createRadialGradient(s / 2, s / 2, 0, s / 2, s / 2, s * 0.62);
  r.addColorStop(0, '#fff6e0'); r.addColorStop(0.3, '#f0cf8a'); r.addColorStop(0.7, '#7a2e3b'); r.addColorStop(1, '#2a0e16');
  g.fillStyle = r; g.fillRect(0, 0, s, s);
}, 256);

/* ---------- Système de particules (étincelles, cœurs, poussières) ---------- */
const vsParticules = /* glsl */`
  attribute vec3 aColor; attribute float aSize; attribute float aAlpha; attribute float aRot;
  uniform float uScale;
  varying vec3 vColor; varying float vAlpha; varying float vRot;
  void main() {
    vec4 mv = modelViewMatrix * vec4(position, 1.0);
    gl_Position = projectionMatrix * mv;
    gl_PointSize = aSize * uScale / max(-mv.z, 0.001);
    vColor = aColor; vAlpha = aAlpha; vRot = aRot;
  }`;
const fsParticules = /* glsl */`
  uniform sampler2D uTex;
  varying vec3 vColor; varying float vAlpha; varying float vRot;
  void main() {
    vec2 p = gl_PointCoord - 0.5;
    float c = cos(vRot), s = sin(vRot);
    p = mat2(c, -s, s, c) * p + 0.5;
    vec4 t = texture2D(uTex, p);
    float a = t.a * vAlpha;
    if (a < 0.003) discard;
    gl_FragColor = vec4(vColor * t.rgb, a);
  }`;

class Particules {
  constructor(n, tex, fusion = THREE.AdditiveBlending) {
    this.n = n; this.i = 0; this.t = 0;
    const f = (k) => new Float32Array(n * k);
    Object.assign(this, {
      pos: f(3), vel: f(3), col: f(3), taille: f(1), base: f(1), alpha: f(1), opa: f(1),
      rot: f(1), vrot: f(1), vie: f(1), vieMax: f(1), grav: f(1), frein: f(1), phase: f(1)
    });
    const g = new THREE.BufferGeometry();
    const attr = (nom, tab, k) => { const a = new THREE.BufferAttribute(tab, k); a.setUsage(THREE.DynamicDrawUsage); g.setAttribute(nom, a); return a; };
    this.aPos = attr('position', this.pos, 3); this.aCol = attr('aColor', this.col, 3);
    this.aTaille = attr('aSize', this.taille, 1); this.aAlpha = attr('aAlpha', this.alpha, 1); this.aRot = attr('aRot', this.rot, 1);
    this.mat = new THREE.ShaderMaterial({
      uniforms: { uTex: { value: tex }, uScale: { value: 400 } },
      vertexShader: vsParticules, fragmentShader: fsParticules,
      transparent: true, depthWrite: false, blending: fusion
    });
    this.points = new THREE.Points(g, this.mat);
    this.points.frustumCulled = false;
    this.points.renderOrder = 5;
  }
  emettre(o) {
    const dir = (o.direction || new THREE.Vector3(0, 1, 0)).clone().normalize();
    const v = new THREE.Vector3(), q = new THREE.Quaternion();
    for (let k = 0; k < o.nombre; k++) {
      const i = this.i++ % this.n, i3 = i * 3;
      // position de départ : dans un disque horizontal ou une sphère
      const a = Math.random() * TAU, r = Math.sqrt(Math.random()) * (o.rayon || 0);
      this.pos[i3] = o.origine.x + Math.cos(a) * r;
      this.pos[i3 + 1] = o.origine.y + (o.hauteur ? rand(-o.hauteur, o.hauteur) : 0);
      this.pos[i3 + 2] = o.origine.z + Math.sin(a) * r;
      // direction dans un cône autour de « dir »
      const cone = o.cone == null ? 0.5 : o.cone;
      const th = Math.acos(1 - Math.random() * (1 - Math.cos(cone))), ph = Math.random() * TAU;
      v.set(Math.sin(th) * Math.cos(ph), Math.cos(th), Math.sin(th) * Math.sin(ph));
      q.setFromUnitVectors(new THREE.Vector3(0, 1, 0), dir); v.applyQuaternion(q);
      const vit = rand(o.vitesse[0], o.vitesse[1]);
      this.vel[i3] = v.x * vit; this.vel[i3 + 1] = v.y * vit; this.vel[i3 + 2] = v.z * vit;
      const c = rgb(pick(o.couleurs));
      this.col[i3] = c[0]; this.col[i3 + 1] = c[1]; this.col[i3 + 2] = c[2];
      this.base[i] = rand(o.taille[0], o.taille[1]);
      this.vieMax[i] = this.vie[i] = rand(o.vie[0], o.vie[1]);
      this.grav[i] = o.gravite || 0; this.frein[i] = o.frein || 0;
      this.opa[i] = o.opacite || 1;
      this.rot[i] = Math.random() * TAU; this.vrot[i] = rand(-2.5, 2.5) * (o.tourne == null ? 1 : o.tourne);
      this.phase[i] = Math.random() * TAU;
    }
  }
  maj(dt) {
    this.t += dt;
    for (let i = 0; i < this.n; i++) {
      if (this.vie[i] <= 0) { this.alpha[i] = 0; this.taille[i] = 0; continue; }
      this.vie[i] -= dt;
      const i3 = i * 3, fr = Math.exp(-this.frein[i] * dt);
      this.vel[i3] *= fr; this.vel[i3 + 1] = this.vel[i3 + 1] * fr - this.grav[i] * dt; this.vel[i3 + 2] *= fr;
      this.pos[i3] += this.vel[i3] * dt; this.pos[i3 + 1] += this.vel[i3 + 1] * dt; this.pos[i3 + 2] += this.vel[i3 + 2] * dt;
      this.rot[i] += this.vrot[i] * dt;
      const reste = Math.max(this.vie[i] / this.vieMax[i], 0), age = 1 - reste;
      const scint = 0.7 + 0.3 * Math.sin(this.t * 14 + this.phase[i] * 7);
      this.alpha[i] = Math.min(1, age * 10) * Math.min(1, reste * 2.5) * scint * this.opa[i];
      this.taille[i] = this.base[i] * (0.45 + 0.55 * Math.min(1, reste * 1.6));
    }
    this.aPos.needsUpdate = this.aCol.needsUpdate = this.aTaille.needsUpdate = this.aAlpha.needsUpdate = this.aRot.needsUpdate = true;
  }
}

/* ---------- Faisceau de lumière qui sort de la boîte ---------- */
function creerFaisceau() {
  const geo = new THREE.CylinderGeometry(1.35, W * 0.42, 5, 64, 1, true);
  geo.translate(0, 2.5, 0); // la base est à l'origine : on peut l'étirer vers le haut
  const mat = new THREE.ShaderMaterial({
    uniforms: { uOpacite: { value: 0 }, uTemps: { value: 0 }, uCouleur: { value: new THREE.Color('#ffd9a0') } },
    vertexShader: /* glsl */`
      varying vec2 vUv; varying float vFace;
      void main() {
        vUv = uv;
        vec4 mv = modelViewMatrix * vec4(position, 1.0);
        vFace = abs(dot(normalize(normalMatrix * normal), normalize(-mv.xyz)));
        gl_Position = projectionMatrix * mv;
      }`,
    fragmentShader: /* glsl */`
      uniform float uOpacite; uniform float uTemps; uniform vec3 uCouleur;
      varying vec2 vUv; varying float vFace;
      void main() {
        float h = vUv.y;
        float fondu = pow(1.0 - h, 1.8) * smoothstep(0.0, 0.03, h);
        float bord = pow(vFace, 2.2);
        float stries = 0.72 + 0.28 * sin(vUv.x * 75.4 + uTemps * 1.3) * sin(vUv.x * 31.4 - uTemps * 0.8);
        gl_FragColor = vec4(uCouleur, fondu * bord * stries * uOpacite);
      }`,
    transparent: true, depthWrite: false, side: THREE.DoubleSide, blending: THREE.AdditiveBlending
  });
  const m = new THREE.Mesh(geo, mat);
  m.renderOrder = 4;
  return m;
}

/* ---------- La boîte cadeau ---------- */
function creerBoite() {
  const matBoite = new THREE.MeshPhysicalMaterial({
    color: '#3d0f1a', roughness: 0.62, metalness: 0, clearcoat: 0.06, clearcoatRoughness: 0.5,
    sheen: 0.25, sheenColor: new THREE.Color('#7a2e3b'), sheenRoughness: 0.6, envMapIntensity: 0.3
  });
  const matRuban = new THREE.MeshPhysicalMaterial({ color: '#c9a46a', metalness: 0.85, roughness: 0.28, clearcoat: 0.3, clearcoatRoughness: 0.3 });

  const racine = new THREE.Group();   // saut + rotation lente
  const tilt = new THREE.Group();     // bascule pendant les secousses
  const squash = new THREE.Group();   // écrasement / étirement (pivot au sol)
  racine.add(tilt); tilt.add(squash);

  const corps = new THREE.Mesh(new RoundedBoxGeometry(W, H, W, 4, 0.07), matBoite);
  corps.position.y = H / 2;
  squash.add(corps);
  const r1 = new THREE.Mesh(new RoundedBoxGeometry(0.26, H + 0.01, W + 0.02, 2, 0.02), matRuban);
  const r2 = new THREE.Mesh(new RoundedBoxGeometry(W + 0.02, H + 0.01, 0.26, 2, 0.02), matRuban);
  r1.position.y = r2.position.y = H / 2;
  squash.add(r1, r2);

  // Le fond lumineux qu'on aperçoit quand le couvercle se soulève
  const interieur = new THREE.Mesh(
    new THREE.PlaneGeometry(W - 0.1, W - 0.1),
    new THREE.MeshBasicMaterial({ map: texInterieur(), toneMapped: false })
  );
  interieur.rotation.x = -Math.PI / 2;
  interieur.position.y = H + 0.004;
  squash.add(interieur);

  // Couvercle + nœud
  const couvercle = new THREE.Group();
  couvercle.position.y = COUV_Y;
  couvercle.add(new THREE.Mesh(new RoundedBoxGeometry(LW, LH, LW, 4, 0.07), matBoite));
  const c1 = new THREE.Mesh(new RoundedBoxGeometry(0.27, LH + 0.012, LW + 0.012, 2, 0.02), matRuban);
  const c2 = new THREE.Mesh(new RoundedBoxGeometry(LW + 0.012, LH + 0.012, 0.27, 2, 0.02), matRuban);
  couvercle.add(c1, c2);

  const noeud = new THREE.Group();
  noeud.position.y = LH / 2;
  const boucleGeo = new THREE.TorusGeometry(0.27, 0.06, 18, 56);
  [-1, 1].forEach((cote) => {
    const b = new THREE.Mesh(boucleGeo, matRuban);
    b.scale.set(1, 0.55, 0.18); // boucle très aplatie : un ruban, pas un anneau
    b.position.set(cote * 0.27, 0.17, 0);
    b.rotation.set(0, cote * 0.5, cote * -0.42);
    noeud.add(b);
    const queue = new THREE.Mesh(new RoundedBoxGeometry(0.2, 0.03, 0.62, 2, 0.012), matRuban);
    queue.position.set(cote * 0.14, 0.02, 0.26);
    queue.rotation.y = cote * 0.5;
    noeud.add(queue);
  });
  const coeurNoeud = new THREE.Mesh(new THREE.SphereGeometry(0.115, 24, 16), matRuban);
  coeurNoeud.scale.set(1.1, 0.85, 0.95);
  coeurNoeud.position.y = 0.11;
  noeud.add(coeurNoeud);
  couvercle.add(noeud);
  squash.add(couvercle);

  return { racine, tilt, squash, couvercle, matBoite, matRuban };
}

/* ---------- La bague ---------- */
function creerBague(texE, texL) {
  const matOr = new THREE.MeshPhysicalMaterial({ color: '#e2c08a', metalness: 1, roughness: 0.18, clearcoat: 0.5, clearcoatRoughness: 0.1, envMapIntensity: 1.1 });
  const matDiamant = new THREE.MeshPhysicalMaterial({
    color: '#f2f9ff', metalness: 1, roughness: 0, iridescence: 0.35, iridescenceIOR: 1.8,
    envMapIntensity: 5, flatShading: true, clearcoat: 1, clearcoatRoughness: 0
  });

  const bague = new THREE.Group();      // position / échelle
  const tour = new THREE.Group();       // grands tours (sortie, célébration)
  const balance = new THREE.Group();    // balancement au repos
  bague.add(tour); tour.add(balance);

  const R = 0.44, T = 0.052;
  balance.add(new THREE.Mesh(new THREE.TorusGeometry(R, T, 48, 180), matOr));

  const yG = R + T + 0.2; // hauteur du rondiste (le « tour » du diamant)
  const profil = [[0.0005, -0.25], [0.26, -0.015], [0.275, 0], [0.26, 0.035], [0.165, 0.115], [0.0005, 0.115]]
    .map(([x, y]) => new THREE.Vector2(x, y));
  const geoD = new THREE.LatheGeometry(profil, 32).toNonIndexed();
  geoD.computeVertexNormals();
  const diamant = new THREE.Mesh(geoD, matDiamant);
  diamant.position.y = yG;
  balance.add(diamant);

  const panier = new THREE.Mesh(new THREE.CylinderGeometry(0.17, 0.06, 0.2, 32, 1, true), matOr);
  panier.position.y = R + T + 0.02;
  balance.add(panier);
  const haut = new THREE.Vector3(0, 1, 0);
  for (let k = 0; k < 6; k++) {
    const a = (k / 6) * TAU + Math.PI / 6;
    const p1 = new THREE.Vector3(Math.cos(a) * 0.1, R + T - 0.02, Math.sin(a) * 0.1);
    const p2 = new THREE.Vector3(Math.cos(a) * 0.268, yG + 0.04, Math.sin(a) * 0.268);
    const d = p2.clone().sub(p1);
    const g = new THREE.Mesh(new THREE.CylinderGeometry(0.016, 0.022, d.length(), 10), matOr);
    g.position.copy(p1).addScaledVector(d, 0.5);
    g.quaternion.setFromUnitVectors(haut, d.normalize());
    balance.add(g);
    const bout = new THREE.Mesh(new THREE.SphereGeometry(0.02, 10, 8), matOr);
    bout.position.copy(p2);
    balance.add(bout);
  }

  // Halo derrière la bague et éclat sur le diamant
  const halo = new THREE.Sprite(new THREE.SpriteMaterial({ map: texL, color: '#f4ece1', transparent: true, opacity: 0, blending: THREE.AdditiveBlending, depthWrite: false }));
  halo.scale.set(3.2, 3.2, 1); halo.position.set(0, 0.2, -0.4);
  bague.add(halo);
  const eclat = new THREE.Sprite(new THREE.SpriteMaterial({ map: texE, color: '#ffffff', transparent: true, opacity: 0, blending: THREE.AdditiveBlending, depthWrite: false }));
  eclat.position.set(0.06, yG + 0.08, 0.3);
  eclat.scale.set(0.01, 0.01, 1);
  bague.add(eclat);

  // petite lumière blanche devant le diamant : fait briller les facettes
  const feu = new THREE.PointLight('#ffffff', 4, 2.2, 2);
  feu.position.set(0.35, yG + 0.35, 0.7);
  balance.add(feu);
  const feu2 = new THREE.PointLight('#e8f4ff', 3, 1.8, 2); // éclaire les facettes du bas (sinon grises)
  feu2.position.set(-0.3, yG - 0.35, 0.6);
  balance.add(feu2);

  bague.visible = false;
  return { bague, tour, balance, halo, eclat, yDiamant: yG };
}

/* ============================== SCÈNE ============================== */
export function creerScene3D(hote, { reduit = false } = {}) {
  const canvas = document.createElement('canvas');
  hote.appendChild(canvas);
  const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true, powerPreference: 'high-performance' });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
  renderer.setClearColor(0x000000, 0);
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.05;
  renderer.outputColorSpace = THREE.SRGBColorSpace;

  const scene = new THREE.Scene();
  const pmrem = new THREE.PMREMGenerator(renderer);
  scene.environment = pmrem.fromScene(new RoomEnvironment(), 0.04).texture;
  scene.environmentIntensity = 0.85;
  pmrem.dispose();

  const camera = new THREE.PerspectiveCamera(34, 1, 0.1, 100);
  canvas.addEventListener('webglcontextlost', (e) => { e.preventDefault(); renderer.setAnimationLoop(null); });
  canvas.addEventListener('webglcontextrestored', () => {
    const pm = new THREE.PMREMGenerator(renderer);
    scene.environment = pm.fromScene(new RoomEnvironment(), 0.04).texture;
    pm.dispose();
    renderer.setAnimationLoop(boucle);
  });

  // Lumières
  scene.add(new THREE.HemisphereLight('#f3e3d6', '#1c1418', 0.4));
  const cle = new THREE.DirectionalLight('#fff1e0', 2.3);
  cle.position.set(3, 5, 4);
  scene.add(cle);
  const contreRose = new THREE.PointLight('#c98a8f', 12, 16, 2);
  contreRose.position.set(-3.2, 3, -3);
  const contreOr = new THREE.PointLight('#ffd27a', 20, 16, 2);
  contreOr.position.set(3.2, 1.6, -2.6);
  scene.add(contreRose, contreOr);
  const lumInt = new THREE.PointLight('#ffcf7a', 0, 7, 2);
  lumInt.position.set(0, H * 0.75, 0);
  scene.add(lumInt);

  const tL = texLueur(), tE = texEtoile(), tC = texPetale();

  // Ombre douce au sol
  const ombre = new THREE.Mesh(new THREE.PlaneGeometry(3, 3), new THREE.MeshBasicMaterial({ map: texOmbre(), transparent: true, depthWrite: false, opacity: 0.6 }));
  ombre.rotation.x = -Math.PI / 2;
  ombre.position.y = 0.002;
  scene.add(ombre);

  const B = creerBoite();
  B.racine.rotation.y = ROT_BOITE;
  scene.add(B.racine);

  // Lueur qui s'échappe entre la boîte et le couvercle
  const fuite = new THREE.Sprite(new THREE.SpriteMaterial({ map: tL, color: '#ffcf7a', transparent: true, opacity: 0, blending: THREE.AdditiveBlending, depthWrite: false }));
  fuite.scale.set(3.1, 0.75, 1);
  fuite.position.y = H + 0.02;
  B.racine.add(fuite);

  const faisceau = creerFaisceau();
  faisceau.position.y = H;
  faisceau.scale.y = 0.001;
  scene.add(faisceau);

  const onde = new THREE.Mesh(new THREE.RingGeometry(0.95, 1, 128), new THREE.MeshBasicMaterial({ color: '#ffd98a', transparent: true, opacity: 0, blending: THREE.AdditiveBlending, depthWrite: false, side: THREE.DoubleSide }));
  onde.rotation.x = -Math.PI / 2;
  onde.position.y = H + 0.05;
  scene.add(onde);

  const flash = new THREE.Sprite(new THREE.SpriteMaterial({ map: tL, color: '#fff2d0', transparent: true, opacity: 0, blending: THREE.AdditiveBlending, depthWrite: false }));
  flash.position.y = H + 0.2;
  scene.add(flash);

  const BG = creerBague(tE, tL);
  scene.add(BG.bague);

  const etincelles = new Particules(700, tE);
  const coeurs = new Particules(160, tC);
  const petalesLents = new Particules(60, tC, THREE.NormalBlending);
  const poussiere = new Particules(140, tL);
  scene.add(poussiere.points, etincelles.points, coeurs.points, petalesLents.points);

  /* ---------- Caméra : cadrages ---------- */
  const cam = { px: 0, py: 3, pz: 10, tx: 0, ty: 1, tz: 0, recul: 1 };
  const secousse = { amp: 0 };
  let mode = 'boite', recadrer = false;
  function cadrage(m) {
    const t = Math.tan(THREE.MathUtils.degToRad(camera.fov / 2)), a = camera.aspect;
    let w, h, remplissage, cy, decal, elev;
    if (m === 'boite') { w = 2.6; h = 2.6; remplissage = 0.8; cy = 0.95; decal = -0.1; elev = 0.34; }
    else { w = 1.9; h = 2.1; remplissage = 0.7; cy = BAGUE_Y + 0.12; decal = 0.2; elev = 0.08; }
    const d = Math.max((h / 2) / t, (w / 2) / (t * a)) / remplissage;
    const visH = 2 * d * t;
    const cible = new THREE.Vector3(0, cy - visH * decal, 0);
    const dir = new THREE.Vector3(0, elev, 1).normalize();
    const pos = cible.clone().addScaledVector(dir, d);
    return { px: pos.x, py: pos.y, pz: pos.z, tx: cible.x, ty: cible.y, tz: cible.z };
  }
  function secouer(force, duree) {
    if (reduit) return;
    secousse.amp = Math.max(secousse.amp, force);
    gsap.to(secousse, { amp: 0, duration: duree, ease: 'power2.out', overwrite: true });
  }

  function redimensionner() {
    const w = hote.clientWidth || innerWidth, h = hote.clientHeight || innerHeight;
    renderer.setSize(w, h, false);
    camera.aspect = w / h;
    camera.updateProjectionMatrix();
    const echelle = renderer.getPixelRatio() * h / (2 * Math.tan(THREE.MathUtils.degToRad(camera.fov / 2)));
    [etincelles, coeurs, poussiere, petalesLents].forEach((p) => { p.mat.uniforms.uScale.value = echelle; });
    if (mode === 'ouverture') recadrer = true;
    else { gsap.killTweensOf(cam, 'px,py,pz,tx,ty,tz'); Object.assign(cam, cadrage(mode)); }
  }
  const ro = new ResizeObserver(redimensionner);
  ro.observe(hote);
  redimensionner();

  /* ---------- Boucle d'animation ---------- */
  let tPrec = performance.now(), tTotal = 0;
  let tPoussiere = 0, tOrbite = 0, tEclat = 1.5, tBague = 0, traine = false;
  const pDiamant = new THREE.Vector3();
  const centreBague = new THREE.Vector3();

  function boucle() {
    const maintenant = performance.now();
    const dt = Math.min((maintenant - tPrec) / 1000, 0.05);
    tPrec = maintenant; tTotal += dt;
    const t = tTotal;

    // Boîte : rotation lente et respiration
    B.racine.rotation.y = ROT_BOITE + Math.sin(t * 0.5) * 0.22;
    if (mode === 'boite') B.squash.position.y = Math.sin(t * 1.6) * 0.025;
    if (mode === 'boite') {
      const saut = B.racine.position.y + B.squash.position.y;
      ombre.scale.setScalar(1 - saut * 0.35);
      ombre.material.opacity = 0.6 - saut * 0.4;
    }
    faisceau.position.y = H + B.racine.position.y;

    // Poussières lumineuses en fond
    tPoussiere += dt;
    while (tPoussiere > 0.1) {
      tPoussiere -= 0.1;
      poussiere.emettre({
        nombre: 1, origine: new THREE.Vector3(rand(-4, 4), rand(-1.5, 2.5), rand(-5, 0.5)),
        direction: new THREE.Vector3(0, 1, 0), cone: 0.6, vitesse: [0.12, 0.32],
        couleurs: [...ROSE, ...OR], taille: [0.1, 0.32], vie: [5, 9], opacite: 0.32, tourne: 0
      });
    }

    // Bague : traînée pendant la montée, puis balancement et éclats au repos
    BG.bague.updateMatrixWorld();
    pDiamant.set(0, BG.yDiamant, 0).applyMatrix4(BG.balance.matrixWorld);
    if (traine) {
      etincelles.emettre({ nombre: 3, origine: pDiamant, rayon: 0.12, direction: new THREE.Vector3(0, -1, 0), cone: 1.2,
        vitesse: [0.2, 0.7], couleurs: [...OR, ...BLANC], taille: [0.05, 0.11], vie: [0.5, 1.1], gravite: 0.4, frein: 1.5 });
    }
    if (mode === 'bague') {
      tBague += dt;
      BG.balance.rotation.y = Math.sin(tBague * 0.6) * 0.5;
      BG.balance.rotation.x = Math.sin(tBague * 0.9) * 0.05;
      BG.balance.position.y = Math.sin(tBague * 1.3) * 0.06;
      BG.halo.material.opacity = 0.2 + Math.sin(tBague * 2) * 0.04;
      tOrbite += dt;
      BG.bague.getWorldPosition(centreBague);
      while (tOrbite > 0.09) {
        tOrbite -= 0.09;
        const a = Math.random() * TAU;
        etincelles.emettre({ nombre: 1, origine: centreBague.clone().add(new THREE.Vector3(Math.cos(a) * 0.95, rand(-0.6, 0.9), Math.sin(a) * 0.5)),
          direction: new THREE.Vector3(0, 1, 0), cone: 0.4, vitesse: [0.05, 0.25], couleurs: [...OR, ...BLANC, '#e8c1b8'],
          taille: [0.04, 0.1], vie: [1, 2], opacite: 0.9 });
      }
      tEclat -= dt;
      if (tEclat <= 0) { scintiller(); tEclat = rand(2.2, 3.4); }
    }
    faisceau.material.uniforms.uTemps.value = t;

    etincelles.maj(dt); coeurs.maj(dt); poussiere.maj(dt); petalesLents.maj(dt);

    // Caméra
    camera.position.set(cam.tx + (cam.px - cam.tx) * cam.recul, cam.ty + (cam.py - cam.ty) * cam.recul, cam.tz + (cam.pz - cam.tz) * cam.recul);
    if (secousse.amp > 0) camera.position.add(new THREE.Vector3(rand(-1, 1), rand(-1, 1), 0).multiplyScalar(secousse.amp));
    camera.lookAt(cam.tx, cam.ty, cam.tz);

    renderer.render(scene, camera);
  }
  renderer.setAnimationLoop(boucle);
  const visibilite = () => renderer.setAnimationLoop(document.hidden ? null : boucle);
  document.addEventListener('visibilitychange', visibilite);

  function scintiller() {
    const e = BG.eclat;
    gsap.timeline()
      .set(e.material, { opacity: 1 })
      .fromTo(e.scale, { x: 0.01, y: 0.01 }, { x: 0.9, y: 0.9, duration: 0.22, ease: 'power2.out' })
      .to(e.material, { rotation: '+=0.8', duration: 0.6, ease: 'none' }, 0)
      .to(e.scale, { x: 0.01, y: 0.01, duration: 0.45, ease: 'power2.in' })
      .to(e.material, { opacity: 0, duration: 0.2 }, '-=0.2');
  }

  /* ---------- Appui sur la boîte ---------- */
  function appuyer(n, total) {
    if (mode !== 'boite') return;
    const k = n / total, f = 0.6 + k, cote = n % 2 ? 1 : -1;
    const sq = B.squash.scale, cv = B.couvercle;
    gsap.killTweensOf([sq, B.racine.position, B.tilt.rotation, cv.position, cv.rotation]);
    gsap.timeline()
      .to(sq, { x: 1 + 0.05 * f, y: 1 - 0.07 * f, z: 1 + 0.05 * f, duration: 0.1, ease: 'power2.out' })
      .to(sq, { x: 1 - 0.06 * f, y: 1 + 0.12 * f, z: 1 - 0.06 * f, duration: 0.14, ease: 'power2.out' })
      .to(sq, { x: 1, y: 1, z: 1, duration: 0.8, ease: 'elastic.out(1, 0.6)' });
    gsap.timeline({ delay: 0.07 })
      .to(B.racine.position, { y: 0.06 + 0.1 * k, duration: 0.22, ease: 'power2.out' })
      .to(B.racine.position, { y: 0, duration: 0.5, ease: 'power2.inOut' });
    gsap.timeline()
      .to(B.tilt.rotation, { z: cote * (0.07 + 0.1 * k), x: -cote * 0.05 * f, duration: 0.1 })
      .to(B.tilt.rotation, { z: 0, x: 0, duration: 1.1, ease: 'elastic.out(1.2, 0.25)' });
    gsap.timeline({ delay: 0.05 })
      .to(cv.position, { y: COUV_Y + 0.1 + 0.2 * k, duration: 0.16, ease: 'power3.out' })
      .to(cv.position, { y: COUV_Y + 0.05 * k, duration: 0.6, ease: 'power2.inOut' });
    gsap.timeline({ delay: 0.05 })
      .to(cv.rotation, { z: -cote * 0.12 * f, x: cote * 0.07, duration: 0.12 })
      .to(cv.rotation, { z: 0, x: 0, duration: 1, ease: 'elastic.out(1, 0.6)' });
    gsap.to(lumInt, { intensity: 3 + 12 * k, duration: 0.3 });
    gsap.fromTo(fuite.material, { opacity: 0.35 + 0.65 * k }, { opacity: 0.12 + 0.45 * k, duration: 1.2, ease: 'power2.out' });
    etincelles.emettre({ nombre: 10 + n * 6, origine: new THREE.Vector3(0, H + 0.05, 0), rayon: W * 0.55, cone: 0.9,
      vitesse: [1.2, 2.4 + 1.2 * k], couleurs: [...OR, ...BLANC, ...ROSE], taille: [0.06, 0.15], vie: [0.6, 1.3], gravite: 2.6, frein: 0.8 });
    secouer(0.03 + 0.05 * k, 0.35);
    gsap.to(cam, { recul: 1 - 0.035 * n, duration: 0.7, ease: 'power2.out' });
  }

  /* ---------- Ouverture : la bague sort ---------- */
  function ouvrir({ onBague } = {}) {
    mode = 'ouverture';
    const sq = B.squash.scale, cv = B.couvercle;
    gsap.killTweensOf([sq, B.racine.position, B.tilt.rotation, cv.position, cv.rotation]);
    gsap.set([B.racine.position], { y: 0 });
    gsap.set(B.tilt.rotation, { x: 0, z: 0 });
    const fin = cadrage('bague');
    return new Promise((resoudre) => {
      gsap.globalTimeline.timeScale(reduit ? 1.8 : 1);
      const T = 0.55;         // moment de l'explosion
      const S = T + 0.7;      // départ de la bague (0,7 s de lumière seule avant)
      gsap.timeline()
        // 1. Anticipation : la boîte se tasse, la lumière monte
        .to(sq, { x: 1.17, y: 0.74, z: 1.17, duration: T, ease: 'power2.in' }, 0)
        .to(B.squash.position, { y: 0, duration: 0.2 }, 0)
        .to(lumInt, { intensity: 34, duration: T, ease: 'power2.in' }, 0)
        .to(fuite.material, { opacity: 1, duration: T }, 0)
        .to(fuite.scale, { x: 3.8, y: 1.1, duration: T, ease: 'power2.in' }, 0)
        .to(cv.position, { y: COUV_Y + 0.08, duration: T, ease: 'power2.in' }, 0)
        .add(() => secouer(0.05, T), 0)
        // 2. Pop : le couvercle s'envole
        .to(sq, { x: 0.9, y: 1.16, z: 0.9, duration: 0.12, ease: 'power3.out' }, T)
        .to(sq, { x: 1, y: 1, z: 1, duration: 1.2, ease: 'elastic.out(1, 0.3)' }, T + 0.12)
        .to(cv.position, { x: 1.9, y: COUV_Y + 6, z: 0.8, duration: 1.5, ease: 'power2.out' }, T)
        .to(cv.rotation, { x: -1.6, y: 1.2, z: -2.6, duration: 1.5, ease: 'power1.out' }, T)
        .to(cv.scale, { x: 0.5, y: 0.5, z: 0.5, duration: 1.5, ease: 'power1.in' }, T)
        .add(() => { cv.visible = false; }, T + 1.5)
        .to(fuite.material, { opacity: 0, duration: 0.35 }, T)
        .add(() => {
          secouer(0.14, 0.6);
          const o = new THREE.Vector3(0, H + 0.08, 0);
          etincelles.emettre({ nombre: 300, origine: o, rayon: W * 0.4, cone: 0.75, vitesse: [2.5, 6.5],
            couleurs: [...OR, ...OR, ...BLANC, ...ROSE], taille: [0.07, 0.2], vie: [0.9, 2.2], gravite: 3.2, frein: 0.9 });
          etincelles.emettre({ nombre: 90, origine: o, rayon: 0.2, cone: 1.5, vitesse: [1.5, 3.5],
            couleurs: [...OR, ...BLANC], taille: [0.05, 0.12], vie: [0.6, 1.2], gravite: 0.5, frein: 2 });
          coeurs.emettre({ nombre: 34, origine: o, rayon: W * 0.3, cone: 0.7, vitesse: [1.8, 4.2],
            couleurs: [...ROSE, '#b9737a'], taille: [0.14, 0.3], vie: [1.4, 2.6], gravite: 1.6, frein: 0.8, tourne: 0.4 });
        }, T)
        .fromTo(flash.scale, { x: 0.5, y: 0.5 }, { x: 7, y: 7, duration: 0.7, ease: 'expo.out' }, T)
        .fromTo(flash.material, { opacity: 1 }, { opacity: 0, duration: 0.9, ease: 'power2.out' }, T)
        .fromTo(onde.scale, { x: 0.6, y: 0.6, z: 0.6 }, { x: 3.4, y: 3.4, z: 3.4, duration: 1, ease: 'expo.out' }, T)
        .fromTo(onde.material, { opacity: 0.55 }, { opacity: 0, duration: 0.9, ease: 'power2.out' }, T)
        .fromTo(faisceau.scale, { y: 0.001 }, { y: 1, duration: 0.8, ease: 'expo.out' }, T)
        .fromTo(faisceau.material.uniforms.uOpacite, { value: 0 }, { value: 1.1, duration: 0.25 }, T)
        .to(faisceau.material.uniforms.uOpacite, { value: 0.42, duration: 2.4, ease: 'power2.inOut' }, T + 0.9)
        .to(lumInt, { intensity: 16, duration: 1.6 }, T + 0.3)
        // 3. La bague sort en tournant, la caméra la suit
        .add(() => { BG.bague.visible = true; traine = true; }, S)
        .fromTo(BG.bague.position, { y: 0.55 }, { y: BAGUE_Y, duration: 3.4, ease: 'power2.inOut' }, S)
        .fromTo(BG.bague.scale, { x: 0.6, y: 0.6, z: 0.6 }, { x: 1, y: 1, z: 1, duration: 3, ease: 'power2.out' }, S)
        .fromTo(BG.tour.rotation, { y: reduit ? -0.4 : -TAU * 1.25, x: reduit ? 0.1 : 0.55 }, { y: 0, x: 0.06, duration: 3.6, ease: 'power3.out' }, S)
        .to(BG.halo.material, { opacity: 0.22, duration: 1.8 }, S + 1.4)
        .to(cam, { ...fin, recul: 1, duration: 3.6, ease: 'power2.inOut' }, S + 0.2)
        .add(() => { traine = false; }, S + 2.6)
        .to(B.racine.position, { y: -2.6, duration: 2.6, ease: 'power2.inOut' }, S + 1)
        .to(B.racine.scale, { x: 0.9, y: 0.9, z: 0.9, duration: 2.6, ease: 'power2.inOut' }, S + 1)
        .to(ombre.material, { opacity: 0, duration: 0.8 }, S + 0.8)
        .to(lumInt.position, { y: BAGUE_Y - 0.7, duration: 3, ease: 'power2.inOut' }, S + 0.6)
        // 4. L'éclat du diamant, un temps avec la bague seule, puis la question
        .add(() => { scintiller(); if (onBague) onBague(); }, S + 3.5)
        .add(() => {
          mode = 'bague'; tEclat = 2.4;
          if (recadrer) { recadrer = false; gsap.to(cam, { ...cadrage('bague'), duration: 0.6, ease: 'power2.out' }); }
          resoudre();
        }, S + 4.4);
    });
  }

  /* ---------- Après le oui ---------- */
  function celebrer() {
    if (!reduit) gsap.to(BG.tour.rotation, { y: '+=' + TAU * 2, duration: 2, ease: 'power3.inOut' });
    gsap.fromTo(BG.bague.scale, { x: 1, y: 1, z: 1 }, { x: 1.12, y: 1.12, z: 1.12, duration: 0.25, yoyo: true, repeat: 1, ease: 'power2.out' });
    gsap.fromTo(BG.halo.material, { opacity: 0.5 }, { opacity: 0.22, duration: 2 });
    const c = new THREE.Vector3(); BG.bague.getWorldPosition(c);
    petalesLents.emettre({ nombre: 28, origine: c.clone().add(new THREE.Vector3(0, 0.6, 0)), rayon: 1.1, hauteur: 0.4, cone: Math.PI * 0.6,
      vitesse: [0.4, 1.2], couleurs: ROSE, taille: [0.14, 0.24], vie: [4, 6], gravite: 0.25, frein: 0.6, tourne: 0.5, opacite: 0.85 });
    etincelles.emettre({ nombre: 80, origine: c, rayon: 0.2, cone: Math.PI, vitesse: [1, 3], couleurs: [...OR, ...BLANC],
      taille: [0.05, 0.12], vie: [0.8, 1.8], gravite: 0.6, frein: 1.4 });
    scintiller();
    if (!reduit) gsap.to(cam, { recul: 0.93, duration: 8, ease: 'sine.inOut', yoyo: true, repeat: -1, delay: 4 });
  }

  // Zone de la bague à l'écran (en pixels), pour que le bouton « Non » ne vienne pas la cacher
  function zoneBague(marge = 24) {
    const boite = new THREE.Box3().setFromObject(BG.balance);
    const r = canvas.getBoundingClientRect();
    let x1 = Infinity, y1 = Infinity, x2 = -Infinity, y2 = -Infinity;
    const v = new THREE.Vector3();
    for (let i = 0; i < 8; i++) {
      v.set(i & 1 ? boite.max.x : boite.min.x, i & 2 ? boite.max.y : boite.min.y, i & 4 ? boite.max.z : boite.min.z).project(camera);
      const x = r.left + (v.x + 1) / 2 * r.width, y = r.top + (1 - v.y) / 2 * r.height;
      x1 = Math.min(x1, x); x2 = Math.max(x2, x); y1 = Math.min(y1, y); y2 = Math.max(y2, y);
    }
    return { x1: x1 - marge, y1: y1 - marge, x2: x2 + marge, y2: y2 + marge };
  }

  function detruire() {
    renderer.setAnimationLoop(null);
    document.removeEventListener('visibilitychange', visibilite);
    ro.disconnect();
    renderer.dispose();
    canvas.remove();
  }

  return { appuyer, ouvrir, celebrer, detruire, zoneBague };
}
