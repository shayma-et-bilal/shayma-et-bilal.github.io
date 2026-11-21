// Scène 3D : Lune photoréaliste (cartes NASA LRO/LOLA), terrain réel du cratère Copernic,
// Terre (NASA Blue Marble), ciel étoilé, lumières de Shayma & Bilal, particules des prénoms.
import * as THREE from 'three';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass.js';
import { ShaderPass } from 'three/examples/jsm/postprocessing/ShaderPass.js';
import { OutputPass } from 'three/examples/jsm/postprocessing/OutputPass.js';

const DEG = Math.PI / 180;
// Cratère Copernic : 9.62° N, 20.08° O. Le terrain couvre 24° (≈ 728 km).
const LAT0 = 9.62 * DEG, LON0 = -20.08 * DEG, SPAN = 24 * DEG;
const RELIEF = (5764 / 1737400) * 2.2; // relief réel (5,8 km) exagéré ×2,2, en rayons lunaires
const BASE = 0.0004;
const clamp01 = (x) => Math.min(1, Math.max(0, x));
const smooth = (a, b, x) => { const t = clamp01((x - a) / (b - a)); return t * t * (3 - 2 * t); };
const lerp = (a, b, t) => a + (b - a) * t;

export function webglOK() {
  try { const c = document.createElement('canvas'); return !!(c.getContext('webgl2') || c.getContext('webgl')); }
  catch (e) { return false; }
}

// position objet cohérente avec les UV de THREE.SphereGeometry (u = 0,5 ↔ longitude 0)
function objPos(lat, lon, r = 1) {
  return new THREE.Vector3(Math.cos(lon) * Math.cos(lat) * r, Math.sin(lat) * r, -Math.sin(lon) * Math.cos(lat) * r);
}

/* ------------------------------ shaders ------------------------------ */
const moonVert = /* glsl */`
  #include <common>
  #include <logdepthbuf_pars_vertex>
  varying vec2 vUv; varying vec3 vN; varying vec3 vT; varying vec3 vB; varying vec3 vWP;
  void main(){
    vUv = uv;
    vec3 d = normalize(position);
    vec3 t = normalize(cross(vec3(0.0,1.0,0.0), d) + vec3(1e-6,0.0,0.0));
    vec3 b = cross(d, t);
    mat3 m = mat3(modelMatrix);
    vN = m*d; vT = m*t; vB = m*b;
    vec4 wp = modelMatrix * vec4(position,1.0); vWP = wp.xyz;
    gl_Position = projectionMatrix * viewMatrix * wp;
    #include <logdepthbuf_vertex>
  }`;
const moonFrag = /* glsl */`
  #include <common>
  #include <logdepthbuf_pars_fragment>
  uniform sampler2D uMap; uniform sampler2D uNormal; uniform sampler2D uShadow;
  uniform float uNormalStrength; uniform float uShadowAmt; uniform float uExposure; uniform float uEarthshine;
  uniform vec3 uSunDir; uniform vec3 uOrbPos[2]; uniform vec3 uOrbCol[2]; uniform float uOrbI[2]; uniform float uOrbR;
  varying vec2 vUv; varying vec3 vN; varying vec3 vT; varying vec3 vB; varying vec3 vWP;
  void main(){
    #include <logdepthbuf_fragment>
    vec3 albedo = texture2D(uMap, vUv).rgb;
    vec3 tn = texture2D(uNormal, vUv).xyz*2.0-1.0; tn.xy *= uNormalStrength;
    vec3 Ng = normalize(vN);
    vec3 N = normalize(normalize(vT)*tn.x + normalize(vB)*tn.y + Ng*tn.z);
    vec3 V = normalize(cameraPosition - vWP);
    float ci = dot(N, uSunDir);
    float ce = max(dot(Ng, V), 0.0);
    float lam = max(ci, 0.0);
    // réflectance lunaire : mélange Lambert / Lommel-Seeliger (disque lunaire « plat » et lumineux)
    float ls = 2.0 * lam / (lam + ce + 0.05);
    float shade = mix(lam, min(ls, 1.2), 0.5);
    shade *= smoothstep(-0.04, 0.05, dot(Ng, uSunDir));
    shade *= mix(1.0, texture2D(uShadow, vUv).r, uShadowAmt);
    vec3 col = albedo * shade * uExposure;
    for (int i = 0; i < 2; i++) {
      vec3 L = uOrbPos[i] - vWP; float d = length(L);
      float k = max(dot(N, L / d), 0.0) * uOrbI[i] / (1.0 + d*d/(uOrbR*uOrbR));
      col += albedo * uOrbCol[i] * k;
    }
    col += albedo * vec3(0.5,0.62,0.9) * uEarthshine;
    gl_FragColor = vec4(col, 1.0);
    #include <tonemapping_fragment>
    #include <colorspace_fragment>
  }`;

