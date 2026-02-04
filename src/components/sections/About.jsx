import React from "react";
import RevealOnScroll from "../RevealOnScroll";

function About() {
  const frontendSkills = [
    "JavaScript",
    "React",
    "HTML",
    "CSS",
    "Tailwind CSS",
    "Wordpress",
    "Bootstrap",
  ];
  const backendSkills = ["Node.js", "Express", "Java", "SpringBoot"];
  return (
    <section
      id="About"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            About Me
          </h2>
          <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
            <p className="text-gray-300  md:text-2xl mb-4">
              I’m a frontend developer focused on building fast, reliable, and
              user-centric React applications for real-world use.
            </p>
            <p className="text-gray-300 md:text-2xl mt-4">
              My work focuses on:
            </p>
            <ul className="list-disc pl-4 mt-2 list-inside text-gray-300">
              <li>Performance optimization (LCP, CLS, Lighthouse audits)</li>
              <li>Clean, maintainable component architecture</li>
              <li>Responsive UI with modern CSS and animations</li>
              <li>
                Production deployments using Vite and Netlify and CI-ready
                setups
              </li>
            </ul>
            <p className="text-gray-300 md:text-2xl mt-4">
              I prefer shipping complete solutions over demos — debugging slow
              pages, refactoring animation-heavy components, and improving SEO
              structure to make products usable and discoverable.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-xl p-6 hover:translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4">Frontend</h3>
                <div className="flex flex-wrap gap-2">
                  {frontendSkills.map((skill, index) => (
                    <span
                      key={index}
                      className="bg-blue-500/10 text-blue-500  py-1 px-3 me-1 rounded-full text-sm hover:bg-blue-500/20 transition-all duration-200 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              <div className="rounded-xl p-6 hover:translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4">Backend</h3>
                <div className="flex flex-wrap gap-2">
                  {backendSkills.map((skill, index) => (
                    <span
                      key={index}
                      className="bg-blue-500/10 text-blue-500  py-1 px-3 me-1 rounded-full text-sm hover:bg-blue-500/20 transition duration-200 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            <div className="grid grid-cols-3 md:grid-cols-2 gap-6">
              <div className="rounded-xl p-6 hover:-translate-y-1 transsition-all">
                <h3 className="text-xl font-bold mb-4">Education</h3>
                <ul className="list-disc list-inside text-gray-300 space-y-2">
                  <li>
                    <strong>B.Sc. in Computer Science </strong>-Gauhati
                    University (2015 - 2018)
                  </li>
                  <li>
                    <strong>Relevent Corsework </strong>-MERN Stack Web
                    Development, Java, SpringBoot, Data Structures and
                    Algorithms
                  </li>
                </ul>
              </div>
              {/* <div className="rounded-xl p-6 border-white/10 hover:-translate-y-1 transsition-all">
                <h3 className="text-xl font-bold mb-4">Experience</h3>
                <div className="space-y-4 text-gray-300">
                  <div className="">
                    <h1 className="font-semibold">
                      Softwere Engineer at Lumiford Pvt. Ltd.(2022-present)
                    </h1>
                    <p>
                      Designed and convert Figma disignes into scalable React
                      code{" "}
                    </p>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
}

export default About;
