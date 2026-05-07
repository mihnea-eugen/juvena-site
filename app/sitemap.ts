import type { MetadataRoute } from "next";

export const dynamic = "force-static";

const BASE = "https://juvena-timisoara.ro";

const urls: MetadataRoute.Sitemap = [
  // Pagini principale
  { url: `${BASE}/`, lastModified: new Date(), changeFrequency: "weekly", priority: 1.0 },
  { url: `${BASE}/despre-noi/`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
  { url: `${BASE}/medici/`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
  { url: `${BASE}/preturi/`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
  { url: `${BASE}/contact/`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },

  // Categorii
  { url: `${BASE}/dermatologie-estetica/`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
  { url: `${BASE}/dermatologie-medicala/`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
  { url: `${BASE}/tratamente-faciale/`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },

  // Dermatologie estetică — subpagini
  { url: `${BASE}/dermatologie-estetica/acid-hialuronic/`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.85 },
  { url: `${BASE}/dermatologie-estetica/toxina-botulinica/`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.85 },
  { url: `${BASE}/dermatologie-estetica/skinbooster/`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.85 },
  { url: `${BASE}/dermatologie-estetica/biostimulatori-colagen/`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.85 },
  { url: `${BASE}/dermatologie-estetica/terapia-vampir-prp/`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.85 },
  { url: `${BASE}/dermatologie-estetica/lipoliza-injectabila/`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.85 },
  { url: `${BASE}/dermatologie-estetica/hiperhidroza/`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
  { url: `${BASE}/dermatologie-estetica/nefertiti-lift/`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
  { url: `${BASE}/dermatologie-estetica/face-slimming/`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
  { url: `${BASE}/dermatologie-estetica/hialuronidaza/`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },

  // Dermatologie medicală — subpagini
  { url: `${BASE}/dermatologie-medicala/consult-dermatologic/`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.85 },
  { url: `${BASE}/dermatologie-medicala/dermatoscopie/`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.85 },
  { url: `${BASE}/dermatologie-medicala/electrocauterizare/`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },

  // Tratamente faciale — subpagini
  { url: `${BASE}/tratamente-faciale/curatare-dermatologica/`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
  { url: `${BASE}/tratamente-faciale/dermapen/`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
  { url: `${BASE}/tratamente-faciale/peeling-chimic/`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
  { url: `${BASE}/tratamente-faciale/winther-glow/`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.75 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  return urls;
}
