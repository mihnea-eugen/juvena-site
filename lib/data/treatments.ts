export type Treatment = {
  name: string;
  detail?: string;
  price: string;
  slug?: string;
};

export type Category = {
  name: string;
  slug: string;
  description: string;
  treatments: Treatment[];
};

export const CATEGORIES: Category[] = [
  {
    name: "Dermatologie Estetică",
    slug: "dermatologie-estetica",
    description: "Tratamente injectabile avansate: acid hialuronic, toxină botulinică, biostitmulatoare de colagen, lipoliză și skinbooster.",
    treatments: [
      { name: "Acid Hialuronic – Augmentare buze", detail: "0,5 ml", price: "800" },
      { name: "Acid Hialuronic – Augmentare buze", detail: "1 ml", price: "1.200" },
      { name: "Acid Hialuronic – Volumizare frunte", detail: "1 ml", price: "1.400" },
      { name: "Acid Hialuronic – Augmentare bărbie", detail: "1 ml", price: "1.400" },
      { name: "Acid Hialuronic – Corecție pomeți", detail: "1 ml", price: "1.400" },
      { name: "Acid Hialuronic – Corecție cearcăne", detail: "1 ml", price: "1.400" },
      { name: "Acid Hialuronic – Augmentare pomeți", detail: "1 ml", price: "1.400" },
      { name: "Acid Hialuronic – Șanțuri nazolabiale / riduri", detail: "1 ml", price: "1.400" },
      { name: "Acid Hialuronic – Corecția nasului", detail: "1 ml", price: "1.400" },
      { name: "Acid Hialuronic – Conturare mandibulă", detail: "1 ml", price: "1.400" },
      { name: "Acid Hialuronic – Corecție cicatrici acneice", detail: "1 ml", price: "1.400" },
      { name: "Acid Hialuronic – Augmentare tâmple", detail: "1 ml", price: "1.400" },
      { name: "Acid Hialuronic – Reîntinerire mâini", detail: "1 ml", price: "1.400" },
      { name: "Toxină Botulinică – 1 zonă", detail: "Glabelă / frunte / periocular", price: "600" },
      { name: "Toxină Botulinică – 2 zone", price: "900" },
      { name: "Toxină Botulinică – 3 zone", price: "1.200" },
      { name: "Toxină Botulinică – 4 zone", price: "1.500" },
      { name: "Babybotox – 1 zonă", detail: "Doze reduse, efect preventiv", price: "300" },
      { name: "Gummy smile / Bunny lines", price: "600" },
      { name: "Face Slimming – mușchiul maseter", detail: "Bruxism", price: "1.200" },
      { name: "Nefertiti lift – riduri gât", price: "1.200" },
      { name: "Hiperhidroză (axilă / palmar / plantar)", price: "1.800 – 2.000" },
      { name: "HarmoniCa – biostimulator colagen", price: "2.000" },
      { name: "Sculptra – biostimulator colagen", price: "2.500" },
      { name: "Lemon Bottle – lipoliză injectabilă", detail: "per sesiune", price: "600" },
      { name: "Aqualix – lipoliză injectabilă", detail: "per sesiune", price: "600" },
      { name: "Terapia Vampir PRP", detail: "Facial / Corporal / Scalp – per zonă", price: "750" },
      { name: "Skinbooster – Redensity 1", price: "1.500" },
      { name: "Skinbooster – Profhilo", price: "1.400" },
      { name: "Skinbooster – Mesoheal", price: "1.400" },
      { name: "Skinbooster – Restylane", price: "1.400" },
      { name: "Hialuronidază", detail: "Dizolvare acid hialuronic", price: "600" },
    ],
  },
  {
    name: "Dermatologie Medicală",
    slug: "dermatologie-medicala",
    description: "Consultații dermatologice, dermatoscopie digitală, mici intervenții și electrocauterizare. Diagnostic precis, tratament personalizat.",
    treatments: [
      { name: "Consult Dermatologic", price: "200" },
      { name: "Control Dermatologic", price: "100" },
      { name: "Dermatoscopie", detail: "Analiză alunițe / leziuni", price: "200" },
      { name: "Mici intervenții dermatologice", price: "100 – 500" },
      { name: "Electrocauterizare xantelasme / papiloame", price: "300 – 1.000" },
    ],
  },
  {
    name: "Tratamente Faciale",
    slug: "tratamente-faciale",
    description: "Curățare dermatologică profesională, terapie Vampir cu Dermapen, peeling chimic. Proceduri non-invazive pentru ten radiant.",
    treatments: [
      { name: "Curățare Dermatologică", price: "250" },
      { name: "Terapia Vampir Dermapen – față / gât / decolteu", detail: "per zonă", price: "750" },
      { name: "Terapia Vampir Dermapen – corporal vergeturi / cicatrici", detail: "per zonă", price: "750" },
      { name: "Glow Peel", detail: "Peeling chimic luminozitate", price: "450" },
      { name: "Magic Peel", detail: "Peeling anti-aging & anti-pete", price: "600" },
      { name: "Winther Glow", detail: "Tratament sezonier hidratare", price: "600" },
    ],
  },
];

export const ALL_TREATMENTS = CATEGORIES.flatMap((c) => c.treatments);
