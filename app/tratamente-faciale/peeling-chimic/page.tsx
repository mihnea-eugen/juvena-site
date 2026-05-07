import type { Metadata } from "next";
import TreatmentPage from "@/components/TreatmentPage";

export const metadata: Metadata = {
  title: "Peeling Chimic Timișoara – Glow Peel & Magic Peel | Juvena",
  description: "Peeling chimic pentru luminozitate, anti-aging și reducerea petelor pigmentare. Glow Peel și Magic Peel disponibile la Juvena Timișoara.",
  alternates: { canonical: "https://juvena-timisoara.ro/tratamente-faciale/peeling-chimic/" },
};

export default function Page() {
  return (
    <TreatmentPage
      breadcrumbs={[
        { name: "Acasă", href: "/" },
        { name: "Tratamente Faciale", href: "/tratamente-faciale/" },
        { name: "Peeling Chimic", href: "/tratamente-faciale/peeling-chimic/" }
      ]}
      eyebrow="Tratamente Faciale"
      title="Peeling Chimic"
      subtitle="Exfoliere chimică controlată pentru ten radiant, anti-aging și uniformizarea tonului."
      description={[
        "Peelingul chimic folosește acizi (AHA, BHA, TCA, retinol) în concentrații controlate pentru a exfolia straturile superficiale ale pielii, stimulând regenerarea celulară și producția de colagen.",
        "La Juvena oferim două formule: Glow Peel (luminozitate, hidratare, uniformizare ton) și Magic Peel (anti-aging, reducerea ridurilor și petelor). Protocolul este ales de medic în funcție de tipul de piele și obiectivele tratamentului."
      ]}
      indications={[
        "Ten lipsit de luminozitate, obosit",
        "Pete pigmentare post-inflamatorii sau solare",
        "Riduri superficiale",
        "Cicatrici superficiale de acnee",
        "Pori dilatați și textură neuniformă"
      ]}
      contraindications={[
        "Sarcina și alăptarea",
        "Tratament cu retinol topic sau isotretinoin recent",
        "Herpes labial activ",
        "Piele sensibilizată sau cu leziuni active",
        "Expunere solară recentă (bronz proaspăt)"
      ]}
      prices={[
        { label: "Glow Peel", detail: "Peeling chimic luminozitate", price: "450" },
        { label: "Magic Peel", detail: "Peeling anti-aging & anti-pete", price: "600" }
      ]}
      relatedLinks={[
        { label: "Curățare Dermatologică", href: "/tratamente-faciale/curatare-dermatologica/" },
        { label: "Dermapen PRP", href: "/tratamente-faciale/dermapen/" },
        { label: "Winther Glow", href: "/tratamente-faciale/winther-glow/" }
      ]}
    />
  );
}
