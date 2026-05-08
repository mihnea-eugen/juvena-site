import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SectionHeader from "@/components/ui/SectionHeader";
import TreatmentCard from "@/components/ui/TreatmentCard";
import Breadcrumb from "@/components/ui/Breadcrumb";
import { CATEGORIES, flatTreatments } from "@/lib/data/treatments";
import { schemaFAQ, FAQ_DERMATOSCOPIE } from "@/lib/data/schema";

export const metadata: Metadata = {
  title: "Dermatologie Medicală Timișoara – Consult & Dermatoscopie | Juvena",
  description:
    "Consultații dermatologice, dermatoscopie digitală pentru analiza alunițelor, mici intervenții și electrocauterizare la Juvena Timișoara.",
  alternates: { canonical: "https://juvena-timisoara.ro/dermatologie-medicala/" },
};

const category = CATEGORIES.find((c) => c.slug === "dermatologie-medicala")!;
const treatments = flatTreatments(category);

const PROCEDURE_DETAILS = [
  {
    slug: "consult-dermatologic",
    href: "/dermatologie-medicala/consult-dermatologic/",
    title: "Consult Dermatologic",
    desc: "Evaluare completă a stării pielii, diagnostic diferențial, plan de tratament și recomandări terapeutice personalizate.",
    points: [
      "Anamneză completă și examinare clinică",
      "Evaluarea leziunilor cutanate existente",
      "Recomandări de tratament și îngrijire",
      "Eliberare rețetă medicală dacă este cazul",
    ],
  },
  {
    slug: "dermatoscopie",
    href: "/dermatologie-medicala/dermatoscopie/",
    title: "Dermatoscopie Digitală",
    desc: "Analiza non-invazivă a alunițelor și leziunilor pigmentare cu dermatoscop digital, pentru depistarea precoce a leziunilor suspecte.",
    points: [
      "Evaluare sistemică a tuturor alunițelor",
      "Imagine mărită de 10-20x cu iluminare polarizată",
      "Stocare digitală pentru monitorizare în timp",
      "Trimitere la specialiști oncologi dacă este necesar",
    ],
  },
  {
    slug: "electrocauterizare",
    href: "/dermatologie-medicala/electrocauterizare/",
    title: "Electrocauterizare",
    desc: "Îndepărtarea leziunilor cutanate benigne (xantelasme, papiloame, fibroame moi) prin curent electric de înaltă frecvență.",
    points: [
      "Procedură minim invazivă",
      "Recuperare rapidă",
      "Tratament eficient pentru leziuni benigne",
      "Realizată în condiții de sterilitate maximă",
    ],
  },
];

export default function DermatologieMedicalaPage() {
  const faqSchema = schemaFAQ(FAQ_DERMATOSCOPIE);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Header />

      {/* Hero */}
      <section className="bg-[var(--dark)] pt-32 pb-20">
        <div className="container">
          <Breadcrumb
            light
            items={[
              { name: "Acasă", href: "/" },
              { name: "Dermatologie Medicală", href: "/dermatologie-medicala/" },
            ]}
          />
          <p className="text-[var(--gold)] text-xs tracking-[0.2em] uppercase mb-4">
            Categorie
          </p>
          <h1
            className="text-[var(--cream)] text-4xl md:text-5xl lg:text-6xl max-w-2xl leading-[1.1]"
            style={{ fontFamily: "var(--font-serif)", fontWeight: 300 }}
          >
            Dermatologie Medicală
          </h1>
          <p className="text-[var(--cream)]/60 mt-4 max-w-xl text-lg">
            {category.description}
          </p>
        </div>
      </section>

      {/* Proceduri detaliate */}
      <section className="section bg-[var(--cream)]">
        <div className="container">
          <SectionHeader
            eyebrow="Servicii medicale"
            title="Diagnosticare și tratament dermatologic"
            subtitle="Consultații specializate, diagnostic precis și intervenții dermatologice în condiții de siguranță maximă."
          />

          <div className="space-y-8">
            {PROCEDURE_DETAILS.map((proc) => (
              <Link
                key={proc.slug}
                href={proc.href}
                className="group block bg-white border border-[var(--cream-2)] p-8 hover:shadow-lg hover:border-[var(--gold)]/30 transition-all"
              >
                <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-6 items-start">
                  <div>
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-8 h-px bg-[var(--gold)]" />
                      <h2
                        className="text-[var(--dark)] text-xl group-hover:text-[var(--gold)] transition-colors"
                        style={{ fontFamily: "var(--font-serif)" }}
                      >
                        {proc.title}
                      </h2>
                    </div>
                    <p className="text-[var(--muted)] text-sm leading-relaxed mb-5">
                      {proc.desc}
                    </p>
                    <ul className="space-y-2">
                      {proc.points.map((p) => (
                        <li key={p} className="flex items-start gap-2 text-sm text-[var(--muted)]">
                          <span className="text-[var(--gold)] mt-0.5 shrink-0">—</span>
                          <span>{p}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="md:text-right">
                    {treatments
                      .filter((t) => t.name.toLowerCase().includes(proc.title.toLowerCase().split(" ")[0].toLowerCase()))
                      .slice(0, 1)
                      .map((t, i) => (
                        <div key={i}>
                          <p className="text-xs text-[var(--muted)] tracking-widest uppercase mb-1">De la</p>
                          <span
                            className="text-[var(--gold)] text-2xl"
                            style={{ fontFamily: "var(--font-serif)" }}
                          >
                            {t.price} RON
                          </span>
                        </div>
                      ))}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Prețuri */}
      <section className="section bg-[var(--cream-2)] pt-0">
        <div className="container">
          <SectionHeader
            eyebrow="Prețuri"
            title="Lista de prețuri"
          />
          <div className="bg-white border border-[var(--cream-2)]">
            {treatments.map((t, i) => (
              <div
                key={i}
                className={`grid grid-cols-[1fr_auto] gap-4 px-6 py-4 ${i < treatments.length - 1 ? "border-b border-[var(--cream-2)]" : ""}`}
              >
                <div>
                  <p className="text-[var(--dark)] text-sm font-medium">{t.name}</p>
                  {t.detail && <p className="text-[var(--muted)] text-xs mt-0.5">{t.detail}</p>}
                </div>
                <span
                  className="text-[var(--gold)] text-base"
                  style={{ fontFamily: "var(--font-serif)" }}
                >
                  {t.price} RON
                </span>
              </div>
            ))}
          </div>
          <div className="mt-8">
            <Link href="/contact/" className="btn-gold">
              Programează consultație
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
