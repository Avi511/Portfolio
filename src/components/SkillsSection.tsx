"use client";

import { 
  FaHtml5, FaCss3Alt, FaJs, FaJava, FaReact, FaNodeJs, FaGitAlt, FaGithub, FaFigma, FaDocker, FaLinux 
} from "react-icons/fa";
import { 
  SiTypescript, SiPhp, SiC, SiNextdotjs, SiSpringboot, SiExpress, SiTailwindcss, SiMongodb, SiMysql, SiPostgresql, SiPostman 
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import { useRef, useState, useEffect } from "react";

export default function SkillsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [translateX, setTranslateX] = useState(0);

  const skillCategories = [
    {
      id: "01",
      title: "Frontend Ecosystem",
      skills: [
        { name: "HTML5", icon: FaHtml5, color: "#E34F26", level: 95 },
        { name: "CSS3", icon: FaCss3Alt, color: "#1572B6", level: 90 },
        { name: "JavaScript", icon: FaJs, color: "#F7DF1E", level: 90 },
        { name: "TypeScript", icon: SiTypescript, color: "#3178C6", level: 85 },
        { name: "React", icon: FaReact, color: "#61DAFB", level: 90 },
        { name: "Next.js", icon: SiNextdotjs, color: "#FFFFFF", level: 85 },
        { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4", level: 90 },
      ]
    },
    {
      id: "02",
      title: "Backend & Database",
      skills: [
        { name: "Java", icon: FaJava, color: "#ED8B00", level: 80 },
        { name: "PHP", icon: SiPhp, color: "#777BB4", level: 70 },
        { name: "Spring Boot", icon: SiSpringboot, color: "#6DB33F", level: 75 },
        { name: "Node.js", icon: FaNodeJs, color: "#339933", level: 80 },
        { name: "Express.js", icon: SiExpress, color: "#FFFFFF", level: 75 },
        { name: "C Programming", icon: SiC, color: "#A8B9CC", level: 70 },
        { name: "MongoDB", icon: SiMongodb, color: "#47A248", level: 80 },
        { name: "MySQL", icon: SiMysql, color: "#4479A1", level: 85 },
        { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1", level: 75 },
      ]
    },
    {
      id: "03",
      title: "Tools & Architecture",
      skills: [
        { name: "Git", icon: FaGitAlt, color: "#F05032", level: 90 },
        { name: "GitHub", icon: FaGithub, color: "#FFFFFF", level: 90 },
        { name: "VS Code", icon: VscVscode, color: "#007ACC", level: 85 },
        { name: "Figma", icon: FaFigma, color: "#F24E1E", level: 80 },
        { name: "Docker", icon: FaDocker, color: "#2496ED", level: 75 },
        { name: "Postman", icon: SiPostman, color: "#FF6C37", level: 90 },
        { name: "Linux", icon: FaLinux, color: "#FCC624", level: 75 },
      ]
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const container = sectionRef.current;
      const rect = container.getBoundingClientRect();
      const totalScrollable = container.clientHeight - window.innerHeight;
      const currentScroll = -rect.top;

      if (currentScroll >= 0 && currentScroll <= totalScrollable) {
        const progress = currentScroll / totalScrollable;
        const track = container.querySelector(".horizontal-track");
        if (track) {
          const maxTranslate = Math.max(0, track.scrollWidth - window.innerWidth);
          // Translate left as we scroll down
          setTranslateX(-progress * maxTranslate);
        }
      } else if (currentScroll < 0) {
        setTranslateX(0);
      } else {
        const track = container.querySelector(".horizontal-track");
        if (track) {
          const maxTranslate = Math.max(0, track.scrollWidth - window.innerWidth);
          setTranslateX(-maxTranslate);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  return (
    <section id="skills" className="relative w-full bg-transparent overflow-visible">
      <div ref={sectionRef} className="relative h-[220vh] w-full bg-transparent">
        {/* Sticky viewport container - starts aligned to left to prevent initial clipping */}
        <div className="sticky top-0 h-screen w-full flex flex-col justify-center items-start overflow-hidden px-6 md:px-20">
          
          {/* Main Arsenal Container (Tech Arsenal box) */}
          <div 
            className="horizontal-track flex flex-col gap-6 md:gap-8 p-8 md:p-12 rounded-[2.5rem] md:rounded-[3rem] border border-blue-500/20 bg-[#07080b]/70 backdrop-blur-2xl shadow-[0_20px_50px_rgba(0,0,0,0.8)]"
            style={{ 
              transform: `translateX(${translateX}px)`,
              transition: 'transform 0.1s ease-out'
            }}
          >
            {/* Title inside the container */}
            <div className="flex flex-col px-4 mb-2">
              <h2 className="text-[3rem] md:text-[5rem] font-black uppercase tracking-tighter leading-none text-white drop-shadow-2xl">
                Tech Arsenal
              </h2>
            </div>

            {/* Categories stack inside the main container */}
            <div className="flex flex-col gap-8 md:gap-10">
              {skillCategories.map((category, catIndex) => (
                <div key={catIndex} className="flex flex-col gap-4 px-4 shrink-0">
                  {/* Category Header */}
                  <div className="flex items-center gap-4 w-full">
                    <span className="text-[10px] md:text-xs font-mono font-bold text-blue-400 tracking-widest">{category.id}</span>
                    <h3 className="text-xs md:text-sm font-bold tracking-[0.2em] text-white/80 uppercase shrink-0">
                      {category.title}
                    </h3>
                    <div className="h-[1px] bg-white/10 flex-grow min-w-[200px]" />
                  </div>
                  
                  {/* Horizontal Cards Row */}
                  <div className="flex flex-row gap-4 md:gap-6">
                    {category.skills.map((skill, index) => {
                      const Icon = skill.icon;
                      return (
                        <div 
                          key={index}
                          className="group relative flex flex-col justify-between p-4 md:p-5 w-44 h-24 sm:w-48 sm:h-26 md:w-56 md:h-30 rounded-2xl bg-white/[0.02] border border-white/5 backdrop-blur-md hover:bg-white/[0.06] hover:border-blue-500/30 transition-all duration-300 cursor-pointer shadow-lg hover:-translate-y-1 shrink-0 overflow-hidden"
                        >
                          {/* Ambient glow matching brand color */}
                          <div 
                            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                            style={{
                              background: `radial-gradient(circle at 10% 10%, ${skill.color}15 0%, transparent 60%)`
                            }}
                          />
                          
                          {/* Top: Icon & Name */}
                          <div className="flex items-center gap-3">
                            <div className="text-2xl sm:text-3xl md:text-4xl transition-transform duration-300 group-hover:scale-110 shrink-0" style={{ color: skill.color }}>
                              <Icon />
                            </div>
                            <span className="text-xs sm:text-sm md:text-base font-bold text-white tracking-wide truncate">{skill.name}</span>
                          </div>

                          {/* Bottom: Skill level bar */}
                          <div className="flex flex-col gap-1 w-full mt-auto">
                            <div className="flex justify-between items-center text-[8px] sm:text-[9px] md:text-[10px] text-gray-400 font-bold uppercase tracking-wider">
                              <span>Skill Level</span>
                              <span style={{ color: skill.color }}>{skill.level}%</span>
                            </div>
                            <div className="w-full h-1 bg-white/5 rounded-full overflow-hidden">
                              <div 
                                className="h-full rounded-full transition-all duration-1000" 
                                style={{ 
                                  width: `${skill.level}%`, 
                                  backgroundColor: skill.color 
                                }}
                              />
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
