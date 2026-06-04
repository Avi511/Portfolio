"use client";

import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { motion } from "framer-motion";

const articles = [
  {
    id: 1,
    title: "Understanding React Server Components",
    date: "May 15, 2024",
    description: "A deep dive into how React Server Components change the way we build web applications, improving performance and SEO.",
    link: "#",
    gradient: "from-blue-600 to-violet-600",
  },
  {
    id: 2,
    title: "The Future of CSS: What's New in 2024",
    date: "April 28, 2024",
    description: "Exploring the latest CSS features including native nesting, container queries, and new viewport units that simplify complex layouts.",
    link: "#",
    gradient: "from-emerald-500 to-teal-700",
  },
  {
    id: 3,
    title: "Building Scalable APIs with Node.js",
    date: "March 10, 2024",
    description: "Best practices for designing, structuring, and deploying robust REST APIs using Node.js, Express, and modern architectural patterns.",
    link: "#",
    gradient: "from-orange-500 to-red-600",
  },
];

const ArticleCard = ({ article }: { article: any }) => (
  <a href={article.link} className="flex flex-col w-full bg-[#121212] border border-white/10 rounded-2xl overflow-hidden group hover:border-white/30 transition-all shadow-lg hover:-translate-y-2 duration-300">
    {/* Image Placeholder */}
    <div className={`w-full h-48 bg-gradient-to-br ${article.gradient} relative overflow-hidden`}>
      <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-300"></div>
    </div>

    {/* Content */}
    <div className="p-6 md:p-8 flex flex-col flex-1">
      <span className="text-primary text-sm font-semibold tracking-wider mb-3">
        {article.date}
      </span>
      <h3 className="text-xl md:text-2xl font-bold text-white mb-4 group-hover:text-primary transition-colors">
        {article.title}
      </h3>
      <p className="text-white/70 text-base leading-relaxed mb-8 flex-1">
        {article.description}
      </p>

      {/* Read More Link */}
      <div className="flex items-center text-white font-medium group-hover:text-primary transition-colors mt-auto">
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
      </motion.div>
    </section>
  );
}
