/* Bruitages fabriqués en direct par le navigateur (Web Audio) : aucun fichier son,
   donc aucune musique protégée. */
window.Sons = (function () {
  "use strict";
  var ctx = null;
  function lire() { try { return localStorage.getItem("cadeau-son"); } catch (e) { return null; } }
  function ecrire(v) { try { localStorage.setItem("cadeau-son", v); } catch (e) { /* navigation privée */ } }
  var actif = lire() !== "off";

  function audio() {
    if (!actif) return null;
    if (!ctx) {
      var AC = window.AudioContext || window.webkitAudioContext;
      if (!AC) return null;
      // Safari récent : demande à jouer le son même si l'iPhone est en mode silencieux
      try { if (navigator.audioSession) navigator.audioSession.type = "playback"; } catch (e) { /* non pris en charge */ }
      ctx = new AC();
    }
    if (ctx.state !== "running" && ctx.resume) ctx.resume();
    return ctx;
  }

  // Une note avec une enveloppe douce
  function note(freq, debut, duree, o) {
    var a = audio(); if (!a) return;
    o = o || {};
    var t = a.currentTime + (debut || 0);
    var osc = a.createOscillator(), g = a.createGain();
    osc.type = o.type || "sine";
    osc.frequency.setValueAtTime(freq, t);
    if (o.vers) osc.frequency.exponentialRampToValueAtTime(o.vers, t + duree);
    g.gain.setValueAtTime(0.0001, t);
    g.gain.exponentialRampToValueAtTime(o.vol || 0.15, t + (o.attaque || 0.008));
    g.gain.exponentialRampToValueAtTime(0.0001, t + duree);
    osc.connect(g).connect(a.destination);
    osc.start(t);
    osc.stop(t + duree + 0.05);
  }

  // Un souffle (bruit filtré) : papier, vent, frottement
  function souffle(debut, duree, o) {
    var a = audio(); if (!a) return;
    o = o || {};
    var t = a.currentTime + (debut || 0);
    var n = Math.floor(a.sampleRate * duree);
    var buf = a.createBuffer(1, n, a.sampleRate), d = buf.getChannelData(0);
    for (var i = 0; i < n; i++) d[i] = Math.random() * 2 - 1;
    var src = a.createBufferSource(); src.buffer = buf;
    var f = a.createBiquadFilter();
    f.type = o.filtre || "bandpass";
    f.frequency.setValueAtTime(o.de || 800, t);
    if (o.vers) f.frequency.exponentialRampToValueAtTime(o.vers, t + duree);
    var g = a.createGain();
    g.gain.setValueAtTime(0.0001, t);
    g.gain.exponentialRampToValueAtTime(o.vol || 0.12, t + duree * 0.3);
    g.gain.exponentialRampToValueAtTime(0.0001, t + duree);
    src.connect(f).connect(g).connect(a.destination);
    src.start(t);
  }

  // Cloche : plusieurs harmoniques qui s'éteignent doucement
  function cloche(freq, debut, vol) {
    note(freq, debut, 1.6, { vol: vol, attaque: 0.004 });
    note(freq * 2.01, debut, 1.1, { vol: vol * 0.45, attaque: 0.004 });
    note(freq * 3.02, debut, 0.7, { vol: vol * 0.2, attaque: 0.004 });
  }

  return {
    // sons doux (sinus, attaques lentes) : rien qui rappelle un jeu vidéo
    touche: function () { note(880, 0, 0.16, { type: "sine", vol: 0.07, attaque: 0.006 }); },
    effacer: function () { note(587, 0, 0.14, { type: "sine", vol: 0.05, vers: 523 }); },
    erreur: function () {
      note(294, 0, 0.5, { type: "sine", vol: 0.08, vers: 262, attaque: 0.02 });
      note(220, 0.06, 0.6, { type: "sine", vol: 0.05, attaque: 0.03 });
    },
    ouvert: function () {
      // accord suspendu qui se résout, comme une petite boîte à musique
      cloche(784, 0, 0.07); cloche(1175, 0.12, 0.05); cloche(1568, 0.26, 0.04);
    },
    page: function () { souffle(0, 0.45, { de: 400, vers: 2400, vol: 0.07 }); },
    papier: function () {
      souffle(0, 0.22, { filtre: "highpass", de: 2500, vol: 0.1 });
      souffle(0.18, 0.3, { filtre: "highpass", de: 3500, vol: 0.08 });
    },
    // n = numéro de l'appui : le son monte à chaque fois
    appui: function (n) {
      note(110 + n * 22, 0, 0.22, { vol: 0.35, vers: 60 });
      souffle(0, 0.1, { de: 900, vol: 0.12 });
      note(1568 + n * 180, 0.04, 0.25, { type: "triangle", vol: 0.05 });
    },
    magie: function () {
      souffle(0, 1.2, { de: 600, vers: 6000, vol: 0.06 });
      for (var i = 0; i < 18; i++) {
        note(1200 + Math.random() * 1800, 0.05 + i * 0.06, 0.35, { type: "sine", vol: 0.05 });
      }
    },
    bague: function () { cloche(1318.5, 0, 0.12); cloche(1975.5, 0.18, 0.08); cloche(2637, 0.36, 0.05); },
    // « Non » : petit « bloup » qui descend, et un tintement pour le « Oui » qui grossit
    non: function (n) {
      note(620 - n * 45, 0, 0.18, { type: "triangle", vol: 0.1, vers: 240 });
      souffle(0, 0.2, { de: 2200, vers: 500, vol: 0.05 });
      note(880 + n * 140, 0.14, 0.3, { type: "sine", vol: 0.07 });
    },
    oui: function () {
      // un accord large et lent, des cloches qui s'éteignent doucement
      [262, 392, 523, 659].forEach(function (f, i) { note(f, i * 0.12, 2.6, { type: "sine", vol: 0.06, attaque: 0.25 }); });
      cloche(1047, 0.5, 0.06); cloche(1319, 0.85, 0.045); cloche(1568, 1.2, 0.035);
    },
    estActif: function () { return actif; },
    basculer: function () {
      actif = !actif;
      ecrire(actif ? "on" : "off");
      if (!actif && ctx) ctx.suspend();
      return actif;
    }
  };
})();
