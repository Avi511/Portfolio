import Image from "next/image";

export default function HeroSection() {
  return (
    <div className="relative w-full min-h-screen flex flex-col items-center justify-center pt-10">

      {/* Huge Background Text */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
        <h1 className="text-[10vw] mt-[-50px] leading-[1] font-black text-[#e5e5e5] text-center drop-shadow-2xl flex flex-col">
          <span>Hi, Welcome To</span>
          <span>My Portfolio</span>
        </h1>
      </div>

      {/* Center 3D Spline Robot (Iframe Embed) */}
      <div className="relative z-20 flex items-center justify-center w-full max-w-4xl h-[600px] mt-10 pointer-events-auto">
        <iframe 
          src="https://my.spline.design/6Wq1Q7YGyMswTuM3/" 
          frameBorder="0" 
          width="100%" 
          height="100%" 
          title="3D Spline Robot"
          className="drop-shadow-[0_20px_50px_rgba(0,0,0,0.8)]"
        ></iframe>
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
