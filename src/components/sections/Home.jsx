import React from "react";

function Home() {
  return (
    <section
      id="Home"
      className="min-h-screen flex items-center justify-center relative"
    >
      <div className="text-center px-4 z-10">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent leading-right">
          Hi, I'm <span className="text-blue-500">DJS</span>
        </h1>
      </div>
    </section>
  );
}

export default Home;
