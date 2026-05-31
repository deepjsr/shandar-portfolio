
import React, { useEffect, useState } from "react";
import signature from "/assets/sig-1.png";   // ← Change filename if different

function Navbar({ isMenuOpen, setIsMenuOpen }) {
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
    <nav className={`fixed top-6 left-1/2 -translate-x-1/2 z-50 transition-all duration-300 ${scrolled ? 'scale-[0.97]' : ''}`}>
      <div
        className={`glass flex items-center gap-8 px-8 py-4 rounded-full border transition-all duration-300 ${scrolled
          ? 'bg-[#0A0A0A]/95 border-white/20 shadow-2xl'
          : 'bg-black/70 border-white/10'
          }`}
      >
        {/* Signature Logo with Glow & Hover */}
        {/* <a
          href="#Home"
          className="group flex items-center transition-transform hover:scale-105"
        >
          <img
            src={signature}
            alt="Deep Jyoti Sarma Signature"
            className="h-11 w-auto 
             object-left-top 
             drop-shadow-[0_0_12px_rgba(34,211,238,0.6)] 
             transition-all duration-300 
             group-hover:drop-shadow-[0_0_20px_rgba(34,211,238,0.8)]"
          />
        </a> */}


        {/* <a
          href="#Home"
          className="flex items-center"
          style={{
            width: "195px",
            height: "68px",
            backgroundImage: "url('/assets/sig-1.svg')",
            backgroundRepeat: "no-repeat",
            backgroundSize: "contain",
            backgroundPosition: "center",
            filter: "drop-shadow(0 0 12px rgba(34, 211, 238, 0.65)) drop-shadow(0 0 25px rgba(34, 211, 238, 0.4))",
          }}
        >
        </a> */}

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-9 text-sm font-medium text-gray-300">
          <a href="#Home" className="hover:text-white transition-colors">Home</a>
          <a href="#About" className="hover:text-white transition-colors">About</a>
          <a href="#projects" className="hover:text-white transition-colors">Projects</a>
          <a href="#Contact" className="hover:text-white transition-colors">Contact</a>
        </div>

        {/* Right Side Button */}
        <a
          href="#Contact"
          className="hidden md:block px-7 py-3 bg-white hover:bg-gray-100 text-black font-semibold rounded-full text-sm transition-all active:scale-95 shadow-lg"
        >
          Let's Talk
        </a>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setIsMenuOpen((prev) => !prev)}
          className="md:hidden text-2xl text-gray-300 hover:text-white transition-colors"
        >
          {isMenuOpen ? "✕" : "☰"}
        </button>
      </div>
    </nav>
  );
}

export default Navbar;