const earthVert = /* glsl */`
  #include <common>
  #include <logdepthbuf_pars_vertex>
  varying vec2 vUv; varying vec3 vN; varying vec3 vWP;
  void main(){ vUv = uv; vN = normalize(mat3(modelMatrix)*normal);
    vec4 wp = modelMatrix*vec4(position,1.0); vWP = wp.xyz; gl_Position = projectionMatrix*viewMatrix*wp;
    #include <logdepthbuf_vertex>
  }`;
const earthFrag = /* glsl */`
  #include <common>
  #include <logdepthbuf_pars_fragment>
  uniform sampler2D uMap; uniform vec3 uSunDir; uniform float uOpacity;
  varying vec2 vUv; varying vec3 vN; varying vec3 vWP;
  void main(){
    #include <logdepthbuf_fragment>
    vec3 N = normalize(vN); vec3 V = normalize(cameraPosition - vWP);
    vec3 alb = texture2D(uMap, vUv).rgb;
    float l = dot(N, uSunDir);
    float day = smoothstep(-0.08, 0.25, l);
    vec3 R = reflect(-uSunDir, N);
    float ocean = smoothstep(0.12, 0.02, alb.g - alb.b + 0.06);
    float spec = pow(max(dot(R, V), 0.0), 60.0) * ocean * 0.6;
    float fres = pow(1.0 - max(dot(N, V), 0.0), 2.6);
    vec3 atm = vec3(0.32,0.58,1.0) * fres * (0.08 + 1.4*smoothstep(-0.25, 0.6, l));
    vec3 col = alb * max(l,0.0) * 2.4 * day + vec3(spec) + atm;
    gl_FragColor = vec4(col * uOpacity, 1.0);
    #include <tonemapping_fragment>
    #include <colorspace_fragment>
  }`;

const starVert = /* glsl */`
  #include <common>
  #include <logdepthbuf_pars_vertex>
  attribute float aSize; attribute vec3 aColor; attribute float aPhase;
  uniform float uTime; uniform float uPR; varying vec3 vC;
  void main(){
    vC = aColor * (0.7 + 0.3*sin(uTime*(0.6+aPhase) + aPhase*30.0));
    vec4 mv = modelViewMatrix*vec4(position,1.0); gl_Position = projectionMatrix*mv;
    gl_PointSize = aSize * uPR;
    #include <logdepthbuf_vertex>
  }`;
const starFrag = /* glsl */`
  #include <common>
  #include <logdepthbuf_pars_fragment>
  uniform float uBright; varying vec3 vC;
  void main(){
    #include <logdepthbuf_fragment>
    float d = length(gl_PointCoord - 0.5); float a = pow(smoothstep(0.5, 0.0, d), 1.8);
    gl_FragColor = vec4(vC * a * uBright, 1.0);
  }`;

const namesVert = /* glsl */`
  #include <common>
  #include <logdepthbuf_pars_vertex>
  attribute vec3 aStart; attribute vec3 aTarget; attribute vec4 aRand; attribute vec3 aColor;
  uniform float uProg; uniform float uTime; uniform float uDissolve; uniform float uPR; uniform float uSize; uniform float uSpread;
  uniform vec3 uUp; uniform vec3 uRight; uniform vec3 uFwd;
  varying vec3 vC; varying float vA;
  void main(){
    float t = clamp((uProg - aRand.x*0.45) / 0.55, 0.0, 1.0);
    float e = 1.0 - pow(1.0 - t, 4.0);
    vec3 sw = (uRight*sin(aRand.y*6.2832 + t*7.0) + uUp*cos(aRand.z*6.2832 + t*6.0) + uFwd*sin(aRand.w*6.2832 + t*5.0)) * uSpread * sin(t*3.14159);
    vec3 p = mix(aStart, aTarget, e) + sw;
    p += uUp * sin(uTime*1.3 + aRand.y*20.0) * uSpread * 0.01 * e;
    p += (uUp*(0.6 + aRand.x) + uRight*(aRand.y - 0.5)*1.2 + uFwd*(aRand.z - 0.5)) * uSpread * 2.5 * uDissolve * (0.4 + aRand.w);
    vec4 mv = viewMatrix * vec4(p, 1.0); gl_Position = projectionMatrix * mv;
    float tw = 0.7 + 0.3*sin(uTime*3.0 + aRand.w*40.0);
    gl_PointSize = uSize * uPR * (0.6 + aRand.z*0.8) * step(0.0001, t);
    vC = aColor * mix(3.0, tw * 0.95, e);
    vA = smoothstep(0.0, 0.12, t) * (1.0 - smoothstep(0.0, 1.0, uDissolve));
    #include <logdepthbuf_vertex>
  }`;
const namesFrag = /* glsl */`
  #include <common>
  #include <logdepthbuf_pars_fragment>
  varying vec3 vC; varying float vA;
  void main(){
    #include <logdepthbuf_fragment>
    float d = length(gl_PointCoord - 0.5); float a = smoothstep(0.5, 0.05, d);
    gl_FragColor = vec4(vC * a * vA, 1.0);
  }`;

