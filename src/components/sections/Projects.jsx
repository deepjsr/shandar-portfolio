import React from "react";
import RevealOnScroll from "../RevealOnScroll";

function Projects() {
  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-10 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            Featured Projects
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Project 1 */}
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_8px_24px_rgba(59,130,246,0.12)] transition">
              <h3 className="text-xl font-bold mb-2">About React on Reddit</h3>

              <p className="text-gray-400 mb-4">
                A React-based application that aggregates and displays
                React-related discussions from Reddit with a clean,
                component-driven UI.
              </p>

              <ul className="text-gray-400 mb-4 ml-5 list-disc">
                <li>
                  Built with React and Redux for predictable state management
                </li>
                <li>
                  Integrated Firebase for authentication and data handling
                </li>
                <li>Focused on reusable components and clean UI structure</li>
              </ul>

              <div className="flex flex-wrap gap-2 mb-4">
                {["React", "Redux", "Firebase"].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <a
                href="https://redit-react-posts.web.app/"
                target="_blank"
                rel="noreferrer"
                className="inline-block text-blue-400 hover:text-blue-300 transition-colors mt-4"
              >
                View Project →
              </a>
            </div>

            {/* Project 2 */}
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_8px_24px_rgba(59,130,246,0.12)] transition">
              <h3 className="text-xl font-bold mb-2">
                Crypto Trading Platform – UI Prototype
              </h3>

              <p className="text-gray-400 mb-4">
                A frontend-focused prototype built with WordPress to explore
                layout, content structure, and user flow for a crypto trading
                interface.
              </p>

              <ul className="text-gray-400 mb-4 ml-5 list-disc">
                <li>Designed responsive pages with clear visual hierarchy</li>
                <li>
                  Structured dashboards, pricing, and informational sections
                </li>
                <li>Focused purely on UI/UX, not backend trading logic</li>
                <li>Used WordPress theming to rapidly prototype concepts</li>
              </ul>

              <div className="flex flex-wrap gap-2 mb-4">
                {["WordPress", "Elementor", "Royal Addons"].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <a
                href="https://deeps.page.gd/"
                target="_blank"
                rel="noreferrer"
                className="inline-block text-blue-400 hover:text-blue-300 transition-colors mt-4"
              >
                View Project →
              </a>
            </div>

            {/* Project 3 */}
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_8px_24px_rgba(59,130,246,0.12)] transition">
              <h3 className="text-xl font-bold mb-2">E-Commerce Platform</h3>

              <p className="text-gray-400 mb-4">
                A frontend e-commerce application demonstrating product
                listings, authentication flow, and responsive layouts.
              </p>

              <ul className="text-gray-400 mb-4 ml-5 list-disc">
                <li>Implemented product browsing and UI state handling</li>
                <li>Integrated Firebase for authentication and data storage</li>
                <li>Focused on usability and mobile responsiveness</li>
              </ul>

              <div className="flex flex-wrap gap-2 mb-4">
                {["React", "Vite", "Tailwind CSS"].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <a
                href="https://i-shopful.web.app/"
                target="_blank"
                rel="noreferrer"
                className="inline-block text-blue-400 hover:text-blue-300 transition-colors mt-4"
              >
                View Project →
              </a>
            </div>

            {/* Project 4 */}
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_8px_24px_rgba(59,130,246,0.12)] transition">
              <h3 className="text-xl font-bold mb-2">
                Jainshree DIGITAL – Performance-Optimized Landing Page
              </h3>

              <p className="text-gray-400 mb-4">
                A single-page digital agency website focused on performance,
                clean UI, and production-ready deployment.
              </p>

              <ul className="text-gray-400 mb-4 ml-5 list-disc">
                <li>Built with React and Vite for fast builds</li>
                <li>
                  Improved Lighthouse metrics (LCP, CLS, layout stability)
                </li>
                <li>Reduced bundle size and deferred non-critical assets</li>
                <li>Implemented performance-aware animations</li>
                <li>Deployed using a production-optimized Netlify setup</li>
              </ul>

              <div className="flex flex-wrap gap-2 mb-4">
                {["React", "Vite", "Netlify", "Tailwind CSS"].map(
                  (tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ),
                )}
              </div>

              <a
                href="https://jainshree-digital.netlify.app/"
                target="_blank"
                rel="noreferrer"
                className="inline-block text-blue-400 hover:text-blue-300 transition-colors mt-4"
              >
                View Project →
              </a>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
}

export default Projects;
