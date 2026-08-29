import { SectionLabel } from "@/components/portfolio/section-label";

export function AboutSection() {
  return (
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
  );
}
