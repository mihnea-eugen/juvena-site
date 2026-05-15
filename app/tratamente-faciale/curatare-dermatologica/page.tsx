import type { Metadata } from "next";
import TreatmentPage from "@/components/TreatmentPage";
import { FAQ_CURATARE } from "@/lib/data/schema";

export const metadata: Metadata = {
  title: "Curățare Dermatologică Profesională Timișoara | Juvena",
  description: "Curățare facială profundă realizată de medic dermatolog la Juvena Timișoara. Tratament pentru ten mixt, gras, cu imperfecțiuni.",
  alternates: { canonical: "https://juvena.ro/tratamente-faciale/curatare-dermatologica/" },
};

export default function Page() {
  return (
    <TreatmentPage
      breadcrumbs={[
        { name: "Acasă", href: "/" },
        { name: "Tratamente Faciale", href: "/tratamente-faciale/" },
        { name: "Curățare Dermatologică", href: "/tratamente-faciale/curatare-dermatologica/" }
      ]}
      eyebrow="Tratamente Faciale"
      title="Curățare dermatologică Timișoara"
      subtitle="Curățare facială profundă realizată de medic dermatolog, adaptată tipului tău de ten."
      description={[
        "Curățarea dermatologică profesională este o procedură realizată de medic sau asistent medical sub supraveghere medicală, adaptată tipului specific de ten și problemelor existente.",
        "Include demachiere profundă, vaporizare, extracție comedoane și milii, aplicare de produse terapeutice și masaj facial. Diferă de curățarea cosmetică standard prin utilizarea de produse medicale și tehnici clinice."
      ]}
      indications={[
        "Ten gras sau mixt cu pori dilatați",
        "Comedonane (puncte negre și albe)",
        "Acnee ușoară spre moderată",
        "Ten congestionat, lipsit de luminozitate",
        "Pregătire pentru alte proceduri estetice"
      ]}
      
      prices={[
        { label: "Curățare Dermatologică", price: "250" }
      ]}
      faq={FAQ_CURATARE}
      relatedLinks={[
        { label: "Peeling Chimic", href: "/tratamente-faciale/peeling-chimic/" },
        { label: "Dermapen PRP", href: "/tratamente-faciale/dermapen/" }
      ]}
      galleryPreview={[
        { file: "/images/galerie/curatare-procedura.jpg", alt: "Procedură curățare dermatologică – Juvena", title: "Curățare dermatologică" },
        { file: "/images/galerie/pori-nas-1.jpg", alt: "Pori dilatați înainte după curățare – Juvena", title: "Pori dilatați" },
        { file: "/images/galerie/pori-nas-2.jpg", alt: "Textură piele înainte după tratament – Juvena", title: "Textură piele" },
      ]}
    />
  );
}
