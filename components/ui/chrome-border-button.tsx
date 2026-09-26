"use client";

import * as React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
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
    const buttonBody = (
      <div
        className={cn(
          "group relative rounded-lg p-[1.5px] overflow-hidden select-none inline-flex items-center justify-center",
          "shadow-[0_10px_28px_-8px_rgba(0,0,0,0.6),0_2px_8px_rgba(0,0,0,0.4)]",
          "transition-all duration-200 hover:scale-[1.02] active:scale-[0.97] cursor-pointer",
          className
        )}
        style={{
          background:
            "linear-gradient(135deg, #2a2a2e 0%, #151518 35%, #3a3a40 55%, #151518 80%, #2a2a2e 100%)",
        }}
      >
        {/* traveling chrome metallic ring - rotating conic-gradient */}
        <motion.span
          className="absolute -inset-[140%] blur-[1.5px] pointer-events-none"
          style={{
            background:
              "conic-gradient(from 0deg, #0a0a0a, #ffffff, #8a8a8a, #ffffff, #1c1c1c, #dcdcdc, #ff2d3b, #dcdcdc, #1c1c1c, #ffffff, #8a8a8a, #ffffff, #0a0a0a)",
          }}
          animate={{ rotate: 360 }}
          transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
        />

        {/* Inner Face - Sleek Luxury Black */}
        <div className="relative z-10 h-10 sm:h-11 px-5 sm:px-6 flex items-center justify-center rounded-[6.5px] bg-[#09090b] hover:bg-[#111114] select-none gap-2 border border-white/[0.08] shadow-[inset_0_1px_1px_rgba(255,255,255,0.18),inset_0_0_12px_rgba(0,0,0,0.8)] transition-colors duration-200">
          <motion.span
            className="relative z-10 text-[11px] sm:text-xs font-semibold uppercase tracking-wider bg-clip-text text-transparent inline-flex items-center gap-1.5"
            style={{
              backgroundImage:
                "linear-gradient(100deg, #ffffff 0%, #a1a1aa 22%, #f4f4f5 42%, #71717a 58%, #ffffff 76%, #d4d4d8 88%, #ffffff 100%)",
              backgroundSize: "250% 100%",
            }}
            animate={{ backgroundPosition: ["0% 50%", "250% 50%"] }}
            transition={{ duration: 7, repeat: Infinity, ease: "linear" }}
          >
            <span>{children}</span>
            {icon !== undefined ? (
              icon
            ) : (
              <ArrowDown className="size-3.5 text-zinc-300 group-hover:text-white transition-colors shrink-0" />
            )}
          </motion.span>
        </div>
      </div>
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
            className="inline-block"
          >
            {buttonBody}
          </a>
        );
      }

      return (
        <Link
          ref={ref as React.Ref<HTMLAnchorElement>}
          href={href}
          onClick={onClick as unknown as React.MouseEventHandler<HTMLAnchorElement>}
          className="inline-block"
        >
          {buttonBody}
        </Link>
      );
    }

    return (
      <button
        ref={ref as React.Ref<HTMLButtonElement>}
        type="button"
        onClick={onClick}
        className="inline-block border-none bg-transparent p-0"
        {...props}
      >
        {buttonBody}
      </button>
    );
  }
);

ChromeBorderButton.displayName = "ChromeBorderButton";

export default ChromeBorderButton;
