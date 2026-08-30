"use client";

import React from "react";
import { clientsData, ClientItem } from "@/components/portfolio/data/clients-data";

function ClientLogoCard({ client }: { client: ClientItem }) {
  const Logo = client.svg;

  return (
    <div className="group/item flex shrink-0 items-center gap-3 rounded-lg border border-border/50 bg-card/40 px-4 py-2 backdrop-blur-xs transition-colors hover:border-foreground/30 hover:bg-card">
      <div className="flex size-6 shrink-0 items-center justify-center rounded-md bg-background text-foreground/80 transition-colors group-hover/item:text-foreground">
        <Logo className="size-3.5 shrink-0" />
      </div>

      <div className="flex items-center gap-2 pr-1">
        <span className="text-xs font-medium text-foreground">
          {client.name}
        </span>
        <span className="font-mono text-[10px] text-muted-foreground">
          / {client.category}
        </span>
      </div>
    </div>
  );
}

export function ClientsMarquee() {
  const marqueeItems = [...clientsData, ...clientsData];

  return (
    <section
      aria-label="Collaborations and clients"
      className="relative w-full bg-background py-8 sm:py-10"
      data-reveal
    >
      {/* Top Header */}
      <div className="max-w-6xl mx-auto mb-4 flex items-center justify-between px-5 sm:px-10 lg:px-8">
        <p className="text-[11px] font-mono uppercase tracking-[0.14em] text-muted-foreground">
          Collaborations
        </p>
        <p className="hidden text-[11px] font-mono uppercase tracking-[0.12em] text-muted-foreground/60 sm:inline-block">
          Brand · Product · 3D
        </p>
      </div>

      {/* Infinite Scrolling Track */}
      <div className="group relative flex w-full overflow-hidden">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-linear-to-r from-background to-transparent sm:w-28" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-linear-to-l from-background to-transparent sm:w-28" />

        <div className="animate-marquee py-1 flex items-center gap-3 sm:gap-4">
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
