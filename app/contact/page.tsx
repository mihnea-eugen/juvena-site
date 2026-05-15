import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/ui/Breadcrumb";

export const metadata: Metadata = {
  title: "Contact & Programări Juvena Timișoara",
  description:
    "Programează-te la Juvena Timișoara. Adresă, telefon, email și formular de contact. Consultații dermatologice și estetice disponibile.",
  alternates: { canonical: "https://juvena.ro/contact/" },
};

const HOURS = [
  { day: "Luni – Vineri", hours: "09:00 – 19:00" },
  { day: "Sâmbătă", hours: "09:00 – 14:00" },
  { day: "Duminică", hours: "Închis" },
];

export default function ContactPage() {
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
              { name: "Contact", href: "/contact/" },
            ]}
          />
          <p className="text-[var(--gold)] text-xs tracking-[0.2em] uppercase mb-4">
            Programări
          </p>
          <h1
            className="text-[var(--cream)] text-4xl md:text-5xl lg:text-6xl max-w-2xl leading-[1.1]"
            style={{ fontFamily: "var(--font-serif)", fontWeight: 300 }}
          >
            Suntem aici pentru tine
          </h1>
        </div>
      </section>

      {/* Contact grid */}
      <section className="section bg-[var(--cream)]">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

            {/* Form */}
            <div>
              <div className="w-10 h-px bg-[var(--gold)] mb-6" />
              <h2
                className="text-[var(--dark)] text-2xl md:text-3xl mb-8"
                style={{ fontFamily: "var(--font-serif)", fontWeight: 400 }}
              >
                Trimite un mesaj
              </h2>

              <form className="space-y-5" action="#" method="POST">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs tracking-widest uppercase text-[var(--dark)] mb-2">
                      Prenume <span className="text-[var(--gold)]">*</span>
                    </label>
                    <input
                      type="text"
                      name="prenume"
                      required
                      className="w-full border border-[var(--cream-2)] bg-white px-4 py-3 text-sm text-[var(--dark)] focus:outline-none focus:border-[var(--gold)] transition-colors"
                      placeholder="Prenumele tău"
                    />
                  </div>
                  <div>
                    <label className="block text-xs tracking-widest uppercase text-[var(--dark)] mb-2">
                      Nume <span className="text-[var(--gold)]">*</span>
                    </label>
                    <input
                      type="text"
                      name="nume"
                      required
                      className="w-full border border-[var(--cream-2)] bg-white px-4 py-3 text-sm text-[var(--dark)] focus:outline-none focus:border-[var(--gold)] transition-colors"
                      placeholder="Numele tău"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs tracking-widest uppercase text-[var(--dark)] mb-2">
                    Telefon <span className="text-[var(--gold)]">*</span>
                  </label>
                  <input
                    type="tel"
                    name="telefon"
                    required
                    className="w-full border border-[var(--cream-2)] bg-white px-4 py-3 text-sm text-[var(--dark)] focus:outline-none focus:border-[var(--gold)] transition-colors"
                    placeholder="07xx xxx xxx"
                  />
                </div>

                <div>
                  <label className="block text-xs tracking-widest uppercase text-[var(--dark)] mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    className="w-full border border-[var(--cream-2)] bg-white px-4 py-3 text-sm text-[var(--dark)] focus:outline-none focus:border-[var(--gold)] transition-colors"
                    placeholder="email@exemplu.ro"
                  />
                </div>

                <div>
                  <label className="block text-xs tracking-widest uppercase text-[var(--dark)] mb-2">
                    Tratament de interes
                  </label>
                  <select
                    name="tratament"
                    className="w-full border border-[var(--cream-2)] bg-white px-4 py-3 text-sm text-[var(--dark)] focus:outline-none focus:border-[var(--gold)] transition-colors"
                  >
                    <option value="">Selectează...</option>
                    <option>Acid Hialuronic</option>
                    <option>Toxină Botulinică</option>
                    <option>Skinbooster</option>
                    <option>Biostimulatori Colagen</option>
                    <option>Terapia Vampir PRP</option>
                    <option>Lipoliză Injectabilă</option>
                    <option>Consult Dermatologic</option>
                    <option>Dermatoscopie</option>
                    <option>Peeling Chimic</option>
                    <option>Altul / Nu știu încă</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs tracking-widest uppercase text-[var(--dark)] mb-2">
                    Mesaj
                  </label>
                  <textarea
                    name="mesaj"
                    rows={4}
                    className="w-full border border-[var(--cream-2)] bg-white px-4 py-3 text-sm text-[var(--dark)] focus:outline-none focus:border-[var(--gold)] transition-colors resize-none"
                    placeholder="Descrie pe scurt ce te interesează..."
                  />
                </div>

                <p className="text-xs text-[var(--muted)]">
                  Prin trimiterea acestui formular îți exprimi acordul pentru prelucrarea datelor cu caracter personal în scopul contactării tale.
                </p>

                <button type="submit" className="btn-gold w-full justify-center">
                  Trimite mesajul
                </button>
              </form>
            </div>

            {/* Info */}
            <div className="space-y-10">
              {/* Program */}
              <div>
                <div className="w-10 h-px bg-[var(--gold)] mb-6" />
                <h2
                  className="text-[var(--dark)] text-2xl mb-6"
                  style={{ fontFamily: "var(--font-serif)", fontWeight: 400 }}
                >
                  Program
                </h2>
                <div className="space-y-3">
                  {HOURS.map((h) => (
                    <div key={h.day} className="flex justify-between items-center py-3 border-b border-[var(--cream-2)]">
                      <span className="text-sm text-[var(--dark)]">{h.day}</span>
                      <span className={`text-sm font-medium ${h.hours === "Închis" ? "text-[var(--muted)]" : "text-[var(--gold)]"}`}>
                        {h.hours}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Contact rapid */}
              <div>
                <h3
                  className="text-[var(--dark)] text-xl mb-5"
                  style={{ fontFamily: "var(--font-serif)" }}
                >
                  Contact direct
                </h3>
                <div className="space-y-4">
                  <a
                    href="tel:TBD"
                    className="flex items-center gap-4 p-4 bg-white border border-[var(--cream-2)] hover:border-[var(--gold)] transition-colors group"
                  >
                    <div className="w-10 h-10 bg-[var(--gold)]/10 flex items-center justify-center group-hover:bg-[var(--gold)] transition-colors">
                      <svg className="w-4 h-4 text-[var(--gold)] group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-xs text-[var(--muted)] tracking-widest uppercase">Telefon</p>
                      <p className="text-[var(--dark)] text-sm font-medium">De completat</p>
                    </div>
                  </a>

                  <a
                    href="https://wa.me/40TBD"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 bg-white border border-[var(--cream-2)] hover:border-[var(--gold)] transition-colors group"
                  >
                    <div className="w-10 h-10 bg-[var(--gold)]/10 flex items-center justify-center group-hover:bg-[var(--gold)] transition-colors">
                      <svg className="w-4 h-4 text-[var(--gold)] group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-xs text-[var(--muted)] tracking-widest uppercase">WhatsApp</p>
                      <p className="text-[var(--dark)] text-sm font-medium">Programare rapidă</p>
                    </div>
                  </a>
                </div>
              </div>

              {/* Adresă */}
              <div>
                <h3
                  className="text-[var(--dark)] text-xl mb-4"
                  style={{ fontFamily: "var(--font-serif)" }}
                >
                  Adresă
                </h3>
                <address className="not-italic text-[var(--muted)] text-sm leading-relaxed">
                  <p>Stradă și număr – de completat</p>
                  <p>Timișoara, Timiș 300000</p>
                  <p>România</p>
                </address>
                {/* Google Maps placeholder */}
                <div className="mt-4 bg-[var(--cream-2)] h-40 flex items-center justify-center text-[var(--muted)] text-sm">
                  Google Maps – de integrat
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
