'use client';

import React from "react";
import { motion } from "framer-motion";
import RevealOnScroll from "../RevealOnScroll";

function Home() {
  return (
    <section
      id="Home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-[#05050A]"
    >
      {/* Controlled Aurora Background */}
      {/* Layer 1: Cyan */}
      <motion.div
        className="absolute inset-0"
        style={{
          background: "radial-gradient(ellipse at 25% 60%, #00F5FF 12%, #22D3EE 38%, transparent 72%)",
          filter: "blur(100px) saturate(1.3)",
          opacity: 0.22,
        }}
        animate={{
          x: [0, 55, -40, 0],
          y: [0, -40, 55, 0],
          scale: [1, 1.08, 0.96, 1],
        }}
        transition={{ duration: 27, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Layer 2: Purple */}
      <motion.div
        className="absolute inset-0"
        style={{
          background: "radial-gradient(ellipse at 78% 72%, #A855F7 10%, #7C3AED 40%, transparent 75%)",
          filter: "blur(115px) saturate(1.2)",
          opacity: 0.20,
        }}
        animate={{
          x: [0, -60, 50, 0],
          y: [0, 45, -35, 0],
          scale: [1, 0.93, 1.12, 1],
        }}
        transition={{ duration: 34, repeat: Infinity, ease: "easeInOut", delay: -12 }}
      />

      {/* Strong Dark Overlay for Excellent Readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#05050A]/95 via-[#05050A]/80 to-[#05050A]/90" />

      {/* Main Content */}
      <RevealOnScroll>
        <div className="text-center px-6 mb-24 relative z-10 max-w-4xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-6xl md:text-7xl font-bold mb-6 text-white tracking-tighter"
          >
            Hi, I'm <span className="bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text text-transparent">Deep</span>
          </motion.h1>

          <p className="text-xl md:text-2xl text-gray-300 mb-6 font-light max-w-2xl mx-auto">
            Frontend Developer focused on performance, reliability, and real-world delivery
          </p>

          <p className="text-gray-400 text-base md:text-lg mb-12 max-w-lg mx-auto leading-relaxed">
            I help teams ship production-ready React applications with clean UI,
            measurable improvements in speed and stability, and scalable frontend architecture.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mt-9 justify-center items-center">
            <motion.a
              href="#Projects"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="bg-cyan-500 hover:bg-cyan-600 text-black font-semibold py-4 px-10 rounded-2xl text-lg transition-all shadow-xl shadow-cyan-500/50 w-full sm:w-auto"
            >
              View My Projects
            </motion.a>

            <motion.a
              href="#Contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="border-2 border-white/70 hover:border-cyan-400 text-white hover:text-cyan-400 font-medium py-4 px-10 rounded-2xl text-lg transition-all w-full sm:w-auto"
            >
              Contact Me
            </motion.a>
          </div>
        </div>
      </RevealOnScroll>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-5 mt-9 left-1/2 -translate-x-1/2 text-cyan-400/70 text-sm tracking-[3px] flex flex-col items-center z-10"
        animate={{ y: [0, 12, 0] }}
        transition={{ duration: 2.6, repeat: Infinity }}
      >
        SCROLL TO EXPLORE
        <span className="text-2xl mt-1">↓</span>
      </motion.div>
    </section>
  );
}

export default Home;