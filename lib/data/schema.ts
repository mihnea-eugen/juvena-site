/**
 * JSON-LD Schema helpers pentru Juvena Timișoara
 * Tipuri: MedicalBusiness, MedicalProcedure, Physician, FAQPage, BreadcrumbList
 */

const BASE_URL = "https://juvena-timisoara.ro";
const ORG_NAME = "Juvena – Clinică Dermatologie Estetică & Medicală Timișoara";
const ADDRESS = {
  "@type": "PostalAddress",
  streetAddress: "TBD", // se completează după aprobare
  addressLocality: "Timișoara",
  addressRegion: "Timiș",
  postalCode: "300000",
  addressCountry: "RO",
};

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
    hasMap: "TBD",
    sameAs: [
      "https://www.facebook.com/juvena.timisoara",
      "https://www.instagram.com/juvena.timisoara",
    ],
  };
}

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

export function schemaBreadcrumb(
  items: { name: string; url: string }[]
) {
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

export type ProcedureInput = {
  name: string;
  description: string;
  url: string;
  price?: string;
  bodyLocation?: string;
  procedureType?: string;
  followup?: string;
  preparation?: string;
};

export function schemaMedicalProcedure(p: ProcedureInput) {
  return {
    "@context": "https://schema.org",
    "@type": "MedicalProcedure",
    name: p.name,
    description: p.description,
    url: p.url,
    procedureType: p.procedureType ?? "https://schema.org/TherapeuticProcedure",
    bodyLocation: p.bodyLocation ?? "față",
    followup: p.followup,
    preparation: p.preparation,
    ...(p.price && {
      offers: {
        "@type": "Offer",
        price: p.price,
        priceCurrency: "RON",
        availability: "https://schema.org/InStock",
        seller: {
          "@id": `${BASE_URL}/#organization`,
        },
      },
    }),
    performedBy: {
      "@id": `${BASE_URL}/#organization`,
    },
  };
}

export type PhysicianInput = {
  name: string;
  description: string;
  image: string;
  url: string;
  specialty: string;
};

export function schemaPhysician(p: PhysicianInput) {
  return {
    "@context": "https://schema.org",
    "@type": "Physician",
    name: p.name,
    description: p.description,
    image: `${BASE_URL}${p.image}`,
    url: `${BASE_URL}${p.url}`,
    medicalSpecialty: p.specialty,
    worksFor: {
      "@id": `${BASE_URL}/#organization`,
    },
    address: ADDRESS,
  };
}

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

// ───────────────────────────────────────────────
// FAQ-uri predefinite per categorie / procedură
// ───────────────────────────────────────────────

export const FAQ_ACID_HIALURONIC: FAQItem[] = [
  {
    question: "Cât durează efectul acidului hialuronic pentru buze?",
    answer:
      "Efectul augmentării buzelor cu acid hialuronic durează în medie 6-12 luni, în funcție de tipul de produs utilizat, metabolismul pacientului și zona tratată.",
  },
  {
    question: "Durează procedura de acid hialuronic?",
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
];
