"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";

import {
  HeaderSection,
  HeroSection,
  ClientsMarquee,
  IntroSection,
  WorkSection,
  ServicesSection,
  AboutSection,
  ProcessSection,
  ContactFooter,
} from "@/components/portfolio/sections";

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
      <HeaderSection />
      <HeroSection />
      <ClientsMarquee />
      {/* <IntroSection /> */}
      <WorkSection />
      <ServicesSection />
      <AboutSection />
      <ProcessSection />
      <ContactFooter />
    </main>
  );
}
