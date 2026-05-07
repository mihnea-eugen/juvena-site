import Link from "next/link";
import type { Treatment } from "@/lib/data/treatments";

interface TreatmentCardProps {
  treatment: Treatment;
  href?: string;
}

export default function TreatmentCard({ treatment, href }: TreatmentCardProps) {
  const content = (
    <div className="treatment-card group cursor-pointer">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="text-[var(--dark)] font-medium text-base leading-snug group-hover:text-[var(--gold)] transition-colors">
            {treatment.name}
          </h3>
          {treatment.detail && (
            <p className="text-muted text-sm mt-1">{treatment.detail}</p>
          )}
        </div>
        <span className="price-tag shrink-0">{treatment.price} RON</span>
      </div>
      {href && (
        <div className="mt-4 flex items-center gap-1 text-xs text-[var(--gold)] tracking-widest uppercase opacity-0 group-hover:opacity-100 transition-opacity">
          <span>Detalii</span>
          <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </div>
      )}
    </div>
  );

  if (href) {
    return <Link href={href}>{content}</Link>;
  }
  return content;
}
