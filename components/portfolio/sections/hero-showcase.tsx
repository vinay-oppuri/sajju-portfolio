"use client";

import React, { useRef, useState, useEffect } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { heroVideos, HeroVideo } from "@/components/portfolio/data/hero-videos";
import { cn } from "@/lib/utils";

function VideoCard({ video }: { video: HeroVideo }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const el = videoRef.current;
    if (!el) return;

    el.muted = true;
    el.play().catch(() => {});
  }, []);

  return (
    <Link
      href={video.slug ? `/work/${video.slug}` : "#work"}
      className="group/card relative block w-[290px] shrink-0 overflow-hidden rounded-2xl border border-border/70 bg-card/60 p-2 shadow-xs backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-xl sm:w-[350px] md:w-[390px]"
    >
      {/* Video Container */}
      <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xl bg-muted/60">
        {/* Dynamic backdrop glow */}
        <div
          className={cn(
            "absolute inset-0 bg-gradient-to-br opacity-30 transition-opacity duration-300 group-hover/card:opacity-60",
            video.accent
          )}
        />

        {/* Video Element */}
        <video
          ref={videoRef}
          src={video.videoUrl}
          muted
          loop
          playsInline
          autoPlay
          preload="metadata"
          onLoadedData={() => setIsLoaded(true)}
          className={cn(
            "h-full w-full object-cover transition-all duration-500 group-hover/card:scale-105",
            isLoaded ? "opacity-100" : "opacity-0"
          )}
        />

        {/* Subtle loading placeholder */}
        {!isLoaded && (
          <div className="absolute inset-0 flex items-center justify-center bg-muted/90">
            <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
              <span className="size-2 animate-ping rounded-full bg-primary/70" />
              <span>Loading motion preview...</span>
            </div>
          </div>
        )}

        {/* Top Badges Overlay */}
        <div className="absolute inset-x-3 top-3 flex items-center justify-between">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-background/80 px-2.5 py-1 text-[11px] font-medium text-foreground backdrop-blur-md shadow-xs">
            <span className="size-1.5 rounded-full bg-primary animate-pulse" />
            {video.category}
          </span>
          <span className="rounded-full bg-foreground/10 px-2 py-0.5 text-[10px] font-mono uppercase tracking-wider text-background backdrop-blur-md sm:inline-block">
            {video.tool}
          </span>
        </div>

        {/* Bottom Dark Gradient for readability */}
        <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

        {/* Bottom Video Metadata */}
        <div className="absolute inset-x-3 bottom-3 flex items-end justify-between text-white">
          <div>
            <p className="text-sm font-medium tracking-tight sm:text-base drop-shadow-sm">
              {video.title}
            </p>
            <div className="mt-0.5 flex items-center gap-2 text-[11px] text-white/70">
              <span>{video.duration}</span>
              <span>·</span>
              <span className="text-white/90 underline-offset-2 group-hover/card:underline">
                View project
              </span>
            </div>
          </div>

          <div className="grid size-8 place-items-center rounded-full bg-white/20 text-white backdrop-blur-md transition-transform duration-300 group-hover/card:scale-110 group-hover/card:bg-primary group-hover/card:text-primary-foreground">
            <ArrowUpRight className="size-4" />
          </div>
        </div>
      </div>
    </Link>
  );
}

export function HeroShowcase() {
  // Duplicate array to create an uninterrupted infinite loop
  const videoTrack = [...heroVideos, ...heroVideos];

  return (
    <div className="group relative w-full overflow-hidden py-4">
      {/* Edge gradient fades for seamless loop disappearance */}
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 bg-gradient-to-r from-background to-transparent sm:w-28" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 bg-gradient-to-l from-background to-transparent sm:w-28" />

      {/* Infinite Scrolling Track */}
      <div className="animate-marquee flex gap-4 sm:gap-6">
        {videoTrack.map((video, idx) => (
          <VideoCard key={`${video.id}-${idx}`} video={video} />
        ))}
      </div>
    </div>
  );
}
