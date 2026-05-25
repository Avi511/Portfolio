"use client";

import { Canvas } from '@react-three/fiber';
import { ScrollControls, Scroll, Environment } from '@react-three/drei';
import SpiderManModel from '../components/SpiderManModel';
import Navbar from '../components/Navbar';
import { Suspense } from 'react';

export default function Portfolio() {
  return (
    <div className="relative h-screen w-full bg-black overflow-hidden">
      {/* Navbar overlay */}
      <Navbar />

      <Canvas shadows camera={{ position: [0, 0, 5], fov: 50 }}>
        {/* Basic lighting setup */}
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 10]} intensity={2} castShadow />
        <directionalLight position={[-10, -10, -10]} intensity={0.5} />
        <Environment preset="city" />

        <Suspense fallback={null}>
          {/* pages={7} creates scroll room for 7 sections */}
          <ScrollControls pages={7} damping={0.25}>

            {/* The 3D Model is animated via scroll keyframes in SpiderManModel */}
            <SpiderManModel scale={7.5} position={[0, -13.5, 0]} />

            {/* HTML content that scrolls over the 3D model */}
            <Scroll html style={{ width: '100%' }}>

              {/* Section 1: Hero / Home */}
              <div className="h-screen flex flex-col items-start justify-center p-8 md:p-20 text-white select-none">
                <h1 className="text-5xl md:text-7xl font-paytone tracking-widest text-red-500 drop-shadow-[0_0_15px_rgba(239,68,68,0.5)]">
                  I AM <br />
                  <span className="text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]">YOUR NAME</span>
                </h1>
                <p className="mt-4 max-w-md text-lg text-white/80 font-outfit">
                  Friendly neighborhood web developer specializing in immersive 3D experiences and high-performance applications.
                </p>
                <div className="mt-8 flex items-center gap-2 text-white/50 text-sm font-outfit animate-pulse">
                  <span>Scroll down to meet Spidey</span>
                  <span className="animate-bounce">↓</span>
                </div>
              </div>

              {/* Section 2: About */}
              <div className="h-screen flex flex-col items-start justify-center p-8 md:p-20 text-white">
                <div className="max-w-xl bg-black/40 p-6 md:p-8 rounded-2xl border border-white/5 backdrop-blur-md">
                  <h2 className="text-4xl md:text-5xl font-paytone tracking-widest text-red-500 drop-shadow-md mb-4">
                    ABOUT ME
                  </h2>
                  <p className="text-lg text-white/90 font-outfit leading-relaxed">
                    I design and build interactive web experiences that bridge the gap between creative design and advanced technology. 
                    Specializing in React, Next.js, and Three.js, I turn custom layouts into dynamic 3D web spaces that run smoothly across all platforms.
                  </p>
                  <p className="mt-4 text-base text-white/70 font-outfit leading-relaxed">
                    Just like Spider-Man navigating the city, I love tackling complex technical challenges and connecting APIs to build cohesive, high-performance systems.
                  </p>
                </div>
              </div>

              {/* Section 3: Skills */}
              <div className="h-screen flex flex-col items-end justify-center p-8 md:p-20 text-white text-right">
                <div className="max-w-md w-full bg-black/40 p-6 md:p-8 rounded-2xl border border-white/5 backdrop-blur-md">
                  <h2 className="text-4xl md:text-5xl font-paytone tracking-widest text-blue-500 drop-shadow-lg mb-6">
                    MY SUPERPOWERS
                  </h2>
                  <div className="flex flex-col gap-4 font-outfit">
                    {[
                      { name: 'React / Next.js', percent: 95, color: 'bg-red-500 shadow-[0_0_10px_#ef4444]' },
                      { name: 'Three.js / WebGL', percent: 85, color: 'bg-blue-500 shadow-[0_0_10px_#3b82f6]' },
                      { name: 'TypeScript', percent: 90, color: 'bg-red-500 shadow-[0_0_10px_#ef4444]' },
                      { name: 'Tailwind CSS', percent: 95, color: 'bg-blue-500 shadow-[0_0_10px_#3b82f6]' },
                    ].map((skill) => (
                      <div key={skill.name} className="w-full">
                        <div className="flex justify-between mb-1 text-sm">
                          <span className="text-white/60">{skill.percent}%</span>
                          <span className="font-bold">{skill.name}</span>
                        </div>
                        <div className="w-full bg-white/10 h-2 rounded-full overflow-hidden flex justify-end">
                          <div className={`${skill.color} h-full rounded-full`} style={{ width: `${skill.percent}%` }} />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Section 4: Projects */}
              <div className="h-screen flex flex-col items-start justify-center p-8 md:p-20 text-white">
                <h2 className="text-4xl md:text-5xl font-paytone tracking-widest text-red-500 drop-shadow-lg mb-6">
                  RECENT MISSIONS
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 font-outfit max-w-4xl w-full">
                  {[
                    { title: 'Project Web', desc: 'Custom 3D model customizer running fully in browser canvas.' },
                    { title: 'Daily Bugle Tech', desc: 'High-speed headless CMS system with instant load times.' },
                    { title: 'Oscorp Security', desc: 'Secure decentralized portal built with Next.js and TypeScript.' },
                  ].map((proj, i) => (
                    <div key={i} className="p-6 bg-black/40 border border-white/5 rounded-2xl backdrop-blur-md hover:border-red-500/30 transition-all duration-300 group">
                      <h3 className="text-xl font-bold mb-2 group-hover:text-red-400 transition-colors">{proj.title}</h3>
                      <p className="text-sm text-white/60 mb-4">{proj.desc}</p>
                      <button className="text-red-500 font-bold text-xs tracking-widest uppercase hover:text-red-400 transition-colors">
                        View Case File
                      </button>
                    </div>
                  ))}
                </div>
              </div>

              {/* Section 5: Articles */}
              <div className="h-screen flex flex-col items-end justify-center p-8 md:p-20 text-white text-right">
                <div className="max-w-2xl w-full bg-black/40 p-6 md:p-8 rounded-2xl border border-white/5 backdrop-blur-md">
                  <h2 className="text-4xl md:text-5xl font-paytone tracking-widest text-blue-500 drop-shadow-lg mb-6">
                    LOG FILES (ARTICLES)
                  </h2>
                  <div className="flex flex-col gap-4 font-outfit text-left">
                    {[
                      { title: 'Mastering WebGL: Spidey-Sense Shaders', date: 'May 2026', read: '5 min read' },
                      { title: 'Next.js 16: Dynamic Layout performance tips', date: 'April 2026', read: '8 min read' },
                      { title: 'How I built a 3D Canvas in NextJS using ThreeJS', date: 'March 2026', read: '6 min read' },
                    ].map((art, i) => (
                      <div key={i} className="p-4 bg-white/5 border border-white/5 rounded-xl hover:bg-white/10 transition-colors cursor-pointer group flex justify-between items-center">
                        <div>
                          <h3 className="text-base font-bold text-white group-hover:text-red-400 transition-colors">{art.title}</h3>
                          <span className="text-xs text-white/50">{art.date}</span>
                        </div>
                        <span className="text-xs text-blue-400 font-bold uppercase tracking-wider">{art.read}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Section 6: Volunteering */}
              <div className="h-screen flex flex-col items-start justify-center p-8 md:p-20 text-white">
                <div className="max-w-xl bg-black/40 p-6 md:p-8 rounded-2xl border border-white/5 backdrop-blur-md">
                  <h2 className="text-4xl md:text-5xl font-paytone tracking-widest text-red-500 drop-shadow-md mb-6">
                    COMMUNITY MISSIONS
                  </h2>
                  <div className="flex flex-col gap-6 font-outfit">
                    {[
                      { role: 'Lead Mentor', place: 'Queens High School Coding Club', desc: 'Teaching intro to HTML/CSS/JS and React. mentoring 40+ students on their digital portfolios.' },
                      { role: 'Open Source Contributor', place: 'Web-shooters Library', desc: 'Developing React accessible component packages focused on high speed page navigation.' },
                      { role: 'Volunteer Web Dev', place: 'NYC Local Community Pantries', desc: 'Building responsive site updates for dispatch and delivery management tools.' },
                    ].map((vol, i) => (
                      <div key={i} className="border-l-2 border-red-600 pl-4 py-1">
                        <h3 className="text-lg font-bold text-white">{vol.role}</h3>
                        <span className="text-sm text-red-400 font-medium">{vol.place}</span>
                        <p className="text-sm text-white/70 mt-1">{vol.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Section 7: Contact */}
              <div className="h-screen flex flex-col items-center justify-center p-8 md:p-20 text-white text-center">
                <div className="max-w-md w-full bg-black/50 p-6 md:p-8 rounded-2xl border border-white/5 backdrop-blur-md">
                  <h2 className="text-4xl md:text-5xl font-paytone tracking-widest text-red-500 drop-shadow-lg mb-2">
                    SEND A SIGNAL
                  </h2>
                  <p className="text-sm text-white/60 font-outfit mb-6">
                    Need web design help or a new 3D showcase? Shoot a web line!
                  </p>
                  <form className="flex flex-col gap-4 font-outfit text-left" onSubmit={(e) => e.preventDefault()}>
                    <div>
                      <label className="text-xs text-white/60 block mb-1">Name</label>
                      <input type="text" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2 text-white focus:outline-none focus:border-red-500 transition-colors" placeholder="Peter Parker" />
                    </div>
                    <div>
                      <label className="text-xs text-white/60 block mb-1">Email</label>
                      <input type="email" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2 text-white focus:outline-none focus:border-red-500 transition-colors" placeholder="peter@parker.com" />
                    </div>
                    <div>
                      <label className="text-xs text-white/60 block mb-1">Message</label>
                      <textarea rows={3} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2 text-white focus:outline-none focus:border-red-500 transition-colors resize-none" placeholder="Let's build something super..."></textarea>
                    </div>
                    <button type="submit" className="w-full py-3 mt-2 bg-red-600 hover:bg-red-500 text-white font-bold rounded-xl shadow-[0_0_15px_rgba(220,38,38,0.4)] hover:shadow-[0_0_25px_rgba(220,38,38,0.7)] transition-all duration-300 uppercase tracking-widest text-sm">
                      Send Web Line
                    </button>
                  </form>
                </div>
              </div>

            </Scroll>
          </ScrollControls>
        </Suspense>
      </Canvas>
    </div>
  );
}
