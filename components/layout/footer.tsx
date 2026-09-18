"use client";

import Link from "next/link";
import { ArrowUpRight, ArrowUp } from "lucide-react";

const socialLinks = [
  { label: "LinkedIn", href: "https://linkedin.com" },
  { label: "Instagram", href: "https://instagram.com" },
  { label: "Behance", href: "https://behance.net" },
  { label: "X / Twitter", href: "https://x.com" },
];

export function Footer() {
  const email = "hello@sajju.design";

  return (
    <footer
      className="bg-primary text-primary-foreground m-4 md:m-16 pt-12 sm:pt-16 pb-8 sm:pb-10 rounded-xl"
      id="contact"
    >
      <div className="max-w-6xl mx-auto px-5 sm:px-10 lg:px-8 space-y-10 sm:space-y-12">
        {/* Top Header */}
        <div className="flex items-center justify-between border-b border-primary-foreground/20 pb-3 sm:pb-4 text-xs font-mono uppercase tracking-[0.14em]" data-reveal>
          <div className="flex items-center gap-2 sm:gap-3">
            <span>05</span>
            <span>Contact</span>
          </div>
          <span className="text-primary-foreground/70 text-[11px] sm:text-xs">Open for projects</span>
        </div>

        {/* Hero Contact Prompt & Email */}
        <div className="grid gap-6 sm:gap-8 lg:grid-cols-[1.3fr_1fr] items-end" data-reveal>
          <div>
            <h2 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-normal leading-[0.88] tracking-[-0.07em] text-primary-foreground">
              Let&apos;s make it
              <br />
              <span className="text-primary-foreground/60">move.</span>
            </h2>
          </div>

          <div className="space-y-3 sm:space-y-4">
            <p className="text-xs sm:text-sm leading-relaxed text-primary-foreground/80 max-w-sm">
              Have an upcoming launch, brand system, or 3D project? Reach out directly.
            </p>

            <div>
              <a
                href={`mailto:${email}`}
                className="inline-flex items-center gap-2 border-b border-primary-foreground/40 pb-1 text-lg sm:text-2xl font-normal tracking-tight transition-colors hover:border-primary-foreground break-all"
              >
                <span>{email}</span>
                <ArrowUpRight className="size-4 sm:size-5 shrink-0" />
              </a>
            </div>
          </div>
        </div>

        {/* Social Links & Back to top */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-t border-primary-foreground/20 pt-5 sm:pt-6 text-xs" data-reveal>
          <div className="flex flex-wrap items-center gap-3 sm:gap-5">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-primary-foreground/80 hover:text-primary-foreground transition-colors"
              >
                <span>{social.label}</span>
                <ArrowUpRight className="size-3 opacity-60" />
              </a>
            ))}
          </div>

          <Link
            href="#top"
            className="inline-flex items-center gap-1.5 font-mono text-[11px] text-primary-foreground/70 hover:text-primary-foreground transition-colors cursor-pointer self-start sm:self-auto"
          >
            <span>Back to top</span>
            <ArrowUp className="size-3" />
          </Link>
        </div>

        {/* Colophon */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 border-t border-primary-foreground/15 pt-4 text-[10px] sm:text-[11px] font-mono text-primary-foreground/60">
          <span>© 2026 Sajju Kumar</span>
          <span>India / Worldwide</span>
        </div>
      </div>
    </footer>
  );
}

export const ContactFooter = Footer;
export default Footer;
