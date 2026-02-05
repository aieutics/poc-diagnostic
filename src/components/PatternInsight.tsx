"use client";

import { motion } from "framer-motion";
import type { PatternInterpretation } from "@/lib/diagnostic-data";

interface PatternInsightProps {
  patterns: PatternInterpretation[];
}

export default function PatternInsight({ patterns }: PatternInsightProps) {
  if (patterns.length === 0) return null;

  return (
    <div className="mt-8">
      <h3 className="font-[family-name:var(--font-heading)] text-lg font-bold mb-4">
        Your Profile Pattern
      </h3>
      {patterns.map((pattern, i) => (
        <motion.div
          key={pattern.id}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 + i * 0.15 }}
          className="border border-[var(--color-grey-light)] rounded-sm p-5 mb-3"
        >
          <h4 className="font-[family-name:var(--font-heading)] text-sm font-bold text-[var(--color-orange)] mb-2">
            {pattern.label}
          </h4>
          <p className="font-[family-name:var(--font-body)] text-sm text-[var(--color-foreground)] leading-relaxed">
            {pattern.description}
          </p>
        </motion.div>
      ))}
    </div>
  );
}
