import type { Metadata } from "next";
import TreatmentPage from "@/components/TreatmentPage";
import { FAQ_DERMATOSCOPIE } from "@/lib/data/schema";

export const metadata: Metadata = {
  title: "Dermatoscopie Digitală Timișoara – Analiză Alunițe | Juvena",
  description: "Analiză digitală a alunițelor și leziunilor cutanate prin dermatoscopie la Juvena Timișoara. Depistarea precoce a leziunilor suspecte.",
  alternates: { canonical: "https://juvena-timisoara.ro/dermatologie-medicala/dermatoscopie/" },
};

export default function Page() {
  return (
    <TreatmentPage
      breadcrumbs={[
        { name: "Acasă", href: "/" },
        { name: "Dermatologie Medicală", href: "/dermatologie-medicala/" },
        { name: "Dermatoscopie", href: "/dermatologie-medicala/dermatoscopie/" }
      ]}
      eyebrow="Dermatologie Medicală"
      title="Dermatoscopie digitală Timișoara"
      subtitle="Analiza non-invazivă a alunițelor și leziunilor pigmentare – depistare precoce cu tehnologie digitală."
      description={[
        "Dermatoscopia digitală este metoda gold standard pentru evaluarea alunițelor și a leziunilor pigmentare. Folosind un dermatoscop cu iluminare polarizată, medicul poate analiza structuri cutanate invizibile cu ochiul liber, identificând semne precoce de malignitate.",
        "Imaginile sunt stocate digital, permițând o monitorizare comparativă în timp a evoluției fiecărei leziuni. Aceasta este esențial în detectarea precoce a melanomului și a altor cancere cutanate.",
        "Recomandăm o evaluare anuală a tuturor alunițelor, în special la persoanele cu piele deschisă, expunere solară frecventă, antecedente familiale de melanom sau număr mare de nevi."
      ]}
      indications={[
        "Evaluare anuală preventivă a alunițelor",
        "Alunițe noi sau cu aspect modificat (formă, culoare, dimensiune)",
        "Antecedente familiale de melanom",
        "Fototip deschis cu expunere solară frecventă",
        "Leziuni pigmentare atipice"
      ]}
      
      prices={[
        { label: "Dermatoscopie digitală", detail: "Analiză alunițe / leziuni", price: "200" }
      ]}
      faq={FAQ_DERMATOSCOPIE}
      relatedLinks={[
        { label: "Consult Dermatologic", href: "/dermatologie-medicala/consult-dermatologic/" },
        { label: "Mici intervenții dermatologice", href: "/dermatologie-medicala/electrocauterizare/" }
      ]}
    />
  );
}
