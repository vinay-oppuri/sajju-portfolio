"use client";

import { SectionLabel } from "@/components/portfolio/section-label";

export function AboutSection() {
  return (
    <section
      className="px-5 py-16 sm:px-10 lg:px-8 lg:py-24 max-w-6xl mx-auto w-full"
      id="about"
    >
      {/* Section Header */}
      <SectionLabel
        number="03"
        aside="Background & tools"
      >
        About
      </SectionLabel>

      <div className="mt-10 lg:mt-14 grid gap-8 lg:grid-cols-[1.1fr_1fr] lg:gap-16">
        {/* Left Column: Headline */}
        <div data-reveal>
          <h3 className="text-3xl sm:text-5xl lg:text-6xl font-normal leading-[0.95] tracking-[-0.04em] text-foreground">
            Curious by nature.
            <br />
            <span className="text-muted-foreground">Precise by practice.</span>
          </h3>
        </div>

        {/* Right Column: Bio & Definition List */}
        <div className="space-y-6" data-reveal>
          <div className="space-y-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
            <p>
              I&apos;m Sajju, a Computer Science &amp; Engineering student at IIIT
              Raichur building a freelance practice in motion design and visual
              storytelling.
            </p>
            <p>
              My technical background keeps me curious about how things work;
              my design practice is about making them easy to experience.
            </p>
          </div>

          {/* Definition List */}
          <dl className="border-t border-border/80 text-xs sm:text-sm divide-y divide-border/60 pt-2">
            <div className="grid grid-cols-[4.5rem_1fr] sm:grid-cols-[5.5rem_1fr] py-3 gap-2">
              <dt className="text-muted-foreground font-mono">Tools</dt>
              <dd className="text-foreground">After Effects, Blender, Figma, Premiere Pro, Octane</dd>
            </div>
            <div className="grid grid-cols-[4.5rem_1fr] sm:grid-cols-[5.5rem_1fr] py-3 gap-2">
              <dt className="text-muted-foreground font-mono">Location</dt>
              <dd className="text-foreground">India — remote friendly worldwide</dd>
            </div>
            <div className="grid grid-cols-[4.5rem_1fr] sm:grid-cols-[5.5rem_1fr] py-3 gap-2">
              <dt className="text-muted-foreground font-mono">Status</dt>
              <dd className="text-foreground">Available for select freelance projects</dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  );
}
