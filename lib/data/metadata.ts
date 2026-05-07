export type PageMeta = {
  slug: string;
  title: string;
  description: string;
  canonical: string;
};

const BASE_URL = "https://juvena-timisoara.ro";

export const META: Record<string, PageMeta> = {
  home: {
    slug: "/",
    title: "Juvena Timișoara – Clinică Dermatologie Estetică & Medicală",
    description:
      "Clinică de dermatologie estetică și medicală în Timișoara. Acid hialuronic, toxină botulinică, skinbooster, dermatoscopie digitală. Programări online.",
    canonical: `${BASE_URL}/`,
  },
  "despre-noi": {
    slug: "/despre-noi/",
    title: "Despre Juvena – Clinică Estetică Timișoara",
    description:
      "Povestea clinicii Juvena din Timișoara. Echipă de medici specializați în dermatologie estetică și medicală, aparatură modernă, rezultate naturale.",
    canonical: `${BASE_URL}/despre-noi/`,
  },
  medici: {
    slug: "/medici/",
    title: "Medicii Noștri – Dermatologi & Esteticieni Timișoara | Juvena",
    description:
      "Cunoaște echipa Juvena Timișoara: medici dermatologi și esteticieni cu experiență în tratamente injectabile, dermatoscopie și îngrijire avansată a pielii.",
    canonical: `${BASE_URL}/medici/`,
  },
  preturi: {
    slug: "/preturi/",
    title: "Prețuri Tratamente Estetice Timișoara 2025 | Juvena",
    description:
      "Lista completă de prețuri pentru acid hialuronic, toxină botulinică, skinbooster, peeling chimic și dermatologie medicală la Juvena Timișoara.",
    canonical: `${BASE_URL}/preturi/`,
  },
  contact: {
    slug: "/contact/",
    title: "Contact & Programări Juvena Timișoara",
    description:
      "Programează-te la Juvena Timișoara. Adresă, telefon, email și formular de contact. Consultații dermatologice și estetice disponibile.",
    canonical: `${BASE_URL}/contact/`,
  },

  // Categorii
  "dermatologie-estetica": {
    slug: "/dermatologie-estetica/",
    title: "Dermatologie Estetică Timișoara – Acid Hialuronic & Botox | Juvena",
    description:
      "Tratamente injectabile premium în Timișoara: acid hialuronic, toxină botulinică, biostimulatori de colagen, lipoliză, skinbooster și PRP. Medici specializați.",
    canonical: `${BASE_URL}/dermatologie-estetica/`,
  },
  "dermatologie-medicala": {
    slug: "/dermatologie-medicala/",
    title: "Dermatologie Medicală Timișoara – Consult & Dermatoscopie | Juvena",
    description:
      "Consultații dermatologice, dermatoscopie digitală pentru analiza alunițelor, mici intervenții și electrocauterizare la Juvena Timișoara.",
    canonical: `${BASE_URL}/dermatologie-medicala/`,
  },
  "tratamente-faciale": {
    slug: "/tratamente-faciale/",
    title: "Tratamente Faciale Timișoara – Peeling & Curățare | Juvena",
    description:
      "Curățare dermatologică profesională, peeling chimic, terapia Vampir cu Dermapen și Winther Glow la clinica Juvena din Timișoara.",
    canonical: `${BASE_URL}/tratamente-faciale/`,
  },

  // Tratamente – Dermatologie Estetică
  "acid-hialuronic": {
    slug: "/dermatologie-estetica/acid-hialuronic/",
    title: "Acid Hialuronic Timișoara – Buze, Pomeți, Cearcăne | Juvena",
    description:
      "Augmentare buze, volumizare frunte, corecție pomeți și cearcăne cu acid hialuronic la Juvena Timișoara. Rezultate naturale, medic specialist.",
    canonical: `${BASE_URL}/dermatologie-estetica/acid-hialuronic/`,
  },
  "toxina-botulinica": {
    slug: "/dermatologie-estetica/toxina-botulinica/",
    title: "Toxină Botulinică Timișoara – Riduri & Botox | Juvena",
    description:
      "Tratament cu toxină botulinică pentru riduri frunte, glabelă și periocular. Babybotox, face slimming și Nefertiti lift la Juvena Timișoara.",
    canonical: `${BASE_URL}/dermatologie-estetica/toxina-botulinica/`,
  },
  "biostimulatori-colagen": {
    slug: "/dermatologie-estetica/biostimulatori-colagen/",
    title: "Biostimulatori Colagen Timișoara – HarmoniCa & Sculptra | Juvena",
    description:
      "Stimulează producția naturală de colagen cu HarmoniCa și Sculptra la Juvena Timișoara. Rejuvenare facială profundă, efecte de lungă durată.",
    canonical: `${BASE_URL}/dermatologie-estetica/biostimulatori-colagen/`,
  },
  "lipóliza-injectabila": {
    slug: "/dermatologie-estetica/lipoliza-injectabila/",
    title: "Lipoliză Injectabilă Timișoara – Lemon Bottle & Aqualix | Juvena",
    description:
      "Reducerea depozitelor de grăsime localizată cu Lemon Bottle și Aqualix. Tratament non-chirurgical disponibil la Juvena Timișoara.",
    canonical: `${BASE_URL}/dermatologie-estetica/lipoliza-injectabila/`,
  },
  "terapia-vampir-prp": {
    slug: "/dermatologie-estetica/terapia-vampir-prp/",
    title: "Terapia Vampir PRP Timișoara – Facial, Scalp, Corp | Juvena",
    description:
      "Rejuvenare cu plasma bogată în trombocite (PRP) pentru față, gât, decolteu și scalp la Juvena Timișoara. Stimulează regenerarea naturală a pielii.",
    canonical: `${BASE_URL}/dermatologie-estetica/terapia-vampir-prp/`,
  },
  skinbooster: {
    slug: "/dermatologie-estetica/skinbooster/",
    title: "Skinbooster Timișoara – Profhilo, Restylane, Redensity | Juvena",
    description:
      "Hidratare profundă și revitalizare cutanată cu skinbooster Profhilo, Restylane, Redensity 1 și Mesoheal la Juvena Timișoara.",
    canonical: `${BASE_URL}/dermatologie-estetica/skinbooster/`,
  },
  "hiperhidroza": {
    slug: "/dermatologie-estetica/hiperhidroza/",
    title: "Tratament Hiperhidroză Timișoara – Toxină Botulinică | Juvena",
    description:
      "Soluție eficientă pentru transpirație excesivă axilară, palmară și plantară cu toxină botulinică la clinica Juvena din Timișoara.",
    canonical: `${BASE_URL}/dermatologie-estetica/hiperhidroza/`,
  },
  "nefertiti-lift": {
    slug: "/dermatologie-estetica/nefertiti-lift/",
    title: "Nefertiti Lift Timișoara – Lifting Gât Fără Bisturiu | Juvena",
    description:
      "Redefinirea conturului gâtului și mandibulei cu toxină botulinică prin tehnica Nefertiti lift la Juvena Timișoara. Efect de lifting non-invaziv.",
    canonical: `${BASE_URL}/dermatologie-estetica/nefertiti-lift/`,
  },
  "face-slimming": {
    slug: "/dermatologie-estetica/face-slimming/",
    title: "Face Slimming & Bruxism Timișoara – Maseter | Juvena",
    description:
      "Subțierea feței prin relaxarea mușchiului maseter cu toxină botulinică. Tratament pentru bruxism și remodelare facială la Juvena Timișoara.",
    canonical: `${BASE_URL}/dermatologie-estetica/face-slimming/`,
  },
  hialuronidaza: {
    slug: "/dermatologie-estetica/hialuronidaza/",
    title: "Hialuronidază Timișoara – Dizolvare Acid Hialuronic | Juvena",
    description:
      "Corecția rezultatelor nesatisfăcătoare prin dizolvarea acidului hialuronic cu hialuronidază la Juvena Timișoara. Procedură sigură și rapidă.",
    canonical: `${BASE_URL}/dermatologie-estetica/hialuronidaza/`,
  },

  // Tratamente – Dermatologie Medicală
  "consult-dermatologic": {
    slug: "/dermatologie-medicala/consult-dermatologic/",
    title: "Consult Dermatologic Timișoara – Programare Rapidă | Juvena",
    description:
      "Consultație dermatologică completă la Juvena Timișoara. Diagnostic precis pentru afecțiuni ale pielii, tratament personalizat și dermatoscopie digitală.",
    canonical: `${BASE_URL}/dermatologie-medicala/consult-dermatologic/`,
  },
  dermatoscopie: {
    slug: "/dermatologie-medicala/dermatoscopie/",
    title: "Dermatoscopie Digitală Timișoara – Analiză Alunițe | Juvena",
    description:
      "Analiză digitală a alunițelor și leziunilor cutanate prin dermatoscopie la Juvena Timișoara. Depistarea precoce a leziunilor suspecte.",
    canonical: `${BASE_URL}/dermatologie-medicala/dermatoscopie/`,
  },
  electrocauterizare: {
    slug: "/dermatologie-medicala/electrocauterizare/",
    title: "Electrocauterizare Timișoara – Xantelasme & Papiloame | Juvena",
    description:
      "Îndepărtarea xantelasmelor, papiloamelor și altor leziuni cutanate benigne prin electrocauterizare la clinica Juvena din Timișoara.",
    canonical: `${BASE_URL}/dermatologie-medicala/electrocauterizare/`,
  },

  // Tratamente – Faciale
  "curatare-dermatologica": {
    slug: "/tratamente-faciale/curatare-dermatologica/",
    title: "Curățare Dermatologică Profesională Timișoara | Juvena",
    description:
      "Curățare facială profundă realizată de medic dermatolog la Juvena Timișoara. Tratament pentru ten mixt, gras, cu imperfecțiuni sau puncte negre.",
    canonical: `${BASE_URL}/tratamente-faciale/curatare-dermatologica/`,
  },
  dermapen: {
    slug: "/tratamente-faciale/dermapen/",
    title: "Terapia Vampir Dermapen Timișoara – PRP Facial | Juvena",
    description:
      "Microneedling combinat cu PRP pentru față, gât, decolteu și tratamentul vergeturilor și cicatricilor la Juvena Timișoara.",
    canonical: `${BASE_URL}/tratamente-faciale/dermapen/`,
  },
  "peeling-chimic": {
    slug: "/tratamente-faciale/peeling-chimic/",
    title: "Peeling Chimic Timișoara – Glow Peel & Magic Peel | Juvena",
    description:
      "Peeling chimic pentru luminozitate, anti-aging și reducerea petelor pigmentare. Glow Peel și Magic Peel disponibile la Juvena Timișoara.",
    canonical: `${BASE_URL}/tratamente-faciale/peeling-chimic/`,
  },
  "winther-glow": {
    slug: "/tratamente-faciale/winther-glow/",
    title: "Winther Glow Timișoara – Tratament Hidratare Sezonier | Juvena",
    description:
      "Tratament intensiv de hidratare și revigorare a pielii pentru sezonul rece. Winther Glow disponibil la clinica Juvena din Timișoara.",
    canonical: `${BASE_URL}/tratamente-faciale/winther-glow/`,
  },
};

export function getMeta(key: string): PageMeta | undefined {
  return META[key];
}
