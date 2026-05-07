import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SectionHeader from "@/components/ui/SectionHeader";
import TreatmentCard from "@/components/ui/TreatmentCard";
import { CATEGORIES } from "@/lib/data/treatments";
import { schemaFAQ, FAQ_ACID_HIALURONIC } from "@/lib/data/schema";

export const metadata: Metadata = {
  title: "Juvena Timișoara – Clinică Dermatologie Estetică & Medicală",
  description:
    "Clinică de dermatologie estetică și medicală în Timișoara. Acid hialuronic, toxină botulinică, skinbooster, dermatoscopie digitală. Programări online.",
  alternates: { canonical: "https://juvena-timisoara.ro/" },
};

const STATS = [
  { value: "3.000+", label: "Proceduri efectuate" },
  { value: "98%", label: "Pacienți mulțumiți" },
  { value: "5+", label: "Ani de experiență" },
  { value: "3", label: "Specialități medicale" },
];

const WHY_US = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: "Medici specializați",
    desc: "Toți procedurile sunt realizate exclusiv de medici cu specializare în dermatologie estetică.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    ),
    title: "Produse premium",
    desc: "Utilizăm exclusiv produse certificate CE, de la branduri internaționale de top.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
    title: "Rezultate naturale",
    desc: "Fiecare tratament este adaptat morfologiei individuale. Obiectivul nostru: îmbunătățire, nu transformare.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
    title: "Consultație inclusă",
    desc: "Fiecare pacient beneficiază de o evaluare completă înainte de orice procedură.",
  },
];

export default function HomePage() {
  const faqSchema = schemaFAQ(FAQ_ACID_HIALURONIC);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Header />

      {/* ── Hero ────────────────────────────────────────────── */}
      <section className="relative min-h-screen flex items-center bg-[var(--dark)] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#1C1B2E] via-[#252438] to-[#1a1929]" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--gold)] to-transparent" />

        <div className="container relative z-10 pt-28 pb-20">
          <div className="max-w-3xl">
            <p className="text-[var(--gold)] text-xs tracking-[0.25em] uppercase mb-6 animate-fade-up">
              Timișoara · Clinică Medicală
            </p>
            <h1
              className="text-cream text-5xl md:text-6xl lg:text-7xl mb-8 animate-fade-up leading-[1.1]"
              style={{ animationDelay: "0.1s", fontFamily: "var(--font-serif)", fontWeight: 300 }}
            >
              Frumusețe
              <br />
              <span className="text-[var(--gold)]">cu precizie</span>
              <br />
              medicală
            </h1>
            <p
              className="text-cream/60 text-lg md:text-xl leading-relaxed mb-10 max-w-xl animate-fade-up"
              style={{ animationDelay: "0.2s" }}
            >
              Dermatologie estetică și medicală realizată exclusiv de medici
              specializați. Tratamente injectabile, dermatoscopie digitală și
              proceduri faciale premium în Timișoara.
            </p>
            <div
              className="flex flex-wrap gap-4 animate-fade-up"
              style={{ animationDelay: "0.3s" }}
            >
              <Link href="/contact/" className="btn-gold">
                Programează consultație
              </Link>
              <Link href="/preturi/" className="btn-outline">
                Vezi prețurile
              </Link>
            </div>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-cream/30">
          <span className="text-xs tracking-widest uppercase">Scroll</span>
          <div className="w-px h-10 bg-gradient-to-b from-cream/30 to-transparent" />
        </div>
      </section>

      {/* ── Stats ────────────────────────────────────────────── */}
      <section className="bg-[var(--cream-2)] py-16">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {STATS.map((s) => (
              <div key={s.label} className="text-center">
                <p
                  className="text-4xl md:text-5xl text-[var(--dark)] mb-2"
                  style={{ fontFamily: "var(--font-serif)", fontWeight: 300 }}
                >
                  {s.value}
                </p>
                <p className="text-[var(--muted)] text-sm tracking-wide">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Categorii servicii ──────────────────────────────── */}
      <section className="section bg-[var(--cream)]">
        <div className="container">
          <SectionHeader
            eyebrow="Servicii"
            title="Tratamente disponibile"
            subtitle="Trei domenii de expertiză sub același acoperiș: estetică injectabilă, dermatologie medicală și îngrijire facială avansată."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {CATEGORIES.map((cat) => (
              <Link
                key={cat.slug}
                href={`/${cat.slug}/`}
                className="group block bg-white border border-[var(--cream-2)] p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-10 h-px bg-[var(--gold)] mb-6" />
                <h2
                  className="text-[var(--dark)] text-xl mb-3 group-hover:text-[var(--gold)] transition-colors"
                  style={{ fontFamily: "var(--font-serif)", fontWeight: 400 }}
                >
                  {cat.name}
                </h2>
                <p className="text-[var(--muted)] text-sm leading-relaxed mb-6">
                  {cat.description}
                </p>
                <span className="flex items-center gap-1 text-xs text-[var(--gold)] tracking-widest uppercase">
                  <span>Descoperă</span>
                  <svg className="w-3 h-3 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── De ce Juvena ────────────────────────────────────── */}
      <section className="section bg-[var(--dark)]">
        <div className="container">
          <SectionHeader
            eyebrow="De ce Juvena"
            title="Standardul care ne definește"
            subtitle="Fiecare detaliu al experienței la Juvena este conceput cu gândul la siguranța și satisfacția pacientului."
            center
            light
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {WHY_US.map((item) => (
              <div
                key={item.title}
                className="border border-white/10 p-7 hover:border-[var(--gold)]/40 transition-colors group"
              >
                <div className="text-[var(--gold)] mb-5 group-hover:scale-110 transition-transform inline-block">
                  {item.icon}
                </div>
                <h3
                  className="text-[var(--cream)] text-lg mb-3"
                  style={{ fontFamily: "var(--font-serif)" }}
                >
                  {item.title}
                </h3>
                <p className="text-[var(--cream)]/50 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Tratamente populare ─────────────────────────────── */}
      <section className="section bg-[var(--cream)]">
        <div className="container">
          <SectionHeader
            eyebrow="Populare"
            title="Tratamente cel mai solicitate"
            subtitle="O selecție din procedurile frecvent alese de pacienții noștri."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
            {CATEGORIES[0].treatments.slice(0, 9).map((t, i) => (
              <TreatmentCard
                key={i}
                treatment={t}
                href="/dermatologie-estetica/"
              />
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link href="/preturi/" className="btn-outline">
              Toate prețurile
            </Link>
          </div>
        </div>
      </section>

      {/* ── CTA final ───────────────────────────────────────── */}
      <section className="py-24 bg-[var(--gold)] relative overflow-hidden">
        <div className="container relative text-center">
          <h2
            className="text-white text-4xl md:text-5xl mb-4"
            style={{ fontFamily: "var(--font-serif)", fontWeight: 300 }}
          >
            Începe cu o consultație
          </h2>
          <p className="text-white/80 text-lg mb-10 max-w-xl mx-auto">
            Fiecare tratament pornește de la o evaluare personalizată. Programează-ți consultația și discutăm împreună soluțiile potrivite pentru tine.
          </p>
          <Link
            href="/contact/"
            className="inline-flex items-center gap-2 bg-[var(--dark)] text-[var(--cream)] py-4 px-8 text-sm tracking-widest uppercase hover:bg-[#252438] transition-colors"
          >
            Programare online
          </Link>
        </div>
      </section>

      <Footer />
    </>
  );
}
