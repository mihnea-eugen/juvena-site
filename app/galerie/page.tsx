import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CtaSection from "@/components/CtaSection";
import GalleryGrid from "@/components/GalleryGrid";

export const metadata: Metadata = {
  title: "Galerie rezultate – Înainte și după | Juvena Timișoara",
  description:
    "Galerie foto cu rezultate reale de la Juvena Timișoara: acid hialuronic, toxină botulinică, peeling chimic, dermapen, tratamente faciale. Înainte și după.",
  alternates: { canonical: "https://juvena.ro/galerie/" },
  openGraph: {
    title: "Galerie rezultate Juvena Timișoara – Înainte și după",
    description:
      "Rezultate reale: acid hialuronic, toxină botulinică, peeling chimic, dermapen, curățare dermatologică.",
    url: "https://juvena.ro/galerie/",
    images: [{ url: "https://juvena.ro/images/og-image.jpg", width: 1200, height: 630 }],
  },
};

const gallerySchema = {
  "@context": "https://schema.org",
  "@type": "ImageGallery",
  name: "Galerie rezultate Juvena Timișoara",
  description:
    "Fotografii înainte și după tratamente estetice și dermatologice la Juvena Timișoara.",
  url: "https://juvena.ro/galerie/",
  provider: {
    "@type": "MedicalBusiness",
    name: "Juvena",
    url: "https://juvena.ro",
  },
};

export default function GaleriePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(gallerySchema) }}
      />
      <Header />

      {/* Hero */}
      <section className="bg-[var(--dark)] pt-32 pb-20">
        <div className="container">
          <p className="text-[var(--gold)] text-xs tracking-[0.2em] uppercase mb-4">
            Rezultate reale
          </p>
          <h1
            className="text-[var(--cream)] text-4xl md:text-5xl lg:text-6xl max-w-2xl leading-[1.1]"
            style={{ fontFamily: "var(--font-serif)", fontWeight: 300 }}
          >
            Galerie
          </h1>
          <p className="text-[var(--cream)]/60 mt-4 max-w-xl text-lg">
            Fotografii înainte și după, realizate la Juvena Timișoara. Toate rezultatele aparțin
            pacienților noștri, cu acordul explicit al acestora.
          </p>
        </div>
      </section>

      {/* Galerie */}
      <section className="section bg-[var(--cream)]">
        <div className="container">
          <GalleryGrid />
        </div>
      </section>

      {/* Disclaimer */}
      <section className="py-8 bg-[var(--cream-2)]">
        <div className="container">
          <p className="text-xs text-[var(--muted)] max-w-2xl leading-relaxed">
            Fotografiile prezentate au fost realizate în cadrul clinicii Juvena și publicate cu
            acordul pacienților. Rezultatele individuale pot varia în funcție de anatomie,
            vârstă, starea pielii și numărul de ședințe. Fotografiile nu reprezintă o garanție
            de rezultat.
          </p>
        </div>
      </section>

      <CtaSection />
      <Footer />
    </>
  );
}
