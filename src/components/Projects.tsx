"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const projects = [
  {
    id: 1,
    title: "HealthSync",
    description: "Healthcare management system with appointment scheduling and patient records.",
    github: "https://github.com/Avi511/HealthSync",
    image: "/Projects/HealthSync.png",
  },
  {
    id: 2,
    title: "Readify",
    description: "Book tracking and reading application.",
    github: "https://github.com/BookNest-2025/BookNest",
    image: "/Projects/Readify.png",
  },
  {
    id: 3,
    title: "Prime Supermarket",
    description: "E-commerce platform for a supermarket chain.",
    github: "https://github.com/Avi511/PrimeSupermarket",
    live: "https://primesupermarket.netlify.app",
    image: "/Projects/Prime Supermarket.png",
  },
  {
    id: 4,
    title: "ExpoHub",
    description: "Event management and exhibition platform.",
    github: "https://github.com/Avi511/bookfair-stall-reservation-system",
    image: "/Projects/ExpoHub.png",
  },
  {
    id: 5,
    title: "TEDx UoK",
    description: "Official website for TEDx University of Kelaniya.",
    github: "https://github.com/Avi511/TEDx-UOK-Avishka",
    live: "https://tedxuok.org",
    image: "/Projects/TEDx UoK.png",
  },
  {
    id: 6,
    title: "Lane Drift Survival",
    description: "A fast-paced endless survival game.",
    github: "https://github.com/Avi511/Lane-Drift-Survival",
    live: "https://avi511.github.io/Lane-Drift-Survival",
    image: "/Projects/LaneDriftSurvival.png",
  },
  {
    id: 7,
    title: "Chat Pad",
    description: "Real-time chat application with group messaging.",
    github: "https://github.com/Avi511/Chat_Application",
    live: "https://chat-application-pi-rouge.vercel.app",
    image: "/Projects/Chat Pad.png",
  },
  {
    id: 8,
    title: "Élan Fragrance",
    description: "Luxurious online fragrance store.",
    github: "https://github.com/Avi511/Elanfragrance",
    live: "https://elanfragrance.vercel.app",
    image: "/Projects/Élan Fragrance.png",
  },
  {
    id: 9,
    title: "Portfolio",
    description: "My personal developer portfolio website.",
    github: "https://github.com/Avi511/Portfolio",
    live: "https://avishkaishan.vercel.app",
    image: "/Projects/Portfolio.png",
  },
  {
    id: 10,
    title: "CivicSense",
    description: "Community-driven issue reporting and civic engagement platform. - Hackathon Project",
    github: "https://github.com/Team-nova-04/JH",
    live: "https://civicsense-tau.vercel.app",
    image: "/Projects/CivicSense.png",
  },
];

const ProjectCard = ({ project }: { project: any }) => (
  <div className="w-[280px] md:w-[400px] lg:w-[450px] shrink-0 rounded-2xl bg-[#121212] border border-white/10 overflow-hidden group relative hover:border-white/30 transition-colors shadow-lg flex flex-col self-center">
    <div className="relative w-full aspect-video overflow-hidden bg-[#1a1a1a]">
      <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-500"></div>

      <div className="absolute bottom-0 left-0 right-0 p-6 flex flex-col justify-end z-10">
        <h3 className="text-lg md:text-xl font-semibold text-white mb-1 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-500" style={{ textShadow: '0 2px 8px rgba(0,0,0,0.8)' }}>
          {project.title}
        </h3>
        <p className="text-white/90 text-xs md:text-sm line-clamp-2 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-500 delay-100" style={{ textShadow: '0 1px 4px rgba(0,0,0,0.8)' }}>
          {project.description}
        </p>
      </div>

      {/* Action Buttons overlay */}
      <div className="absolute top-4 right-4 flex gap-3 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-500 z-20 md:-translate-y-2 md:group-hover:translate-y-0">
        {project.github && project.github !== "#" && (
          <a href={project.github} className="w-10 h-10 rounded-full bg-black/60 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-white hover:text-black hover:border-white transition-all shadow-lg" title="View Source">
            <FaGithub size={18} />
          </a>
        )}
        {project.live && project.live !== "#" && (
          <a href={project.live} className="w-10 h-10 rounded-full bg-black/60 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-white hover:text-black hover:border-white transition-all shadow-lg" title="Live Preview">
            <FaExternalLinkAlt size={16} />
          </a>
        )}
      </div>
    </div>
  </div>
);

const scrollStyles = `
  @keyframes scroll-left {
    0% { transform: translateX(0%); }
    100% { transform: translateX(calc(-50% - 12px)); }
  }
  @keyframes scroll-right {
    0% { transform: translateX(calc(-50% - 12px)); }
    100% { transform: translateX(0%); }
  }
  .animate-scroll-left {
    animation: scroll-left linear infinite;
  }
  .animate-scroll-right {
    animation: scroll-right linear infinite;
  }
  .pause-on-hover:hover {
    animation-play-state: paused;
  }
`;

const ScrollingRow = ({ projectsList, duration, reverse = false }: { projectsList: any[], duration: number, reverse?: boolean }) => {
  return (
    <div className="flex relative w-full overflow-hidden">
      <style>{scrollStyles}</style>
      <div
        className={`flex gap-6 w-max pause-on-hover ${reverse ? 'animate-scroll-right' : 'animate-scroll-left'}`}
        style={{ animationDuration: `${duration}s` }}
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
      </div>
    </div>
  );
};

export default function Projects() {
  return (
    <section id="projects" className="relative px-[5%] md:px-[10%] pt-32 pb-20 min-h-screen flex flex-col z-[1] justify-center">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="w-full max-w-[1600px] mx-auto flex flex-col flex-1 relative"
      >
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
          <ScrollingRow projectsList={projects.slice(0, 5)} duration={80} />

          {/* Row 2 (Scrolling Right) */}
          <ScrollingRow projectsList={projects.slice(5, 10)} duration={85} reverse />
        </div>
      </motion.div>
    </section>
  );
}
