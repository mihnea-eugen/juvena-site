import type { Metadata } from "next";
import TreatmentPage from "@/components/TreatmentPage";

export const metadata: Metadata = {
  title: "Terapia Vampir PRP Timișoara – Facial, Scalp, Corp | Juvena",
  description:
    "Rejuvenare cu plasma bogată în trombocite (PRP) pentru față, gât, decolteu și scalp la Juvena Timișoara. Stimulează regenerarea naturală a pielii.",
  alternates: { canonical: "https://juvena-timisoara.ro/dermatologie-estetica/terapia-vampir-prp/" },
};

export default function TerapiaVampirPage() {
  return (
    <TreatmentPage
      breadcrumbs={[
        { name: "Acasă", href: "/" },
        { name: "Dermatologie Estetică", href: "/dermatologie-estetica/" },
        { name: "Terapia Vampir PRP", href: "/dermatologie-estetica/terapia-vampir-prp/" },
      ]}
      eyebrow="Dermatologie Estetică"
      title="Terapia Vampir PRP"
      subtitle="Rejuvenare cu plasmă bogată în trombocite — procedură 100% autologă, naturală."
      description={[
        "Terapia Vampir (PRP – Platelet Rich Plasma) este o procedură de rejuvenare care folosește plasma proprie a pacientului, îmbogățită cu trombocite. Trombocitele conțin factori de creștere care stimulează regenerarea celulară, producția de colagen și elastină, și îmbunătățesc calitatea pielii.",
        "Procedura constă în recoltarea unei mici cantități de sânge din brațul pacientului, centrifugarea pentru separarea plasmei bogate în trombocite, și injectarea acesteia în zona dorită. Deoarece se folosesc propriile componente biologice ale pacientului, riscul de reacție alergică este practic inexistent.",
        "PRP poate fi folosit facial, pe scalp pentru stimularea creșterii părului, pe gât și decolteu, și corporal pentru vergeturi și cicatrici.",
      ]}
      indications={[
        "Rejuvenare facială și îmbunătățirea texturii pielii",
        "Reducerea cearcănelor și a liniilor fine",
        "Alopecie – stimularea creșterii firelor de păr",
        "Vergeturi și cicatrici",
        "Gât, decolteu – redensificare cutanată",
        "Complementar cu acid hialuronic sau Dermapen",
      ]}
      protocol={[
        "Consultație medicală și evaluarea zonei de tratament.",
        "Recoltarea a aproximativ 10-20 ml sânge din venă.",
        "Centrifugare pentru separarea PRP (15-20 minute).",
        "Aplicarea anesteziei topice sau locale.",
        "Injectarea PRP în zona dorită.",
        "Recomandări post-procedurală: evitarea expunerii la soare, SPF zilnic.",
      ]}
      contraindications={[
        "Tulburări de coagulare sau trombocitopenie",
        "Tratament anticoagulant activ",
        "Infecții active sau boli inflamatorii sistemice",
        "Neoplazii active",
        "Anemie severă",
      ]}
      prices={[
        { label: "PRP Facial / Corporal / Scalp", detail: "per zonă", price: "750" },
      ]}
      schema={{
        name: "Terapia Vampir PRP Timișoara",
        description: "Rejuvenare cu plasmă bogată în trombocite (PRP) la Juvena Timișoara.",
        url: "https://juvena-timisoara.ro/dermatologie-estetica/terapia-vampir-prp/",
        price: "750",
        bodyLocation: "față, scalp, corp",
      }}
      relatedLinks={[
        { label: "Skinbooster", href: "/dermatologie-estetica/skinbooster/" },
        { label: "Biostimulatori Colagen", href: "/dermatologie-estetica/biostimulatori-colagen/" },
        { label: "Dermapen PRP", href: "/tratamente-faciale/dermapen/" },
      ]}
    />
  );
}
