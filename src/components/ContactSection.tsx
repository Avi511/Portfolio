export default function ContactSection() {
  return (
    <section id="contact" className="relative w-full min-h-screen bg-white text-black py-32 px-6 overflow-hidden rounded-t-[3rem] -mt-[3rem] z-20">
      
      <div className="relative z-10 w-full max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-20 items-center h-full pt-10">
        
        {/* Left Content */}
        <div className="flex flex-col relative z-10">
          <h2 className="text-[5rem] md:text-[8rem] font-black uppercase tracking-tighter leading-[0.85] mb-8">
            LET'S <br/>
            GET IN <br/>
            TOUCH
          </h2>
          <a href="mailto:hello@echelon.agency" className="text-xl md:text-2xl font-bold underline underline-offset-8 decoration-4 hover:text-purple-600 transition-colors">
            hello@echelon.agency
          </a>
        </div>

        {/* Right Content: Form */}
        <div className="flex flex-col w-full max-w-lg md:ml-auto gap-8 relative z-10">
          <input 
            type="text" 
            placeholder="Full Name*" 
            className="w-full border-b border-gray-300 bg-transparent py-4 outline-none text-black placeholder:text-gray-500 focus:border-black transition-colors text-lg" 
          />
          
          <div className="flex flex-col gap-8 md:flex-row md:gap-6">
            <input 
              type="email" 
              placeholder="Email*" 
              className="w-full border-b border-gray-300 bg-transparent py-4 outline-none text-black placeholder:text-gray-500 focus:border-black transition-colors text-lg" 
            />
            <input 
              type="tel" 
              placeholder="Phone" 
              className="w-full border-b border-gray-300 bg-transparent py-4 outline-none text-black placeholder:text-gray-500 focus:border-black transition-colors text-lg" 
            />
          </div>

          <textarea 
            placeholder="Message" 
            rows={4}
            className="w-full border-b border-gray-300 bg-transparent py-4 outline-none text-black placeholder:text-gray-500 focus:border-black transition-colors resize-none text-lg" 
          ></textarea>

          <div className="pt-8 flex justify-center w-full">
            <button className="rounded-full border-2 border-gray-200 text-black font-bold uppercase tracking-widest px-16 py-4 hover:bg-black hover:text-white transition-colors duration-300 text-sm w-full md:w-auto">
              SEND
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
