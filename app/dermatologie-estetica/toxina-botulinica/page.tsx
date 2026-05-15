import type { Metadata } from "next";
import TreatmentPage from "@/components/TreatmentPage";
import { FAQ_TOXINA_BOTULINICA } from "@/lib/data/schema";

export const metadata: Metadata = {
  title: "Injecții Toxină Botulinică Timișoara – Riduri & Botox | Juvena",
  description:
    "Injecții toxină botulinică la Juvena Timișoara: riduri frunte, glabelă, periocular. Babybotox, face slimming, Nefertiti lift. Medic specialist dermatolog.",
  alternates: { canonical: "https://juvena.ro/dermatologie-estetica/toxina-botulinica/" },
};

const BASE = "https://juvena.ro";

export default function ToxinaBotulinicaPage() {
  return (
    <TreatmentPage
      breadcrumbs={[
        { name: "Acasă", href: "/" },
        { name: "Dermatologie Estetică", href: "/dermatologie-estetica/" },
        { name: "Toxină Botulinică", href: "/dermatologie-estetica/toxina-botulinica/" },
      ]}
      eyebrow="Dermatologie Estetică"
      title="Injecții toxină botulinică"
      subtitle="Tratament de referință pentru riduri de expresie, babybotox preventiv, face slimming și hiperhidroză."
      description={[
        "Toxina botulinică este una dintre cele mai studiate și sigure substanțe din medicina estetică, cu utilizare clinică de peste 30 de ani. Acționează prin relaxarea temporară a mușchilor tratați, reducând ridurile de expresie și prevenind formarea unora noi.",
        "La Juvena utilizăm preparate aprobate de ANMDM și EMA, dozate precis în funcție de anatomia fiecărui pacient. Tehnica de injectare este adaptată individual pentru a obține un rezultat natural, fără aspect înghețat.",
        "Efectul se instalează gradual în 3-7 zile și atinge maximul la 2 săptămâni. Durata medie a efectului este de 3-6 luni, cu tendința de prelungire la pacienții cu tratamente repetate.",
      ]}
      indications={[
        "Riduri orizontale ale frunții",
        "Riduri verticale glabelare (între sprâncene)",
        "Riduri perioculare (piciorul de gâscă)",
        "Babybotox – doze reduse, efect preventiv, natural",
        "Gummy smile – reducerea expunerii gingivale",
        "Bunny lines – riduri pe dosul nasului",
        "Face slimming – reducerea mușchiului maseter, bruxism",
        "Nefertiti lift – redefinirea conturului gâtului și mandibulei",
        "Hiperhidroză axilară, palmară sau plantară",
      ]}
      protocol={[
        "Consultație medicală: evaluarea mușchilor mimicii, stabilirea dozelor și a punctelor de injectare.",
        "Fotografii pre-procedurală pentru documentare.",
        "Dezinfectarea zonei de tratament.",
        "Injectarea precisă a toxinei botulinice cu ace ultra-fine.",
        "Evaluarea imediată post-procedurală.",
        "Recomandări: evitarea exercițiilor fizice intense, a saunei și a masajului facial 24 ore.",
      ]}
      contraindications={[
        "Sarcina și alăptarea",
        "Miastenia gravis sau alte boli neuromusculare",
        "Tratament cu aminoglicozide sau anticoagulante",
        "Infecții active la locul de injectare",
        "Alergie la toxina botulinică sau la excipienți",
      ]}
      prices={[
        { label: "1 zonă", detail: "Glabelă / frunte / periocular", price: "600" },
        { label: "2 zone", price: "900" },
        { label: "3 zone", price: "1.200" },
        { label: "4 zone", price: "1.500" },
        { label: "Babybotox – 1 zonă", detail: "Doze reduse, efect preventiv", price: "300" },
        { label: "Gummy smile / Bunny lines", price: "600" },
        { label: "Face Slimming (maseter)", detail: "Bruxism inclus", price: "1.200" },
        { label: "Nefertiti lift", price: "1.200" },
        { label: "Hiperhidroză", price: "1.800 – 2.000" },
      ]}
      faq={FAQ_TOXINA_BOTULINICA}
      schema={{
        name: "Tratament cu Toxină Botulinică Timișoara",
        description:
          "Injecții toxină botulinică pentru riduri, babybotox, face slimming, Nefertiti lift și hiperhidroză la Juvena Timișoara.",
        url: `${BASE}/dermatologie-estetica/toxina-botulinica/`,
        price: "600",
        bodyLocation: "față, gât",
      }}
      relatedLinks={[
        { label: "Acid Hialuronic", href: "/dermatologie-estetica/acid-hialuronic/" },
        { label: "Biostimulatori Colagen", href: "/dermatologie-estetica/biostimulatori-colagen/" },
        { label: "Nefertiti Lift", href: "/dermatologie-estetica/nefertiti-lift/" },
        { label: "Face Slimming", href: "/dermatologie-estetica/face-slimming/" },
      ]}
    />
  );
}
