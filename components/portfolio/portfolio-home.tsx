"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

const projects = [
  {
    number: "01",
    title: "Pulse / One",
    category: "Brand motion",
    slug: "pulse-one",
    accent: "bg-[#dc8b74]",
  },
  {
    number: "02",
    title: "Flow State",
    category: "Product animation",
    slug: "flow-state",
    accent: "bg-[#526dc3] text-white",
  },
  {
    number: "03",
    title: "Words in Motion",
    category: "Kinetic typography",
    slug: "words-in-motion",
    accent: "bg-[#ddd8ce]",
  },
];

const services = [
  {
    title: "Brand motion",
    description: "Identity animation, logo reveals, launch moments, and motion systems.",
  },
  {
    title: "Product animation",
    description: "Product demos and interface motion that make new features easier to feel.",
  },
  {
    title: "Social content",
    description: "Short-form promotional edits and motion-led content built for attention.",
  },
  {
    title: "Explainers",
    description: "Simple, story-first videos that help a message land.",
  },
];

const process = [
  ["01", "Listen", "The message, audience, and outcome."],
  ["02", "Shape", "References, direction, and storyboard."],
  ["03", "Move", "Animation, rhythm, and refinement."],
];

function scrollTo(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

function SectionLabel({
  number,
  children,
  aside,
}: {
  number: string;
  children: string;
  aside?: string;
}) {
  return (
    <div className="grid grid-cols-[2.5rem_1fr] items-center gap-3 text-xs uppercase tracking-[0.12em] text-muted-foreground sm:grid-cols-[3rem_1fr_auto]">
      <span className="text-primary">{number}</span>
      <p>{children}</p>
      {aside ? (
        <p className="hidden text-right normal-case tracking-normal sm:block">
          {aside}
        </p>
      ) : null}
    </div>
  );
}

export function PortfolioHome() {
  const root = useRef<HTMLElement>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    gsap.registerPlugin(ScrollTrigger);

    const lenis = new Lenis({ lerp: 0.09, smoothWheel: true });
    const tick = (time: number) => lenis.raf(time * 1000);

    lenis.on("scroll", ScrollTrigger.update);
    gsap.ticker.add(tick);

    const context = gsap.context(() => {
      gsap.from("[data-hero-enter]", {
        opacity: 0,
        y: 18,
        duration: 1,
        stagger: 0.12,
        ease: "power3.out",
        delay: 0.15,
      });

      gsap.to("[data-hero-orb]", {
        yPercent: -7,
        ease: "none",
        scrollTrigger: {
          trigger: "#top",
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });

      gsap.utils.toArray<HTMLElement>("[data-reveal]").forEach((element) => {
        gsap.from(element, {
          opacity: 0,
          y: 28,
          duration: 0.85,
          ease: "power3.out",
          scrollTrigger: {
            trigger: element,
            start: "top 88%",
          },
        });
      });
    }, root);

    return () => {
      context.revert();
      lenis.destroy();
      gsap.ticker.remove(tick);
    };
  }, []);

  return (
    <main ref={root}>
      <header className="fixed inset-x-0 top-4 z-20 mx-auto grid w-[min(46rem,calc(100%-2rem))] grid-cols-[2.75rem_1fr_auto] items-center gap-2 sm:top-6">
        <a
          aria-label="Sajju home"
          className="grid size-11 place-items-center rounded-xl bg-muted/80 text-xl backdrop-blur"
          href="#top"
        >
          S
        </a>

        <nav className="flex h-11 items-center justify-around rounded-xl bg-muted/80 px-2 text-xs backdrop-blur">
          {[
            ["Work", "work"],
            ["Services", "services"],
            ["About", "about"],
            ["Contact", "contact"],
          ].map(([label, id]) => (
            <Button
              className="h-8 px-2 sm:px-3"
              key={id}
              onClick={() => scrollTo(id)}
              size="sm"
              variant="ghost"
            >
              {label}
            </Button>
          ))}
        </nav>

        <Button
          className="hidden bg-muted text-foreground hover:bg-muted/70 sm:inline-flex"
          onClick={() => scrollTo("contact")}
          size="sm"
          variant="ghost"
        >
          Start a project
          <ArrowUpRight className="size-3" />
        </Button>
      </header>

      <section
        className="relative flex min-h-svh items-end overflow-hidden px-5 pb-8 pt-40 sm:px-10 lg:px-[5vw]"
        id="top"
      >
        <p
          className="absolute left-5 top-28 text-[10px] tracking-[0.12em] sm:left-10 sm:top-32 lg:left-[5vw]"
          data-hero-enter
        >
          SAJJU — MOTION DESIGNER
        </p>

        <div
          aria-hidden="true"
          className="absolute left-1/2 top-[13%] aspect-square w-[min(92vw,43rem)] -translate-x-1/2 rounded-full bg-[radial-gradient(circle_at_47%_42%,#e5e9ea_0_2%,#b9c3c8_29%,#575c62_57%,#1b1c1e_73%,transparent_74%)] saturate-75"
          data-hero-orb
        >
          <div className="absolute inset-[19%] rounded-full bg-[radial-gradient(circle_at_36%_33%,#ffffff99,transparent_26%),linear-gradient(140deg,#bcd3df55,#0c0c0c)]" />
          <div className="absolute inset-[9%_-10%] rounded-full border border-black/30 [transform:rotateX(72deg)_rotateZ(-26deg)]" />
          <div className="absolute inset-[-11%_13%] rounded-full border border-black/30 [transform:rotateY(67deg)_rotateZ(25deg)]" />
          <div className="absolute right-[17%] top-[23%] size-2.5 rounded-full bg-primary shadow-[0_0_0_7px_#3d82ff24]" />
        </div>

        <div className="relative grid w-full items-end gap-8 lg:grid-cols-[1fr_17rem]">
          <div>
            <h1
              className="max-w-4xl text-[clamp(3.7rem,9.1vw,9.1rem)] font-normal leading-[0.82] tracking-[-0.1em]"
              data-hero-enter
            >
              Make the
              <br />
              moment matter.
            </h1>
          </div>
          <div className="max-w-xs">
            <p
              className="mb-5 text-sm leading-snug text-muted-foreground"
              data-hero-enter
            >
              Motion design for brands, products, and stories that need to be
              understood — and remembered.
            </p>
            <Button
              className="px-0 text-xs"
              data-hero-enter
              onClick={() => scrollTo("work")}
              variant="link"
            >
              View selected work
              <ArrowDown className="size-4" />
            </Button>
          </div>
        </div>

        <p
          className="absolute right-5 top-28 hidden text-right text-[10px] uppercase tracking-[0.1em] text-muted-foreground sm:right-10 sm:top-32 sm:block lg:right-[5vw]"
          data-hero-enter
        >
          Available for freelance
          <br />
          projects worldwide
        </p>
      </section>

      <section className="grid gap-12 border-t px-5 py-24 sm:px-10 lg:grid-cols-[1fr_2fr] lg:gap-24 lg:px-[12vw] lg:py-40">
        <p className="text-xs uppercase tracking-[0.12em]" data-reveal>
          Independent motion designer
        </p>
        <div>
          <h2
            className="max-w-4xl text-5xl leading-[0.88] tracking-[-0.09em] sm:text-7xl lg:text-8xl"
            data-reveal
          >
            I turn ideas into <span className="text-primary">clear, crafted</span>{" "}
            motion.
          </h2>
          <div className="mt-12 grid gap-6 sm:ml-auto sm:max-w-xl sm:grid-cols-[1fr_auto] sm:items-end">
            <p className="text-sm leading-relaxed text-muted-foreground" data-reveal>
              From a brand launch to a product reveal, I help teams give their
              message focus, rhythm, and a reason to be watched.
            </p>
            <Button
              className="w-fit"
              data-reveal
              onClick={() => scrollTo("contact")}
              variant="link"
            >
              Let&apos;s work together
              <ArrowUpRight className="size-4" />
            </Button>
          </div>
        </div>
      </section>

      <section className="border-t px-5 py-24 sm:px-10 lg:px-[5vw] lg:py-32" id="work">
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

      <section className="border-t px-5 py-24 sm:px-10 lg:px-[5vw] lg:py-32" id="about">
        <SectionLabel number="03">About</SectionLabel>

        <div className="mx-auto mt-16 grid max-w-6xl gap-12 lg:grid-cols-[1.1fr_1fr] lg:gap-28">
          <h2
            className="text-5xl leading-[0.88] tracking-[-0.09em] sm:text-7xl lg:text-8xl"
            data-reveal
          >
            Curious by nature.
            <br />
            Precise by practice.
          </h2>

          <div className="space-y-5" data-reveal>
            <p className="max-w-md text-base leading-relaxed">
              I&apos;m Sajju, a Computer Science &amp; Engineering student at IIIT
              Raichur building a freelance practice in motion design and visual
              storytelling.
            </p>
            <p className="max-w-md text-base leading-relaxed">
              My technical background keeps me curious about how things work;
              my design practice is about making them easy to experience.
            </p>

            <dl className="mt-12 border-t text-sm">
              <div className="grid grid-cols-[6.25rem_1fr] border-b py-4">
                <dt className="text-muted-foreground">Tools</dt>
                <dd>After Effects, Premiere Pro, DaVinci Resolve, Blender, Figma</dd>
              </div>
              <div className="grid grid-cols-[6.25rem_1fr] border-b py-4">
                <dt className="text-muted-foreground">Based in</dt>
                <dd>India — remote friendly</dd>
              </div>
            </dl>
          </div>
        </div>
      </section>

      <section className="bg-foreground px-5 py-24 text-background sm:px-10 lg:px-[5vw] lg:py-32" id="process">
        <p className="text-xs uppercase tracking-[0.12em] text-background/65" data-reveal>
          A simple way of working
        </p>

        <div className="mx-auto mt-12 grid max-w-5xl border-t border-background/20 sm:grid-cols-3">
          {process.map(([number, title, description]) => (
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
    </main>
  );
}
