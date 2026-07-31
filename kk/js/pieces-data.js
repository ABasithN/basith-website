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
 * Story copy2 below is placeholder only — final copy is written separately.
 */

const PIECES = [
  {
    id: "001",
    title: "The Quiet Carry",
    story:
      "Designed for days that move with intention, this tote will become part of quiet routines, weekend bookstore visits, gallery afternoons and everyday commutes. It will carry more than essentials; it will carry the small objects that shape a day. The embroidered details invite a second look, while the understated form leaves room for everything else to
speak.",
    images: [
  "assets/images/piece-001/piece-01-reality.svg",
  "assets/images/piece-001/piece-01-editorial.svg",
  "assets/images/piece-001/piece-01-detail.svg",
],
    details: {
      Canvas Tote Bag: "Carry what quietly becomes part of your everyday.", 
      size: "One Size",
      condition: "Excellent",
      price: "₹650",
    },
  },
 

 {
    id: "002",
    title: "A Second Departure",
    story:
      "It will travel again, though not the way it did before. This time, unhurried. It will wait by a door for someone who takes their time leaving. It will learn a new set of hands, a new rhythm of mornings. What it carried once, it will carry differently — lighter, maybe, or simply changed by the pause in between.",
    images: [
  "assets/images/piece-002/piece-02-reality.svg",
  "assets/images/piece-002/piece-02-editorial.svg",
  "assets/images/piece-002/piece-02-detail.svg",
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
  instagramHandle: "kurated_kouture",
  messageTemplate: (piece) => `Hi, I'd like to reserve Piece ${piece.id}.`,
};
