import { ArrowUpRight } from "lucide-react";

export function ContactFooter() {
  return (
    <footer
      className="grid min-h-[42rem] gap-12 bg-primary px-5 py-10 text-primary-foreground sm:px-10 lg:min-h-[80svh] lg:grid-cols-[1fr_23rem] lg:grid-rows-[1fr_auto] lg:px-[5vw] lg:py-14"
      id="contact"
    >
      <div>
        <p className="text-xs uppercase tracking-[0.12em]">Have a project in mind?</p>
        <h2 className="mt-20 text-[clamp(4.5rem,11vw,11rem)] leading-[0.77] tracking-[-0.11em]">
          Let&apos;s make it
          <br />
          <span className="text-primary-foreground/60">move.</span>
        </h2>
      </div>

      <div className="self-end">
        <p className="max-w-sm text-sm leading-relaxed text-primary-foreground/80">
          Share a few details about your idea, your audience, and your
          timeline. I&apos;ll reply with the best next step.
        </p>
        <a
          className="mt-8 flex items-center justify-between border-b border-primary-foreground/30 pb-3 text-2xl tracking-[-0.06em] sm:text-4xl"
          href="mailto:hello@sajju.design"
        >
          hello@sajju.design
          <ArrowUpRight className="size-6" />
        </a>
      </div>

      <div className="flex flex-wrap justify-between gap-4 border-t border-primary-foreground/30 pt-4 text-[10px] uppercase tracking-[0.1em] lg:col-span-2">
        <span>© 2026 Sajju Kumar</span>
        <div className="flex gap-4">
          <a href="#">LinkedIn</a>
          <a href="#">Instagram</a>
          <a href="#">Behance</a>
        </div>
        <span>India / Worldwide</span>
      </div>
    </footer>
  );
}
