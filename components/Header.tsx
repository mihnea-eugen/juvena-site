"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";

type SubItem = { label: string; href: string };
type Category = { label: string; href: string; items: SubItem[] };
type NavItem =
  | { label: string; href: string; children?: undefined }
  | { label: string; href: string; children: Category[] };

const NAV_ITEMS: NavItem[] = [
  { label: "Acasă", href: "/" },
  { label: "Despre noi", href: "/despre-noi/" },
  { label: "Medici", href: "/medici/" },
  {
    label: "Tratamente",
    href: "#",
    children: [
      {
        label: "Dermatologie Estetică",
        href: "/dermatologie-estetica/",
        items: [
          { label: "Acid hialuronic", href: "/dermatologie-estetica/injectari-acid-hialuronic/" },
          { label: "Toxină botulinică", href: "/dermatologie-estetica/injectari-toxina-botulinica/" },
          { label: "Skinbooster", href: "/dermatologie-estetica/injectari-skinbooster/" },
          { label: "Biostimulatori colagen", href: "/dermatologie-estetica/injectari-biostimulatori-colagen/" },
          { label: "Terapia Vampir PRP", href: "/dermatologie-estetica/terapia-vampir-prp/" },
          { label: "Lipoliză injectabilă", href: "/dermatologie-estetica/lipoliza-injectabila/" },
          { label: "Hiperhidroză", href: "/dermatologie-estetica/hiperhidroza/" },
          { label: "Nefertiti Lift", href: "/dermatologie-estetica/nefertiti-lift/" },
          { label: "Face Slimming", href: "/dermatologie-estetica/face-slimming/" },
          { label: "Hialuronidaza", href: "/dermatologie-estetica/injectari-hialuronidaza/" },
        ],
      },
      {
        label: "Dermatologie Medicală",
        href: "/dermatologie-medicala/",
        items: [
          { label: "Consult dermatologic", href: "/dermatologie-medicala/consult-dermatologic/" },
          { label: "Dermatoscopie digitală", href: "/dermatologie-medicala/dermatoscopie/" },
          { label: "Electrocauterizare", href: "/dermatologie-medicala/electrocauterizare/" },
        ],
      },
      {
        label: "Tratamente Faciale",
        href: "/tratamente-faciale/",
        items: [
          { label: "Curățare dermatologică", href: "/tratamente-faciale/curatare-dermatologica/" },
          { label: "Dermapen", href: "/tratamente-faciale/dermapen/" },
          { label: "Peeling chimic", href: "/tratamente-faciale/peeling-chimic/" },
          { label: "Winther Glow", href: "/tratamente-faciale/winther-glow/" },
        ],
      },
    ],
  },
  { label: "Galerie", href: "/galerie/" },
  { label: "Prețuri", href: "/preturi/" },
  { label: "Contact", href: "/contact/" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileTreatOpen, setMobileTreatOpen] = useState(false);
  const [mobileCatOpen, setMobileCatOpen] = useState<string | null>(null);
  const megaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[var(--dark)]/95 backdrop-blur-sm shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="container flex items-center justify-between h-24 md:h-28">

        {/* Logo */}
        <Link href="/" className="flex items-center shrink-0" aria-label="Juvena Clinic Timișoara">
          <Image
            src="/images/logo.png"
            alt="Juvena Clinic Timișoara"
            width={200}
            height={186}
            className="h-20 md:h-24 w-auto"
            priority
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-8" aria-label="Navigare principală">
          {NAV_ITEMS.map((item) =>
            item.children ? (
              <div key={item.label} className="relative group" ref={megaRef}>
                <button
                  className="nav-link flex items-center gap-1"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  {item.label}
                  <svg
                    className="w-3 h-3 mt-0.5 transition-transform duration-200 group-hover:rotate-180"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {/* Mega-menu dropdown — 3 coloane */}
                <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4 opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto transition-all duration-200 translate-y-1 group-hover:translate-y-0">
                  <div className="bg-[var(--dark)] border border-white/10 shadow-2xl p-6 w-[680px] grid grid-cols-3 gap-6">
                    {item.children.map((cat) => (
                      <div key={cat.href}>
                        <Link
                          href={cat.href}
                          className="block text-[var(--gold)] text-xs tracking-widest uppercase font-medium mb-3 hover:opacity-80 transition-opacity"
                        >
                          {cat.label}
                        </Link>
                        <ul className="space-y-1.5">
                          {cat.items.map((sub) => (
                            <li key={sub.href}>
                              <Link
                                href={sub.href}
                                className="block text-cream/70 hover:text-cream text-sm leading-snug transition-colors py-0.5"
                              >
                                {sub.label}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <Link key={item.href} href={item.href} className="nav-link">
                {item.label}
              </Link>
            )
          )}
          <Link href="/contact/" className="btn-gold text-xs py-2.5 px-5">
            Programare
          </Link>
        </nav>

        {/* Mobile hamburger */}
        <button
          className="lg:hidden text-cream p-2"
          aria-label={mobileOpen ? "Închide meniu" : "Deschide meniu"}
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          <span
            className={`block w-6 h-0.5 bg-current transition-all duration-300 ${
              mobileOpen ? "rotate-45 translate-y-1.5" : ""
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-current my-1.5 transition-opacity ${
              mobileOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-current transition-all duration-300 ${
              mobileOpen ? "-rotate-45 -translate-y-1.5" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`lg:hidden bg-[var(--dark)] border-t border-white/10 overflow-hidden transition-all duration-300 ${
          mobileOpen ? "max-h-[80vh] overflow-y-auto" : "max-h-0"
        }`}
      >
        <nav className="container py-4 flex flex-col" aria-label="Navigare mobilă">
          {NAV_ITEMS.map((item) =>
            item.children ? (
              <div key={item.label} className="border-b border-white/5">
                {/* Nivel 1 — Tratamente */}
                <button
                  onClick={() => setMobileTreatOpen(!mobileTreatOpen)}
                  className="w-full flex items-center justify-between py-3.5 text-cream/80 text-sm tracking-widest uppercase"
                  aria-expanded={mobileTreatOpen}
                >
                  {item.label}
                  <svg
                    className={`w-4 h-4 transition-transform duration-200 ${mobileTreatOpen ? "rotate-180" : ""}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {/* Nivel 2 — categorii */}
                {mobileTreatOpen && (
                  <div className="pb-2">
                    {item.children.map((cat) => (
                      <div key={cat.href}>
                        {/* Categorie */}
                        <button
                          onClick={() =>
                            setMobileCatOpen(mobileCatOpen === cat.href ? null : cat.href)
                          }
                          className="w-full flex items-center justify-between pl-4 py-2.5 text-[var(--gold)] text-xs tracking-widest uppercase"
                          aria-expanded={mobileCatOpen === cat.href}
                        >
                          {cat.label}
                          <svg
                            className={`w-3.5 h-3.5 mr-1 transition-transform duration-200 ${
                              mobileCatOpen === cat.href ? "rotate-180" : ""
                            }`}
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            aria-hidden="true"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </button>

                        {/* Subcategorii */}
                        {mobileCatOpen === cat.href && (
                          <div className="pl-8 pb-2 flex flex-col gap-0.5">
                            <Link
                              href={cat.href}
                              onClick={() => setMobileOpen(false)}
                              className="py-2 text-cream/50 hover:text-gold text-xs tracking-wide transition-colors italic"
                            >
                              Vezi toate →
                            </Link>
                            {cat.items.map((sub) => (
                              <Link
                                key={sub.href}
                                href={sub.href}
                                onClick={() => setMobileOpen(false)}
                                className="py-2 text-cream/70 hover:text-gold text-sm transition-colors"
                              >
                                {sub.label}
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="py-3.5 border-b border-white/5 text-cream/80 hover:text-gold text-sm tracking-widest uppercase transition-colors"
              >
                {item.label}
              </Link>
            )
          )}
          <Link
            href="/contact/"
            onClick={() => setMobileOpen(false)}
            className="btn-gold mt-5 mb-2 justify-center text-center"
          >
            Programare
          </Link>
        </nav>
      </div>
    </header>
  );
}
