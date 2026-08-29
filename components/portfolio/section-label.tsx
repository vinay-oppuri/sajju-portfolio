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
        "grid grid-cols-[2.5rem_1fr] items-center gap-3 text-xs uppercase tracking-[0.12em] text-muted-foreground sm:grid-cols-[3rem_1fr_auto]",
        className
      )}
    >
      <span className="text-primary">{number}</span>
      <div>{children}</div>
      {aside ? (
        <p className="hidden text-right normal-case tracking-normal sm:block">
          {aside}
        </p>
      ) : null}
    </div>
  );
}
