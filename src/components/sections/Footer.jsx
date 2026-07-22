export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-8 relative z-10 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-center gap-4">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Deep Jyoti Sarma. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
