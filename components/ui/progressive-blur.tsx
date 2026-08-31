import React from "react";
import { cn } from "@/lib/utils";

interface ProgressiveBlurProps {
  className?: string;
  position?: "bottom" | "top";
}

export function ProgressiveBlur({
  className,
  position = "bottom",
}: ProgressiveBlurProps) {
  const isBottom = position === "bottom";

  return (
    <div
      aria-hidden="true"
      className={cn(
        "pointer-events-none fixed inset-x-0 z-30 overflow-hidden select-none",
        isBottom ? "bottom-0 h-20 sm:h-32" : "top-0 h-20 sm:h-32",
        className
      )}
    >
      {/* Layer 1 - Light diffuse blur */}
      <div
        className={cn(
          "absolute inset-0 backdrop-blur-[1px]",
          isBottom
            ? "[mask-image:linear-gradient(to_top,black_0%,transparent_100%)] [-webkit-mask-image:linear-gradient(to_top,black_0%,transparent_100%)]"
            : "[mask-image:linear-gradient(to_bottom,black_0%,transparent_100%)] [-webkit-mask-image:linear-gradient(to_bottom,black_0%,transparent_100%)]"
        )}
      />

      {/* Layer 2 - Medium diffuse blur */}
      <div
        className={cn(
          "absolute inset-0 backdrop-blur-[2px]",
          isBottom
            ? "[mask-image:linear-gradient(to_top,black_0%,transparent_75%)] [-webkit-mask-image:linear-gradient(to_top,black_0%,transparent_75%)]"
            : "[mask-image:linear-gradient(to_bottom,black_0%,transparent_75%)] [-webkit-mask-image:linear-gradient(to_bottom,black_0%,transparent_75%)]"
        )}
      />

      {/* Layer 3 - Mid blur */}
      <div
        className={cn(
          "absolute inset-0 backdrop-blur-[4px]",
          isBottom
            ? "[mask-image:linear-gradient(to_top,black_0%,transparent_50%)] [-webkit-mask-image:linear-gradient(to_top,black_0%,transparent_50%)]"
            : "[mask-image:linear-gradient(to_bottom,black_0%,transparent_50%)] [-webkit-mask-image:linear-gradient(to_bottom,black_0%,transparent_50%)]"
        )}
      />

      {/* Layer 4 - Strong blur */}
      <div
        className={cn(
          "absolute inset-0 backdrop-blur-[8px]",
          isBottom
            ? "[mask-image:linear-gradient(to_top,black_0%,transparent_30%)] [-webkit-mask-image:linear-gradient(to_top,black_0%,transparent_30%)]"
            : "[mask-image:linear-gradient(to_bottom,black_0%,transparent_30%)] [-webkit-mask-image:linear-gradient(to_bottom,black_0%,transparent_30%)]"
        )}
      />

      {/* Layer 5 - Deep ground blur */}
      <div
        className={cn(
          "absolute inset-0 backdrop-blur-[16px]",
          isBottom
            ? "[mask-image:linear-gradient(to_top,black_0%,transparent_15%)] [-webkit-mask-image:linear-gradient(to_top,black_0%,transparent_15%)]"
            : "[mask-image:linear-gradient(to_bottom,black_0%,transparent_15%)] [-webkit-mask-image:linear-gradient(to_bottom,black_0%,transparent_15%)]"
        )}
      />

      {/* Ambient gradient fade to blend background tone organically */}
      <div
        className={cn(
          "absolute inset-0 bg-linear-to-t from-background via-background/40 to-transparent",
          isBottom
            ? "[mask-image:linear-gradient(to_top,black_0%,transparent_100%)] [-webkit-mask-image:linear-gradient(to_top,black_0%,transparent_100%)]"
            : "bg-linear-to-b [mask-image:linear-gradient(to_bottom,black_0%,transparent_100%)] [-webkit-mask-image:linear-gradient(to_bottom,black_0%,transparent_100%)]"
        )}
      />
    </div>
  );
}
