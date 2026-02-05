"use client";

import { motion } from "framer-motion";
import type { DimensionResult } from "@/lib/diagnostic-data";

interface DimensionBarProps {
  result: DimensionResult;
  index: number;
}

const statusColors = {
  green: "var(--color-green)",
  amber: "var(--color-amber)",
  red: "var(--color-red)",
};

const statusLabels = {
  green: "Strong",
  amber: "Partial",
  red: "At Risk",
};

export default function DimensionBar({ result, index }: DimensionBarProps) {
  const color = statusColors[result.status];
  const label = statusLabels[result.status];

  return (
    <div className="mb-4">
      <div className="flex items-center justify-between mb-1.5">
        <span className="font-[family-name:var(--font-heading)] text-sm font-bold">
          {result.dimension.name}
        </span>
        <div className="flex items-center gap-2">
          <span className="font-[family-name:var(--font-heading)] text-xs font-bold" style={{ color }}>
            {label}
          </span>
          <span className="font-[family-name:var(--font-body)] text-xs text-[var(--color-grey)]">
            {result.score}/{result.maxScore}
          </span>
        </div>
      </div>
      <div className="relative h-2.5 bg-[var(--color-grey-light)] rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${result.percentage}%` }}
          transition={{ duration: 0.8, delay: index * 0.15, ease: "easeOut" }}
          className="absolute h-full rounded-full"
          style={{ backgroundColor: color }}
        />
      </div>
    </div>
  );
}
