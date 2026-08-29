"use client";

import { ArrowDown, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { scrollToSection } from "@/lib/scroll";
import { FlickeringGrid } from "@/components/ui/flickering-grid";
import { HeroShowcase } from "@/components/portfolio/sections/hero-showcase";

export function HeroSection() {
  return (
    <section
      className="relative flex min-h-svh flex-col justify-between overflow-hidden pb-8 pt-28 sm:pt-32 lg:pt-36"
      id="top"
    >
      {/* Background Flickering Grid */}
      <FlickeringGrid
        className="pointer-events-none absolute inset-0 -z-10 size-full"
        color="rgb(0, 0, 0)"
        flickerChance={0.25}
        gridGap={6}
        maxOpacity={0.12}
        squareSize={4}
      />

      {/* Subtle bottom fade to blend smoothly with the next section */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-32 bg-gradient-to-t from-background via-background/60 to-transparent" />

      {/* Center Headline & Introduction */}
      <div className="my-auto w-full px-5 py-10 sm:px-10 lg:px-[5vw]">
        <div className="flex flex-col items-center justify-center text-center gap-8 lg:gap-16 pl-24">
          <div>
            <h1
              className="max-w-4xl text-7xl font-normal leading-[0.82] tracking-tighter"
              data-hero-enter
            >
              Stories in motion.
              <br />
              <div className="text-primary text-8xl mt-4">Crafted with intent.</div>
            </h1>
          </div>

          <div className="space-y-6 lg:max-w-xl flex flex-col items-center">
            <p
              className="text-sm leading-relaxed text-muted-foreground sm:text-base"
              data-hero-enter
            >
              Motion design for brands, products, and stories that need to be
              understood and remembered. From 3D identity systems to kinetic
              UI animations, every frame is designed with rhythm and focus.
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-1" data-hero-enter>
              <Button
                className="h-10 rounded-xl bg-foreground px-6 text-xs uppercase tracking-wider text-background transition-all hover:bg-foreground/85"
                onClick={() => scrollToSection("work")}
              >
                View selected work
                <ArrowDown className="size-3.5" />
              </Button>

              <Button
                className="h-10 rounded-xl border border-border bg-muted/60 px-6 text-xs uppercase tracking-wider text-foreground transition-all hover:bg-muted"
                onClick={() => scrollToSection("contact")}
                variant="ghost"
              >
                Start a project
                <ArrowUpRight className="size-3.5" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Full-bleed Horizontal Motion Showcase Tape */}
      <div className="w-full pt-4" data-hero-enter>
        <div className="mb-3 flex items-center justify-between px-5 text-[10px] uppercase tracking-[0.14em] text-muted-foreground sm:px-10 lg:px-[5vw]">
          <span>Selected Motion Studies</span>
          <span className="hidden sm:inline-block">Hover to pause · Click to inspect</span>
        </div>
        <HeroShowcase />
      </div>
    </section>
  );
}
