import Link from "next/link";

export default function CtaSection() {
  return (
    <section className="relative bg-[var(--dark)] overflow-hidden">
      {/* Decorative gradient */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 90% at 80% 50%, rgba(196,154,60,0.07) 0%, transparent 70%)",
        }}
      />
      {/* Top border accent */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[var(--gold)]/40 to-transparent" />

      <div className="container relative py-20 md:py-28">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

            {/* Left — text */}
            <div>
              <p className="text-[var(--gold)] text-[10px] tracking-[0.35em] uppercase mb-5">
                Juvena Clinic · Timișoara
              </p>
              <h2
                className="text-[var(--cream)] leading-[1.08] mb-5"
                style={{
                  fontFamily: "var(--font-serif)",
                  fontWeight: 300,
                  fontSize: "clamp(2rem, 4vw, 3rem)",
                }}
              >
                Vino la clinică.<br />
                <em style={{ fontStyle: "italic", color: "var(--gold)" }}>
                  Consultul este gratuit.
                </em>
              </h2>
              <p className="text-[var(--cream)]/50 text-sm leading-relaxed max-w-sm">
                Medicul evaluează individual și îți recomandă protocolul
                optim înainte de orice procedură. Fără angajamente,
                fără surprize.
              </p>
            </div>

            {/* Right — actions */}
            <div className="flex flex-col gap-4">

              {/* Phone CTA */}
              <a
                href="/contact/"
                className="group flex items-center gap-5 border border-white/10 p-6 hover:border-[var(--gold)]/50 transition-all duration-300"
              >
                <div className="shrink-0 w-12 h-12 bg-[var(--gold)]/10 flex items-center justify-center group-hover:bg-[var(--gold)]/20 transition-colors">
                  <svg
                    className="w-5 h-5 text-[var(--gold)]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-[var(--cream)]/40 text-[10px] tracking-[0.2em] uppercase mb-0.5">
                    Sună sau scrie
                  </p>
                  <p className="text-[var(--cream)] text-sm font-medium">
                    Programează o consultație
                  </p>
                </div>
                <svg
                  className="w-4 h-4 text-[var(--gold)] ml-auto opacity-0 group-hover:opacity-100 transition-opacity"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>

              {/* Online booking CTA */}
              <Link
                href="/contact/"
                className="btn-gold py-4 px-8 text-xs tracking-widest justify-center"
              >
                Programare online
              </Link>

              {/* Address line */}
              <div className="flex items-center gap-3 pt-1">
                <svg
                  className="w-3.5 h-3.5 text-[var(--gold)]/60 shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <span className="text-[var(--cream)]/35 text-xs tracking-wide">
                  Timișoara, județul Timiș
                </span>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
