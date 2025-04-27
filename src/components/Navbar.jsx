import React from "react";

function Navbar() {
  return (
    <div className="fixed top-0 w-full z-40 bg-[rgba(10,10,10,0.8)] backdrop-blur-lg border-b border-white/10 shadow-lg">
      <div className="max-w-5xl mx-auto px-2">
        <div className="flex items-center justify-between h-16 pe-0">
          <div className="pe-30">DJS</div>
          <a href="#">Home</a>
          <a href="#">Contacts</a>
          <a href="#">Projects</a>
          <a href="#">About</a>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
