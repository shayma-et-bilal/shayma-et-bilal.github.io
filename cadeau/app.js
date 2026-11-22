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

  /* ---------- 0. Les mots en forme de cœur ---------- */
  var INTRO = C.intro || {};
  var PHRASES = (INTRO.mots || []).filter(Boolean);
  var boiteCoeur = $("coeur-mots"), zoneMots = $("mots"), centre = $("intro-centre");
  var introFinie = false, minuteurs = [], phrasesVues = {};
  texte("intro-centre", INTRO.centre || "ma paix");
  texte("intro-suivant", (INTRO.bouton || "Continuer") + " ❤");
  texte("intro-texte", (INTRO.centre || "ma paix") + " : " + PHRASES.join(", "));

  // Contour du cœur (courbe classique), en coordonnées de la boîte
  function contourCoeur(L, H) {
    var brut = [], minX = 1e9, maxX = -1e9, minY = 1e9, maxY = -1e9;
    for (var i = 0; i < 360; i++) {
      var t = (i / 360) * Math.PI * 2;
      var x = 16 * Math.pow(Math.sin(t), 3);
      var y = -(13 * Math.cos(t) - 5 * Math.cos(2 * t) - 2 * Math.cos(3 * t) - Math.cos(4 * t));
      brut.push([x, y]);
      minX = Math.min(minX, x); maxX = Math.max(maxX, x); minY = Math.min(minY, y); maxY = Math.max(maxY, y);
    }
    return brut.map(function (p) {
      return [(p[0] - minX) / (maxX - minX) * L, (p[1] - minY) / (maxY - minY) * H];
    });
  }
  // Segments horizontaux de la ligne y qui sont à l'intérieur du cœur
  function segments(poly, y) {
    var xs = [];
    for (var i = 0; i < poly.length; i++) {
      var a = poly[i], b = poly[(i + 1) % poly.length];
      if ((a[1] <= y && b[1] > y) || (b[1] <= y && a[1] > y)) xs.push(a[0] + (y - a[1]) / (b[1] - a[1]) * (b[0] - a[0]));
    }
    xs.sort(function (p, q) { return p - q; });
    var res = [];
    for (var k = 0; k + 1 < xs.length; k += 2) res.push([xs[k], xs[k + 1]]);
    return res;
  }

  function disposerCoeur() {
    var L = Math.min(window.innerWidth - 16, 460);
    var H = Math.round(L * 0.9);
    boiteCoeur.style.width = L + "px";
    boiteCoeur.style.height = H + "px";
    var poly = contourCoeur(L, H);

    // Tracé SVG du contour
    var svg = $("contour");
    svg.setAttribute("viewBox", "0 0 " + L + " " + H);
    var trace = $("contour-trace");
    trace.setAttribute("d", "M" + poly.map(function (p) { return p[0].toFixed(1) + " " + p[1].toFixed(1); }).join(" L") + " Z");
    var longueur = trace.getTotalLength ? trace.getTotalLength() : 2000;
    trace.style.strokeDasharray = longueur;
    trace.style.strokeDashoffset = introFinie ? 0 : longueur;

    // Le mot du centre, placé au centre visuel du cœur
    var tailleCentre = Math.round(L * 0.135);
    centre.style.fontSize = tailleCentre + "px";
    var cy = H * 0.43;
    centre.style.top = cy + "px";
    centre.style.letterSpacing = "0.02em"; // mesure avec l'espacement final
    var largeurCentre = centre.offsetWidth || tailleCentre * 3.2;
    centre.style.letterSpacing = "";
    var trou = { x1: L / 2 - largeurCentre / 2 - 10, x2: L / 2 + largeurCentre / 2 + 10, y1: cy - tailleCentre * 0.62, y2: cy + tailleCentre * 0.62 };

    // Les mots à placer, phrase par phrase, séparés par un petit cœur
    var jetons = [];
    PHRASES.forEach(function (ph, i) {
      ph.split(/\s+/).forEach(function (m) { jetons.push({ t: m, p: i }); });
      if (i < PHRASES.length - 1) jetons.push({ t: "♥", p: i, sep: true });
    });
    var ctx = document.createElement("canvas").getContext("2d");
    function mesurer(f) {
      ctx.font = "700 " + f + "px Nunito, system-ui, sans-serif";
      jetons.forEach(function (j) { j.w = ctx.measureText(j.t).width; });
      return ctx.measureText(" ").width;
    }

    // Essaie une taille de texte : renvoie les lignes si tout rentre, sinon null
    function essayer(f) {
      var espace = mesurer(f) * 1.1, pas = f * 1.28, lignes = [], k = 0;
      for (var y = pas * 0.9; y < H - pas * 0.3 && k < jetons.length; y += pas) {
        var segs = [];
        segments(poly, y - f * 0.32).forEach(function (s1) {
          segments(poly, y + f * 0.32).forEach(function (s2) {
            var a = Math.max(s1[0], s2[0]) + f * 0.7, b = Math.min(s1[1], s2[1]) - f * 0.7;
            if (b - a > 0) segs.push([a, b]);
          });
        });
        // on laisse la place au mot du centre
        if (y + f * 0.5 > trou.y1 && y - f * 0.5 < trou.y2) {
          var coupes = [];
          segs.forEach(function (s) {
            if (s[0] < trou.x1) coupes.push([s[0], Math.min(s[1], trou.x1)]);
            if (s[1] > trou.x2) coupes.push([Math.max(s[0], trou.x2), s[1]]);
          });
          segs = coupes;
        }
        segs.forEach(function (s) {
          var largeur = s[1] - s[0], pris = [], total = 0;
          while (k < jetons.length) {
            var w = jetons[k].w + (pris.length ? espace : 0);
            if (total + w > largeur) break;
            pris.push(jetons[k]); total += w; k++;
          }
          if (pris.length) lignes.push({ y: y, x1: s[0], x2: s[1], jetons: pris, utilise: total });
        });
      }
      return k >= jetons.length ? { lignes: lignes, espace: espace, f: f } : null;
    }
    var bas = 6, haut = 40, meilleur = null;
    for (var n = 0; n < 18; n++) {
      var milieu = (bas + haut) / 2, r = essayer(milieu);
      if (r) { meilleur = r; bas = milieu; } else haut = milieu;
    }
    if (!meilleur) meilleur = essayer(6);
    if (!meilleur) return;

    // Création des mots, lignes justifiées
    zoneMots.textContent = "";
    var f = meilleur.f;
    meilleur.lignes.forEach(function (li, idx) {
      var reste = li.x2 - li.x1 - li.utilise, nb = li.jetons.length;
      var derniere = idx === meilleur.lignes.length - 1;
      var ajout = (nb > 1 && !derniere && reste / (nb - 1) < f * 0.9) ? reste / (nb - 1) : 0;
      var x = (ajout || nb === 1 || derniere) ? li.x1 + (ajout ? 0 : reste / 2) : li.x1;
      li.jetons.forEach(function (j) {
        var s = document.createElement("span");
        s.className = "mot c" + (j.p % 4) + (j.sep ? " sep" : "") + (/^[A-ZÀ-Ý]/.test(j.t) ? " nom" : "");
        s.textContent = j.t;
        s.dataset.p = j.p;
        s.style.left = x.toFixed(1) + "px";
        s.style.top = (li.y - f * 0.62).toFixed(1) + "px";
        s.style.fontSize = f.toFixed(2) + "px";
        if (introFinie || phrasesVues[j.p]) s.classList.add("vu");
        zoneMots.appendChild(s);
        x += j.w + meilleur.espace + ajout;
      });
    });
  }

  function reveler(p) {
    phrasesVues[p] = true;
    zoneMots.querySelectorAll('[data-p="' + p + '"]').forEach(function (s, i) {
      s.style.transitionDelay = (i * 0.045).toFixed(3) + "s";
      s.classList.add("vu", "eclaire");
      setTimeout(function () { s.classList.remove("eclaire"); }, 900 + i * 45);
    });
  }
  function finirIntro(vite) {
    if (introFinie) return;
    introFinie = true;
    minuteurs.forEach(clearTimeout);
    if (vite) zoneMots.querySelectorAll(".mot").forEach(function (s) { s.style.transitionDelay = "0s"; s.classList.add("vu"); });
    $("contour-trace").style.strokeDashoffset = 0;
    boiteCoeur.classList.add("complet");
    $("intro-toucher").hidden = true;
    setTimeout(function () {
      centre.classList.add("vu");
      var c = centreDe(centre);
      eclat(c.x, c.y, 30, 200);
    }, vite ? 150 : 500);
    setTimeout(function () {
      boiteCoeur.classList.add("bat");
      $("intro-suivant").hidden = false;
    }, vite ? 1100 : 1900);
  }
  function lancerIntro() {
    disposerCoeur();
    if (reduit || !PHRASES.length) return finirIntro(true);
    boiteCoeur.classList.add("trace");
    var t = 1300, pas = 640;
    PHRASES.forEach(function (_, i) {
      minuteurs.push(setTimeout(function () { reveler(i); }, t));
      t += pas;
      pas = Math.max(230, pas * 0.92);
    });
    minuteurs.push(setTimeout(function () { finirIntro(false); }, t + 500));
    minuteurs.push(setTimeout(function () { if (!introFinie) $("intro-toucher").classList.add("visible"); }, 2600));
  }
  $("e-intro").addEventListener("click", function (e) {
    if (!introFinie && !e.target.closest("button")) finirIntro(true);
  });
  var attenteRedim;
  window.addEventListener("resize", function () {
    if (!$("e-intro").classList.contains("actif")) return;
    clearTimeout(attenteRedim);
    attenteRedim = setTimeout(disposerCoeur, 200);
  });

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
  boutonNon.textContent = C.non || "Non";
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
      document.body.appendChild(boutonNon);
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
    var echelleNon = 1 - 0.17 * nbNon;
    boutonNon.style.setProperty("--k", echelleNon.toFixed(3));
    // taille réelle (sans l'échelle) et taille visible une fois rapetissé
    var W0 = boutonNon.offsetWidth, H0 = boutonNon.offsetHeight;
    var w = W0 * echelleNon, h = H0 * echelleNon;
    // place que prendra « Oui » une fois grossi (+ une marge)
    var ro = boutonOui.getBoundingClientRect();
    var ox = ro.left + ro.width / 2, oy = ro.top + ro.height / 2;
    var ow = boutonOui.offsetWidth * echelleOui / 2 + 30, oh = boutonOui.offsetHeight * echelleOui / 2 + 40;
    var Wv = window.innerWidth, Hv = window.innerHeight, marge = 16;
    var choix = null, meilleurScore = -1;
    for (var essai = 0; essai < 60; essai++) {
      var x = marge + Math.random() * Math.max(1, Wv - w - 2 * marge);
      var y = 72 + Math.random() * Math.max(1, Hv - h - 72 - marge);
      var surOui = x < ox + ow && x + w > ox - ow && y < oy + oh && y + h > oy - oh;
      if (surOui) continue;
      var score = Math.hypot(x - r.left, y - r.top);
      if (score > meilleurScore) { meilleurScore = score; choix = { x: x, y: y }; }
      if (score > Math.min(Wv, Hv) * 0.45) break;
    }
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
    var b = centreDe($("question"));
    if (boutonNon.parentNode) boutonNon.remove();
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
  /* ---------- Démarrage : on attend les polices pour bien mesurer les mots ---------- */
  var polices = (document.fonts && document.fonts.load)
    ? Promise.all([document.fonts.load("700 16px Nunito"), document.fonts.load("700 40px 'Dancing Script'")])
    : Promise.resolve();
  Promise.race([polices, new Promise(function (r) { setTimeout(r, 1800); })]).then(lancerIntro, lancerIntro);
})();
