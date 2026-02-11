export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8 relative z-10">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <p>
          &copy; {new Date().getFullYear()} Deep Jyoti Sarma. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
}
