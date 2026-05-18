export type Treatment = {
  name: string;
  detail?: string;
  price: string;
  slug?: string;
};

export type TreatmentGroup = {
  label: string;     // ex: "Acid Hialuronic"
  slug?: string;     // link spre pagina tratamentului
  treatments: Treatment[];
};

export type Category = {
  name: string;
  slug: string;
  description: string;
  groups: TreatmentGroup[];
};

// Utilitar pentru compatibilitate cu paginile de tratament
export function flatTreatments(cat: Category): Treatment[] {
  return cat.groups.flatMap((g) => g.treatments);
}

export const CATEGORIES: Category[] = [
  {
    name: "Dermatologie Estetică",
    slug: "dermatologie-estetica",
    description:
      "Tratamente injectabile avansate realizate de medici specializați. Rezultate naturale, produse certificate CE.",
    groups: [
      {
        label: "Acid Hialuronic",
        slug: "dermatologie-estetica/injectari-acid-hialuronic",
        treatments: [
          { name: "Augmentare buze",             detail: "0,5 ml",  price: "800" },
          { name: "Augmentare buze",             detail: "1 ml",    price: "1.200" },
          { name: "Volumizare frunte",           detail: "1 ml",    price: "1.400" },
          { name: "Augmentare bărbie",           detail: "1 ml",    price: "1.400" },
          { name: "Corecție pomeți",             detail: "1 ml",    price: "1.400" },
          { name: "Augmentare pomeți",           detail: "1 ml",    price: "1.400" },
          { name: "Corecție cearcăne",           detail: "1 ml",    price: "1.400" },
          { name: "Șanțuri nazolabiale / riduri",detail: "1 ml",    price: "1.400" },
          { name: "Corecția nasului",            detail: "1 ml",    price: "1.400" },
          { name: "Conturare mandibulă",         detail: "1 ml",    price: "1.400" },
          { name: "Corecție cicatrici acneice",  detail: "1 ml",    price: "1.400" },
          { name: "Augmentare tâmple",           detail: "1 ml",    price: "1.400" },
          { name: "Reîntinerire mâini",          detail: "1 ml",    price: "1.400" },
        ],
      },
      {
        label: "Toxină Botulinică",
        slug: "dermatologie-estetica/injectari-toxina-botulinica",
        treatments: [
          { name: "1 zonă",      detail: "Glabelă, frunte sau periocular", price: "600" },
          { name: "2 zone",                                                 price: "900" },
          { name: "3 zone",                                                 price: "1.200" },
          { name: "4 zone",                                                 price: "1.500" },
          { name: "Babybotox",   detail: "Doze reduse, efect preventiv",   price: "300" },
          { name: "Gummy smile / Bunny lines",                              price: "600" },
          { name: "Nefertiti Lift",detail: "Lifting gât & contur mandibulă",price: "1.200" },
          { name: "Hiperhidroză",  detail: "Axilă / palmar / plantar",     price: "1.800 – 2.000" },
          { name: "Face Slimming", detail: "Mușchiul maseter, bruxism",    price: "1.200" },
        ],
      },
      {
        label: "Biostimulatori Colagen",
        slug: "dermatologie-estetica/injectari-biostimulatori-colagen",
        treatments: [
          { name: "HarmoniCa", detail: "Biostimulator cu acid hialuronic", price: "2.000" },
          { name: "Sculptra",  detail: "Biostimulator cu acid polilactic",  price: "2.500" },
        ],
      },
      {
        label: "Skinbooster",
        slug: "dermatologie-estetica/injectari-skinbooster",
        treatments: [
          { name: "Profhilo",     price: "1.400" },
          { name: "Redensity 1",  price: "1.500" },
          { name: "Mesoheal",     price: "1.400" },
          { name: "Restylane",    price: "1.400" },
        ],
      },
      {
        label: "Terapia Vampir PRP",
        slug: "dermatologie-estetica/terapia-vampir-prp",
        treatments: [
          { name: "Facial / Corporal / Scalp", detail: "Per zonă", price: "750" },
        ],
      },
      {
        label: "Lipoliză Injectabilă",
        slug: "dermatologie-estetica/lipoliza-injectabila",
        treatments: [
          { name: "Lemon Bottle", detail: "Per sesiune", price: "600" },
          { name: "Aqualix",      detail: "Per sesiune", price: "600" },
        ],
      },
      {
        label: "Hialuronidază",
        slug: "dermatologie-estetica/injectari-hialuronidaza",
        treatments: [
          { name: "Dizolvare acid hialuronic", price: "600" },
        ],
      },
    ],
  },
  {
    name: "Dermatologie Medicală",
    slug: "dermatologie-medicala",
    description:
      "Consultații dermatologice, dermatoscopie digitală și mici intervenții. Diagnostic precis, tratament personalizat.",
    groups: [
      {
        label: "Consultații",
        slug: "dermatologie-medicala/consult-dermatologic",
        treatments: [
          { name: "Consult Dermatologic",  price: "200" },
          { name: "Control Dermatologic",  price: "100" },
        ],
      },
      {
        label: "Dermatoscopie",
        slug: "dermatologie-medicala/dermatoscopie",
        treatments: [
          { name: "Analiză alunițe / leziuni cutanate", price: "200" },
        ],
      },
      {
        label: "Intervenții",
        slug: "dermatologie-medicala/electrocauterizare",
        treatments: [
          { name: "Mici intervenții dermatologice",          price: "100 – 500" },
          { name: "Electrocauterizare xantelasme / papiloame", price: "300 – 1.000" },
        ],
      },
    ],
  },
  {
    name: "Tratamente Faciale",
    slug: "tratamente-faciale",
    description:
      "Proceduri non-invazive pentru ten radiant: curățare profesională, peeling chimic, microneedling cu PRP.",
    groups: [
      {
        label: "Curățare",
        slug: "tratamente-faciale/curatare-dermatologica",
        treatments: [
          { name: "Curățare Dermatologică Profesională", price: "250" },
        ],
      },
      {
        label: "Dermapen & PRP",
        slug: "tratamente-faciale/dermapen",
        treatments: [
          { name: "Față / gât / decolteu",          detail: "Per zonă", price: "750" },
          { name: "Corporal – vergeturi / cicatrici", detail: "Per zonă", price: "750" },
        ],
      },
      {
        label: "Peeling Chimic",
        slug: "tratamente-faciale/peeling-chimic",
        treatments: [
          { name: "Glow Peel",  detail: "Luminozitate & uniformizare",   price: "450" },
          { name: "Magic Peel", detail: "Anti-aging & anti-pete",        price: "600" },
        ],
      },
      {
        label: "Winther Glow",
        slug: "tratamente-faciale/winther-glow",
        treatments: [
          { name: "Tratament intensiv hidratare sezonier", price: "600" },
        ],
      },
    ],
  },
];

export const ALL_TREATMENTS = CATEGORIES.flatMap((c) => flatTreatments(c));
