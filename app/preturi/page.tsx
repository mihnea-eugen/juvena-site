import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/ui/Breadcrumb";
import { CATEGORIES } from "@/lib/data/treatments";

export const metadata: Metadata = {
  title: "Prețuri Tratamente Estetice Timișoara 2026 | Juvena",
  description:
    "Lista completă de prețuri pentru acid hialuronic, toxină botulinică, skinbooster, peeling chimic și dermatologie medicală la Juvena Timișoara.",
  alternates: { canonical: "https://juvena-timisoara.ro/preturi/" },
};

const CATEGORY_ICONS: Record<string, string> = {
  "dermatologie-estetica": "◈",
  "dermatologie-medicala": "◉",
  "tratamente-faciale": "◇",
};

export default function PreturiPage() {
  return (
    <>
      <Header />

      {/* Hero */}
      <section className="bg-[var(--dark)] pt-32 pb-16">
        <div className="container">
          <Breadcrumb
            light
            items={[
              { name: "Acasă", href: "/" },
              { name: "Prețuri", href: "/preturi/" },
            ]}
          />
          <p className="text-[var(--gold)] text-xs tracking-[0.2em] uppercase mb-4 mt-6">
            Transparență totală
          </p>
          <h1
            className="text-[var(--cream)] text-4xl md:text-5xl lg:text-6xl max-w-2xl leading-[1.08]"
            style={{ fontFamily: "var(--font-serif)", fontWeight: 300 }}
          >
            Prețuri clare,<br />fără surprize
          </h1>
          <p className="text-[var(--cream)]/55 mt-5 max-w-lg text-base leading-relaxed">
            Consultul medical pre-procedural este inclus în prețul fiecărui tratament.
            Prețurile finale pot varia în funcție de evaluarea individuală.
          </p>
        </div>
      </section>

      {/* Info bar */}
      <div className="bg-[var(--gold)]/8 border-b border-[var(--gold)]/15">
        <div className="container py-3.5 flex flex-wrap items-center gap-x-8 gap-y-2">
          {[
            "Consultul inclus în preț",
            "Plată numerar & card",
            "Medici certificați",
          ].map((item) => (
            <div key={item} className="flex items-center gap-2">
              <span className="w-1 h-1 rounded-full bg-[var(--gold)] shrink-0" />
              <span className="text-xs text-[var(--text)] tracking-wide">{item}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Main content */}
      <div className="bg-[var(--cream)] min-h-screen">
        <div className="container py-12 md:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-[220px_1fr] gap-10 lg:gap-16">

            {/* ── Sticky category nav (desktop) ── */}
            <aside className="hidden lg:block">
              <nav className="sticky top-28 space-y-1">
                <p className="text-[var(--muted)] text-xs tracking-[0.18em] uppercase mb-5">
                  Categorii
                </p>
                {CATEGORIES.map((cat) => (
                  <a
                    key={cat.slug}
                    href={`#${cat.slug}`}
                    className="group flex items-center gap-3 py-2.5 px-3 text-sm text-[var(--muted)] hover:text-[var(--dark)] hover:bg-[var(--cream-2)] transition-all duration-200 rounded-sm"
                  >
                    <span className="text-[var(--gold)] opacity-60 group-hover:opacity-100 transition-opacity text-xs font-mono">
                      {CATEGORY_ICONS[cat.slug] ?? "◈"}
                    </span>
                    <span className="leading-snug">{cat.name}</span>
                  </a>
                ))}
                <div className="mt-8 pt-6 border-t border-[var(--cream-3)]">
                  <Link
                    href="/contact/"
                    className="btn-gold w-full text-xs py-3 px-4 justify-center"
                  >
                    Programare
                  </Link>
                </div>
              </nav>
            </aside>

            {/* ── Mobile category tabs ── */}
            <div className="lg:hidden -mx-5 px-5 overflow-x-auto pb-1">
              <div className="flex gap-2 min-w-max">
                {CATEGORIES.map((cat) => (
                  <a
                    key={cat.slug}
                    href={`#${cat.slug}`}
                    className="shrink-0 px-4 py-2 text-xs tracking-wide border border-[var(--cream-3)] text-[var(--muted)] hover:border-[var(--gold)] hover:text-[var(--gold)] transition-colors whitespace-nowrap"
                  >
                    {cat.name}
                  </a>
                ))}
              </div>
            </div>

            {/* ── Category sections ── */}
            <div className="space-y-14 lg:space-y-20">
              {CATEGORIES.map((cat) => (
                <section key={cat.slug} id={cat.slug} className="scroll-mt-28">

                  {/* Category header */}
                  <div className="mb-6">
                    <div className="flex items-center gap-2 mb-2">
                      <span
                        className="text-[var(--gold)] text-xs font-mono opacity-60"
                        aria-hidden="true"
                      >
                        {CATEGORY_ICONS[cat.slug] ?? "◈"}
                      </span>
                      <p className="text-[var(--gold)] text-xs tracking-[0.2em] uppercase">
                        {cat.name}
                      </p>
                    </div>
                    <h2
                      className="text-[var(--dark)] text-2xl md:text-3xl mb-2"
                      style={{ fontFamily: "var(--font-serif)", fontWeight: 300 }}
                    >
                      {cat.name}
                    </h2>
                    <p className="text-[var(--muted)] text-sm leading-relaxed max-w-xl">
                      {cat.description}
                    </p>
                    <div className="mt-4 w-8 h-px bg-[var(--gold)]" />
                  </div>

                  {/* Treatment rows */}
                  <div className="bg-white border border-[var(--cream-2)] overflow-hidden">

                    {/* Column labels */}
                    <div className="grid grid-cols-[1fr_auto] gap-4 px-5 py-3 bg-[var(--cream-2)]/60 border-b border-[var(--cream-2)]">
                      <span className="text-[var(--muted)] text-xs tracking-widest uppercase">
                        Tratament
                      </span>
                      <span className="text-[var(--muted)] text-xs tracking-widest uppercase">
                        RON
                      </span>
                    </div>

                    {/* Rows */}
                    <div className="divide-y divide-[var(--cream-2)]/70">
                      {cat.treatments.map((t, i) => (
                        <div key={i} className="price-row">
                          {/* Name + detail */}
                          <div className="min-w-0 pr-4">
                            <p className="text-[var(--dark)] text-sm font-medium leading-snug">
                              {t.name}
                            </p>
                            {t.detail && (
                              <p className="text-[var(--muted)] text-xs mt-0.5 leading-snug">
                                {t.detail}
                              </p>
                            )}
                          </div>

                          {/* Price */}
                          <div className="text-right shrink-0">
                            <span
                              className="text-[var(--gold)] text-xl leading-none"
                              style={{ fontFamily: "var(--font-serif)" }}
                            >
                              {t.price}
                            </span>
                            <span className="text-[var(--muted)] text-[10px] ml-1 tracking-wide">
                              RON
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Footer: link to category page */}
                    <div className="px-5 py-4 bg-[var(--cream)]/60 border-t border-[var(--cream-2)] flex flex-wrap items-center justify-between gap-3">
                      <span className="text-xs text-[var(--muted)]">
                        Consultul pre-procedural inclus
                      </span>
                      <Link
                        href={`/${cat.slug}/`}
                        className="text-xs text-[var(--gold)] hover:text-[var(--gold-light)] tracking-widest uppercase flex items-center gap-1.5 transition-colors"
                      >
                        <span>Detalii tratamente</span>
                        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </section>
              ))}

              {/* ── Disclaimer ── */}
              <section className="border-t border-[var(--cream-3)] pt-10">
                <h2
                  className="text-[var(--dark)] text-xl mb-4"
                  style={{ fontFamily: "var(--font-serif)", fontWeight: 400 }}
                >
                  Informații despre prețuri
                </h2>
                <div className="space-y-3 text-sm text-[var(--muted)] leading-relaxed max-w-2xl">
                  <p>
                    Prețurile de mai sus sunt orientative și includ procedura standard descrisă.
                    Costul final poate diferi în funcție de cantitatea de produs utilizată,
                    complexitatea cazului și protocolul individualizat stabilit de medic.
                  </p>
                  <p>
                    Nu există taxe separate de consultație pentru procedurile programate.
                    Evaluarea medicală pre-procedurală este inclusă în prețul tratamentului.
                  </p>
                  <p>
                    Acceptăm plata în numerar și cu cardul.
                  </p>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>

      {/* CTA */}
      <section className="py-20 bg-[var(--dark)] relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage: "radial-gradient(circle at 60% 50%, #C49A3C 0%, transparent 65%)",
          }}
        />
        <div className="container text-center relative">
          <p className="text-[var(--gold)] text-xs tracking-[0.2em] uppercase mb-4">
            Pasul următor
          </p>
          <h2
            className="text-[var(--cream)] text-3xl md:text-4xl mb-4 max-w-lg mx-auto leading-[1.1]"
            style={{ fontFamily: "var(--font-serif)", fontWeight: 300 }}
          >
            Ai întrebări despre prețuri?
          </h2>
          <p className="text-[var(--cream)]/50 mb-8 max-w-md mx-auto text-sm leading-relaxed">
            Programează o consultație pentru un plan de tratament și o estimare personalizată.
          </p>
          <Link href="/contact/" className="btn-gold px-8 py-3.5">
            Programare consultație
          </Link>
        </div>
      </section>

      <Footer />
    </>
  );
}
