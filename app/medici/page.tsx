import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CtaSection from "@/components/CtaSection";
import SectionHeader from "@/components/ui/SectionHeader";
import Breadcrumb from "@/components/ui/Breadcrumb";

export const metadata: Metadata = {
  title: "Medicii Noștri – Dermatologi & Esteticieni Timișoara | Juvena",
  description:
    "Cunoaște echipa Juvena Timișoara: medici dermatologi și esteticieni cu experiență în tratamente injectabile, dermatoscopie și îngrijire avansată a pielii.",
  alternates: { canonical: "https://juvena-timisoara.ro/medici/" },
};

// Placeholder — se completează cu date reale după aprobare
const DOCTORS = [
  {
    name: "Dr. Medic Specialist",
    title: "Medic Dermatolog",
    specializations: ["Dermatologie Estetică", "Dermatoscopie", "Tratamente Injectabile"],
    bio: "Informațiile despre medicii echipei Juvena Timișoara vor fi publicate în curând. Reveniti pentru detalii complete despre calificările și expertiza echipei noastre.",
    image: null,
  },
];

export default function MediciPage() {
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
              { name: "Medicii noștri", href: "/medici/" },
            ]}
          />
          <p className="text-[var(--gold)] text-xs tracking-[0.2em] uppercase mb-4">
            Echipa
          </p>
          <h1
            className="text-[var(--cream)] text-4xl md:text-5xl lg:text-6xl max-w-2xl leading-[1.1]"
            style={{ fontFamily: "var(--font-serif)", fontWeight: 300 }}
          >
            Medici specializați, rezultate dovedite
          </h1>
        </div>
      </section>

      {/* Intro */}
      <section className="section bg-[var(--cream)]">
        <div className="container">
          <div className="max-w-3xl">
            <SectionHeader
              eyebrow="Echipa Juvena"
              title="Expertiză medicală, nu doar estetică"
              subtitle="La Juvena, toate tratamentele sunt efectuate sau supervizate direct de medici specializați. Nu delegăm proceduri medicale către personal nemedical."
            />
            <p className="text-[var(--muted)] leading-relaxed">
              Medicii noștri au formare în dermatologie și/sau medicină estetică, cu participare la cursuri și conferințe internaționale de specialitate. Competența clinică este prioritatea noastră, nu volumul de pacienți.
            </p>
          </div>
        </div>
      </section>

      {/* Doctors grid */}
      <section className="section bg-[var(--cream-2)] pt-0">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {DOCTORS.map((doc) => (
              <div key={doc.name} className="bg-white border border-[var(--cream-2)] overflow-hidden group">
                {/* Photo placeholder */}
                <div className="bg-[var(--dark)]/5 h-72 flex items-center justify-center">
                  {doc.image ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={doc.image}
                      alt={doc.name}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="text-center text-[var(--muted)]">
                      <svg className="w-16 h-16 mx-auto mb-2 opacity-20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={0.75} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                      <p className="text-xs opacity-40">Foto în curând</p>
                    </div>
                  )}
                </div>

                <div className="p-7">
                  <div className="w-8 h-px bg-[var(--gold)] mb-4" />
                  <h2
                    className="text-[var(--dark)] text-xl mb-1"
                    style={{ fontFamily: "var(--font-serif)" }}
                  >
                    {doc.name}
                  </h2>
                  <p className="text-[var(--gold)] text-xs tracking-widest uppercase mb-4">
                    {doc.title}
                  </p>
                  <p className="text-[var(--muted)] text-sm leading-relaxed mb-5">
                    {doc.bio}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {doc.specializations.map((s) => (
                      <span
                        key={s}
                        className="text-xs px-3 py-1 bg-[var(--cream)] text-[var(--dark)] border border-[var(--cream-2)]"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
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
            Programează o consultație
          </h2>
          <p className="text-[var(--cream)]/60 mb-8 max-w-lg mx-auto">
            Discuți direct cu medicul specialist și primești un plan de tratament personalizat.
          </p>
          <Link href="/contact/" className="btn-gold">
            Contactează-ne
          </Link>
        </div>
      </section>

      <CtaSection />
      <Footer />
    </>
  );
}
