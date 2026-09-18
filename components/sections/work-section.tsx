"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { projects } from "@/data/portfolio-data";
import { SectionLabel } from "@/components/section-label";
import { cn } from "@/lib/utils";

export function WorkSection() {
  return (
    <section
      className="px-5 py-16 sm:px-10 lg:px-8 lg:py-24 max-w-6xl mx-auto w-full"
      id="work"
    >
      {/* Section Header */}
      <SectionLabel
        number="01"
        aside="Selected motion & 3D projects"
      >
        Selected work
      </SectionLabel>

      {/* Projects Showcase List */}
      <div className="mt-8 lg:mt-12 divide-y border-y border-border/80">
        {projects.map((project) => (
          <Link
            key={project.slug}
            href={`/work/${project.slug}`}
            data-reveal
            className="group relative block py-6 sm:py-8 transition-colors duration-200 hover:bg-card/40 sm:px-3 -mx-3 px-3 rounded-lg"
          >
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 md:gap-6">
              {/* Left Side: Number, Title & Metadata */}
              <div className="space-y-1.5 min-w-0 flex-1">
                <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-xs font-mono text-muted-foreground">
                  <span className="text-primary font-semibold">{project.number}</span>
                  <span>/</span>
                  <span>{project.category}</span>
                  {project.year && (
                    <>
                      <span>/</span>
                      <span>{project.year}</span>
                    </>
                  )}
                </div>

                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-normal tracking-[-0.04em] text-foreground transition-transform duration-200 group-hover:translate-x-1">
                  {project.title}
                </h3>

                {project.tools && (
                  <p className="text-xs font-mono text-muted-foreground/70">
                    {project.tools}
                  </p>
                )}
              </div>

              {/* Right Side: Video Thumbnail & Arrow */}
              <div className="flex items-center justify-between md:justify-end gap-3 sm:gap-4 shrink-0">
                {project.videoUrl ? (
                  <div className="relative w-44 sm:w-52 md:w-56 aspect-16/10 rounded-lg overflow-hidden border border-border/60 bg-neutral-950 shrink-0">
                    <video
                      src={project.videoUrl}
                      autoPlay
                      loop
                      muted
                      playsInline
                      preload="metadata"
                      className="size-full object-cover opacity-85 transition-opacity duration-300 group-hover:opacity-100"
                    />
                  </div>
                ) : (
                  <div
                    className={cn(
                      "w-44 sm:w-52 md:w-56 aspect-16/10 rounded-lg overflow-hidden border border-border/60 flex items-center justify-center text-sm font-medium shrink-0",
                      project.accent
                    )}
                  >
                    {project.title}
                  </div>
                )}

                {/* Arrow Icon */}
                <div
                  aria-hidden="true"
                  className="flex size-9 shrink-0 items-center justify-center rounded-md border border-border/70 bg-background text-foreground transition-colors duration-200 group-hover:border-foreground group-hover:bg-foreground group-hover:text-background"
                >
                  <ArrowUpRight className="size-4 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