const ringFrag = /* glsl */`
  #include <common>
  #include <logdepthbuf_pars_fragment>
  uniform float uA; uniform vec3 uCol; varying vec2 vUv;
  void main(){
    #include <logdepthbuf_fragment>
    float r = length(vUv - 0.5) * 2.0;
    float band = smoothstep(0.80, 0.97, r) * smoothstep(1.0, 0.97, r);
    gl_FragColor = vec4(uCol * band * uA, 1.0);
  }`;
const ringVert = /* glsl */`
  #include <common>
  #include <logdepthbuf_pars_vertex>
  varying vec2 vUv;
  void main(){ vUv = uv; gl_Position = projectionMatrix*modelViewMatrix*vec4(position,1.0);
    #include <logdepthbuf_vertex>
  }`;

const FinalShader = {
  uniforms: { tDiffuse: { value: null }, uZoom: { value: 0 }, uFlash: { value: 0 }, uVig: { value: 1 }, uAspect: { value: 1 }, uFade: { value: 0 } },
  vertexShader: `varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix*modelViewMatrix*vec4(position,1.0); }`,
  fragmentShader: /* glsl */`
    uniform sampler2D tDiffuse; uniform float uZoom; uniform float uFlash; uniform float uVig; uniform float uAspect; uniform float uFade;
    varying vec2 vUv;
    void main(){
      vec2 dir = vUv - 0.5;
      vec3 col;
      if (uZoom > 0.001) { col = vec3(0.0); float tot = 0.0;
        for (int i = 0; i < 14; i++) { float t = float(i)/13.0; float w = 1.0 - t*0.6;
          col += texture2D(tDiffuse, vUv - dir*uZoom*t).rgb * w; tot += w; }
        col /= tot;
      } else { col = texture2D(tDiffuse, vUv).rgb; }
      float ca = 0.0012 + uZoom*0.03;
      col.r = mix(col.r, texture2D(tDiffuse, vUv + dir*ca).r, 0.7);
      col.b = mix(col.b, texture2D(tDiffuse, vUv - dir*ca).b, 0.7);
      float v = smoothstep(1.05, 0.25, length(dir*vec2(uAspect, 1.0)) * 1.15);
      col *= mix(1.0, v, uVig);
      col += vec3(1.0, 0.93, 0.8) * uFlash;
      col *= 1.0 - uFade;
      gl_FragColor = vec4(col, 1.0);
    }`,
};

/* ------------------------------ helpers ------------------------------ */
function glowTexture(stops) {
  const c = document.createElement('canvas'); c.width = c.height = 256;
  const g = c.getContext('2d'); const gr = g.createRadialGradient(128, 128, 0, 128, 128, 128);
  stops.forEach(([o, col]) => gr.addColorStop(o, col));
  g.fillStyle = gr; g.fillRect(0, 0, 256, 256);
  const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; return t;
}
function loadImageData(url, manager) {
  return new Promise((res, rej) => {
    manager.itemStart(url);
    const img = new Image(); img.decoding = 'async';
    img.onload = () => { const c = document.createElement('canvas'); c.width = img.width; c.height = img.height;
      const g = c.getContext('2d'); g.drawImage(img, 0, 0); res(g.getImageData(0, 0, c.width, c.height)); manager.itemEnd(url); };
    img.onerror = (e) => { manager.itemError(url); rej(e); };
    img.src = url;
  });
}

