"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { motionStudies, MotionStudy } from "@/components/portfolio/data/hero-studies";

function MotionVisual({ type }: { type: MotionStudy["type"] }) {
  const [timecode, setTimecode] = useState("00:04:18:22");

  useEffect(() => {
    if (type !== "frame") return;
    const interval = setInterval(() => {
      const ms = Math.floor(Math.random() * 90 + 10);
      const s = String(new Date().getSeconds()).padStart(2, "0");
      setTimecode(`00:04:${s}:${ms}`);
    }, 80);
    return () => clearInterval(interval);
  }, [type]);

  if (type === "pulse") {
    return (
      <div className="relative flex h-full w-full items-center justify-center overflow-hidden bg-[#dc8b74] p-4 text-[#1a1715]">
        {/* Concentric pulsating waves */}
        <div className="absolute size-52 rounded-full border border-black/25 animate-ping [animation-duration:3s]" />
        <div className="absolute size-36 rounded-full border border-black/35 animate-pulse [animation-duration:2s]" />
        <div className="absolute size-24 rounded-full border border-black/40" />
        <div className="relative z-10 flex flex-col items-center">
          <span className="text-4xl font-normal tracking-[-0.1em] sm:text-5xl">PULSE</span>
          <span className="mt-1 text-[9px] font-mono uppercase tracking-widest opacity-80">120 BPM · MOTION SYSTEM</span>
        </div>
        <span className="absolute left-3 top-3 font-mono text-[9px] opacity-60">+01.SYS</span>
        <span className="absolute bottom-3 right-3 font-mono text-[9px] opacity-60">RHYTHM // V1</span>
      </div>
    );
  }

  if (type === "flow") {
    return (
      <div className="relative flex h-full w-full flex-col justify-between overflow-hidden bg-[#4d6acf] p-4 text-white">
        <div className="flex items-center justify-between text-[9px] font-mono opacity-80">
          <span>INTERFACE MOTION</span>
          <span className="flex items-center gap-1">
            <span className="size-1.5 rounded-full bg-emerald-400 animate-pulse" />
            LIVE UI
          </span>
        </div>

        {/* Mock UI Motion Component */}
        <div className="space-y-2 rounded-lg border border-white/20 bg-white/10 p-3 backdrop-blur-xs">
          <div className="flex items-center justify-between">
            <div className="h-2 w-20 rounded-full bg-white/60" />
            <div className="size-2 rounded-full bg-white/80" />
          </div>
          <div className="flex items-end gap-1.5 pt-1">
            <div className="h-6 w-full rounded-sm bg-white/30 transition-all duration-500 hover:h-8" />
            <div className="h-10 w-full rounded-sm bg-white/70" />
            <div className="h-4 w-full rounded-sm bg-white/40" />
            <div className="h-8 w-full rounded-sm bg-white/90" />
            <div className="h-5 w-full rounded-sm bg-white/50" />
          </div>
        </div>

        <div className="flex items-center justify-between text-[9px] font-mono opacity-80">
          <span>EASING: CUBIC-BEZIER</span>
          <span>60 FPS</span>
        </div>
      </div>
    );
  }

  if (type === "kinetic") {
    return (
      <div className="relative flex h-full w-full flex-col justify-center overflow-hidden bg-[#d9d4ca] p-3 text-[#1f1e1c]">
        {/* Kinetic Ticker */}
        <div className="space-y-1 font-sans">
          <div className="overflow-hidden whitespace-nowrap text-2xl font-normal uppercase leading-none tracking-[-0.08em] sm:text-3xl">
            <span className="inline-block animate-pulse">DYNAMIC TYPE</span>
          </div>
          <div className="overflow-hidden whitespace-nowrap text-2xl font-light italic leading-none tracking-[-0.05em] text-[#7a766e] sm:text-3xl">
            <span>Rhythm &amp; Voice</span>
          </div>
          <div className="overflow-hidden whitespace-nowrap text-xl font-medium uppercase leading-none tracking-[-0.06em]">
            <span>MOTION STUDY</span>
          </div>
        </div>
        <span className="absolute bottom-2.5 right-3 font-mono text-[9px] text-[#7a766e]">TYPO // EXP</span>
      </div>
    );
  }

  if (type === "frame") {
    return (
      <div className="relative flex h-full w-full flex-col justify-between overflow-hidden bg-[#d6e66d] p-3 text-[#191c0e]">
        <div className="flex items-center justify-between font-mono text-[9px]">
          <span className="flex items-center gap-1 font-bold text-rose-600">
            <span className="size-1.5 rounded-full bg-rose-600 animate-ping" />
            REC
          </span>
          <span>9:16 VERTICAL</span>
        </div>

        <div className="flex items-center justify-center">
          <span className="font-mono text-xl font-bold tracking-tight sm:text-2xl">{timecode}</span>
        </div>

        <div className="flex items-center justify-between font-mono text-[9px] opacity-75">
          <span>FRAME 240/360</span>
          <span>4K PRORES</span>
        </div>
      </div>
    );
  }

  if (type === "vortex") {
    return (
      <div className="relative flex h-full w-full items-center justify-center overflow-hidden bg-[#1f2124] p-4 text-white">
        {/* 3D Wireframe Rings */}
        <div className="absolute size-36 rounded-full border border-white/20 [transform:rotateX(65deg)_rotateZ(25deg)] animate-spin [animation-duration:12s]" />
        <div className="absolute size-36 rounded-full border border-white/20 [transform:rotateY(65deg)_rotateZ(-25deg)] animate-spin [animation-duration:8s]" />
        <div className="absolute size-3 rounded-full bg-primary shadow-[0_0_12px_#3d82ff]" />

        <div className="absolute bottom-3 left-3 text-left font-mono text-[9px] text-white/60">
          <span>SPATIAL · 3D</span>
        </div>
        <div className="absolute bottom-3 right-3 font-mono text-[9px] text-white/60">
          <span>OCTANE RENDER</span>
        </div>
      </div>
    );
  }

  return (
    <div className="relative flex h-full w-full flex-col justify-between overflow-hidden bg-[#e89b88] p-4 text-[#1a1715]">
      <div className="flex justify-between font-mono text-[9px] opacity-75">
        <span>CHROMA SHIFT</span>
        <span>TITLE SEQ</span>
      </div>
      <div className="text-center">
        <span className="text-3xl font-normal tracking-[-0.09em] sm:text-4xl">SPECTRUM</span>
      </div>
      <div className="flex justify-between font-mono text-[9px] opacity-75">
        <span>WARP 0.85</span>
        <span>DAVINCI</span>
      </div>
    </div>
  );
}

