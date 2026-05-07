import type { Metadata } from "next";
import TreatmentPage from "@/components/TreatmentPage";

export const metadata: Metadata = {
  title: "Lipoliză Injectabilă Timișoara – Lemon Bottle & Aqualix | Juvena",
  description:
    "Reducerea depozitelor de grăsime localizată cu Lemon Bottle și Aqualix. Tratament non-chirurgical disponibil la Juvena Timișoara.",
  alternates: { canonical: "https://juvena-timisoara.ro/dermatologie-estetica/lipoliza-injectabila/" },
};

export default function LipolizaPage() {
  return (
    <TreatmentPage
      breadcrumbs={[
        { name: "Acasă", href: "/" },
        { name: "Dermatologie Estetică", href: "/dermatologie-estetica/" },
        { name: "Lipoliză Injectabilă", href: "/dermatologie-estetica/lipoliza-injectabila/" },
      ]}
      eyebrow="Dermatologie Estetică"
      title="Lipoliză Injectabilă"
      subtitle="Reducerea non-chirurgicală a depozitelor de grăsime localizată cu Lemon Bottle și Aqualix."
      description={[
        "Lipoliza injectabilă este o metodă non-chirurgicală pentru reducerea depozitelor localizate de grăsime care nu răspund la dietă și exerciții fizice. Se bazează pe injectarea unor substanțe lipolitice direct în stratul de grăsime subcutanat, care descompun adipocitele.",
        "Lemon Bottle este un produs de lipoliză de nouă generație, cu formulă pe bază de Riboflavin (vitamina B2), Lecitina și Bromelaina. Acționează rapid, cu inflamație minimă post-procedurală. Aqualix este bazat pe deoxicolat de sodiu, cu eficacitate demonstrată clinic.",
        "Rezultatele devin vizibile treptat, pe parcursul a 4-8 săptămâni după procedură, pe măsură ce grăsimea este eliminată natural prin limfă. Sunt necesare, de obicei, 2-4 ședințe pentru un rezultat optim.",
      ]}
      indications={[
        "Grăsime localizată submenton (dublu bărbie)",
        "Lipomata mici",
        "Depozite de grăsime faciale (jowls, obraji)",
        "Grăsime abdominală localizată",
        "Grăsime pe brațe sau coapse (în cantități moderate)",
      ]}
      protocol={[
        "Consultație medicală și evaluarea zonei de tratat.",
        "Fotografii pre-tratament.",
        "Dezinfectare și anestezie locală.",
        "Injectarea soluției lipolitice cu ace fine în stratul adipos.",
        "Masaj ușor pentru distribuire uniformă.",
        "Recomandări: hidratare crescută, evitarea cădurii excesive 24 ore.",
      ]}
      contraindications={[
        "Sarcina și alăptarea",
        "Diabet zaharat necontrolat",
        "Boli autoimune sau hepatice severe",
        "Infecții active la locul de tratament",
        "Obezitate (lipoliza injectabilă nu este tratament pentru obezitate)",
      ]}
      prices={[
        { label: "Lemon Bottle – lipoliză injectabilă", detail: "per sesiune", price: "600" },
        { label: "Aqualix – lipoliză injectabilă", detail: "per sesiune", price: "600" },
      ]}
      schema={{
        name: "Lipoliză Injectabilă Timișoara – Lemon Bottle & Aqualix",
        description: "Reducerea grăsimii localizate cu Lemon Bottle și Aqualix la Juvena Timișoara.",
        url: "https://juvena-timisoara.ro/dermatologie-estetica/lipoliza-injectabila/",
        price: "600",
        bodyLocation: "față, corp",
      }}
      relatedLinks={[
        { label: "Acid Hialuronic", href: "/dermatologie-estetica/acid-hialuronic/" },
        { label: "Terapia Vampir PRP", href: "/dermatologie-estetica/terapia-vampir-prp/" },
      ]}
    />
  );
}
