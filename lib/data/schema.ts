/**
 * JSON-LD Schema helpers pentru Juvena Timișoara
 * Optimizat pentru: SEO clasic + GEO (Generative Engine Optimization) + AI Overviews + E-E-A-T
 *
 * Tipuri implementate:
 *  MedicalBusiness, LocalBusiness, WebSite, BreadcrumbList
 *  MedicalProcedure (cu procedureDuration, performer, recognizingAuthority, subjectOf)
 *  MedicalWebPage (cu Speakable, reviewedBy, lastReviewed, mainEntity, citation)
 *  Physician (cu knowsAbout, sameAs, jobTitle)
 *  FAQPage, HowTo
 *
 * GEO/AIO signals:
 *  - mainEntity: leagă MedicalWebPage de MedicalProcedure (graf semantic)
 *  - citation: surse medicale autorizate (E-E-A-T)
 *  - speakable: indică AI-urilor ce secțiuni să citeze
 *  - subjectOf: bidirectionare Procedure → WebPage
 *  - FAQ directe cu prețuri/durate/locație pentru citabilitate AI
 */

const BASE_URL = "https://juvena.ro";
const ORG_NAME = "Juvena – Clinică Dermatologie Estetică & Medicală Timișoara";
const DATE_PUBLISHED = "2024-06-01";
const DATE_MODIFIED = "2026-05-01";

const ADDRESS = {
  "@type": "PostalAddress",
  streetAddress: "Strada Arieș nr 3",
  addressLocality: "Timișoara",
  addressRegion: "Timiș",
  postalCode: "300000",
  addressCountry: "RO",
};

// ─── Surse de citare pentru E-E-A-T / GEO ─────────────────────────────────
// Adăugate în MedicalWebPage.citation → semnalizează AI-urilor că informațiile
// sunt bazate pe surse medicale autorizate (boost credibilitate + AI citation)
const CITATIONS_DERMATOLOGIE_ESTETICA = [
  {
    "@type": "CreativeWork",
    name: "European Academy of Dermatology and Venereology – Guidelines",
    url: "https://www.eadv.org/guidelines/",
  },
  {
    "@type": "CreativeWork",
    name: "Colegiul Medicilor din România",
    url: "https://cmr.ro",
  },
  {
    "@type": "CreativeWork",
    name: "Agenția Națională a Medicamentului și a Dispozitivelor Medicale – ANMDM",
    url: "https://anm.ro",
  },
];

const CITATIONS_MELANOM = [
  {
    "@type": "CreativeWork",
    name: "IARC – Skin Cancer Prevention",
    url: "https://www.iarc.who.int/",
  },
  {
    "@type": "CreativeWork",
    name: "European Academy of Dermatology – Dermoscopy Guidelines",
    url: "https://www.eadv.org/guidelines/",
  },
  {
    "@type": "CreativeWork",
    name: "Colegiul Medicilor din România",
    url: "https://cmr.ro",
  },
];

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
    telephone: "+40767203877",
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
// MEDICAL WEB PAGE — cu Speakable, mainEntity, citation pentru AI/GEO
// ═══════════════════════════════════════════════════════════════════════════
export type MedicalWebPageInput = {
  name: string;
  description: string;
  url: string;
  datePublished?: string;
  dateModified?: string;
  speakableSelectors?: string[];
  /** Slug-uri de cuvinte cheie relevante pentru pagină */
  keywords?: string;
  /** Tip de citări — "dermatologie-estetica" (default) sau "melanom" */
  citationType?: "dermatologie-estetica" | "melanom";
};

