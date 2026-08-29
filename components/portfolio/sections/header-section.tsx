"use client";

import { Button } from "@/components/ui/button";
import { navItems } from "@/components/portfolio/data/portfolio-data";
import { scrollToSection } from "@/lib/scroll";

export function HeaderSection() {
  return (
    <header className="fixed inset-x-0 top-4 z-20 mx-auto flex justify-center items-center gap-2 sm:top-6">
      <a
        aria-label="Sajju home"
        className="grid size-10 place-items-center rounded-xl bg-muted/80 text-xl backdrop-blur"
        href="#top"
      >
        S
      </a>

      <nav
        className="
          flex h-10 items-center justify-center rounded-xl
          bg-muted/80 px-4 text-xs backdrop-blur-xs
          [&:has(button:hover)_button]:text-muted-foreground/60
          [&:has(button:hover)_button:hover]:text-foreground
        "
      >
        {navItems.map(({ label, id }) => (
          <Button
            key={id}
            className="h-8 px-5! text-sm tracking-tight hover:bg-transparent!"
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
