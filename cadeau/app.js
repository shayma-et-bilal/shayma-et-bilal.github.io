(function () {
  "use strict";

  var C = window.CADEAU || {};
  var CODE = String(C.code || "").replace(/\D/g, "");
  var LONGUEUR = Math.min(Math.max(CODE.length, 4), 6);
  var saisie = "";
  var bloque = false;

  function $(id) { return document.getElementById(id); }
  function texte(id, valeur) { var el = $(id); if (el) el.textContent = valeur || ""; }

  /* ---------- Cœurs qui flottent ---------- */
  var ciel = document.querySelector(".sky");
  for (var i = 0; i < 16; i++) {
    var h = document.createElement("span");
    h.textContent = "❤";
    h.style.left = Math.random() * 100 + "%";
    h.style.fontSize = 10 + Math.random() * 18 + "px";
    h.style.animationDuration = 9 + Math.random() * 10 + "s";
    h.style.animationDelay = -Math.random() * 18 + "s";
    ciel.appendChild(h);
  }

  /* ---------- Écran du cadenas ---------- */
  texte("verrou-pour", C.pour ? "Pour " + C.pour : "");
  texte("indice", C.indice);

  var points = $("points");
  for (var p = 0; p < LONGUEUR; p++) points.appendChild(document.createElement("i"));

  function afficherPoints() {
    var dots = points.children;
    for (var k = 0; k < dots.length; k++) dots[k].classList.toggle("plein", k < saisie.length);
    points.setAttribute("aria-label", saisie.length + " chiffre(s) sur " + LONGUEUR);
  }

  var clavier = $("clavier");
  ["1", "2", "3", "4", "5", "6", "7", "8", "9", "", "0", "⌫"].forEach(function (t) {
    var b = document.createElement("button");
    b.type = "button";
    b.className = "touche";
    if (t === "") { b.className += " vide"; b.tabIndex = -1; b.setAttribute("aria-hidden", "true"); }
    else if (t === "⌫") { b.className += " texte"; b.textContent = "⌫"; b.setAttribute("aria-label", "Effacer"); b.dataset.k = "effacer"; }
    else { b.textContent = t; b.dataset.k = t; }
    clavier.appendChild(b);
  });

  clavier.addEventListener("click", function (e) {
    var b = e.target.closest(".touche");
    if (b && b.dataset.k) appuyer(b.dataset.k);
  });

  document.addEventListener("keydown", function (e) {
    if (!$("cadeau").hidden) return;
    var k = /^[0-9]$/.test(e.key) ? e.key : (e.key === "Backspace" ? "effacer" : null);
    if (!k) return;
    e.preventDefault();
    var b = clavier.querySelector('[data-k="' + k + '"]');
    if (b) { b.classList.add("appui"); setTimeout(function () { b.classList.remove("appui"); }, 120); }
    appuyer(k);
  });

  function appuyer(k) {
    if (bloque) return;
    if (k === "effacer") { saisie = saisie.slice(0, -1); afficherPoints(); return; }
    if (saisie.length >= LONGUEUR) return;
    saisie += k;
    texte("message", "");
    afficherPoints();
    if (saisie.length === LONGUEUR) verifier();
  }

  function verifier() {
    if (saisie === CODE) {
      bloque = true;
      texte("message", "C'est ouvert ❤");
      demarrerMusique(); // appelé pendant l'appui : les navigateurs autorisent le son
      ouvrir();
    } else {
      bloque = true;
      points.classList.add("secoue");
      texte("message", "Ce n'est pas le bon code, réessaie 💔");
      if (navigator.vibrate) navigator.vibrate(120);
      setTimeout(function () {
        points.classList.remove("secoue");
        saisie = "";
        afficherPoints();
        bloque = false;
      }, 650);
    }
  }

  function eclat() {
    var cx = window.innerWidth / 2, cy = window.innerHeight * 0.3;
    for (var n = 0; n < 26; n++) {
      var s = document.createElement("span");
      s.className = "eclat";
      s.textContent = "❤";
      var a = Math.random() * Math.PI * 2, d = 90 + Math.random() * 180;
      s.style.left = cx + "px";
      s.style.top = cy + "px";
      s.style.setProperty("--x", Math.cos(a) * d + "px");
      s.style.setProperty("--y", Math.sin(a) * d + "px");
      document.body.appendChild(s);
      setTimeout(s.remove.bind(s), 1200);
    }
  }

  function ouvrir() {
    var verrou = $("verrou");
    verrou.classList.add("ouvert");
    eclat();
    setTimeout(function () {
      verrou.hidden = true;
      $("cadeau").hidden = false;
      window.scrollTo(0, 0);
      var titre = $("titre");
      titre.setAttribute("tabindex", "-1");
      titre.focus({ preventScroll: true });
    }, 650);
  }

  /* ---------- Contenu du cadeau ---------- */
  texte("intro-pour", C.pour ? "Pour " + C.pour : "");
  texte("titre", C.titre || "Une surprise pour toi");

  var galerie = $("galerie"), reperes = $("reperes");
  (C.photos || []).forEach(function (ph, idx) {
    var fig = document.createElement("figure");
    fig.className = "polaroid";
    var img = document.createElement("img");
    img.src = ph.src;
    img.alt = ph.legende || "Photo " + (idx + 1);
    img.loading = idx === 0 ? "eager" : "lazy";
    fig.appendChild(img);
    if (ph.legende) {
      var cap = document.createElement("figcaption");
      cap.textContent = ph.legende;
      fig.appendChild(cap);
    }
    galerie.appendChild(fig);
    reperes.appendChild(document.createElement("i"));
  });
  if (!galerie.children.length) galerie.closest(".bloc").hidden = true;

  function majReperes() {
    var cartes = galerie.children;
    if (!cartes.length) return;
    var milieu = galerie.scrollLeft + galerie.clientWidth / 2, actif = 0, best = Infinity;
    for (var j = 0; j < cartes.length; j++) {
      var c = cartes[j], dist = Math.abs(c.offsetLeft + c.offsetWidth / 2 - milieu);
      if (dist < best) { best = dist; actif = j; }
    }
    for (var r = 0; r < reperes.children.length; r++) reperes.children[r].classList.toggle("actif", r === actif);
  }
  galerie.addEventListener("scroll", majReperes, { passive: true });
  majReperes();

  // Chanson
  var ch = C.chanson || {};
  var audio = $("audio"), lecture = $("lecture"), vinyle = $("vinyle");
  texte("chanson-titre", ch.titre);
  texte("chanson-artiste", ch.artiste);
  if (ch.fichier) { audio.src = ch.fichier; lecture.hidden = false; }
  if (ch.lien) { var lien = $("chanson-lien"); lien.href = ch.lien; lien.hidden = false; }
  if (!ch.fichier && !ch.lien && !ch.titre) lecture.closest(".bloc").hidden = true;

  function majLecteur() {
    var joue = !audio.paused;
    vinyle.classList.toggle("joue", joue);
    lecture.textContent = joue ? "❚❚ Pause" : "▶ Écouter";
  }
  function demarrerMusique() {
    if (!ch.fichier) return;
    var promesse = audio.play();
    if (promesse && promesse.catch) promesse.catch(function () { /* l'utilisateur pourra appuyer sur Écouter */ });
  }
  lecture.addEventListener("click", function () { audio.paused ? audio.play() : audio.pause(); });
  audio.addEventListener("play", majLecteur);
  audio.addEventListener("pause", majLecteur);

  // Lettre
  texte("lettre-pour", C.pour ? C.pour + "," : "");
  var corps = $("lettre-texte");
  (C.lettre || []).forEach(function (para) {
    var pEl = document.createElement("p");
    pEl.textContent = para;
    corps.appendChild(pEl);
  });
  texte("signature", C.signature);
  texte("de", C.de);

  var enveloppe = $("enveloppe");
  enveloppe.addEventListener("click", function () {
    enveloppe.hidden = true;
    enveloppe.setAttribute("aria-expanded", "true");
    $("lettre").hidden = false;
    eclat();
  });

  texte("fin", C.fin);
})();
