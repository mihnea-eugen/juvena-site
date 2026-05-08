import type { Metadata } from "next";
import TreatmentPage from "@/components/TreatmentPage";
import { FAQ_WINTHER_GLOW } from "@/lib/data/schema";

export const metadata: Metadata = {
  title: "Winther Glow Timișoara – Tratament Hidratare Intensiv | Juvena",
  description: "Tratament intensiv de hidratare și revigorare a pielii pentru sezonul rece. Winther Glow disponibil la clinica Juvena din Timișoara.",
  alternates: { canonical: "https://juvena-timisoara.ro/tratamente-faciale/winther-glow/" },
};

export default function Page() {
  return (
    <TreatmentPage
      breadcrumbs={[
        { name: "Acasă", href: "/" },
        { name: "Tratamente Faciale", href: "/tratamente-faciale/" },
        { name: "Winther Glow", href: "/tratamente-faciale/winther-glow/" }
      ]}
      eyebrow="Tratamente Faciale"
      title="Winther Glow Timișoara"
      subtitle="Tratament facial intensiv de hidratare și luminozitate – ideal pentru sezonul rece."
      description={[
        "Winther Glow este un tratament sezonier special conceput pentru a combate efectele sezonului rece asupra pielii: deshidratare, aspect plictisit, sensibilitate crescută și pierderea luminozității.",
        "Combină activi hidratanți intensivi, antioxidanți și revigoranți cutanați, aplicați prin tehnici profesionale de masaj și penetrare. Rezultatul: piele hidratată, tonifiată și luminoasă imediat după prima ședință."
      ]}
      indications={[
        "Piele deshidratată în sezonul rece",
        "Ten lipsit de luminozitate și vitalitate",
        "Pregătire pentru eveniment sau vacanță",
        "Îngrijire intensivă după vara cu expunere solară"
      ]}
      
      prices={[
        { label: "Winther Glow", detail: "Tratament sezonier hidratare", price: "600" }
      ]}
      faq={FAQ_WINTHER_GLOW}
      relatedLinks={[
        { label: "Curățare Dermatologică", href: "/tratamente-faciale/curatare-dermatologica/" },
        { label: "Peeling Chimic", href: "/tratamente-faciale/peeling-chimic/" },
        { label: "Skinbooster", href: "/dermatologie-estetica/skinbooster/" }
      ]}
    />
  );
}