export function schemaMedicalWebPage(p: MedicalWebPageInput) {
  const citations =
    p.citationType === "melanom"
      ? CITATIONS_MELANOM
      : CITATIONS_DERMATOLOGIE_ESTETICA;

  return {
    "@context": "https://schema.org",
    "@type": "MedicalWebPage",
    "@id": `${p.url}#webpage`,
    name: p.name,
    description: p.description,
    url: p.url,
    inLanguage: "ro-RO",
    isPartOf: { "@id": `${BASE_URL}/#website` },
    // mainEntity: leagă WebPage de Procedure — graf semantic direct citabil de AI
    mainEntity: { "@id": `${p.url}#procedure` },
    // about: entitate organizație + procedura specifică
    about: [
      { "@id": `${BASE_URL}/#organization` },
      { "@id": `${p.url}#procedure` },
    ],
    datePublished: p.datePublished ?? DATE_PUBLISHED,
    dateModified: p.dateModified ?? DATE_MODIFIED,
    author: { "@id": `${BASE_URL}/#organization` },
    reviewedBy: { "@id": `${BASE_URL}/#organization` },
    lastReviewed: DATE_MODIFIED,
    ...(p.keywords && { keywords: p.keywords }),
    medicalAudience: {
      "@type": "MedicalAudience",
      audienceType: "Patient",
      geographicArea: {
        "@type": "City",
        name: "Timișoara",
      },
    },
    // citation: surse medicale autorizate → boost E-E-A-T + credibilitate AI
    citation: citations,
    // speakable: indică AI-urilor (Google, Perplexity, ChatGPT) ce secțiuni să citeze
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
// MEDICAL PROCEDURE — cu procedureDuration, performer, recognizingAuthority, subjectOf
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
    // subjectOf: leagă Procedure înapoi la WebPage (bidirectionare graf semantic)
    subjectOf: { "@id": `${p.url}#webpage` },
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
// Răspunsuri directe, cu date concrete — optimizate pentru citare AI/GEO
// ═══════════════════════════════════════════════════════════════════════════

export const FAQ_ACID_HIALURONIC: FAQItem[] = [
  {
    question: "Cât durează efectul acidului hialuronic pentru buze?",
    answer:
      "Efectul augmentării buzelor cu acid hialuronic durează în medie 6-12 luni, în funcție de tipul de produs utilizat, metabolismul pacientului și zona tratată. Produsele dense (1 ml) au de obicei durată mai lungă față de 0,5 ml.",
  },
  {
    question: "Cât durează procedura de acid hialuronic?",
    answer:
      "Injectările de acid hialuronic la Juvena Timișoara durează între 15 și 30 de minute. Rezultatele sunt vizibile imediat, cu o îmbunătățire progresivă în primele 2 săptămâni pe măsură ce produsul se integrează în țesuturi.",
  },
  {
    question: "Există contraindicații pentru acid hialuronic?",
    answer:
      "Contraindicațiile includ sarcina și alăptarea, tulburări de coagulare, tratament anticoagulant, infecții active la locul injectării și alergii cunoscute la acid hialuronic sau lidocaină. Medicul dermatolog evaluează eligibilitatea la consultația pre-procedurală.",
  },
  {
    question: "Se poate dizolva acidul hialuronic dacă nu sunt mulțumit?",
    answer:
      "Da. Acidul hialuronic poate fi dizolvat oricând cu hialuronidază, o enzimă care descompune produsul injectat în câteva ore. La Juvena Timișoara oferim și procedura de hialuronidază pentru corectarea rezultatelor nedorite.",
  },
  {
    question: "Cât costă acidul hialuronic la Juvena Timișoara?",
    answer:
      "Prețurile pentru acid hialuronic la Juvena Timișoara pornesc de la 800 RON pentru augmentare buze 0,5 ml și 1.200 RON pentru 1 ml buze. Volumizarea pomeților, bărbiei, corecția cearcănelor sau conturarea mandibulei costă 1.400 RON per ml. Consultația medicală este inclusă în tarif.",
  },
  {
    question: "Există timp de recuperare după injectările de acid hialuronic?",
    answer:
      "Nu există timp de recuperare. Pot apărea umflături ușoare sau vânătăi 24-48 ore, care dispar de la sine. Se recomandă evitarea saunei, a activității fizice intense și a expunerii la soare timp de 24 de ore după procedură.",
  },
];

export const FAQ_TOXINA_BOTULINICA: FAQItem[] = [
  {
    question: "După cât timp se văd rezultatele injectărilor cu toxină botulinică?",
    answer:
      "Efectul toxinei botulinice apare gradual în 3-7 zile după procedură și atinge maximul la 14 zile. O evaluare de control este recomandată la 2 săptămâni.",
  },
  {
    question: "Cât durează efectul toxinei botulinice?",
    answer:
      "Efectul toxinei botulinice durează în medie 3-6 luni. Cu tratamente repetate, intervalul dintre ședințe tinde să se prelungească, deoarece mușchii tratați își reduc progresiv activitatea.",
  },
  {
    question: "Există perioadă de recuperare după botox?",
    answer:
      "Nu există timp de recuperare după injecțiile cu toxină botulinică. Se recomandă evitarea activității fizice intense, a saunei, a masajului facial și a soarelui direct timp de 24 de ore.",
  },
  {
    question: "Ce zone pot fi tratate cu toxina botulinică?",
    answer:
      "Zonele tratate cu toxină botulinică la Juvena Timișoara includ: ridurile orizontale ale frunții, glabela (ridurile verticale între sprâncene), ridurile perioculare (piciorul de gâscă), bunny lines (nasul), gummy smile (expunere gingivală), face slimming (mușchiul maseter, bruxism), Nefertiti lift (gât și mandibulă) și hiperhidroză axilară sau palmară.",
  },
  {
    question: "Cât costă toxina botulinică la Juvena Timișoara?",
    answer:
      "Prețurile pentru toxina botulinică la Juvena Timișoara: o zonă (glabelă, frunte sau periocular) – 600 RON; 2 zone – 900 RON; 3 zone – 1.200 RON; 4 zone – 1.500 RON. Babybotox (doze reduse) – 300 RON pe zonă. Face slimming și Nefertiti lift – câte 1.200 RON. Hiperhidroză – 1.800-2.000 RON.",
  },
  {
    question: "Ce este babybotox și pentru cine este recomandat?",
    answer:
      "Babybotox utilizează doze mai mici de toxină botulinică față de tratamentul clasic, menținând mobilitatea naturală a mimicii. Este recomandat pacienților tineri (25-35 ani) pentru prevenirea ridurilor de expresie sau pacienților care preferă un efect minimal, natural.",
  },
];

export const FAQ_SKINBOOSTER: FAQItem[] = [
  {
    question: "Care este diferența dintre skinbooster și acid hialuronic clasic?",
    answer:
      "Skinboosterul hidratează pielea în profunzime și îmbunătățește calitatea, elasticitatea și luminozitatea pielii, fără a adăuga volum. Acidul hialuronic clasic este utilizat pentru conturare și volumizare. Skinboosterul se adresează calității pielii, nu formei feței.",
  },
  {
    question: "Câte ședințe de skinbooster sunt necesare?",
    answer:
      "Protocolul standard presupune 2-3 ședințe la interval de 4 săptămâni, urmate de o ședință de întreținere la 6-12 luni. Numărul exact de ședințe este stabilit de medicul dermatolog la consultație.",
  },
  {
    question: "Ce produse de skinbooster se folosesc la Juvena Timișoara?",
    answer:
      "La Juvena Timișoara utilizăm produse premium certificate CE: Profhilo, Restylane Skinbooster, Redensity 1 și Mesoheal, selectate în funcție de nevoile specifice ale pielii fiecărui pacient.",
  },
  {
    question: "Cât costă skinboosterul la Juvena Timișoara?",
    answer:
      "Prețul skinboosterului la Juvena Timișoara variază în funcție de produsul ales. Consultați lista de prețuri sau contactați-ne pentru un tarif personalizat. Consultația medicală pre-procedurală este inclusă.",
  },
  {
    question: "Cât durează o ședință de skinbooster?",
    answer:
      "O ședință de skinbooster durează între 20 și 40 de minute, inclusiv dezinfectarea și aplicarea cremei anestezice topice pentru confort maxim.",
  },
];

export const FAQ_DERMATOSCOPIE: FAQItem[] = [
  {
    question: "Ce este dermatoscopia digitală?",
    answer:
      "Dermatoscopia digitală este o metodă non-invazivă de analiză a leziunilor pigmentare (alunițe, nevi) cu ajutorul unui dermatoscop digital cu lumină polarizată. Permite identificarea precoce a semnelor suspecte de melanom sau carcinom bazocelular, cu o acuratețe semnificativ mai mare față de inspecția vizuală obișnuită.",
  },
  {
    question: "Cât durează un consult cu dermatoscopie?",
    answer:
      "Un consult dermatologic cu dermatoscopie digitală la Juvena Timișoara durează în medie 20-30 de minute, în funcție de numărul leziunilor evaluate.",
  },
  {
    question: "Cât de des trebuie să fac dermatoscopie?",
    answer:
      "Persoanele fără factori de risc sunt recomandate să efectueze un control dermatoscopic anual. Cele cu antecedente familiale de melanom, ten deschis, expunere solară intensă sau alunițe numeroase (peste 50) ar trebui să consulte medicul la 6 luni.",
  },
  {
    question: "Dermatoscopia digitală doare?",
    answer:
      "Nu, dermatoscopia digitală este complet nedureroasă și non-invazivă. Medicul aplică ușor dermatoscopul pe piele și analizează leziunile pe ecranul digital, fără tăieturi sau proceduri invazive.",
  },
];

export const FAQ_BIOSTIMULATORI: FAQItem[] = [
  {
    question: "Ce sunt biostimulatoarele de colagen?",
    answer:
      "Biostimulatoarele de colagen (HarmoniCa, Sculptra) sunt substanțe injectabile care stimulează producția naturală de colagen a pielii, oferind o rejuvenare profundă și naturală. Efectele se instalează progresiv și durează 12-24 luni, semnificativ mai mult față de acid hialuronic.",
  },
  {
    question: "Câte ședințe de biostimulatori de colagen sunt necesare?",
    answer:
      "Protocolul standard presupune 2-3 ședințe la interval de 4-6 săptămâni. Rezultatele se instalează progresiv pe parcursul a 3-6 luni, pe măsură ce colagenul nou format densifică pielea.",
  },
  {
    question: "Care este diferența dintre HarmoniCa și Sculptra?",
    answer:
      "HarmoniCa combină acid hialuronic cu hidroxiapatită de calciu pentru efect volumizant și stimulare de colagen. Sculptra (acid polilactic) acționează exclusiv prin biostimulare progresivă, fără efect volumizant imediat. Alegerea depinde de nevoile individuale, stabilite la consultație.",
  },
  {
    question: "Cât durează efectul biostimulatoarelor de colagen?",
    answer:
      "Efectul biostimulatoarelor de colagen durează 12-24 luni, în funcție de produsul utilizat și de răspunsul individual al pielii. Tratamentul de întreținere se recomandă anual.",
  },
];

export const FAQ_PRP: FAQItem[] = [
  {
    question: "Ce este Terapia Vampir PRP?",
    answer:
      "Terapia Vampir (PRP – Platelet Rich Plasma) utilizează plasma bogată în trombocite extrasă din propriul sânge al pacientului. Injectată la nivelul feței, gâtului sau scalpului, stimulează regenerarea celulară și producția de colagen, utilizând factorii de creștere naturali ai organismului.",
  },
  {
    question: "Câte ședințe PRP sunt necesare?",
    answer:
      "Protocolul inițial presupune 3 ședințe la interval de 4 săptămâni. O ședință de întreținere este recomandată la 6-12 luni pentru menținerea efectelor.",
  },
  {
    question: "PRP funcționează și pentru căderea părului?",
    answer:
      "Da. PRP scalpului este una dintre cele mai eficiente terapii non-chirurgicale pentru alopecia androgenică (căderea părului de tip masculin sau feminin). Tratamentul stimulează foliculii piloși și reduce căderea.",
  },
  {
    question: "Cât durează o ședință PRP?",
    answer:
      "O ședință PRP la Juvena Timișoara durează 45-75 minute: recoltarea sângelui, centrifugarea pentru separarea plasmei, aplicarea cremei anestezice și injectarea propriu-zisă.",
  },
];

export const FAQ_PEELING: FAQItem[] = [
  {
    question: "Ce probleme tratează peelingul chimic?",
    answer:
      "Peelingul chimic tratează eficient petele pigmentare, îmbătrânirea pielii, ridurile fine, acneea activă, cicatricile post-acnee și textura neuniformă a pielii. La Juvena Timișoara oferim Glow Peel (superficial), Magic Peel și Cosmelan (depigmentant).",
  },
  {
    question: "Există perioadă de recuperare după peeling chimic?",
    answer:
      "Depinde de tipul de peeling. Peelingurile superficiale (Glow Peel) nu necesită recuperare, pielea poate apărea ușor roșie 2-4 ore. Magic Peel poate implica o descuamare ușoară 2-5 zile. Cosmelan necesită 5-7 zile de recuperare. Medicul va explica complet protocolul post-procedural.",
  },
  {
    question: "Câte ședințe de peeling chimic sunt necesare?",
    answer:
      "Peelingurile superficiale se realizează în serii de 4-6 ședințe la interval de 2-4 săptămâni, urmate de întreținere lunară. Peelingurile mai profunde (Cosmelan) se administrează de obicei într-o singură ședință cu protocol de întreținere la domiciliu.",
  },
];

export const FAQ_DERMAPEN: FAQItem[] = [
  {
    question: "Ce este tratamentul Dermapen?",
    answer:
      "Dermapen este un dispozitiv de microneedling medical cu ace fine care creează microcanale controlate în piele, stimulând producția naturală de colagen și elastină. Este utilizat pentru riduri fine, pori dilatați, cicatrici acneice, pete și calitatea generală a pielii.",
  },
  {
    question: "Cât durează o ședință Dermapen?",
    answer:
      "O ședință Dermapen la Juvena Timișoara durează 45-60 de minute, inclusiv aplicarea cremei anestezice topice (30 min) și procedura propriu-zisă (15-30 min).",
  },
  {
    question: "Câte ședințe Dermapen sunt necesare?",
    answer:
      "Protocolul standard presupune 4-6 ședințe la interval de 4-6 săptămâni. Pentru cicatrici acneice profunde pot fi necesare 6-8 ședințe. Rezultatele se îmbunătățesc progresiv pe parcursul a 3-6 luni.",
  },
  {
    question: "Dermapen cu PRP – care sunt beneficiile?",
    answer:
      "Combinarea Dermapen cu PRP (plasma bogată în trombocite) potențează efectele ambelor proceduri. Microcanalele create de Dermapen facilitează penetrarea mai profundă a factorilor de creștere din PRP, accelerând regenerarea pielii și producția de colagen.",
  },
];

export const FAQ_HIPERHIDROZA: FAQItem[] = [
  {
    question: "Cum tratează toxina botulinică hiperhidroza?",
    answer:
      "Toxina botulinică blochează temporar nervii care stimulează glandele sudoripare, reducând semnificativ transpirația excesivă axilară, palmară sau plantară. Efectul apare în 5-10 zile și durează 6-12 luni.",
  },
  {
    question: "Cât costă tratamentul pentru hiperhidroză la Juvena Timișoara?",
    answer:
      "Tratamentul hiperhidrozei cu toxină botulinică la Juvena Timișoara costă 1.800-2.000 RON per zonă tratată (axile, palme sau plante), în funcție de cantitatea de produs necesară. Consultația medicală este inclusă.",
  },
  {
    question: "Cât durează efectul tratamentului pentru hiperhidroză?",
    answer:
      "Efectul tratamentului cu toxină botulinică pentru hiperhidroză durează 6-12 luni, semnificativ mai mult față de tratamentul ridurilor (3-6 luni), datorită diferenței de metabolism local.",
  },
];

export const FAQ_NEFERTITI: FAQItem[] = [
  {
    question: "Ce este Nefertiti Lift?",
    answer:
      "Nefertiti Lift constă în injecții cu toxină botulinică de-a lungul mandibulei și gâtului (mușchiul platysma), care redefinesc conturul jawline-ului și ridică ușor pielea gâtului, fără chirurgie. Efectul durează 3-6 luni.",
  },
  {
    question: "Cât costă Nefertiti Lift la Juvena Timișoara?",
    answer:
      "Nefertiti Lift costă 1.200 RON la Juvena Timișoara. Prețul include consultația medicală și procedura completă.",
  },
  {
    question: "Există recuperare după Nefertiti Lift?",
    answer:
      "Nu există timp de recuperare. Pot apărea mici echimoze la locul injectărilor, care dispar în 2-3 zile. Se recomandă evitarea activității fizice intense și a salinei 24 ore.",
  },
];

export const FAQ_FACE_SLIMMING: FAQItem[] = [
  {
    question: "Cum funcționează Face Slimming cu toxină botulinică?",
    answer:
      "Injecțiile de toxină botulinică în mușchiul maseter (mușchiul maxilar) îi reduc volumul în 4-6 săptămâni, subțiind vizual conturul feței. Tratamentul este eficient și pentru bruxism (scrâșnitul dinților) și dureri de cap tensionale.",
  },
  {
    question: "Cât durează efectul Face Slimming?",
    answer:
      "Efectul slăbirii masetrului durează 6-12 luni. Cu tratamente repetate, reducerea volumului muscular devine progresiv mai pronunțată și mai durabilă.",
  },
  {
    question: "Cât costă Face Slimming la Juvena Timișoara?",
    answer:
      "Injecțiile Face Slimming (maseter bilateral) costă 1.200 RON la Juvena Timișoara. Tratamentul include bruxismul. Consultația este inclusă în tarif.",
  },
];

export const FAQ_HIALURONIDAZA: FAQItem[] = [
  {
    question: "Ce este hialuronidaza și când se folosește?",
    answer:
      "Hialuronidaza este o enzimă injectabilă care dizolvă acidul hialuronic. Este utilizată pentru corectarea rezultatelor nesatisfăcătoare după filler, dizolvarea unui produs injectat incorect, tratamentul complicațiilor vasculare sau pur și simplu dacă pacientul dorește revenirea la aspectul natural.",
  },
  {
    question: "Cât timp durează dizolvarea acidului hialuronic cu hialuronidază?",
    answer:
      "Hialuronidaza acționează rapid: primele efecte sunt vizibile în 24-48 ore, cu dizolvare completă în 3-7 zile. Rezultatul final se evaluează la 2 săptămâni.",
  },
  {
    question: "Pot reface acidul hialuronic după hialuronidază?",
    answer:
      "Da. După dizolvarea completă cu hialuronidază (minim 4 săptămâni), se poate reinjecta acid hialuronic. Este recomandabil să așteptați ca țesuturile să revină la normal și să discutați cu medicul despre planul de tratament.",
  },
];

export const FAQ_LIPOLIZA: FAQItem[] = [
  {
    question: "Ce este lipoliza injectabilă?",
    answer:
      "Lipoliza injectabilă (Aqualyx, Kybella) utilizează substanțe lipofile care distrug celulele adipoase la locul injecției, reducând depozitele localizate de grăsime fără chirurgie. Este eficientă pentru bărbie dublă (grăsimea submentoniană), plici laterale și alte zone cu grăsime localizată.",
  },
  {
    question: "Câte ședințe de lipoliză sunt necesare?",
    answer:
      "Protocolul standard presupune 2-4 ședințe la interval de 4-6 săptămâni. Numărul exact depinde de volumul de grăsime și de răspunsul individual al pacientului.",
  },
  {
    question: "Există perioadă de recuperare după lipoliza injectabilă?",
    answer:
      "Da. După procedură apar umflături, roșeață și sensibilitate locală timp de 3-7 zile. Acestea sunt reacții normale ale procesului inflamator prin care se elimină celulele adipoase. Rezultatele definitive sunt vizibile la 4-8 săptămâni.",
  },
];

export const FAQ_CONSULT: FAQItem[] = [
  {
    question: "Ce include consultul dermatologic la Juvena Timișoara?",
    answer:
      "Consultul dermatologic la Juvena include anamneza completă, examinarea tegumentului, evaluarea leziunilor cu sau fără dermatoscop, stabilirea diagnosticului și recomandarea planului de tratament. La solicitare, se poate efectua dermatoscopie digitală a alunițelor.",
  },
  {
    question: "Trebuie programare pentru consult dermatologic?",
    answer:
      "Da, consultul dermatologic la Juvena Timișoara se efectuează pe bază de programare. Puteți programa online prin formularul de pe site sau telefonic. Timpii de așteptare sunt redusi față de sistemul public.",
  },
];

export const FAQ_ELECTROCAUTERIZARE: FAQItem[] = [
  {
    question: "Ce leziuni pot fi tratate prin electrocauterizare?",
    answer:
      "Electrocauterizarea tratează eficient: veruci vulgare și plane, fibroame moi (tags cutanate), angioame stelare, milia, keratoza seboreică și alte leziuni cutanate benigne. Tratamentul nu este indicat pentru leziunile pigmentare suspecte.",
  },
  {
    question: "Există cicatrice după electrocauterizare?",
    answer:
      "Riscul de cicatrice este minim când procedura este realizată de un medic dermatolog cu experiență. Se poate forma o crustă care cade natural în 7-14 zile. Aplicarea unei creme cicatrizante post-procedural reduce riscul.",
  },
];

export const FAQ_CURATARE: FAQItem[] = [
  {
    question: "Ce include curățarea dermatologică la Juvena Timișoara?",
    answer:
      "Curățarea dermatologică la Juvena include: demachiere și curățare profundă, vaporizare, extracție manuală sau mecanică a comedoanelor și punctelor negre, peeling enzimatic sau chimic ușor, aplicarea unui masct activ și hidratare finală. Este realizată de esteticiană sub supraveghere medicală.",
  },
  {
    question: "Cât de des se recomandă curățarea dermatologică?",
    answer:
      "Frecvența recomandată este de o dată la 4-6 săptămâni pentru tenul cu tendință acneică sau gras și o dată la 2-3 luni pentru tenul normal sau uscat. Medicul dermatolog poate ajusta frecvența în funcție de tipul de ten.",
  },
];

export const FAQ_WINTHER_GLOW: FAQItem[] = [
  {
    question: "Ce este tratamentul Winther Glow?",
    answer:
      "Winther Glow este un tratament facial de hidratare intensivă care combină ingrediente active (acid hialuronic, vitamine, peptide) pentru refacerea barierei cutanate și obținerea unui aspect luminos și odihnit. Este ideal pentru pielea deshidratată, obosită sau stresată.",
  },
  {
    question: "Cât durează o ședință Winther Glow?",
    answer:
      "O ședință Winther Glow la Juvena Timișoara durează 45-60 de minute. Procedura nu necesită recuperare – pielea este imediat mai luminoasă și hidratată.",
  },
];
