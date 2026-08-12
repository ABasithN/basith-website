/* ============================================================
   POSTER THERAPY — script.js
   Private thought → cultural artifact. Everything client-side.
   ============================================================ */

(function () {
  "use strict";

  /* ---------- small utilities ---------- */

  function esc(str) {
    return String(str)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  function pick(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
  }

  function randomEdition() {
    return String(Math.floor(10000 + Math.random() * 89999));
  }

  function currentYear() {
    return String(new Date().getFullYear());
  }

  function todayLong() {
    return new Date().toLocaleDateString("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
    });
  }

  /* ---------- emotion detection (lightweight keyword mapping, no AI) ---------- */

  var EMOTION_KEYWORDS = {
    anger: ["angry", "hate", "furious", "annoyed", "pissed"],
    sadness: ["miss", "alone", "lost", "empty"],
    regret: ["wish", "should", "could", "if only"],
    burnout: ["tired", "exhausted", "drained", "burnout"],
  };

  var EMOTION_TEMPLATES = {
    anger: ["protest", "public-notice", "tabloid"],
    sadness: ["museum-placard", "poetry", "a24"],
    regret: ["court-exhibit", "obituary", "dictionary"],
    burnout: ["annual-report", "indie-film", "museum-wall"],
  };

  function detectEmotions(text) {
    var lower = " " + text.toLowerCase() + " ";
    var matched = [];
    Object.keys(EMOTION_KEYWORDS).forEach(function (emotion) {
      var hit = EMOTION_KEYWORDS[emotion].some(function (kw) {
        return lower.indexOf(kw) !== -1;
      });
      if (hit) matched.push(emotion);
    });
    return matched;
  }

  function chooseTemplateId(text) {
    var matched = detectEmotions(text);
    if (matched.length) {
      var emotion = pick(matched);
      return pick(EMOTION_TEMPLATES[emotion]);
    }
    return pick(TEMPLATES.map(function (t) { return t.id; }));
  }

  /* ---------- template registry ----------
     Each template returns the inner HTML for .poster-content.
     data-fit-max / data-fit-min on the ".js-fit" element controls
     the autofit range (px, at true 1080x1920 canvas size). */

  var TEMPLATES = [
    {
      id: "a24",
      name: "A24 Film Poster",
      build: function (text) {
        return (
          '<p class="a24-eyebrow">A POSTER THERAPY FILM</p>' +
          '<h2 class="a24-title js-fit" data-fit-max="118" data-fit-min="34">' + esc(text) + "</h2>" +
          '<p class="a24-tagline">Not distributed by A24. Lived by you.</p>'
        );
      },
    },
    {
      id: "museum-placard",
      name: "Museum Placard",
      build: function (text) {
        return (
          '<p class="placard-catalog">CATALOGUE NO. ' + randomEdition() + '</p>' +
          '<h2 class="placard-title js-fit" data-fit-max="64" data-fit-min="24">' + esc(text) + "</h2>" +
          '<p class="placard-medium">Mixed feeling on paper</p>' +
          '<p class="placard-date">' + currentYear() + ", private collection</p>"
        );
      },
    },
    {
      id: "vogue",
      name: "Vogue Cover",
      build: function (text) {
        return (
          '<p class="vogue-masthead">VENT</p>' +
          '<p class="vogue-coverline-top">THE HONESTY ISSUE</p>' +
          '<h2 class="vogue-headline js-fit" data-fit-max="76" data-fit-min="30">' + esc(text) + "</h2>" +
          '<p class="vogue-coverline-bottom">+ how to survive knowing it</p>'
        );
      },
    },
    {
      id: "indie-film",
      name: "Indie Film",
      build: function (text) {
        return (
          '<h2 class="indie-title js-fit" data-fit-max="92" data-fit-min="30">' + esc(text) + "</h2>" +
          '<p class="indie-credit">A FILM ABOUT SOMEONE WHO KEPT GOING</p>'
        );
      },
    },
    {
      id: "poetry",
      name: "Poetry Collection",
      build: function (text) {
        return (
          '<p class="poetry-numeral">XIV.</p>' +
          '<p class="poetry-text js-fit" data-fit-max="58" data-fit-min="26">' + esc(text) + "</p>"
        );
      },
    },
    {
      id: "protest",
      name: "Protest Poster",
      build: function (text) {
        return '<p class="protest-text js-fit" data-fit-max="128" data-fit-min="38">' + esc(text) + "</p>";
      },
    },
    {
      id: "newspaper",
      name: "Newspaper Front Page",
      build: function (text) {
        return (
          '<p class="news-masthead">THE DAILY FEELING</p>' +
          '<p class="news-dateline">' + todayLong() + " — LATE EDITION</p>" +
          '<h2 class="news-headline js-fit" data-fit-max="86" data-fit-min="30">' + esc(text) + "</h2>" +
          '<p class="news-byline">Reported anonymously, filed under personal</p>'
        );
      },
    },
    {
      id: "luxury-fashion",
      name: "Luxury Fashion Campaign",
      build: function (text) {
        return (
          '<p class="fashion-season">FALL / WINTER — HONESTY</p>' +
          '<h2 class="fashion-line js-fit" data-fit-max="70" data-fit-min="28">' + esc(text) + "</h2>" +
          '<p class="fashion-house">MAISON DE VENT</p>'
        );
      },
    },
    {
      id: "obituary",
      name: "Obituary",
      build: function (text) {
        return (
          '<p class="obit-eyebrow">IN MEMORY OF WHAT I THOUGHT WOULD LAST</p>' +
          '<p class="obit-text js-fit" data-fit-max="52" data-fit-min="24">' + esc(text) + "</p>" +
          '<p class="obit-line">Survived by everyone who moved on anyway.</p>'
        );
      },
    },
    {
      id: "receipt",
      name: "Receipt",
      build: function (text) {
        return (
          '<p class="receipt-store">POSTER THERAPY</p>' +
          '<p class="receipt-sub">EMOTIONAL GOODS &amp; SERVICES</p>' +
          '<div class="receipt-rule"></div>' +
          '<p class="receipt-item">1 x THOUGHT&nbsp;&nbsp;&nbsp;&nbsp;NO REFUNDS</p>' +
          '<p class="receipt-text js-fit" data-fit-max="34" data-fit-min="18">' + esc(text) + "</p>" +
          '<div class="receipt-rule"></div>' +
          '<p class="receipt-total">TOTAL: PRICELESS</p>' +
          '<div class="receipt-barcode"></div>'
        );
      },
    },
    {
      id: "court-exhibit",
      name: "Court Exhibit",
      build: function (text) {
        return (
          '<p class="court-exhibit-label">EXHIBIT A</p>' +
          '<p class="court-case">IN THE MATTER OF MY OWN HEART</p>' +
          '<p class="court-text js-fit" data-fit-max="46" data-fit-min="22">' + esc(text) + "</p>" +
          '<p class="court-stamp">SUBMITTED AS EVIDENCE</p>'
        );
      },
    },
    {
      id: "dictionary",
      name: "Dictionary Entry",
      build: function (text) {
        return (
          '<p class="dict-headword">con&middot;fes&middot;sion</p>' +
          '<p class="dict-pos"><em>noun</em></p>' +
          '<p class="dict-def js-fit" data-fit-max="44" data-fit-min="22"><span class="dict-num">1.</span> ' + esc(text) + "</p>"
        );
      },
    },
    {
      id: "missing-person",
      name: "Missing Person Poster",
      build: function (text) {
        return (
          '<p class="missing-heading">MISSING</p>' +
          '<div class="missing-frame"><span>NO PHOTO AVAILABLE</span></div>' +
          '<p class="missing-label">LAST SEEN FEELING FINE</p>' +
          '<p class="missing-text js-fit" data-fit-max="34" data-fit-min="18">' + esc(text) + "</p>" +
          '<p class="missing-contact">IF FOUND, PLEASE BE GENTLE</p>'
        );
      },
    },
    {
      id: "redacted",
      name: "Redacted Document",
      build: function (text) {
        return (
          '<p class="redacted-stamp">CLASSIFIED</p>' +
          '<p class="redacted-section">SECTION 4.2 — PERSONAL DISCLOSURE</p>' +
          '<div class="redacted-bar redacted-bar--a"></div>' +
          '<p class="redacted-text js-fit" data-fit-max="46" data-fit-min="22">' + esc(text) + "</p>" +
          '<div class="redacted-bar redacted-bar--b"></div>'
        );
      },
    },
    {
      id: "album-cover",
      name: "Album Cover",
      build: function (text) {
        return (
          '<div class="album-art"><p class="album-text js-fit" data-fit-max="46" data-fit-min="20">' + esc(text) + "</p></div>" +
          '<p class="album-artist">UNKNOWN ARTIST</p>' +
          '<p class="album-title">SIDE A</p>'
        );
      },
    },
    {
      id: "departure-board",
      name: "Airport Departure Board",
      build: function (text) {
        var upper = text.toUpperCase();
        var tiles = upper
          .split("")
          .map(function (ch) {
            return '<span class="board-tile">' + (ch === " " ? "&nbsp;" : esc(ch)) + "</span>";
          })
          .join("");
        return (
          '<p class="board-heading">DEPARTURES</p>' +
          '<div class="board-row">' + tiles + "</div>" +
          '<p class="board-gate">GATE: WHEREVER YOU\u2019RE HEADED NEXT</p>'
        );
      },
    },
    {
      id: "typewriter",
      name: "Typewriter Page",
      build: function (text) {
        return (
          '<p class="type-page-num">1.</p>' +
          '<p class="type-text js-fit" data-fit-max="40" data-fit-min="20">' + esc(text) + "</p>"
        );
      },
    },
    {
      id: "museum-wall",
      name: "Museum Wall Text",
      build: function (text) {
        return (
          '<p class="wall-eyebrow">ON VIEW</p>' +
          '<p class="wall-text js-fit" data-fit-max="54" data-fit-min="24">' + esc(text) + "</p>"
        );
      },
    },
    {
      id: "annual-report",
      name: "Annual Report",
      build: function (text) {
        return (
          '<p class="annual-eyebrow">ANNUAL REPORT</p>' +
          '<p class="annual-year">' + currentYear() + "</p>" +
          '<h2 class="annual-headline js-fit" data-fit-max="60" data-fit-min="26">' + esc(text) + "</h2>" +
          '<p class="annual-footer-line">Prepared for the shareholders of self</p>'
        );
      },
    },
    {
      id: "movie-credits",
      name: "Movie Credits",
      build: function (text) {
        return (
          '<p class="credits-role">WRITTEN, DIRECTED, AND LIVED BY YOU</p>' +
          '<p class="credits-text js-fit" data-fit-max="48" data-fit-min="22">' + esc(text) + "</p>" +
          '<p class="credits-role">A POSTER THERAPY PRODUCTION</p>'
        );
      },
    },
    {
      id: "book-spine",
      name: "Book Spine",
      build: function (text) {
        return (
          '<div class="spine-band"><p class="spine-text js-fit" data-fit-max="52" data-fit-min="22">' + esc(text) + "</p></div>" +
          '<p class="spine-imprint">POSTER THERAPY EDITIONS</p>'
        );
      },
    },
    {
      id: "luxury-watch",
      name: "Luxury Watch Advertisement",
      build: function (text) {
        return (
          '<p class="watch-eyebrow">PRECISE, SINCE THE DAY IT BROKE</p>' +
          '<h2 class="watch-headline js-fit" data-fit-max="64" data-fit-min="26">' + esc(text) + "</h2>" +
          '<p class="watch-brand">VENT &amp; CO.</p>'
        );
      },
    },
    {
      id: "tabloid",
      name: "Tabloid",
      build: function (text) {
        return (
          '<p class="tabloid-masthead">THE DAILY SHOCK</p>' +
          '<h2 class="tabloid-headline js-fit" data-fit-max="100" data-fit-min="34">' + esc(text) + "</h2>" +
          '<p class="tabloid-subhead">SOURCES CONFIRM: IT\u2019S TRUE</p>'
        );
      },
    },
    {
      id: "public-notice",
      name: "Public Notice",
      build: function (text) {
        return (
          '<p class="notice-heading">PUBLIC NOTICE</p>' +
          '<p class="notice-text js-fit" data-fit-max="46" data-fit-min="22">' + esc(text) + "</p>" +
          '<p class="notice-ref">REF. NO. ' + randomEdition() + "</p>"
        );
      },
    },
    {
      id: "quiet",
      name: "The Quiet One",
      build: function (text) {
        return '<p class="quiet-text js-fit" data-fit-max="46" data-fit-min="22">' + esc(text) + "</p>";
      },
    },
  ];

  var TEMPLATE_BY_ID = {};
  TEMPLATES.forEach(function (t) { TEMPLATE_BY_ID[t.id] = t; });

  /* ---------- poster shell + footer (shared by every template) ---------- */

  function buildPosterHTML(templateId, text, name) {
    var tpl = TEMPLATE_BY_ID[templateId];
    var edition = randomEdition();
    var inner = tpl.build(text);

    var footer =
      '<div class="poster-footer">' +
      '<p>POSTER THERAPY</p>' +
      '<p>DIGITAL EDITION</p>' +
      '<p>Edition #' + edition + "</p>" +
      "<p>basith.xyz/postertherapy</p>" +
      "</div>";

    var attribution = name
      ? '<p class="poster-attribution">\u2014 ' + esc(name) + "</p>"
      : "";

    return (
      '<div class="poster poster--' + templateId + '">' +
      '<div class="poster-content">' + inner + "</div>" +
      footer +
      attribution +
      "</div>"
    );
  }

  /* ---------- fixed typography: showcase cards never participate in font-fitting ----------
     Showcase posters are rendered at true 1080x1920 and then scaled way down purely via
     CSS transform for display. They just need their max size set once — never measured
     or shrunk, since at showcase scale the fitting loop has nothing meaningful to compare
     against and will walk font-size down toward data-fit-min for no reason. */

  function applyFixedTypography(posterEl) {
    var nodes = posterEl.querySelectorAll(".js-fit");
    for (var i = 0; i < nodes.length; i++) {
      var el = nodes[i];
      var max = parseInt(el.getAttribute("data-fit-max"), 10) || 100;
      el.style.fontSize = max + "px";
    }
  }

  /* ---------- autofit: shrink text until it fits its box, no overflow ----------
     Used ONLY for the full-size generated poster (result view) and the offscreen
     export poster (download). Never applied to showcase cards. ---------- */

  function autoFit(posterEl) {
    var nodes = posterEl.querySelectorAll(".js-fit");
    for (var i = 0; i < nodes.length; i++) {
      var el = nodes[i];
      var max = parseInt(el.getAttribute("data-fit-max"), 10) || 100;
      var min = parseInt(el.getAttribute("data-fit-min"), 10) || 22;
      var container = el.parentElement;
      var size = max;
      el.style.fontSize = size + "px";
      var guard = 0;
      while (
        guard < 90 &&
        size > min &&
        (el.scrollHeight > container.clientHeight + 1 ||
          el.scrollWidth > container.clientWidth + 1)
      ) {
        size -= 2;
        el.style.fontSize = size + "px";
        guard++;
      }
    }
  }

  /* ---------- landing view: char counter, attribution toggle, submit ---------- */

  var ventInput = document.getElementById("vent-input");
  var charCount = document.getElementById("char-count");
  var createBtn = document.getElementById("create-btn");
  var ventForm = document.getElementById("vent-form");
  var attributionToggle = document.getElementById("attribution-toggle");
  var nameFieldWrap = document.getElementById("name-field-wrap");
  var nameInput = document.getElementById("name-input");

  function updateCount() {
    var len = ventInput.value.length;
    charCount.textContent = String(len);
    createBtn.disabled = ventInput.value.trim().length === 0;
  }
  ventInput.addEventListener("input", updateCount);
  updateCount();

  var attributionOn = false;
  attributionToggle.addEventListener("click", function () {
    attributionOn = !attributionOn;
    attributionToggle.setAttribute("aria-pressed", String(attributionOn));
    attributionToggle.classList.toggle("is-active", attributionOn);
    nameFieldWrap.hidden = !attributionOn;
    if (attributionOn) nameInput.focus();
  });

  /* ---------- view switching ---------- */

  var views = {
    landing: document.getElementById("landing-view"),
    loading: document.getElementById("loading-view"),
    result: document.getElementById("result-view"),
  };

  function showView(name) {
    Object.keys(views).forEach(function (key) {
      views[key].classList.toggle("is-active", key === name);
    });
  }

  /* ---------- loading messages ---------- */

  var LOADING_MESSAGES = [
    "Giving your frustration better typography.",
    "Looking for the right frame.",
    "Making it gallery worthy.",
    "Treating your thoughts like art.",
    "Turning a thought into an artifact.",
  ];

  var loadingMessageEl = document.getElementById("loading-message");
  var loadingTimer = null;

  function runLoading(callback) {
    var order = LOADING_MESSAGES.slice().sort(function () { return Math.random() - 0.5; });
    var i = 0;
    loadingMessageEl.textContent = order[0];
    i = 1;
    loadingTimer = setInterval(function () {
      loadingMessageEl.textContent = order[i % order.length];
      i++;
    }, 650);

    var totalTime = 1900 + Math.floor(Math.random() * 500);
    setTimeout(function () {
      clearInterval(loadingTimer);
      callback();
    }, totalTime);
  }

  /* ---------- result view: render, scale to fit, download ---------- */

  var posterWrapper = document.getElementById("poster-wrapper");
  var posterViewport = document.getElementById("poster-viewport");
  var exportRoot = document.getElementById("export-root");
  var downloadBtn = document.getElementById("download-btn");
  var createAnotherBtn = document.getElementById("create-another-btn");

  var currentTemplateId = null;
  var currentText = "";
  var currentName = "";

  function scalePosterToFit() {
    var poster = posterWrapper.querySelector(".poster");
    if (!poster) return;
    var vw = posterViewport.clientWidth;
    var vh = posterViewport.clientHeight;
    var scale = Math.min(vw / 1080, vh / 1920);
    posterWrapper.style.transform = "scale(" + scale + ")";
  }

  function renderResult() {
    posterWrapper.innerHTML = buildPosterHTML(currentTemplateId, currentText, currentName);
    var poster = posterWrapper.querySelector(".poster");
    autoFit(poster);
    scalePosterToFit();

    showView("result");
    // fade the artwork in like something being unveiled, not a dashboard update
    requestAnimationFrame(function () {
      requestAnimationFrame(function () {
        poster.classList.add("is-revealed");
      });
    });
  }

  ventForm.addEventListener("submit", function (e) {
    e.preventDefault();
    var text = ventInput.value.replace(/\s+/g, " ").trim();
    if (!text) return;

    currentText = text;
    currentName = attributionOn ? nameInput.value.trim() : "";
    currentTemplateId = chooseTemplateId(text);

    showView("loading");
    runLoading(renderResult);
  });

  window.addEventListener("resize", scalePosterToFit);

  createAnotherBtn.addEventListener("click", function () {
    ventInput.value = "";
    nameInput.value = "";
    attributionOn = false;
    attributionToggle.setAttribute("aria-pressed", "false");
    attributionToggle.classList.remove("is-active");
    nameFieldWrap.hidden = true;
    updateCount();
    posterWrapper.innerHTML = "";
    showView("landing");
    ventInput.focus();
  });

  downloadBtn.addEventListener("click", function () {
    if (!currentTemplateId) return;
    downloadBtn.disabled = true;
    downloadBtn.textContent = "Preparing download...";

    // Build a true-resolution, untransformed copy off-screen for export,
    // so the exported PNG is exactly 1080x1920 with no UI in it.
    exportRoot.innerHTML = buildPosterHTML(currentTemplateId, currentText, currentName);
    var exportPoster = exportRoot.firstElementChild;
    exportPoster.classList.add("is-revealed");
    autoFit(exportPoster);

    // give layout a tick to settle before capture
    requestAnimationFrame(function () {
      requestAnimationFrame(function () {
        html2canvas(exportPoster, {
          width: 1080,
          height: 1920,
          scale: 1,
          backgroundColor: null,
          useCORS: true,
        }).then(function (canvas) {
          var link = document.createElement("a");
          link.download = "poster-therapy-" + Date.now() + ".png";
          link.href = canvas.toDataURL("image/png");
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
          exportRoot.innerHTML = "";
          downloadBtn.disabled = false;
          downloadBtn.textContent = "Download Poster";
        }).catch(function () {
          exportRoot.innerHTML = "";
          downloadBtn.disabled = false;
          downloadBtn.textContent = "Download Poster";
        });
      });
    });
  });

  /* ---------- homepage showcase: 10 curated, seeded examples ---------- */

  var SHOWCASE = [
    { text: "I thought I'd be further along by now.", id: "museum-placard" },
    { text: "Some people only miss you when you're leaving.", id: "a24" },
    { text: "I'm tired of being easy to lose.", id: "poetry" },
    { text: "I keep waiting for a version of me that doesn't exist.", id: "dictionary" },
    { text: "Nobody prepares you for becoming the adult you needed.", id: "obituary" },
    { text: "I miss places more than people.", id: "quiet" },
    { text: "The worst goodbyes are the quiet ones.", id: "museum-wall" },
    { text: "I outgrew things I once prayed for.", id: "book-spine" },
    { text: "I wish I worried less and lived more.", id: "court-exhibit" },
    { text: "Not every ending deserves closure.", id: "typewriter" },
  ];

  function buildShowcaseCard(item) {
    var card = document.createElement("div");
    card.className = "showcase-card";
    card.innerHTML = buildPosterHTML(item.id, item.text, "");
    var poster = card.querySelector(".poster");
    poster.classList.add("is-revealed");
    applyFixedTypography(poster);
    return card;
  }

  function populateShowcase(container, loop) {
    var list = loop ? SHOWCASE.concat(SHOWCASE) : SHOWCASE;
    list.forEach(function (item) {
      container.appendChild(buildShowcaseCard(item));
    });
  }

  populateShowcase(document.getElementById("showcase-track"), true);
  populateShowcase(document.getElementById("mobile-showcase-track"), false);

})();
