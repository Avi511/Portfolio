"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "A full-stack e-commerce solution with Next.js, Stripe, and Tailwind CSS. Features seamless checkout and responsive design.",
    github: "#",
    live: "#",
    gradient: "from-[#4facfe] to-[#00f2fe]",
  },
  {
    id: 2,
    title: "Task Management App",
    description: "Kanban board application built with React, Node.js, and MongoDB. Includes real-time collaboration and drag-and-drop.",
    github: "#",
    live: "#",
    gradient: "from-[#43e97b] to-[#38f9d7]",
  },
  {
    id: 3,
    title: "AI Image Generator",
    description: "SaaS platform for generating images using OpenAI API and Next.js. Integrates automated billing and user auth.",
    github: "#",
    live: "#",
    gradient: "from-[#fa709a] to-[#fee140]",
  },
  {
    id: 4,
    title: "Crypto Dashboard",
    description: "Real-time cryptocurrency tracking dashboard using WebSockets, Chart.js, and React.",
    github: "#",
    live: "#",
    gradient: "from-[#ff0844] to-[#ffb199]",
  },
  {
    id: 5,
    title: "Social Media Clone",
    description: "Fully functional social network with real-time chat, notifications, and post sharing.",
    github: "#",
    live: "#",
    gradient: "from-[#a18cd1] to-[#fbc2eb]",
  },
  {
    id: 6,
    title: "Portfolio Template",
    description: "Minimalist, highly customizable developer portfolio template optimized for SEO and performance.",
    github: "#",
    live: "#",
    gradient: "from-[#30cfd0] to-[#330867]",
  },
  {
    id: 7,
    title: "Fitness Tracker",
    description: "Mobile-first web app to track workouts and nutrition with data visualization features.",
    github: "#",
    live: "#",
    gradient: "from-[#0ba360] to-[#3cba92]",
  },
  {
    id: 8,
    title: "Weather App",
    description: "Beautiful weather forecasting app with interactive maps and predictive weather patterns.",
    github: "#",
    live: "#",
    gradient: "from-[#00c6fb] to-[#005bea]",
  },
  {
    id: 9,
    title: "Recipe Finder",
    description: "Search and save recipes based on ingredients. Built with React and Spoonacular API.",
    github: "#",
    live: "#",
    gradient: "from-[#f6d365] to-[#fda085]",
  },
  {
    id: 10,
    title: "Blog CMS",
    description: "Headless CMS blog using Next.js, Tailwind, and Sanity.io. Features markdown support and fast loading.",
    github: "#",
    live: "#",
    gradient: "from-[#f5576c] to-[#f093fb]",
  },
];

const ProjectCard = ({ project }: { project: any }) => (
  <div className="w-[280px] md:w-[400px] lg:w-[450px] shrink-0 rounded-2xl bg-[#121212] border border-white/10 overflow-hidden group relative hover:border-white/30 transition-colors shadow-lg">
    <div className={`w-full h-56 md:h-72 bg-gradient-to-br ${project.gradient} p-6 flex flex-col justify-end relative overflow-hidden`}>
      <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-500"></div>

      <div className="relative z-10 translate-y-6 group-hover:translate-y-0 transition-transform duration-500">
        <h3 className="text-xl md:text-2xl font-bold text-white mb-2" style={{ textShadow: '0 2px 8px rgba(0,0,0,0.8)' }}>
          {project.title}
        </h3>
        <p className="text-white/90 text-sm md:text-base line-clamp-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100" style={{ textShadow: '0 1px 4px rgba(0,0,0,0.8)' }}>
          {project.description}
        </p>
      </div>

      {/* Action Buttons overlay */}
      <div className="absolute top-4 right-4 flex gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20 translate-y-[-10px] group-hover:translate-y-0">
        <a href={project.github} className="w-10 h-10 rounded-full bg-black/60 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-primary hover:border-primary transition-all shadow-lg" title="View Source">
          <FaGithub size={18} />
        </a>
        <a href={project.live} className="w-10 h-10 rounded-full bg-black/60 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-primary hover:border-primary transition-all shadow-lg" title="Live Preview">
          <FaExternalLinkAlt size={16} />
        </a>
      </div>
    </div>
  </div>
);

const ScrollingRow = ({ projectsList, duration, reverse = false }: { projectsList: any[], duration: number, reverse?: boolean }) => {
  return (
    <div className="flex relative w-full overflow-hidden">
      <motion.div
        animate={{
          x: reverse ? ["calc(-50% - 12px)", "0%"] : ["0%", "calc(-50% - 12px)"],
        }}
        transition={{
          duration: duration,
          repeat: Infinity,
          ease: "linear",
        }}
        className="flex gap-6 w-max"
      >
        <div className="flex gap-6 w-max">
          {projectsList.map((project, idx) => (
            <ProjectCard key={`first-${project.id}-${idx}`} project={project} />
          ))}
        </div>
        <div className="flex gap-6 w-max">
          {projectsList.map((project, idx) => (
            <ProjectCard key={`second-${project.id}-${idx}`} project={project} />
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default function Projects() {
  return (
    <section id="projects" className="relative px-[5%] md:px-[10%] pt-32 pb-20 min-h-screen flex flex-col z-[1] justify-center">
      <div className="w-full max-w-[1600px] mx-auto flex flex-col flex-1 relative">
        <div className="text-primary font-bold text-[0.85rem] tracking-[1.5px] mb-4 uppercase text-center md:text-left z-10 w-full">
          MY PROJECTS
        </div>
        <div
          className="relative w-full flex flex-col gap-6 py-4 overflow-hidden"
          style={{
            maskImage: 'linear-gradient(to right, transparent, black 5%, black 95%, transparent)',
            WebkitMaskImage: 'linear-gradient(to right, transparent, black 5%, black 95%, transparent)'
          }}
        >
          {/* Row 1 (Scrolling Left) */}
          <ScrollingRow projectsList={projects.slice(0, 5)} duration={40} />

          {/* Row 2 (Scrolling Right) */}
          <ScrollingRow projectsList={projects.slice(5, 10)} duration={45} reverse />
        </div>
      </div>
    </section>
  );
}
