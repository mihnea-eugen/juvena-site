/**
 * JSON-LD Schema helpers pentru Juvena Timișoara
 * Optimizat pentru: SEO clasic + GEO (Generative Engine Optimization) + AI Overviews + E-E-A-T
 *
 * Tipuri implementate:
 *  MedicalBusiness, LocalBusiness, WebSite, BreadcrumbList
 *  MedicalProcedure (cu procedureDuration, performer, recognizingAuthority)
 *  MedicalWebPage (cu Speakable, reviewedBy, lastReviewed)
 *  Physician (cu knowsAbout, sameAs, jobTitle)
 *  FAQPage, HowTo
 */

const BASE_URL = "https://juvena-timisoara.ro";
const ORG_NAME = "Juvena – Clinică Dermatologie Estetică & Medicală Timișoara";
const DATE_PUBLISHED = "2024-06-01";
const DATE_MODIFIED = "2026-05-01";

const ADDRESS = {
  "@type": "PostalAddress",
  streetAddress: "TBD", // completați după aprobare
  addressLocality: "Timișoara",
  addressRegion: "Timiș",
  postalCode: "300000",
  addressCountry: "RO",
};

// ─── Durată proceduri (ISO 8601 interval: PTxM/PTyM) ───────────────────────
// Folosit automat în schemaMedicalProcedure pe baza ultimului segment URL
export const PROCEDURE_DURATIONS: Record<string, string> = {
  "acid-hialuronic":        "PT15M/PT30M",
  "toxina-botulinica":      "PT15M/PT30M",
  "skinbooster":            "PT20M/PT40M",
  "biostimulatori-colagen": "PT30M/PT60M",
  "lipoliza-injectabila":   "PT30M/PT60M",
  "terapia-vampir-prp":     "PT45M/PT75M",
  "hiperhidroza":           "PT20M/PT30M",
  "nefertiti-lift":         "PT20M/PT30M",
  "face-slimming":          "PT20M/PT30M",
  "hialuronidaza":          "PT15M/PT30M",
  "consult-dermatologic":   "PT20M/PT30M",
  "dermatoscopie":          "PT20M/PT30M",
  "electrocauterizare":     "PT20M/PT45M",
  "curatare-dermatologica": "PT45M/PT75M",
  "dermapen":               "PT45M/PT60M",
  "peeling-chimic":         "PT30M/PT45M",
  "winther-glow":           "PT45M/PT60M",
};

// ─── Domenii knowsAbout (folosit pe Organization și Physician) ──────────────
export const KNOWS_ABOUT_CLINIC = [
  "Dermatologie Estetică",
  "Dermatologie Medicală",
  "Acid Hialuronic",
  "Toxină Botulinică",
  "Skinbooster",
  "Biostimulatori Colagen",
  "Terapia Vampir PRP",
  "Lipoliză Injectabilă",
  "Dermatoscopie Digitală",
  "Hiperhidroză",
  "Nefertiti Lift",
  "Face Slimming",
  "Peeling Chimic",
  "Dermapen",
  "Electrocauterizare",
];

// ═══════════════════════════════════════════════════════════════════════════
// ORGANIZATION (MedicalBusiness)
// ═══════════════════════════════════════════════════════════════════════════
export function schemaOrganization() {
  return {
    "@context": "https://schema.org",
    "@type": ["MedicalBusiness", "LocalBusiness"],
    "@id": `${BASE_URL}/#organization`,
    name: ORG_NAME,
    alternateName: "Juvena Timișoara",
    url: BASE_URL,
    logo: {
      "@type": "ImageObject",
      url: `${BASE_URL}/images/logo.png`,
      width: 520,
      height: 485,
    },
    image: `${BASE_URL}/images/og-image.jpg`,
    description:
      "Clinică privată de dermatologie estetică și medicală în Timișoara. Acid hialuronic, toxină botulinică, biostimulatori colagen, dermatoscopie digitală.",
    address: ADDRESS,
    telephone: "TBD",
    email: "TBD",
    priceRange: "200 RON – 2.500 RON",
    currenciesAccepted: "RON",
    paymentAccepted: "Cash, Card",
    foundingDate: "2019",
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:00",
        closes: "19:00",
      },
    ],
    medicalSpecialty: [
      "https://schema.org/Dermatology",
      "https://schema.org/PlasticSurgery",
    ],
    knowsAbout: KNOWS_ABOUT_CLINIC,
    areaServed: {
      "@type": "City",
      name: "Timișoara",
      sameAs: "https://www.wikidata.org/wiki/Q83404",
    },
    hasMap: "TBD",
    sameAs: [
      "https://www.facebook.com/juvena.timisoara",
      "https://www.instagram.com/juvena.timisoara",
    ],
  };
}

