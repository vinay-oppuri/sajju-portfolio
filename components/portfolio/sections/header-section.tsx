"use client";

import { Button } from "@/components/ui/button";
import { navItems } from "@/components/portfolio/data/portfolio-data";
import { scrollToSection } from "@/lib/scroll";

export function HeaderSection() {
  return (
    <header className="fixed inset-x-0 top-3 z-40 mx-auto flex items-center justify-between sm:justify-center gap-1.5 sm:gap-2 px-3 sm:top-5 w-full max-w-full">
      {/* Brand Icon */}
      <a
        aria-label="Sajju home"
        className="flex size-8 sm:size-9 shrink-0 items-center justify-center rounded-lg border border-border/70 bg-background/90 text-xs font-semibold tracking-tight text-foreground backdrop-blur-md transition-colors hover:border-foreground/40 shadow-xs"
        href="#top"
      >
        S
      </a>

      {/* Navigation */}
      <nav
        className="
          flex h-8 sm:h-9 items-center justify-center rounded-lg
          border border-border/70 bg-background/90 px-1 sm:px-1.5 backdrop-blur-md shadow-xs
          [&:has(button:hover)_button]:text-muted-foreground/50
          [&:has(button:hover)_button:hover]:text-foreground
        "
      >
        {navItems.map(({ label, id }) => (
          <Button
            key={id}
            className="h-6 sm:h-7 rounded-md px-2 sm:px-3 text-xs font-medium tracking-tight hover:bg-muted/60 transition-colors cursor-pointer"
            onClick={() => scrollToSection(id)}
            size="sm"
            variant="ghost"
          >
            {label}
          </Button>
        ))}
      </nav>
    </header>
  );
}
