import type { Metadata } from "next";
import TreatmentPage from "@/components/TreatmentPage";
import { FAQ_DERMAPEN } from "@/lib/data/schema";

export const metadata: Metadata = {
  title: "Dermapen Timișoara – Microneedling PRP Facial | Juvena",
  description: "Microneedling combinat cu PRP pentru față, gât, decolteu și tratamentul vergeturilor și cicatricilor la Juvena Timișoara.",
  alternates: { canonical: "https://juvena.ro/tratamente-faciale/dermapen/" },
};

export default function Page() {
  return (
    <TreatmentPage
      breadcrumbs={[
        { name: "Acasă", href: "/" },
        { name: "Tratamente Faciale", href: "/tratamente-faciale/" },
        { name: "Dermapen PRP", href: "/tratamente-faciale/dermapen/" }
      ]}
      eyebrow="Tratamente Faciale"
      title="Dermapen Timișoara"
      subtitle="Microneedling cu PRP – rejuvenare facială profundă, tratament vergeturi și cicatrici."
      description={[
        "Terapia Vampir cu Dermapen combină microneedling-ul (crearea de microcanale în piele cu ace ultra-fine) cu aplicarea de PRP (plasmă bogată în trombocite) din sângele propriu al pacientului.",
        "Microcanelele create de dermapen facilitează penetrarea profundă a PRP, amplificând efectul regenerator. Stimulează producția de colagen și elastină, îmbunătățind textura, elasticitatea și luminozitatea pielii.",
        "Se poate aplica pe față, gât, decolteu și corporal pentru vergeturi și cicatrici de acnee. Sunt necesare 3-6 ședințe pentru rezultate optime."
      ]}
      indications={[
        "Riduri fine și laxitate cutanată ușoară",
        "Cicatrici de acnee",
        "Pori dilatați și textură neuniformă a pielii",
        "Vergeturi",
        "Pete pigmentare și ten inegal",
        "Rejuvenare generală a pielii feței, gâtului și decolteului"
      ]}
      contraindications={[
        "Acnee activă inflamatorie severă",
        "Keloide sau tendință la cicatrizare anormală",
        "Tratament cu isotretinoin (Roaccutane) în ultimele 6 luni",
        "Tulburări de coagulare",
        "Infecții active la locul de tratament"
      ]}
      prices={[
        { label: "Terapia Vampir Dermapen – față / gât / decolteu", detail: "per zonă", price: "750" },
        { label: "Terapia Vampir Dermapen – vergeturi / cicatrici", detail: "per zonă", price: "750" }
      ]}
      faq={FAQ_DERMAPEN}
      relatedLinks={[
        { label: "Terapia Vampir PRP", href: "/dermatologie-estetica/terapia-vampir-prp/" },
        { label: "Peeling Chimic", href: "/tratamente-faciale/peeling-chimic/" },
        { label: "Skinbooster", href: "/dermatologie-estetica/skinbooster/" }
      ]}
      galleryPreview={[
        { file: "/images/galerie/dermapen-procedura.jpg", alt: "Procedură dermapen microneedling – Juvena", title: "Dermapen în procedură" },
      ]}
    />
  );
}
