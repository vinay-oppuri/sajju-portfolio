import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { notFound } from "next/navigation";

import { cn } from "@/lib/utils";

const projects: Record<string, { number: string; title: string; category: string; year: string; tools: string; description: string; accent: string }> = {
  "pulse-one": { number: "01", title: "Pulse / One", category: "Brand / Promotional Motion", year: "2025", tools: "After Effects · Blender", description: "A study in rhythm, energy, and brand presence — designed as a short promotional motion system.", accent: "bg-[#df8c74]" },
  "flow-state": { number: "02", title: "Flow State", category: "UI / Product Animation", year: "2025", tools: "Figma · After Effects", description: "A fluid interaction language for a product experience that makes the invisible feel intuitive.", accent: "bg-[#4d6acf] text-white" },
  "words-in-motion": { number: "03", title: "Words in Motion", category: "Kinetic Typography", year: "2024", tools: "After Effects · Premiere Pro", description: "Typography with a pulse: an experimental exploration of pace, contrast, and visual voice.", accent: "bg-[#d9d4ca]" },
  "frame-by-frame": { number: "04", title: "Frame by Frame", category: "Social Media Motion", year: "2024", tools: "Premiere Pro · CapCut", description: "A punchy, vertical-first social system built to hold attention and leave a clear impression.", accent: "bg-[#d6e66d]" },
};

export function generateStaticParams() {
  return Object.keys(projects).map((slug) => ({ slug }));
}

export default async function ProjectPage({ params }: PageProps<"/work/[slug]">) {
  const { slug } = await params;
  const project = projects[slug];

  if (!project) {
    notFound();
  }

  const nextProject = slug === "frame-by-frame" ? "pulse-one" : "frame-by-frame";

  return (
    <main>
      <nav className="flex h-20 items-center justify-between px-5 text-xs uppercase tracking-[0.1em] sm:px-10 lg:px-[5vw]">
        <Link className="flex items-center gap-2 text-muted-foreground hover:text-foreground" href="/">
          <ArrowLeft className="size-4" />
          Back to index
        </Link>
        <span>SAJJU</span>
      </nav>

      <section className="px-5 pt-16 sm:px-10 lg:px-[5vw] lg:pt-24">
        <p className="text-xs uppercase tracking-[0.12em] text-muted-foreground">
          {project.category}
        </p>
        <span className="mt-20 block text-xs text-primary">{project.number}</span>
        <h1 className="mt-3 text-[clamp(4.4rem,13vw,12rem)] leading-[0.75] tracking-[-0.11em]">
          {project.title}
        </h1>
        <div className={cn("relative mt-16 grid h-[min(58vw,40rem)] min-h-72 place-items-center overflow-hidden", project.accent)}>
          <span className="absolute left-5 top-5 text-xs uppercase tracking-[0.1em]">
            Motion study
          </span>
          <span className="text-[clamp(5rem,19vw,17rem)] tracking-[-0.13em]">
            {project.title.split(" ")[0]}
          </span>
        </div>
      </section>

      <section className="grid gap-16 px-5 py-24 sm:px-10 lg:grid-cols-[1.3fr_.7fr] lg:gap-20 lg:px-[14vw] lg:py-36">
        <div>
          <p className="text-xs uppercase tracking-[0.12em]">Overview</p>
          <p className="mt-12 max-w-3xl text-4xl leading-[0.95] tracking-[-0.07em] sm:text-6xl">
            {project.description}
          </p>
        </div>
        <dl className="border-t text-sm">
          {[["Year", project.year], ["Tools", project.tools], ["Role", "Motion design · Art direction"]].map(([term, value]) => (
            <div className="grid grid-cols-[5.5rem_1fr] border-b py-4" key={term}>
              <dt className="text-muted-foreground">{term}</dt>
              <dd>{value}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section className="bg-card px-5 py-24 sm:px-10 lg:px-[14vw] lg:py-36">
        <p className="text-xs uppercase tracking-[0.12em]">Creative approach</p>
        <h2 className="mt-12 max-w-4xl text-5xl leading-[0.9] tracking-[-0.09em] sm:text-7xl">
          The work is built to give each moment a reason to exist.
        </h2>
        <p className="ml-auto mt-12 max-w-md text-sm leading-relaxed text-muted-foreground">
          From visual direction through timing and finish, every frame is considered as part of a larger story.
        </p>
      </section>

      <footer className="flex min-h-80 flex-col justify-between bg-primary px-5 py-10 text-primary-foreground sm:px-10 lg:px-[5vw]">
        <p className="text-xs uppercase tracking-[0.12em]">Next project</p>
        <Link className="flex items-center justify-between text-[clamp(3.5rem,9vw,9rem)] leading-[0.8] tracking-[-0.1em]" href={`/work/${nextProject}`}>
          Keep moving
          <ArrowUpRight className="size-10" />
        </Link>
      </footer>
    </main>
  );
}
