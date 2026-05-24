import Image from "next/image";

export default function AboutSection() {
  return (
    <section className="relative w-full min-h-screen flex flex-col items-center justify-center py-20 px-6 bg-black overflow-hidden">
      
      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center text-center max-w-4xl px-4">
        <h2 className="text-[4rem] md:text-[8rem] font-black text-white uppercase tracking-tighter mb-12 drop-shadow-2xl leading-none">
          ABOUT ME
        </h2>
        
        <p className="text-lg md:text-2xl text-gray-200 font-semibold leading-relaxed md:leading-10 mb-16 drop-shadow-md max-w-3xl">
          With over five years of experience in design,<br className="hidden md:block"/>
          I specialize in branding, web design, and user experience.<br className="hidden md:block"/>
          I love collaborating with businesses that want to stand out<br className="hidden md:block"/>
          and showcase their best side.<br className="hidden md:block"/>
          Let's create something amazing together!
        </p>
        
        <button className="relative px-12 py-5 rounded-full bg-black text-white font-bold tracking-widest uppercase overflow-hidden group hover:scale-105 transition-transform duration-300">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-700 via-purple-500 to-orange-400 opacity-90 blur-[2px] group-hover:opacity-100 transition-opacity duration-300"></div>
          <div className="absolute inset-[2px] bg-black rounded-full z-0"></div>
          <span className="relative z-10 text-sm md:text-base drop-shadow-[0_0_10px_rgba(255,255,255,0.8)] text-white font-extrabold">
            CONTACT ME
          </span>
        </button>
      </div>
    </section>
  );
}
