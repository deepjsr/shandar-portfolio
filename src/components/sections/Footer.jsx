import { FaGithub } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-8 relative z-10 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Deep Jyoti Sarma. All rights reserved.
        </p>
        <div className="flex items-center gap-6">
          <a
            href="https://github.com/deepjsr"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white hover:scale-110 active:scale-95 transition-all duration-200 text-xl"
            aria-label="GitHub Profile"
          >
            <FaGithub />
          </a>
        </div>
      </div>
    </footer>
  );
}
