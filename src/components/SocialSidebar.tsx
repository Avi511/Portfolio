"use client";

import { FiGithub, FiLinkedin, FiFacebook, FiInstagram, FiMail } from "react-icons/fi";
import { useState, useEffect } from "react";

export default function SocialSidebar() {
  const [isContact, setIsContact] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const contactSection = document.getElementById("contact");
      if (contactSection) {
        const rect = contactSection.getBoundingClientRect();
        // Since the sidebar is vertically centered (top-1/2), it starts overlapping 
        // with the contact section once the top of the contact section reaches the middle of the screen.
        if (rect.top <= window.innerHeight / 2) {
          setIsContact(true);
        } else {
          setIsContact(false);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div 
      className={`fixed left-6 top-1/2 -translate-y-1/2 z-30 flex flex-col gap-4 p-3 rounded-full transition-all duration-300 ${
        isContact 
          ? "bg-black/90 backdrop-blur-md border border-white/20 shadow-[0_8px_32px_rgba(0,0,0,0.8)]" 
          : "bg-white/[0.03] backdrop-blur-xl border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.5)] hover:bg-white/[0.05] hover:border-white/15"
      }`}
    >
      <button className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/15 transition-all duration-300 border border-white/5 hover:border-white/20 hover:scale-110 group cursor-pointer">
        <FiGithub className="w-4 h-4 text-white/80 group-hover:text-white group-hover:scale-110 transition-all duration-300" />
      </button>
      <button className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/15 transition-all duration-300 border border-white/5 hover:border-white/20 hover:scale-110 group cursor-pointer">
        <FiLinkedin className="w-4 h-4 text-white/80 group-hover:text-white group-hover:scale-110 transition-all duration-300" />
      </button>
      <button className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/15 transition-all duration-300 border border-white/5 hover:border-white/20 hover:scale-110 group cursor-pointer">
        <FiFacebook className="w-4 h-4 text-white/80 group-hover:text-white group-hover:scale-110 transition-all duration-300" />
      </button>
      <button className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/15 transition-all duration-300 border border-white/5 hover:border-white/20 hover:scale-110 group cursor-pointer">
        <FiInstagram className="w-4 h-4 text-white/80 group-hover:text-white group-hover:scale-110 transition-all duration-300" />
      </button>
      <button className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/15 transition-all duration-300 border border-white/5 hover:border-white/20 hover:scale-110 group cursor-pointer">
        <FiMail className="w-4 h-4 text-white/80 group-hover:text-white group-hover:scale-110 transition-all duration-300" />
      </button>
    </div>
  );
}
