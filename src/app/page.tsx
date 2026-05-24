import Navbar from "@/components/Navbar";
import SocialSidebar from "@/components/SocialSidebar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import ProjectsSection from "@/components/ProjectsSection";
import ArticlesSection from "@/components/ArticlesSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="relative min-h-screen w-full bg-black flex flex-col font-outfit">
      {/* Background Glow */}
      <div className="glow-bg"></div>

      <Navbar />

      {/* Main Content Area */}
      <main className="relative z-10 flex w-full flex-col">
        <SocialSidebar />
        
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ArticlesSection />
        <ContactSection />
        <Footer />
      </main>
    </div>
  );
}
