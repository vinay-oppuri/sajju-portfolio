"use client";

import React from "react";
import { clientsData, ClientItem } from "@/components/portfolio/data/clients-data";

function ClientLogoCard({ client }: { client: ClientItem }) {
  const Logo = client.svg;

  return (
    <div className="group/item flex shrink-0 items-center gap-3.5 rounded-xl border border-border/20 bg-card/40 px-4.5 py-2.5 backdrop-blur-xs transition-all duration-300 hover:-translate-y-0.5 hover:border-foreground/35 hover:bg-card hover:shadow-xs sm:px-5 sm:py-3">
      <div className="flex size-7.5 shrink-0 items-center justify-center rounded-lg border border-border/20 bg-background text-foreground/80 transition-colors duration-300 group-hover/item:text-foreground">
        <Logo className="size-4.5 shrink-0" />
      </div>

      <div className="flex flex-col pr-1">
        <div className="flex items-center gap-2">
          <span className="text-xs sm:text-sm font-medium tracking-tight text-foreground">
            {client.name}
          </span>
          <span className="inline-block size-1 rounded-full bg-border" />
          <span className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground/80">
            {client.category}
          </span>
        </div>
      </div>
    </div>
  );
}

export function ClientsMarquee() {
  // Double-buffer array for exact 50% loop cycle
  const marqueeItems = [...clientsData, ...clientsData];

  return (
    <section
      aria-label="Collaborations and clients"
      className="relative w-full bg-background py-8 sm:py-12"
      data-reveal
    >
      {/* Top Header / Context Label */}
      <div className="mb-5 flex flex-wrap items-center justify-between gap-3 px-5 sm:px-10 lg:px-[5vw]">
        <div className="flex items-center gap-2.5">
          <span className="size-1.5 rounded-full bg-primary animate-pulse" />
          <p className="text-[11px] font-medium uppercase tracking-[0.14em] text-muted-foreground sm:text-xs">
            Collaborations &amp; Selected Clients
          </p>
        </div>
        <p className="hidden text-[11px] uppercase tracking-[0.12em] text-muted-foreground/70 sm:inline-block">
          Motion Systems · Brand Reveals · Product 3D
        </p>
      </div>

      {/* Infinite Scrolling Ticker Area */}
      <div className="group relative flex w-full overflow-hidden">
        {/* Left & Right Gradient Fade Masks for smooth blending */}
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 bg-linear-to-r from-background via-background/80 to-transparent sm:w-28" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 bg-linear-to-l from-background via-background/80 to-transparent sm:w-28" />

        {/* Marquee Animation Track */}
        <div className="animate-marquee py-2 flex items-center gap-3.5 sm:gap-5">
          {marqueeItems.map((client, index) => (
            <ClientLogoCard
              key={`${client.name}-${index}`}
              client={client}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
