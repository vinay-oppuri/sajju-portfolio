"use client";

import * as React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export interface GlossButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  href?: string;
  external?: boolean;
  children: React.ReactNode;
  icon?: React.ReactNode;
  className?: string;
}

export const GlossButton = React.forwardRef<
  HTMLButtonElement | HTMLAnchorElement,
  GlossButtonProps
>(({ href, external, children, icon, className, onClick, ...props }, ref) => {
  const content = (
    <>
      {/* Animated Iridescent Gradient Background */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(115deg, #e2e8f0 0%, #c5d0e6 22%, #f1f5f9 40%, #cbd5e1 58%, #b8c4db 76%, #eef2f6 100%)",
          backgroundSize: "220% 220%",
        }}
        animate={{
          backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Glossy Curved Highlight Arc */}
      <div className="pointer-events-none absolute inset-x-2.5 top-0.5 h-[45%] rounded-lg bg-white/40 blur-[2px]" />

      {/* Subtle Inner Glass Sheen Border */}
      <div className="pointer-events-none absolute inset-0 rounded-lg border border-white/70 shadow-[inset_0_1px_1px_rgba(255,255,255,0.85)]" />

      {/* Content Label + Icon */}
      <span className="relative z-10 inline-flex items-center justify-center gap-1.5 font-semibold text-[#18181b] leading-none transition-colors">
        {children}
        {icon && <span className="inline-flex items-center">{icon}</span>}
      </span>
    </>
  );

  const sharedClasses = cn(
    "relative inline-flex items-center justify-center select-none overflow-hidden rounded-lg px-5 sm:px-6 h-10 sm:h-11 md:h-11 lg:h-11 shrink-0 cursor-pointer",
    "text-[11px] sm:text-xs uppercase tracking-wider font-semibold leading-none",
    "shadow-[0_10px_24px_-10px_rgba(0,0,0,0.28),0_2px_8px_rgba(0,0,0,0.08)]",
    "transition-shadow duration-200 hover:shadow-[0_14px_28px_-10px_rgba(0,0,0,0.45)]",
    className
  );

  if (href) {
    if (external) {
      return (
        <a
          ref={ref as React.Ref<HTMLAnchorElement>}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={sharedClasses}
          onClick={onClick as unknown as React.MouseEventHandler<HTMLAnchorElement>}
        >
          {content}
        </a>
      );
    }

    return (
      <Link
        ref={ref as React.Ref<HTMLAnchorElement>}
        href={href}
        className={sharedClasses}
        onClick={onClick as unknown as React.MouseEventHandler<HTMLAnchorElement>}
      >
        {content}
      </Link>
    );
  }

  return (
    <button
      ref={ref as React.Ref<HTMLButtonElement>}
      type="button"
      className={sharedClasses}
      onClick={onClick}
      {...props}
    >
      {content}
    </button>
  );
});

GlossButton.displayName = "GlossButton";

export default GlossButton;
