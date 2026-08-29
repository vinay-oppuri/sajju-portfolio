import { Card, CardContent } from "@/components/ui/card";
import { services } from "@/components/portfolio/data/portfolio-data";
import { SectionLabel } from "@/components/portfolio/section-label";

export function ServicesSection() {
  return (
    <section className="border-t bg-card px-5 py-24 sm:px-10 lg:px-[5vw] lg:py-32" id="services">
      <SectionLabel number="02">What I can help with</SectionLabel>

      <div className="mx-auto mt-12 max-w-5xl">
        {services.map((service, index) => (
          <Card
            className="grid gap-4 rounded-none border-x-0 border-t-0 bg-transparent p-0 shadow-none sm:grid-cols-[4rem_1fr_1fr]"
            data-reveal
            key={service.title}
          >
            <CardContent className="contents">
              <span className="pt-7 text-xs text-primary">0{index + 1}</span>
              <h3 className="py-7 text-3xl tracking-[-0.07em] sm:text-5xl">
                {service.title}
              </h3>
              <p className="pb-7 text-sm leading-relaxed text-muted-foreground sm:pt-8">
                {service.description}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
