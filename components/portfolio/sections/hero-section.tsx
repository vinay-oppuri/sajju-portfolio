"use client";

import { ArrowDown, ArrowUpRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { scrollToSection } from "@/lib/scroll";
import { FlickeringGrid } from "@/components/ui/flickering-grid";
import { HeroShowcase } from "@/components/portfolio/sections/hero-showcase";

export function HeroSection() {
  return (
    <section
      className="relative flex min-h-svh flex-col justify-between overflow-hidden px-5 pb-10 pt-28 sm:px-10 lg:px-[5vw] lg:pt-36"
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

      {/* Subtle bottom fade to blend with the next section */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-36 bg-gradient-to-t from-background via-background/60 to-transparent" />

      {/* Top Meta Bar */}
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div
          className="flex items-center gap-2 text-[11px] font-medium tracking-[0.14em] uppercase text-muted-foreground"
          data-hero-enter
        >
          <span>Sajju — Motion Designer &amp; Visual Storyteller</span>
        </div>
      </div>

      {/* Center Headline & Introduction */}
      <div className="my-auto grid gap-8 py-8 lg:grid-cols-[1.3fr_1fr] lg:items-end lg:gap-16">
        <div>
          <h1 className="max-w-4xl text-7xl font-normal leading-[0.88] tracking-[-0.09em]">
            Stories in motion.
            <br />
            <span className="text-primary text-8xl">Crafted with intent.</span>
          </h1>
        </div>

        <div className="space-y-6 lg:max-w-md">
          <p
            className="text-base leading-relaxed text-muted-foreground sm:text-lg"
            data-hero-enter
          >
            Motion design for brands, products, and stories that need to be
            understood — and remembered. From 3D product reveals to kinetic UI
            animations, every frame is crafted with rhythm and intent.
          </p>

          <div className="flex flex-wrap items-center gap-3 pt-1" data-hero-enter>
            <Button
              className="rounded-full px-6 text-sm font-medium shadow-xs transition-all hover:scale-[1.02]"
              onClick={() => scrollToSection("work")}
            >
              Explore selected work
              <ArrowDown className="size-4" />
            </Button>

            <Button
              className="rounded-full border-foreground/15 bg-background/60 px-6 text-sm font-medium backdrop-blur-xs transition-all hover:bg-background/90"
              onClick={() => scrollToSection("contact")}
              variant="outline"
            >
              Start a project
              <ArrowUpRight className="size-4" />
            </Button>
          </div>
        </div>
      </div>

      {/* Horizontal Video Showcase Loop */}
      <div className="w-full pt-4" data-hero-enter>
        <div className="mb-3 flex items-center justify-between px-1 text-xs text-muted-foreground">
          <span className="uppercase tracking-[0.12em] font-medium">Selected Motion Showcase</span>
          <span className="hidden sm:inline-block">Hover to pause · Click to view case study</span>
        </div>
        <HeroShowcase />
      </div>
    </section>
  );
}
