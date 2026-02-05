"use client";

import { DIMENSIONS } from "@/lib/diagnostic-data";

interface ProgressBarProps {
  currentStep: number;
}

export default function ProgressBar({ currentStep }: ProgressBarProps) {
  const totalSteps = DIMENSIONS.length;

  return (
    <div className="w-full">
      <div className="flex items-center justify-between mb-2">
        {DIMENSIONS.map((dim, i) => {
          const isActive = i === currentStep;
          const isComplete = i < currentStep;
          return (
            <div key={dim.id} className="flex-1 flex flex-col items-center">
              <div
                className={`
                  w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold
                  font-[family-name:var(--font-heading)] transition-all duration-300
                  ${
                    isComplete
                      ? "bg-[var(--color-orange)] text-white"
                      : isActive
                        ? "border-2 border-[var(--color-orange)] text-[var(--color-orange)]"
                        : "border border-[var(--color-grey-light)] text-[var(--color-grey-light)]"
                  }
                `}
              >
                {isComplete ? (
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={3}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                ) : (
                  i + 1
                )}
              </div>
              <span
                className={`
                  hidden md:block mt-1 text-[10px] font-[family-name:var(--font-heading)] text-center leading-tight
                  ${isActive ? "text-[var(--color-foreground)] font-bold" : "text-[var(--color-grey)]"}
                `}
              >
                {dim.name}
              </span>
            </div>
          );
        })}
      </div>
      <div className="relative h-0.5 bg-[var(--color-grey-light)] mx-4 mt-1">
        <div
          className="absolute h-full bg-[var(--color-orange)] transition-all duration-500 ease-out"
          style={{ width: `${(currentStep / totalSteps) * 100}%` }}
        />
      </div>
    </div>
  );
}