// ═══════════════════════════════════════════════════════════════════════════
// WEBSITE
// ═══════════════════════════════════════════════════════════════════════════
export function schemaWebsite() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${BASE_URL}/#website`,
    url: BASE_URL,
    name: ORG_NAME,
    inLanguage: "ro-RO",
    publisher: {
      "@id": `${BASE_URL}/#organization`,
    },
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${BASE_URL}/preturi/?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };
}

// ═══════════════════════════════════════════════════════════════════════════
// BREADCRUMB
// ═══════════════════════════════════════════════════════════════════════════
export function schemaBreadcrumb(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

// ═══════════════════════════════════════════════════════════════════════════
// MEDICAL WEB PAGE — cu Speakable pentru AI Overviews / GEO
// ═══════════════════════════════════════════════════════════════════════════
export type MedicalWebPageInput = {
  name: string;
  description: string;
  url: string;
  datePublished?: string;
  dateModified?: string;
  speakableSelectors?: string[];
};

export function schemaMedicalWebPage(p: MedicalWebPageInput) {
  return {
    "@context": "https://schema.org",
    "@type": "MedicalWebPage",
    "@id": `${p.url}#webpage`,
    name: p.name,
    description: p.description,
    url: p.url,
    inLanguage: "ro-RO",
    isPartOf: { "@id": `${BASE_URL}/#website` },
    about: { "@id": `${BASE_URL}/#organization` },
    datePublished: p.datePublished ?? DATE_PUBLISHED,
    dateModified: p.dateModified ?? DATE_MODIFIED,
    author: { "@id": `${BASE_URL}/#organization` },
    reviewedBy: { "@id": `${BASE_URL}/#organization` },
    lastReviewed: DATE_MODIFIED,
    medicalAudience: {
      "@type": "MedicalAudience",
      audienceType: "Patient",
      geographicArea: {
        "@type": "City",
        name: "Timișoara",
      },
    },
    // Speakable: indică AI-urilor (Google, Perplexity, ChatGPT) ce secțiuni să citeze
    speakable: {
      "@type": "SpeakableSpecification",
      cssSelector: p.speakableSelectors ?? [
        "h1",
        "#treatment-description",
        "#treatment-indications",
        "#treatment-faq",
      ],
    },
  };
}

// ═══════════════════════════════════════════════════════════════════════════
// MEDICAL PROCEDURE — cu procedureDuration, performer, recognizingAuthority
// ═══════════════════════════════════════════════════════════════════════════
export type ProcedureInput = {
  name: string;
  description: string;
  url: string;
  price?: string;
  bodyLocation?: string;
  procedureType?: string;
  followup?: string;
  preparation?: string;
  howPerformed?: string;
};

export function schemaMedicalProcedure(p: ProcedureInput) {
  // Extrage slug-ul din URL pentru duration lookup automat
  const slug = p.url.replace(/\/$/, "").split("/").pop() ?? "";
  const duration = PROCEDURE_DURATIONS[slug];

  return {
    "@context": "https://schema.org",
    "@type": "MedicalProcedure",
    "@id": `${p.url}#procedure`,
    name: p.name,
    description: p.description,
    url: p.url,
    procedureType: p.procedureType ?? "https://schema.org/TherapeuticProcedure",
    bodyLocation: p.bodyLocation ?? "față",
    status: "https://schema.org/EvidenceLevelA",
    howPerformed: p.howPerformed ?? p.description,
    ...(duration && { procedureDuration: duration }),
    followup: p.followup,
    preparation: p.preparation,
    ...(p.price && {
      offers: {
        "@type": "Offer",
        price: p.price,
        priceCurrency: "RON",
        availability: "https://schema.org/InStock",
        seller: { "@id": `${BASE_URL}/#organization` },
      },
    }),
    performer: { "@id": `${BASE_URL}/#organization` },
    performedBy: { "@id": `${BASE_URL}/#organization` },
    recognizingAuthority: {
      "@type": "Organization",
      name: "Colegiul Medicilor din România",
      url: "https://cmr.ro",
    },
  };
}

// ═══════════════════════════════════════════════════════════════════════════
// PHYSICIAN — E-E-A-T: knowsAbout, sameAs, jobTitle
// ═══════════════════════════════════════════════════════════════════════════
export type PhysicianInput = {
  name: string;
  description: string;
  image: string;
  url: string;
  specialty: string;
  jobTitle?: string;
  sameAs?: string[];
};

export function schemaPhysician(p: PhysicianInput) {
  const slug = p.url.replace(/\/$/, "").split("/").pop() ?? "medic";
  return {
    "@context": "https://schema.org",
    "@type": "Physician",
    "@id": `${BASE_URL}/#physician-${slug}`,
    name: p.name,
    honorificPrefix: "Dr.",
    jobTitle: p.jobTitle ?? p.specialty,
    description: p.description,
    image: {
      "@type": "ImageObject",
      url: `${BASE_URL}${p.image}`,
    },
    url: `${BASE_URL}${p.url}`,
    medicalSpecialty: {
      "@type": "MedicalSpecialty",
      name: p.specialty,
    },
    worksFor: { "@id": `${BASE_URL}/#organization` },
    address: ADDRESS,
    knowsAbout: KNOWS_ABOUT_CLINIC,
    // sameAs: completați cu URL-uri reale după ce profilurile sunt active
    // ex: "https://www.medatlas.ro/clinici/...", "https://med.ro/..."
    sameAs: p.sameAs ?? [],
  };
}

// ═══════════════════════════════════════════════════════════════════════════
// HOW TO — pentru pașii procedurilor (boost GEO / featured snippets)
// ═══════════════════════════════════════════════════════════════════════════
export function schemaHowTo(name: string, steps: string[]) {
  return {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: `Cum se realizează ${name} la Juvena Timișoara`,
    inLanguage: "ro-RO",
    estimatedCost: {
      "@type": "MonetaryAmount",
      currency: "RON",
      minValue: 200,
    },
    tool: [
      {
        "@type": "HowToTool",
        name: "Cabinet medical specializat",
      },
    ],
    supply: [
      {
        "@type": "HowToSupply",
        name: "Produse medicale certificate CE",
      },
    ],
    step: steps.map((text, i) => ({
      "@type": "HowToStep",
      position: i + 1,
      name: `Pasul ${i + 1}`,
      text,
    })),
    performTime: PROCEDURE_DURATIONS[
      name
        .toLowerCase()
        .normalize("NFD")
        .replace(/[̀-ͯ]/g, "")
        .replace(/\s+/g, "-")
    ],
  };
}

// ═══════════════════════════════════════════════════════════════════════════
// FAQ PAGE
// ═══════════════════════════════════════════════════════════════════════════
export type FAQItem = {
  question: string;
  answer: string;
};

export function schemaFAQ(items: FAQItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

// ═══════════════════════════════════════════════════════════════════════════
// FAQ PREDEFINITE PER PROCEDURĂ
// ═══════════════════════════════════════════════════════════════════════════

export const FAQ_ACID_HIALURONIC: FAQItem[] = [
  {
    question: "Cât durează efectul acidului hialuronic pentru buze?",
    answer:
      "Efectul augmentării buzelor cu acid hialuronic durează în medie 6-12 luni, în funcție de tipul de produs utilizat, metabolismul pacientului și zona tratată.",
  },
  {
    question: "Cât durează procedura de acid hialuronic?",
    answer:
      "Procedura de injectare a acidului hialuronic durează între 15 și 30 de minute. Rezultatele sunt vizibile imediat, cu o îmbunătățire progresivă în primele 2 săptămâni.",
  },
  {
    question: "Există contraindicații pentru acid hialuronic?",
    answer:
      "Contraindicațiile includ sarcina, alăptarea, tulburări de coagulare, infecții active la locul injectării și alergii cunoscute la ingredientele produsului. Medicul va evalua eligibilitatea la consultație.",
  },
  {
    question: "Se poate dizolva acidul hialuronic dacă nu sunt mulțumit?",
    answer:
      "Da. Acidul hialuronic poate fi dizolvat în orice moment cu hialuronidază, o enzimă care descompune produsul injectat în câteva ore.",
  },
  {
    question: "Cât costă acidul hialuronic la Juvena Timișoara?",
    answer:
      "Prețurile pornesc de la 800 RON pentru augmentare buze 0,5 ml și ajung la 1.400 RON pe fiolă pentru celelalte zone (pomeți, bărbie, cearcăne). Consultația este inclusă în prețul procedurii.",
  },
];

export const FAQ_TOXINA_BOTULINICA: FAQItem[] = [
  {
    question: "După cât timp se văd rezultatele injectărilor cu toxină botulinică?",
    answer:
      "Efectul toxinei botulinice apare gradual în 3-7 zile și atinge maximul la 2 săptămâni după procedură.",
  },
  {
    question: "Cât durează efectul toxinei botulinice?",
    answer:
      "Efectul durează în medie 3-6 luni. Cu tratamente repetate, intervalul dintre ședințe tinde să se prelungească.",
  },
  {
    question: "Există perioadă de recuperare după botox?",
    answer:
      "Nu există timp de recuperare. Se recomandă evitarea activității fizice intense, a salinei și a soarelui timp de 24 de ore.",
  },
  {
    question: "Ce zone pot fi tratate cu toxina botulinică?",
    answer:
      "Principalele zone tratate sunt: ridurile frunții, glabela (între sprâncene), ridurile perioculare (laba gâștei), ridurile nazale. Se poate realiza și babybotox, face slimming (maseter) și Nefertiti lift (gât/mandibulă).",
  },
];

export const FAQ_SKINBOOSTER: FAQItem[] = [
  {
    question: "Care este diferența dintre skinbooster și acid hialuronic clasic?",
    answer:
      "Skinboosterul hidratează pielea în profunzime și îi îmbunătățește calitatea, elasticitatea și luminozitatea, fără a adăuga volum. Acidul hialuronic clasic este utilizat pentru conturare și volumizare.",
  },
  {
    question: "Câte ședințe de skinbooster sunt necesare?",
    answer:
      "Protocolul standard presupune 2-3 ședințe la interval de 4 săptămâni, urmate de o ședință de întreținere la 6-12 luni.",
  },
  {
    question: "Ce produse de skinbooster se folosesc la Juvena Timișoara?",
    answer:
      "Folosim produse premium certificate CE: Profhilo, Restylane Skinbooster, Redensity 1 și Mesoheal, selectate în funcție de nevoile specifice ale pielii fiecărui pacient.",
  },
];

export const FAQ_DERMATOSCOPIE: FAQItem[] = [
  {
    question: "Ce este dermatoscopia digitală?",
    answer:
      "Dermatoscopia digitală este o metodă non-invazivă de analiză a leziunilor pigmentare (alunițe) cu ajutorul unui dermatoscop digital, care mărește leziunea și permite identificarea precoce a semnelor suspecte.",
  },
  {
    question: "Cât durează un consult cu dermatoscopie?",
    answer:
      "Un consult dermatologic cu dermatoscopie digitală durează în medie 20-30 de minute, în funcție de numărul leziunilor evaluate.",
  },
  {
    question: "Cât de des trebuie să fac dermatoscopie?",
    answer:
      "Persoanele fără factori de risc sunt recomandate să efectueze un control anual. Cele cu antecedente familiale de melanom sau cu alunițe numeroase ar trebui să consulte medicul la 6 luni.",
  },
];

export const FAQ_BIOSTIMULATORI: FAQItem[] = [
  {
    question: "Ce sunt biostimulatoarele de colagen?",
    answer:
      "Biostimulatoarele de colagen (HarmoniCa, Sculptra) sunt substanțe injectabile care stimulează producția naturală de colagen a pielii, oferind o rejuvenare profundă și naturală cu efecte de lungă durată de 12-24 luni.",
  },
  {
    question: "Câte ședințe de biostimulatori de colagen sunt necesare?",
    answer:
      "Protocolul standard presupune 2-3 ședințe la interval de 4-6 săptămâni. Rezultatele se instalează progresiv pe parcursul a 3-6 luni.",
  },
];

export const FAQ_PRP: FAQItem[] = [
  {
    question: "Ce este Terapia Vampir PRP?",
    answer:
      "Terapia Vampir (PRP) utilizează plasma bogată în trombocite extrasă din propriul sânge al pacientului. Injectată la nivelul feței, gâtului sau scalpului, stimulează regenerarea celulară și producția de colagen.",
  },
  {
    question: "Câte ședințe PRP sunt necesare?",
    answer:
      "Protocolul inițial presupune 3 ședințe la interval de 4 săptămâni. O ședință de întreținere este recomandată la 6-12 luni.",
  },
];

export const FAQ_PEELING: FAQItem[] = [
  {
    question: "Ce probleme tratează peelingul chimic?",
    answer:
      "Peelingul chimic tratează eficient petele pigmentare, îmbătrânirea pielii, ridurile fine, acneea și cicatricile post-acnee, oferind luminozitate și îmbunătățind textura pielii.",
  },
  {
    question: "Există perioadă de recuperare după peeling chimic?",
    answer:
      "Depinde de tipul de peeling. Peelingurile superficiale (Glow Peel) nu necesită recuperare. Magic Peel poate implica o descuamare ușoară 2-5 zile.",
  },
];
