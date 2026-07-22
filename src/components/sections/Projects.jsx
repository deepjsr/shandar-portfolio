"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import RevealOnScroll from "../RevealOnScroll";

function Projects() {
  const projects = [
    {
      title: "SnackNest",
      description:
        "A modern full-stack web application for snack discovery, ordering, and management with a beautiful, user-friendly interface.",
      features: [
        "Clean and modern UI/UX design",
        "Login & authentication system",
        "Product browsing and discovery",
        "Responsive design for all devices",
      ],
      tech: ["React", "Tailwind CSS", "Node.js"],
      link: "https://snacknest.vercel.app/",
      github: "https://github.com/deepjsr/SnackNest",
      color: "cyan",
    },
    {
      title: "Jainshree DIGITAL – Performance Optimized Landing Page",
      description:
        "A high-performance single-page website for a digital agency focused on speed, clean architecture, and excellent Lighthouse scores.",
      features: [
        "Built with React",
        "Optimized for Core Web Vitals",
        "Performance-aware animations",
        "Production-ready deployment on Netlify",
      ],
      tech: ["React", "Tailwind CSS", "Netlify"],
      link: "https://jainshree-digital.netlify.app/",
      github: "https://github.com/deepjsr/jainshree-digital-agency",
      color: "purple",
    },
    {
      title: "E-Commerce Platform",
      description:
        "Frontend-focused e-commerce application with product listings, authentication flow, and responsive design.",
      features: [
        "Product browsing & cart functionality",
        "Firebase authentication",
        "Mobile-first responsive design",
        "Smooth user experience",
      ],
      tech: ["React", "Tailwind CSS", "Firebase"],
      link: "https://i-shopful.web.app/",
      github: "https://github.com/deepjsr/E-Commerce-Platform",
      color: "cyan",
    },
    {
      title: "About React on Reddit",
      description:
        "A React application that aggregates and displays React-related discussions from Reddit with clean component architecture.",
      features: [
        "Redux state management",
        "Firebase integration",
        "Reusable component system",
        "Real-time data handling",
      ],
      tech: ["React", "Redux", "Firebase"],
      link: "https://redit-react-posts.web.app/",
      github: "https://github.com/deepjsr/Reddit-React-Posts",
      color: "purple",
    },
  ];

  return (
    <section
      id="Projects"
      className="min-h-screen py-20 relative overflow-hidden bg-gray-50 dark:bg-[#05050A]"
    >
      {/* Subtle Background Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse at 30% 40%, #00F5FF 10%, transparent 70%)",
            filter: "blur(120px)",
            opacity: 0.1,
          }}
          animate={{ scale: [1, 1.08, 1] }}
          transition={{ duration: 25, repeat: Infinity }}
        />
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-bold mb-16 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent text-center"
        >
          Featured Projects
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group bg-white/90 dark:bg-[#111111]/90 backdrop-blur-xl border border-gray-200 dark:border-white/10 rounded-3xl p-8 hover:border-cyan-400/30 transition-all duration-300 shadow-sm"
            >
              <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white group-hover:text-cyan-500 dark:group-hover:text-cyan-400 transition-colors">
                {project.title}
              </h3>

              <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                {project.description}
              </p>

              <div className="mb-6">
                <ul className="space-y-2 text-gray-600 dark:text-gray-400 text-sm">
                  {project.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-cyan-500 dark:text-cyan-400 mt-1">
                        •
                      </span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-wrap gap-2 mb-8">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className={`px-4 py-1.5 rounded-full text-xs font-medium ${
                      project.color === "cyan"
                        ? "bg-cyan-500/10 text-cyan-400 border border-cyan-400/30"
                        : "bg-purple-500/10 text-purple-400 border border-purple-400/30"
                    }`}
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-6">
                <motion.a
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  whileHover={{ scale: 1.05 }}
                  className="inline-flex items-center gap-2 text-cyan-600 dark:text-cyan-400 hover:text-cyan-500 dark:hover:text-cyan-300 font-medium transition-colors"
                >
                  View Live Project →
                </motion.a>
                {project.github && (
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    whileHover={{ scale: 1.05 }}
                    className="inline-flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white font-medium transition-colors"
                  >
                    <FaGithub className="text-xl" /> Source Code
                  </motion.a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
