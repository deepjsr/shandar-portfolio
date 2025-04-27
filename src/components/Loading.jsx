import React, { useEffect, useState } from "react";

function LoadingScreen({ onComplete }) {
  // This component simulates a loading screen with a typing effect.
  const [text, setText] = useState("");
  const fullText = "<Hello World/>";

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setText(fullText.substring(0, index));
      index++;
      if (index > fullText.length) {
        clearInterval(interval);
        setTimeout(() => {
          onComplete(); // Call the onComplete function after the text is fully displayed
        }, 1000); // Adjust the delay before calling onComplete
        index = 0; // Reset index to loop the text
      }
    }, 200); // Adjust the speed of the typing effect here
    return () => clearInterval(interval);
  }, [onComplete, fullText]);

  return (
    <div className="fixed inset-0 z-50 bg-black text-gray-100 flex flex-col justify-center items-center">
      <div className="mb-4 text-4xl font-mono font-bold">
        {text} <span className="animate-blink ml-1"> | </span>
      </div>
      <div className="w-[300px] h-[5px] bg-gray-800 rounded relative overflow-hidden">
        <div className="w-[50%] h-full bg-blue-500 shadow-[0_0_15px_#3b82f6] animate-loading-bar"></div>
      </div>
    </div>
  );
}

export default LoadingScreen;
