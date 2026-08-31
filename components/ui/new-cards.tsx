"use client";

import { useState, useMemo, useEffect, useRef } from "react";
import Link from "next/link";
import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { heroVideos, HeroVideo } from "@/components/portfolio/data/hero-videos";
import { cn } from "@/lib/utils";

interface CardTimeMachineProps {
  className?: string;
  items?: HeroVideo[];
}

export function CardTimeMachine({
  className = "",
  items = heroVideos,
}: CardTimeMachineProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  // Ensure active video is playing
  useEffect(() => {
    videoRefs.current.forEach((video, idx) => {
      if (!video) return;
      if (idx === activeIndex) {
        video.play().catch(() => {});
      } else {
        video.pause();
      }
    });
  }, [activeIndex]);

  const handleTimelineHover = (index: number) => {
    setHoveredIndex(index);
    setActiveIndex(Math.round(index));
  };

  // Build timeline node list with sub-ticks
  const timelineNodes = useMemo(() => {
    const nodes: {
      type: "main" | "sub";
      index: number;
    }[] = [];

    items.forEach((_, i) => {
      nodes.push({
        type: "main",
        index: i,
      });
      if (i < items.length - 1) {
        for (let j = 0; j < 2; j++) {
          nodes.push({
            type: "sub",
            index: i + (j + 1) * 0.33,
          });
        }
      }
    });
    return nodes;
  }, [items]);

  return (
    <div
      className={cn(
        "relative flex flex-row items-center justify-center gap-3 sm:gap-6 w-full max-w-full pt-4 pb-2 sm:pt-8 sm:pb-2",
        className
      )}
      onMouseLeave={() => {
        setHoveredIndex(null);
      }}
    >
      {/* 3D Stack Stage */}
      <div
        className="relative w-[min(65vw,19rem)] sm:w-80 md:w-96 aspect-16/10 shrink-0 flex items-center justify-center"
        style={{ perspective: "800px" }}
      >
        {items.map((item, i) => {
          const offset = i - activeIndex;
          const isPast = i < activeIndex;
          const isActive = i === activeIndex;

          return (
            <motion.div
              key={item.id}
              className={cn(
                "absolute rounded-xl flex flex-col overflow-hidden w-full h-full origin-center border transition-colors duration-300",
                isActive
                  ? "pointer-events-auto border-white/20 bg-neutral-900 shadow-[0_20px_50px_rgba(0,0,0,0.45)] ring-1 ring-white/15"
                  : "pointer-events-auto border-neutral-700/80 dark:border-white/20 bg-neutral-900 shadow-md hover:border-white/40 cursor-pointer"
              )}
              initial={false}
              animate={{
                z: isPast ? 200 : -offset * 50,
                y: isPast ? 280 : -offset * 24, // Lifted more so stacked cards behind are clearly visible
                rotateX: isPast ? -18 : offset * 2.5,
                opacity: isPast ? 0 : Math.max(0, 1 - Math.abs(offset) * 0.16),
                scale: isPast ? 1.25 : Math.max(0.78, 1 - offset * 0.04),
              }}
              transition={{
                type: "spring",
                stiffness: 240,
                damping: 25,
                mass: 0.8,
              }}
              style={{
                zIndex: items.length - i,
              }}
              onClick={() => {
                if (!isActive) {
                  setActiveIndex(i);
                }
              }}
            >
              {/* Subtle top edge specular highlight on all cards */}
              <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-white/35 to-transparent z-10" />

              {/* Video Element */}
              <video
                ref={(el) => {
                  videoRefs.current[i] = el;
                }}
                src={item.videoUrl}
                loop
                muted
                playsInline
                preload="metadata"
                className={cn(
                  "size-full object-cover transition-opacity duration-300",
                  isActive ? "opacity-90" : "opacity-20"
                )}
              />

              {/* Ambient overlay */}
              <div className="absolute inset-0 bg-black/30 pointer-events-none" />

              {/* Active Card Content */}
              {isActive && (
                <>
                  {/* Top Bar */}
                  <div className="absolute inset-x-0 top-0 flex items-center justify-between p-2.5 sm:p-3.5 text-white z-10">
                    <span className="rounded-md border border-white/20 bg-black/60 px-2 py-0.5 font-mono text-[9px] sm:text-[10px] uppercase tracking-wider backdrop-blur-md">
                      {item.category}
                    </span>

                    <span className="rounded-md border border-white/15 bg-black/60 px-1.5 sm:px-2 py-0.5 font-mono text-[8px] sm:text-[9px] text-white/80 backdrop-blur-md">
                      {item.duration}
                    </span>
                  </div>

                  {/* Bottom Bar */}
                  <div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-2.5 sm:p-4 text-white z-10">
                    <div className="min-w-0 pr-2">
                      <span className="font-mono text-[9px] sm:text-[10px] text-blue-400 block truncate">
                        {String(i + 1).padStart(2, "0")} · {item.tool}
                      </span>
                      <h4 className="text-xs sm:text-base font-normal tracking-tight truncate">
                        {item.title}
                      </h4>
                    </div>

                    {item.slug && (
                      <Link
                        href={`/work/${item.slug}`}
                        className="group/link flex size-7 sm:size-8 shrink-0 items-center justify-center rounded-md border border-white/25 bg-white/15 backdrop-blur-md transition-colors hover:bg-white hover:text-black cursor-pointer"
                        title="View case study"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <ArrowUpRight className="size-3.5 sm:size-4 transition-transform group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5" />
                      </Link>
                    )}
                  </div>
                </>
              )}
            </motion.div>
          );
        })}
      </div>

      {/* Right Timeline Interactive Lines (High-contrast for clear visibility on light/dark themes) */}
      <div
        className="relative flex flex-col items-end z-30 py-2 select-none"
        onMouseLeave={() => setHoveredIndex(null)}
      >
        {timelineNodes.map((node) => {
          if (node.type === "main") {
            const index = node.index;
            const isSelected = activeIndex === index;

            return (
              <button
                key={`main-${index}`}
                className="relative inline-flex items-center justify-end py-1.5 w-8 sm:w-12 md:w-14 group cursor-pointer border-0 bg-transparent"
                onMouseEnter={() => handleTimelineHover(index)}
                onClick={(e) => {
                  e.stopPropagation();
                  setActiveIndex(index);
                }}
              >
                <motion.div
                  className={cn(
                    "h-0.75 rounded-full origin-right transition-colors",
                    isSelected
                      ? "bg-blue-500 w-4 sm:w-6 shadow-[0_0_8px_rgba(59,130,246,0.6)]"
                      : "bg-neutral-400 dark:bg-neutral-600 group-hover:bg-neutral-800 dark:group-hover:bg-neutral-200 w-2.5 sm:w-4"
                  )}
                  animate={{
                    scaleX:
                      hoveredIndex === null
                        ? 1
                        : isSelected
                        ? 1.4
                        : Math.abs(index - hoveredIndex) < 0.5
                        ? 1.25
                        : 1,
                  }}
                  transition={{ type: "spring", stiffness: 400, damping: 25 }}
                />
              </button>
            );
          } else {
            const isHoveringNear =
              hoveredIndex !== null &&
              Math.abs(node.index - hoveredIndex) <= 0.5;

            return (
              <div
                key={`sub-${node.index}`}
                className="py-0.5 w-8 sm:w-12 md:w-14 flex justify-end cursor-pointer"
                onMouseEnter={() => handleTimelineHover(node.index)}
                onClick={(e) => {
                  e.stopPropagation();
                  setActiveIndex(Math.round(node.index));
                }}
              >
                <motion.div
                  className="h-0.5 w-2 sm:w-2.5 rounded-full bg-neutral-300 dark:bg-neutral-700 origin-right transition-colors"
                  animate={{
                    scaleX:
                      hoveredIndex === null ? 1 : isHoveringNear ? 1.3 : 1,
                    opacity:
                      hoveredIndex === null ? 0.6 : isHoveringNear ? 1 : 0.6,
                  }}
                  transition={{ type: "spring", stiffness: 400, damping: 25 }}
                />
              </div>
            );
          }
        })}
      </div>
    </div>
  );
}

export default CardTimeMachine;