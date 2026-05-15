import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/ui/Breadcrumb";
import CtaSection from "@/components/CtaSection";
import type { FAQItem } from "@/lib/data/schema";
import { schemaFAQ, schemaMedicalProcedure, schemaBreadcrumb, schemaMedicalWebPage, schemaHowTo } from "@/lib/data/schema";

const BASE_URL = "https://juvena.ro";

export type BreadcrumbItem = { name: string; href: string };

export type TreatmentPageProps = {
  breadcrumbs: BreadcrumbItem[];
  eyebrow: string;
  title: string;
  subtitle: string;
  description: string[];
  indications?: string[];
  contraindications?: string[];
  protocol?: string[];
  prices: { label: string; detail?: string; price: string }[];
  faq?: FAQItem[];
  schema?: {
    name: string;
    description: string;
    url: string;
    price?: string;
    bodyLocation?: string;
  };
  relatedLinks?: { label: string; href: string }[];
};

export default function TreatmentPage({
  breadcrumbs,
  eyebrow,
  title,
  subtitle,
  description,
  indications,
  contraindications,
  protocol,
  prices,
  faq,
  schema,
  relatedLinks,
}: TreatmentPageProps) {
  const faqSchema = faq ? schemaFAQ(faq) : null;
  const procedureSchema = schema ? schemaMedicalProcedure(schema) : null;
  const breadcrumbSchema = schemaBreadcrumb(
    breadcrumbs.map((b) => ({ name: b.name, url: `${BASE_URL}${b.href}` }))
  );
  const webPageSchema = schema
    ? schemaMedicalWebPage({
        name: schema.name,
        description: schema.description,
        url: schema.url,
      })
    : null;
  const howToSchema = protocol && protocol.length > 0 && schema
    ? schemaHowTo(schema.name, protocol)
    : null;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}
      {procedureSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(procedureSchema) }}
        />
      )}
      {webPageSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
        />
      )}
      {howToSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
        />
      )}
      <Header />

      {/* Hero */}
      <section className="bg-[var(--dark)] pt-32 pb-20">
        <div className="container">
          <Breadcrumb light items={breadcrumbs} />
          <p className="text-[var(--gold)] text-xs tracking-[0.2em] uppercase mb-4">
            {eyebrow}
          </p>
          <h1
            className="text-[var(--cream)] text-4xl md:text-5xl lg:text-6xl max-w-2xl leading-[1.1]"
            style={{ fontFamily: "var(--font-serif)", fontWeight: 300 }}
          >
            {title}
          </h1>
          <p className="text-[var(--cream)]/60 mt-4 max-w-xl text-lg">{subtitle}</p>
        </div>
      </section>

      {/* Content + sidebar */}
      <section className="section bg-[var(--cream)]">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_340px] gap-12">
            {/* Main content */}
            <div>
              <div className="w-10 h-px bg-[var(--gold)] mb-8" />

              {/* Descriere */}
              <div id="treatment-description" className="space-y-4 mb-12">
                {description.map((para, i) => (
                  <p key={i} className="text-[var(--muted)] leading-relaxed">
                    {para}
                  </p>
                ))}
              </div>

              {/* Indicații */}
              {indications && indications.length > 0 && (
                <div id="treatment-indications" className="mb-10">
                  <h2
                    className="text-[var(--dark)] text-xl mb-5"
                    style={{ fontFamily: "var(--font-serif)" }}
                  >
                    Indicații
                  </h2>
                  <ul className="space-y-2">
                    {indications.map((item) => (
                      <li key={item} className="flex items-start gap-3 text-sm text-[var(--muted)]">
                        <span className="text-[var(--gold)] mt-0.5 shrink-0">—</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Protocol */}
              {protocol && protocol.length > 0 && (
                <div className="mb-10">
                  <h2
                    className="text-[var(--dark)] text-xl mb-5"
                    style={{ fontFamily: "var(--font-serif)" }}
                  >
                    Cum decurge procedura
                  </h2>
                  <ol className="space-y-3">
                    {protocol.map((step, i) => (
                      <li key={i} className="flex items-start gap-4 text-sm text-[var(--muted)]">
                        <span
                          className="shrink-0 w-6 h-6 bg-[var(--gold)]/10 text-[var(--gold)] text-xs flex items-center justify-center"
                          style={{ fontFamily: "var(--font-serif)" }}
                        >
                          {i + 1}
                        </span>
                        <span className="mt-0.5">{step}</span>
                      </li>
                    ))}
                  </ol>
                </div>
              )}

              {/* Contraindicații */}
              {contraindications && contraindications.length > 0 && (
                <div className="mb-10 bg-[var(--cream-2)] border border-[var(--cream-2)] p-6">
                  <h2
                    className="text-[var(--dark)] text-lg mb-4"
                    style={{ fontFamily: "var(--font-serif)" }}
                  >
                    Contraindicații
                  </h2>
                  <ul className="space-y-2">
                    {contraindications.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-[var(--muted)]">
                        <span className="text-[var(--gold)] mt-0.5 shrink-0">·</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="text-xs text-[var(--muted)] mt-4 italic">
                    Lista nu este exhaustivă. Medicul va evalua eligibilitatea la consultație.
                  </p>
                </div>
              )}

              {/* FAQ */}
              {faq && faq.length > 0 && (
                <div id="treatment-faq">
                  <h2
                    className="text-[var(--dark)] text-2xl mb-8"
                    style={{ fontFamily: "var(--font-serif)", fontWeight: 400 }}
                  >
                    Întrebări frecvente
                  </h2>
                  <div className="space-y-4">
                    {faq.map((item, i) => (
                      <details
                        key={i}
                        className="group border border-[var(--cream-2)] bg-white"
                      >
                        <summary className="flex items-center justify-between px-6 py-4 cursor-pointer list-none">
                          <span className="text-[var(--dark)] text-sm font-medium pr-4">
                            {item.question}
                          </span>
                          <svg
                            className="w-4 h-4 text-[var(--gold)] shrink-0 transition-transform group-open:rotate-180"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </summary>
                        <div className="px-6 pb-5">
                          <p className="text-[var(--muted)] text-sm leading-relaxed">
                            {item.answer}
                          </p>
                        </div>
                      </details>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <aside className="space-y-6">
              {/* Prețuri */}
              <div className="bg-white border border-[var(--cream-2)] sticky top-24">
                <div className="px-6 py-5 border-b border-[var(--cream-2)] bg-[var(--dark)]">
                  <h3 className="text-[var(--cream)] text-xs tracking-widest uppercase">
                    Prețuri
                  </h3>
                </div>
                <div className="divide-y divide-[var(--cream-2)]">
                  {prices.map((p, i) => (
                    <div key={i} className="px-6 py-4">
                      <p className="text-[var(--dark)] text-sm font-medium">{p.label}</p>
                      {p.detail && (
                        <p className="text-[var(--muted)] text-xs mt-0.5">{p.detail}</p>
                      )}
                      <p
                        className="text-[var(--gold)] text-xl mt-1"
                        style={{ fontFamily: "var(--font-serif)" }}
                      >
                        {p.price} RON
                      </p>
                    </div>
                  ))}
                </div>
                <div className="px-6 py-5 bg-[var(--cream-2)]/50">
                  <Link href="/contact/" className="btn-gold w-full justify-center text-center block">
                    Programare
                  </Link>
                  <p className="text-xs text-[var(--muted)] text-center mt-3">
                    Consultația este inclusă în prețul procedurii
                  </p>
                </div>
              </div>

              {/* Linkuri corelate */}
              {relatedLinks && relatedLinks.length > 0 && (
                <div className="bg-white border border-[var(--cream-2)] p-6">
                  <h3 className="text-xs tracking-widest uppercase text-[var(--muted)] mb-4">
                    Tratamente conexe
                  </h3>
                  <ul className="space-y-2">
                    {relatedLinks.map((l) => (
                      <li key={l.href}>
                        <Link
                          href={l.href}
                          className="text-sm text-[var(--dark)] hover:text-[var(--gold)] transition-colors flex items-center gap-2"
                        >
                          <span className="text-[var(--gold)] text-xs">→</span>
                          {l.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </aside>
          </div>
        </div>
      </section>

      <CtaSection />
      <Footer />
    </>
  );
}
