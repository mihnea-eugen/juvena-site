import type { Metadata } from "next";
import TreatmentPage from "@/components/TreatmentPage";
import { FAQ_HIPERHIDROZA } from "@/lib/data/schema";

export const metadata: Metadata = {
  title: "Tratament Hiperhidroză Timișoara – Injecții Toxină Botulinică | Juvena",
  description: "Soluție eficientă pentru transpirație excesivă axilară, palmară și plantară cu toxină botulinică la clinica Juvena din Timișoara.",
  alternates: { canonical: "https://juvena.ro/dermatologie-estetica/hiperhidroza/" },
};

export default function Page() {
  return (
    <TreatmentPage
      breadcrumbs={[
        { name: "Acasă", href: "/" },
        { name: "Dermatologie Estetică", href: "/dermatologie-estetica/" },
        { name: "Hiperhidroză", href: "/dermatologie-estetica/hiperhidroza/" }
      ]}
      eyebrow="Dermatologie Estetică"
      title="Tratament hiperhidroză Timișoara"
      subtitle="Transpirație excesivă tratată non-invaziv cu toxină botulinică – efect de până la 12 luni."
      description={[
        "Hiperhidroza (transpirația excesivă) este o afecțiune care afectează calitatea vieții prin transpirație abundentă, necontrolată de factori termici sau emoționali. Localizările cel mai frecvent tratate sunt axilele, palmele și tălpile.",
        "Tratamentul cu toxină botulinică blochează temporar nervii colinergici responsabili de activarea glandelor sudoripare. Efectul se instalează în 7-14 zile și durează 6-12 luni.",
        "Procedura este realizată ambulatoriu, fără recuperare, și are un profil de siguranță excelent demonstrat în studii clinice."
      ]}
      indications={[
        "Hiperhidroză axilară primară",
        "Hiperhidroză palmară",
        "Hiperhidroză plantară",
        "Hiperhidroză facială sau frunte"
      ]}
      contraindications={[
        "Sarcina și alăptarea",
        "Miastenia gravis",
        "Alergie la toxina botulinică",
        "Infecții active la locul de tratament"
      ]}
      prices={[
        { label: "Hiperhidroză (axilă / palmar / plantar)", price: "1.800 – 2.000" }
      ]}
      faq={FAQ_HIPERHIDROZA}
      relatedLinks={[
        { label: "Toxină Botulinică", href: "/dermatologie-estetica/toxina-botulinica/" },
        { label: "Face Slimming", href: "/dermatologie-estetica/face-slimming/" }
      ]}
    />
  );
}
