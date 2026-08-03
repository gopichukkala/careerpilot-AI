import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-200">
      <div className="max-w-7xl mx-auto h-20 px-6 flex items-center justify-between">

        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-2"
        >
          <span className="text-3xl">🚀</span>

          <span className="text-3xl font-bold text-blue-600">
            CareerPilot AI
          </span>
        </Link>

        {/* Navigation */}
        <ul className="flex items-center gap-8 font-medium">

          <li>
            <a
              href="#home"
              className="text-gray-700 hover:text-blue-600 transition"
            >
              Home
            </a>
          </li>

          <li>
            <a
              href="#about"
              className="text-gray-700 hover:text-blue-600 transition"
            >
              About
            </a>
          </li>

          <li>
            <a
              href="#faq"
              className="text-gray-700 hover:text-blue-600 transition"
            >
              FAQs
            </a>
          </li>

        </ul>

      </div>
    </nav>
  );
}

export default Navbar;