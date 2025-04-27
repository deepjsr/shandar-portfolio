import "./App.css";
import "./index.css";
import LoadingScreen from "./components/Loading";
import { useState } from "react";
import Navbar from "./components/Navbar";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      {isLoading && <LoadingScreen onComplete={() => setIsLoading(false)} />}{" "}
      <div
        className={`min-h-screen transition-opacity duration-700 ${
          isLoading ? "opacity-0" : "opacity-100"
        } bg-black text-gray-100`}
      >
        <Navbar />
      </div>
    </>
  );
}

export default App;
