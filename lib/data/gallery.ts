export type GalleryItem = {
  id: string;
  file: string;
  title: string;
  category: string;
  categorySlug: string;
  type: "before-after" | "procedura";
  alt: string;
};

export const GALLERY_CATEGORIES = [
  { slug: "toate", label: "Toate" },
  { slug: "toxina-botulinica", label: "Toxină Botulinică" },
  { slug: "acid-hialuronic", label: "Acid Hialuronic" },
  { slug: "tratamente-faciale", label: "Tratamente Faciale" },
  { slug: "hiperhidroza", label: "Hiperhidroză" },
  { slug: "dermapen", label: "Dermapen" },
];

export const GALLERY_ITEMS: GalleryItem[] = [
  // — TOXINĂ BOTULINICĂ —
  {
    id: "gummy-smile-1",
    file: "/images/galerie/gummy-smile-1.jpg",
    title: "Gummy smile",
    category: "Toxină Botulinică",
    categorySlug: "toxina-botulinica",
    type: "before-after",
    alt: "Rezultat tratament gummy smile cu toxină botulinică – înainte și după, Juvena Timișoara",
  },
  {
    id: "gummy-smile-2",
    file: "/images/galerie/gummy-smile-2.jpg",
    title: "Gummy smile",
    category: "Toxină Botulinică",
    categorySlug: "toxina-botulinica",
    type: "before-after",
    alt: "Rezultat gummy smile toxină botulinică înainte după – Juvena Timișoara",
  },
  {
    id: "gummy-smile-3",
    file: "/images/galerie/gummy-smile-3.jpg",
    title: "Gummy smile",
    category: "Toxină Botulinică",
    categorySlug: "toxina-botulinica",
    type: "before-after",
    alt: "Corecție gummy smile toxină botulinică – Juvena Timișoara",
  },
  {
    id: "gummy-smile-4",
    file: "/images/galerie/gummy-smile-4.jpg",
    title: "Gummy smile",
    category: "Toxină Botulinică",
    categorySlug: "toxina-botulinica",
    type: "before-after",
    alt: "Tratament gummy smile înainte după – Juvena Timișoara",
  },
  {
    id: "gummy-smile-5",
    file: "/images/galerie/gummy-smile-5.jpg",
    title: "Gummy smile",
    category: "Toxină Botulinică",
    categorySlug: "toxina-botulinica",
    type: "before-after",
    alt: "Gummy smile corectat toxină botulinică – Juvena Timișoara",
  },
  {
    id: "riduri-frunte-1",
    file: "/images/galerie/riduri-frunte-1.jpg",
    title: "Riduri frunte & glabelă",
    category: "Toxină Botulinică",
    categorySlug: "toxina-botulinica",
    type: "before-after",
    alt: "Tratament riduri frunte și glabelă toxină botulinică înainte după – Juvena Timișoara",
  },
  {
    id: "riduri-frunte-2",
    file: "/images/galerie/riduri-frunte-2.jpg",
    title: "Riduri frunte – bărbat",
    category: "Toxină Botulinică",
    categorySlug: "toxina-botulinica",
    type: "before-after",
    alt: "Riduri frunte bărbat tratament toxină botulinică înainte după – Juvena Timișoara",
  },
  {
    id: "maseter-procedura",
    file: "/images/galerie/maseter-procedura.jpg",
    title: "Injectare maseter / face slimming",
    category: "Toxină Botulinică",
    categorySlug: "toxina-botulinica",
    type: "procedura",
    alt: "Procedură injectare maseter face slimming toxină botulinică – Juvena Timișoara",
  },

  // — ACID HIALURONIC —
  {
    id: "sant-nazolabial",
    file: "/images/galerie/sant-nazolabial.jpg",
    title: "Șanț nazo-labial",
    category: "Acid Hialuronic",
    categorySlug: "acid-hialuronic",
    type: "before-after",
    alt: "Corecție șanț nazo-labial acid hialuronic înainte după – Juvena Timișoara",
  },
  {
    id: "buze-1",
    file: "/images/galerie/buze-1.jpg",
    title: "Augmentare buze",
    category: "Acid Hialuronic",
    categorySlug: "acid-hialuronic",
    type: "before-after",
    alt: "Augmentare buze acid hialuronic înainte după – Juvena Timișoara",
  },
  {
    id: "buze-2",
    file: "/images/galerie/buze-2.jpg",
    title: "Augmentare buze",
    category: "Acid Hialuronic",
    categorySlug: "acid-hialuronic",
    type: "before-after",
    alt: "Mărire buze cu acid hialuronic rezultat înainte după – Juvena Timișoara",
  },
  {
    id: "contur-facial",
    file: "/images/galerie/contur-facial.jpg",
    title: "Contur facial inferior",
    category: "Acid Hialuronic",
    categorySlug: "acid-hialuronic",
    type: "before-after",
    alt: "Remodelare contur facial inferior acid hialuronic înainte după – Juvena Timișoara",
  },
  {
    id: "cearcane",
    file: "/images/galerie/cearcane.jpg",
    title: "Cearcăne / vale lacrimale",
    category: "Acid Hialuronic",
    categorySlug: "acid-hialuronic",
    type: "before-after",
    alt: "Tratament cearcăne vale lacrimale acid hialuronic înainte după – Juvena Timișoara",
  },

  // — TRATAMENTE FACIALE —
  {
    id: "curatare-procedura",
    file: "/images/galerie/curatare-procedura.jpg",
    title: "Curățare dermatologică",
    category: "Tratamente Faciale",
    categorySlug: "tratamente-faciale",
    type: "procedura",
    alt: "Procedură curățare dermatologică spumă enzimatică – Juvena Timișoara",
  },
  {
    id: "peeling-procedura",
    file: "/images/galerie/peeling-procedura.jpg",
    title: "Peeling chimic – în procedură",
    category: "Tratamente Faciale",
    categorySlug: "tratamente-faciale",
    type: "procedura",
    alt: "Procedură peeling chimic nas – Juvena Timișoara",
  },
  {
    id: "pori-nas-1",
    file: "/images/galerie/pori-nas-1.jpg",
    title: "Pori dilatați nas – peeling",
    category: "Tratamente Faciale",
    categorySlug: "tratamente-faciale",
    type: "before-after",
    alt: "Pori dilatați nas înainte după peeling chimic – Juvena Timișoara",
  },
  {
    id: "pori-nas-2",
    file: "/images/galerie/pori-nas-2.jpg",
    title: "Pori sebacei nas",
    category: "Tratamente Faciale",
    categorySlug: "tratamente-faciale",
    type: "before-after",
    alt: "Pori sebacei nas înainte după tratament – Juvena Timișoara",
  },

  // — HIPERHIDROZĂ —
  {
    id: "hiperhidroza-axilara",
    file: "/images/galerie/hiperhidroza-axilara.jpg",
    title: "Hiperhidroză axilară",
    category: "Hiperhidroză",
    categorySlug: "hiperhidroza",
    type: "procedura",
    alt: "Procedură tratament hiperhidroză axilară toxină botulinică – Juvena Timișoara",
  },

  // — DERMAPEN —
  {
    id: "dermapen-procedura",
    file: "/images/galerie/dermapen-procedura.jpg",
    title: "Dermapen – în procedură",
    category: "Dermapen",
    categorySlug: "dermapen",
    type: "procedura",
    alt: "Procedură dermapen microneedling cu dispozitiv – Juvena Timișoara",
  },
];
