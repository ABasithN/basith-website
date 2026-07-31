/**
 * KURATED KOUTURE — Pieces Data
 * -----------------------------
 * This is the single file to edit when adding, removing, or updating pieces.
 * The site architecture reads this array and builds each piece screen
 * automatically — no HTML editing required for new inventory.
 *
 * Image order per piece is fixed: [reality, editorial, detail]
 *   reality   — the garment as it is
 *   editorial — the styled, art-directed interpretation
 *   detail    — a close, tactile shot
 *
 * Story copy below is placeholder only — final copy is written separately.
 */

const PIECES = [
  {
    id: "001",
    title: "The Quiet Carry",
    story:
      "It will sit on a shoulder that hasn't decided the shape of its day yet. Somewhere between a doorway and a train platform, it will hold what matters and let the rest wait outside. A hand will find its strap without looking. Years from now, someone will remember exactly where they were the first time they reached for it.",
    images: [
      "assets/placeholders/piece-01-reality.svg",
      "assets/placeholders/piece-01-editorial.svg",
      "assets/placeholders/piece-01-detail.svg",
    ],
    details: {
      size: "One Size",
      measurements: '14.5" W × 11" H × 4" D',
      condition: "Excellent — gently carried",
      price: "₹18,500",
    },
  },
  {
    id: "002",
    title: "A Second Departure",
    story:
      "It will travel again, though not the way it did before. This time, unhurried. It will wait by a door for someone who takes their time leaving. It will learn a new set of hands, a new rhythm of mornings. What it carried once, it will carry differently — lighter, maybe, or simply changed by the pause in between.",
    images: [
      "assets/placeholders/piece-02-reality.svg",
      "assets/placeholders/piece-02-editorial.svg",
      "assets/placeholders/piece-02-detail.svg",
    ],
    details: {
      size: "One Size",
      measurements: '14.5" W × 11" H × 4" D',
      condition: "Very good — light patina",
      price: "₹16,000",
    },
  },
];

// Instagram handle used to build the reservation link + prefilled message.
const RESERVE_CONFIG = {
  instagramHandle: "kuratedkouture",
  messageTemplate: (piece) => `Hi, I'd like to reserve Piece ${piece.id}.`,
};
