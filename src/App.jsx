import "./App.css";
import "./index.css";
import LoadingScreen from "./components/Loading";
import { useState } from "react";
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
  // const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  // const [isDarkMode, setIsDarkMode] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <>
      {isLoading && <LoadingScreen onComplete={() => setIsLoading(false)} />}{" "}
      <div
        className={`min-h-screen transition-opacity duration-700 ${isLoading ? "opacity-0" : "opacity-100"
          } bg-black text-gray-100`}
      >
        <Navbar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
        <MobileMenue isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
        <Home />
        <About />
        <Contact />
        <Projects />
        <Notifications />
        <ScrollToTop />
        <Footer />
      </div>
    </>
  );
}

export default App;
