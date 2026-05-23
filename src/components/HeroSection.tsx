import Image from "next/image";

export default function HeroSection() {
  return (
    <div className="relative w-full flex-1 flex flex-col items-center justify-center pt-10">

      {/* Huge Background Text - Split */}
      <div className="absolute inset-0 flex items-center justify-between px-[5%] pointer-events-none z-0">
        <h1 className="text-[12vw] leading-none font-black text-[#e5e5e5] tracking-tighter whitespace-nowrap drop-shadow-2xl translate-y-[-10%]">
          HI, I'M
        </h1>
        <h1 className="text-[12vw] leading-none font-black text-[#e5e5e5] tracking-tighter whitespace-nowrap drop-shadow-2xl translate-y-[-10%]">
          AVISHKA
        </h1>
      </div>

      {/* Center 3D Avatar */}
      <div className="relative z-20 flex items-center justify-center w-full max-w-2xl h-[600px] mt-10">
        <Image
          src="/avatar-transparent.png"
          alt="3D Avatar"
          fill
          className="object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.8)]"
          priority
        />
      </div>

      {/* Left Description Text */}
      <div className="absolute left-[15%] top-[55%] z-30 max-w-[200px]">
        <p className="text-white/90 text-sm font-semibold tracking-wider leading-relaxed uppercase">
          A 3D designer passionate about crafting bold and memorable projects 😍
        </p>
      </div>

      {/* Right Contact Button */}
      <div className="absolute right-[15%] top-[55%] z-30">
        <button className="relative px-8 py-4 rounded-full bg-black border border-white/20 text-white font-bold tracking-widest uppercase overflow-hidden group hover:scale-105 transition-transform duration-300">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-pink-500 to-orange-500 opacity-60 blur-md group-hover:opacity-100 transition-opacity duration-300"></div>
          <div className="absolute inset-[1px] bg-black rounded-full z-0"></div>
          <span className="relative z-10 text-sm drop-shadow-[0_0_10px_rgba(255,255,255,0.8)] text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-300">
            Contact Me
          </span>
        </button>
      </div>

    </div>
  );
}
