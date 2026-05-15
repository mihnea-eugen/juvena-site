import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CtaSection from "@/components/CtaSection";
import SectionHeader from "@/components/ui/SectionHeader";
import Breadcrumb from "@/components/ui/Breadcrumb";

export const metadata: Metadata = {
  title: "Despre Juvena – Clinică Estetică Timișoara",
  description:
    "Povestea clinicii Juvena din Timișoara. Echipă de medici specializați în dermatologie estetică și medicală, aparatură modernă, rezultate naturale.",
  alternates: { canonical: "https://juvena.ro/despre-noi/" },
};

const VALUES = [
  {
    title: "Siguranța pacientului",
    desc: "Fiecare procedură este precedată de o consultație completă. Nu efectuăm tratamente fără evaluare medicală prealabilă.",
  },
  {
    title: "Transparența prețurilor",
    desc: "Prețurile noastre sunt afișate public. Nu există costuri ascunse. Pacientul știe exact la ce să se aștepte înainte de ședință.",
  },
  {
    title: "Educația pacientului",
    desc: "Îți explicăm mecanismul fiecărui tratament, alternativele disponibile și ce urmează după procedură.",
  },
  {
    title: "Continuitatea îngrijirii",
    desc: "Urmărim evoluția fiecărui pacient în timp și ajustăm planul terapeutic în funcție de rezultate.",
  },
];

export default function DesprePage() {
  return (
    <>
      <Header />

      {/* Page hero */}
      <section className="bg-[var(--dark)] pt-32 pb-20">
        <div className="container">
          <Breadcrumb
            light
            items={[
              { name: "Acasă", href: "/" },
              { name: "Despre noi", href: "/despre-noi/" },
            ]}
          />
          <p className="text-[var(--gold)] text-xs tracking-[0.2em] uppercase mb-4">
            Clinica noastră
          </p>
          <h1
            className="text-[var(--cream)] text-4xl md:text-5xl lg:text-6xl max-w-2xl leading-[1.1]"
            style={{ fontFamily: "var(--font-serif)", fontWeight: 300 }}
          >
            Medicina estetică practicată cu responsabilitate
          </h1>
        </div>
      </section>

      {/* Intro */}
      <section className="section bg-[var(--cream)]">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <SectionHeader
                eyebrow="Misiunea noastră"
                title="Îngrijire bazată pe cunoaștere medicală"
                subtitle="Juvena este o clinică privată din Timișoara dedicată dermatologiei estetice și medicale. Nu facem marketing agresiv și nu promitem rezultate ireale."
              />
              <p className="text-[var(--muted)] leading-relaxed mb-6">
                Clinica a fost fondată cu scopul de a oferi pacienților din Timișoara acces la tratamente estetice și dermatologice de calitate, într-un mediu sigur, supervizat medical. Fiecare procedură este realizată sau supervizată de un medic specialist.
              </p>
              <p className="text-[var(--muted)] leading-relaxed mb-8">
                Lucrăm cu produse de la furnizori autorizați, cu lanț termic traçabil și certificări CE. Protocoalele noastre sunt aliniate cu ghidurile internaționale din medicina estetică.
              </p>
              <Link href="/contact/" className="btn-gold">
                Programează consultație
              </Link>
            </div>

            {/* Placeholder imagine clinică */}
            <div className="bg-[var(--cream-2)] h-96 lg:h-full min-h-80 flex items-center justify-center border border-[var(--cream-2)]">
              <div className="text-center text-[var(--muted)]">
                <svg className="w-12 h-12 mx-auto mb-3 opacity-30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <p className="text-sm opacity-40">Foto clinică – în curând</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Valori */}
      <section className="section bg-[var(--cream-2)]">
        <div className="container">
          <SectionHeader
            eyebrow="Valorile noastre"
            title="Ce ne ghidează în fiecare zi"
            center
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {VALUES.map((v) => (
              <div key={v.title} className="bg-white p-8 border border-[var(--cream-2)]">
                <div className="w-8 h-px bg-[var(--gold)] mb-5" />
                <h3
                  className="text-[var(--dark)] text-xl mb-3"
                  style={{ fontFamily: "var(--font-serif)" }}
                >
                  {v.title}
                </h3>
                <p className="text-[var(--muted)] text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[var(--dark)]">
        <div className="container text-center">
          <h2
            className="text-[var(--cream)] text-3xl md:text-4xl mb-4"
            style={{ fontFamily: "var(--font-serif)", fontWeight: 300 }}
          >
            Cunoaște echipa noastră
          </h2>
          <p className="text-[var(--cream)]/60 mb-8 max-w-lg mx-auto">
            Descoperă medicii din spatele Juvena — specializările lor, experiența și filosofia de lucru.
          </p>
          <Link href="/medici/" className="btn-gold">
            Medicii noștri
          </Link>
        </div>
      </section>

      <CtaSection />
      <Footer />
    </>
  );
}
