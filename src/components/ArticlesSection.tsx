export default function ArticlesSection() {
  const articles = [
    {
      title: "The Future of Web Design in 2026",
      snippet: "Exploring how AI and 3D web experiences are reshaping the digital landscape and user expectations. The transition from flat UI to spatial computing is inevitable.",
      author: "Alex Morgan",
      image: "/cyberpunk_avatar.png"
    },
    {
      title: "Mastering Tailwind v4",
      snippet: "A deep dive into the new features of Tailwind CSS v4 and how it accelerates frontend development, reduces bundle size, and improves styling workflows.",
      author: "Sarah Jenkins",
      image: "/project1.png"
    },
    {
      title: "Neo-Brutalism UI Trends",
      snippet: "Why harsh borders, high contrast, and raw layouts are dominating modern portfolios this year. It's a rebellion against corporate flat design.",
      author: "David Chen",
      image: "/project2.png"
    },
    {
      title: "Optimizing React Server Components",
      snippet: "Best practices for rendering strategies in Next.js to achieve sub-second load times and incredible SEO performance out of the box.",
      author: "Emma Watson",
      image: "/project3.png"
    },
    {
      title: "Designing for Spatial Computing",
      snippet: "How to translate 2D web interfaces into immersive 3D spatial environments effectively without overwhelming the end user.",
      author: "Liam Neeson",
      image: "/project4.png"
    }
  ];

  // Duplicate 4 times to ensure a seamless infinite scroll loop
  const marqueeItems = [...articles, ...articles, ...articles, ...articles];

  return (
    <section id="articles" className="relative w-full flex flex-col items-center py-32 bg-transparent text-white overflow-hidden">
      <div className="w-full text-center mb-20 relative z-10">
        <h2 className="text-[3rem] md:text-[6rem] font-black uppercase tracking-tighter drop-shadow-2xl flex items-center justify-center gap-4">
          ARTICLES <span className="text-[3rem] md:text-[5rem]">😍</span>
        </h2>
      </div>

      {/* Marquee Row 1 */}
      <div
        className="flex whitespace-nowrap w-full relative z-10 mb-8"
        style={{ WebkitMaskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)', maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)' }}
      >
        <div className="flex animate-marquee gap-8 w-max px-4 hover:[animation-play-state:paused]">
          {marqueeItems.map((article, i) => (
            <div key={`row1-${i}`} className="w-[350px] md:w-[500px] shrink-0 border border-white/20 rounded-[2rem] bg-[#0a0a0a] p-6 md:p-8 flex flex-col items-start gap-4 hover:border-white/50 hover:bg-white/5 transition-all cursor-pointer group">
              <div className="flex flex-col gap-3 overflow-hidden whitespace-normal">
                <h3 className="font-bold text-lg md:text-xl leading-snug">{article.title}</h3>
                <p className="text-sm md:text-base text-gray-400 line-clamp-3">{article.snippet}</p>
                <span className="text-xs text-orange-400 font-bold uppercase tracking-widest mt-1">{article.author}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Marquee Row 2 (Reverse) */}
      <div
        className="flex whitespace-nowrap w-full relative z-10"
        style={{ WebkitMaskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)', maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)' }}
      >
        <div className="flex animate-marquee-reverse gap-8 w-max px-4 hover:[animation-play-state:paused]">
          {marqueeItems.map((article, i) => (
            <div key={`row2-${i}`} className="w-[300px] md:w-[400px] shrink-0 border border-white/20 rounded-[2rem] bg-[#0a0a0a] p-6 md:p-8 flex flex-col gap-4 hover:border-white/50 hover:bg-white/5 transition-all cursor-pointer group">
              <div className="flex flex-col whitespace-normal gap-1">
                <span className="text-xs text-purple-400 font-bold uppercase tracking-widest">{article.author}</span>
                <h3 className="font-bold text-sm md:text-base leading-snug">{article.title}</h3>
              </div>
              <p className="text-sm md:text-base text-gray-400 whitespace-normal line-clamp-3">{article.snippet}</p>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}
