"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  SiReact, SiJavascript, SiNextdotjs, SiTypescript, SiHtml5, SiCss, SiTailwindcss,
  SiSpringboot, SiExpress, SiNodedotjs, SiPhp, SiMongodb, SiMysql, SiSupabase,
  SiPostgresql, SiGit, SiDocker, SiFigma, SiCanva, SiVercel, SiRender
} from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { DiPhotoshop } from "react-icons/di";

const skills = [
  { name: "React", icon: SiReact, color: "#61DAFB" },
  { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
  { name: "Next.js", icon: SiNextdotjs, color: "#FFFFFF" },
  { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
  { name: "HTML5", icon: SiHtml5, color: "#E34F26" },
  { name: "CSS3", icon: SiCss, color: "#1572B6" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
  { name: "Spring Boot", icon: SiSpringboot, color: "#6DB33F" },
  { name: "Express.js", icon: SiExpress, color: "#FFFFFF" },
  { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
  { name: "Java", icon: FaJava, color: "#007396" },
  { name: "PHP", icon: SiPhp, color: "#777BB4" },
  { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
  { name: "MySQL", icon: SiMysql, color: "#4479A1" },
  { name: "Supabase", icon: SiSupabase, color: "#3ECF8E" },
  { name: "Postgres", icon: SiPostgresql, color: "#4169E1" },
  { name: "Git", icon: SiGit, color: "#F05032" },
  { name: "Docker", icon: SiDocker, color: "#2496ED" },
  { name: "Figma", icon: SiFigma, color: "#F24E1E" },
  { name: "Photoshop", icon: DiPhotoshop, color: "#31A8FF" },
  { name: "Canva", icon: SiCanva, color: "#00C4CC" },
  { name: "Vercel", icon: SiVercel, color: "#FFFFFF" },
  { name: "Render", icon: SiRender, color: "#46E3B7" },
];

export default function Skills() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (isHovered) return;
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % skills.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [isHovered]);

  const activeSkill = skills[activeIndex];
  const ActiveIcon = activeSkill.icon;

  const innerSkills = skills.slice(0, 9);
  const outerSkills = skills.slice(9);

  return (
    <section
      id="skills"
      className="relative px-[5%] md:px-[10%] pt-32 pb-20 min-h-screen flex flex-col z-[1] overflow-hidden"
    >
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="w-full flex flex-col justify-center flex-1 relative"
      >
        <div className="text-primary font-bold text-[0.85rem] tracking-[1.5px] mb-8 md:mb-12 uppercase text-left z-10">
          MY SKILLS
        </div>

        <div
          className="relative flex items-center justify-center w-[280px] h-[280px] md:w-[500px] md:h-[500px] mx-auto"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Center Active Skill */}
          <div className="absolute z-20 flex flex-col items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeSkill.name}
                initial={{ scale: 0, opacity: 0, rotate: -180 }}
                animate={{ scale: 1, opacity: 1, rotate: 0 }}
                exit={{ scale: 0, opacity: 0, rotate: 180 }}
                transition={{ duration: 0.5, type: "spring" }}
                className="w-32 h-32 md:w-48 md:h-48 rounded-full bg-[#1a1a1a]/80 border border-white/10 flex flex-col items-center justify-center backdrop-blur-sm transition-all"
                style={{ boxShadow: `0 0 50px ${activeSkill.color}33` }}
              >
                <ActiveIcon
                  className="w-14 h-14 md:w-20 md:h-20"
                  style={{ color: activeSkill.color }}
                />
                <div className="mt-2 md:mt-3 text-white font-bold text-sm md:text-lg tracking-wider text-center px-4">
                  {activeSkill.name}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Inner Orbit */}
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
            className="absolute w-[180px] h-[180px] md:w-[320px] md:h-[320px] rounded-full border border-white/10 border-dashed"
          >
            {innerSkills.map((skill, index) => {
              const angle = (index / innerSkills.length) * 360;
              const Icon = skill.icon;
              return (
                <div
                  key={skill.name}
                  className="absolute w-full h-full"
                  style={{ transform: `rotate(${angle}deg)` }}
                >
                  <div
                    className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 cursor-pointer z-30"
                    onClick={() => setActiveIndex(skills.findIndex((s) => s.name === skill.name))}
                  >
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                      className="w-10 h-10 md:w-14 md:h-14 bg-[#121212] border border-white/20 rounded-full flex items-center justify-center shadow-lg hover:scale-125 transition-all group"
                      style={{ borderColor: activeSkill.name === skill.name ? skill.color : '' }}
                    >
                      <Icon className="w-5 h-5 md:w-7 md:h-7 group-hover:opacity-100 opacity-80 transition-opacity" style={{ color: skill.color }} />
                    </motion.div>
                  </div>
                </div>
              );
            })}
          </motion.div>

          {/* Outer Orbit */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
            className="absolute w-[280px] h-[280px] md:w-[500px] md:h-[500px] rounded-full border border-white/5 border-dashed"
          >
            {outerSkills.map((skill, index) => {
              const angle = (index / outerSkills.length) * 360;
              const Icon = skill.icon;
              return (
                <div
                  key={skill.name}
                  className="absolute w-full h-full"
                  style={{ transform: `rotate(${angle}deg)` }}
                >
                  <div
                    className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 cursor-pointer z-30"
                    onClick={() => setActiveIndex(skills.findIndex((s) => s.name === skill.name))}
                  >
                    <motion.div
                      animate={{ rotate: -360 }}
                      transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
                      className="w-12 h-12 md:w-16 md:h-16 bg-[#121212] border border-white/20 rounded-full flex items-center justify-center shadow-lg hover:scale-125 transition-all group"
                      style={{ borderColor: activeSkill.name === skill.name ? skill.color : '' }}
                    >
                      <Icon className="w-6 h-6 md:w-8 md:h-8 group-hover:opacity-100 opacity-80 transition-opacity" style={{ color: skill.color }} />
                    </motion.div>
                  </div>
                </div>
              );
            })}
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
