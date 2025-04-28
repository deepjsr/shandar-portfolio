import React, { useEffect } from "react";

function Navbar({ isMenuOpen, setIsMenuOpen }) {
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";
  }, [isMenuOpen]);
  return (
    <div className="fixed top-0 w-full z-40 bg-[rgba(10,10,10,0.8)] backdrop-blur-lg border-b border-white/10 shadow-lg">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <a href="#home" className="font-mono text-xl font-bold text-white">
            DJS<span className="text-blue-500">.Dev</span>
          </a>
          <div
            className="w-7 h-5 relative cursor-pointer md:hidden"
            onClick={() => setIsMenuOpen((prev) => !prev)}
          >
            &#9776; {/* Hamburger icon */}
          </div>
          <div className="hidden md:flex space-x-8">
            <a
              href="#Home"
              className="text-gray-300 hover:text-white transition-colors"
            >
              {" "}
              Home{" "}
            </a>
            <a
              href="#About"
              className="text-gray-300 hover:text-white transition-colors"
            >
              {" "}
              About{" "}
            </a>
            <a
              href="#Projects"
              className="text-gray-300 hover:text-white transition-colors"
            >
              {" "}
              Projects{" "}
            </a>
            <a
              href="#Contact"
              className="text-gray-300 hover:text-white transition-colors"
            >
              {" "}
              Contact{" "}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
