import React from "react";

function MobileMenue({ isMenuOpen, setIsMenuOpen }) {
  return (
    <div
      className={`fixed top-0 left-0 w-full z-40 bg-[rgba(10,10,0.8)] flex flex-col items-center justify-center
    transition-all duration-300 ease-in-out 
    ${
      isMenuOpen
        ? "h-screen opacity-100 pointer-events-auto"
        : "h-0 opacity-0 pointer-events-none"
    }      
    `}
    >
      <button
        onClick={() => setIsMenuOpen(false)}
        className="absolute top-6 right-6 text-3xl focus:outline-none cursour-pointer"
        aria-label="Close menu"
      >
        &times; {/* Close button */}
      </button>
      <a
        href="#Home"
        className={`text-2xl font-semibold text-white my-4 transform transition-transform duration-300 
             ${
               isMenuOpen
                 ? "opacity-100 tranalate-y-0"
                 : "opacity-0 translate-y-4"
             }`}
        onClick={() => setIsMenuOpen(false)}
      >
        Home
      </a>
      <a
        href="#About"
        onClick={() => setIsMenuOpen(false)}
        className={`text-2xl font-semibold text-white my-4 transform transition-transform duration-300 
             ${
               isMenuOpen
                 ? "opacity-100 tranalate-y-0"
                 : "opacity-0 translate-y-4"
             }`}
      >
        About
      </a>
      <a
        href="#Projects"
        onClick={() => setIsMenuOpen(false)}
        className={`text-2xl font-semibold text-white my-4 transform transition-transform duration-300 
             ${
               isMenuOpen
                 ? "opacity-100 tranalate-y-0"
                 : "opacity-0 translate-y-4"
             }`}
      >
        Projects
      </a>
      <a
        href="#Contact"
        onClick={() => setIsMenuOpen(false)}
        className={`text-2xl font-semibold text-white my-4 transform transition-transform duration-300 
             ${
               isMenuOpen
                 ? "opacity-100 tranalate-y-0"
                 : "opacity-0 translate-y-4"
             }`}
      >
        Contact
      </a>
    </div>
  );
}

export default MobileMenue;
