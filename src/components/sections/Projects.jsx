import React from "react";
import RevealOnScroll from "../RevealOnScroll";

function Projects() {
  return (
    <section
      id="Projects"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Project Card 1 */}

            <div className="p-6 rounded-xl border border-white/10% hover:translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition">
              <h3 className="text-xl font-bold mb-2">About React on Reddit</h3>
              <p className="text-gray-400 mb-4">
                A simple react app that shows all post related react on reddit.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["React", "Redux", "Fire base"].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3  rounded-full text-sm hover:bg-blue-500/20 transition-all  hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center">
                <a
                  href="https://redit-react-posts.web.app/"
                  target="_blank"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                >
                  View Project →
                </a>
              </div>
            </div>
            {/* Project Card 2 */}
            <div className="p-6 rounded-xl border border-white/10% hover:translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition">
              <h3 className="text-xl font-bold mb-2">
                Crypto Trading Platfrom Prototype
              </h3>
              <p className="text-gray-400 mb-4">
                plug and play crypto trading platfrom prototype
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["Wordpress", "Elementor", "Royal Add Ons"].map(
                  (tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3  rounded-full text-sm hover:bg-blue-500/20 transition-all  hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]"
                    >
                      {tech}
                    </span>
                  ),
                )}
              </div>
              <div className="flex justify-between items-center">
                <a
                  href="https://deeps.page.gd/?i=3"
                  target="_blank"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                >
                  View Project →
                </a>
              </div>
            </div>
            <div className="p-6 rounded-xl border border-white/10% hover:translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition">
              <h3 className="text-xl font-bold mb-2">E-Commerce Platfrom</h3>
              <p className="text-gray-400 mb-4">
                List your all items you can imagine off
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["React", "Redux", "Fire base"].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3  rounded-full text-sm hover:bg-blue-500/20 transition-all  hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center">
                <a
                  href="https://i-shopful.web.app/"
                  target="_blank"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                >
                  View Project →
                </a>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
}

export default Projects;
