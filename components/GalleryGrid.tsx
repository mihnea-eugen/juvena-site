"use client";

import { useState } from "react";
import Image from "next/image";
import { GALLERY_CATEGORIES, GALLERY_ITEMS, type GalleryItem } from "@/lib/data/gallery";

export default function GalleryGrid() {
  const [activeCategory, setActiveCategory] = useState("toate");
  const [lightbox, setLightbox] = useState<GalleryItem | null>(null);

  const filtered =
    activeCategory === "toate"
      ? GALLERY_ITEMS
      : GALLERY_ITEMS.filter((item) => item.categorySlug === activeCategory);

  return (
    <>
      {/* Filtre */}
      <div className="flex flex-wrap gap-2 mb-10">
        {GALLERY_CATEGORIES.map((cat) => (
          <button
            key={cat.slug}
            onClick={() => setActiveCategory(cat.slug)}
            className={`px-4 py-2 text-xs tracking-widest uppercase border transition-colors ${
              activeCategory === cat.slug
                ? "bg-[var(--gold)] text-white border-[var(--gold)]"
                : "bg-transparent text-[var(--muted)] border-[var(--cream-2)] hover:border-[var(--gold)] hover:text-[var(--dark)]"
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {filtered.map((item) => (
          <button
            key={item.id}
            onClick={() => setLightbox(item)}
            className="group relative aspect-square overflow-hidden bg-[var(--cream-2)] block text-left"
          >
            <Image
              src={item.file}
              alt={item.alt}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-[var(--dark)]/0 group-hover:bg-[var(--dark)]/40 transition-colors duration-300" />
            {/* Label */}
            <div className="absolute bottom-0 left-0 right-0 translate-y-full group-hover:translate-y-0 transition-transform duration-300 p-4">
              <p className="text-[var(--cream)] text-xs tracking-widest uppercase">
                {item.category}
              </p>
              <p
                className="text-white text-base mt-0.5"
                style={{ fontFamily: "var(--font-serif)", fontWeight: 300 }}
              >
                {item.title}
              </p>
            </div>
            {/* Badge tip */}
            <span
              className={`absolute top-3 right-3 text-[10px] px-2 py-0.5 tracking-widest uppercase ${
                item.type === "before-after"
                  ? "bg-[var(--gold)]/90 text-white"
                  : "bg-white/80 text-[var(--dark)]"
              }`}
            >
              {item.type === "before-after" ? "Înainte / după" : "Procedură"}
            </span>
          </button>
        ))}
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setLightbox(null)}
        >
          <div
            className="relative max-w-2xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative w-full aspect-square">
              <Image
                src={lightbox.file}
                alt={lightbox.alt}
                fill
                sizes="672px"
                className="object-contain"
                priority
              />
            </div>
            <div className="mt-4 text-center">
              <p className="text-[var(--gold)] text-xs tracking-widest uppercase">
                {lightbox.category}
              </p>
              <p
                className="text-white text-lg mt-1"
                style={{ fontFamily: "var(--font-serif)", fontWeight: 300 }}
              >
                {lightbox.title}
              </p>
            </div>
            <button
              onClick={() => setLightbox(null)}
              className="absolute -top-4 -right-4 w-8 h-8 bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
              aria-label="Închide"
            >
              ✕
            </button>
          </div>
        </div>
      )}

      {filtered.length === 0 && (
        <p className="text-[var(--muted)] text-sm py-12 text-center">
          Nu există fotografii în această categorie.
        </p>
      )}
    </>
  );
}
