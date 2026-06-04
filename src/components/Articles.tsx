"use client";

import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { motion } from "framer-motion";

const articles = [
  {
    id: 1,
    title: "Understanding JWT (JSON Web Tokens): A Complete Guide for Developers",
    description: "A comprehensive guide on how JSON Web Tokens work, their structure, and how to use them for secure authentication.",
    link: "https://medium.com/@aimedagamagodage2003/understanding-jwt-json-web-tokens-a-complete-guide-for-developers-2389b69534d6",
    image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: 2,
    title: "Building MiniOS: A Journey into Real-Mode OS Development",
    description: "Explore the challenges and learnings from developing a custom real-mode operating system from scratch.",
    link: "https://medium.com/@aimedagamagodage2003/building-minios-a-journey-into-real-mode-os-development-62f0258b952b",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: 3,
    title: "Understanding DevOps Culture: Concepts and Benefits",
    description: "Discover the core principles of DevOps culture, key concepts, and how it transforms software development lifecycles.",
    link: "https://medium.com/@aimedagamagodage2003/understanding-devops-culture-concepts-and-benefits-c00ada1b3f17",
    image: "https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?q=80&w=2088&auto=format&fit=crop",
  },
];

const ArticleCard = ({ article }: { article: any }) => (
  <a href={article.link} target="_blank" rel="noopener noreferrer" className="flex flex-col w-full bg-[#121212] border border-white/10 rounded-2xl overflow-hidden group transition-all shadow-lg duration-300">
    {/* Image */}
    <div className="w-full h-48 relative overflow-hidden bg-[#1a1a1a]">
      <img src={article.image} alt={article.title} className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-black/20"></div>
    </div>

    {/* Content */}
    <div className="p-6 md:p-8 flex flex-col flex-1">
      <h3 className="text-xl md:text-2xl font-bold text-white mb-4">
        {article.title}
      </h3>
      <p className="text-white/70 text-base leading-relaxed mb-8 flex-1">
        {article.description}
      </p>

      {/* Read More Link */}
      <div className="flex items-center text-white font-medium mt-auto">
        Read Article
        <FaArrowRight className="ml-2 transform group-hover:translate-x-2 transition-transform" />
      </div>
    </div>
  </a>
);

export default function Articles() {
  return (
    <section id="articles" className="relative px-[5%] md:px-[10%] pt-20 pb-32 flex flex-col z-[1]">
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="w-full max-w-[1400px] mx-auto flex flex-col relative"
      >
        <div className="text-primary font-bold text-[0.85rem] tracking-[1.5px] mb-4 uppercase text-center md:text-left z-10 w-full">
          MY ARTICLES
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
          {articles.map((article) => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </div>

        {/* More Articles Button */}
        <div className="mt-16 flex justify-center w-full">
          <a 
            href="https://medium.com/@aimedagamagodage2003" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-8 py-3 bg-primary hover:bg-[#ff4500] text-white font-bold rounded transition-colors duration-300 tracking-[0.5px] uppercase text-[0.9rem]"
          >
            More Articles
            <FaArrowRight className="ml-3" />
          </a>
        </div>
      </motion.div>
    </section>
  );
}
