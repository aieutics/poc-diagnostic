"use client";

import { motion } from "framer-motion";
import { CTA_COPY, ATTRIBUTION } from "@/lib/diagnostic-data";

interface CTASectionProps {
  redCount: number;
}

export default function CTASection({ redCount }: CTASectionProps) {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1 }}
      className="mt-10"
    >
      <h3 className="font-[family-name:var(--font-heading)] text-xl font-bold mb-4">
        {CTA_COPY.heading}
      </h3>
      {CTA_COPY.body.split("\n\n").map((para, i) => (
        <p
          key={i}
          className="font-[family-name:var(--font-body)] text-base text-[var(--color-foreground)] leading-relaxed mb-4"
        >
          {para}
        </p>
      ))}

      {redCount >= 2 && (
        <div className="bg-[var(--color-warm-bg)] border-l-4 border-[var(--color-orange)] p-5 rounded-sm mb-6">
          <p className="font-[family-name:var(--font-body)] text-base font-semibold leading-relaxed">
            {CTA_COPY.callout}
          </p>
        </div>
      )}

      {/* Contact card */}
      <div className="border border-[var(--color-grey-light)] rounded-sm p-6 mt-6">
        <p className="font-[family-name:var(--font-heading)] text-base font-bold mb-1">
          {CTA_COPY.contact.name}
        </p>
        <p className="font-[family-name:var(--font-body)] text-sm text-[var(--color-grey)] mb-1">
          {CTA_COPY.contact.title}
        </p>
        <p className="font-[family-name:var(--font-body)] text-sm text-[var(--color-grey)] mb-3">
          {CTA_COPY.contact.subtitle}
        </p>
        <div className="flex flex-col sm:flex-row gap-3">
          <a
            href={`https://${CTA_COPY.contact.website}`}
            target="_blank"
            rel="noopener noreferrer"
            className="font-[family-name:var(--font-heading)] text-sm font-bold text-[var(--color-orange)] hover:underline"
          >
            {CTA_COPY.contact.website}
          </a>
          <a
            href={`mailto:${CTA_COPY.contact.email}`}
            className="font-[family-name:var(--font-heading)] text-sm font-bold text-[var(--color-orange)] hover:underline"
          >
            {CTA_COPY.contact.email}
          </a>
        </div>
      </div>

      {/* Attribution */}
      <p className="font-[family-name:var(--font-body)] text-xs text-[var(--color-grey)] mt-8 italic">
        {ATTRIBUTION}
      </p>
    </motion.section>
  );
}
