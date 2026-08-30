"use client";

import { ArrowDown, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { scrollToSection } from "@/lib/scroll";
import { FlipFadeText } from "@/components/ui/flip-fade-text";
import { CardTimeMachine } from "@/components/ui/new-cards";

export function HeroSection() {
  return (
    <section
      className="relative flex flex-col justify-center overflow-hidden pt-28 pb-16 sm:pt-32 sm:pb-20 lg:pt-36 lg:pb-24"
      id="top"
    >
      {/* Subtle bottom fade to blend smoothly with the next section */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-32 bg-linear-to-t from-background via-background/60 to-transparent" />

      {/* Main Hero Container */}
      <div className="w-full max-w-7xl mx-auto px-5 sm:px-10 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-[1.15fr_1fr] lg:gap-12 xl:gap-16">
          {/* Left Column: Heading, Animated Flip Text, Intro & CTAs */}
          <div className="flex flex-col items-start text-left gap-6 sm:gap-7">
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

            {/* Headline with FlipFadeText */}
            <div className="space-y-1" data-hero-enter>
              <h1 className="text-4xl font-normal leading-[0.92] tracking-tighter sm:text-6xl md:text-6xl lg:text-7xl">
                Stories in motion.
              </h1>
              <div className="flex items-center py-1">
                <FlipFadeText
                  words={[
                    "CRAFTED WITH INTENT",
                    "SHAPED BY RHYTHM",
                    "DESIGNED TO MOVE",
                    "3D VISUAL SYSTEMS",
                    "KINETIC IDENTITIES",
                  ]}
                  interval={3200}
                  className="justify-start min-h-0"
                  textClassName="text-primary font-normal tracking-tighter text-4xl sm:text-6xl md:text-6xl lg:text-7xl"
                />
              </div>
            </div>

            {/* Description */}
            <p
              className="max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base"
              data-hero-enter
            >
              Motion design for brands, products, and stories that need to be
              understood and remembered. From 3D identity systems to kinetic
              UI animations, every frame is designed with rhythm and focus.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3 pt-2" data-hero-enter>
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

          {/* Right Column: 3D Video Showcase Time-Machine */}
          <div
            className="flex w-full items-center justify-center lg:justify-end"
            data-hero-enter
          >
            <CardTimeMachine />
          </div>
        </div>
      </div>
    </section>
  );
}
