"use client";

interface ToggleProps {
  value: boolean | null;
  onChange: (value: boolean) => void;
}

export default function Toggle({ value, onChange }: ToggleProps) {
  return (
    <div className="flex gap-2">
      <button
        type="button"
        onClick={() => onChange(true)}
        className={`
          px-5 py-2 rounded-sm text-sm font-bold font-[family-name:var(--font-heading)]
          transition-all duration-200 cursor-pointer
          ${
            value === true
              ? "bg-[var(--color-orange)] text-white"
              : "border border-[var(--color-grey-light)] text-[var(--color-grey)] hover:border-[var(--color-orange)] hover:text-[var(--color-orange)]"
          }
        `}
      >
        Yes
      </button>
      <button
        type="button"
        onClick={() => onChange(false)}
        className={`
          px-5 py-2 rounded-sm text-sm font-bold font-[family-name:var(--font-heading)]
          transition-all duration-200 cursor-pointer
          ${
            value === false
              ? "bg-[var(--color-foreground)] text-white"
              : "border border-[var(--color-grey-light)] text-[var(--color-grey)] hover:border-[var(--color-foreground)] hover:text-[var(--color-foreground)]"
          }
        `}
      >
        No
      </button>
    </div>
  );
}
