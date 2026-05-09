import type { Metadata } from "next";
import TreatmentPage from "@/components/TreatmentPage";
import { FAQ_ACID_HIALURONIC } from "@/lib/data/schema";

export const metadata: Metadata = {
  title: "Injecții Acid Hialuronic Timișoara – Buze, Pomeți, Cearcăne | Juvena",
  description:
    "Injecții acid hialuronic la Juvena Timișoara: augmentare buze, volumizare pomeți, corecție cearcăne și riduri. Medic specialist, rezultate naturale.",
  alternates: { canonical: "https://juvena-timisoara.ro/dermatologie-estetica/acid-hialuronic/" },
};

const BASE = "https://juvena-timisoara.ro";

export default function AcidHialuronicPage() {
  return (
    <TreatmentPage
      breadcrumbs={[
        { name: "Acasă", href: "/" },
        { name: "Dermatologie Estetică", href: "/dermatologie-estetica/" },
        { name: "Acid Hialuronic", href: "/dermatologie-estetica/acid-hialuronic/" },
      ]}
      eyebrow="Dermatologie Estetică"
      title="Injecții acid hialuronic"
      subtitle="Conturare și volumizare facială cu rezultate naturale, realizate de medic specialist."
      description={[
        "Acidul hialuronic este una dintre substanțele cel mai frecvent utilizate în medicina estetică modernă. Este o substanță naturală produsă de organism, cu rol esențial în hidratarea și structurarea țesuturilor. Odată cu vârsta, producția sa scade, ceea ce duce la pierderea volumului facial și apariția ridurilor.",
        "La Juvena Timișoara, utilizăm acid hialuronic reticulat de înaltă calitate, din game premium cu certificare CE. Produsele sunt selectate în funcție de zona tratată, densitate și nevoile individuale ale pacientului.",
        "Procedura este minim invazivă, se realizează în cabinetul medical și nu necesită internare sau timp de recuperare prelungit. Rezultatele sunt vizibile imediat după ședință și se îmbunătățesc în 2-3 săptămâni, pe măsură ce produsul se integrează în țesuturi.",
      ]}
      indications={[
        "Volumizarea și definirea buzelor",
        "Corectarea cearcănelor și zonei perioculare",
        "Augmentarea pomeților și volumizarea frunții",
        "Conturarea mandibulei și a bărbiei",
        "Corectarea nasului (rinoplastie non-chirurgicală)",
        "Tratamentul șanțurilor nazolabiale și al ridurilor profunde",
        "Rejuvenarea mâinilor",
        "Corectarea cicatricilor acneice",
        "Augmentarea tâmplelor",
      ]}
      protocol={[
        "Consultație medicală: evaluarea morfologiei faciale, discuția obiectivelor și alegerea produsului potrivit.",
        "Aplicarea cremei anestezice topice (30 de minute) pentru confort maxim.",
        "Dezinfectarea zonei de tratament.",
        "Injectarea precisă a acidului hialuronic cu canulă sau ac fin, în funcție de zonă.",
        "Masaj ușor pentru distribuirea uniformă a produsului.",
        "Evaluarea rezultatului imediat și recomandări post-procedurală.",
      ]}
      contraindications={[
        "Sarcina și alăptarea",
        "Tulburări de coagulare sau tratament anticoagulant",
        "Infecții active sau leziuni cutanate la locul injectării",
        "Alergii cunoscute la acid hialuronic sau lidocaină",
        "Afecțiuni autoimune active",
        "Tendință la formare de cicatrici keloide",
      ]}
      prices={[
        { label: "Augmentare buze", detail: "0,5 ml", price: "800" },
        { label: "Augmentare buze", detail: "1 ml", price: "1.200" },
        { label: "Volumizare frunte / pomeți / bărbie", detail: "1 ml", price: "1.400" },
        { label: "Corecție cearcăne / cicatrici", detail: "1 ml", price: "1.400" },
        { label: "Conturare mandibulă / nas", detail: "1 ml", price: "1.400" },
        { label: "Rejuvenare mâini / tâmple", detail: "1 ml", price: "1.400" },
      ]}
      faq={FAQ_ACID_HIALURONIC}
      schema={{
        name: "Tratament cu Acid Hialuronic Timișoara",
        description:
          "Injecții acid hialuronic pentru augmentare, conturare și corecție facială la Juvena Timișoara. Buze, pomeți, cearcăne, mandibulă.",
        url: `${BASE}/dermatologie-estetica/acid-hialuronic/`,
        price: "800",
        bodyLocation: "față",
      }}
      relatedLinks={[
        { label: "Toxină Botulinică", href: "/dermatologie-estetica/toxina-botulinica/" },
        { label: "Skinbooster", href: "/dermatologie-estetica/skinbooster/" },
        { label: "Biostimulatori Colagen", href: "/dermatologie-estetica/biostimulatori-colagen/" },
        { label: "Hialuronidază", href: "/dermatologie-estetica/hialuronidaza/" },
      ]}
    />
  );
}
