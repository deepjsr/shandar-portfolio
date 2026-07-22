import React, { useEffect, useState } from "react";
import { FaGithub, FaSun, FaMoon } from "react-icons/fa";

function Navbar({ isMenuOpen, setIsMenuOpen, theme, toggleTheme }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";
  }, [isMenuOpen]);

  return (
    <nav
      className={`fixed top-6 left-1/2 -translate-x-1/2 z-50 transition-all duration-300 ${scrolled ? "scale-[0.97]" : ""}`}
    >
      <div
        className={`bg-white/80 dark:bg-white/5 backdrop-blur-md flex items-center gap-8 px-8 py-4 rounded-full border border-gray-200 dark:border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.1)] dark:shadow-[0_8px_32px_rgba(0,0,0,0.3)] transition-all duration-300 ${
          scrolled
            ? "bg-white/95 dark:bg-[#0A0A0A]/95 border-gray-300 dark:border-white/20 shadow-xl dark:shadow-2xl"
            : "bg-white/70 dark:bg-black/70 border-gray-200 dark:border-white/10"
        }`}
      >
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-9 text-sm font-medium text-gray-700 dark:text-gray-300">
          <a href="#Home" className="hover:text-cyan-500 dark:hover:text-white transition-colors">
            Home
          </a>
          <a href="#About" className="hover:text-cyan-500 dark:hover:text-white transition-colors">
            About
          </a>
          <a href="#Projects" className="hover:text-cyan-500 dark:hover:text-white transition-colors">
            Projects
          </a>
          <a href="#Contact" className="hover:text-cyan-500 dark:hover:text-white transition-colors">
            Contact
          </a>
        </div>

        {/* Right Side Button */}
        <div className="hidden md:flex items-center gap-5">
          <button
            onClick={toggleTheme}
            className="text-gray-600 dark:text-gray-300 hover:text-cyan-500 dark:hover:text-white hover:scale-110 active:scale-95 transition-all duration-200 text-xl"
            aria-label="Toggle Theme"
          >
            {theme === "dark" ? <FaSun /> : <FaMoon />}
          </button>
          <a
            href="#Contact"
            className="px-7 py-3 bg-gray-900 dark:bg-white hover:bg-gray-800 dark:hover:bg-gray-100 text-white dark:text-black font-semibold rounded-full text-sm transition-all active:scale-95 shadow-lg"
          >
            Let's Talk
          </a>
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setIsMenuOpen((prev) => !prev)}
          className="md:hidden text-2xl text-gray-700 dark:text-gray-300 hover:text-cyan-500 dark:hover:text-white transition-colors"
        >
          {isMenuOpen ? "x" : "☰"}
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
