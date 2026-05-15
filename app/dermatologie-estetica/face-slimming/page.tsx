import type { Metadata } from "next";
import TreatmentPage from "@/components/TreatmentPage";
import { FAQ_FACE_SLIMMING } from "@/lib/data/schema";

export const metadata: Metadata = {
  title: "Face Slimming Timișoara – Bruxism & Maseter | Juvena",
  description: "Subțierea feței prin relaxarea mușchiului maseter cu toxină botulinică. Tratament pentru bruxism și remodelare facială la Juvena Timișoara.",
  alternates: { canonical: "https://juvena.ro/dermatologie-estetica/face-slimming/" },
};

export default function Page() {
  return (
    <TreatmentPage
      breadcrumbs={[
        { name: "Acasă", href: "/" },
        { name: "Dermatologie Estetică", href: "/dermatologie-estetica/" },
        { name: "Face Slimming", href: "/dermatologie-estetica/face-slimming/" }
      ]}
      eyebrow="Dermatologie Estetică"
      title="Face Slimming Timișoara"
      subtitle="Subțierea feței și tratamentul bruxismului prin relaxarea mușchiului maseter."
      description={[
        "Mușchiul maseter, responsabil de mișcarea de masticație, poate fi hipertrofiat din cauza bruxismului (scrâșnitul dinților) sau a obiceiului de a mânca gumă. Aceasta dă feței o formă pătrată, masculinizată.",
        "Injectarea toxinei botulinice în maseter determină atrofia progresivă a mușchiului, cu subțierea vizibilă a feței în 4-8 săptămâni. Efectul durează 6-12 luni și tratează simultan bruxismul."
      ]}
      indications={[
        "Față pătrată cauzată de hipertrofia maseterului",
        "Bruxism (scrâșnitul dinților)",
        "Tensiune musculară cronică la nivelul mandibulei",
        "Dureri de cap cauzate de bruxism"
      ]}
      contraindications={[
        "Sarcina și alăptarea",
        "Boli neuromusculare",
        "Alergie la toxina botulinică"
      ]}
      prices={[
        { label: "Face Slimming – mușchiul maseter", detail: "Bruxism inclus", price: "1.200" }
      ]}
      faq={FAQ_FACE_SLIMMING}
      relatedLinks={[
        { label: "Toxină Botulinică", href: "/dermatologie-estetica/toxina-botulinica/" },
        { label: "Nefertiti Lift", href: "/dermatologie-estetica/nefertiti-lift/" }
      ]}
    />
  );
}
