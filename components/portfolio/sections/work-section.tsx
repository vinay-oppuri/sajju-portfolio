import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { projects } from "@/components/portfolio/data/portfolio-data";
import { SectionLabel } from "@/components/portfolio/section-label";
import { cn } from "@/lib/utils";

export function WorkSection() {
  return (
    <section className="px-5 py-24 sm:px-10 lg:px-[5vw] lg:py-32" id="work">
      <SectionLabel
        aside="Examples of visual direction and motion exploration."
        number="01"
      >
        Selected work
      </SectionLabel>

      <div className="mt-12 lg:mt-16">
        {projects.map((project) => (
          <Link
            className="group grid gap-4 border-t py-5 transition-colors last:border-b sm:grid-cols-[3rem_1.15fr_.8fr_.55fr_1.5rem] sm:items-center sm:gap-5 hover:bg-muted/40"
            data-reveal
            href={`/work/${project.slug}`}
            key={project.slug}
          >
            <span className="text-xs text-muted-foreground">{project.number}</span>
            <div
              className={cn(
                "relative h-36 overflow-hidden sm:h-44",
                project.accent
              )}
            >
              <span className="absolute inset-[18%] rounded-full border border-current/50" />
              <span className="absolute bottom-[10%] right-[10%] text-4xl tracking-[-0.1em] sm:text-6xl">
                {project.title.split(" ")[0]}
              </span>
            </div>
            <h3 className="text-3xl tracking-[-0.07em] sm:text-4xl">
              {project.title}
            </h3>
            <p className="text-sm text-muted-foreground">{project.category}</p>
            <ArrowUpRight className="size-5 justify-self-end transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
          </Link>
        ))}
      </div>
    </section>
  );
}
