import Navbar from "@/components/Navbar";
import SocialSidebar from "@/components/SocialSidebar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import ProjectsSection from "@/components/ProjectsSection";

export default function Home() {
  return (
    <div className="relative min-h-screen w-full bg-black flex flex-col font-outfit">
      {/* Background Glow */}
      <div className="glow-bg opacity-40"></div>

      <Navbar />

      {/* Main Content Area */}
      <main className="relative z-10 flex w-full flex-col">
        <SocialSidebar />
        
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
      </main>
    </div>
  );
}
