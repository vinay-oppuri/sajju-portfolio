import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { notFound } from "next/navigation";

interface CaseStudyProject {
  number: string;
  title: string;
  category: string;
  year: string;
  tools: string;
  description: string;
  videoUrl: string;
  creativeApproach: string;
  highlights: string[];
}

const projects: Record<string, CaseStudyProject> = {
  "pulse-one": {
    number: "01",
    title: "Pulse / One",
    category: "Brand & 3D Motion",
    year: "2025",
    tools: "Blender · After Effects · Octane",
    description:
      "A study in rhythm, energy, and brand presence — designed as a promotional motion identity exploring particle dynamics and chromatic light refraction.",
    videoUrl:
      "https://assets.mixkit.co/videos/preview/mixkit-abstract-rotating-sphere-of-particles-41558-large.mp4",
    creativeApproach:
      "Choreographed around rhythmic compression and release. Procedural particle dispersion in Blender paired with custom optical flare and chromatic passes in After Effects.",
    highlights: [
      "Procedural particle dispersion systems",
      "Dynamic lighting and surface reflections",
      "Audio-visual rhythm synchronization",
    ],
  },
  "flow-state": {
    number: "02",
    title: "Flow State",
    category: "Product & UI Animation",
    year: "2025",
    tools: "Figma · After Effects · Lottie",
    description:
      "A fluid interaction language for a digital product experience that makes complex data structures feel intuitive and responsive.",
    videoUrl:
      "https://assets.mixkit.co/videos/preview/mixkit-digital-animation-of-screens-with-charts-and-data-31913-large.mp4",
    creativeApproach:
      "Focused on micro-choreography where component cards, chart vectors, and state transitions anticipate user intent and maintain continuous flow across screens.",
    highlights: [
      "Component state transitions",
      "Micro-interaction physics and easing curves",
      "Production-ready vector motion assets",
    ],
  },
  "words-in-motion": {
    number: "03",
    title: "Words in Motion",
    category: "Kinetic Typography",
    year: "2024",
    tools: "After Effects · Premiere Pro",
    description:
      "Typography with a pulse: an experimental typographic cadence exploring pace, visual contrast, and the musicality of typographic rhythm.",
    videoUrl:
      "https://assets.mixkit.co/videos/preview/mixkit-futuristic-technology-digital-grid-animation-31915-large.mp4",
    creativeApproach:
      "Modulating scale, variable font axes, and frame rate stepping to transform static editorial layouts into a kinetic performance.",
    highlights: [
      "Variable font interpolation & weight morphing",
      "Experimental frame rate stepping",
      "Typographic voice & narrative pacing",
    ],
  },
};

