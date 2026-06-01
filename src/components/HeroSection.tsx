"use client";

import ContactButton from "./ContactButton";
import Magnet from "./Magnet";
import FadeIn from "./FadeIn";

export default function HeroSection() {
  const handleScrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative h-screen w-full flex flex-col justify-between bg-[#0C0C0C] overflow-hidden px-6 md:px-10 pb-7 sm:pb-8 md:pb-10">
      {/* Top spacing to account for fixed global Navbar */}
      <div className="w-full pt-16 md:pt-20"></div>

      {/* Hero Portrait - Centered absolutely */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 sm:top-auto sm:translate-y-0 sm:bottom-0 z-10 pointer-events-none">
        <FadeIn delay={0.6} y={30} duration={0.8}>
          <Magnet
            padding={150}
            strength={3}
            activeTransition="transform 0.3s ease-out"
            inactiveTransition="transform 0.6s ease-in-out"
            className="pointer-events-auto"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://shrug-person-78902957.figma.site/_components/v2/d24c01ad3a56fc65e942a1f501eb73db42d7cf9a/Rectangle_40443.81459862.png"
              alt="Jack Portrait"
              className="w-[280px] sm:w-[360px] md:w-[440px] lg:w-[520px] h-auto object-contain select-none"
              draggable={false}
            />
          </Magnet>
        </FadeIn>
      </div>

      {/* Hero Heading Container - Center content */}
      <div className="flex-1 flex items-center justify-center overflow-hidden z-0 pointer-events-none select-none">
        <FadeIn delay={0.15} y={40} duration={0.8} className="w-full">
          <h1 className="hero-heading font-black uppercase tracking-tight leading-none text-center whitespace-nowrap w-full text-[14vw] sm:text-[15vw] md:text-[16vw] lg:text-[17.5vw] mt-6 sm:mt-4 md:-mt-5 select-none">
            Hi, i&apos;m jack
          </h1>
        </FadeIn>
      </div>

      {/* Bottom Bar: Left: Paragraph, Right: ContactButton */}
      <div className="flex justify-between items-end w-full z-20 pointer-events-none">
        {/* Left text */}
        <div className="pointer-events-auto select-none">
          <FadeIn delay={0.35} y={20} duration={0.8}>
            <p className="text-[#D7E2EA] font-light uppercase tracking-wide leading-snug text-left max-w-[160px] sm:max-w-[220px] md:max-w-[260px]" style={{ fontSize: "clamp(0.75rem, 1.4vw, 1.5rem)" }}>
              a 3d creator driven by crafting striking and unforgettable projects
            </p>
          </FadeIn>
        </div>

        {/* Right Contact button */}
        <div className="pointer-events-auto">
          <FadeIn delay={0.5} y={20} duration={0.8}>
            <ContactButton onClick={() => handleScrollTo("about")} />
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
