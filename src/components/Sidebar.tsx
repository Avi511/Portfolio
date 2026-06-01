"use client";

import FadeIn from "./FadeIn";
import { Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Sidebar() {
  return (
    <FadeIn delay={0.2} x={20} y={0} duration={0.8} as="div" className="fixed right-0 top-1/2 -translate-y-1/2 z-50 hidden md:block">
      <div className="flex flex-col items-center gap-6 py-8 px-4 bg-[#ffffff]/5 backdrop-blur-xl border border-white/10 border-r-0 rounded-l-3xl shadow-[0_8px_32px_0_rgba(0,0,0,0.37)] select-none">
        <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-[#D7E2EA] hover:text-white hover:scale-110 hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.8)] transition-all duration-300">
          <FaGithub size={24} />
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-[#D7E2EA] hover:text-white hover:scale-110 hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.8)] transition-all duration-300">
          <FaLinkedin size={24} />
        </a>
        <a href="mailto:contact@example.com" className="text-[#D7E2EA] hover:text-white hover:scale-110 hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.8)] transition-all duration-300">
          <Mail strokeWidth={1.5} size={24} />
        </a>
        <div className="w-[1px] h-16 bg-gradient-to-b from-[#D7E2EA]/50 to-transparent my-2" />
        <span className="text-[#D7E2EA] font-light tracking-widest text-sm uppercase whitespace-nowrap" style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}>
          Connect with me
        </span>
      </div>
    </FadeIn>
  );
}
