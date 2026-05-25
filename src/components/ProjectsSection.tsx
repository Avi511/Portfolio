import Image from "next/image";

export default function ProjectsSection() {
  const projects = [
    {
      id: "01",
      client: "Skyline Studios",
      images: ["/project4.png", "/project1.png"]
    },
    {
      id: "02",
      client: "Pixel Forge",
      images: ["/project3.png", "/project2.png"]
    },
    {
      id: "03",
      client: "Nova Dynamics",
      images: ["/project1.png", "/project3.png"]
    },
    {
      id: "04",
      client: "Zenith AI",
      images: ["/project2.png", "/project4.png"]
    },
    {
      id: "05",
      client: "Quantum Labs",
      images: ["/project4.png", "/project2.png"]
    },
    {
      id: "06",
      client: "Personal Portfolio",
      images: ["/project3.png", "/project1.png"]
    }
  ];

  return (
    <section id="projects" className="relative w-full flex flex-col items-center pt-32 pb-[50vh] px-4 md:px-8 bg-transparent text-white">
      <div className="relative w-full max-w-6xl flex flex-col gap-32 md:gap-40">

        {/* Section Title */}
        <div className="w-full text-center">
          <h2 className="text-[4rem] md:text-[8rem] font-black uppercase tracking-tighter drop-shadow-2xl leading-none">
            PROJECTS
          </h2>
        </div>

        {projects.map((project, index) => (
          <div
            key={project.id}
            className="sticky w-full border border-white/20 rounded-[3rem] bg-[#050505] p-6 md:p-10 shadow-2xl flex flex-col gap-8 transition-transform duration-500"
            style={{
              top: `${100 + index * 40}px`,
              zIndex: 10 + index
            }}
          >
            {/* Header */}
            <div className="flex justify-between items-start w-full px-2 md:px-4">
              <div className="flex gap-4 md:gap-8 items-center">
                <span className="text-[4rem] md:text-[7rem] font-black leading-none tracking-tighter text-white">
                  {project.id}
                </span>
                <div className="flex flex-col mt-1 md:mt-2">
                  <span className="text-[10px] md:text-xs text-gray-500 font-bold tracking-[0.2em] uppercase mb-1">
                    CLIENT
                  </span>
                  <span className="text-lg md:text-2xl text-white font-medium tracking-wide">
                    {project.client}
                  </span>
                </div>
              </div>

              <a href="#" className="mt-2 md:mt-6 hidden md:flex items-center justify-center border border-white/30 rounded-full px-8 py-3 text-xs font-bold tracking-widest text-white hover:bg-white hover:text-black transition-colors uppercase">
                LIVE PROJECT
              </a>
            </div>

            {/* Images Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 h-[250px] md:h-[400px]">
              <div className="relative md:col-span-2 rounded-[2rem] overflow-hidden border border-white/10 group">
                <Image
                  src={project.images[0]}
                  alt={`${project.client} preview 1`}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-1000"
                />
              </div>
              <div className="relative rounded-[2rem] overflow-hidden border border-white/10 hidden md:block group">
                <Image
                  src={project.images[1]}
                  alt={`${project.client} preview 2`}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-1000"
                />
              </div>
            </div>

            {/* Mobile button */}
            <a href="#" className="md:hidden flex items-center justify-center border border-white/30 rounded-full px-8 py-4 text-xs font-bold tracking-widest text-white hover:bg-white hover:text-black transition-colors uppercase w-full">
              LIVE PROJECT
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
