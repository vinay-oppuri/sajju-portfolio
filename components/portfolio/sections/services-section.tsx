"use client";

import { SectionLabel } from "@/components/portfolio/section-label";

const servicesList = [
  {
    number: "01",
    title: "Brand Motion",
    description: "Identity animation, logo reveals, launch moments, and foundational motion systems.",
  },
  {
    number: "02",
    title: "Product Animation",
    description: "Product walkthroughs and interface motion that make features feel intuitive and clear.",
  },
  {
    number: "03",
    title: "3D Visual Systems",
    description: "Procedural simulations, dynamic spatial visuals, and renders crafted in Blender and Octane.",
  },
  {
    number: "04",
    title: "Kinetic Typography",
    description: "Rhythmic typographic motion and punchy promotional edits built for digital screens.",
  },
];

export function ServicesSection() {
  return (
    <section
      className="px-5 py-20 sm:px-10 lg:px-8 lg:py-28 max-w-6xl mx-auto"
      id="services"
    >
      {/* Section Header */}
      <SectionLabel
        number="02"
        aside="Core capabilities"
      >
        Services
      </SectionLabel>

      {/* Services List */}
      <div className="mt-8 lg:mt-12 divide-y divide-border/80 border-y border-border/80">
        {servicesList.map((service) => (
          <div
            key={service.title}
            data-reveal
            className="grid gap-3 py-6 sm:grid-cols-[3rem_1fr_1.4fr] sm:gap-6 sm:py-8 transition-colors hover:bg-card/40 sm:px-3 -mx-3 px-3 rounded-lg"
          >
            <span className="font-mono text-xs font-semibold text-primary">
              {service.number}
            </span>

            <h3 className="text-xl sm:text-2xl font-normal tracking-[-0.03em] text-foreground">
              {service.title}
            </h3>

            <p className="text-sm leading-relaxed text-muted-foreground">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
