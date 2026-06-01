"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import LiveProjectButton from "./LiveProjectButton";
import FadeIn from "./FadeIn";
import ContactButton from "./ContactButton";

const PROJECTS_DATA = [
  {
    num: "01",
    category: "Client",
    title: "Nextlevel Studio",
    images: {
      col1_1: "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055344_5eff02e0-87a5-41ce-b64f-eb08da8f33db.png&w=1280&q=85",
      col1_2: "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055431_11d841fd-8b41-46a5-82e4-b04f2407a7d8.png&w=1280&q=85",
      col2: "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055451_e317bf2d-28d4-48cc-86b0-6f72f25b6327.png&w=1280&q=85",
    },
  },
  {
    num: "02",
    category: "Personal",
    title: "Aura Brand Identity",
    images: {
      col1_1: "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055654_911201c5-36d9-4bc6-bac7-331adfce159f.png&w=1280&q=85",
      col1_2: "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055723_5ceda0b8-d9c2-4665-b2e3-83ba19ba76d1.png&w=1280&q=85",
      col2: "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055753_adc5dcbd-a8e6-49c0-b43a-9b030d835cea.png&w=1280&q=85",
    },
  },
  {
    num: "03",
    category: "Client",
    title: "Solaris Digital",
    images: {
      col1_1: "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055759_963cfb0b-4bd1-4b0f-9d0a-09bd6cf95b2f.png&w=1280&q=85",
      col1_2: "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_060108_438f781a-9846-4dcc-89ab-c4e6cb830f5b.png&w=1280&q=85",
      col2: "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055818_9d062121-ad7e-46b9-999a-1a6a692ef1ee.png&w=1280&q=85",
    },
  },
];

interface ProjectCardProps {
  project: typeof PROJECTS_DATA[number];
  index: number;
  totalCards: number;
}

