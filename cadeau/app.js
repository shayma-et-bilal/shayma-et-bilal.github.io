(function () {
  "use strict";

  var C = window.CADEAU || {};
  var S = window.Sons;
  function $(id) { return document.getElementById(id); }
  function texte(id, valeur) { var el = $(id); if (el) el.textContent = valeur || ""; }
  function vibrer(ms) { if (navigator.vibrate) navigator.vibrate(ms); }

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

  /* ---------- Bouton son ---------- */
  var boutonSon = $("son");
  function majSon() {
    var on = S.estActif();
    boutonSon.textContent = on ? "🔊" : "🔇";
    boutonSon.setAttribute("aria-pressed", String(on));
    boutonSon.setAttribute("aria-label", on ? "Couper le son" : "Remettre le son");
  }
  boutonSon.addEventListener("click", function () { S.basculer(); majSon(); S.touche(); });
  majSon();

  /* ---------- Passage d'un écran à l'autre ---------- */
  function allerA(id) {
    var actuel = document.querySelector(".ecran.actif");
    var suivant = $(id);
    S.page();
    if (actuel) actuel.classList.add("sort");
    setTimeout(function () {
      if (actuel) { actuel.hidden = true; actuel.classList.remove("actif", "sort", "entre"); }
      suivant.hidden = false;
      suivant.classList.add("actif", "entre");
      window.scrollTo(0, 0);
      var titre = suivant.querySelector("h2");
      if (titre) titre.focus({ preventScroll: true });
      if (id === "e-cadeau") preparerCadeau();
    }, actuel ? 420 : 0);
  }
  document.querySelectorAll(".suivant").forEach(function (b) {
    b.addEventListener("click", function () { allerA(b.dataset.vers); });
  });

  function eclat(x, y, nombre, portee) {
    for (var n = 0; n < nombre; n++) {
      var s = document.createElement("span");
      s.className = "eclat";
      s.textContent = Math.random() < .25 ? "✦" : "❤";
      if (s.textContent === "✦") s.style.color = "#f4c34f";
      var a = Math.random() * Math.PI * 2, d = portee * (0.4 + Math.random() * 0.6);
      s.style.left = x + "px";
      s.style.top = y + "px";
      s.style.fontSize = 12 + Math.random() * 16 + "px";
      s.style.setProperty("--x", Math.cos(a) * d + "px");
      s.style.setProperty("--y", Math.sin(a) * d + "px");
      document.body.appendChild(s);
      setTimeout(s.remove.bind(s), 1200);
    }
  }
  function centreDe(el) {
    var r = el.getBoundingClientRect();
    return { x: r.left + r.width / 2, y: r.top + r.height / 2 };
  }

  /* ---------- 1. Le code ---------- */
  var CODE = String(C.code || "").replace(/\D/g, "");
  var LONGUEUR = Math.min(Math.max(CODE.length, 4), 6);
  var saisie = "", bloque = false;

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
    if (!$("e-code").classList.contains("actif")) return;
    var k = /^[0-9]$/.test(e.key) ? e.key : (e.key === "Backspace" ? "effacer" : null);
    if (!k) return;
    e.preventDefault();
    var b = clavier.querySelector('[data-k="' + k + '"]');
    if (b) { b.classList.add("appui"); setTimeout(function () { b.classList.remove("appui"); }, 120); }
    appuyer(k);
  });

  function appuyer(k) {
    if (bloque) return;
    if (k === "effacer") { if (saisie) S.effacer(); saisie = saisie.slice(0, -1); afficherPoints(); return; }
    if (saisie.length >= LONGUEUR) return;
    S.touche();
    vibrer(12);
    saisie += k;
    texte("message", "");
    afficherPoints();
    if (saisie.length === LONGUEUR) verifier();
  }

  function verifier() {
    bloque = true;
    if (saisie === CODE) {
      texte("message", "C'est ouvert ❤");
      precharger3D();
      setTimeout(S.ouvert, 120);
      vibrer([30, 40, 60]);
      $("e-code").classList.add("ouvert");
      eclat(window.innerWidth / 2, window.innerHeight * 0.25, 26, 260);
      setTimeout(function () { allerA("e-photos"); }, 700);
    } else {
      S.erreur();
      vibrer(150);
      points.classList.add("secoue");
      texte("message", "Ce n'est pas le bon code, réessaie 💔");
      setTimeout(function () {
        points.classList.remove("secoue");
        saisie = "";
        afficherPoints();
        bloque = false;
      }, 650);
    }
  }

  /* ---------- 2. Les photos ---------- */
  texte("photos-pour", C.pour ? "Pour " + C.pour : "");
  texte("t-photos", C.photosTitre || "Nos souvenirs");
  var galerie = $("galerie"), reperes = $("reperes");
  (C.photos || []).forEach(function (ph, idx) {
    var fig = document.createElement("figure");
    fig.className = "polaroid";
    var img = document.createElement("img");
    img.src = ph.src;
    img.alt = ph.legende || "Photo " + (idx + 1);
    img.loading = idx < 2 ? "eager" : "lazy";
    fig.appendChild(img);
    if (ph.legende) {
      var cap = document.createElement("figcaption");
      cap.textContent = ph.legende;
      fig.appendChild(cap);
    }
    galerie.appendChild(fig);
    reperes.appendChild(document.createElement("i"));
  });
  var dernierRepere = -1;
  function majReperes() {
    var cartes = galerie.children;
    if (!cartes.length) return;
    var milieu = galerie.scrollLeft + galerie.clientWidth / 2, actif = 0, best = Infinity;
    for (var j = 0; j < cartes.length; j++) {
      var c = cartes[j], dist = Math.abs(c.offsetLeft + c.offsetWidth / 2 - milieu);
      if (dist < best) { best = dist; actif = j; }
    }
    if (actif !== dernierRepere && dernierRepere !== -1) S.touche();
    dernierRepere = actif;
    for (var r = 0; r < reperes.children.length; r++) reperes.children[r].classList.toggle("actif", r === actif);
  }
  galerie.addEventListener("scroll", majReperes, { passive: true });
  majReperes();

  /* ---------- 3. La lettre ---------- */
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
    var c = centreDe(enveloppe);
    S.papier();
    vibrer(20);
    enveloppe.hidden = true;
    enveloppe.setAttribute("aria-expanded", "true");
    $("lettre").hidden = false;
    $("apres-lettre").hidden = false;
    eclat(c.x, c.y, 18, 160);
  });

  /* ---------- Scène 3D (chargée en arrière-plan ; sinon, version 2D) ---------- */
  var scene3d = null, chargement3d = null;
  var reduit = !!(window.matchMedia && matchMedia("(prefers-reduced-motion: reduce)").matches);
  function precharger3D() {
    if (!chargement3d) chargement3d = import("./dist/cadeau3d.js").catch(function () { return null; });
    return chargement3d;
  }
  function preparerCadeau() {
    var delai = new Promise(function (r) { setTimeout(function () { r(null); }, 4000); });
    Promise.race([precharger3D(), delai]).then(function (mod) {
      if (!mod || scene3d || faits > 0 || !mod.webglOK()) return;
      try {
        scene3d = mod.creerScene3D($("scene3d"), { reduit: reduit });
        $("e-cadeau").classList.add("mode-3d");
        requestAnimationFrame(function () { $("scene3d").classList.add("pret"); });
      } catch (e) { scene3d = null; }
    });
  }

  /* ---------- 4. Le cadeau ---------- */
  var APPUIS = Math.max(1, parseInt(C.appuis, 10) || 5);
  var faits = 0, ouvert = false;
  var boite = $("boite"), couvercle = $("couvercle"), jauge = $("jauge"), consigne = $("consigne");
  var relances = ["Encore !", "Plus fort…", "Ça bouge…", "Continue…"];
  texte("t-cadeau", C.cadeauTitre || "Une dernière surprise…");

  boite.addEventListener("click", function () {
    if (ouvert) return;
    faits++;
    var reste = APPUIS - faits;
    S.appui(faits);
    vibrer(25 + faits * 12);
    jauge.style.width = Math.round((faits / APPUIS) * 100) + "%";
    if (scene3d) {
      scene3d.appuyer(faits, APPUIS);
      if (reste <= 0) return ouvrirCadeau();
      consigne.textContent = reste === 1 ? "Encore une fois !" : relances[(faits - 1) % relances.length];
      return;
    }
    boite.style.setProperty("--force", String(1 + faits * 0.45));
    boite.classList.remove("tape");
    void boite.getBoundingClientRect(); // relance l'animation
    boite.classList.add("tape");
    var cote = faits % 2 ? -1 : 1;
    couvercle.style.transform = "translateY(" + (-faits * 5) + "px) rotate(" + (cote * faits * 1.6) + "deg)";
    jauge.style.width = Math.round((faits / APPUIS) * 100) + "%";
    var c = centreDe(boite);
    eclat(c.x, c.y - 40, 4 + faits * 2, 90 + faits * 25);

    if (reste <= 0) return ouvrirCadeau();
    consigne.textContent = reste === 1 ? "Encore une fois !" : relances[(faits - 1) % relances.length];
  });

  function ouvrirCadeau() {
    ouvert = true;
    consigne.textContent = "";
    S.magie();
    vibrer([40, 50, 80]);
    if (scene3d) {
      $("avant").classList.add("efface");
      scene3d.ouvrir({ onBague: S.bague }).then(function () {
        $("avant").hidden = true;
        $("demande").hidden = false;
        $("question").focus({ preventScroll: true });
      });
      return;
    }
    boite.classList.remove("tape");
    boite.classList.add("ouverte");
    var c = centreDe(boite);
    eclat(c.x, c.y - 60, 40, 320);
    setTimeout(function () { boite.classList.add("disparait"); }, 50);
    setTimeout(function () {
      $("avant").hidden = true;
      $("demande").hidden = false;
      window.scrollTo(0, 0);
      S.bague();
      $("question").focus({ preventScroll: true });
    }, 1250);
  }

  /* ---------- 5. La demande ---------- */
  texte("demande-pour", C.pour || "");
  texte("question", C.question || "Veux-tu m'épouser ?");
  var reponses = $("reponses");
  (C.boutons && C.boutons.length ? C.boutons : ["Oui 💍"]).forEach(function (libelle) {
    var b = document.createElement("button");
    b.type = "button";
    b.className = "btn";
    b.textContent = libelle;
    b.addEventListener("click", direOui);
    reponses.appendChild(b);
  });
  texte("apres-oui-texte", C.apresOui);
  var numero = String(C.whatsapp || "").replace(/\D/g, "");
  if (numero) {
    var wa = $("whatsapp");
    wa.href = "https://wa.me/" + numero + "?text=" + encodeURIComponent(C.messageWhatsapp || "OUI 💍");
    wa.hidden = false;
  }

  function direOui() {
    S.oui();
    vibrer([60, 60, 60, 60, 200]);
    if (scene3d) scene3d.celebrer();
    var b = centreDe($("question"));
    reponses.hidden = true;
    $("question").hidden = true;
    $("demande-pour").hidden = true;
    $("apres-oui").hidden = false;
    eclat(b.x, b.y, 50, 340);
    confettis(160);
    setTimeout(function () { confettis(90); eclat(window.innerWidth / 2, window.innerHeight * 0.4, 30, 300); }, 1400);
  }

  function confettis(nombre) {
    var couleurs = ["#ff5c8a", "#f4c34f", "#ffb3c7", "#ffffff", "#c2185b", "#ffe7a3"];
    for (var n = 0; n < nombre; n++) {
      var f = document.createElement("i");
      f.className = "confetti";
      f.style.left = Math.random() * 100 + "vw";
      f.style.background = couleurs[n % couleurs.length];
      f.style.setProperty("--dx", (Math.random() * 160 - 80) + "px");
      f.style.setProperty("--r", (Math.random() * 900 - 450) + "deg");
      f.style.animationDuration = 2.4 + Math.random() * 2.2 + "s";
      f.style.animationDelay = Math.random() * 0.6 + "s";
      if (Math.random() < .4) f.style.borderRadius = "50%";
      document.body.appendChild(f);
      setTimeout(f.remove.bind(f), 5500);
    }
  }
})();
