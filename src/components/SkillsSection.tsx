export default function SkillsSection() {
  const skills = [
    { name: "Figma", category: "Design" },
    { name: "React", category: "Frontend" },
    { name: "Next.js", category: "Frontend" },
    { name: "Tailwind CSS", category: "Frontend" },
    { name: "TypeScript", category: "Language" },
    { name: "Node.js", category: "Backend" },
    { name: "Framer Motion", category: "Animation" },
    { name: "Three.js", category: "3D" },
  ];

  return (
    <section id="skills" className="relative w-full min-h-screen flex flex-col items-center justify-center py-20 px-6 bg-black text-white overflow-hidden">
      <div className="relative z-10 flex flex-col items-center w-full max-w-6xl">
        <h2 className="text-[4rem] md:text-[8rem] font-black uppercase tracking-tighter mb-16 drop-shadow-2xl leading-none text-center">
          MY SKILLS
        </h2>

        <div className="flex flex-wrap justify-center gap-4 md:gap-6 w-full">
          {skills.map((skill, index) => (
            <div 
              key={index}
              className="group relative px-8 py-6 md:px-12 md:py-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 cursor-default flex flex-col items-center justify-center overflow-hidden hover:scale-105 hover:-translate-y-2"
            >
              {/* Subtle gradient glow on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-orange-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <span className="relative z-10 text-xl md:text-3xl font-bold tracking-wide text-gray-200 group-hover:text-white transition-colors duration-300">
                {skill.name}
              </span>
              <span className="relative z-10 text-xs md:text-sm font-medium text-gray-500 uppercase tracking-widest mt-2 group-hover:text-gray-300 transition-colors duration-300">
                {skill.category}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
