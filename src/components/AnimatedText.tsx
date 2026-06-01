"use client";

import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import { useRef } from "react";

interface AnimatedTextProps {
  text: string;
  className?: string;
}

interface CharProps {
  char: string;
  index: number;
  total: number;
  progress: MotionValue<number>;
}

function Char({ char, index, total, progress }: CharProps) {
  // Map index to a portion of the 0 to 1 scroll progress range
  // We add some overlap (e.g. index + 3) to make the text flow smoothly
  const start = index / total;
  const end = Math.min(1, (index + 3.5) / total);
  
  const opacity = useTransform(progress, [start, end], [0.2, 1]);

  if (char === " ") {
    // Return space component to preserve layouts
    return <span className="inline-block">&nbsp;</span>;
  }

  return (
    <span className="relative inline-block select-none">
      <span className="opacity-0">{char}</span>
      <motion.span style={{ opacity }} className="absolute inset-0">
        {char}
      </motion.span>
    </span>
  );
}

export default function AnimatedText({ text, className = "" }: AnimatedTextProps) {
  const containerRef = useRef<HTMLParagraphElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.8", "end 0.2"],
  });

  const chars = text.split("");
  const total = chars.length;

  return (
    <p ref={containerRef} className={`${className} flex flex-wrap justify-center`}>
      {chars.map((char, index) => (
        <Char
          key={index}
          char={char}
          index={index}
          total={total}
          progress={scrollYProgress}
        />
      ))}
    </p>
  );
}
