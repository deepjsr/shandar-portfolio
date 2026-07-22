
import "./App.css";
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
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "light") {
      setTheme("light");
      document.documentElement.classList.remove("dark");
    } else {
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    if (newTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  // Simulate loading + ensure smooth transition
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1800); // Adjust timing if needed

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-cyan-500 focus:text-black focus:rounded-lg focus:outline-none"
      >
        Skip to main content
      </a>

      {isLoading && <LoadingScreen onComplete={() => setIsLoading(false)} />}

      <div
        className={`w-full min-h-screen bg-gray-50 dark:bg-[#05050A] text-gray-900 dark:text-gray-100 transition-colors duration-700 isolation-auto ${isLoading ? "opacity-0" : "opacity-100"
          }`}
      >
        <Navbar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} theme={theme} toggleTheme={toggleTheme} />
        <MobileMenue isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} theme={theme} />

        {/* Main Content Sections - Logical Order */}
        <main id="main-content">
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