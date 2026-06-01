"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface FadeInProps {
  children: ReactNode;
  delay?: number;
  duration?: number;
  x?: number;
  y?: number;
  as?: keyof typeof motion | string;
  className?: string;
  id?: string;
}

export default function FadeIn({
  children,
  delay = 0,
  duration = 0.7,
  x = 0,
  y = 30,
  as = "div",
  className = "",
  id,
}: FadeInProps) {
  // Use motion.create to dynamically build components like motion.div, motion.nav, motion.h1 etc.
  const MotionComponent = (motion as any)[as] || motion.div;

  return (
    <MotionComponent
      id={id}
      initial={{ opacity: 0, x, y }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: "50px", amount: 0 }}
      transition={{
        duration,
        delay,
        ease: [0.25, 0.1, 0.25, 1], // [0.25, 0.1, 0.25, 1] custom cubic bezier
      }}
      className={className}
    >
      {children}
    </MotionComponent>
  );
}
