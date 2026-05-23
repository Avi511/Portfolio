import Navbar from "@/components/Navbar";
import SocialSidebar from "@/components/SocialSidebar";
import HeroSection from "@/components/HeroSection";

export default function Home() {
  return (
    <div className="relative min-h-screen w-full bg-black flex flex-col font-outfit">
      {/* Background Glow */}
      <div className="glow-bg opacity-40"></div>

      <Navbar />

      {/* Main Content Area */}
      <main className="relative z-10 flex-1 flex w-full overflow-hidden">
        <SocialSidebar />
        
        <HeroSection />
      </main>
    </div>
  );
}
