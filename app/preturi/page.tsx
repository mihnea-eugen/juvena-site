import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CtaSection from "@/components/CtaSection";
import Breadcrumb from "@/components/ui/Breadcrumb";
import { CATEGORIES } from "@/lib/data/treatments";

export const metadata: Metadata = {
  title: "Prețuri Tratamente Estetice Timișoara 2026 | Juvena",
  description:
    "Lista completă de prețuri pentru acid hialuronic, toxină botulinică, skinbooster, peeling chimic și dermatologie medicală la Juvena Timișoara.",
  alternates: { canonical: "https://juvena-timisoara.ro/preturi/" },
};

export default function PreturiPage() {
  return (
    <>
      <Header />

      {/* ── Hero ── */}
      <section className="bg-[var(--dark)] pt-32 pb-16">
        <div className="container">
          <Breadcrumb
            light
            items={[
              { name: "Acasă", href: "/" },
              { name: "Prețuri", href: "/preturi/" },
            ]}
          />
          <div className="mt-6 max-w-2xl">
            <p className="text-[var(--gold)] text-xs tracking-[0.25em] uppercase mb-5">
              Listă de prețuri · 2026
            </p>
            <h1
              className="text-[var(--cream)] leading-[1.05]"
              style={{ fontFamily: "var(--font-serif)", fontWeight: 300, fontSize: "clamp(2.5rem, 5vw, 4rem)" }}
            >
              Tarife clare,<br />
              <em style={{ fontStyle: "italic" }}>fără surprize</em>
            </h1>
            <p className="text-[var(--cream)]/50 mt-5 text-sm leading-relaxed max-w-md">
              Consultul medical pre-procedural este inclus în tariful fiecărui tratament.
              Costul final poate varia în funcție de evaluarea individuală.
            </p>
          </div>
        </div>
      </section>

      {/* ── Anchors mobile ── */}
      <div className="bg-[var(--dark)] border-t border-white/8 lg:hidden">
        <div className="container py-3 flex gap-3 overflow-x-auto">
          {CATEGORIES.map((cat) => (
            <a
              key={cat.slug}
              href={`#${cat.slug}`}
              className="shrink-0 text-[10px] tracking-[0.15em] uppercase text-[var(--cream)]/50 hover:text-[var(--gold)] transition-colors py-1 whitespace-nowrap"
            >
              {cat.name}
            </a>
          ))}
        </div>
      </div>

      {/* ── Price menu ── */}
      <main className="bg-[var(--cream)]">
        {CATEGORIES.map((cat, catIdx) => (
          <section
            key={cat.slug}
            id={cat.slug}
            className={`scroll-mt-24 ${catIdx % 2 === 0 ? "bg-[var(--cream)]" : "bg-white"}`}
          >
            {/* Category divider header */}
            <div className="container">
              <div className="py-14 md:py-20 border-b border-[var(--cream-3)]">

                {/* Top row: eyebrow + category link */}
                <div className="flex items-end justify-between mb-8 gap-4">
                  <div>
                    <p className="text-[var(--gold)] text-[10px] tracking-[0.3em] uppercase mb-3">
                      0{catIdx + 1} — {cat.name}
                    </p>
                    <h2
                      className="text-[var(--dark)] leading-[1.05]"
                      style={{
                        fontFamily: "var(--font-serif)",
                        fontWeight: 300,
                        fontSize: "clamp(1.75rem, 3vw, 2.75rem)",
                      }}
                    >
                      {cat.name}
                    </h2>
                    <p className="text-[var(--muted)] text-sm mt-2 max-w-lg leading-relaxed">
                      {cat.description}
                    </p>
                  </div>
                  <Link
                    href={`/${cat.slug}/`}
                    className="hidden md:flex shrink-0 items-center gap-2 text-xs tracking-widest uppercase text-[var(--muted)] hover:text-[var(--gold)] transition-colors"
                  >
                    <span>Detalii</span>
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </div>

                {/* Groups */}
                <div className="space-y-0">
                  {cat.groups.map((group, gIdx) => (
                    <div
                      key={gIdx}
                      className="grid grid-cols-1 md:grid-cols-[180px_1fr] gap-0 border-t border-[var(--cream-3)] first:border-t-0"
                    >
                      {/* Group label — left column */}
                      <div className="pt-5 pb-2 md:pb-5 pr-0 md:pr-8">
                        {group.slug ? (
                          <Link
                            href={`/${group.slug}/`}
                            className="group inline-flex items-center gap-1.5"
                          >
                            <span className="text-[11px] tracking-[0.18em] uppercase text-[var(--muted)] group-hover:text-[var(--gold)] transition-colors font-medium">
                              {group.label}
                            </span>
                            <svg className="w-2.5 h-2.5 text-[var(--gold)] opacity-0 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                          </Link>
                        ) : (
                          <span className="text-[11px] tracking-[0.18em] uppercase text-[var(--muted)] font-medium">
                            {group.label}
                          </span>
                        )}
                      </div>

                      {/* Treatments — right column */}
                      <div className="pb-5 md:pt-5 md:border-l md:border-[var(--cream-3)] md:pl-8">
                        {group.treatments.map((t, tIdx) => (
                          <div
                            key={tIdx}
                            className="flex items-baseline justify-between gap-4 py-3.5 border-b border-[var(--cream-3)]/50 last:border-0 group/row hover:bg-[var(--gold)]/[0.03] -mx-2 px-2 transition-colors"
                          >
                            {/* Name */}
                            <div className="min-w-0">
                              <span className="text-[var(--dark)] text-[0.9375rem] leading-snug">
                                {t.name}
                              </span>
                              {t.detail && (
                                <span className="text-[var(--muted)] text-xs ml-2 opacity-70">
                                  {t.detail}
                                </span>
                              )}
                            </div>

                            {/* Leader + Price */}
                            <div className="shrink-0 flex items-baseline gap-2">
                              <span
                                className="text-[var(--gold)] tabular-nums"
                                style={{ fontFamily: "var(--font-serif)", fontSize: "1.625rem", lineHeight: 1 }}
                              >
                                {t.price}
                              </span>
                              <span className="text-[var(--muted)] text-[11px] tracking-wider uppercase">
                                ron
                              </span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Mobile link */}
                <div className="mt-6 md:hidden">
                  <Link
                    href={`/${cat.slug}/`}
                    className="inline-flex items-center gap-2 text-xs tracking-widest uppercase text-[var(--gold)]"
                  >
                    <span>Detalii {cat.name}</span>
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </div>

              </div>
            </div>
          </section>
        ))}

        {/* ── Note ── */}
        <div className="container py-14">
          <div className="max-w-2xl mx-auto text-center">
            <div className="w-8 h-px bg-[var(--gold)] mx-auto mb-6" />
            <p className="text-[var(--muted)] text-sm leading-relaxed">
              Prețurile sunt orientative și pot varia în funcție de cantitatea de produs
              utilizată și complexitatea cazului. Consultul pre-procedural este inclus.
              Plata se poate efectua în numerar sau cu cardul.
            </p>
          </div>
        </div>
      </main>

      <CtaSection />
      <Footer />
    </>
  );
}
