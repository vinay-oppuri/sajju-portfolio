"use client";

import * as React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export interface ChromeBorderButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  href?: string;
  external?: boolean;
  children?: React.ReactNode;
  icon?: React.ReactNode;
  className?: string;
}

export const ChromeBorderButton = React.forwardRef<
  HTMLButtonElement | HTMLAnchorElement,
  ChromeBorderButtonProps
>(
  (
    {
      href,
      external = false,
      children = "View selected work",
      icon,
      className,
      onClick,
      ...props
    },
    ref
  ) => {
    const buttonContent = (
      <>
        {/* traveling chrome metallic ring - rotating conic-gradient */}
        <motion.span
          className="absolute -inset-[140%] blur-[1.5px] pointer-events-none"
          style={{
            background:
              "conic-gradient(from 0deg, #0a0a0a, #ffffff, #8a8a8a, #ffffff, #1c1c1c, #dcdcdc, #ffffff, #dcdcdc, #1c1c1c, #ffffff, #8a8a8a, #ffffff, #0a0a0a)",
          }}
          animate={{ rotate: 360 }}
          transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
        />

        {/* Inner Face - Sleek Luxury Black */}
        <div className="relative z-10 w-full h-full px-5 sm:px-6 flex items-center justify-center rounded-[6.5px] bg-[#09090b] hover:bg-[#111114] select-none border border-white/8 shadow-[inset_0_1px_1px_rgba(255,255,255,0.18),inset_0_0_12px_rgba(0,0,0,0.8)] transition-colors duration-200">
          <motion.span
            className="relative z-10 text-[11px] sm:text-xs font-semibold uppercase tracking-wider leading-none bg-clip-text text-transparent select-none flex items-center justify-center"
            style={{
              backgroundImage:
                "linear-gradient(110deg, #a1a1aa 0%, #e4e4e7 25%, #ffffff 50%, #e4e4e7 75%, #a1a1aa 100%)",
              backgroundSize: "200% 100%",
            }}
            animate={{ backgroundPosition: ["200% 50%", "0% 50%"] }}
            transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
          >
            {children}
          </motion.span>

          {icon && (
            <span className="absolute right-3.5 sm:right-4 top-1/2 -translate-y-1/2 flex items-center justify-center pointer-events-none">
              {icon}
            </span>
          )}
        </div>
      </>
    );

    const sharedClasses = cn(
      "group relative rounded-lg p-[1.5px] overflow-hidden select-none inline-flex items-center justify-center h-10 sm:h-11 md:h-11 lg:h-11 shrink-0 cursor-pointer",
      "shadow-[0_10px_28px_-8px_rgba(0,0,0,0.6),0_2px_8px_rgba(0,0,0,0.4)] hover:shadow-[0_14px_32px_-8px_rgba(0,0,0,0.8)]",
      "transition-shadow duration-200",
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
            onClick={onClick as unknown as React.MouseEventHandler<HTMLAnchorElement>}
            className={sharedClasses}
          >
            {buttonContent}
          </a>
        );
      }

      return (
        <Link
          ref={ref as React.Ref<HTMLAnchorElement>}
          href={href}
          onClick={onClick as unknown as React.MouseEventHandler<HTMLAnchorElement>}
          className={sharedClasses}
        >
          {buttonContent}
        </Link>
      );
    }

    return (
      <button
        ref={ref as React.Ref<HTMLButtonElement>}
        type="button"
        onClick={onClick}
        className={sharedClasses}
        {...props}
      >
        {buttonContent}
      </button>
    );
  }
);

ChromeBorderButton.displayName = "ChromeBorderButton";

export default ChromeBorderButton;
