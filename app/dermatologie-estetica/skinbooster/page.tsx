import type { Metadata } from "next";
import TreatmentPage from "@/components/TreatmentPage";
import { FAQ_SKINBOOSTER } from "@/lib/data/schema";

export const metadata: Metadata = {
  title: "Injecții Skinbooster Timișoara – Profhilo, Restylane, Redensity | Juvena",
  description:
    "Hidratare profundă și revitalizare cutanată cu skinbooster Profhilo, Restylane, Redensity 1 și Mesoheal la Juvena Timișoara.",
  alternates: { canonical: "https://juvena.ro/dermatologie-estetica/skinbooster/" },
};

export default function SkinboosterPage() {
  return (
    <TreatmentPage
      breadcrumbs={[
        { name: "Acasă", href: "/" },
        { name: "Dermatologie Estetică", href: "/dermatologie-estetica/" },
        { name: "Skinbooster", href: "/dermatologie-estetica/skinbooster/" },
      ]}
      eyebrow="Dermatologie Estetică"
      title="Injecții skinbooster Timișoara"
      subtitle="Hidratare profundă și revitalizare cutanată cu acid hialuronic nereticulat de ultimă generație."
      description={[
        "Skinboosterele sunt produse pe bază de acid hialuronic cu densitate redusă, special formulate pentru a hidrata și revitaliza pielea din interior, fără a adăuga volum vizibil. Spre deosebire de fillere, ele îmbunătățesc calitatea texturii pielii, elasticitatea și luminozitatea.",
        "La Juvena utilizăm game premium de skinboosters: Profhilo (bioremodeling), Restylane Skin Boosters, Redensity 1 și Mesoheal. Fiecare produs are o formulă distinctă, adaptată unor nevoi diferite ale pielii.",
        "Protocolul standard presupune 2-3 ședințe la interval de 4 săptămâni, urmate de o ședință de întreținere la 6-12 luni. Rezultatele includ piele mai hidratată, mai elastică și cu aspect mai luminos.",
      ]}
      indications={[
        "Piele deshidratată, lipsită de luminozitate",
        "Primele semne de îmbătrânire cutanată",
        "Piele fină, cu textură neuniformă",
        "Îngrijire post-vară sau pre-sezon rece",
        "Pregătire pre-eveniment pentru ten radiant",
        "Complementar tratamentelor injectabile de volum",
      ]}
      protocol={[
        "Consultație medicală și evaluarea tipului de piele.",
        "Aplicarea cremei anestezice topice (30 minute).",
        "Dezinfectarea zonei de tratament.",
        "Injectarea skinboosterului cu tehnica nappage sau microbolus.",
        "Masaj ușor de absorbție.",
        "Recomandări post-procedurală: evitarea machiajului 12 ore, SPF obligatoriu.",
      ]}
      contraindications={[
        "Sarcina și alăptarea",
        "Infecții active la locul de tratament",
        "Alergii la acid hialuronic sau lidocaină",
        "Tratament anticoagulant activ",
      ]}
      prices={[
        { label: "Redensity 1", price: "1.500" },
        { label: "Profhilo", price: "1.400" },
        { label: "Mesoheal", price: "1.400" },
        { label: "Restylane Skin Boosters", price: "1.400" },
      ]}
      faq={FAQ_SKINBOOSTER}
      schema={{
        name: "Skinbooster Timișoara – Profhilo, Restylane, Redensity",
        description: "Hidratare profundă a pielii cu skinbooster la Juvena Timișoara.",
        url: "https://juvena.ro/dermatologie-estetica/skinbooster/",
        price: "1.400",
        bodyLocation: "față, gât, decolteu",
      }}
      relatedLinks={[
        { label: "Biostimulatori Colagen", href: "/dermatologie-estetica/biostimulatori-colagen/" },
        { label: "Terapia Vampir PRP", href: "/dermatologie-estetica/terapia-vampir-prp/" },
        { label: "Acid Hialuronic", href: "/dermatologie-estetica/acid-hialuronic/" },
      ]}
    />
  );
}
