/**
 * KURATED KOUTURE — Behavior
 * ---------------------------
 * - Renders each entry in PIECES (pieces-data.js) from #piece-template
 * - Vertical scroll-snap between screens (handled by CSS; JS tracks position)
 * - Horizontal swipe/scroll gallery within each piece, with dot index
 * - Fade-in reveals on entering the viewport (IntersectionObserver)
 * - Reserve button: copies the prefilled message, opens Instagram
 *
 * No frameworks. GSAP/Lenis hooks left commented below for future use.
 */

(function () {
  "use strict";

  const container = document.getElementById("pieces-container");
  const template = document.getElementById("piece-template");
  const scrollRoot = document.getElementById("scroll-container");
  const railMark = document.querySelector("[data-rail-index]");

  /* ---------------------------------------------------------------
     1. RENDER PIECES FROM DATA
     --------------------------------------------------------------- */
  function renderPieces() {
    PIECES.forEach((piece) => {
      const node = template.content.cloneNode(true);
      const screen = node.querySelector(".screen--piece");
      screen.dataset.pieceId = piece.id;

      // Gallery images
      const track = node.querySelector("[data-track]");
      const indexWrap = node.querySelector("[data-gallery-index]");
      piece.images.forEach((src, i) => {
        const frame = document.createElement("div");
        frame.className = "piece__frame";
        const img = document.createElement("img");
        img.src = src;
        img.alt = `${piece.title} — image ${i + 1} of ${piece.images.length}`;
        img.loading = "lazy";
        img.addEventListener("load", () => img.classList.add("is-loaded"));
        frame.appendChild(img);
        track.appendChild(frame);

        const dot = document.createElement("span");
        if (i === 0) dot.classList.add("is-active");
        indexWrap.appendChild(dot);
      });

      // Text content
      node.querySelector("[data-piece-number]").textContent = `Piece ${piece.id}`;
      node.querySelector("[data-piece-title]").textContent = piece.title;
      node.querySelector("[data-piece-story]").textContent = piece.story;
      node.querySelector("[data-detail-size]").textContent = piece.details.size;
      node.querySelector("[data-detail-measurements]").textContent = piece.details.measurements;
      node.querySelector("[data-detail-condition]").textContent = piece.details.condition;
      node.querySelector("[data-detail-price]").textContent = piece.details.price;

      // Reserve button
      const reserveBtn = node.querySelector("[data-reserve-btn]");
      const reserveNote = node.querySelector("[data-reserve-note]");
      reserveBtn.addEventListener("click", () => handleReserve(piece, reserveNote));

      container.appendChild(node);
    });
  }

  /* ---------------------------------------------------------------
     2. RESERVE ACTION — copy prefilled message, open Instagram
        (Instagram has no public deep-link for prefilled DMs, so we
        copy the message to the clipboard and open the profile.)
     --------------------------------------------------------------- */
  function handleReserve(piece, noteEl) {
    const message = RESERVE_CONFIG.messageTemplate(piece);
    const profileUrl = `https://instagram.com/${RESERVE_CONFIG.instagramHandle}`;

    const openProfile = () => window.open(profileUrl, "_blank", "noopener");

    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard
        .writeText(message)
        .then(() => showNote(noteEl, "Message copied — paste it into Instagram DM."))
        .catch(() => showNote(noteEl, "Opening Instagram — say hello to reserve."))
        .finally(openProfile);
    } else {
      showNote(noteEl, "Opening Instagram — say hello to reserve.");
      openProfile();
    }
  }

  function showNote(el, text) {
    el.textContent = text;
    el.classList.add("is-visible");
    clearTimeout(el._hideTimer);
    el._hideTimer = setTimeout(() => el.classList.remove("is-visible"), 6000);
  }

  /* ---------------------------------------------------------------
     3. GALLERY DOT INDEX — update on horizontal scroll
     --------------------------------------------------------------- */
  function initGalleryIndexes() {
    document.querySelectorAll("[data-gallery]").forEach((gallery) => {
      const track = gallery.querySelector("[data-track]");
      const dots = gallery.querySelectorAll("[data-gallery-index] span");
      if (!track || !dots.length) return;

      let ticking = false;
      track.addEventListener("scroll", () => {
        if (ticking) return;
        ticking = true;
        requestAnimationFrame(() => {
          const idx = Math.round(track.scrollLeft / track.clientWidth);
          dots.forEach((d, i) => d.classList.toggle("is-active", i === idx));
          ticking = false;
        });
      });
    });
  }

  /* ---------------------------------------------------------------
     4. REVEAL ON SCROLL — fade + rise, once per element
     --------------------------------------------------------------- */
  function initReveals() {
    const targets = document.querySelectorAll(".reveal, .piece__gallery");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            // Reveal is a once-only entrance; stop observing so a fast
            // scroll back and forth can't re-trigger or queue extra work.
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.3 }
    );
    targets.forEach((t) => observer.observe(t));
  }

  /* ---------------------------------------------------------------
     5. RAIL POSITION — reflects current screen in the vertical scroll
     --------------------------------------------------------------- */
  function initRail() {
    if (!railMark) return;
    const screens = () => Array.from(document.querySelectorAll("[data-screen]"));
    const railTrack = railMark.parentElement;

    function update() {
      const list = screens();
      if (!list.length) return;
      const railHeight = railTrack.clientHeight;
      const current = list.reduce((closest, screen, i) => {
        const rect = screen.getBoundingClientRect();
        return Math.abs(rect.top) < Math.abs(list[closest].getBoundingClientRect().top)
          ? i
          : closest;
      }, 0);
      const ratio = list.length > 1 ? current / (list.length - 1) : 0;
      railMark.style.top = `${ratio * (railHeight - 8)}px`;
    }

    let ticking = false;
    scrollRoot.addEventListener("scroll", () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        update();
        ticking = false;
      });
    });
    update();
  }

  /* ---------------------------------------------------------------
     6. LANDING SCROLL CUE
     --------------------------------------------------------------- */
  function initScrollCue() {
    const cue = document.querySelector("[data-scroll-next]");
    if (!cue) return;
    cue.addEventListener("click", () => {
      const first = document.querySelector(".screen--piece") ||
        document.querySelector(".screen--closing");
      if (first) first.scrollIntoView({ behavior: "smooth" });
    });
  }

  /* ---------------------------------------------------------------
     INIT
     --------------------------------------------------------------- */
  document.addEventListener("DOMContentLoaded", () => {
    renderPieces();
    initGalleryIndexes();
    initReveals();
    initRail();
    initScrollCue();
  });

  /* ---------------------------------------------------------------
     Future motion hooks (not implemented — kept as documented intent)
     --------------------------------------------------------------- */
  // import gsap from "gsap"; — orchestrated hero sequence, parallax on gallery
  // import Lenis from "@studio-freight/lenis"; — smoother inertial vertical scroll
})();