function ProjectCard({ project, index, totalCards }: ProjectCardProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Track scroll of this card container relative to viewport top to trigger scale-down
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const targetScale = 1 - (totalCards - 1 - index) * 0.03;
  const scale = useTransform(scrollYProgress, [0, 1], [1, targetScale]);

  // Position cards offset slightly when stacked
  // index * 28px offset from top
  const topOffset = `calc(${index * 28}px + clamp(5rem, 8vw, 7rem))`;

  return (
    <div
      ref={containerRef}
      className="relative w-full h-[85vh] flex items-start justify-center"
    >
      <motion.div
        style={{
          scale,
          top: topOffset,
        }}
        className="sticky w-full max-w-5xl rounded-[30px] sm:rounded-[50px] md:rounded-[60px] border-2 border-[#D7E2EA] bg-[#0C0C0C] p-4 sm:p-6 md:p-8 flex flex-col gap-4 sm:gap-6 md:gap-8 will-change-transform shadow-2xl"
      >
        {/* Card Header Top Row */}
        <div className="flex items-center justify-between gap-4 w-full">
          <div className="flex items-center gap-3 sm:gap-5 md:gap-7">
            {/* Project Index Number */}
            <span
              className="font-black text-[#D7E2EA] leading-none select-none flex-shrink-0"
              style={{ fontSize: "clamp(2rem, 6vw, 5rem)" }}
            >
              {project.num}
            </span>

            {/* Category and Title */}
            <div className="flex flex-col text-left">
              <span className="text-xs sm:text-sm uppercase tracking-wider text-[#D7E2EA]/60 font-light">
                {project.category}
              </span>
              <h3 className="text-sm sm:text-lg md:text-2xl lg:text-3xl font-semibold uppercase text-[#D7E2EA] tracking-wide mt-0.5">
                {project.title}
              </h3>
            </div>
          </div>

          {/* Ghost button */}
          <div className="flex-shrink-0 scale-75 sm:scale-90 md:scale-100 origin-right">
            <LiveProjectButton />
          </div>
        </div>

        {/* Card Bottom Row - Two-Column Grid */}
        <div className="grid grid-cols-10 gap-3 sm:gap-5 md:gap-6 flex-1 items-stretch">
          {/* Left Column (40% width) */}
          <div className="col-span-4 flex flex-col gap-3 sm:gap-5 md:gap-6">
            <div
              className="w-full overflow-hidden rounded-[20px] sm:rounded-[35px] md:rounded-[45px]"
              style={{ height: "clamp(100px, 16vw, 230px)" }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={project.images.col1_1}
                alt={`${project.title} screenshot 1`}
                className="w-full h-full object-cover select-none"
                draggable={false}
              />
            </div>
            <div
              className="w-full overflow-hidden rounded-[20px] sm:rounded-[35px] md:rounded-[45px]"
              style={{ height: "clamp(120px, 22vw, 340px)" }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={project.images.col1_2}
                alt={`${project.title} screenshot 2`}
                className="w-full h-full object-cover select-none"
                draggable={false}
              />
            </div>
          </div>

          {/* Right Column (60% width) */}
          <div className="col-span-6 h-full flex">
            <div className="w-full h-full overflow-hidden rounded-[20px] sm:rounded-[35px] md:rounded-[45px]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={project.images.col2}
                alt={`${project.title} showcase tall`}
                className="w-full h-full object-cover select-none"
                draggable={false}
              />
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default function ProjectsSection() {
  const totalCards = PROJECTS_DATA.length;

  return (
    <section
      id="projects"
      className="bg-[#0C0C0C] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] -mt-10 sm:-mt-12 md:-mt-14 pt-16 sm:pt-20 md:pt-24 pb-20 px-4 sm:px-6 md:px-8 relative z-10 flex flex-col items-center"
    >
      <div className="max-w-5xl w-full flex flex-col">
        {/* Projects Heading */}
        <FadeIn delay={0} y={40} duration={0.7} className="w-full text-center mb-10 sm:mb-14">
          <h2
            className="hero-heading font-black uppercase tracking-tight leading-none text-center select-none"
            style={{ fontSize: "clamp(3rem, 12vw, 160px)" }}
          >
            Project
          </h2>
        </FadeIn>

        {/* Stacking Card List */}
        <div className="flex flex-col gap-0 w-full mt-4">
          {PROJECTS_DATA.map((project, index) => (
            <ProjectCard
              key={project.num}
              project={project}
              index={index}
              totalCards={totalCards}
            />
          ))}
        </div>

        {/* Contact Form Section */}
        <div
          id="contact-form-section"
          className="w-full max-w-xl mx-auto mt-28 sm:mt-36 md:mt-44 pt-16 border-t border-[#D7E2EA]/10 flex flex-col items-center"
        >
          <FadeIn delay={0.1} y={30} duration={0.8} className="w-full text-center">
            <h2 className="hero-heading font-black uppercase text-[2.5rem] sm:text-[4rem] tracking-tight leading-none mb-4 select-none">
              Get In Touch
            </h2>
            <p className="text-[#D7E2EA] opacity-60 text-sm sm:text-base font-light mb-8 max-w-sm mx-auto">
              Ready to start your next 3D project or have a question? Drop me a message below.
            </p>
          </FadeIn>

          <FadeIn delay={0.2} y={30} duration={0.8} className="w-full">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                alert("Message sent! Jack will get back to you shortly.");
                (e.target as HTMLFormElement).reset();
              }}
              className="flex flex-col gap-4 text-left w-full"
            >
              <div>
                <label className="text-xs text-[#D7E2EA]/60 uppercase tracking-wider block mb-1">
                  Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="Your Name"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#B600A8] transition-colors font-light text-sm sm:text-base"
                />
              </div>

              <div>
                <label className="text-xs text-[#D7E2EA]/60 uppercase tracking-wider block mb-1">
                  Email
                </label>
                <input
                  type="email"
                  required
                  placeholder="your.email@example.com"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#B600A8] transition-colors font-light text-sm sm:text-base"
                />
              </div>

              <div>
                <label className="text-xs text-[#D7E2EA]/60 uppercase tracking-wider block mb-1">
                  Message
                </label>
                <textarea
                  rows={4}
                  required
                  placeholder="Tell me about your project..."
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#B600A8] transition-colors resize-none font-light text-sm sm:text-base"
                />
              </div>

              <div className="flex justify-center mt-4">
                <ContactButton label="Send Message" type="submit" />
              </div>
            </form>
          </FadeIn>

          {/* Minimalist Footer */}
          <div className="mt-20 text-center text-[#D7E2EA]/30 text-xs tracking-widest uppercase py-4 select-none">
            &copy; {new Date().getFullYear()} JACK. All rights reserved.
          </div>
        </div>
      </div>
    </section>
  );
}
