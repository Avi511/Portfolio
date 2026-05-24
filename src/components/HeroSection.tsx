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


    </div>
  );
}
