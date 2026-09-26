"use client";

import { ArrowUpRight } from "lucide-react";
import { FlipFadeText } from "@/components/ui/flip-fade-text";
import { CardTimeMachine } from "@/components/ui/new-cards";
import { GlossButton } from "@/components/ui/gloss-button";
import { ChromeBorderButton } from "@/components/ui/chrome-border-button";

export function HeroSection() {
  return (
    <section
      className="relative flex min-h-[88svh] flex-col justify-between overflow-hidden pt-20 pb-10 sm:pt-28 sm:pb-14 lg:pt-32 lg:pb-16"
      id="top"
    >
      {/* Subtle bottom fade to blend smoothly with the next section */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-28 sm:h-32 bg-linear-to-t from-background via-background/60 to-transparent" />

      {/* Main Hero Container */}
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-8 lg:px-8 flex flex-col justify-center sm:justify-between flex-1 gap-8 sm:gap-12 lg:gap-16">
        {/* 1. TOP CENTER: Status Pill + Headline + Dynamic FlipFadeText */}
        <div className="flex flex-col items-center text-center gap-3 sm:gap-4 pt-1 sm:pt-4">
          {/* Centered Large Title with fluid responsive scaling */}
          <div className="space-y-1 sm:space-y-1.5 max-w-6xl w-full" data-hero-enter>
            <h1 className="text-[clamp(2rem,7.5vw,4.5rem)] sm:text-6xl md:text-7xl lg:text-7xl font-normal leading-[0.95] tracking-tight sm:tracking-tighter text-foreground">
              Stories in motion.
            </h1>
            <div className="flex items-center justify-center py-0.5 sm:py-1">
              <FlipFadeText
                words={[
                  "CRAFTED WITH INTENT",
                  "SHAPED BY RHYTHM",
                  "DESIGNED TO MOVE",
                  "3D VISUAL SYSTEMS",
                  "KINETIC IDENTITIES",
                ]}
                interval={3200}
                className="justify-center min-h-[1.2em]"
                textClassName="text-primary font-normal tracking-tight sm:tracking-tighter text-[clamp(1.75rem,7vw,4.5rem)] sm:text-6xl md:text-7xl lg:text-7xl text-center"
              />
            </div>
          </div>
        </div>

        {/* 2. BOTTOM SPLIT: Left Bottom = Info & CTAs | Right Bottom = 3D Cards (Centered) */}
        <div className="w-full max-w-4xl mx-auto flex flex-col lg:flex-row items-center justify-center gap-18 lg:gap-14 pb-4 sm:pb-6">
          {/* Left Bottom: Descriptive Copy & Action Buttons */}
          <div
            className="flex flex-col items-center text-center lg:items-end lg:text-right gap-4 sm:gap-6 max-w-md lg:max-w-sm"
            data-hero-enter
          >
            <p className="text-xs sm:text-sm md:text-base leading-relaxed text-muted-foreground">
              Motion design for brands, products, and stories that need to be
              understood and remembered. From 3D identity systems to kinetic
              UI animations, every frame is designed with rhythm and focus.
            </p>

            <div className="flex flex-wrap items-center justify-center lg:justify-end gap-2.5 sm:gap-3 pt-1">
              <ChromeBorderButton href="#work">
                View selected work
              </ChromeBorderButton>

              <GlossButton
                href="#contact"
                icon={<ArrowUpRight className="size-3.5" />}
              >
                <span>Start a project</span>
              </GlossButton>
            </div>
          </div>

          {/* Right Bottom: 3D Video Cards Deck */}
          <div
            className="hidden sm:flex items-center justify-center w-full max-w-full"
            data-hero-enter
          >
            <CardTimeMachine />
          </div>
        </div>
      </div>
    </section>
  );
}
