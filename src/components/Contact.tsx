"use client";

import React from "react";
import { FiMail, FiMapPin, FiGithub, FiFacebook, FiInstagram, FiLinkedin } from "react-icons/fi";
import { FaMedium } from "react-icons/fa";

export default function Contact() {
  return (
    <section id="contact" className="relative px-[5%] md:px-[10%] pt-12 pb-8 md:pt-20 md:pb-12 flex flex-col z-[1] bg-[#0a0a0a]">
      <div className="w-full max-w-[1400px] mx-auto flex flex-col relative">
        <div className="text-primary font-bold text-[0.85rem] tracking-[1.5px] mb-4 uppercase text-center md:text-left z-10 w-full">
          GET IN TOUCH
        </div>
        <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-12 text-center md:text-left">
          Let's Work Together
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 w-full mt-8">

          {/* Contact Info */}
          <div className="flex flex-col gap-8">
            <h3 className="text-2xl font-bold text-white mb-4">Contact Information</h3>
            <p className="text-white/70 text-lg leading-relaxed mb-6">
              Whether you have a question, a project idea, or just want to say hi, my inbox is always open. I'll try my best to get back to you!
            </p>

            <div className="flex flex-col gap-6">
              <div className="flex items-center gap-5">
                <div className="w-14 h-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-primary shrink-0">
                  <FiMail size={22} />
                </div>
                <div>
                  <div className="text-sm text-white/50 mb-1">Email</div>
                  <a href="mailto:aimedagamagodage2003@gmail.com" className="text-white text-lg font-medium hover:text-primary transition-colors">aimedagamagodage2003@gmail.com</a>
                </div>
              </div>

              <div className="flex items-center gap-5">
                <div className="w-14 h-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-primary shrink-0">
                  <FiMapPin size={22} />
                </div>
                <div>
                  <div className="text-sm text-white/50 mb-1">Location</div>
                  <div className="text-white text-lg font-medium">171, Dharmashoka Mawatha, Lewalla, Kandy</div>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-8 border-t border-white/10">
              <h4 className="text-white font-semibold mb-6 text-lg">Follow Me</h4>
              <div className="flex gap-4 flex-wrap">
                <a href="https://github.com/Avi511" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-[#121212] border border-white/10 flex items-center justify-center text-white hover:text-white hover:border-white transition-all shadow-lg" title="GitHub">
                  <FiGithub size={22} />
                </a>
                <a href="https://www.facebook.com/profile.php?id=61550771686888" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-[#121212] border border-white/10 flex items-center justify-center text-white hover:text-[#1877F2] hover:border-[#1877F2] transition-all shadow-lg" title="Facebook">
                  <FiFacebook size={22} />
                </a>
                <a href="https://www.instagram.com/avishka.ish/" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-[#121212] border border-white/10 flex items-center justify-center text-white hover:text-[#E4405F] hover:border-[#E4405F] transition-all shadow-lg" title="Instagram">
                  <FiInstagram size={22} />
                </a>
                <a href="https://www.linkedin.com/in/avishka-medagamagodage-01a0292aa/" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-[#121212] border border-white/10 flex items-center justify-center text-white hover:text-[#0A66C2] hover:border-[#0A66C2] transition-all shadow-lg" title="LinkedIn">
                  <FiLinkedin size={22} />
                </a>
                <a href="https://medium.com/@aimedagamagodage2003" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-[#121212] border border-white/10 flex items-center justify-center text-white hover:text-[#00AB6C] hover:border-[#00AB6C] transition-all shadow-lg" title="Medium">
                  <FaMedium size={22} />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-[#121212] border border-white/10 rounded-3xl p-8 md:p-10 shadow-2xl">
            <h3 className="text-2xl font-bold text-white mb-8">Send me a message</h3>
            <form action="https://formsubmit.co/aimedagamagodage2003@gmail.com" method="POST" className="flex flex-col gap-6">
              <input type="hidden" name="_subject" value="New contact from your portfolio!" />
              <input type="hidden" name="_captcha" value="false" />
              <div className="flex flex-col gap-2">
                <label htmlFor="name" className="text-sm font-medium text-white/70">Your Name</label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  required
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="text-sm font-medium text-white/70">Your Email</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  required
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="text-sm font-medium text-white/70">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-white text-black font-bold text-lg rounded-xl px-4 py-4 mt-2 hover:bg-primary hover:text-white transition-colors "
              >
                Send Message
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}
