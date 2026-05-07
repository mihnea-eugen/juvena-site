"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const NAV_ITEMS = [
  { label: "Despre noi", href: "/despre-noi/" },
  { label: "Medici", href: "/medici/" },
  {
    label: "Tratamente",
    href: "#",
    children: [
      { label: "Dermatologie Estetică", href: "/dermatologie-estetica/" },
      { label: "Dermatologie Medicală", href: "/dermatologie-medicala/" },
      { label: "Tratamente Faciale", href: "/tratamente-faciale/" },
    ],
  },
  { label: "Prețuri", href: "/preturi/" },
  { label: "Contact", href: "/contact/" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [treatmentsOpen, setTreatmentsOpen] = useState(false);

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
      <div className="container flex items-center justify-between h-18 md:h-20">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 shrink-0">
          <Image
            src="/images/logo_tm.png"
            alt="Juvena Timișoara"
            width={40}
            height={56}
            className="h-10 w-auto"
            priority
          />
          <span
            className="heading text-cream text-xl tracking-widest uppercase hidden sm:block"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            Juvena
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {NAV_ITEMS.map((item) =>
            item.children ? (
              <div key={item.label} className="relative group">
                <button
                  className="nav-link flex items-center gap-1"
                  aria-haspopup="true"
                >
                  {item.label}
                  <svg
                    className="w-3 h-3 mt-0.5 transition-transform group-hover:rotate-180"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {/* Dropdown */}
                <div className="absolute top-full left-1/2 -translate-x-1/2 pt-3 opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto transition-opacity duration-200">
                  <div className="bg-[var(--dark)] border border-white/10 py-2 min-w-[220px]">
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="block px-5 py-2.5 text-cream/80 hover:text-gold hover:bg-white/5 text-sm tracking-wide transition-colors"
                      >
                        {child.label}
                      </Link>
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
          aria-label="Deschide meniu"
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
          mobileOpen ? "max-h-[500px]" : "max-h-0"
        }`}
      >
        <nav className="container py-6 flex flex-col gap-1">
          {NAV_ITEMS.map((item) =>
            item.children ? (
              <div key={item.label}>
                <button
                  onClick={() => setTreatmentsOpen(!treatmentsOpen)}
                  className="w-full flex items-center justify-between py-3 text-cream/80 text-sm tracking-widest uppercase"
                >
                  {item.label}
                  <svg
                    className={`w-4 h-4 transition-transform ${treatmentsOpen ? "rotate-180" : ""}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {treatmentsOpen && (
                  <div className="pl-4 flex flex-col gap-1 mb-2">
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        onClick={() => setMobileOpen(false)}
                        className="py-2 text-cream/70 hover:text-gold text-sm tracking-wide transition-colors"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="py-3 text-cream/80 hover:text-gold text-sm tracking-widest uppercase transition-colors"
              >
                {item.label}
              </Link>
            )
          )}
          <Link
            href="/contact/"
            onClick={() => setMobileOpen(false)}
            className="btn-gold mt-4 justify-center text-center"
          >
            Programare
          </Link>
        </nav>
      </div>
    </header>
  );
}
