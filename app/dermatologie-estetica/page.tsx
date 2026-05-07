import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SectionHeader from "@/components/ui/SectionHeader";
import TreatmentCard from "@/components/ui/TreatmentCard";
import Breadcrumb from "@/components/ui/Breadcrumb";
import { CATEGORIES } from "@/lib/data/treatments";

export const metadata: Metadata = {
  title: "Dermatologie Estetică Timișoara – Acid Hialuronic & Botox | Juvena",
  description:
    "Tratamente injectabile premium în Timișoara: acid hialuronic, toxină botulinică, biostimulatori de colagen, lipoliză, skinbooster și PRP. Medici specializați.",
  alternates: { canonical: "https://juvena-timisoara.ro/dermatologie-estetica/" },
};

const category = CATEGORIES.find((c) => c.slug === "dermatologie-estetica")!;

const PROCEDURE_GROUPS = [
  {
    title: "Acid Hialuronic",
    href: "/dermatologie-estetica/acid-hialuronic/",
    desc: "Augmentare buze, volumizare, corecție riduri și conturare facială cu acid hialuronic.",
    treatments: category.treatments.filter((t) => t.name.startsWith("Acid Hialuronic")),
  },
  {
    title: "Toxină Botulinică",
    href: "/dermatologie-estetica/toxina-botulinica/",
    desc: "Tratament riduri, babybotox, face slimming, Nefertiti lift și hiperhidroză.",
    treatments: category.treatments.filter((t) =>
      t.name.startsWith("Toxină") || t.name.startsWith("Babybotox") ||
      t.name.startsWith("Gummy") || t.name.startsWith("Face") ||
      t.name.startsWith("Nefertiti") || t.name.startsWith("Hiper")
    ),
  },
  {
    title: "Biostimulatori & Skinbooster",
    href: "/dermatologie-estetica/skinbooster/",
    desc: "Rejuvenare profundă cu HarmoniCa, Sculptra, Profhilo, Restylane și Redensity.",
    treatments: category.treatments.filter((t) =>
      t.name.startsWith("HarmoniCa") || t.name.startsWith("Sculptra") ||
      t.name.startsWith("Skinbooster")
    ),
  },
  {
    title: "Lipoliză & PRP",
    href: "/dermatologie-estetica/terapia-vampir-prp/",
    desc: "Reducerea grăsimii localizate și rejuvenare cu plasmă bogată în trombocite.",
    treatments: category.treatments.filter((t) =>
      t.name.startsWith("Lemon") || t.name.startsWith("Aqualix") ||
      t.name.startsWith("Terapia")
    ),
  },
];

export default function DermatologieEsteticaPage() {
  return (
    <>
      <Header />

      {/* Hero */}
      <section className="bg-[var(--dark)] pt-32 pb-20">
        <div className="container">
          <Breadcrumb
            light
            items={[
              { name: "Acasă", href: "/" },
              { name: "Dermatologie Estetică", href: "/dermatologie-estetica/" },
            ]}
          />
          <p className="text-[var(--gold)] text-xs tracking-[0.2em] uppercase mb-4">
            Categorie
          </p>
          <h1
            className="text-[var(--cream)] text-4xl md:text-5xl lg:text-6xl max-w-2xl leading-[1.1]"
            style={{ fontFamily: "var(--font-serif)", fontWeight: 300 }}
          >
            Dermatologie Estetică
          </h1>
          <p className="text-[var(--cream)]/60 mt-4 max-w-xl text-lg">
            {category.description}
          </p>
        </div>
      </section>

      {/* Grupuri de proceduri */}
      <section className="section bg-[var(--cream)]">
        <div className="container">
          <SectionHeader
            eyebrow="Proceduri disponibile"
            title="Tratamente injectabile"
            subtitle="Fiecare procedură este realizată de medic specialist, cu produse certificate CE, după un protocol personalizat."
          />

          <div className="space-y-16">
            {PROCEDURE_GROUPS.map((group) => (
              <div key={group.title}>
                <div className="flex items-end justify-between mb-6">
                  <div>
                    <h2
                      className="text-[var(--dark)] text-2xl"
                      style={{ fontFamily: "var(--font-serif)" }}
                    >
                      {group.title}
                    </h2>
                    <p className="text-[var(--muted)] text-sm mt-1">{group.desc}</p>
                  </div>
                  <Link
                    href={group.href}
                    className="hidden sm:flex items-center gap-1 text-xs text-[var(--gold)] tracking-widest uppercase shrink-0 ml-4"
                  >
                    <span>Detalii</span>
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
                  {group.treatments.map((t, i) => (
                    <TreatmentCard key={i} treatment={t} href={group.href} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lista completă */}
      <section className="section bg-[var(--cream-2)] pt-0">
        <div className="container">
          <SectionHeader
            eyebrow="Lista completă"
            title="Toate procedurile estetice"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
            {category.treatments.map((t, i) => (
              <TreatmentCard key={i} treatment={t} />
            ))}
          </div>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link href="/preturi/" className="btn-gold">
              Vezi lista completă de prețuri
            </Link>
            <Link href="/contact/" className="btn-outline">
              Programare
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