export function generateStaticParams() {
  return Object.keys(projects).map((slug) => ({ slug }));
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects[slug];

  if (!project) {
    notFound();
  }

  const projectKeys = Object.keys(projects);
  const currentIndex = projectKeys.indexOf(slug);
  const nextSlug = projectKeys[(currentIndex + 1) % projectKeys.length];
  const nextProject = projects[nextSlug];

  return (
    <main className="min-h-screen bg-background text-foreground w-full overflow-x-clip">
      {/* Top Floating Navigation */}
      <nav className="fixed inset-x-0 top-4 z-40 mx-auto max-w-6xl px-4 sm:px-10 lg:px-8 flex items-center justify-between pointer-events-none">
        <Link
          className="pointer-events-auto inline-flex items-center gap-2 rounded-lg border border-border/60 bg-background/80 px-3 py-1.5 text-xs font-mono text-muted-foreground backdrop-blur-md transition-colors hover:text-foreground hover:border-foreground/40 shadow-xs"
          href="/#work"
        >
          <ArrowLeft className="size-3.5" />
          <span>Back</span>
        </Link>

        <div className="pointer-events-auto inline-flex items-center rounded-lg border border-border/60 bg-background/80 px-3 py-1.5 text-xs font-mono text-foreground backdrop-blur-md shadow-xs">
          <span>SAJJU</span>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 sm:pt-32 pb-10 sm:pb-12 max-w-6xl mx-auto px-5 sm:px-10 lg:px-8">
        {/* Meta details */}
        <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-muted-foreground">
          <span className="text-primary font-semibold">{project.number}</span>
          <span>/</span>
          <span>{project.category}</span>
          <span>/</span>
          <span>{project.year}</span>
        </div>

        {/* Project Title */}
        <h1 className="mt-3 sm:mt-4 text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-normal leading-[0.95] tracking-tighter text-foreground">
          {project.title}
        </h1>

        {/* Full-width Video Showcase Player */}
        <div className="relative mt-6 sm:mt-8 w-full aspect-16/9 rounded-lg overflow-hidden border border-border/70 bg-neutral-950 shadow-xs">
          <video
            src={project.videoUrl}
            autoPlay
            loop
            muted
            playsInline
            controls
            preload="metadata"
            className="size-full object-cover"
          />
        </div>
      </section>

      {/* Project Overview & Metadata Grid */}
      <section className="py-10 sm:py-14 border-t border-border/80 max-w-6xl mx-auto px-5 sm:px-10 lg:px-8">
        <div className="grid gap-6 sm:gap-8 lg:grid-cols-[1.3fr_1fr] lg:gap-16 items-start">
          <div className="space-y-3 sm:space-y-4">
            <span className="text-xs font-mono uppercase tracking-widest text-muted-foreground">
              Overview
            </span>
            <p className="text-lg sm:text-2xl lg:text-3xl font-normal tracking-[-0.03em] leading-snug text-foreground">
              {project.description}
            </p>
          </div>

          <dl className="rounded-lg border border-border/60 bg-card/30 p-4 sm:p-6 space-y-2.5 divide-y divide-border/50 text-xs sm:text-sm">
            <div className="flex items-center justify-between pb-2">
              <dt className="font-mono text-muted-foreground">Year</dt>
              <dd className="font-medium text-foreground">{project.year}</dd>
            </div>
            <div className="flex items-center justify-between py-2">
              <dt className="font-mono text-muted-foreground">Category</dt>
              <dd className="font-medium text-foreground">{project.category}</dd>
            </div>
            <div className="flex items-center justify-between py-2">
              <dt className="font-mono text-muted-foreground">Tools</dt>
              <dd className="font-medium text-foreground">{project.tools}</dd>
            </div>
            <div className="flex items-center justify-between pt-2">
              <dt className="font-mono text-muted-foreground">Role</dt>
              <dd className="font-medium text-foreground">Motion Design · Art Direction</dd>
            </div>
          </dl>
        </div>
      </section>

      {/* Creative Approach & Highlights */}
      <section className="py-10 sm:py-14 border-t border-border/80 max-w-6xl mx-auto px-5 sm:px-10 lg:px-8">
        <div className="grid gap-6 sm:gap-8 lg:grid-cols-[1.1fr_1fr] lg:gap-16">
          <div className="space-y-3 sm:space-y-4">
            <span className="text-xs font-mono uppercase tracking-widest text-muted-foreground">
              Creative Approach
            </span>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-normal tracking-[-0.04em] text-foreground">
              Every frame built with intent and focus.
            </h2>
            <p className="text-xs sm:text-sm leading-relaxed text-muted-foreground">
              {project.creativeApproach}
            </p>
          </div>

          <div className="space-y-3">
            <span className="text-xs font-mono uppercase tracking-widest text-muted-foreground block mb-1">
              Highlights
            </span>
            <div className="space-y-2">
              {project.highlights.map((highlight, index) => (
                <div
                  key={highlight}
                  className="flex items-start gap-2.5 sm:gap-3 rounded-md border border-border/60 bg-card/30 p-2.5 sm:p-3"
                >
                  <span className="font-mono text-xs font-semibold text-primary pt-0.5">
                    0{index + 1}
                  </span>
                  <p className="text-xs sm:text-sm text-foreground">
                    {highlight}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Next Project Footer */}
      <footer className="bg-primary text-primary-foreground py-12 sm:py-16 mt-12 sm:mt-16">
        <div className="max-w-6xl mx-auto px-5 sm:px-10 lg:px-8 flex flex-col justify-between gap-6 sm:gap-8">
          <div className="flex items-center justify-between border-b border-primary-foreground/20 pb-3 text-xs font-mono uppercase tracking-widest text-primary-foreground/80">
            <span>Next / {nextProject.number}</span>
            <span>{nextProject.category}</span>
          </div>

          <Link
            className="group flex items-center justify-between text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-normal tracking-[-0.06em] transition-transform duration-200 hover:translate-x-1"
            href={`/work/${nextSlug}`}
          >
            <span>{nextProject.title}</span>
            <ArrowUpRight className="size-6 sm:size-8 md:size-10 transition-transform duration-200 group-hover:-translate-y-1 group-hover:translate-x-1" />
          </Link>
        </div>
      </footer>
    </main>
  );
}
