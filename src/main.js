import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/SplitText';
import Lenis from 'lenis';
import { createScene, webglOK } from './scene.js';
import { decorate, starPts } from './deco.js';

gsap.registerPlugin(ScrollTrigger, SplitText);

const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];
const CONFIG = window.CONFIG || {};
const DEG = Math.PI / 180;
const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
const mobile = matchMedia('(pointer: coarse)').matches || innerWidth < 760;
const wait = (ms) => new Promise((r) => setTimeout(r, ms));
if ('scrollRestoration' in history) history.scrollRestoration = 'manual';
scrollTo(0, 0);

document.documentElement.style.setProperty('--star', `url("data:image/svg+xml,${encodeURIComponent(
  `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 50 50'><polygon points='${starPts(25, 25, 22)}' fill='none' stroke='#d9b56c' stroke-width='1.5'/><polygon points='${starPts(25, 25, 9, Math.PI / 8)}' fill='#d9b56c'/></svg>`)}")`);

/* ---------------- scroll fluide ---------------- */
const lenis = new Lenis({ lerp: 0.085, smoothWheel: true });
lenis.stop();
lenis.on('scroll', ScrollTrigger.update);
gsap.ticker.add((t) => lenis.raf(t * 1000));
gsap.ticker.lagSmoothing(0);

/* ---------------- chargement ---------------- */
const ld = $('#ldStar');
ld.setAttribute('points', starPts(50, 50, 40));
const ldLen = ld.getTotalLength ? ld.getTotalLength() : 400;
ld.style.strokeDasharray = ldLen;
let shown = 0;
function setProgress(p) {
  gsap.to({ v: shown }, { v: p, duration: 0.5, onUpdate() { shown = this.targets()[0].v;
    ld.style.strokeDashoffset = ldLen * (1 - shown); $('.ld-pct').textContent = Math.round(shown * 100); } });
}
setProgress(0.02);

/* ---------------- son : récitation (une fois) ou musique (en boucle) ---------------- */
const audio = $('#music');
let audioReady = false, gainNode = null, actx = null, muted = false, finished = false;
const SON = CONFIG.recitation || CONFIG.musique;
const isRecit = !!CONFIG.recitation;
const targetVol = CONFIG.volume ?? 0.55;
audio.loop = !isRecit;
if (SON) {
  audio.addEventListener('loadedmetadata', () => { audioReady = true; $('.sound-hint').hidden = false; }, { once: true });
  audio.addEventListener('error', () => { audioReady = false; $('.sound-hint').hidden = true; $('#sound').hidden = true; }, { once: true });
  audio.src = SON; audio.load();
}
// à la fin de la récitation : le bouton passe en « réécouter »
audio.addEventListener('ended', () => {
  if (!isRecit) return;
  finished = true; muted = true;
  $('#sound').classList.add('off'); $('#sound').setAttribute('aria-label', 'Réécouter la récitation');
});
const volObj = { v: 0 };
function applyVol() { if (gainNode) gainNode.gain.value = volObj.v; else audio.volume = Math.min(1, volObj.v); }
function startMusic() {
  if (!SON || audio.error) return;
  try { // Web Audio : le volume HTML est ignoré sur iPhone, le gain non
    const AC = window.AudioContext || window.webkitAudioContext;
    if (AC && !actx) { actx = new AC(); const src = actx.createMediaElementSource(audio); gainNode = actx.createGain(); gainNode.gain.value = 0; src.connect(gainNode).connect(actx.destination); }
    actx && actx.resume();
  } catch (e) { gainNode = null; }
  volObj.v = 0; applyVol();
  const p = audio.play();
  if (p) p.then(() => { $('#sound').hidden = false; gsap.to(volObj, { v: targetVol, duration: isRecit ? 1.5 : 5, ease: 'sine.inOut', onUpdate: applyVol }); }).catch(() => {});
}
$('#sound').addEventListener('click', () => {
  if (finished) { finished = false; audio.currentTime = 0; } // réécouter depuis le début
  muted = !muted; $('#sound').classList.toggle('off', muted);
  $('#sound').setAttribute('aria-label', muted ? 'Remettre le son' : 'Couper le son');
  gsap.to(volObj, { v: muted ? 0 : targetVol, duration: 1.2, ease: 'sine.inOut', onUpdate: applyVol,
    onStart() { if (!muted) audio.play().catch(() => {}); }, onComplete() { if (muted) audio.pause(); } });
});
document.addEventListener('visibilitychange', () => {
  if (!audio.src || muted || finished || audio.paused === document.hidden) return;
  if (document.hidden) audio.pause(); else if (entered) audio.play().catch(() => {});
});

/* ---------------- curseur (souris uniquement) ---------------- */
const cursor = $('#cursor');
if (matchMedia('(pointer: fine)').matches && !reduce) {
  document.body.classList.add('has-cursor');
  const xTo = gsap.quickTo(cursor, 'x', { duration: 0.35, ease: 'power3' }), yTo = gsap.quickTo(cursor, 'y', { duration: 0.35, ease: 'power3' });
  addEventListener('pointermove', (e) => { xTo(e.clientX); yTo(e.clientY); });
  document.addEventListener('pointerover', (e) => { if (e.target.closest('a,button,summary')) cursor.classList.add('big'); });
  document.addEventListener('pointerout', (e) => { if (e.target.closest('a,button,summary')) cursor.classList.remove('big'); });
}

/* ---------------- infos de la soirée ---------------- */
function fillInfos() {
  const d = CONFIG.date ? new Date(CONFIG.date) : null; const ok = d && !isNaN(d);
  $('#iDate').textContent = ok ? d.toLocaleDateString('fr-FR', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' }) : 'Bientôt, in shâ’ Allâh';
  $('#iHeure').textContent = ok ? d.toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' }).replace(':', 'h') : 'À venir';
  const lieu = [CONFIG.lieu, CONFIG.adresse].filter(Boolean);
  $('#iLieu').textContent = lieu.length ? lieu.join(' — ') : 'À venir';
  if (lieu.length) { const b = $('#bMaps'); b.href = 'https://www.google.com/maps/search/?api=1&query=' + encodeURIComponent(lieu.join(', ')); b.hidden = false; }
  if (CONFIG.whatsapp) { const b = $('#bRsvp'); b.href = `https://wa.me/${String(CONFIG.whatsapp).replace(/\D/g, '')}?text=${encodeURIComponent(CONFIG.messageRsvp || '')}`; b.hidden = false; }
  if (!ok) return;
  const cal = $('#bCal'); cal.hidden = false;
  cal.addEventListener('click', () => {
    const f = (x) => x.toISOString().replace(/[-:]/g, '').replace(/\.\d{3}/, '');
    const ics = ['BEGIN:VCALENDAR', 'VERSION:2.0', 'PRODID:-//shayma-bilal//fr', 'BEGIN:VEVENT', `UID:${Date.now()}@shayma-bilal`, `DTSTAMP:${f(new Date())}`,
      `DTSTART:${f(d)}`, `DTEND:${f(new Date(d.getTime() + 4 * 3600e3))}`, 'SUMMARY:Fiançailles de Shayma & Bilal',
      `LOCATION:${lieu.join(', ').replace(/,/g, '\\,')}`, 'END:VEVENT', 'END:VCALENDAR'].join('\r\n');
    const a = document.createElement('a'); a.href = URL.createObjectURL(new Blob([ics], { type: 'text/calendar' })); a.download = 'fiancailles-shayma-bilal.ics'; a.click();
  });
  const cd = $('#countdown');
  const set = (id, v) => { const el = $(id), s = String(v); if (el.textContent !== s) { el.textContent = s; gsap.fromTo(el, { y: -8, opacity: 0.3 }, { y: 0, opacity: 1, duration: 0.5, ease: 'power3.out' }); } };
  const tick = () => {
    const ms = d - Date.now(); cd.hidden = false;
    if (ms <= 0) { cd.innerHTML = '<p class="accent">C’est le grand jour ✨</p>'; return true; }
    set('#cdJ', Math.floor(ms / 864e5)); set('#cdH', Math.floor(ms / 36e5) % 24); set('#cdM', Math.floor(ms / 6e4) % 60); set('#cdS', Math.floor(ms / 1e3) % 60);
  };
  if (!tick()) { const iv = setInterval(() => { if (tick()) clearInterval(iv); }, 1000); }
}

/* ---------------- dessin des ornements ---------------- */
function drawSVG(root, { duration = 2.2, delay = 0 } = {}) {
  const tl = gsap.timeline({ delay });
  const paths = $$('.draw', root);
  paths.forEach((p) => { const L = p.getTotalLength(); p.style.strokeDasharray = L; p.style.strokeDashoffset = L; });
  tl.to(paths, { strokeDashoffset: 0, duration, ease: 'power2.inOut', stagger: 0.18 });
  tl.from($$('.pop', root), { scale: 0, opacity: 0, transformOrigin: '50% 50%', duration: 0.8, ease: 'back.out(2)', stagger: 0.08 }, duration * 0.6);
  return tl;
}

/* ================= BOOT ================= */
let entered = false, unlocked = false, master = null, sc = null;

async function boot() {
  decorate();
  fillInfos();
  if (!webglOK()) return fallback();
  try { sc = await createScene($('#gl'), { mobile, onProgress: (p) => setProgress(0.05 + p * 0.9) }); }
  catch (e) { console.error(e); return fallback(); }
  await Promise.race([Promise.all([document.fonts.ready, document.fonts.load('200px "Great Vibes"'), document.fonts.load('40px "Amiri Quran"')]), wait(3500)]);
  sc.buildNames();
  setProgress(1);
  await wait(550);
  addEventListener('resize', onResize);
  introReveal();
}

let lastPortrait = innerWidth / innerHeight < 0.9;
function onResize() {
  if (!sc) return; sc.resize();
  const p = innerWidth / innerHeight < 0.9;
  if (p !== lastPortrait && sc.S.names.prog === 0) sc.buildNames();
  lastPortrait = p;
}

/* ---------- 1. la lune se lève ---------- */
function introReveal() {
  const S = sc.S;
  const qLat = SplitText.create('.qamar-lat', { type: 'chars' });
  const tl = gsap.timeline();
  tl.to('#loader', { autoAlpha: 0, duration: 1.1, ease: 'power2.inOut' })
    .add(() => document.body.classList.remove('loading'))
    .to(S.fx, { fade: 0, duration: 2.4, ease: 'power2.out' }, 0.2)
    .fromTo(S.sun, { theta: 122 * DEG }, { theta: 35 * DEG, duration: 4.6, ease: 'power2.inOut' }, 0.2)
    .to(S.moon, { halo: 1, duration: 3 }, 1.8)
    .fromTo(S.cam, { z: sc.introDist() * 1.4 }, { z: sc.introDist(), duration: 5, ease: 'expo.out' }, 0.2)
    .add(drawSVG($('.intro-arch'), { duration: 2.6 }), 1.4)
    .from('.kicker', { opacity: 0, y: 16, duration: 1.2, ease: 'power3.out' }, 2.2)
    .from('.qamar', { opacity: 0, y: 30, scale: 0.94, filter: 'blur(14px)', duration: 1.8, ease: 'expo.out' }, 2.4)
    .from(qLat.chars, { opacity: 0, y: 12, filter: 'blur(6px)', stagger: 0.07, duration: 1, ease: 'power3.out' }, 2.9)
    .from('.enter', { opacity: 0, y: 24, duration: 1.2, ease: 'expo.out' }, 3.4)
    .from('.sound-hint', { opacity: 0, duration: 1 }, 3.9)
    .add(() => {
      gsap.to('.enter-ring', { scale: 1.08, opacity: 0.55, duration: 1.4, ease: 'sine.inOut', yoyo: true, repeat: -1 });
      armEnter();
    }, 3.6);
  if (reduce) tl.progress(1);
}

function armEnter() {
  const canvas = $('#gl');
  const onMove = (e) => {
    sc.S.pointer.x = (e.clientX / innerWidth) * 2 - 1; sc.S.pointer.y = (e.clientY / innerHeight) * 2 - 1;
    if (entered) return;
    const hit = sc.hitMoon(e.clientX, e.clientY);
    canvas.style.cursor = hit ? 'pointer' : ''; cursor.classList.toggle('big', hit);
  };
  addEventListener('pointermove', onMove);
  canvas.addEventListener('click', (e) => { if (sc.hitMoon(e.clientX, e.clientY)) enter(); });
  $('#enter').addEventListener('click', enter);
}

/* ---------- 2. plongée dans la lune ---------- */
function enter() {
  if (entered) return; entered = true;
  startMusic();
  navigator.vibrate?.(18);
  cursor.classList.remove('big');
  gsap.killTweensOf('.enter-ring');
  const S = sc.S, L = sc.poses;
  const arHero = SplitText.create('.ar-hero', { type: 'words' });
  $('#skip').hidden = false;
  gsap.from('#skip', { opacity: 0, duration: 1, delay: 1.5 });

  const tl = gsap.timeline({ onComplete: unlock });
  master = tl;
  tl.to('.intro-top > *', { y: -34, opacity: 0, filter: 'blur(10px)', stagger: 0.07, duration: 0.8, ease: 'power2.in' }, 0)
    .to('.intro-bottom', { y: 34, opacity: 0, duration: 0.6, ease: 'power2.in' }, 0)
    .to('.intro-arch', { scale: 1.35, opacity: 0, duration: 1.6, ease: 'power2.in' }, 0.05)
    .set('#intro', { display: 'none' }, 1.7)
    // anticipation, puis plongée (FOV qui s'ouvre = sensation de vitesse)
    .to(S.cam, { z: sc.introDist() * 1.07, duration: 0.7, ease: 'power2.out' }, 0)
    .to(S.cam, { y: 0, ty: 0, z: 1.3, fov: 56, duration: 3.1, ease: 'expo.inOut' }, 0.6)
    .to(S.fx, { zoom: 0.17, duration: 1.5, ease: 'power3.in' }, 1.0)
    .to(S.fx, { zoom: 0, duration: 1.7, ease: 'power3.out' }, 2.5)
    .to(S.moon, { halo: 0, duration: 1.4 }, 1.0)
    .to(S.sun, { theta: 78 * DEG, duration: 6.5, ease: 'sine.inOut' }, 0.8)
    // descente vers Copernic, la caméra se redresse vers l'horizon
    .to(S.cam, { x: L.landPos.x, y: L.landPos.y, z: L.landPos.z, tx: L.landTarget.x, ty: L.landTarget.y, tz: L.landTarget.z, fov: L.landFov(), duration: 3.8, ease: 'power3.inOut' }, 3.3)
    .to(S.shadow, { amt: 1, duration: 2.6, ease: 'power1.inOut' }, 4.2)
    .to(S.fx, { exposure: 1.5, bloom: 0.4, duration: 3, ease: 'power1.inOut' }, 4.0)
    .to('.frame-fixed', { opacity: 1, duration: 2 }, 5.8)
    // lever de Terre
    .set(S.earth, { show: 1 }, 5.0)
    .fromTo(S.earth, { rise: 0 }, { rise: 1, duration: 7.5, ease: 'power1.out' }, 5.0)
    // verset An-Naba 78:8
    .to('.bism', { opacity: 1, duration: 1.4, ease: 'power2.out' }, 6.6)
    .set('.ar-hero', { opacity: 1 }, 7.0)
    .from(arHero.words, { opacity: 0, y: 24, filter: 'blur(12px)', duration: 1.6, stagger: 0.28, ease: 'expo.out' }, 7.0)
    .fromTo('.fr-hero', { opacity: 0, y: 14 }, { opacity: 1, y: 0, duration: 1.4, ease: 'power3.out' }, 7.9)
    .to('.st-verse .ref', { opacity: 0.9, duration: 1.2 }, 8.4)
    // les deux lumières : Shayma (argent) et Bilal (or)
    .to(S.orbs, { show: 1, i: 1.5, duration: 1.3, ease: 'power2.out' }, 8.6)
    .fromTo(S.orbs, { p: 0 }, { p: 1, duration: 4.6, ease: 'power1.in' }, 8.6)
    .to('.st-verse', { opacity: 0, y: -24, filter: 'blur(8px)', duration: 1.1, ease: 'power2.in' }, 12.0)
    // la fusion
    .to(S.orbs, { i: 10, duration: 0.25, ease: 'power2.in' }, 12.95)
    .to(S.fx, { flash: 0.6, bloom: 1.9, duration: 0.2, ease: 'power2.in' }, 13.05)
    .to(S.burst, { a: 1, duration: 0.15 }, 13.1)
    .add(() => navigator.vibrate?.([25, 40, 35]), 13.15)
    .to(S.orbs, { i: 0, show: 0, duration: 1.2, ease: 'power2.out' }, 13.25)
    .to(S.fx, { flash: 0, duration: 1.5, ease: 'power2.out' }, 13.25)
    .to(S.fx, { bloom: mobile ? 0.42 : 0.55, duration: 3, ease: 'power2.out' }, 13.3)
    .to(S.burst, { a: 0, duration: 1.8, ease: 'power2.out' }, 13.3)
    .fromTo(S.burst, { ring: 0 }, { ring: 1, duration: 2.6, ease: 'expo.out' }, 13.15)
    .fromTo(S.names, { prog: 0 }, { prog: 1, duration: 3.3, ease: 'none' }, 13.15)
    .fromTo('.sub1', { opacity: 0, y: 16, letterSpacing: '.6em' }, { opacity: 1, y: 0, letterSpacing: '.32em', duration: 1.8, ease: 'expo.out' }, 15.4)
    .fromTo('.sub2', { opacity: 0, y: 12 }, { opacity: 1, y: 0, duration: 1.4, ease: 'power3.out' }, 15.9)
    .to('.scroll-cue', { autoAlpha: 1, duration: 1.2 }, 16.6)
    .set('#skip', { display: 'none' }, 16.6);
  if (reduce) tl.progress(1);
}
$('#skip').addEventListener('click', () => master && master.progress(1));

/* ---------- 3. le scroll prend le relais ---------- */
function unlock() {
  if (unlocked) return; unlocked = true;
  document.body.classList.remove('locked');
  if (sc) { sc.S.mode = 'scroll'; sc.buildScrollPath(); }
  lenis.start();
  setupScroll();
  ScrollTrigger.refresh();
}

function setupScroll() {
  if (sc) gsap.to(sc.S.scroll, { p: 1, ease: 'none', scrollTrigger: { trigger: '#content', start: 'top top', end: 'bottom bottom', scrub: 1.4 } });
  // la flèche « Faites défiler » descend jusqu'à la suite
  $('.sc-btn').addEventListener('click', () => lenis.scrollTo('#verset', { duration: 1.8 }));
  gsap.to('.st-sub, .scroll-cue', { autoAlpha: 0, y: -50, ease: 'none', stagger: 0.02,
    scrollTrigger: { trigger: '.landing-space', start: 'top top', end: '45% top', scrub: true } });

  // fil de progression
  const prog = $('.progress');
  gsap.to(prog, { opacity: mobile ? 0 : 1, duration: 1 });
  ScrollTrigger.create({ trigger: '#content', start: 'top top', end: 'bottom bottom', onUpdate: (s) => {
    gsap.set('.pg-line', { scaleY: s.progress }); gsap.set('.pg-star', { y: s.progress * prog.offsetHeight - 4 }); } });

  // textes français : lignes masquées
  $$('.split-fr').forEach((el) => SplitText.create(el, { type: 'lines', mask: 'lines', autoSplit: true,
    onSplit: (self) => gsap.from(self.lines, { yPercent: 110, opacity: 0, duration: 1.3, stagger: 0.1, ease: 'expo.out',
      scrollTrigger: { trigger: el, start: 'top 86%', once: true } }) }));
  // textes arabes : mot à mot (les lettres restent liées)
  $$('.split-ar').forEach((el) => { const s = SplitText.create(el, { type: 'words', wordsClass: 'w-ar' });
    gsap.from(s.words, { opacity: 0, y: 26, filter: 'blur(10px)', duration: 1.5, stagger: 0.07, ease: 'expo.out', scrollTrigger: { trigger: el, start: 'top 85%', once: true } }); });
  $$('.rv').forEach((el) => gsap.from(el, { opacity: 0, y: 34, filter: 'blur(6px)', duration: 1.3, ease: 'expo.out', scrollTrigger: { trigger: el, start: 'top 88%', once: true } }));
  // arcs et séparateurs qui se dessinent
  $$('#content [data-arch], #content [data-divider]').forEach((el) => {
    const tl = drawSVG(el, { duration: el.matches('[data-divider]') ? 1.6 : 2.6 }); tl.pause();
    ScrollTrigger.create({ trigger: el, start: 'top 82%', once: true, onEnter: () => tl.play() });
  });
  $$('#content .divider .spin').forEach((el) => gsap.to(el, { rotation: 360, transformOrigin: '50% 50%', duration: 22, repeat: -1, ease: 'none' }));
  gsap.to('.pair-star', { rotation: 360, duration: 30, repeat: -1, ease: 'none' });
  // cartes : légère profondeur
  $$('.card, .verse-frame').forEach((el) => gsap.fromTo(el, { y: 80, scale: 0.94, opacity: 0 }, { y: 0, scale: 1, opacity: 1, ease: 'expo.out', duration: 1.6,
    scrollTrigger: { trigger: el, start: 'top 92%', once: true } }));
  $$('.rings i').forEach((el, i) => gsap.from(el, { x: i % 2 ? 40 : -40, opacity: 0, duration: 1.6, ease: 'expo.out', scrollTrigger: { trigger: el, start: 'top 85%', once: true } }));

  // hadiths : pile de cartes
  const cards = $$('.hcard');
  cards.forEach((c, i) => {
    c.style.setProperty('--i', i);
    gsap.from(c, { y: 120, rotateX: -12, opacity: 0, duration: 1.4, ease: 'expo.out', transformPerspective: 900, scrollTrigger: { trigger: c, start: 'top 95%', once: true } });
    if (i < cards.length - 1) gsap.to(c, { scale: 0.92, opacity: 0.35, ease: 'none',
      scrollTrigger: { trigger: cards[i + 1], start: 'top 85%', end: 'top 20%', scrub: true } });
  });

  // lanternes : descente + balancement selon la vitesse du scroll
  $$('.lanterns').forEach((g) => gsap.from($$('.lantern', g), { yPercent: -120, duration: 2.2, ease: 'elastic.out(1,0.45)', stagger: 0.18, scrollTrigger: { trigger: g.parentElement, start: 'top 75%', once: true } }));
  const lan = $$('.lantern').map((el) => gsap.quickSetter(el, 'rotation', 'deg'));
  let vel = 0, sw = 0;
  lenis.on('scroll', (e) => { vel = e.velocity; });
  gsap.ticker.add((t) => { sw += (Math.max(-16, Math.min(16, vel * 0.7)) - sw) * 0.06; vel *= 0.9;
    lan.forEach((set, i) => set(Math.sin(t * 1.2 + i * 1.7) * 2.5 - sw)); });
}

/* ---------- sans WebGL ---------- */
function fallback() {
  document.body.classList.add('no-gl');
  $('#fallback').hidden = false;
  gsap.to('#loader', { autoAlpha: 0, duration: 0.8 });
  document.body.classList.remove('loading');
  $('.frame-fixed').style.opacity = 1;
  $('#enter').addEventListener('click', () => {
    if (entered) return; entered = true; startMusic();
    gsap.to('#intro, #fallback', { autoAlpha: 0, duration: 1 });
    const n = document.createElement('p'); n.className = 'script huge'; n.textContent = 'Shayma & Bilal';
    n.style.cssText = 'position:absolute;left:0;right:0;top:44%;text-align:center;font-size:clamp(3rem,13vw,7rem)'; $('#stage').appendChild(n);
    gsap.to('.bism, .ar-hero, .fr-hero, .st-verse .ref, .sub1, .sub2, .scroll-cue', { autoAlpha: 1, duration: 1.2, stagger: 0.15 });
    unlock();
  });
}

boot();
