import Link from "next/link";
import { schemaBreadcrumb } from "@/lib/data/schema";

interface BreadcrumbItem {
  name: string;
  href: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
  light?: boolean;
}

const BASE_URL = "https://juvena-timisoara.ro";

export default function Breadcrumb({ items, light = false }: BreadcrumbProps) {
  const schema = schemaBreadcrumb(
    items.map((i) => ({ name: i.name, url: `${BASE_URL}${i.href}` }))
  );

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <nav aria-label="Breadcrumb" className="mb-8">
        <ol className="flex flex-wrap items-center gap-1.5 text-xs tracking-wide">
          {items.map((item, i) => {
            const isLast = i === items.length - 1;
            return (
              <li key={item.href} className="flex items-center gap-1.5">
                {!isLast ? (
                  <>
                    <Link
                      href={item.href}
                      className={`hover:text-[var(--gold)] transition-colors ${
                        light ? "text-cream/50" : "text-muted"
                      }`}
                    >
                      {item.name}
                    </Link>
                    <svg
                      className={`w-3 h-3 ${light ? "text-cream/30" : "text-muted/40"}`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </>
                ) : (
                  <span className={light ? "text-cream/80" : "text-[var(--dark)]"}>
                    {item.name}
                  </span>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
    </>
  );
}
