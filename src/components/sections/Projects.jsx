
import React from "react";
import { motion } from "framer-motion";
import RevealOnScroll from "../RevealOnScroll";

function Projects() {
  const projects = [
    {
      title: "About React on Reddit",
      description: "A React-based application that aggregates and displays React-related discussions from Reddit with a clean, component-driven UI.",
      features: [
        "Built with React and Redux for predictable state management",
        "Integrated Firebase for authentication and data handling",
        "Focused on reusable components and clean UI structure"
      ],
      tech: ["React", "Redux", "Firebase"],
      link: "https://redit-react-posts.web.app/",
      color: "cyan"
    },
    {
      title: "Crypto Trading Platform – UI Prototype",
      description: "A frontend-focused prototype built with WordPress to explore layout, content structure, and user flow for a crypto trading interface.",
      features: [
        "Designed responsive pages with clear visual hierarchy",
        "Structured dashboards, pricing, and informational sections",
        "Focused purely on UI/UX, not backend trading logic"
      ],
      tech: ["WordPress", "Elementor", "Royal Addons"],
      link: "https://deeps.page.gd/",
      color: "purple"
    },
    {
      title: "E-Commerce Platform",
      description: "A frontend e-commerce application demonstrating product listings, authentication flow, and responsive layouts.",
      features: [
        "Implemented product browsing and UI state handling",
        "Integrated Firebase for authentication and data storage",
        "Focused on usability and mobile responsiveness"
      ],
      tech: ["React", "Vite", "Tailwind CSS"],
      link: "https://i-shopful.web.app/",
      color: "cyan"
    },
    {
      title: "Jainshree DIGITAL – Performance-Optimized Landing Page",
      description: "A single-page digital agency website focused on performance, clean UI, and production-ready deployment.",
      features: [
        "Built with React and Vite for fast builds",
        "Improved Lighthouse metrics (LCP, CLS, layout stability)",
        "Reduced bundle size and deferred non-critical assets",
        "Implemented performance-aware animations"
      ],
      tech: ["React", "Vite", "Netlify", "Tailwind CSS"],
      link: "https://jainshree-digital.netlify.app/",
      color: "purple"
    }
  ];

  return (
    <section
      id="Projects"
      // className="min-h-screen py-20 relative overflow-hidden bg-[#05050A]"
      className="pt-20 pb-20 relative overflow-hidden bg-[#05050A] "

    >
      {/* Subtle Aurora Background */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute inset-0"
          style={{
            background: "radial-gradient(ellipse at 30% 40%, #00F5FF 10%, transparent 70%)",
            filter: "blur(120px)",
            opacity: 0.12,
          }}
          animate={{ scale: [1, 1.1, 1], x: [0, 30, -25, 0] }}
          transition={{ duration: 32, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute inset-0"
          style={{
            background: "radial-gradient(ellipse at 70% 65%, #A855F7 12%, transparent 72%)",
            filter: "blur(110px)",
            opacity: 0.10,
          }}
          animate={{ scale: [1, 0.95, 1.08], y: [0, -35, 30, 0] }}
          transition={{ duration: 38, repeat: Infinity, ease: "easeInOut", delay: -16 }}
        />
      </div>

      <RevealOnScroll>
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
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="group bg-[#111111]/80 backdrop-blur-xl border border-white/10 rounded-3xl p-8 hover:border-cyan-400/30 transition-all duration-300"
              >
                <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-cyan-400 transition-colors">
                  {project.title}
                </h3>

                <p className="text-gray-400 mb-6 leading-relaxed">
                  {project.description}
                </p>

                <div className="mb-6">
                  <ul className="space-y-2 text-gray-400 text-sm">
                    {project.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-cyan-400 mt-1.5">•</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className={`px-4 py-1.5 rounded-full text-xs font-medium border ${project.color === "cyan"
                        ? "bg-cyan-500/10 text-cyan-400 border-cyan-400/30"
                        : "bg-purple-500/10 text-purple-400 border-purple-400/30"
                        }`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <motion.a
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  whileHover={{ scale: 1.05 }}
                  className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 font-medium transition-colors group-hover:underline"
                >
                  View Live Project →
                </motion.a>
              </motion.div>
            ))}
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
}

export default Projects;