"use client";

import { motion } from "framer-motion";
import type { DimensionResult } from "@/lib/diagnostic-data";

interface ReflectionBoxProps {
  result: DimensionResult;
  index: number;
}

export default function ReflectionBox({ result, index }: ReflectionBoxProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 + index * 0.1 }}
      className="bg-[var(--color-warm-bg)] border-l-4 border-[var(--color-orange)] p-5 rounded-sm mb-4"
    >
      <h4 className="font-[family-name:var(--font-heading)] text-sm font-bold mb-2 flex items-center gap-2">
        <span
          className="inline-block w-2.5 h-2.5 rounded-full"
          style={{
            backgroundColor:
              result.status === "red" ? "var(--color-red)" : "var(--color-amber)",
          }}
        />
        {result.dimension.name}
        <span className="font-normal text-[var(--color-grey)]">
          — {result.score}/{result.maxScore}
        </span>
      </h4>
      <p className="font-[family-name:var(--font-body)] text-sm text-[var(--color-foreground)] leading-relaxed mb-3">
        {result.dimension.reflection}
      </p>
      <p className="font-[family-name:var(--font-body)] text-sm italic text-[var(--color-grey)]">
        {result.dimension.reflectionPrompt}
      </p>
    </motion.div>
  );
}
