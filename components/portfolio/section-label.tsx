import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface SectionLabelProps {
  number: string;
  children: ReactNode;
  aside?: string;
  className?: string;
}

export function SectionLabel({
  number,
  children,
  aside,
  className,
}: SectionLabelProps) {
  return (
    <div
      className={cn(
        "flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-border/80 pb-4 text-xs uppercase tracking-[0.14em] text-muted-foreground",
        className
      )}
      data-reveal
    >
      <div className="flex items-center gap-3">
        <span className="font-mono font-semibold text-primary">{number}</span>
        <h2 className="text-foreground font-medium tracking-[0.12em]">{children}</h2>
      </div>

      {aside && (
        <span className="font-mono text-[11px] tracking-normal text-muted-foreground sm:text-right">
          {aside}
        </span>
      )}
    </div>
  );
}
