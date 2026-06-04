"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    // Check on mount in case we start scrolled down
    handleScroll();

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-50% 0px -50% 0px' }
    );

    const sections = document.querySelectorAll('section[id]');
    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Blog', href: '#blog' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 flex justify-between items-center px-[5%] md:px-[10%] py-4 md:py-5 transition-all duration-300 ${isScrolled ? 'bg-[#121212]/90 backdrop-blur-md border-b border-white/5' : 'bg-transparent border-transparent'}`}>
      <div className="text-[1.8rem] font-extrabold tracking-[0.5px]">Avishka.</div>

      {/* Desktop Menu */}
      <ul className="hidden md:flex gap-10 list-none m-0 p-0">
        {navLinks.map((link) => {
          const isActive = activeSection === link.href.substring(1);
          return (
            <li key={link.name}>
              <Link
                href={link.href}
                className={`pb-1 text-[0.9rem] font-medium transition-colors duration-300 ${isActive ? 'text-foreground border-b-2 border-primary' : 'text-muted hover:text-foreground'}`}
              >
                {link.name}
              </Link>
            </li>
          );
        })}
      </ul>
      {/* Mobile Menu Button */}
      <button className="md:hidden bg-transparent border-none cursor-pointer text-foreground z-[100]" onClick={toggleMenu} aria-label="Toggle menu">
        {isOpen ? (
          <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="3" y1="12" x2="21" y2="12"></line>
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <line x1="3" y1="18" x2="21" y2="18"></line>
          </svg>
        )}
      </button>

      {/* Mobile Menu Overlay */}
      <div className={`fixed top-0 left-0 w-full h-[100vh] bg-[#121212f2] backdrop-blur-[10px] flex flex-col justify-center items-center z-[90] transition-transform duration-300 ease-in-out md:hidden ${isOpen ? 'translate-y-0' : '-translate-y-full'}`}>
        <ul className="flex flex-col items-center gap-8 mb-8 list-none p-0">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className={`pb-1 text-[1.5rem] font-medium transition-colors ${isActive ? 'text-foreground border-b-2 border-primary' : 'text-muted hover:text-foreground'}`}
                  onClick={closeMenu}
                >
                  {link.name}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}
