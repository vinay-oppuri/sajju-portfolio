"use client";

import { ArrowDown, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { scrollToSection } from "@/lib/scroll";
import { FlipFadeText } from "@/components/ui/flip-fade-text";
import { CardTimeMachine } from "@/components/ui/new-cards";

export function HeroSection() {
  return (
    <section
      className="relative flex min-h-[90svh] flex-col justify-between overflow-hidden pt-28 pb-12 sm:pt-32 sm:pb-16 lg:pt-36 lg:pb-16"
      id="top"
    >
      {/* Subtle bottom fade to blend smoothly with the next section */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-32 bg-linear-to-t from-background via-background/60 to-transparent" />

      {/* Main Hero Container */}
      <div className="w-full max-w-7xl mx-auto px-5 sm:px-10 lg:px-8 flex flex-col justify-between flex-1 gap-12 lg:gap-16">
        {/* 1. TOP CENTER: Status Pill + Headline + Dynamic FlipFadeText */}
        <div className="flex flex-col items-center text-center gap-4 sm:gap-5 pt-2 sm:pt-4">
          {/* Status Pill Badge */}
          <div
            className="inline-flex items-center gap-2 rounded-full border border-border/80 bg-card/60 px-3.5 py-1.5 text-xs text-muted-foreground backdrop-blur-xs shadow-xs"
            data-hero-enter
          >
            <span className="size-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="font-mono text-[11px] uppercase tracking-wider">
              Available for freelance &amp; motion direction
            </span>
          </div>

          {/* Centered Large Title */}
          <div className="space-y-1.5 max-w-6xl" data-hero-enter>
            <h1 className="text-4xl font-normal leading-[0.92] tracking-tighter sm:text-6xl md:text-7xl lg:text-7xl">
              Stories in motion.
            </h1>
            <div className="flex items-center justify-center py-1">
              <FlipFadeText
                words={[
                  "CRAFTED WITH INTENT",
                  "SHAPED BY RHYTHM",
                  "DESIGNED TO MOVE",
                  "3D VISUAL SYSTEMS",
                  "KINETIC IDENTITIES",
                ]}
                interval={3200}
                className="justify-center min-h-0"
                textClassName="text-primary font-normal tracking-tighter text-4xl sm:text-6xl md:text-7xl lg:text-7xl"
              />
            </div>
          </div>
        </div>

        {/* 2. BOTTOM SPLIT: Left Bottom = Info & CTAs | Right Bottom = 3D Cards (Centered) */}
        <div className="w-full max-w-5xl mx-auto flex flex-col lg:flex-row items-center justify-center gap-10 lg:gap-14 pb-4 sm:pb-6">
          {/* Left Bottom: Descriptive Copy & Action Buttons */}
          <div
            className="flex flex-col items-end text-right gap-6 max-w-sm"
            data-hero-enter
          >
            <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
              Motion design for brands, products, and stories that need to be
              understood and remembered. From 3D identity systems to kinetic
              UI animations, every frame is designed with rhythm and focus.
            </p>

            <div className="flex flex-wrap items-center justify-end gap-3 pt-1">
              <Button
                className="h-11 rounded-xl bg-foreground px-6 text-xs uppercase tracking-wider text-background transition-all hover:bg-foreground/85 cursor-pointer"
                onClick={() => scrollToSection("work")}
              >
                View selected work
                <ArrowDown className="size-3.5" />
              </Button>

              <Button
                className="h-11 rounded-xl border border-border bg-card/60 px-6 text-xs uppercase tracking-wider text-foreground backdrop-blur-xs transition-all hover:bg-muted cursor-pointer"
                onClick={() => scrollToSection("contact")}
                variant="ghost"
              >
                Start a project
                <ArrowUpRight className="size-3.5" />
              </Button>
            </div>
          </div>

          {/* Right Bottom: 3D Video Cards Deck */}
          <div
            className="flex items-center justify-center"
            data-hero-enter
          >
            <CardTimeMachine />
          </div>
        </div>
      </div>
    </section>
  );
}
