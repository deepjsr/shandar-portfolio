import React from "react";
import RevealOnScroll from "../RevealOnScroll";

function Home() {
  return (
    <section
      id="Home"
      className="min-h-screen flex items-center justify-center relative"
    >
      <RevealOnScroll>
        <div className="text-center px-4 z-10">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent leading-right">
            Hi, I'm <span className="text-blue-500">Deep</span>
          </h1>
          <p className="text-gray-400 text-lg overflow-auto md:text-2xl  mb-8">
            Frontend Developer focused on performance, reliability, and
            real-world delivery
          </p>
          <p className="text-gray-700 text-lg overflow-auto md:text-2xl  mb-10 max-w-lg mx-auto">
            I help teams ship production-ready React applications with clean UI,
            measurable improvements in speed and stability, and scalable
            frontend architecture.
          </p>
          <div className="flex-center px-4 space-x-4 md:space-x-8">
            <a
              href="#Projects"
              className="border-blue-700 text-white py-3 px-6 rounded font-medium transition-all relative overflow-hidden hover:bg-blue-700 hover:-translate-y-1 bg-blue-500 shadow-lg shadow-blue-500/50"
            >
              View Projects
            </a>
            <a
              href="#Contact"
              className="border border-blue-500/50 text-blue-500 py-3 px-6 rounded font-medium transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_0_15px_rgba(59,130,246,0.2)] hover:bg-blue-500/10"
            >
              Contact me
            </a>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
}

export default Home;
