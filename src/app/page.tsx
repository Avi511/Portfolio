"use client";

import HeroSection from "../components/HeroSection";
import MarqueeSection from "../components/MarqueeSection";
import AboutSection from "../components/AboutSection";
import ServicesSection from "../components/ServicesSection";
import ProjectsSection from "../components/ProjectsSection";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

export default function Portfolio() {
  return (
    <div className="main-wrapper overflow-x-clip min-h-screen bg-[#0C0C0C]">
      <Navbar />
      <Sidebar />
      <HeroSection />
      <MarqueeSection />
      <AboutSection />
      <ServicesSection />
      <ProjectsSection />
    </div>
  );
}
