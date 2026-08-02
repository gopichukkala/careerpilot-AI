function Navbar() {
  const navLinks = ["Home", "About", "FAQs"];

  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-200">
      <div className="max-w-7xl mx-auto h-20 px-6 flex items-center justify-between">

        {/* Logo */}
        <div className="flex items-center gap-2 cursor-pointer">
          <span className="text-2xl">🧭</span>
          <h1 className="text-2xl font-bold text-blue-600">
            CareerPilot AI
          </h1>
        </div>

        {/* Navigation */}
        <ul className="flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link}>
              <a
                href="#"
                className="text-gray-700 font-medium hover:text-blue-600 transition-colors duration-200"
              >
                {link}
              </a>
            </li>
          ))}
        </ul>

      </div>
    </nav>
  );
}

export default Navbar;