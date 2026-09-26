"use client";

import * as React from "react";
import Link from "next/link";
import { motion, type HTMLMotionProps } from "framer-motion";
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
            "linear-gradient(115deg, #d9c6c2 0%, #b7a8c4 22%, #e8d2b8 40%, #c9a8ae 58%, #a99bbd 76%, #dcc4c0 100%)",
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
      <div className="pointer-events-none absolute inset-0 rounded-lg border border-white/60 shadow-[inset_0_1px_1px_rgba(255,255,255,0.8)]" />

      {/* Content Label + Icon */}
      <span className="relative z-10 inline-flex items-center gap-1.5 font-semibold text-[#2a2320] transition-colors">
        {children}
        {icon && <span className="inline-flex items-center">{icon}</span>}
      </span>
    </>
  );

  const sharedClasses = cn(
    "relative inline-flex items-center justify-center select-none overflow-hidden rounded-lg px-5 sm:px-6 h-10 sm:h-11 cursor-pointer",
    "text-[11px] sm:text-xs uppercase tracking-wider font-semibold",
    "shadow-[0_10px_24px_-10px_rgba(0,0,0,0.28),0_2px_6px_rgba(0,0,0,0.08)]",
    "transition-all duration-200 ease-out hover:scale-[1.02] hover:shadow-[0_14px_28px_-10px_rgba(0,0,0,0.35)] active:scale-[0.97]",
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
