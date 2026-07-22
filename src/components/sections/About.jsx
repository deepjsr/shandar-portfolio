'use client';

import React from "react";
import { motion } from "framer-motion";
import { FaReact, FaHtml5, FaCss3Alt, FaNodeJs, FaJava, FaWordpress, FaBootstrap } from "react-icons/fa";
import { SiJavascript, SiTailwindcss, SiExpress, SiSpringboot } from "react-icons/si";
import RevealOnScroll from "../RevealOnScroll";

function About() {
  const frontendSkills = [
    { name: "JavaScript", icon: <SiJavascript /> },
    { name: "React", icon: <FaReact /> },
    { name: "HTML", icon: <FaHtml5 /> },
    { name: "CSS", icon: <FaCss3Alt /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss /> },
    { name: "WordPress", icon: <FaWordpress /> },
    { name: "Bootstrap", icon: <FaBootstrap /> }
  ];

  const backendSkills = [
    { name: "Node.js", icon: <FaNodeJs /> },
    { name: "Express", icon: <SiExpress /> },
    { name: "Java", icon: <FaJava /> },
    { name: "SpringBoot", icon: <SiSpringboot /> }
  ];

  return (

    <section
      id="About"
      className="min-h-screen py-20 relative overflow-hidden bg-white dark:bg-[#0A0A0A]"
    >
      {/* KEEP: Subtle Aurora Backgrounds (Low impact, high aesthetic value) */}
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

      {/* <RevealOnScroll> */}
      {/* <div className="max-w-4xl mx-auto px-7 relative"> */}
      <div className="reveal max-w-4xl mx-auto px-7 relative">

        {/* OPTIMIZED: Standard h2 using your text styling (Animation handled by parent Reveal wrapper) */}
        <h2 className="text-4xl md:text-5xl font-bold mb-12 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent text-center">
          About Me
        </h2>

        <div className="space-y-10 md:space-y-16">
          {/* OPTIMIZED: Clean layout card with standard CSS hover via Tailwind utilities */}
          <div className="bg-gray-50/80 dark:bg-[#111111]/80 backdrop-blur-xl border glass glass-hover rounded-3xl p-8 md:p-12 border-gray-200 dark:border-white/10 transition-transform duration-300 transform hover:-translate-y-1">
            <p className="text-gray-700 dark:text-gray-300 text-lg md:text-xl leading-relaxed mb-6">
              I’m a frontend developer focused on building fast, reliable, and user-centric React applications for real-world use.
            </p>

            <p className="text-gray-700 dark:text-gray-300 text-lg md:text-xl leading-relaxed mb-8">
              My work focuses on performance optimization, clean architecture, responsive design, and shipping production-ready solutions.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Frontend Skills */}
              <div>
                <h3 className="text-2xl font-semibold mb-5 text-cyan-400">Frontend</h3>
                <div className="flex flex-wrap gap-4">
                  {frontendSkills.map((skill, i) => (
                    <span
                      key={i}
                      className="flex items-center gap-2 bg-blue-500/10 hover:bg-blue-500/20 border border-blue-500/30 text-blue-400 px-5 py-2 rounded-2xl text-sm font-medium transition-all duration-200 transform hover:scale-105 hover:-translate-y-0.5 cursor-default"
                    >
                      {skill.icon}
                      {skill.name}
                    </span>
                  ))}
                </div>
              </div>

              {/* Backend Skills */}
              <div>
                <h3 className="text-2xl font-semibold mb-5 text-purple-400">Backend</h3>
                <div className="flex flex-wrap gap-4">
                  {backendSkills.map((skill, i) => (
                    <span
                      key={i}
                      className="flex items-center gap-2 bg-purple-500/10 hover:bg-purple-500/20 border border-purple-500/30 text-purple-400 px-5 py-2 rounded-2xl text-sm font-medium transition-all duration-200 transform hover:scale-105 hover:-translate-y-0.5 cursor-default"
                    >
                      {skill.icon}
                      {skill.name}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Education + Focus Areas Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-50/80 dark:bg-[#111111]/80 backdrop-blur-xl border border-gray-200 dark:border-white/10 rounded-3xl p-8 transition-transform duration-300 transform hover:-translate-y-1">
              <h3 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-white">Education</h3>
              <ul className="space-y-6 text-gray-700 dark:text-gray-300">
                <li>
                  <strong className="block text-lg">B.Sc. in Computer Science</strong>
                  Gauhati University (2015 – 2018)
                </li>
                <li>
                  <strong className="block text-lg">Relevant Coursework</strong>
                  MERN Stack Web Development, Java, Spring Boot, Data Structures & Algorithms
                </li>
              </ul>
            </div>

            <div className="bg-gray-50/80 dark:bg-[#111111]/80 backdrop-blur-xl border border-gray-200 dark:border-white/10 rounded-3xl p-8 transition-transform duration-300 transform hover:-translate-y-1">
              <h3 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-white">What I Focus On</h3>
              <ul className="space-y-4 text-gray-700 dark:text-gray-300 list-none">
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
            </div>
          </div>

        </div>
      </div>
      {/* </RevealOnScroll> */}
    </section>
  );
}

export default About;




