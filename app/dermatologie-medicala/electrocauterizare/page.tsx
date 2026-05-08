import type { Metadata } from "next";
import TreatmentPage from "@/components/TreatmentPage";

export const metadata: Metadata = {
  title: "Electrocauterizare Timișoara – Xantelasme & Papiloame | Juvena",
  description: "Îndepărtarea xantelasmelor, papiloamelor și altor leziuni cutanate benigne prin electrocauterizare la clinica Juvena din Timișoara.",
  alternates: { canonical: "https://juvena-timisoara.ro/dermatologie-medicala/electrocauterizare/" },
};

export default function Page() {
  return (
    <TreatmentPage
      breadcrumbs={[
        { name: "Acasă", href: "/" },
        { name: "Dermatologie Medicală", href: "/dermatologie-medicala/" },
        { name: "Electrocauterizare", href: "/dermatologie-medicala/electrocauterizare/" }
      ]}
      eyebrow="Dermatologie Medicală"
      title="Electrocauterizare Timișoara"
      subtitle="Îndepărtarea leziunilor cutanate benigne – procedură rapidă, minim invazivă."
      description={[
        "Electrocauterizarea folosește curentul electric de înaltă frecvență pentru a îndepărta leziunile cutanate benigne superficiale. Este o procedură rapidă, minim invazivă, realizată în cabinet sub anestezie locală.",
        "Procedura este indicată pentru xantelasme (depozite gălbui de colesterol în jurul ochilor), papiloame (veruci vulgare), fibroame moi, milia, angiomas și alte leziuni benigne similare."
      ]}
      indications={[
        "Xantelasme palpebrale",
        "Papiloame și veruci",
        "Fibroame moi (molluscum pendulum)",
        "Keratoze seboreice mici",
        "Angioame mici",
        "Milia (chisturi mici keratinizate)"
      ]}
      contraindications={[
        "Pacemakere cardiace sau implanturi electronice",
        "Leziuni suspecte de malignitate (necesită biopsie)",
        "Infecții active la locul tratamentului"
      ]}
      prices={[
        { label: "Mici intervenții dermatologice", price: "100 – 500" },
        { label: "Electrocauterizare xantelasme / papiloame", price: "300 – 1.000" }
      ]}
      relatedLinks={[
        { label: "Consult Dermatologic", href: "/dermatologie-medicala/consult-dermatologic/" },
        { label: "Dermatoscopie", href: "/dermatologie-medicala/dermatoscopie/" }
      ]}
    />
  );
}
