import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SectionHeader from "@/components/ui/SectionHeader";
import Breadcrumb from "@/components/ui/Breadcrumb";
import { CATEGORIES } from "@/lib/data/treatments";

export const metadata: Metadata = {
  title: "Prețuri Tratamente Estetice Timișoara 2025 | Juvena",
  description:
    "Lista completă de prețuri pentru acid hialuronic, toxină botulinică, skinbooster, peeling chimic și dermatologie medicală la Juvena Timișoara.",
  alternates: { canonical: "https://juvena-timisoara.ro/preturi/" },
};

export default function PreturiPage() {
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
              { name: "Prețuri", href: "/preturi/" },
            ]}
          />
          <p className="text-[var(--gold)] text-xs tracking-[0.2em] uppercase mb-4">
            Transparență
          </p>
          <h1
            className="text-[var(--cream)] text-4xl md:text-5xl lg:text-6xl max-w-2xl leading-[1.1]"
            style={{ fontFamily: "var(--font-serif)", fontWeight: 300 }}
          >
            Prețuri clare, fără surprize
          </h1>
          <p className="text-[var(--cream)]/60 mt-4 max-w-xl text-lg">
            Lista completă a tratamentelor disponibile la Juvena Timișoara, cu prețurile aferente. Prețurile includ consultația pre-procedurală.
          </p>
        </div>
      </section>

      {/* Nota info */}
      <div className="bg-[var(--gold)]/10 border-b border-[var(--gold)]/20">
        <div className="container py-4 flex items-center gap-3">
          <svg className="w-4 h-4 text-[var(--gold)] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <p className="text-sm text-[var(--text)]">
            Prețurile sunt exprimate în RON și includ TVA. Consultul medical este inclus în prețul procedurii. Prețurile pot varia în funcție de evaluarea individuală.
          </p>
        </div>
      </div>

      {/* Prețuri pe categorii */}
      <section className="section bg-[var(--cream)]">
        <div className="container">
          <div className="space-y-16">
            {CATEGORIES.map((cat) => (
              <div key={cat.slug}>
                <SectionHeader
                  eyebrow={cat.name}
                  title={cat.name}
                  subtitle={cat.description}
                />

                <div className="bg-white border border-[var(--cream-2)]">
                  {/* Table header */}
                  <div className="grid grid-cols-[1fr_auto] gap-4 px-6 py-3 bg-[var(--dark)] text-cream text-xs tracking-widest uppercase">
                    <span>Tratament</span>
                    <span>Preț RON</span>
                  </div>

                  {/* Rows */}
                  <div className="divide-y divide-[var(--cream-2)]">
                    {cat.treatments.map((t, i) => (
                      <div
                        key={i}
                        className="grid grid-cols-[1fr_auto] gap-4 px-6 py-4 hover:bg-[var(--cream)]/60 transition-colors"
                      >
                        <div>
                          <p className="text-[var(--dark)] text-sm font-medium">{t.name}</p>
                          {t.detail && (
                            <p className="text-[var(--muted)] text-xs mt-0.5">{t.detail}</p>
                          )}
                        </div>
                        <div className="text-right">
                          <span
                            className="text-[var(--gold)] text-base"
                            style={{ fontFamily: "var(--font-serif)" }}
                          >
                            {t.price}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Footer link */}
                  <div className="px-6 py-4 bg-[var(--cream-2)]/50 border-t border-[var(--cream-2)]">
                    <Link
                      href={`/${cat.slug}/`}
                      className="text-xs text-[var(--gold)] hover:underline tracking-widest uppercase flex items-center gap-1"
                    >
                      <span>Detalii {cat.name}</span>
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="py-12 bg-[var(--cream-2)]">
        <div className="container max-w-3xl">
          <h2
            className="text-[var(--dark)] text-xl mb-4"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            Informații despre prețuri
          </h2>
          <div className="text-[var(--muted)] text-sm leading-relaxed space-y-3">
            <p>
              Prețurile de mai sus sunt orientative și includ procedura standard descrisă. Costul final poate diferi în funcție de cantitatea de produs utilizată, complexitatea cazului și protocolul individualizat stabilit de medic la consultație.
            </p>
            <p>
              La Juvena Timișoara, nu există taxe separate de consultație pentru procedurile programate. Evaluarea medicală pre-procedurală este inclusă în prețul tratamentului.
            </p>
            <p>
              Acceptăm plata în numerar și cu cardul. Nu oferim finanțare sau rate la momentul actual.
            </p>
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
            Ai întrebări despre prețuri?
          </h2>
          <p className="text-[var(--cream)]/60 mb-8 max-w-lg mx-auto">
            Contactează-ne direct sau programează o consultație pentru a primi un plan de tratament și o estimare personalizată.
          </p>
          <Link href="/contact/" className="btn-gold">
            Programare consultație
          </Link>
        </div>
      </section>

      <Footer />
    </>
  );
}
