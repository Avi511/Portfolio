"use client";

import { Scan } from "lucide-react";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [isContact, setIsContact] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const contactSection = document.getElementById("contact");
      if (contactSection) {
        const rect = contactSection.getBoundingClientRect();
        // Trigger the transition when the contact section starts passing behind the navbar (70px from top)
        if (rect.top <= 70) {
          setIsContact(true);
        } else {
          setIsContact(false);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    // Initial check on mount
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-6 left-1/2 -translate-x-1/2 z-50 flex w-[90%] max-w-6xl items-center justify-between px-6 md:px-10 py-3 rounded-full transition-all duration-300 ${
        isContact 
          ? "bg-black/90 backdrop-blur-md border border-white/20 shadow-[0_8px_32px_rgba(0,0,0,0.8)]" 
          : "bg-white/[0.03] backdrop-blur-xl border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.5)] hover:bg-white/[0.05] hover:border-white/15"
      }`}
    >
      <Link href="#" className="flex items-center gap-3">
        <div className="flex items-center justify-center w-10 h-10 bg-white rounded-full shrink-0 shadow-lg shadow-white/10">
          <Scan className="w-5 h-5 text-black" />
        </div>
        <span className="text-white text-xl font-bold tracking-tight hidden sm:block">Avishka Ishan</span>
      </Link>
      
      <div className="hidden md:flex items-center gap-8 pr-2">
        <Link href="#about" className="text-white/70 hover:text-white font-bold transition-colors text-xs uppercase tracking-widest">About</Link>
        <Link href="#skills" className="text-white/70 hover:text-white font-bold transition-colors text-xs uppercase tracking-widest">Skills</Link>
        <Link href="#projects" className="text-white/70 hover:text-white font-bold transition-colors text-xs uppercase tracking-widest">Projects</Link>
        <Link href="#articles" className="text-white/70 hover:text-white font-bold transition-colors text-xs uppercase tracking-widest">Articles</Link>
        <Link href="#contact" className={`font-bold transition-colors text-xs uppercase tracking-widest ${isContact ? "text-purple-400 hover:text-purple-300" : "text-white/70 hover:text-white"}`}>Contact</Link>
      </div>
    </nav>
  );
}
