"use client";

import FadeIn from "./FadeIn";

export default function Navbar() {
  const handleScrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const navLinks = [
    { name: "About", id: "about" },
    { name: "Skills", id: "skills" },
    { name: "Projects", id: "projects" },
    { name: "Articles", id: "articles" },
    { name: "Volunteering", id: "volunteering" },
    { name: "Contact Me", id: "contact" },
  ];

  return (
    <FadeIn delay={0} y={-20} duration={0.8} as="div" className="fixed top-8 left-1/2 -translate-x-1/2 z-50 w-[95%] md:w-[85%] max-w-5xl">
      <nav className="flex justify-between items-center px-8 md:px-14 py-5 md:py-6 rounded-[40px] border border-white/10 bg-[#ffffff]/5 backdrop-blur-2xl shadow-[0_8px_32px_0_rgba(0,0,0,0.37)] font-medium uppercase tracking-widest text-[#D7E2EA] text-[10px] sm:text-xs md:text-sm lg:text-[15px] select-none overflow-x-auto no-scrollbar">
        {navLinks.map((link) => (
          <a
            key={link.id}
            href={`#${link.id}`}
            onClick={(e) => {
              e.preventDefault();
              handleScrollTo(link.id);
            }}
            className="hover:text-white hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.8)] transition-all duration-300 relative group whitespace-nowrap"
          >
            {link.name}
            <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-gradient-to-r from-transparent via-[#D7E2EA] to-transparent transition-all duration-300 group-hover:w-full"></span>
          </a>
        ))}
      </nav>
    </FadeIn>
  );
}
