"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export function IntroSection() {
  return (
    <section className="grid gap-12 border-t px-5 py-24 sm:px-10 lg:grid-cols-[1fr_2fr] lg:gap-24 lg:px-[12vw] lg:py-40">
      <p className="text-xs uppercase tracking-[0.12em]" data-reveal>
        Independent motion designer
      </p>
      <div>
        <h2
          className="max-w-4xl text-5xl leading-[0.88] tracking-[-0.09em] sm:text-7xl lg:text-8xl"
          data-reveal
        >
          I turn ideas into <span className="text-primary">clear, crafted</span>{" "}
          motion.
        </h2>
        <div className="mt-12 grid gap-6 sm:ml-auto sm:max-w-xl sm:grid-cols-[1fr_auto] sm:items-end">
          <p className="text-sm leading-relaxed text-muted-foreground" data-reveal>
            From a brand launch to a product reveal, I help teams give their
            message focus, rhythm, and a reason to be watched.
          </p>
          <Link
            href="#contact"
            className="w-fit inline-flex items-center gap-1.5 text-sm font-medium text-foreground underline-offset-4 hover:underline transition-colors"
            data-reveal
          >
            Let&apos;s work together
            <ArrowUpRight className="size-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
