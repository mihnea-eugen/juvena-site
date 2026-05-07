interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  center?: boolean;
  light?: boolean;
}

export default function SectionHeader({
  eyebrow,
  title,
  subtitle,
  center = false,
  light = false,
}: SectionHeaderProps) {
  return (
    <div className={`mb-12 ${center ? "text-center" : ""}`}>
      {eyebrow && (
        <p
          className={`text-xs tracking-[0.2em] uppercase mb-3 ${
            light ? "text-gold-light" : "text-gold"
          }`}
        >
          {eyebrow}
        </p>
      )}
      <h2
        className={`heading-display text-3xl md:text-4xl lg:text-5xl mb-4 ${
          light ? "text-cream" : "text-[var(--dark)]"
        }`}
        style={{ fontFamily: "var(--font-serif)" }}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`text-base md:text-lg leading-relaxed max-w-2xl ${
            center ? "mx-auto" : ""
          } ${light ? "text-cream/60" : "text-muted"}`}
        >
          {subtitle}
        </p>
      )}
      {!center && (
        <div className="mt-5 w-12 h-px bg-[var(--gold)]" />
      )}
      {center && (
        <div className="mt-5 w-12 h-px bg-[var(--gold)] mx-auto" />
      )}
    </div>
  );
}
