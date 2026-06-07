'use client';

import React from "react";
import { motion } from "framer-motion";
import RevealOnScroll from "../RevealOnScroll";

function About() {
  const frontendSkills = [
    "JavaScript", "React", "HTML", "CSS", "Tailwind CSS",
    "WordPress", "Bootstrap"
  ];

  const backendSkills = ["Node.js", "Express", "Java", "SpringBoot"];

  return (

    <section
      id="About"
      className=" min-h-screen py-20 relative overflow-hidden bg-[#0A0A0A]"
    >
      {/* Subtle Aurora Background (lighter than hero) */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute inset-0"
          style={{
            background: "radial-gradient(ellipse at 30% 40%, #00F5FF 10%, transparent 60%)",
            filter: "blur(110px)",
            opacity: 0.12,
          }}
          animate={{ scale: [1, 1.08, 1], x: [0, 30, -20, 0] }}
          transition={{ duration: 32, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute inset-0"
          style={{
            background: "radial-gradient(ellipse at 70% 60%, #A855F7 10%, transparent 65%)",
            filter: "blur(100px)",
            opacity: 0.10,
          }}
          animate={{ scale: [1, 0.95, 1.05], y: [0, -25, 25, 0] }}
          transition={{ duration: 38, repeat: Infinity, ease: "easeInOut", delay: -15 }}
        />
      </div>

      <RevealOnScroll>
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold mb-12 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent text-center"
          >
            About Me
          </motion.h2>

          <div className="space-y-10">
            {/* Main Bio Card */}
            <motion.div
              whileHover={{ y: -4 }}
              // className="bg-[#111111]/80 backdrop-blur-xl border glass glass-hover rounded-3xl p-8 md:p-12 border-white/10"
              className="pt-0 pb-20 relative overflow-hidden bg-[#05050A] "

            >
              <p className="text-gray-300 text-lg md:text-xl leading-relaxed mb-6">
                I’m a frontend developer focused on building fast, reliable, and user-centric React applications for real-world use.
              </p>

              <p className="text-gray-300 text-lg md:text-xl leading-relaxed mb-8">
                My work focuses on performance optimization, clean architecture, responsive design, and shipping production-ready solutions.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Frontend Skills */}
                <div>
                  <h3 className="text-2xl font-semibold mb-5 text-cyan-400">Frontend</h3>
                  <div className="flex flex-wrap gap-3">
                    {frontendSkills.map((skill, i) => (
                      <motion.span
                        key={i}
                        whileHover={{ scale: 1.08, y: -2 }}
                        className="bg-blue-500/10 hover:bg-blue-500/20 border border-blue-500/30 text-blue-400 px-5 py-2 rounded-2xl text-sm font-medium transition-all duration-200"
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </div>

                {/* Backend Skills */}
                <div>
                  <h3 className="text-2xl font-semibold mb-5 text-purple-400">Backend</h3>
                  <div className="flex flex-wrap gap-3">
                    {backendSkills.map((skill, i) => (
                      <motion.span
                        key={i}
                        whileHover={{ scale: 1.08, y: -2 }}
                        className="bg-purple-500/10 hover:bg-purple-500/20 border border-purple-500/30 text-purple-400 px-5 py-2 rounded-2xl text-sm font-medium transition-all duration-200"
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Education + Focus Areas */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <motion.div
                whileHover={{ y: -4 }}
                className="bg-[#111111]/80 backdrop-blur-xl border border-white/10 rounded-3xl p-8"
              >
                <h3 className="text-2xl font-semibold mb-6 text-white">Education</h3>
                <ul className="space-y-6 text-gray-300">
                  <li>
                    <strong className="block text-lg">B.Sc. in Computer Science</strong>
                    Gauhati University (2015 – 2018)
                  </li>
                  <li>
                    <strong className="block text-lg">Relevant Coursework</strong>
                    MERN Stack Web Development, Java, Spring Boot, Data Structures & Algorithms
                  </li>
                </ul>
              </motion.div>

              <motion.div
                whileHover={{ y: -4 }}
                className="bg-[#111111]/80 backdrop-blur-xl border border-white/10 rounded-3xl p-8"
              >
                <h3 className="text-2xl font-semibold mb-6 text-white">What I Focus On</h3>
                <ul className="space-y-4 text-gray-300 list-none">
                  {[
                    "Performance optimization (LCP, CLS, Lighthouse)",
                    "Clean & maintainable component architecture",
                    "Responsive, accessible UI with modern animations",
                    "Production-ready deployments & CI/CD"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="text-cyan-400 mt-1.5">→</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
}

export default About;