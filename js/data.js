/* ============================================================
   EXHIBIT A — Product Catalog Data (§11)
   Sample data following the product data model.
   ============================================================ */

const CATALOG = [
  // ── Wing I: Anime ──
  {
    id: 'anime-001',
    image: 'anime-001-cracked-moon.png',
    title: 'Cracked Moon',
    wing: 'anime',
    wingLabel: 'Wing I · Anime',
    medium: 'hoodie',
    mediumLabel: 'Heavyweight cotton hoodie',
    plate_no: '001',
    curator_note: 'Inspired by the fracture between worlds — a moon split in two, rendered in stark white ink on black heavyweight cotton. The crack follows the arc of a blade swing, suggesting motion even in stillness.',
    material: '100% heavyweight combed cotton, 320gsm',
    sizes: [
      { size: 'S', in_stock: true },
      { size: 'M', in_stock: true },
      { size: 'L', in_stock: true },
      { size: 'XL', in_stock: true },
      { size: 'XXL', in_stock: false }
    ],
    colorways: [{ name: 'Obsidian', hex: '#1a1a1a' }],
    price: 68,
    is_commission: false
  },
  {
    id: 'anime-002',
    image: 'anime-002-red-thread.png',
    title: 'Red Thread',
    wing: 'anime',
    wingLabel: 'Wing I · Anime',
    medium: 'tee',
    mediumLabel: 'Premium cotton tee',
    plate_no: '002',
    curator_note: 'The red thread of fate, tangled but unbroken. A single continuous line traces from chest to hem — screen-printed in three passes for a raised, tactile finish you can feel through the fabric.',
    material: '100% ring-spun cotton, 240gsm',
    sizes: [
      { size: 'S', in_stock: true },
      { size: 'M', in_stock: true },
      { size: 'L', in_stock: true },
      { size: 'XL', in_stock: true },
      { size: 'XXL', in_stock: true }
    ],
    colorways: [{ name: 'Bone', hex: '#f0ede4' }],
    price: 42,
    is_commission: false
  },
  {
    id: 'anime-003',
    image: 'anime-003-mech-heart.png',
    title: 'Mech Heart',
    wing: 'anime',
    wingLabel: 'Wing I · Anime',
    medium: 'tee',
    mediumLabel: 'Premium cotton tee',
    plate_no: '003',
    curator_note: 'An anatomical heart rebuilt in mecha components — pistons, servos, coolant lines. Every technical detail is hand-drawn before vectorization. The mechanical is made organic.',
    material: '100% ring-spun cotton, 240gsm',
    sizes: [
      { size: 'S', in_stock: true },
      { size: 'M', in_stock: true },
      { size: 'L', in_stock: false },
      { size: 'XL', in_stock: true },
      { size: 'XXL', in_stock: true }
    ],
    colorways: [{ name: 'Slate', hex: '#3d3d3d' }],
    price: 42,
    is_commission: false
  },
  {
    id: 'anime-004',
    image: 'anime-004-ghost-kanji.png',
    title: 'Ghost Kanji',
    wing: 'anime',
    wingLabel: 'Wing I · Anime',
    medium: 'long_sleeve',
    mediumLabel: 'Long sleeve cotton tee',
    plate_no: '004',
    curator_note: 'The kanji for "ghost" dissolves down the left sleeve like smoke rising. Printed in a translucent ink that shifts between visible and hidden depending on the light angle.',
    material: '100% combed cotton, 220gsm',
    sizes: [
      { size: 'S', in_stock: true },
      { size: 'M', in_stock: true },
      { size: 'L', in_stock: true },
      { size: 'XL', in_stock: false },
      { size: 'XXL', in_stock: false }
    ],
    colorways: [{ name: 'Charcoal', hex: '#2e2e2e' }],
    price: 48,
    is_commission: false
  },

  // ── Wing II: Cinema ──
  {
    id: 'cinema-001',
    image: 'cinema-001-last-frame.png',
    title: 'Last Frame',
    wing: 'cinema',
    wingLabel: 'Wing II · Cinema',
    medium: 'tee',
    mediumLabel: 'Premium cotton tee',
    plate_no: '001',
    curator_note: 'A single film frame — the last one before the credits roll. The image is cropped to just the sprocket holes and the light bleeding through, printed in metallic gold ink on black.',
    material: '100% ring-spun cotton, 240gsm',
    sizes: [
      { size: 'S', in_stock: true },
      { size: 'M', in_stock: true },
      { size: 'L', in_stock: true },
      { size: 'XL', in_stock: true },
      { size: 'XXL', in_stock: true }
    ],
    colorways: [{ name: 'Noir', hex: '#111111' }],
    price: 42,
    is_commission: false
  },
  {
    id: 'cinema-002',
    image: 'cinema-002-marquee-lights.png',
    title: 'Marquee Lights',
    wing: 'cinema',
    wingLabel: 'Wing II · Cinema',
    medium: 'hoodie',
    mediumLabel: 'Heavyweight cotton hoodie',
    plate_no: '002',
    curator_note: 'The warm glow of a theater marquee abstracted into geometric dots of light — each one hand-placed to mimic the irregular rhythm of real bulbs. Embroidered, not printed.',
    material: '100% heavyweight combed cotton, 320gsm',
    sizes: [
      { size: 'S', in_stock: true },
      { size: 'M', in_stock: true },
      { size: 'L', in_stock: true },
      { size: 'XL', in_stock: false },
      { size: 'XXL', in_stock: true }
    ],
    colorways: [{ name: 'Midnight', hex: '#0f0e1a' }],
    price: 72,
    is_commission: false
  },
  {
    id: 'cinema-003',
    image: 'cinema-003-directors-cut.png',
    title: 'Director\'s Cut',
    wing: 'cinema',
    wingLabel: 'Wing II · Cinema',
    medium: 'crewneck',
    mediumLabel: 'French terry crewneck',
    plate_no: '003',
    curator_note: 'A film slate rendered in negative — white chalk lines on black terry. The date field reads today\'s date. Every piece is technically unique, printed on the day of order.',
    material: '100% French terry cotton, 360gsm',
    sizes: [
      { size: 'S', in_stock: true },
      { size: 'M', in_stock: true },
      { size: 'L', in_stock: true },
      { size: 'XL', in_stock: true },
      { size: 'XXL', in_stock: true }
    ],
    colorways: [{ name: 'Carbon', hex: '#1c1c1c' }],
    price: 58,
    is_commission: false
  },
  {
    id: 'cinema-004',
    image: 'cinema-004-reel-end.png',
    title: 'Reel End',
    wing: 'cinema',
    wingLabel: 'Wing II · Cinema',
    medium: 'tee',
    mediumLabel: 'Premium cotton tee',
    plate_no: '004',
    curator_note: 'The countdown leader that plays before the film — 5, 4, 3, 2… — printed as an oversized back graphic. The "1" is absent. The film is always about to begin.',
    material: '100% ring-spun cotton, 240gsm',
    sizes: [
      { size: 'S', in_stock: true },
      { size: 'M', in_stock: true },
      { size: 'L', in_stock: true },
      { size: 'XL', in_stock: true },
      { size: 'XXL', in_stock: false }
    ],
    colorways: [{ name: 'Storm', hex: '#252530' }],
    price: 42,
    is_commission: false
  },

  // ── Permanent Collection (blanks) ──
  {
    id: 'perm-001',
    image: 'perm-001-canvas-stone.png',
    title: 'The Canvas',
    wing: 'permanent',
    wingLabel: 'Permanent Collection',
    medium: 'tee',
    mediumLabel: 'Premium cotton tee',
    plate_no: 'P01',
    curator_note: 'No design, no statement — just the finest cotton we could source, cut and sewn with intention. The canvas before the commission.',
    material: '100% ring-spun Supima cotton, 260gsm',
    sizes: [
      { size: 'S', in_stock: true },
      { size: 'M', in_stock: true },
      { size: 'L', in_stock: true },
      { size: 'XL', in_stock: true },
      { size: 'XXL', in_stock: true }
    ],
    colorways: [
      { name: 'Stone', hex: '#EDECE6' },
      { name: 'Ink', hex: '#17140F' },
      { name: 'Dust', hex: '#8B887F' }
    ],
    price: 36,
    is_commission: false
  }
];

/* Wing metadata */
const WINGS = {
  anime: {
    number: 'Wing I',
    title: 'Anime',
    accent: '#D62839',
    statement: 'Bold lines, louder stories. Graphic prints drawn from the visual language of manga and anime — stamp-red ink, halftone dots, kinetic energy frozen on cotton.'
  },
  cinema: {
    number: 'Wing II',
    title: 'Cinema',
    accent: '#E3A008',
    statement: 'Every great film leaves one frame burned into memory. These pieces live in that moment — the light just before the cut, the title card, the reel running out.'
  },
  commissions: {
    number: 'Wing III',
    title: 'Commissions',
    accent: '#2C4A6E',
    statement: 'Your words, your line, your piece. Commission a garment with text that means something to you — set in considered type, pressed into premium cotton.'
  },
  permanent: {
    number: '',
    title: 'Permanent Collection',
    accent: '#B08D57',
    statement: 'The canvas itself. Premium blanks with no design and no compromise on material — the foundation everything else is built on.'
  }
};

/* Medium labels */
const MEDIUMS = {
  tee: 'Tee',
  hoodie: 'Hoodie',
  crewneck: 'Crewneck',
  long_sleeve: 'Long Sleeve'
};
