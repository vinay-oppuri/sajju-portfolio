"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { navItems } from "@/data/portfolio-data";

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

  return (
    <header className="fixed inset-x-0 top-4 sm:top-6 z-50 px-4 sm:px-6 md:px-8 w-full max-w-6xl mx-auto pointer-events-none">
      {/* Mobile Bar (< md): Left = Logo, Right = Menu Button */}
      <div className="relative z-50 flex md:hidden items-center justify-center gap-2 w-full pointer-events-auto">
        {/* Left: Brand Logo */}
        <Link
          aria-label="Sajju home"
          className="flex size-10 items-center justify-center rounded-xl bg-muted/90 text-base font-medium text-foreground/80 backdrop-blur-md shadow-xs border border-border/40 hover:text-foreground active:scale-95 transition-all cursor-pointer"
          href="/#top"
          onClick={() => {
            if (isOpen) setIsOpen(false);
          }}
        >
          S
        </Link>

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
        <Link
          aria-label="Sajju home"
          className="flex size-9 sm:size-11 shrink-0 items-center justify-center rounded-lg bg-muted/90 text-md text-foreground/80 backdrop-blur-md shadow-xs transition-colors duration-200 hover:text-foreground cursor-pointer"
          href="/#top"
        >
          S
        </Link>

        {/* Desktop Navigation */}
        <nav
          className="
          flex h-9 sm:h-11 items-center justify-center rounded-lg
          bg-muted/90 px-2 backdrop-blur-xs shadow-xs
            [&:has(a:hover)_a]:text-muted-foreground/50
            [&:has(a:hover)_a:hover]:text-foreground
          "
        >
          {navItems.map(({ label, id }) => (
            <Link
              key={id}
              href={`/#${id}`}
              className="h-6 sm:h-7 px-8 sm:px-6 text-foreground/80 rounded-md text-md font-extralight tracking-tighter inline-flex items-center justify-center transition-colors duration-200"
            >
              {label}
            </Link>
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
              className="relative z-50 mt-4 w-full rounded-2xl bg-card/95 backdrop-blur-xl border border-border/80 p-5 shadow-2xl pointer-events-auto md:hidden"
            >
              <div className="flex flex-col gap-1">

                <div className="flex flex-col gap-1 mt-1">
                  {navItems.map(({ label, id }, index) => (
                    <Link
                      key={id}
                      href={`/#${id}`}
                      onClick={() => setIsOpen(false)}
                      className="group flex items-center justify-between w-full px-3 py-3 rounded-xl text-left text-base font-extralight tracking-tighter text-foreground/70 cursor-pointer"
                    >
                      {label}
                      <ArrowUpRight className="size-4 text-muted-foreground/40 group-hover:text-foreground transition-colors" />
                    </Link>
                  ))}
                </div>

                {/* Bottom CTA & Info in Mobile Menu */}
                <div className="mt-2 flex flex-col gap-2.5">
                  <Link
                    href="/#contact"
                    onClick={() => setIsOpen(false)}
                    className="w-full h-11 rounded-2xl bg-foreground text-background text-xs uppercase tracking-wider font-medium inline-flex items-center justify-center gap-1.5 cursor-pointer shadow-xs"
                  >
                    <span>Start a project</span>
                    <ArrowUpRight className="size-4" />
                  </Link>
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
