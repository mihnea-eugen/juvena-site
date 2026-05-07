import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SectionHeader from "@/components/ui/SectionHeader";
import TreatmentCard from "@/components/ui/TreatmentCard";
import Breadcrumb from "@/components/ui/Breadcrumb";
import { CATEGORIES } from "@/lib/data/treatments";

export const metadata: Metadata = {
  title: "Tratamente Faciale Timișoara – Peeling & Curățare | Juvena",
  description:
    "Curățare dermatologică profesională, peeling chimic, terapia Vampir cu Dermapen și Winther Glow la clinica Juvena din Timișoara.",
  alternates: { canonical: "https://juvena-timisoara.ro/tratamente-faciale/" },
};

const category = CATEGORIES.find((c) => c.slug === "tratamente-faciale")!;

const PROCEDURES = [
  {
    href: "/tratamente-faciale/curatare-dermatologica/",
    title: "Curățare Dermatologică",
    desc: "Curățare facială profundă realizată de medic dermatolog, adaptată tipului de ten.",
    icon: "✦",
  },
  {
    href: "/tratamente-faciale/dermapen/",
    title: "Terapia Vampir Dermapen",
    desc: "Microneedling cu PRP pentru rejuvenare, vergeturi și cicatrici. Disponibil facial și corporal.",
    icon: "✦",
  },
  {
    href: "/tratamente-faciale/peeling-chimic/",
    title: "Peeling Chimic",
    desc: "Glow Peel pentru luminozitate și Magic Peel pentru anti-aging și pete pigmentare.",
    icon: "✦",
  },
  {
    href: "/tratamente-faciale/winther-glow/",
    title: "Winther Glow",
    desc: "Tratament intensiv de hidratare și revigorare a pielii pentru sezonul rece.",
    icon: "✦",
  },
];

export default function TratamenteFacialeePage() {
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
              { name: "Tratamente Faciale", href: "/tratamente-faciale/" },
            ]}
          />
          <p className="text-[var(--gold)] text-xs tracking-[0.2em] uppercase mb-4">
            Categorie
          </p>
          <h1
            className="text-[var(--cream)] text-4xl md:text-5xl lg:text-6xl max-w-2xl leading-[1.1]"
            style={{ fontFamily: "var(--font-serif)", fontWeight: 300 }}
          >
            Tratamente Faciale
          </h1>
          <p className="text-[var(--cream)]/60 mt-4 max-w-xl text-lg">
            {category.description}
          </p>
        </div>
      </section>

      {/* Proceduri */}
      <section className="section bg-[var(--cream)]">
        <div className="container">
          <SectionHeader
            eyebrow="Proceduri disponibile"
            title="Îngrijire non-invazivă de înaltă calitate"
            subtitle="Tratamente faciale realizate de medic dermatolog, cu produse și echipamente profesionale."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-16">
            {PROCEDURES.map((proc) => (
              <Link
                key={proc.href}
                href={proc.href}
                className="group block bg-white border border-[var(--cream-2)] p-8 hover:shadow-lg hover:border-[var(--gold)]/30 transition-all"
              >
                <div className="text-[var(--gold)] text-xs mb-5">✦</div>
                <h2
                  className="text-[var(--dark)] text-xl mb-3 group-hover:text-[var(--gold)] transition-colors"
                  style={{ fontFamily: "var(--font-serif)" }}
                >
                  {proc.title}
                </h2>
                <p className="text-[var(--muted)] text-sm leading-relaxed mb-5">
                  {proc.desc}
                </p>
                <span className="flex items-center gap-1 text-xs text-[var(--gold)] tracking-widest uppercase">
                  <span>Detalii</span>
                  <svg className="w-3 h-3 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </Link>
            ))}
          </div>

          {/* Prețuri */}
          <SectionHeader eyebrow="Prețuri" title="Lista de prețuri faciale" />
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
            {category.treatments.map((t, i) => (
              <TreatmentCard key={i} treatment={t} />
            ))}
          </div>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link href="/contact/" className="btn-gold">
              Programează tratament
            </Link>
            <Link href="/preturi/" className="btn-outline">
              Toate prețurile
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
