import type { Metadata } from "next";
import TreatmentPage from "@/components/TreatmentPage";
import { FAQ_CONSULT } from "@/lib/data/schema";

export const metadata: Metadata = {
  title: "Consult Dermatologic Timișoara – Programare Rapidă | Juvena",
  description: "Consultație dermatologică completă la Juvena Timișoara. Diagnostic precis, plan de tratament și recomandări personalizate.",
  alternates: { canonical: "https://juvena.ro/dermatologie-medicala/consult-dermatologic/" },
};

export default function Page() {
  return (
    <TreatmentPage
      breadcrumbs={[
        { name: "Acasă", href: "/" },
        { name: "Dermatologie Medicală", href: "/dermatologie-medicala/" },
        { name: "Consult Dermatologic", href: "/dermatologie-medicala/consult-dermatologic/" }
      ]}
      eyebrow="Dermatologie Medicală"
      title="Consult dermatologic Timișoara"
      subtitle="Evaluare completă a stării pielii, diagnostic diferențial și plan de tratament personalizat."
      description={[
        "Consultul dermatologic la Juvena Timișoara este realizat de medic specialist dermatolog și include o evaluare completă a pielii, a leziunilor existente și a antecedentelor personale și familiale relevante.",
        "La finalul consultației primești un diagnostic clar, recomandări de tratament adaptate nevoilor tale și, dacă este cazul, o rețetă medicală sau o trimitere către investigații suplimentare."
      ]}
      indications={[
        "Leziuni cutanate de cauză necunoscută",
        "Afecțiuni dermatologice cronice (psoriazis, eczeme, acnee)",
        "Evaluare alunițe noi sau cu aspect modificat",
        "Afecțiuni unghiale sau ale scalpului",
        "Dermatoze alergice",
        "Control periodic al pielii"
      ]}
      
      prices={[
        { label: "Consult Dermatologic", price: "200" },
        { label: "Control Dermatologic", price: "100" }
      ]}
      faq={FAQ_CONSULT}
      relatedLinks={[
        { label: "Dermatoscopie Digitală", href: "/dermatologie-medicala/dermatoscopie/" },
        { label: "Electrocauterizare", href: "/dermatologie-medicala/electrocauterizare/" }
      ]}
    />
  );
}
