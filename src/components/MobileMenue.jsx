import React from "react";
import { BiLogoGmail } from "react-icons/bi";
import { FaGithub } from "react-icons/fa";

function MobileMenue({ isMenuOpen, setIsMenuOpen, theme }) {
  return (
    <div
      className={`fixed top-0 left-0 w-full z-40 bg-white/90 dark:bg-[rgba(10,10,10,0.9)] backdrop-blur-md flex flex-col items-center justify-center
    transition-all duration-300 ease-in-out 
    ${
      isMenuOpen
        ? "h-screen opacity-100 pointer-events-auto"
        : "h-0 opacity-0 pointer-events-none"
    }      
    `}
    >
      <div className="flex flex-col items-start gap-4">
        <a
          href="#Home"
          className={`text-2xl font-semibold text-gray-800 dark:text-white transform transition-transform duration-300 hover:text-cyan-500 dark:hover:text-cyan-400
               ${
                 isMenuOpen
                   ? "opacity-100 translate-y-0"
                   : "opacity-0 translate-y-4"
               }`}
          onClick={() => setIsMenuOpen(false)}
        >
          Home
        </a>
        <a
          href="#About"
          onClick={() => setIsMenuOpen(false)}
          className={`text-2xl font-semibold text-gray-800 dark:text-white transform transition-transform duration-300 hover:text-cyan-500 dark:hover:text-cyan-400
               ${
                 isMenuOpen
                   ? "opacity-100 translate-y-0"
                   : "opacity-0 translate-y-4"
               }`}
        >
          About
        </a>
        <a
          href="#Projects"
          onClick={() => setIsMenuOpen(false)}
          className={`text-2xl font-semibold text-gray-800 dark:text-white transform transition-transform duration-300 hover:text-cyan-500 dark:hover:text-cyan-400
               ${
                 isMenuOpen
                   ? "opacity-100 translate-y-0"
                   : "opacity-0 translate-y-4"
               }`}
        >
          Projects
        </a>
        <a
          href="#Contact"
          onClick={() => setIsMenuOpen(false)}
          className={`text-2xl font-semibold text-gray-800 dark:text-white transform transition-transform duration-300 hover:text-cyan-500 dark:hover:text-cyan-400
               ${
                 isMenuOpen
                   ? "opacity-100 translate-y-0"
                   : "opacity-0 translate-y-4"
               }`}
        >
          Contact
        </a>
        <a
          href="https://github.com/deepjsr"
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => setIsMenuOpen(false)}
          className={`flex items-center gap-2 text-2xl font-semibold text-gray-800 dark:text-white transform transition-transform duration-300 hover:text-cyan-500 dark:hover:text-cyan-400
               ${
                 isMenuOpen
                   ? "opacity-100 translate-y-0"
                   : "opacity-0 translate-y-4"
               }`}
        >
          <FaGithub /> GitHub
        </a>
        <a
          href="mailTo:deepjsr4567@gmai.com"
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => setIsMenuOpen(false)}
          className={`flex items-center gap-2 text-2xl font-semibold text-gray-800 dark:text-white transform transition-transform duration-300 hover:text-cyan-500 dark:hover:text-cyan-400
               ${
                 isMenuOpen
                   ? "opacity-100 translate-y-0"
                   : "opacity-0 translate-y-4"
               }`}
        >
          <BiLogoGmail /> Gmail
        </a>
      </div>
    </div>
  );
}

export default MobileMenue;
