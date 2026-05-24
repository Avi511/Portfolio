"use client";

import { 
  FaHtml5, FaCss3Alt, FaJs, FaJava, FaReact, FaNodeJs, FaGitAlt, FaGithub, FaFigma, FaDocker 
} from "react-icons/fa";
import { 
  SiTypescript, SiPhp, SiC, SiNextdotjs, SiSpringboot, SiExpress, SiTailwindcss, SiMongodb, SiMysql, SiVisualstudiocode 
} from "react-icons/si";
import { useRef, useState, useEffect } from "react";

export default function SkillsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [translateX, setTranslateX] = useState(0);

  const skillCategories = [
    {
      title: "Languages",
      skills: [
        { name: "HTML5", icon: FaHtml5, color: "#E34F26" },
        { name: "CSS3", icon: FaCss3Alt, color: "#1572B6" },
        { name: "JavaScript", icon: FaJs, color: "#F7DF1E" },
        { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
        { name: "PHP", icon: SiPhp, color: "#777BB4" },
        { name: "Java", icon: FaJava, color: "#ED8B00" },
        { name: "C Programming", icon: SiC, color: "#A8B9CC" },
      ]
    },
    {
      title: "Frameworks",
      skills: [
        { name: "React", icon: FaReact, color: "#61DAFB" },
        { name: "Next.js", icon: SiNextdotjs, color: "#FFFFFF" },
        { name: "Node.js", icon: FaNodeJs, color: "#339933" },
        { name: "Express.js", icon: SiExpress, color: "#FFFFFF" },
        { name: "Spring Boot", icon: SiSpringboot, color: "#6DB33F" },
        { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
      ]
    },
    {
      title: "Database & Tools",
      skills: [
        { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
        { name: "MySQL", icon: SiMysql, color: "#4479A1" },
        { name: "Git", icon: FaGitAlt, color: "#F05032" },
        { name: "GitHub", icon: FaGithub, color: "#FFFFFF" },
        { name: "VS Code", icon: SiVisualstudiocode, color: "#007ACC" },
        { name: "Figma", icon: FaFigma, color: "#F24E1E" },
        { name: "Docker", icon: FaDocker, color: "#2496ED" },
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
          const maxTranslate = track.scrollWidth - window.innerWidth;
          // Translate left (negative translateX) as we scroll down
          setTranslateX(-progress * maxTranslate);
        }
      } else if (currentScroll < 0) {
        setTranslateX(0);
      } else {
        const track = container.querySelector(".horizontal-track");
        if (track) {
          const maxTranslate = track.scrollWidth - window.innerWidth;
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
      <div ref={sectionRef} className="relative h-[250vh] w-full bg-transparent">
        {/* Sticky viewport container */}
        <div className="sticky top-0 h-screen w-full flex flex-col justify-center overflow-hidden">
          
          {/* Header */}
          <div className="absolute top-20 md:top-24 left-1/2 -translate-x-1/2 text-center z-10">
            <h2 className="text-[3.5rem] md:text-[6rem] font-black uppercase tracking-tighter drop-shadow-2xl leading-none text-center">
              MY SKILLS
            </h2>
          </div>

          {/* Horizontal Track container */}
          <div 
            className="horizontal-track flex flex-row items-center gap-16 md:gap-32 px-12 md:px-24 w-max"
            style={{ 
              transform: `translateX(${translateX}px)`,
              transition: 'transform 0.1s ease-out'
            }}
          >
            {skillCategories.map((category, catIndex) => (
              <div key={catIndex} className="flex flex-col items-start shrink-0 pr-12 md:pr-24">
                <h3 className="text-2xl md:text-4xl font-black tracking-tight mb-8 md:mb-12 text-white/90 border-l-4 md:border-l-8 border-blue-500 pl-4 md:pl-6 uppercase">
                  {category.title}
                </h3>
                
                <div className="flex flex-row gap-4 md:gap-6">
                  {category.skills.map((skill, index) => {
                    const Icon = skill.icon;
                    return (
                      <div 
                        key={index}
                        className="group relative flex flex-col items-center justify-center p-4 w-28 h-28 sm:w-36 sm:h-36 md:w-44 md:h-44 rounded-2xl md:rounded-3xl bg-white/[0.02] border border-white/5 backdrop-blur-md hover:bg-white/[0.08] hover:border-white/15 transition-all duration-300 cursor-pointer shadow-lg hover:-translate-y-2 shrink-0"
                      >
                        {/* Ambient hover glow inside the card matching brand color */}
                        <div 
                          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl md:rounded-3xl pointer-events-none"
                          style={{
                            background: `radial-gradient(circle, ${skill.color}15 0%, transparent 70%)`
                          }}
                        />
                        
                        <div className="relative z-10 mb-2 md:mb-4 text-2xl sm:text-3xl md:text-5xl transition-transform duration-300 group-hover:scale-110" style={{ color: skill.color }}>
                          <Icon />
                        </div>
                        
                        <span className="relative z-10 text-[10px] sm:text-xs md:text-sm font-bold text-gray-400 group-hover:text-white transition-colors duration-300 text-center uppercase tracking-wider">
                          {skill.name}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
