
import "./App.css";
import "./index.css";
import { useState, useEffect } from "react";

import LoadingScreen from "./components/Loading";
import Navbar from "./components/Navbar";
import MobileMenue from "./components/MobileMenue";
import Home from "./components/sections/Home";
import About from "./components/sections/About";
import Projects from "./components/sections/Projects";
import { Contact } from "./components/sections/Contact";
import ScrollToTop from "./components/sections/ScrollToTop";
import Footer from "./components/sections/Footer";
import Notifications from "./components/Notifications";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Simulate loading + ensure smooth transition
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1800); // Adjust timing if needed

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {isLoading && <LoadingScreen onComplete={() => setIsLoading(false)} />}

      {/* <div
        className={`min-h-screen bg-[#05050A] text-gray-100 transition-opacity duration-700 ${isLoading ? "opacity-0" : "opacity-100"
          }`}
      > */}
      <div
        className={`w-full min-h-screen bg-[#05050A] text-gray-100 transition-opacity duration-700 isolation-auto ${isLoading ? "opacity-0" : "opacity-100"
          }`}
      >
        <Navbar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
        <MobileMenue isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />

        {/* Main Content Sections - Logical Order */}
        <main>
          <Home />
          <About />
          <Projects />
          <Contact />
        </main>

        {/* Notifications Ticker */}
        <Notifications />

        {/* Floating Elements */}
        <ScrollToTop />
        <Footer />
      </div>
    </>
  );
}

export default App;