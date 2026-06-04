"use client";

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const text1 = "I am **Avishka Ishan Medagamagodage**, a third-year **Software Engineering undergraduate** at the **University of Kelaniya** from **Kandy**. I am passionate about coding, software development, and continuously learning new technologies. My main interests are **Full-Stack Development** and **Data Science**, and I aspire to build a successful career in these fields.";

const text2 = "I also enjoy designing creative and user-friendly digital experiences, combining technical skills with creativity to develop impactful solutions. I am always eager to take on new challenges, improve my skills, and create innovative projects that solve real-world problems.";

const parseText = (text: string) => {
  const words: { text: string; isBold: boolean }[] = [];
  let isBold = false;
  
  text.split(" ").forEach(word => {
    let cleanWord = word;
    let turnBoldOffAfter = false;
    let turnBoldOnNow = false;

    if (cleanWord.startsWith("**")) {
      turnBoldOnNow = true;
      cleanWord = cleanWord.substring(2);
    }
    
    if (cleanWord.includes("**")) {
      turnBoldOffAfter = true;
      cleanWord = cleanWord.replace("**", "");
    }

    if (turnBoldOnNow) isBold = true;
    
    words.push({ text: cleanWord, isBold: isBold });

    if (turnBoldOffAfter) isBold = false;
  });
  return words;
};

const words1 = parseText(text1);
const words2 = parseText(text2);
const allWords = [...words1, ...words2];
const totalWords = allWords.length;

const wordVariants = {
  hidden: { opacity: 0.15 },
  visible: { 
    opacity: 1,
    transition: { duration: 0.4 }
  }
};

const Word = ({ word }: { word: any }) => {
  return (
    <span className="relative inline-block mr-[0.3em] mb-1">
      <motion.span 
        variants={wordVariants}
        className={`transition-colors duration-300 ${word.isBold ? 'text-white font-semibold' : ''}`}
      >
        {word.text}
      </motion.span>
    </span>
  );
};

export default function About() {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.02,
      }
    }
  };

  const fadeUpVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const cardsContainerVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.2, delayChildren: 0.3 }
    }
  };

  return (
    <section id="about" className="relative px-[5%] md:px-[10%] py-12 md:py-20 min-h-screen flex items-center z-[1]">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 w-full">
        {/* Left Column: Text Content */}
        <div className="flex flex-col justify-center">
          <motion.div 
            variants={fadeUpVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-primary font-bold text-[0.85rem] tracking-[1.5px] mb-8 uppercase"
          >
            ABOUT ME
          </motion.div>
          
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="flex flex-col gap-6 text-muted text-lg md:text-xl leading-relaxed mb-10"
          >
            <p className="flex flex-wrap">
              {words1.map((word, i) => (
                <Word key={`w1-${i}`} word={word} />
              ))}
            </p>
            <p className="flex flex-wrap">
              {words2.map((word, i) => (
                <Word key={`w2-${i}`} word={word} />
              ))}
            </p>
          </motion.div>

          <motion.div
            variants={fadeUpVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <Link href="#projects" className="text-white font-semibold inline-flex items-center gap-2 hover:text-primary transition-colors group">
              Explore My projects
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transition-transform group-hover:translate-x-1">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </Link>
          </motion.div>
        </div>

        {/* Right Column: Cards */}
        <motion.div 
          variants={cardsContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="flex flex-col justify-center gap-6"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* GPA Card */}
            <motion.div variants={fadeUpVariants} className="bg-[#121212] border border-white/10 rounded-2xl p-8 flex flex-col items-center justify-center text-center hover:border-white/30 transition-colors shadow-lg">
              <div className="text-5xl font-bold text-primary mb-2">3.43</div>
              <div className="text-sm text-muted">Current GPA</div>
            </motion.div>

            {/* Projects Card */}
            <motion.div variants={fadeUpVariants} className="bg-[#121212] border border-white/10 rounded-2xl p-8 flex flex-col items-center justify-center text-center hover:border-white/30 transition-colors shadow-lg">
              <div className="text-5xl font-bold text-primary mb-2">4+</div>
              <div className="text-sm text-muted">Individual Projects</div>
            </motion.div>
          </div>

          {/* Volunteering Card */}
          <motion.div variants={fadeUpVariants} className="bg-[#121212] border border-white/10 rounded-2xl p-8 hover:border-white/30 transition-colors shadow-lg">
            <div className="flex items-center gap-3 mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              </svg>
              <h3 className="text-lg font-bold text-white">Volunteering</h3>
            </div>

            <div className="flex flex-col gap-4">
              <div>
                <h4 className="text-white font-semibold text-sm">Head of Designing</h4>
                <p className="text-xs text-muted mt-1">Software Engineering Students' Association, University of Kelaniya</p>
              </div>
              <div className="w-full h-[1px] bg-white/10"></div>
              <div>
                <h4 className="text-white font-semibold text-sm">Head of Logistics</h4>
                <p className="text-xs text-muted mt-1">IEEE Students' Branch, University of Kelaniya</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
