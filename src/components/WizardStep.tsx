"use client";

import { motion, AnimatePresence } from "framer-motion";
import type { Dimension } from "@/lib/diagnostic-data";
import type { Answers } from "@/lib/scoring";
import Toggle from "./Toggle";

interface WizardStepProps {
  dimension: Dimension;
  answers: Answers;
  onAnswer: (questionId: number, value: boolean) => void;
  stepIndex: number;
  direction: number;
}

const variants = {
  enter: (dir: number) => ({
    x: dir > 0 ? 300 : -300,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (dir: number) => ({
    x: dir > 0 ? -300 : 300,
    opacity: 0,
  }),
};

export default function WizardStep({
  dimension,
  answers,
  onAnswer,
  stepIndex,
  direction,
}: WizardStepProps) {
  return (
    <AnimatePresence mode="wait" custom={direction}>
      <motion.div
        key={dimension.id}
        custom={direction}
        variants={variants}
        initial="enter"
        animate="center"
        exit="exit"
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        <div className="mb-8">
          <p className="font-[family-name:var(--font-heading)] text-xs font-bold uppercase tracking-widest text-[var(--color-orange)] mb-2">
            Dimension {stepIndex + 1} of 5
          </p>
          <h2 className="font-[family-name:var(--font-heading)] text-2xl md:text-3xl font-bold mb-2">
            {dimension.name}
          </h2>
          <p className="font-[family-name:var(--font-body)] text-[var(--color-grey)] text-base md:text-lg italic">
            {dimension.subtitle}
          </p>
        </div>

        <div className="space-y-6">
          {dimension.questions.map((question, qi) => (
            <motion.div
              key={question.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: qi * 0.1 }}
              className="border-b border-[var(--color-grey-light)] pb-6 last:border-0"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                <div className="flex-1">
                  <span className="font-[family-name:var(--font-heading)] text-xs font-bold text-[var(--color-grey)] mr-2">
                    {question.id}.
                  </span>
                  <span className="font-[family-name:var(--font-body)] text-base leading-relaxed">
                    {question.text}
                  </span>
                </div>
                <div className="flex-shrink-0">
                  <Toggle
                    value={answers[question.id] ?? null}
                    onChange={(val) => onAnswer(question.id, val)}
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <p className="font-[family-name:var(--font-body)] text-xs text-[var(--color-grey)] mt-6 italic">
          &quot;Not sure&quot; counts as No. Only what is concretely true today
          counts as Yes.
        </p>
      </motion.div>
    </AnimatePresence>
  );
}
