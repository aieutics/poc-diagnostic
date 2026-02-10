"use client";

interface ToggleProps {
  questionId: number;
  value: boolean | null;
  onChange: (value: boolean) => void;
}

export default function Toggle({ questionId, value, onChange }: ToggleProps) {
  const name = `q-${questionId}`;

  return (
    <fieldset
      className="relative inline-flex rounded-lg bg-[var(--color-tag-bg)] p-1"
      role="radiogroup"
      aria-label="Answer"
    >
      {/* Sliding highlight pill */}
      {value !== null && (
        <div
          className="absolute top-1 bottom-1 rounded-md transition-all duration-200 ease-out"
          style={{
            left: value === true ? "4px" : "50%",
            right: value === true ? "50%" : "4px",
            backgroundColor: value === true ? "#FF5F1F" : "#1a1a1a",
          }}
        />
      )}

      {/* Yes option */}
      <label
        className={`
          relative z-10 flex items-center justify-center
          px-6 py-2.5 rounded-md text-sm font-bold cursor-pointer
          font-[family-name:var(--font-heading)]
          transition-colors duration-200 select-none
          ${
            value === true
              ? "text-white"
              : "text-[var(--color-grey)] hover:text-[var(--color-orange)]"
          }
        `}
      >
        <input
          type="radio"
          name={name}
          value="yes"
          checked={value === true}
          onChange={() => onChange(true)}
          className="sr-only"
        />
        Yes
      </label>

      {/* No option */}
      <label
        className={`
          relative z-10 flex items-center justify-center
          px-6 py-2.5 rounded-md text-sm font-bold cursor-pointer
          font-[family-name:var(--font-heading)]
          transition-colors duration-200 select-none
          ${
            value === false
              ? "text-white"
              : "text-[var(--color-grey)] hover:text-[var(--color-foreground)]"
          }
        `}
      >
        <input
          type="radio"
          name={name}
          value="no"
          checked={value === false}
          onChange={() => onChange(false)}
          className="sr-only"
        />
        No
      </label>
    </fieldset>
  );
}
