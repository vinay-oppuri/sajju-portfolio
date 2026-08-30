"use client";

import { useEffect, useState, useMemo, useCallback, memo } from "react";
import { motion, AnimatePresence } from "motion/react";
import { cn } from "@/lib/utils";

interface FlipFadeTextProps {
  /**
   * Array of words or phrases to cycle through
   */
  words?: string[];
  /**
   * Interval between word changes in milliseconds
   * @default 3000
   */
  interval?: number;
  /**
   * Additional CSS classes for the container
   */
  className?: string;
  /**
   * Additional CSS classes for the text
   */
  textClassName?: string;
  /**
   * Animation duration for each letter in seconds
   * @default 0.5
   */
  letterDuration?: number;
  /**
   * Stagger delay between letters on enter in seconds
   * @default 0.03
   */
  staggerDelay?: number;
  /**
   * Stagger delay between letters on exit in seconds
   * @default 0.02
   */
  exitStaggerDelay?: number;
}

const defaultWords = [
  "CRAFTED WITH INTENT",
  "SHAPED BY RHYTHM",
  "DESIGNED TO MOVE",
  "3D VISUAL SYSTEMS",
  "KINETIC IDENTITIES",
];

// Memoized Letter component for smooth 3D flip animation
const Letter = memo(function Letter({
  char,
  letterDuration,
}: {
  char: string;
  letterDuration: number;
}) {
  return (
    <motion.span
      style={{ transformStyle: "preserve-3d" }}
      variants={{
        initial: {
          rotateX: 90,
          y: 18,
          opacity: 0,
          filter: "blur(6px)",
        },
        animate: {
          rotateX: 0,
          y: 0,
          opacity: 1,
          filter: "blur(0px)",
          transition: {
            duration: letterDuration,
            ease: [0.2, 0.65, 0.3, 0.9],
          },
        },
        exit: {
          rotateX: -90,
          y: -18,
          opacity: 0,
          filter: "blur(6px)",
          transition: {
            duration: letterDuration * 0.65,
            ease: "easeIn",
          },
        },
      }}
      className="inline-block"
    >
      {char}
    </motion.span>
  );
});

// Memoized Word/Phrase component: wraps each word in whitespace-nowrap to prevent period/letters wrapping alone
const Word = memo(function Word({
  text,
  staggerDelay,
  exitStaggerDelay,
  letterDuration,
  textClassName,
}: {
  text: string;
  staggerDelay: number;
  exitStaggerDelay: number;
  letterDuration: number;
  textClassName?: string;
}) {
  const wordsList = useMemo(() => text.split(" "), [text]);

  return (
    <motion.div
      className={cn(
        "inline-flex flex-wrap items-center gap-x-[0.26em] tracking-tighter text-primary",
        textClassName
      )}
      initial="initial"
      animate="animate"
      exit="exit"
      variants={{
        initial: { opacity: 1 },
        animate: {
          opacity: 1,
          transition: {
            staggerChildren: staggerDelay,
          },
        },
        exit: {
          opacity: 1,
          transition: {
            staggerChildren: exitStaggerDelay,
          },
        },
      }}
    >
      {wordsList.map((word, wordIndex) => (
        <span key={`word-${wordIndex}`} className="inline-flex whitespace-nowrap">
          {word.split("").map((char, charIndex) => (
            <Letter
              key={`char-${wordIndex}-${charIndex}`}
              char={char}
              letterDuration={letterDuration}
            />
          ))}
        </span>
      ))}
    </motion.div>
  );
});

export function FlipFadeText({
  words = defaultWords,
  interval = 3000,
  className,
  textClassName,
  letterDuration = 0.5,
  staggerDelay = 0.03,
  exitStaggerDelay = 0.02,
}: FlipFadeTextProps) {
  const [index, setIndex] = useState(0);

  const updateIndex = useCallback(() => {
    setIndex((prev) => (prev + 1) % words.length);
  }, [words.length]);

  useEffect(() => {
    const timer = setInterval(updateIndex, interval);
    return () => clearInterval(timer);
  }, [updateIndex, interval]);

  const currentWord = useMemo(() => words[index], [words, index]);

  return (
    <div className={cn("inline-flex items-center", className)}>
      <div
        className="relative inline-flex items-center"
        style={{ perspective: "1000px" }}
      >
        <AnimatePresence mode="wait">
          <Word
            key={currentWord}
            text={currentWord}
            staggerDelay={staggerDelay}
            exitStaggerDelay={exitStaggerDelay}
            letterDuration={letterDuration}
            textClassName={textClassName}
          />
        </AnimatePresence>
      </div>
    </div>
  );
}

export default FlipFadeText;
