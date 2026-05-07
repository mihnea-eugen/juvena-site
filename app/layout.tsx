import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";
import { schemaOrganization, schemaWebsite } from "@/lib/data/schema";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://juvena-timisoara.ro"),
  title: {
    default: "Juvena Timișoara – Clinică Dermatologie Estetică & Medicală",
    template: "%s | Juvena Timișoara",
  },
  description:
    "Clinică de dermatologie estetică și medicală în Timișoara. Acid hialuronic, toxină botulinică, skinbooster, dermatoscopie digitală. Programări online.",
  keywords: [
    "clinica estetica timisoara",
    "dermatologie estetica timisoara",
    "acid hialuronic timisoara",
    "botox timisoara",
    "skinbooster timisoara",
    "dermatoscopie timisoara",
  ],
  openGraph: {
    type: "website",
    locale: "ro_RO",
    url: "https://juvena-timisoara.ro",
    siteName: "Juvena Timișoara",
    title: "Juvena Timișoara – Clinică Dermatologie Estetică & Medicală",
    description:
      "Tratamente estetice și medicale de înaltă calitate în Timișoara. Medici specializați, rezultate naturale.",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Juvena Clinică – Timișoara",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Juvena Timișoara – Clinică Dermatologie Estetică",
    description: "Tratamente estetice și dermatologice premium în Timișoara.",
    images: ["/images/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  alternates: {
    canonical: "https://juvena-timisoara.ro",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const orgSchema = schemaOrganization();
  const webSchema = schemaWebsite();

  return (
    <html
      lang="ro"
      className={`${cormorant.variable} ${inter.variable}`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(webSchema) }}
        />
      </head>
      <body className="min-h-screen antialiased">
        {children}
      </body>
    </html>
  );
}