function MotionCard({ item }: { item: MotionStudy }) {
  return (
    <Link
      href={`/work/${item.slug}`}
      className="group/card relative block w-[280px] shrink-0 overflow-hidden rounded-xl border border-border bg-card transition-all duration-300 hover:-translate-y-1 hover:border-foreground/40 hover:shadow-lg sm:w-[340px] md:w-[380px]"
    >
      {/* Live Motion Visual Box */}
      <div className="relative aspect-[16/10] w-full overflow-hidden border-b border-border">
        <MotionVisual type={item.type} />
      </div>

      {/* Card Info Footer */}
      <div className="flex items-center justify-between p-4 bg-card">
        <div>
          <div className="flex items-center gap-2">
            <span className="font-mono text-xs text-primary">{item.number}</span>
            <h3 className="text-base font-normal tracking-tight sm:text-lg">{item.title}</h3>
          </div>
          <p className="mt-0.5 text-xs text-muted-foreground">{item.category}</p>
        </div>

        <div className="grid size-8 place-items-center rounded-full border border-border bg-background transition-transform duration-300 group-hover/card:-translate-y-0.5 group-hover/card:translate-x-0.5 group-hover/card:bg-foreground group-hover/card:text-background">
          <ArrowUpRight className="size-4" />
        </div>
      </div>
    </Link>
  );
}

export function HeroShowcase() {
  // Duplicate array for an uninterrupted marquee loop
  const studiesTrack = [...motionStudies, ...motionStudies];

  return (
    <div className="group relative w-full overflow-hidden py-2">
      {/* Subtle edge fades blending into natural page background */}
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-8 bg-gradient-to-r from-background to-transparent sm:w-20" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-8 bg-gradient-to-l from-background to-transparent sm:w-20" />

      {/* Infinite Scrolling Track */}
      <div className="animate-marquee flex gap-4 sm:gap-6">
        {studiesTrack.map((item, idx) => (
          <MotionCard key={`${item.title}-${idx}`} item={item} />
        ))}
      </div>
    </div>
  );
}
