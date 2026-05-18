import type { Metadata } from "next";
import TreatmentPage from "@/components/TreatmentPage";
import { FAQ_HIALURONIDAZA } from "@/lib/data/schema";

export const metadata: Metadata = {
  title: "Injectări Hialuronidază Timișoara – Dizolvare Acid Hialuronic | Juvena",
  description: "Corecția rezultatelor nesatisfăcătoare prin dizolvarea acidului hialuronic cu hialuronidază la Juvena Timișoara.",
  alternates: { canonical: "https://juvena.ro/dermatologie-estetica/hialuronidaza/" },
};

export default function Page() {
  return (
    <TreatmentPage
      breadcrumbs={[
        { name: "Acasă", href: "/" },
        { name: "Dermatologie Estetică", href: "/dermatologie-estetica/" },
        { name: "Hialuronidază", href: "/dermatologie-estetica/hialuronidaza/" }
      ]}
      eyebrow="Dermatologie Estetică"
      title="Injectări hialuronidază Timișoara"
      subtitle="Dizolvarea acidului hialuronic – corecție rapidă a rezultatelor nedorite."
      description={[
        "Hialuronidaza este o enzimă care descompune rapid acidul hialuronic injectat. Este utilizată atunci când rezultatul unui tratament cu filler nu corespunde așteptărilor sau în cazul unor complicații (nodul, asimetrie, efect Tyndall).",
        "Procedura este rapidă și eficientă. Efectul se instalează în câteva ore, cu rezoluție completă în 24-72 ore. Ulterior, zona poate fi retratatata cu acid hialuronic după 2-4 săptămâni."
      ]}
      indications={[
        "Rezultat nefavorabil după filler cu acid hialuronic",
        "Asimetrie post-injectare",
        "Efect Tyndall (colorație albăstruie sub piele)",
        "Noduli sau granulom",
        "Complicație vasculară (urgență medicală)"
      ]}
      contraindications={[
        "Alergie la hialuronidază sau la proteine de origine animală",
        "Infecții active la locul de tratament"
      ]}
      prices={[
        { label: "Hialuronidază – dizolvare acid hialuronic", price: "600" }
      ]}
      faq={FAQ_HIALURONIDAZA}
      relatedLinks={[
        { label: "Acid Hialuronic", href: "/dermatologie-estetica/acid-hialuronic/" }
      ]}
    />
  );
}
