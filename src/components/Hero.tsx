"use client";

import React from 'react';
import Image from 'next/image';
import { motion, Variants } from 'framer-motion';

export default function Hero() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const iconVariants: Variants = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.4, ease: "easeOut" }
    }
  };

  return (
    <section id="home" className="relative px-[5%] md:px-[10%] flex flex-col justify-center min-h-[100vh] z-[1]">
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="absolute top-0 right-0 w-full md:w-[65%] h-[100vh] z-0 pointer-events-none opacity-30 md:opacity-100"
      >
        <Image
          src="/me.png"
          alt="Avishka Medagamagodage"
          fill
          style={{ objectFit: 'cover', objectPosition: 'right top' }}
          className="hero-image"
          priority
        />
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-background via-transparent to-[#12121233] via-[40%]"></div>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="w-full md:w-[55%] relative z-[2] flex flex-col justify-center items-center md:items-start text-center md:text-left"
      >
        <motion.div variants={itemVariants} className="text-primary font-bold text-[0.85rem] tracking-[1.5px] mb-6 uppercase">
          HELLO, MY NAME IS
        </motion.div>

        <motion.h1 variants={itemVariants} className="font-poppins text-[2.8rem] md:text-[3.5rem] lg:text-[5rem] font-[650] leading-[1.05] m-0 mb-8 tracking-[-1px]">
          <span className="block">Avishka</span>
          <span className="block">Medagamagodage</span>
        </motion.h1>

        <motion.div variants={itemVariants} className="text-[0.8rem] md:text-[0.9rem] font-bold uppercase tracking-[2px]">
          FULLSTACK DEVELOPER
        </motion.div>

        <motion.div variants={itemVariants} className="text-[0.65rem] md:text-[0.75rem] font-medium text-muted uppercase tracking-[1.5px] mt-3">
          SOFTWARE ENGINEERING UNDERGRADUATE - UNIVERSITY OF KELANIYA
        </motion.div>

        <motion.div variants={itemVariants} className="flex gap-4 mt-10 justify-center md:justify-start">

          <motion.a variants={iconVariants} href="https://github.com/Avi511" target="_blank" rel="noopener noreferrer" className="w-[45px] h-[45px] rounded-full bg-white/10 hover:bg-white/15 flex justify-center items-center text-foreground transition-colors duration-300" aria-label="GitHub">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.2c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
              <path d="M9 18c-4.51 2-5-2-7-2" />
            </svg>
          </motion.a>
          <motion.a variants={iconVariants} href="mailto:aimedagamagodage2003@gmail.com" className="w-[45px] h-[45px] rounded-full bg-white/10 hover:bg-white/15 flex justify-center items-center text-foreground transition-colors duration-300" aria-label="Email">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect width="20" height="16" x="2" y="4" rx="2" />
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
            </svg>
          </motion.a>
          <motion.a variants={iconVariants} href="https://www.linkedin.com/in/avishka-medagamagodage-01a0292aa/" target="_blank" rel="noopener noreferrer" className="w-[45px] h-[45px] rounded-full bg-white/10 hover:bg-white/15 flex justify-center items-center text-foreground transition-colors duration-300" aria-label="LinkedIn">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
              <rect width="4" height="12" x="2" y="9" />
              <circle cx="4" cy="4" r="2" />
            </svg>
          </motion.a>
          <motion.a
            variants={iconVariants}
            href="/Avishka Medagamagodage_Software Engineer.pdf"
            download="Avishka_CV.pdf"
            className="group flex items-center h-[45px] rounded-full bg-primary text-black hover:bg-white transition-all duration-300 overflow-hidden shadow-lg"
            aria-label="Download CV"
          >
            <div className="w-[45px] h-[45px] flex items-center justify-center shrink-0">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
            </div>
            <span className="max-w-0 opacity-0 group-hover:max-w-xs group-hover:opacity-100 group-hover:pr-5 whitespace-nowrap transition-all duration-300 ease-in-out font-bold text-sm">
              Download CV
            </span>
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
}
