/* ============================================================
   POSTER THERAPY V2 — script.js
   The website interprets what you wrote. It does not just
   place your sentence on a poster — every template transforms
   the input into a structured artifact. No AI, no API:
   everything below is deterministic keyword + string logic.
   ============================================================ */

(function () {
  "use strict";

  /* ============================================================
     STRING UTILITIES
     ============================================================ */

  function esc(str) {
    return String(str)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  var STOPWORDS = new Set([
    "a", "an", "the", "is", "am", "are", "was", "were", "i", "you", "he", "she",
    "it", "we", "they", "my", "your", "his", "her", "its", "our", "their",
    "this", "that", "these", "those", "to", "of", "in", "on", "at", "for",
    "and", "but", "or", "so", "because", "just", "really", "very", "then",
    "than", "be", "been", "being", "do", "does", "did", "have", "has", "had",
    "not", "no", "all", "some", "me", "them", "us", "if", "with", "by", "as",
    "can", "cant", "could", "couldnt", "would", "wouldnt", "will", "im", "ive",
    "who", "what", "when", "where", "how",
    "i'd", "i'll", "i'm", "don't", "didn't", "wasn't", "isn't", "doesn't",
    "wouldn't", "couldn't", "can't", "it's", "that's", "there's", "who's", "what's",
  ]);

  // lowercase, strip punctuation (keep apostrophes), split into words
  function cleanWords(text) {
    return text
      .toLowerCase()
      .replace(/[^a-z0-9'\s]/g, "")
      .split(/\s+/)
      .filter(Boolean);
  }

  function significantWords(text) {
    return cleanWords(text).filter(function (w) {
      return w.length > 2 && !STOPWORDS.has(w);
    });
  }

  // unique significant words, longest (most "loaded") first
  function topWords(text, n) {
    var seen = {};
    var uniq = [];
    significantWords(text).forEach(function (w) {
      if (!seen[w]) {
        seen[w] = true;
        uniq.push(w);
      }
    });
    uniq.sort(function (a, b) { return b.length - a.length; });
    return uniq.slice(0, n);
  }

  function topWord(text) {
    return topWords(text, 1)[0];
  }

  function firstClause(text) {
    var parts = text.split(/[.!?]/);
    return (parts[0] || text).trim();
  }

  // the first clause, stripped down to its significant words
  function firstClauseCore(text) {
    var words = significantWords(firstClause(text));
    return words.join(" ");
  }

  function truncateWords(str, n) {
    var words = String(str).split(/\s+/).filter(Boolean);
    return words.slice(0, n).join(" ");
  }

  function titleCase(str) {
    return String(str).replace(/\w\S*/g, function (t) {
      return t.charAt(0).toUpperCase() + t.substr(1).toLowerCase();
    });
  }

  // deterministic string hash -> stable number in [min, max]
  // (same input always produces the same interpretation)
  function hashNum(str, min, max) {
    var h = 0;
    for (var i = 0; i < str.length; i++) {
      h = (h * 31 + str.charCodeAt(i)) >>> 0;
    }
    var range = max - min + 1;
    return min + (h % range);
  }

  function pickFrom(str, arr) {
    return arr[hashNum(str, 0, arr.length - 1)];
  }

  /* ============================================================
     INTERPRETATION ENGINE — routing
     ============================================================ */

  var CATEGORY_KEYWORDS = {
    anger: ["fuck", "hate", "angry", "furious", "mad", "pissed", "rage"],
    loss: ["miss", "gone", "lost", "left", "heartbreak", "goodbye", "breakup"],
    work: [
      "job", "boss", "office", "career", "promotion", "salary", "meeting",
      "coworker", "manager", "deadline", "overtime", "tired", "exhausted",
      "drained", "burnout", "burnt out", "silence",
    ],
    nostalgia: ["remember", "used to", "back then", "wish", "could have", "if only", "younger"],
    identity: ["who am i", "confused", "identity", "worth", "enough", "doubt", "insecure", "imposter"],
    reinvention: ["change", "new me", "reinvent", "growth", "evolve", "different person", "transform"],
    universal: ["everyone", "nobody", "people", "always", "never", "life is", "no one"],
    existential: ["wonder", "meaning", "universe", "existence", "why do", "purpose", "becoming", "exist"],
  };

  // order matters: first category matched wins
  var PRIORITY = ["anger", "loss", "work", "nostalgia", "identity", "reinvention", "universal", "existential"];

  var CATEGORY_TEMPLATE = {
    anger: "protest",
    work: "corporate",
    identity: "dictionary",
    existential: "museum",
    loss: "obituary",
    reinvention: "vogue",
    universal: "notice",
    nostalgia: "a24",
  };

  function detectCategory(text) {
    var lower = " " + text.toLowerCase() + " ";
    for (var i = 0; i < PRIORITY.length; i++) {
      var cat = PRIORITY[i];
      var keywords = CATEGORY_KEYWORDS[cat];
      for (var j = 0; j < keywords.length; j++) {
        if (lower.indexOf(keywords[j]) !== -1) return cat;
      }
    }
    // nothing matched: default to the reflective, universally-fitting template
    return "existential";
  }

  function chooseTemplateId(text) {
    return CATEGORY_TEMPLATE[detectCategory(text)];
  }

  /* ============================================================
     8 POSTER SYSTEMS
     Each build() function INTERPRETS the input — it never just
     drops the raw sentence onto the canvas. It extracts words,
     derives numbers, and reassembles them into a new structure.
     ============================================================ */

  var TEMPLATES = {

    /* 1. PROTEST POSTER — anger, frustration, resentment */
    protest: {
      name: "Protest Poster",
      build: function (text) {
        var words = significantWords(text);
        if (!words.length) words = cleanWords(text);
        if (!words.length) words = ["enough"];
        var chunkSize = words.length <= 3 ? 1 : 2;
        var lines = [];
        for (var i = 0; i < words.length && lines.length < 4; i += chunkSize) {
          lines.push(words.slice(i, i + chunkSize).join(" ").toUpperCase());
        }
        return (
          '<div class="protest-lines">' +
          lines
            .map(function (l) {
              return '<p class="protest-line js-fit" data-fit-max="150" data-fit-min="42">' + esc(l) + "</p>";
            })
            .join("") +
          "</div>"
        );
      },
    },

    /* 2. CORPORATE REPORT — burnout, work stress, office frustration */
    corporate: {
      name: "Corporate Report",
      build: function (text) {
        var lower = text.toLowerCase();
        var years = hashNum(text + "yr", 1, 15);
        var overtime = hashNum(text + "ot", 20, 400);

        var status;
        if (/silen|ignor|no response/.test(lower)) status = "No Response Received";
        else if (/fired|laid off|quit|resign/.test(lower)) status = "Terminated";
        else if (/tired|exhaust|drain|burnout|burnt/.test(lower)) status = "Burnout Confirmed";
        else status = pickFrom(text + "st", ["Pending Review", "Unresolved", "Denied", "Under Consideration"]);

        var notes = titleCase(truncateWords(firstClauseCore(text) || "no comment provided", 6));

        function row(label, value) {
          return (
            '<div class="corp-row"><span class="corp-label">' + esc(label) +
            '</span><span class="corp-value">' + esc(value) + "</span></div>"
          );
        }

        return (
          '<p class="corp-title">EMPLOYEE RELATIONS REPORT</p>' +
          '<div class="corp-rows">' +
          row("Years Invested", years) +
          row("Recognition Received", "0") +
          row("Overtime Logged", overtime + " HRS") +
          row("Status", status) +
          "</div>" +
          '<p class="corp-notes"><span class="corp-notes-label">Field Notes</span><span class="js-fit" data-fit-max="30" data-fit-min="18">' +
          esc(notes) + "</span></p>"
        );
      },
    },

    /* 3. DICTIONARY ENTRY — identity, self worth, confusion */
    dictionary: {
      name: "Dictionary Entry",
      build: function (text) {
        var head = topWord(text) || "unresolved";
        var connector = pickFrom(text + "dc", [
          "a feeling that", "the sense of", "what's left when",
          "a place that", "a promise that", "the weight of",
        ]);
        var tail = truncateWords(firstClauseCore(text) || "keeps moving", 5).toLowerCase();
        return (
          '<p class="dict-word js-fit" data-fit-max="72" data-fit-min="34">' + esc(head) + "</p>" +
          '<p class="dict-pos">(noun)</p>' +
          '<p class="dict-def js-fit" data-fit-max="44" data-fit-min="22">' +
          esc(connector) + "<br>" + esc(tail) + "</p>"
        );
      },
    },

    /* 4. MUSEUM EXHIBIT — existential thoughts, reflection */
    museum: {
      name: "Museum Exhibit",
      build: function (text) {
        var word = topWord(text) || "becoming";
        var title = "ON " + word.toUpperCase();
        var year = new Date().getFullYear();
        var extras = topWords(text, 4).filter(function (w) { return w !== word; }).slice(0, 3);
        if (!extras.length) extras = ["time"];
        return (
          '<p class="museum-title js-fit" data-fit-max="70" data-fit-min="32">' + esc(title) + "</p>" +
          '<p class="museum-year">' + year + "</p>" +
          '<p class="museum-medium">Mixed media:<br>' + extras.map(esc).join(",<br>") + ".</p>"
        );
      },
    },

    /* 5. OBITUARY — loss, heartbreak, endings */
    obituary: {
      name: "Obituary",
      build: function (text) {
        var tail = truncateWords(firstClauseCore(text) || "this", 6).toLowerCase();
        return (
          '<p class="obit-heading">IN MEMORY OF</p>' +
          '<p class="obit-body js-fit" data-fit-max="54" data-fit-min="26">the version of me<br>that ' +
          esc(tail) + "</p>"
        );
      },
    },

    /* 6. VOGUE COVER — reinvention, transformation */
    vogue: {
      name: "Vogue Cover",
      build: function (text) {
        var words = topWords(text, 2);
        var main = words[0] || "change";
        var second = words[1] || "letting go";
        return (
          '<p class="vogue-masthead">VENT</p>' +
          '<p class="vogue-issue">THE REINVENTION ISSUE</p>' +
          '<p class="vogue-cover js-fit" data-fit-max="72" data-fit-min="32">THE ART OF<br>' +
          esc(main.toUpperCase()) + "</p>" +
          '<p class="vogue-sub">+ letting go of ' + esc(second) + "</p>"
        );
      },
    },

    /* 7. PUBLIC NOTICE — universal truths, observations */
    notice: {
      name: "Public Notice",
      build: function (text) {
        var prefix = pickFrom(text + "pn", [
          "Nobody knows", "Everyone pretends", "No one talks about",
          "Somebody always", "Most people forget",
        ]);
        var tail = truncateWords(firstClauseCore(text) || "what they are doing", 6).toLowerCase();
        return (
          '<p class="notice-heading">NOTICE</p>' +
          '<p class="notice-body js-fit" data-fit-max="52" data-fit-min="26">' +
          esc(prefix) + "<br>" + esc(tail) + "</p>"
        );
      },
    },

    /* 8. A24 FILM POSTER — nostalgia, regret, longing */
    a24: {
      name: "A24 Film Poster",
      build: function (text) {
        var words = topWords(text, 2);
        var connector = pickFrom(text + "a24", ["OF", "AND", "WITHOUT", "BEFORE"]);
        var title = words.length >= 2
          ? words[0].toUpperCase() + " " + connector + " " + words[1].toUpperCase()
          : (words[0] || "SOMEDAY").toUpperCase();
        var credit = "A FILM ABOUT " + truncateWords(firstClauseCore(text) || "someone who remembers", 5).toUpperCase();
        return (
          '<p class="a24-title js-fit" data-fit-max="108" data-fit-min="36">' + esc(title) + "</p>" +
          '<p class="a24-credit">' + esc(credit) + "</p>"
        );
      },
    },

  };

  /* ============================================================
     POSTER SHELL — watermark + attribution, shared by all 8 systems
     ============================================================ */

  function buildPosterHTML(templateId, text, name) {
    var tpl = TEMPLATES[templateId];
    var inner = tpl.build(text);

    var attribution = name ? '<p class="poster-attribution">\u2014 ' + esc(name) + "</p>" : "";

    return (
      '<div class="poster poster--' + templateId + '">' +
      '<div class="poster-content">' + inner + "</div>" +
      '<p class="poster-watermark">postertherapy.basith.xyz</p>' +
      attribution +
      "</div>"
    );
  }

  /* ============================================================
     AUTOFIT — used ONLY for the generated poster and the export
     poster. Showcase cards are rendered far below true size via
     a CSS scale transform and must never run this: measuring a
     1080x1920 box shrunk to ~200px on screen has nothing
     meaningful to compare against and would walk every size down
     toward its minimum for no reason. Showcase cards get fixed
     typography instead — see applyFixedTypography().
     ============================================================ */

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
        (el.scrollHeight > container.clientHeight + 1 || el.scrollWidth > container.clientWidth + 1)
      ) {
        size -= 2;
        el.style.fontSize = size + "px";
        guard++;
      }
    }
  }

  function applyFixedTypography(posterEl) {
    var nodes = posterEl.querySelectorAll(".js-fit");
    for (var i = 0; i < nodes.length; i++) {
      var el = nodes[i];
      var max = parseInt(el.getAttribute("data-fit-max"), 10) || 100;
      el.style.fontSize = max + "px";
    }
  }

  /* ============================================================
     HOME VIEW — input, char state, credit toggle
     ============================================================ */

  var ventInput = document.getElementById("vent-input");
  var makeBtn = document.getElementById("make-btn");
  var ventForm = document.getElementById("vent-form");
  var creditToggle = document.getElementById("credit-toggle");
  var creditFieldWrap = document.getElementById("credit-field-wrap");
  var creditInput = document.getElementById("credit-input");

  function updateButtonState() {
    makeBtn.disabled = ventInput.value.trim().length === 0;
  }
  ventInput.addEventListener("input", updateButtonState);
  updateButtonState();

  var creditOn = false;
  creditToggle.addEventListener("click", function () {
    creditOn = !creditOn;
    creditToggle.setAttribute("aria-pressed", String(creditOn));
    creditToggle.classList.toggle("is-active", creditOn);
    creditFieldWrap.hidden = !creditOn;
    if (creditOn) creditInput.focus();
  });

  /* ============================================================
     VIEW SWITCHING
     ============================================================ */

  var views = {
    home: document.getElementById("home-view"),
    poster: document.getElementById("poster-view"),
  };

  function showView(name) {
    Object.keys(views).forEach(function (key) {
      views[key].classList.toggle("is-active", key === name);
    });
  }

  /* ============================================================
     GENERATE + DISPLAY
     ============================================================ */

  var posterWrapper = document.getElementById("poster-wrapper");
  var posterViewport = document.getElementById("poster-viewport");
  var exportRoot = document.getElementById("export-root");
  var downloadBtn = document.getElementById("download-btn");
  var againBtn = document.getElementById("again-btn");

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

  function renderPoster() {
    posterWrapper.innerHTML = buildPosterHTML(currentTemplateId, currentText, currentName);
    var poster = posterWrapper.querySelector(".poster");
    autoFit(poster);
    scalePosterToFit();

    showView("poster");
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
    currentName = creditOn ? creditInput.value.trim() : "";
    currentTemplateId = chooseTemplateId(text);

    renderPoster();
  });

  window.addEventListener("resize", scalePosterToFit);

  againBtn.addEventListener("click", function () {
    ventInput.value = "";
    creditInput.value = "";
    creditOn = false;
    creditToggle.setAttribute("aria-pressed", "false");
    creditToggle.classList.remove("is-active");
    creditFieldWrap.hidden = true;
    updateButtonState();
    posterWrapper.innerHTML = "";
    showView("home");
    ventInput.focus();
  });

  downloadBtn.addEventListener("click", function () {
    if (!currentTemplateId) return;
    downloadBtn.disabled = true;
    downloadBtn.textContent = "Preparing download...";

    exportRoot.innerHTML = buildPosterHTML(currentTemplateId, currentText, currentName);
    var exportPoster = exportRoot.firstElementChild;
    exportPoster.classList.add("is-revealed");
    autoFit(exportPoster);

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

  /* ============================================================
     SHOWCASE — 8 seeded examples, run through the SAME
     interpretation engine real submissions use (no hardcoded
     template assignment).
     ============================================================ */

  var SHOWCASE_SEEDS = [
    "I am tired in ways sleep can't fix.",
    "Nobody talks about how lonely ambition is.",
    "I gave them years. They gave me silence.",
    "I thought I'd be further along by now.",
    "Some people leave twice.",
    "Fuck this job.",
    "I miss who I was before all this.",
    "The version of me they loved no longer exists.",
  ];

  function buildShowcaseCard(seedText) {
    var templateId = chooseTemplateId(seedText);
    var card = document.createElement("div");
    card.className = "showcase-card";
    card.innerHTML = buildPosterHTML(templateId, seedText, "");
    var poster = card.querySelector(".poster");
    poster.classList.add("is-revealed");
    applyFixedTypography(poster);
    return card;
  }

  function populateShowcase(container) {
    SHOWCASE_SEEDS.forEach(function (seed) {
      container.appendChild(buildShowcaseCard(seed));
    });
  }

  // desktop track gets a duplicated set for a seamless continuous scroll
  var desktopTrack = document.getElementById("showcase-track");
  populateShowcase(desktopTrack);
  populateShowcase(desktopTrack);

  populateShowcase(document.getElementById("mobile-track"));

})();
