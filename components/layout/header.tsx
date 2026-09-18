"use client";

import { useState, useEffect } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { Button } from "@/components/ui/button";
import { navItems } from "@/data/portfolio-data";
import { scrollToSection } from "@/lib/scroll";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  // Close mobile menu on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const handleNavClick = (id: string) => {
    setIsOpen(false);
    scrollToSection(id);
  };

  return (
    <header className="fixed inset-x-0 top-4 sm:top-6 z-50 px-4 sm:px-6 md:px-8 w-full max-w-6xl mx-auto pointer-events-none">
      {/* Mobile Bar (< md): Left = Logo, Right = Menu Button */}
      <div className="relative z-50 flex md:hidden items-center justify-center gap-2 w-full pointer-events-auto">
        {/* Left: Brand Logo */}
        <a
          aria-label="Sajju home"
          className="flex size-10 items-center justify-center rounded-xl bg-muted/90 text-base font-medium text-foreground/80 backdrop-blur-md shadow-xs border border-border/40 hover:text-foreground active:scale-95 transition-all cursor-pointer"
          href="#top"
          onClick={(e) => {
            e.preventDefault();
            if (isOpen) setIsOpen(false);
            scrollToSection("top");
          }}
        >
          S
        </a>

        {/* Right: Mobile Menu Toggle Button */}
        <button
          type="button"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
          onClick={() => setIsOpen((prev) => !prev)}
          className="flex items-center h-10 uppercase tracking-widest text-sm text-foreground/80 backdrop-blur-md bg-muted/90 p-4 rounded-xl gap-1.5 cursor-pointer border border-border/40 select-none"
        >
          {isOpen ? <X className="size-4.5 shrink-0" /> : <Menu className="size-4.5 shrink-0" />}
          <span>Menu</span>
        </button>
      </div>

      {/* Desktop Bar (md+): Centered floating pill */}
      <div className="hidden md:flex items-center justify-center gap-2 w-full pointer-events-auto">
        {/* Brand Icon */}
        <a
          aria-label="Sajju home"
          className="flex size-9 sm:size-11 shrink-0 items-center justify-center rounded-lg bg-muted/90 text-md text-foreground/80 backdrop-blur-md shadow-xs transition-colors duration-200 hover:text-foreground cursor-pointer"
          href="#top"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection("top");
          }}
        >
          S
        </a>

        {/* Desktop Navigation */}
        <nav
          className="
          flex h-9 sm:h-11 items-center justify-center rounded-lg
          bg-muted/90 px-2 backdrop-blur-xs shadow-xs
            [&:has(button:hover)_button]:text-muted-foreground/50
            [&:has(button:hover)_button:hover]:text-foreground
          "
        >
          {navItems.map(({ label, id }) => (
            <Button
              key={id}
              className="bg-transparent hover:bg-transparent! h-6! sm:h-7! px-8! text-foreground/80 rounded-md sm:px-3 text-md font-extralight tracking-tight cursor-pointer transition-colors duration-200"
              onClick={() => scrollToSection(id)}
              size="sm"
            >
              {label}
            </Button>
          ))}
        </nav>
      </div>

      {/* Mobile Menu Overlay & Dropdown Card */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop overlay for dimming & tap-to-close */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.15, ease: "easeOut" }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-background/60 backdrop-blur-xs z-40 pointer-events-auto md:hidden touch-none"
            />

            {/* Floating Mobile Menu Card */}
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="relative z-50 mt-2 w-full rounded-2xl bg-card/95 backdrop-blur-xl border border-border/80 p-5 shadow-2xl pointer-events-auto md:hidden"
            >
              <div className="flex flex-col gap-1">
                <span className="text-[11px] font-mono uppercase tracking-[0.16em] text-muted-foreground px-3 py-1">
                  Navigation
                </span>

                <div className="flex flex-col gap-1 mt-1">
                  {navItems.map(({ label, id }, index) => (
                    <button
                      key={id}
                      onClick={() => handleNavClick(id)}
                      className="group flex items-center justify-between w-full px-3 py-3 rounded-xl text-left text-base font-normal text-foreground/90 hover:bg-muted/80 active:bg-muted transition-colors duration-150 cursor-pointer"
                    >
                      <div className="flex items-center gap-3">
                        <span className="text-xs font-mono text-muted-foreground/60 group-hover:text-primary transition-colors">
                          0{index + 1}
                        </span>
                        <span>
                          {label}
                        </span>
                      </div>
                      <ArrowUpRight className="size-4 text-muted-foreground/40 group-hover:text-foreground transition-colors" />
                    </button>
                  ))}
                </div>

                {/* Bottom CTA & Info in Mobile Menu */}
                <div className="mt-4 pt-4 border-t border-border/60 flex flex-col gap-2.5">
                  <Button
                    onClick={() => handleNavClick("contact")}
                    className="w-full h-11 rounded-xl bg-foreground text-background text-xs uppercase tracking-wider font-medium hover:bg-foreground/90 active:scale-[0.98] transition-colors duration-150 cursor-pointer shadow-xs"
                  >
                    Start a project
                    <ArrowUpRight className="size-4 ml-1.5" />
                  </Button>

                  <div className="flex items-center justify-between px-2 pt-1 text-[11px] text-muted-foreground">
                    <span className="flex items-center gap-1.5">
                      <span className="size-1.5 rounded-full bg-emerald-500 animate-pulse" />
                      Available for work
                    </span>
                    <span>hello@sajju.design</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}

export const HeaderSection = Header;
export default Header;
