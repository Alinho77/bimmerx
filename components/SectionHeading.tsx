"use client";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  chrome?: boolean;
  center?: boolean;
}

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  chrome = false,
  center = true,
}: SectionHeadingProps) {
  return (
    <div className={`mb-12 ${center ? "text-center" : ""}`}>
      {eyebrow && (
        <p className="text-[#1C69D4] text-xs font-mono uppercase tracking-[0.2em] mb-3">
          {eyebrow}
        </p>
      )}
      <h2
        className={`text-3xl md:text-4xl lg:text-5xl font-bold leading-tight ${
          chrome ? "chrome-text" : "text-white"
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-[#A0A4AB] text-lg max-w-2xl mx-auto leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}
