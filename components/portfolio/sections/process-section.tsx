import { processSteps } from "@/components/portfolio/data/portfolio-data";

export function ProcessSection() {
  return (
    <section className="bg-foreground px-5 py-24 text-background sm:px-10 lg:px-[5vw] lg:py-32" id="process">
      <p className="text-xs uppercase tracking-[0.12em] text-background/65" data-reveal>
        A simple way of working
      </p>

      <div className="mx-auto mt-12 grid max-w-5xl border-t border-background/20 sm:grid-cols-3">
        {processSteps.map(({ number, title, description }) => (
          <article
            className="min-h-52 border-b border-background/20 py-5 sm:min-h-72 sm:border-b-0 sm:border-r sm:px-6 sm:last:border-r-0"
            data-reveal
            key={number}
          >
            <span className="text-xs text-background/65">{number}</span>
            <h3 className="mt-12 text-4xl tracking-[-0.07em]">{title}</h3>
            <p className="mt-3 max-w-44 text-sm leading-relaxed text-background/65">
              {description}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
