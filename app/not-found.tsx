import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "404 — Page Not Found | Sozzoo",
  description: "The page you are looking for doesn't exist or has been moved.",
};

export default function NotFound() {
  return (
    <main className="min-h-screen w-full flex flex-col items-center justify-center px-5 py-12 text-center bg-background text-foreground selection:bg-primary/20">
      {/* Brand Logo & Name - Unified, accessible, perfectly aligned touch target */}
      <Link
        href="/"
        aria-label="Sozzoo home"
        className="group inline-flex items-center gap-2.5 mb-6 transition-transform active:scale-95 cursor-pointer select-none"
      >
        <span className="flex size-10 items-center justify-center rounded-xl bg-muted/90 text-base font-medium text-foreground/80 backdrop-blur-md shadow-xs border border-border/40 group-hover:text-foreground group-hover:border-border transition-colors">
          S
        </span>
        <span className="font-medium text-xl sm:text-2xl tracking-tight text-foreground/80 group-hover:text-foreground transition-colors">
          Sozzoo
        </span>
      </Link>

      {/* Main Content Area */}
      <div className="flex flex-col items-center text-center space-y-4 max-w-md w-full">
        {/* Large, responsive status code with fluid typography and tight tracking */}
        <p className="text-8xl sm:text-9xl font-semibold leading-none text-primary select-none">
          404
        </p>

        <div className="space-y-2">
          <h1 className="text-2xl sm:text-3xl font-normal tracking-tight text-foreground">
            Page not found
          </h1>

          <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed max-w-xs sm:max-w-md mx-auto">
            The page you are looking for doesn&apos;t exist or has been moved.
          </p>
        </div>

        {/* Primary Recovery Action */}
        <div className="pt-2">
          <Link
            href="/"
            className="h-10 rounded-xl bg-foreground px-5 text-xs font-medium uppercase tracking-wider text-background transition-all hover:bg-foreground/85 active:scale-95 inline-flex items-center gap-2 shadow-xs cursor-pointer"
          >
            <ArrowLeft className="size-3.5" />
            <span>Back to home</span>
          </Link>
        </div>
      </div>
    </main>
  );
}
