import React from 'react';
import { motion } from 'motion/react';
import { ChevronDown } from 'lucide-react';

interface HeroSectionProps {
  onScrollToNext: () => void;
}

export default function HeroSection({ onScrollToNext }: HeroSectionProps) {
  return (
    <section
      id="hero"
      className="relative w-full min-h-screen flex flex-col justify-between items-center text-white px-6 md:px-12 py-8 overflow-hidden bg-slate-950"
    >
      {/* Background Image with elegant overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/src/assets/images/university_campus_background_1782742106167.jpg"
          alt="Texas Tech University Campus background"
          className="w-full h-full object-cover object-center opacity-40 scale-105 filter blur-[1px]"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/70 to-slate-900/60 z-10" />
        
        {/* Subtle grid pattern overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff0a_1px,transparent_1px)] [background-size:24px_24px] z-15 opacity-60" />
      </div>

      {/* Main Title Center Block */}
      <div className="w-full max-w-4xl flex flex-col items-center text-center my-auto z-20">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-4"
        >
          {/* Accent Line */}
          <div className="h-1.5 w-24 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 mx-auto rounded-full mb-8 shadow-lg shadow-indigo-500/20" />
          
          <h1 className="text-5xl md:text-8xl font-black tracking-tight text-white mb-2 font-sans bg-clip-text text-transparent bg-gradient-to-b from-white via-slate-100 to-slate-300">
            Lorenzo Duran
          </h1>
          
          <h2 className="text-2xl md:text-3xl font-light text-blue-400 tracking-wide font-mono uppercase">
            Senior Software Engineer
          </h2>
        </motion.div>


      </div>

      {/* Bottom controls & mouse indicator */}
      <div className="w-full max-w-6xl flex justify-center items-end z-20 pb-4">
        {/* Scroll helper */}
        <button
          onClick={onScrollToNext}
          className="flex flex-col items-center gap-2 group mx-auto cursor-pointer transition-all hover:translate-y-1"
          id="hero-scroll-btn"
        >
          <span className="text-xs font-mono tracking-widest text-slate-400 group-hover:text-blue-400 transition-colors uppercase">
            Initialize Experience Loop
          </span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
            className="w-8 h-8 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-blue-400 shadow-lg group-hover:border-blue-500 group-hover:text-blue-300"
          >
            <ChevronDown className="w-4 h-4" />
          </motion.div>
        </button>
      </div>
    </section>
  );
}