/* ============================== SCÈNE ============================== */
export async function createScene(canvas, { mobile, onProgress }) {
  const renderer = new THREE.WebGLRenderer({ canvas, antialias: !mobile, powerPreference: 'high-performance', logarithmicDepthBuffer: true });
  const PR = Math.min(window.devicePixelRatio || 1, mobile ? 1.6 : 2);
  renderer.setPixelRatio(PR);
  renderer.setSize(innerWidth, innerHeight, false);
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.0;
  renderer.outputColorSpace = THREE.SRGBColorSpace;

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(30, innerWidth / innerHeight, 0.00002, 3000);

  /* ---------- chargement ---------- */
  const manager = new THREE.LoadingManager();
  manager.onProgress = (_u, l, t) => onProgress && onProgress(l / t);
  const tl = new THREE.TextureLoader(manager);
  const q = mobile ? '2k' : '4k';
  const tex = (u, srgb = true) => new Promise((res, rej) => tl.load(u, (t) => {
    if (srgb) t.colorSpace = THREE.SRGBColorSpace; t.anisotropy = renderer.capabilities.getMaxAnisotropy(); res(t); }, undefined, rej));
  const [mColor, mNormal, pColor, pNormal, pShadow, eMap, hData] = await Promise.all([
    tex(`assets/moon_color_${q}.jpg`), tex(`assets/moon_normal_${q}.jpg`, false),
    tex('assets/terrain_color.jpg'), tex('assets/terrain_normal.jpg', false), tex('assets/terrain_shadow.png', false),
    tex('assets/earth_2k.jpg'), loadImageData('assets/terrain_height.png', manager),
  ]);

  /* ---------- uniforms partagés ---------- */
  const shared = {
    uSunDir: { value: new THREE.Vector3(0, 0, 1) },
    uOrbPos: { value: [new THREE.Vector3(), new THREE.Vector3()] },
    uOrbCol: { value: [new THREE.Color(0.78, 0.86, 1.0), new THREE.Color(1.0, 0.7, 0.32)] },
    uOrbI: { value: [0, 0] },
    uOrbR: { value: 0.028 },
    uExposure: { value: 2.4 },
    uEarthshine: { value: 0.035 },
  };
  const white = new THREE.DataTexture(new Uint8Array([255, 255, 255, 255]), 1, 1); white.needsUpdate = true;
  const moonMat = (map, normal, shadow, ns) => new THREE.ShaderMaterial({
    vertexShader: moonVert, fragmentShader: moonFrag,
    uniforms: { ...shared, uMap: { value: map }, uNormal: { value: normal }, uShadow: { value: shadow }, uNormalStrength: { value: ns }, uShadowAmt: { value: 0 } },
  });

  /* ---------- Lune ---------- */
  const pivot = new THREE.Group();
  // orientation : Copernic face à +Z, nord vers +Y, est vers +X
  pivot.rotation.set(LAT0, -Math.PI / 2 - LON0, 0);
  scene.add(pivot);
  const globeMat = moonMat(mColor, mNormal, white, 1.0);
  const globe = new THREE.Mesh(new THREE.SphereGeometry(1, mobile ? 160 : 256, mobile ? 120 : 192), globeMat);
  pivot.add(globe);

  // terrain réel (LOLA) autour de Copernic, posé sur la sphère
  const N = mobile ? 220 : 360;
  const hw = hData.width, hh = hData.height, hd = hData.data;
  const hAt = (u, v) => { // bilinéaire, u: est, v: 0 = nord
    const x = Math.min(hw - 1.001, Math.max(0, u * (hw - 1))), y = Math.min(hh - 1.001, Math.max(0, v * (hh - 1)));
    const x0 = x | 0, y0 = y | 0, fx = x - x0, fy = y - y0;
    const p = (xx, yy) => hd[(yy * hw + xx) * 4] / 255;
    return lerp(lerp(p(x0, y0), p(x0 + 1, y0), fx), lerp(p(x0, y0 + 1), p(x0 + 1, y0 + 1), fx), fy);
  };
  const pos = new Float32Array((N + 1) * (N + 1) * 3), uvs = new Float32Array((N + 1) * (N + 1) * 2);
  for (let j = 0; j <= N; j++) for (let i = 0; i <= N; i++) {
    const u = i / N, v = j / N, k = j * (N + 1) + i;
    const edge = smooth(0, 0.09, Math.min(u, 1 - u, v, 1 - v));
    const r = 1 + BASE + hAt(u, v) * RELIEF * edge;
    const p = objPos(LAT0 + (0.5 - v) * SPAN, LON0 + (u - 0.5) * SPAN, r);
    pos.set([p.x, p.y, p.z], k * 3); uvs.set([u, 1 - v], k * 2);
  }
  const idx = [];
  for (let j = 0; j < N; j++) for (let i = 0; i < N; i++) {
    const a = j * (N + 1) + i, b = a + 1, c = a + N + 1, d = c + 1; idx.push(a, c, b, b, c, d);
  }
  const pg = new THREE.BufferGeometry();
  pg.setAttribute('position', new THREE.BufferAttribute(pos, 3)); pg.setAttribute('uv', new THREE.BufferAttribute(uvs, 2)); pg.setIndex(idx);
  const patchMat = moonMat(pColor, pNormal, pShadow, 1.0);
  pivot.add(new THREE.Mesh(pg, patchMat));

  // repère local de Copernic dans le monde : E = +X, N = +Y, haut = +Z
  const groundC = 1 + BASE + hAt(0.5, 0.5) * RELIEF;
  const M = new THREE.Vector3(0, 0, groundC + 0.0075); // point de rencontre des deux lumières

  // halo photographique autour de la Lune
  const halo = new THREE.Sprite(new THREE.SpriteMaterial({ map: glowTexture([[0, 'rgba(255,244,222,0.55)'], [0.22, 'rgba(255,236,205,0.22)'], [0.5, 'rgba(180,190,230,0.06)'], [1, 'rgba(0,0,0,0)']]), blending: THREE.AdditiveBlending, depthWrite: false, transparent: true }));
  halo.scale.setScalar(5.2); scene.add(halo);

  /* ---------- Terre ---------- */
  const earthMat = new THREE.ShaderMaterial({ vertexShader: earthVert, fragmentShader: earthFrag,
    uniforms: { uMap: { value: eMap }, uSunDir: shared.uSunDir, uOpacity: { value: 1 } } });
  const earth = new THREE.Mesh(new THREE.SphereGeometry(1, 64, 48), earthMat);
  earth.rotation.set(0.25, 2.2, 0.1); scene.add(earth);
  const earthGlow = new THREE.Sprite(new THREE.SpriteMaterial({ map: glowTexture([[0, 'rgba(110,160,255,0.0)'], [0.42, 'rgba(110,160,255,0.0)'], [0.47, 'rgba(120,170,255,0.35)'], [0.62, 'rgba(90,140,255,0.08)'], [1, 'rgba(0,0,0,0)']]), blending: THREE.AdditiveBlending, depthWrite: false, transparent: true }));
  scene.add(earthGlow);

  /* ---------- étoiles ---------- */
  const SN = mobile ? 3800 : 8000;
  const sp = new Float32Array(SN * 3), ss = new Float32Array(SN), sc = new Float32Array(SN * 3), sph = new Float32Array(SN);
  const band = new THREE.Vector3(0.3, 1, 0.45).normalize();
  for (let i = 0; i < SN; i++) {
    let v = new THREE.Vector3().randomDirection();
    if (i < SN * 0.45) { v.addScaledVector(band, -v.dot(band) * (0.85 + Math.random() * 0.15)).normalize(); } // Voie lactée
    sp.set([v.x * 900, v.y * 900, v.z * 900], i * 3);
    const m = Math.random(); ss[i] = m < 0.92 ? 0.8 + Math.random() * 1.4 : 2.2 + Math.random() * 2.2;
    const temp = Math.random(); const col = temp < 0.15 ? [1, 0.82, 0.62] : temp < 0.3 ? [0.75, 0.84, 1] : [1, 0.97, 0.94];
    const b = 0.35 + Math.random() * 0.65; sc.set([col[0] * b, col[1] * b, col[2] * b], i * 3); sph[i] = Math.random();
  }
  const sgeo = new THREE.BufferGeometry();
  sgeo.setAttribute('position', new THREE.BufferAttribute(sp, 3)); sgeo.setAttribute('aSize', new THREE.BufferAttribute(ss, 1));
  sgeo.setAttribute('aColor', new THREE.BufferAttribute(sc, 3)); sgeo.setAttribute('aPhase', new THREE.BufferAttribute(sph, 1));
  const starMat = new THREE.ShaderMaterial({ vertexShader: starVert, fragmentShader: starFrag, transparent: true, depthWrite: false, blending: THREE.AdditiveBlending,
    uniforms: { uTime: { value: 0 }, uPR: { value: PR }, uBright: { value: 1.6 } } });
  const stars = new THREE.Points(sgeo, starMat); stars.frustumCulled = false; scene.add(stars);

  /* ---------- lumières de Shayma & Bilal ---------- */
  const orbTex = [
    glowTexture([[0, 'rgba(255,255,255,1)'], [0.08, 'rgba(230,240,255,0.95)'], [0.25, 'rgba(170,195,255,0.35)'], [1, 'rgba(0,0,0,0)']]),
    glowTexture([[0, 'rgba(255,255,255,1)'], [0.08, 'rgba(255,230,180,0.95)'], [0.25, 'rgba(255,170,70,0.35)'], [1, 'rgba(0,0,0,0)']]),
  ];
  const orbs = orbTex.map((t) => { const s = new THREE.Sprite(new THREE.SpriteMaterial({ map: t, blending: THREE.AdditiveBlending, depthWrite: false, transparent: true, opacity: 0 })); scene.add(s); return s; });
  const burst = new THREE.Sprite(new THREE.SpriteMaterial({ map: glowTexture([[0, 'rgba(255,255,255,1)'], [0.1, 'rgba(255,236,200,0.8)'], [0.35, 'rgba(255,200,120,0.18)'], [1, 'rgba(0,0,0,0)']]), blending: THREE.AdditiveBlending, depthWrite: false, transparent: true, opacity: 0 }));
  burst.position.copy(M); scene.add(burst);
  const ringMat = new THREE.ShaderMaterial({ vertexShader: ringVert, fragmentShader: ringFrag, transparent: true, depthWrite: false, blending: THREE.AdditiveBlending,
    uniforms: { uA: { value: 0 }, uCol: { value: new THREE.Color(1, 0.82, 0.55) } } });
  const ring = new THREE.Mesh(new THREE.PlaneGeometry(1, 1), ringMat);
  ring.position.set(0, 0, groundC + 0.0012); ring.scale.setScalar(0.0001); scene.add(ring);

  /* ---------- caméra : poses clés ---------- */
  const portrait = () => innerWidth / innerHeight < 0.9;
  // taille de la lune à l'accueil : l'espace libre entre le titre et le bouton
  const introDist = () => {
    const a = innerWidth / innerHeight, t = Math.tan(15 * DEG), H = innerHeight;
    if (a < 1) return 1 / (0.72 * t * a);
    return 1 / (Math.min(0.5, Math.max(0.28, (0.705 * H - 250) / H)) * t);
  };
  // décalage vertical : la lune centrée dans cet espace libre
  const introY = (d = introDist()) => (innerWidth / innerHeight < 1 ? 0.035 : 0.0475 + 55 / innerHeight) * 2 * d * Math.tan(15 * DEG);
  const A = 0.14, ALT = 1.05; // orbite basse : ~87 km d'altitude, 243 km au sud de Copernic
  const landPos = new THREE.Vector3(0, -Math.sin(A), Math.cos(A)).multiplyScalar(ALT);
  const landTarget = new THREE.Vector3(0, Math.sin(0.035), Math.cos(0.035));
  // Terre : au-dessus de l'horizon nord, décalée vers l'est (règle des tiers)
  const tNorth = new THREE.Vector3(0, Math.cos(A), Math.sin(A)), upCam = landPos.clone().normalize();
  const dip = Math.acos(1 / ALT);
  const earthAt = (rise) => {
    const el = -dip + lerp(-8, portrait() ? 19 : 8, rise) * DEG;
    const dir = tNorth.clone().multiplyScalar(Math.cos(el)).addScaledVector(upCam, Math.sin(el));
    dir.applyAxisAngle(upCam, -(portrait() ? 9 : 21) * DEG);
    return landPos.clone().addScaledVector(dir, 70);
  };
  const ER = 70 * Math.tan(2.3 * DEG);
  earth.scale.setScalar(ER); earthGlow.scale.setScalar(ER * 2.6);

  /* ---------- état animable (piloté par GSAP) ---------- */
  const S = {
    mode: 'intro',
    cam: { x: 0, y: introY(), z: introDist(), tx: 0, ty: introY(), tz: 0, fov: 30 },
    sun: { theta: 112 * DEG, tilt: 0 },
    fx: { zoom: 0, flash: 0, bloom: 0.5, fade: 1, vig: 1, exposure: 2.4 },
    moon: { halo: 0 },
    earth: { rise: 0, show: 0 },
    shadow: { amt: 0 },
    orbs: { p: 0, i: 0, show: 0 },
    burst: { a: 0, ring: 0 },
    names: { prog: 0, dissolve: 0 },
    scroll: { p: 0 },
    pointer: { x: 0, y: 0, sx: 0, sy: 0 },
  };

  /* ---------- prénoms en particules ---------- */
  let names = null;
  function buildNames(font = 'Great Vibes') {
    if (names) { scene.remove(names); names.geometry.dispose(); }
    const port = portrait();
    const c = document.createElement('canvas'); const W = 1400, H = port ? 1100 : 420; c.width = W; c.height = H;
    const g = c.getContext('2d'); g.fillStyle = '#fff'; g.textAlign = 'center'; g.textBaseline = 'middle';
    const fit = (txt, size) => { g.font = `${size}px "${font}"`; const w = g.measureText(txt).width; return w > W * 0.9 ? size * W * 0.9 / w : size; };
    if (port) {
      const fs = Math.min(fit('Shayma', 330), fit('Bilal', 330));
      g.font = `${fs}px "${font}"`; g.fillText('Shayma', W / 2, H * 0.24);
      g.font = `${fs * 0.6}px "${font}"`; g.fillText('&', W / 2, H * 0.52);
      g.font = `${fs}px "${font}"`; g.fillText('Bilal', W / 2, H * 0.78);
    } else { const fs = fit('Shayma & Bilal', 250); g.font = `${fs}px "${font}"`; g.fillText('Shayma & Bilal', W / 2, H * 0.55); }
    const data = g.getImageData(0, 0, W, H).data; const pts = [];
    const step = port ? 4 : 3;
    for (let y = 0; y < H; y += step) for (let x = 0; x < W; x += step) if (data[(y * W + x) * 4 + 3] > 120) pts.push([x / W - 0.5, 0.5 - y / H]);
    const max = mobile ? 7000 : 14000; while (pts.length > max) pts.splice((Math.random() * pts.length) | 0, 1);
    // plan face caméra (pose d'atterrissage), centré sur M
    const fwd = landTarget.clone().sub(landPos).normalize();
    const right = new THREE.Vector3().crossVectors(fwd, upCam).normalize();
    const up = new THREE.Vector3().crossVectors(right, fwd).normalize();
    const dist = 0.12;
    const fovL = (port ? 55 : 40) * DEG, th = Math.tan(fovL / 2);
    const viewW = 2 * dist * th * (innerWidth / innerHeight);
    const width = Math.min(viewW * (port ? 0.8 : 0.56), 2 * dist * th * (port ? 0.5 : 0.62) * W / H), height = width * H / W;
    // centre des prénoms : légèrement au-dessus du centre de l'écran
    const C = landPos.clone().addScaledVector(fwd, dist).addScaledVector(up, (port ? 0.36 : 0.3) * dist * th);
    const n = pts.length, aS = new Float32Array(n * 3), aT = new Float32Array(n * 3), aR = new Float32Array(n * 4), aC = new Float32Array(n * 3);
    const silver = [0.72, 0.82, 1.0], gold = [1.0, 0.7, 0.32];
    pts.forEach(([x, y], i) => {
      const t = C.clone().addScaledVector(right, x * width).addScaledVector(up, y * height);
      aT.set([t.x, t.y, t.z], i * 3);
      const s = M.clone().add(new THREE.Vector3().randomDirection().multiplyScalar(Math.random() * 0.0015)); aS.set([s.x, s.y, s.z], i * 3);
      aR.set([Math.random(), Math.random(), Math.random(), Math.random()], i * 4);
      const side = x < 0 ? silver : gold; const other = x < 0 ? gold : silver; const col = Math.random() < 0.8 ? side : other;
      aC.set(col, i * 3);
    });
    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.BufferAttribute(aT.slice(), 3));
    geo.setAttribute('aStart', new THREE.BufferAttribute(aS, 3)); geo.setAttribute('aTarget', new THREE.BufferAttribute(aT, 3));
    geo.setAttribute('aRand', new THREE.BufferAttribute(aR, 4)); geo.setAttribute('aColor', new THREE.BufferAttribute(aC, 3));
    const mat = new THREE.ShaderMaterial({ vertexShader: namesVert, fragmentShader: namesFrag, transparent: true, depthWrite: false, depthTest: false, blending: THREE.AdditiveBlending,
      uniforms: { uProg: { value: 0 }, uTime: { value: 0 }, uDissolve: { value: 0 }, uPR: { value: PR }, uSize: { value: mobile ? 2.6 : 3.0 },
        uSpread: { value: width * 0.12 }, uUp: { value: up }, uRight: { value: right }, uFwd: { value: fwd } } });
    names = new THREE.Points(geo, mat); names.frustumCulled = false; names.renderOrder = 10; scene.add(names);
  }

  /* ---------- parcours caméra au scroll ---------- */
  let scrollPath = null;
  function buildScrollPath() {
    const k = portrait() ? 0.35 : 1;
    const P = [landPos.clone(), new THREE.Vector3(0, -0.55, 1.45), new THREE.Vector3(2.1 * k, -0.5, 2.7), new THREE.Vector3(-1.9 * k, 0.45, 3.3), new THREE.Vector3(0.4 * k, 0.15, 5.6)];
    const T = [landTarget.clone(), new THREE.Vector3(0, 0.25, 0.75), new THREE.Vector3(0.95 * k, portrait() ? -0.75 : 0, 0), new THREE.Vector3(-0.95 * k, portrait() ? -0.75 : 0, 0), new THREE.Vector3(0, portrait() ? -1.1 : 0, 0)];
    scrollPath = { pos: new THREE.CatmullRomCurve3(P, false, 'catmullrom', 0.3), tgt: new THREE.CatmullRomCurve3(T, false, 'catmullrom', 0.3) };
  }
  const sunKeys = [[0, 78], [0.3, 30], [0.62, 14], [1, 148]]; // gibbeuse → pleine lune (badr) → croissant (hilal)
  const keyed = (keys, p) => { for (let i = 1; i < keys.length; i++) if (p <= keys[i][0]) { const [a, va] = keys[i - 1], [b, vb] = keys[i]; const t = (p - a) / (b - a); return lerp(va, vb, t * t * (3 - 2 * t)); } return keys[keys.length - 1][1]; };

  /* ---------- post-production ---------- */
  const composer = new EffectComposer(renderer);
  composer.setPixelRatio(PR); composer.setSize(innerWidth, innerHeight);
  composer.addPass(new RenderPass(scene, camera));
  const bloom = new UnrealBloomPass(new THREE.Vector2(innerWidth / 2, innerHeight / 2), 0.5, 0.55, 0.82);
  composer.addPass(bloom);
  const finalPass = new ShaderPass(FinalShader); composer.addPass(finalPass);
  composer.addPass(new OutputPass());

  /* ---------- interaction ---------- */
  const ray = new THREE.Raycaster(); const ndc = new THREE.Vector2();
  function hitMoon(cx, cy) {
    ndc.set((cx / innerWidth) * 2 - 1, -(cy / innerHeight) * 2 + 1); ray.setFromCamera(ndc, camera);
    return ray.ray.intersectsSphere(new THREE.Sphere(new THREE.Vector3(), 1));
  }
  function resize() {
    camera.aspect = innerWidth / innerHeight; camera.updateProjectionMatrix();
    renderer.setSize(innerWidth, innerHeight, false); composer.setSize(innerWidth, innerHeight);
    bloom.resolution.set(innerWidth / 2, innerHeight / 2);
    finalPass.uniforms.uAspect.value = innerWidth / innerHeight;
    if (S.mode === 'intro') { S.cam.z = introDist(); S.cam.y = S.cam.ty = introY(); }
    if (S.mode === 'scroll') buildScrollPath();
  }
  finalPass.uniforms.uAspect.value = innerWidth / innerHeight;

  /* ---------- boucle ---------- */
  const clock = new THREE.Clock(); const tmp = new THREE.Vector3(); const tgt = new THREE.Vector3();
  function frame() {
    const t = clock.getElapsedTime();
    const P = S.pointer; P.sx += (P.x - P.sx) * 0.05; P.sy += (P.y - P.sy) * 0.05;

    // soleil (vient de l'est, angle theta depuis l'axe de visée +Z)
    let theta = S.sun.theta;
    if (S.mode === 'scroll') theta = keyed(sunKeys, S.scroll.p) * DEG;
    shared.uSunDir.value.set(Math.sin(theta), Math.sin(S.sun.tilt), Math.cos(theta)).normalize();

    // caméra
    if (S.mode === 'scroll' && scrollPath) {
      const p = S.scroll.p; scrollPath.pos.getPoint(p, tmp); scrollPath.tgt.getPoint(p, tgt);
      camera.position.copy(tmp); camera.fov = lerp(portrait() ? 55 : 40, portrait() ? 42 : 32, smooth(0, 0.3, p));
      camera.up.copy(tmp).normalize().lerp(new THREE.Vector3(0, 1, 0), smooth(0, 0.25, p)).normalize();
      camera.lookAt(tgt);
    } else {
      const c = S.cam;
      const sway = S.mode === 'intro' ? 1 : 0;
      camera.position.set(c.x + (Math.sin(t * 0.13) * 0.05 + P.sx * 0.25) * sway * c.z * 0.1, c.y + (Math.cos(t * 0.11) * 0.04 - P.sy * 0.18) * sway * c.z * 0.1, c.z);
      camera.fov = c.fov;
      // pendant la descente, l'horizon devient « le bas » de l'image
      const upBlend = smooth(1.15, 1.03, camera.position.length());
      camera.up.set(0, 1, 0).lerp(camera.position.clone().normalize(), upBlend * 0.98).normalize();
      camera.lookAt(c.tx, c.ty, c.tz);
    }
    camera.updateProjectionMatrix();

    shared.uExposure.value = S.mode === 'scroll' ? lerp(S.fx.exposure, mobile ? 1.5 : 1.7, smooth(0, 0.2, S.scroll.p)) : S.fx.exposure;
    // terrain : ombres portées précalculées
    patchMat.uniforms.uShadowAmt.value = S.mode === 'scroll' ? S.shadow.amt * (1 - smooth(0, 0.08, S.scroll.p)) : S.shadow.amt;

    // halo
    halo.material.opacity = S.moon.halo * (0.55 + 0.45 * smooth(1.6, 4, camera.position.length()));

    // Terre
    const ep = earthAt(S.earth.rise); earth.position.copy(ep); earthGlow.position.copy(ep);
    earth.rotation.y += 0.0004;
    earthMat.uniforms.uOpacity.value = S.earth.show; earthGlow.material.opacity = S.earth.show;
    earth.visible = earthGlow.visible = S.earth.show > 0.001;

    // lumières de Shayma & Bilal : spirale autour de M, au-dessus du cratère
    const op = S.orbs.p, e = 1 - Math.pow(1 - op, 2.2);
    const R = lerp(0.075, 0, e), ang = e * Math.PI * 6.2 + 0.4, hgt = lerp(0.05, 0, e);
    for (let i = 0; i < 2; i++) {
      const a = ang + i * Math.PI;
      const v = shared.uOrbPos.value[i].set(M.x + Math.cos(a) * R, M.y + Math.sin(a) * R * 0.85, M.z + hgt + Math.sin(a * 2) * 0.002 * (1 - e));
      orbs[i].position.copy(v);
      const fl = 0.9 + 0.1 * Math.sin(t * 9 + i * 2);
      orbs[i].material.opacity = S.orbs.show; orbs[i].scale.setScalar(0.011 * fl * (0.7 + S.orbs.show * 0.3));
      shared.uOrbI.value[i] = S.orbs.i * fl;
    }
    burst.material.opacity = S.burst.a; burst.scale.setScalar(0.004 + S.burst.a * 0.05);
    ring.scale.setScalar(0.0001 + S.burst.ring * 0.33); ringMat.uniforms.uA.value = (1 - S.burst.ring) * (S.burst.ring > 0 ? 1.6 : 0);

    // prénoms
    if (names) { const u = names.material.uniforms; u.uProg.value = S.names.prog; u.uTime.value = t; u.uDissolve.value = S.mode === 'scroll' ? smooth(0, 0.07, S.scroll.p) : S.names.dissolve; names.visible = S.names.prog > 0 && u.uDissolve.value < 1; }

    starMat.uniforms.uTime.value = t;
    bloom.strength = S.fx.bloom;
    const fu = finalPass.uniforms; fu.uZoom.value = S.fx.zoom; fu.uFlash.value = S.fx.flash; fu.uFade.value = S.fx.fade; fu.uVig.value = S.fx.vig;
    composer.render();
  }
  renderer.setAnimationLoop(frame);

  return {
    S, M, renderer, camera, resize, hitMoon, buildNames, buildScrollPath, introDist, introY,
    poses: { landPos, landTarget, landFov: () => (portrait() ? 55 : 40) },
    pause(v) { renderer.setAnimationLoop(v ? null : frame); },
  };
}
