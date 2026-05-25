"use client";

import { useEffect, useState } from "react";
import { Menu, X, ShieldAlert } from "lucide-react";

const NAV_ITEMS = [
  { name: "Home", page: 0 },
  { name: "About", page: 1 },
  { name: "Skills", page: 2 },
  { name: "Projects", page: 3 },
  { name: "Articles", page: 4 },
  { name: "Volunteering", page: 5 },
  { name: "Contact", page: 6 },
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const container = (window as any).scrollContainer;
      if (container) {
        const scrollPos = container.scrollTop;
        const height = window.innerHeight;
        // Add a small threshold (e.g. height * 0.4) to trigger active state earlier
        const index = Math.round(scrollPos / height);
        setActiveSection(index);
      }
    };

    // Poll for the scroll container to be available, then attach listener
    const interval = setInterval(() => {
      const container = (window as any).scrollContainer;
      if (container) {
        container.addEventListener("scroll", handleScroll);
        // Run once initially to capture initial position
        handleScroll();
        clearInterval(interval);
      }
    }, 100);

    return () => {
      clearInterval(interval);
      const container = (window as any).scrollContainer;
      if (container) {
        container.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);

  const handleNavClick = (pageIndex: number) => {
    const container = (window as any).scrollContainer;
    if (container) {
      container.scrollTo({
        top: pageIndex * window.innerHeight,
        behavior: "smooth",
      });
      setActiveSection(pageIndex);
      setIsOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-black/60 border-b border-white/5 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <div 
          onClick={() => handleNavClick(0)}
          className="flex items-center gap-2 cursor-pointer group"
        >
          <div className="w-8 h-8 rounded-full bg-red-600 flex items-center justify-center text-white font-bold text-lg shadow-[0_0_15px_rgba(220,38,38,0.5)] group-hover:scale-110 transition-transform duration-300">
            S
          </div>
          <span className="font-paytone tracking-wider text-xl text-white group-hover:text-red-500 transition-colors duration-300">
            SPIDEY<span className="text-red-600">.DEV</span>
          </span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8 font-outfit text-sm font-medium tracking-wide">
          {NAV_ITEMS.map((item) => {
            const isActive = activeSection === item.page;
            return (
              <button
                key={item.name}
                onClick={() => handleNavClick(item.page)}
                className={`relative py-2 text-white/70 hover:text-white transition-colors duration-300 cursor-pointer ${
                  isActive ? "text-white font-bold" : ""
                }`}
              >
                {item.name}
                {/* Active Indicator Underline */}
                <span 
                  className={`absolute bottom-0 left-0 w-full h-[2px] bg-red-600 shadow-[0_0_8px_#dc2626] transition-transform duration-300 origin-left ${
                    isActive ? "scale-x-100" : "scale-x-0"
                  }`}
                />
              </button>
            );
          })}
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white hover:text-red-500 transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Dropdown */}
      <div 
        className={`md:hidden absolute top-16 left-0 w-full bg-black/95 backdrop-blur-lg border-b border-white/5 overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-80 opacity-100 py-4" : "max-h-0 opacity-0"
        }`}
      >
        <div className="flex flex-col px-6 gap-4 font-outfit">
          {NAV_ITEMS.map((item) => {
            const isActive = activeSection === item.page;
            return (
              <button
                key={item.name}
                onClick={() => handleNavClick(item.page)}
                className={`text-left py-2 text-base transition-colors ${
                  isActive ? "text-red-500 font-bold border-l-2 border-red-600 pl-2" : "text-white/70 hover:text-white"
                }`}
              >
                {item.name}
              </button>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
