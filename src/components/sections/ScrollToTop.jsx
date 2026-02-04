import { useEffect, useState } from "react";
import { IoCaretUpOutline } from "react-icons/io5";

const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Scroll to top"
      className="
        fixed bottom-6 right-6 z-50
        h-11 w-11 rounded-full
        bg-slate-900 text-white
        shadow-lg
        flex items-center justify-center
        transition-opacity duration-200
        hover:opacity-80
        focus:outline-none focus:ring-2 focus:ring-slate-400
      "
    >
      <IoCaretUpOutline size={22} />
    </button>
  );
};

export default ScrollToTop;
