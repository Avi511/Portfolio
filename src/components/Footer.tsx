export default function Footer() {
  return (
    <footer className="relative w-full bg-transparent text-white pt-24 pb-12 px-8 md:px-16 rounded-t-[3rem] -mt-[3rem] z-30 flex flex-col justify-between overflow-hidden border-t border-white/10">
      
      <div className="flex flex-col md:flex-row justify-between items-start w-full max-w-7xl mx-auto gap-16 mb-32">
        {/* Left: Outline Text */}
        <div className="flex flex-col leading-none">
          <h2 className="text-[5rem] md:text-[7rem] font-black tracking-widest text-transparent" style={{ WebkitTextStroke: '2px white' }}>
            AVISHKA
          </h2>
          <h2 className="text-[5rem] md:text-[7rem] font-black tracking-widest text-transparent" style={{ WebkitTextStroke: '2px white' }}>
            ISHAN
          </h2>
        </div>

        {/* Right: Columns */}
        <div className="flex gap-16 md:gap-32 mt-4">
          {/* Social */}
          <div className="flex flex-col gap-4">
            <h4 className="font-bold text-xs tracking-widest uppercase mb-2">Social</h4>
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">GitHub</a>
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">LinkedIn</a>
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Facebook</a>
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Instagram</a>
          </div>

          {/* Contact */}
          <div className="flex flex-col gap-4">
            <h4 className="font-bold text-xs tracking-widest uppercase mb-2">Contact</h4>
            <a href="mailto:avishkaishan@gmail.com" className="text-gray-400 hover:text-white text-sm transition-colors">avishkaishan@gmail.com</a>
            <span className="text-gray-400 text-sm">Kandy, Sri Lanka</span>
          </div>
        </div>
      </div>

      {/* Decorative Geometric Shapes Row */}
      <div className="w-full max-w-7xl mx-auto flex items-center justify-between gap-4 md:gap-8 flex-wrap">
        
        {/* Shape 1: Cross / Clover (Light Purple) */}
        <svg viewBox="0 0 80 80" className="w-24 h-24 md:w-32 md:h-32 fill-[#e9d5ff] shrink-0">
          <path d="M40 0 C 70 0 70 40 40 40 C 70 40 70 80 40 80 C 10 80 10 40 40 40 C 10 40 10 0 40 0 Z" />
        </svg>

        {/* Shape 2: Pink 2x2 grid */}
        <div className="grid grid-cols-2 gap-2 w-24 h-24 md:w-32 md:h-32 shrink-0">
          <div className="bg-pink-500 rounded-full w-full h-full"></div>
          <div className="bg-pink-500 rounded-full w-full h-full"></div>
          <div className="bg-pink-500 rounded-full w-full h-full"></div>
          <div className="bg-pink-500 rounded-full w-full h-full"></div>
        </div>

        {/* Shape 3: White Pacman-ish shape */}
        <div className="w-24 h-24 md:w-32 md:h-32 bg-white rounded-full relative overflow-hidden shrink-0">
          <div className="absolute top-0 right-0 w-12 h-12 md:w-16 md:h-16 bg-black rounded-bl-full"></div>
        </div>

        {/* Shape 4: Solid Purple Circle */}
        <div className="w-24 h-24 md:w-32 md:h-32 bg-purple-500 rounded-full shrink-0"></div>

        {/* Shape 5: White Slanted line */}
        <svg viewBox="0 0 80 80" className="w-24 h-24 md:w-32 md:h-32 fill-white shrink-0">
          <polygon points="30,0 80,0 50,80 0,80" />
        </svg>

        {/* Shape 6: Orange Half Circles */}
        <div className="flex gap-1 md:gap-2 w-24 h-24 md:w-32 md:h-32 shrink-0">
          <div className="flex-1 bg-orange-500 rounded-l-full"></div>
          <div className="flex-1 bg-orange-500 rounded-r-full"></div>
        </div>

        {/* Shape 7: White Triangle */}
        <div className="w-0 h-0 border-l-[48px] md:border-l-[64px] border-r-[48px] md:border-r-[64px] border-b-[96px] md:border-b-[128px] border-transparent border-b-white shrink-0"></div>

        {/* Shape 8: Pink Ring */}
        <div className="w-24 h-24 md:w-32 md:h-32 border-[20px] md:border-[24px] border-pink-500 rounded-full shrink-0"></div>

      </div>

    </footer>
  );
}
