import React from 'react';
import Link from 'next/link';

export default function About() {
  return (
    <section id="about" className="relative px-[5%] md:px-[10%] py-20 min-h-screen flex items-center z-[1]">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 w-full">
        {/* Left Column: Text Content */}
        <div className="flex flex-col justify-center">
          <div className="text-primary font-bold text-[0.85rem] tracking-[1.5px] mb-8 uppercase">
            ABOUT ME
          </div>
          <div className="flex flex-col gap-6 text-muted text-lg leading-relaxed mb-10">
            <p>
              I am <strong className="text-white font-semibold">Avishka Ishan Medagamagodage</strong>, a third-year <strong className="text-white font-semibold">Software Engineering undergraduate</strong> at the <strong className="text-white font-semibold">University of Kelaniya</strong> from <strong className="text-white font-semibold">Kandy</strong>. I am passionate about coding, software development, and continuously learning new technologies. My main interests are <strong className="text-white font-semibold">Full-Stack Development</strong> and <strong className="text-white font-semibold">Data Science</strong>, and I aspire to build a successful career in these fields.
            </p>
            <p>
              I also enjoy designing creative and user-friendly digital experiences, combining technical skills with creativity to develop impactful solutions. I am always eager to take on new challenges, improve my skills, and create innovative projects that solve real-world problems.
            </p>
          </div>

          <div>
            <Link href="/projects" className="text-white font-semibold inline-flex items-center gap-2 hover:text-primary transition-colors group">
              Explore My projects
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transition-transform group-hover:translate-x-1">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </Link>
          </div>
        </div>

        {/* Right Column: Cards */}
        <div className="flex flex-col justify-center gap-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* GPA Card */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8 flex flex-col items-center justify-center text-center hover:bg-white/10 transition-colors">
              <div className="text-5xl font-bold text-primary mb-2">3.43</div>
              <div className="text-sm text-muted">Current GPA</div>
            </div>

            {/* Projects Card */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8 flex flex-col items-center justify-center text-center hover:bg-white/10 transition-colors">
              <div className="text-5xl font-bold text-primary mb-2">4+</div>
              <div className="text-sm text-muted">Individual Projects</div>
            </div>
          </div>

          {/* Volunteering Card */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-colors">
            <div className="flex items-center gap-3 mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              </svg>
              <h3 className="text-lg font-bold text-white">Volunteering</h3>
            </div>

            <div className="flex flex-col gap-4">
              <div>
                <h4 className="text-white font-semibold text-sm">Head of Designing</h4>
                <p className="text-xs text-muted mt-1">Software Engineering Students' Association, University of Kelaniya</p>
              </div>
              <div className="w-full h-[1px] bg-white/10"></div>
              <div>
                <h4 className="text-white font-semibold text-sm">Head of Logistics</h4>
                <p className="text-xs text-muted mt-1">IEEE Students' Branch, University of Kelaniya</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
