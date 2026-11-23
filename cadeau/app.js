(function () {
  "use strict";

  var C = window.CADEAU || {};
  var S = window.Sons;
  function $(id) { return document.getElementById(id); }
  // Typographie française : apostrophe courbe, espaces fines insécables avant ? ! ; et insécable avant :
  function typo(t) {
    return String(t == null ? "" : t)
      .replace(/'/g, "\u2019")
      .replace(/ ([?!;])/g, "\u202F$1")
      .replace(/ :/g, "\u00A0:")
      .replace(/« /g, "«\u00A0").replace(/ »/g, "\u00A0»");
  }
  function texte(id, valeur) { var el = $(id); if (el) el.textContent = typo(valeur); }
  (function typoStatique() {
    var w = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT), n;
    while ((n = w.nextNode())) { var v = typo(n.nodeValue); if (v !== n.nodeValue) n.nodeValue = v; }
  })();
  function vibrer(ms) { if (navigator.vibrate) navigator.vibrate(ms); }

  /* ---------- Cœurs qui flottent ---------- */
  var ciel = document.querySelector(".sky");
  for (var i = 0; i < 9; i++) {
    var h = document.createElement("span");
    h.className = "ico-petale";
    h.style.color = ["#e8c1b8", "#f4ece1", "#c98a8f"][i % 3];
    h.style.left = Math.random() * 100 + "%";
    h.style.width = 7 + Math.random() * 6 + "px";
    h.style.height = 10 + Math.random() * 8 + "px";
    h.style.animationDuration = 14 + Math.random() * 12 + "s";
    h.style.animationDelay = -Math.random() * 18 + "s";
    ciel.appendChild(h);
  }

  /* ---------- Bouton son ---------- */
  var boutonSon = $("son");
  function majSon() {
    var on = S.estActif();
    boutonSon.innerHTML = on
      ? '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 9.5h3.5L12 5.5v13l-4.5-4H4z"/><path d="M15.5 9a4.2 4.2 0 0 1 0 6M18.2 6.5a8 8 0 0 1 0 11"/></svg>'
      : '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 9.5h3.5L12 5.5v13l-4.5-4H4z"/><path d="M16 9.5l5 5M21 9.5l-5 5"/></svg>';
    boutonSon.setAttribute("aria-pressed", String(on));
    boutonSon.setAttribute("aria-label", on ? "Couper le son" : "Remettre le son");
  }
  boutonSon.addEventListener("click", function () { S.basculer(); majSon(); S.touche(); });
  majSon();

  /* ---------- Passage d'un écran à l'autre ---------- */
  function allerA(id) {
    if (document.body.classList.contains("bascule")) return;
    var actuel = document.querySelector(".ecran.actif");
    var suivant = $(id);
    document.body.classList.add("bascule");
    setTimeout(function () { document.body.classList.remove("bascule"); }, (actuel ? 420 : 0) + 450);
    S.page();
    if (actuel) actuel.classList.add("sort");
    setTimeout(function () {
      if (actuel) { actuel.hidden = true; actuel.classList.remove("actif", "sort", "entre"); }
      if (actuel && actuel.id === "e-intro" && jardin) {
        document.body.classList.add("jardin-fond");
        setTimeout(function () { if (jardin && !document.body.classList.contains("jardin-retour")) jardin.figer(); }, 1700);
      }
      suivant.hidden = false;
      suivant.classList.add("actif", "entre");
      suivant.addEventListener("animationend", function finEntree(e) {
        if (e.target !== suivant) return;
        suivant.classList.remove("entre");
        suivant.removeEventListener("animationend", finEntree);
      });
      window.scrollTo(0, 0);
      var titre = suivant.querySelector("h1, h2");
      if (titre) {
        if (!titre.hasAttribute("tabindex")) titre.setAttribute("tabindex", "-1");
        titre.focus({ preventScroll: true });
      }
      if (id === "e-cadeau") preparerCadeau();
    }, actuel ? 420 : 0);
  }
  document.querySelectorAll(".suivant").forEach(function (b) {
    b.addEventListener("click", function () { allerA(b.dataset.vers); });
  });

  function eclat(x, y, nombre, portee) {
    for (var n = 0; n < nombre; n++) {
      var s = document.createElement("span");
      s.className = "eclat " + (Math.random() < .3 ? "ico-etoile" : "ico-petale");
      if (s.className.indexOf("petale") > 0) s.style.color = ["#e8c1b8", "#f4ece1", "#c98a8f"][n % 3];
      var a = Math.random() * Math.PI * 2, d = portee * (0.4 + Math.random() * 0.6);
      s.style.left = x + "px";
      s.style.top = y + "px";
      s.style.width = s.style.height = 10 + Math.random() * 12 + "px";
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

  /* ---------- 0. Le jardin : une fleur pousse pour chaque mot doux ---------- */
  var INTRO = C.intro || {};
  var PHRASES = (INTRO.mots || []).filter(Boolean).map(typo);
  var CENTRE = typo(INTRO.centre || "ma paix");
  var jardin = null, introFinie = false, introLancee = false, sautDemande = false;
  texte("intro-suivant", INTRO.bouton || "Continuer");
  texte("intro-texte", CENTRE + " : " + PHRASES.join(", "));

  function finIntro() {
    if (introFinie) return;
    introFinie = true;
    $("intro-toucher").classList.remove("visible");
    var suivantIntro = $("intro-suivant");
    suivantIntro.classList.remove("cache");
    suivantIntro.removeAttribute("aria-hidden");
    suivantIntro.removeAttribute("tabindex");
  }
  // Si le module du jardin ne se charge pas : les mots simplement, en texte
  function jardinDeSecours() {
    var bloc = document.createElement("div");
    bloc.className = "jardin-secours";
    var centre = document.createElement("p");
    centre.className = "script";
    centre.textContent = CENTRE;
    var liste = document.createElement("p");
    liste.textContent = PHRASES.join(" · ");
    bloc.appendChild(centre);
    bloc.appendChild(liste);
    $("jardin").appendChild(bloc);
    finIntro();
  }
  function lancerIntro() {
    if (introLancee) return;
    introLancee = true;
    import("./dist/jardin.js").then(function (mod) {
      jardin = mod.creerJardin($("jardin"), { phrases: PHRASES, centre: CENTRE, reduit: reduit, onFin: finIntro });
      jardin.lancer();
      if (sautDemande) jardin.toutMontrer();
      setTimeout(function () { if (!introFinie) $("intro-toucher").classList.add("visible"); }, 9000);
    }).catch(jardinDeSecours);
  }
  function passerIntro() {
    if (introFinie) return;
    if (!jardin) { sautDemande = true; return; }
    jardin.toutMontrer();
  }
  $("e-intro").addEventListener("click", function (e) {
    if (!e.target.closest("button")) passerIntro();
  });
  document.addEventListener("keydown", function (e) {
    if (introFinie || !$("e-intro").classList.contains("actif") || (e.key !== "Enter" && e.key !== " ")) return;
    e.preventDefault();
    passerIntro();
  });

  /* ---------- 1. Le code ---------- */
  var CODE = String(C.code || "").replace(/\D/g, "");
  var LONGUEUR = Math.min(Math.max(CODE.length, 4), 6);
  var saisie = "", bloque = false;

  var pourQui = C.pour ? "Pour " + C.pour.charAt(0).toLowerCase() + C.pour.slice(1) : "";
  texte("verrou-pour", pourQui);
  texte("indice", C.indice);

  var points = $("points");
  for (var p = 0; p < LONGUEUR; p++) { var bourgeon = document.createElement("i"); bourgeon.className = "ico-fleur"; points.appendChild(bourgeon); }
  function afficherPoints() {
    var dots = points.children;
    for (var k = 0; k < dots.length; k++) dots[k].classList.toggle("plein", k < saisie.length);
    $("annonce-code").textContent = saisie.length + " chiffre" + (saisie.length > 1 ? "s" : "") + " sur " + LONGUEUR;
  }

  var clavier = $("clavier");
  ["1", "2", "3", "4", "5", "6", "7", "8", "9", "", "0", "⌫"].forEach(function (t) {
    var b = document.createElement("button");
    b.type = "button";
    b.className = "touche";
    if (t === "") { b.className += " vide"; b.tabIndex = -1; b.setAttribute("aria-hidden", "true"); }
    else if (t === "⌫") {
      b.className += " texte"; b.setAttribute("aria-label", "Effacer"); b.dataset.k = "effacer";
      b.innerHTML = '<svg viewBox="0 0 28 28" aria-hidden="true"><path d="M10 6h13a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H10l-7-8z"/><path d="M13.5 10.5l7 7M20.5 10.5l-7 7"/></svg>';
    }
    else { b.textContent = t; b.dataset.k = t; }
    clavier.appendChild(b);
  });
  document.addEventListener("touchstart", function () {}, { passive: true });
  clavier.addEventListener("pointerdown", function (e) {
    var b = e.target.closest(".touche");
    if (!b) return;
    b.classList.add("appui");
    setTimeout(function () { b.classList.remove("appui"); }, 140);
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
      texte("message", "C'est ouvert");
      precharger3D();
      setTimeout(S.ouvert, 120);
      vibrer([30, 40, 60]);
      $("e-code").classList.add("ouvert");
      eclat(window.innerWidth / 2, window.innerHeight * 0.25, 26, 260);
      setTimeout(function () { allerA("e-photos"); }, 1100);
    } else {
      S.erreur();
      vibrer(150);
      points.classList.add("retombe");
      texte("message", "Pas tout à fait… essaie encore");
      setTimeout(function () {
        points.classList.remove("retombe");
        saisie = "";
        afficherPoints();
        bloque = false;
      }, 650);
    }
  }

  /* ---------- 2. Les photos ---------- */
  texte("photos-pour", pourQui);
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
  if ("IntersectionObserver" in window) {
    var obs = new IntersectionObserver(function (entrees) {
      entrees.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add("revele"); obs.unobserve(e.target); }
      });
    }, { root: galerie, threshold: 0.6 });
    Array.prototype.forEach.call(galerie.children, function (fig) { obs.observe(fig); });
  } else {
    Array.prototype.forEach.call(galerie.children, function (fig) { fig.classList.add("revele"); });
  }
  majReperes();

  /* ---------- 3. La lettre ---------- */
  texte("lettre-pour", C.pour ? C.pour + "," : "");
  var corps = $("lettre-texte");
  (C.lettre || []).forEach(function (para) {
    var pEl = document.createElement("p");
    pEl.textContent = typo(para);
    corps.appendChild(pEl);
  });
  texte("signature", C.signature);
  texte("de", C.de);

  var enveloppe = $("enveloppe"), enveloppeOuverte = false;
  enveloppe.addEventListener("click", function () {
    if (enveloppeOuverte) return;
    enveloppeOuverte = true;
    var vite = reduit ? 0.15 : 1;
    // 1. le sceau saute
    var sceau = enveloppe.querySelector(".sceau").getBoundingClientRect();
    eclat(sceau.left + sceau.width / 2, sceau.top + sceau.height / 2, 14, 110);
    S.touche();
    vibrer(20);
    $("ouvrir-lettre").style.opacity = "0";
    enveloppe.classList.add("ouverte");
    enveloppe.setAttribute("aria-expanded", "true");
    // 2. le rabat bascule, la lettre sort de l'enveloppe
    setTimeout(function () { S.papier(); enveloppe.classList.add("sortie"); }, 750 * vite);
    // 3. l'enveloppe s'efface, la lettre se déplie, les paragraphes arrivent un par un
    setTimeout(function () { enveloppe.classList.add("partie"); $("e-lettre").classList.add("lue"); }, 1500 * vite);
    setTimeout(function () {
      enveloppe.hidden = true;
      $("ouvrir-lettre").hidden = true;
      var lettre = $("lettre");
      var lignes = lettre.querySelectorAll("p");
      lignes.forEach(function (pEl, i) { pEl.style.animationDelay = (0.55 + i * 0.32) * vite + "s"; });
      lettre.hidden = false;
      var bouton = $("apres-lettre");
      bouton.style.animationDelay = (2.5 + lignes.length * 0.32) * vite + "s";
      bouton.hidden = false;
      lettre.setAttribute("tabindex", "-1");
      lettre.focus({ preventScroll: true });
      lettre.scrollIntoView({ behavior: reduit ? "auto" : "smooth", block: "start" });
    }, 1900 * vite);
  });

  /* ---------- Scène 3D (chargée en arrière-plan ; sinon, version 2D) ---------- */
  var scene3d = null, chargement3d = null;
  var reduit = !!(window.matchMedia && matchMedia("(prefers-reduced-motion: reduce)").matches);
  var webgl2 = (function () {
    try { return !!document.createElement("canvas").getContext("webgl2"); } catch (e) { return false; }
  })();
  function precharger3D() {
    if (!webgl2) return Promise.resolve(null);
    if (!chargement3d) chargement3d = import("./dist/cadeau3d.js").catch(function () { return null; });
    return chargement3d;
  }
  function preparerCadeau() {
    var section = $("e-cadeau");
    section.classList.add("attente");
    var delai = new Promise(function (r) { setTimeout(function () { r(null); }, 4000); });
    Promise.race([precharger3D(), delai]).then(function (mod) {
      if (mod && !scene3d && faits === 0 && mod.webglOK()) {
        try {
          scene3d = mod.creerScene3D($("scene3d"), { reduit: reduit });
          section.classList.add("mode-3d");
          document.body.classList.add("scene-3d");
          requestAnimationFrame(function () { $("scene3d").classList.add("pret"); });
        } catch (e) { scene3d = null; }
      }
      section.classList.remove("attente");
    });
  }

  /* ---------- 4. Le cadeau ---------- */
  var APPUIS = Math.max(1, parseInt(C.appuis, 10) || 5);
  var faits = 0, ouvert = false;
  var boite = $("boite"), couvercle = $("couvercle"), jauge = $("jauge"), consigne = $("consigne");
  for (var ic = 0; ic < APPUIS; ic++) { var cr = document.createElement("i"); cr.className = "ico-fleur"; jauge.appendChild(cr); }
  function remplirJauge(n) {
    var crans = jauge.children;
    if (!crans[n - 1]) return;
    crans[n - 1].classList.add("plein");
    if (n === APPUIS) crans[n - 1].classList.add("dernier");
  }
  var relances = ["Encore…", "Encore un peu…", "Presque…", "Doucement…"].map(typo);
  texte("t-cadeau", C.cadeauTitre || "Une dernière surprise…");

  boite.addEventListener("click", function () {
    if (ouvert) return;
    faits++;
    var reste = APPUIS - faits;
    S.appui(faits);
    vibrer(25 + faits * 12);
    remplirJauge(faits);
    if (scene3d) {
      scene3d.appuyer(faits, APPUIS);
      if (reste <= 0) return ouvrirCadeau();
      consigne.textContent = reste === 1 ? "Une dernière fois…" : relances[(faits - 1) % relances.length];
      return;
    }
    boite.style.setProperty("--force", String(1 + faits * 0.45));
    boite.classList.remove("tape");
    void boite.getBoundingClientRect(); // relance l'animation
    boite.classList.add("tape");
    var cote = faits % 2 ? -1 : 1;
    couvercle.style.transform = "translateY(" + (-faits * 5) + "px) rotate(" + (cote * faits * 1.6) + "deg)";
    remplirJauge(faits);
    var c = centreDe(boite);
    eclat(c.x, c.y - 40, 4 + faits * 2, 90 + faits * 25);

    if (reste <= 0) return ouvrirCadeau();
    consigne.textContent = reste === 1 ? "Une dernière fois…" : relances[(faits - 1) % relances.length];
  });

  function ouvrirCadeau() {
    ouvert = true;
    consigne.textContent = "";
    S.magie();
    vibrer([40, 50, 80]);
    if (scene3d) {
      $("avant").classList.add("efface");
      scene3d.ouvrir({ onBague: S.bague }).then(montrerDemande);
      return;
    }
    boite.classList.remove("tape");
    boite.classList.add("ouverte");
    var c = centreDe(boite);
    eclat(c.x, c.y - 60, 40, 320);
    setTimeout(function () { boite.classList.add("disparait"); }, 50);
    setTimeout(function () {
      window.scrollTo(0, 0);
      S.bague();
      montrerDemande();
    }, 1250);
  }
  function montrerDemande() {
    $("avant").hidden = true;
    reponses.style.pointerEvents = "none";
    var activer = function () { reponses.style.pointerEvents = ""; };
    reponses.addEventListener("animationend", activer, { once: true });
    setTimeout(activer, 4000);
    $("demande").hidden = false;
    $("question").focus({ preventScroll: true });
  }

  /* ---------- 5. La demande ---------- */
  texte("demande-pour", C.pour || "");
  texte("question", C.question || "Veux-tu m'épouser ?");
  var reponses = $("reponses");
  var MAX_NON = Math.max(1, parseInt(C.essaisNon, 10) || 5);
  var nbNon = 0;
  var boutonOui = document.createElement("button");
  boutonOui.type = "button";
  boutonOui.className = "btn btn-oui";
  boutonOui.textContent = C.oui || "Oui 💍";
  boutonOui.addEventListener("click", direOui);
  var boutonNon = document.createElement("button");
  boutonNon.type = "button";
  boutonNon.className = "btn btn-non";
  var TEXTES_NON = [].concat(C.non || "Non").filter(Boolean);
  if (!TEXTES_NON.length) TEXTES_NON = ["Non"];
  TEXTES_NON = TEXTES_NON.map(typo);
  boutonNon.textContent = TEXTES_NON[0];
  boutonNon.addEventListener("click", direNon);
  reponses.appendChild(boutonOui);
  reponses.appendChild(boutonNon);

  // « Non » : le bouton fuit ailleurs sur l'écran et rapetisse, « Oui » grossit
  function direNon() {
    nbNon++;
    var k = nbNon / MAX_NON;
    S.non(nbNon);
    vibrer(30);
    var echelleOui = 1 + 1.1 * k;                 // jusqu'à environ 2× plus grand
    boutonOui.style.setProperty("--k", echelleOui.toFixed(3));
    boutonOui.classList.add("grandit");
    reponses.style.padding = ((echelleOui - 1) * 26).toFixed(0) + "px 0";

    var r = boutonNon.getBoundingClientRect();
    if (!boutonNon.classList.contains("fuit")) {
      // on le sort de la mise en page pour pouvoir le placer n'importe où
      var avaitFocus = document.activeElement === boutonNon;
      document.body.appendChild(boutonNon);
      if (avaitFocus) boutonNon.focus({ preventScroll: true });
      boutonNon.classList.add("fuit");
      boutonNon.style.left = r.left + "px";
      boutonNon.style.top = r.top + "px";
      void boutonNon.offsetWidth;
    }
    if (nbNon >= MAX_NON) {
      var c = centreDe(boutonNon);
      boutonNon.classList.add("disparait");
      eclat(c.x, c.y, 14, 90);
      setTimeout(function () { boutonNon.remove(); }, 450);
      boutonOui.focus({ preventScroll: true });
      return;
    }
    boutonNon.textContent = TEXTES_NON[Math.min(nbNon, TEXTES_NON.length - 1)];
    var echelleNon = 1 - 0.12 * nbNon;
    boutonNon.style.setProperty("--k", echelleNon.toFixed(3));
    // taille réelle (sans l'échelle) et taille visible une fois rapetissé
    var W0 = boutonNon.offsetWidth, H0 = boutonNon.offsetHeight;
    var w = W0 * echelleNon, h = H0 * echelleNon;
    // place que prendra « Oui » une fois grossi (+ une marge)
    var ro = boutonOui.getBoundingClientRect();
    var ox = ro.left + ro.width / 2, oy = ro.top + ro.height / 2;
    var ow = boutonOui.offsetWidth * echelleOui / 2 + 30, oh = boutonOui.offsetHeight * echelleOui / 2 + 40;
    // zones interdites : « Oui » grossi, la question et « Mon amour » au-dessus (qui remontent un peu quand « Oui » grossit)
    var interdits = [{ x1: ox - ow, x2: ox + ow, y1: oy - oh, y2: oy + oh }];
    ["question", "demande-pour"].forEach(function (id) {
      var el = $(id);
      if (!el || el.hidden) return;
      var q = el.getBoundingClientRect();
      if (q.width) interdits.push({ x1: q.left - 10, x2: q.right + 10, y1: q.top - 50, y2: q.bottom + 10 });
    });
    var Wv = window.innerWidth, Hv = window.innerHeight, marge = 16;
    // priorités : éviter toute la bague ; sinon au moins le diamant (le haut de la bague) ; sinon n'importe où
    var zones = [interdits];
    if (scene3d && scene3d.zoneBague) {
      var zb = scene3d.zoneBague(), lb = zb.x2 - zb.x1;
      var diamant = { x1: zb.x1 + lb * 0.18, x2: zb.x2 - lb * 0.18, y1: zb.y1, y2: zb.y1 + (zb.y2 - zb.y1) * 0.4 };
      zones = [interdits.concat([zb]), interdits.concat([diamant]), interdits];
    }
    var choix = null, meilleurScore = -1;
    // d'abord en évitant aussi la bague ; si c'est impossible, la bague est autorisée
    for (var z = 0; z < zones.length && !choix; z++) {
      for (var essai = 0; essai < 80; essai++) {
        var x = marge + Math.random() * Math.max(1, Wv - w - 2 * marge);
        var y = 72 + Math.random() * Math.max(1, Hv - h - 72 - marge);
        var gene = zones[z].some(function (q) { return x < q.x2 && x + w > q.x1 && y < q.y2 && y + h > q.y1; });
        if (gene) continue;
        var score = Math.hypot(x - r.left, y - r.top);
        if (score > meilleurScore) { meilleurScore = score; choix = { x: x, y: y }; }
        if (score > Math.min(Wv, Hv) * 0.45) break;
      }
    }
    boutonNon.style.rotate = (Math.random() < 0.5 ? -1 : 1) * (3 + Math.random() * 4) + "deg";
    if (choix) {
      // l'échelle se fait depuis le centre : on décale pour que le coin visible tombe en (x, y)
      boutonNon.style.left = (choix.x - (W0 - w) / 2).toFixed(0) + "px";
      boutonNon.style.top = (choix.y - (H0 - h) / 2).toFixed(0) + "px";
    }
  }
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
    // point de départ : la bague (3D) ou la question (2D)
    var source;
    if (scene3d && scene3d.zoneBague) {
      var zb = scene3d.zoneBague(0);
      source = { x: (zb.x1 + zb.x2) / 2, y: (zb.y1 + zb.y2) / 2 };
    } else source = centreDe($("question"));
    if (boutonNon.parentNode) boutonNon.remove();
    reponses.hidden = true;
    $("question").hidden = true;
    $("demande-pour").hidden = true;
    $("apres-oui").hidden = false;
    // 2e temps : le message laisse place au verset, puis à la signature
    var V = C.verset || {};
    var signer = function () {
      if (!C.finNoms) return;
      texte("fin-noms", C.finNoms);
      texte("fin-date", C.finDate);
      $("fin-date").hidden = !C.finDate;
      $("signature-fin").classList.toggle("sans-date", !C.finDate);
      $("signature-fin").hidden = false;
    };
    if (V.arabe) {
      $("verset-ar").textContent = V.arabe;
      texte("verset-fr", V.traduction);
      texte("verset-ref", String(V.reference || "").replace(" · ", "\n"));
      setTimeout(function () {
        var moment = $("moment-oui");
        moment.classList.add("part");
        setTimeout(function () {
          moment.hidden = true;
          $("signature-fin").classList.add("apres-verset");
          $("verset").hidden = false;
          S.bague();
          signer();
        }, reduit ? 50 : 700);
      }, reduit ? 1500 : 6500);
    } else signer();
    document.body.classList.add("fin", "jardin-retour");
    if (jardin) { jardin.reprendre(); setTimeout(function () { if (jardin) jardin.figer(); }, 12000); }
    if (!scene3d) eclat(source.x, source.y, 40, 300);
    if (!scene3d) confettis(60, source);
  }

  // Confettis : jaillissent du point de départ, montent, puis retombent (sous le texte, au-dessus de la 3D)
  function confettis(nombre, depuis) {
    var couleurs = ["#f4ece1", "#e8c1b8", "#d6b47a", "#c98a8f"];
    var conteneur = $("e-cadeau");
    for (var n = 0; n < nombre; n++) {
      var f = document.createElement("i");
      f.className = "confetti";
      f.style.left = depuis.x + (Math.random() * 40 - 20) + "px";
      f.style.top = depuis.y + (Math.random() * 30 - 15) + "px";
      f.style.background = couleurs[n % couleurs.length];
      f.style.setProperty("--dx", (Math.random() * 300 - 150) + "px");
      f.style.setProperty("--up", -(120 + Math.random() * 160) + "px");
      f.style.setProperty("--r", (Math.random() * 900 - 450) + "deg");
      f.style.setProperty("--d", 2.8 + Math.random() * 1.8 + "s");
      f.style.animationDelay = Math.random() * 0.25 + "s";
      if (Math.random() < .4) { f.style.width = "8px"; f.style.height = "12px"; }
      conteneur.appendChild(f);
      setTimeout(f.remove.bind(f), 5500);
    }
  }
  document.body.classList.add("debut");
  setTimeout(function () { document.body.classList.remove("debut"); }, 6000);
  /* ---------- Démarrage : polices chargées sans bloquer la page, puis on mesure les mots ---------- */
  var feuille = document.createElement("link");
  feuille.rel = "stylesheet";
  feuille.href = "https://fonts.googleapis.com/css2?family=Amiri+Quran&family=Cormorant+Garamond:ital,wght@0,500;0,600;1,500;1,600&family=Great+Vibes&family=Nunito:wght@400;600;700;800&display=swap";
  var feuillePrete = new Promise(function (r) { feuille.onload = r; feuille.onerror = r; });
  document.head.appendChild(feuille);
  var polices = feuillePrete.then(function () {
    return (document.fonts && document.fonts.load)
      ? Promise.all([document.fonts.load("600 16px Nunito"), document.fonts.load("40px 'Great Vibes'"), document.fonts.load("italic 500 16px 'Cormorant Garamond'")])
      : null;
  });
  Promise.race([polices, new Promise(function (r) { setTimeout(r, 2500); })]).then(lancerIntro, lancerIntro);
})();
