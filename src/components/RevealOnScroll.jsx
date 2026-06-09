import React, { useEffect, useRef } from "react";

function RevealOnScroll({ children }) {
  const ref = useRef(null);

  useEffect(() => {
    // 1. Guard check if ref doesn't exist
    const currentRef = ref.current;
    if (!currentRef) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          currentRef.classList.add("visible");
          // Opt-out: Stop observing once it's visible so it doesn't keep running
          observer.unobserve(currentRef);
        }
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -100px 0px", // Triggers 100px before coming into view
      }
    );

    observer.observe(currentRef);

    // 2. Clean up properly using the stable reference
    return () => {
      observer.disconnect();
    };
  }, []); // 👈 CRITICAL: Empty array ensures this only runs ONCE on mount

  return (
    <div ref={ref} className="reveal">
      {children}
    </div>
  );
}

export default RevealOnScroll;