"use client";

import { SectionLabel } from "@/components/section-label";

const processSteps = [
  {
    number: "01",
    title: "Listen",
    description: "The core message, audience, and project goals.",
  },
  {
    number: "02",
    title: "Shape",
    description: "References, style direction, and storyboard.",
  },
  {
    number: "03",
    title: "Move",
    description: "Animation, rhythm, and motion refinement.",
  },
  {
    number: "04",
    title: "Deliver",
    description: "High-res rendering, formats, and handoff.",
  },
];

export function ProcessSection() {
  return (
    <section
      className="px-5 py-16 sm:px-10 lg:px-8 lg:py-24 max-w-6xl mx-auto w-full"
      id="process"
    >
      {/* Section Header */}
      <SectionLabel
        number="04"
        aside="Workflow"
      >
        Process
      </SectionLabel>

      {/* 4-Step Clean Grid */}
      <div className="mt-8 lg:mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x border-y border-border/80">
        {processSteps.map((step) => (
          <div
            key={step.number}
            data-reveal
            className="pt-5 pb-5 sm:py-6 sm:px-4 lg:px-5 sm:first:pl-0 sm:last:pr-0 space-y-2.5"
          >
            <span className="font-mono text-xs font-semibold text-primary">
              {step.number}
            </span>

            <h3 className="text-lg sm:text-xl font-normal tracking-[-0.03em] text-foreground">
              {step.title}
            </h3>

            <p className="text-xs sm:text-sm leading-relaxed text-muted-foreground">
              {step.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
