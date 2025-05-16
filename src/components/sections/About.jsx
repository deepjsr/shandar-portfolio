import React from "react";
import RevealOnScroll from "../RevealOnScroll";

function About() {
  // const skills = [
  //   "JavaScript",
  //   "React",
  //   "Node.js",
  //   "Python",
  //   "HTML",
  //   "CSS",
  //   "Tailwind CSS",
  //   "Bootstrap",
  //   "Git",
  //   "GitHub",
  // ];

  const frontendSkills = [
    "JavaScript",
    "React",
    "HTML",
    "CSS",
    "Tailwind CSS",
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
            <p className="text-gray-300  md:text-2xl mb-6">
              I'm a software engineer with a passion for building web
              applications. I love to learn new technologies and improve my
              skills. I am always looking for new challenges and opportunities
              to grow. I have experience in various programming languages and
              frameworks, including JavaScript, React, Node.js, and Python. I
              enjoy working on projects that have a positive impact on people's
              lives and contribute to the open-source community.
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
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
              <div className="rounded-xl p-6 border-white/10 hover:-translate-y-1 transsition-all">
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
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
}

export default About;
