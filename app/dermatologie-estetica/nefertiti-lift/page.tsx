import type { Metadata } from "next";
import TreatmentPage from "@/components/TreatmentPage";
import { FAQ_NEFERTITI } from "@/lib/data/schema";

export const metadata: Metadata = {
  title: "Nefertiti Lift Timișoara – Lifting Gât Fără Bisturiu | Juvena",
  description: "Redefinirea conturului gâtului și mandibulei cu toxină botulinică prin tehnica Nefertiti lift la Juvena Timișoara.",
  alternates: { canonical: "https://juvena.ro/dermatologie-estetica/nefertiti-lift/" },
};

export default function Page() {
  return (
    <TreatmentPage
      breadcrumbs={[
        { name: "Acasă", href: "/" },
        { name: "Dermatologie Estetică", href: "/dermatologie-estetica/" },
        { name: "Nefertiti Lift", href: "/dermatologie-estetica/nefertiti-lift/" }
      ]}
      eyebrow="Dermatologie Estetică"
      title="Nefertiti Lift Timișoara"
      subtitle="Redefinirea conturului gâtului și mandibulei cu toxină botulinică – fără bisturiu."
      description={[
        "Tehnica Nefertiti lift relaxează mușchiul platysma din gât, care trage în jos conturul mandibular. Prin injectarea toxinei botulinice de-a lungul mandibulei și în benzile platysma, se obține un efect de lifting al gâtului și definire a liniei maxilare.",
        "Este o alternativă non-chirurgicală la lifting-ul facial clasic, ideală pentru pacienții cu o ptoza ușoară spre moderată a contourului facial inferior și cu benzi platysma vizibile."
      ]}
      indications={[
        "Benzi platysma vizibile la gât",
        "Ptoza ușoară a conturului mandibular",
        "Riduri orizontale ale gâtului",
        "Dorința de definire non-chirurgicală a liniei maxilare"
      ]}
      contraindications={[
        "Sarcina și alăptarea",
        "Miastenia gravis",
        "Ptoza cervicală severă (necesită tratament chirurgical)"
      ]}
      prices={[
        { label: "Nefertiti lift – riduri gât", price: "1.200" }
      ]}
      faq={FAQ_NEFERTITI}
      relatedLinks={[
        { label: "Toxină Botulinică", href: "/dermatologie-estetica/injectari-toxina-botulinica/" },
        { label: "Acid Hialuronic – Conturare mandibulă", href: "/dermatologie-estetica/injectari-acid-hialuronic/" }
      ]}
    />
  );
}
