import type { Metadata } from "next";
import TreatmentPage from "@/components/TreatmentPage";
import { FAQ_BIOSTIMULATORI } from "@/lib/data/schema";

export const metadata: Metadata = {
  title: "Injecții Biostimulatori Colagen Timișoara – HarmoniCa & Sculptra | Juvena",
  description:
    "Stimulează producția naturală de colagen cu HarmoniCa și Sculptra la Juvena Timișoara. Rejuvenare facială profundă, efecte de lungă durată.",
  alternates: { canonical: "https://juvena.ro/dermatologie-estetica/biostimulatori-colagen/" },
};

export default function BiostimulatoriPage() {
  return (
    <TreatmentPage
      breadcrumbs={[
        { name: "Acasă", href: "/" },
        { name: "Dermatologie Estetică", href: "/dermatologie-estetica/" },
        { name: "Biostimulatori Colagen", href: "/dermatologie-estetica/biostimulatori-colagen/" },
      ]}
      eyebrow="Dermatologie Estetică"
      title="Injecții biostimulatori colagen Timișoara"
      subtitle="HarmoniCa și Sculptra — rejuvenare facială profundă prin stimularea naturală a colagenului."
      description={[
        "Biostimulatorii de colagen sunt o categorie distinctă de produse injectabile care nu adaugă volum direct, ci stimulează fibroblastele din piele să producă colagen propriu. Rezultatele sunt mai graduale decât ale fillerelor, dar mai naturale și de mai lungă durată.",
        "HarmoniCa este un biostimulator pe bază de hidroxiapatită de calciu (CaHA) și acid hialuronic, ce oferă un efect dual: biostimulare și hidratare. Sculptra (acid polilactic) acționează profund în derm pentru reconstituirea volumului pierdut pe termen lung (18-24 luni).",
        "Aceste produse sunt ideale pentru pacienții care doresc o îmbunătățire progresivă, naturală, a calității pielii și a volumului facial, fără aspectul tipic al fillerelor.",
      ]}
      indications={[
        "Pierderea progresivă a volumului și elasticității faciale",
        "Flaciditate cutanată moderată",
        "Pacienți care preferă rezultate graduale, naturale",
        "Rejuvenare facială de lungă durată",
        "Complementar tratamentelor cu acid hialuronic",
      ]}
      protocol={[
        "Consultație medicală: evaluarea gradului de laxitate și a volumului facial.",
        "Planificarea protocolului de injectare (număr de ședințe, zone).",
        "Aplicarea anesteziei locale sau topice.",
        "Injectarea produsului cu tehnici avansate (canulă sau ac).",
        "Masaj post-procedural pentru distribuire uniformă (Sculptra).",
        "Ședințe de control la 4-6 săptămâni pentru evaluarea răspunsului.",
      ]}
      contraindications={[
        "Sarcina și alăptarea",
        "Boli autoimune active",
        "Tendință la cicatrici keloide sau granulomatoase",
        "Infecții active la locul de tratament",
        "Anticoagulante sau imunosupresive",
      ]}
      prices={[
        { label: "HarmoniCa – biostimulator colagen", price: "2.000" },
        { label: "Sculptra – biostimulator colagen", price: "2.500" },
      ]}
      schema={{
        name: "Biostimulatori Colagen Timișoara – HarmoniCa & Sculptra",
        description:
          "Stimularea producției de colagen cu HarmoniCa și Sculptra la Juvena Timișoara. Rejuvenare facială profundă.",
        url: "https://juvena.ro/dermatologie-estetica/biostimulatori-colagen/",
        price: "2.000",
        bodyLocation: "față",
      }}
      faq={FAQ_BIOSTIMULATORI}
      relatedLinks={[
        { label: "Skinbooster", href: "/dermatologie-estetica/skinbooster/" },
        { label: "Acid Hialuronic", href: "/dermatologie-estetica/acid-hialuronic/" },
        { label: "Terapia Vampir PRP", href: "/dermatologie-estetica/terapia-vampir-prp/" },
      ]}
    />
  );
}
