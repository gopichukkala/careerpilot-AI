import { Link } from "react-router-dom";

function PublicNavbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
      <div className="max-w-7xl mx-auto h-20 px-6 flex items-center">
        <Link to="/" className="flex items-center gap-2">
          <span className="text-3xl">🚀</span>
          <span className="text-3xl font-bold text-blue-600">
            CareerPilot AI
          </span>
        </Link>
      </div>
    </nav>
  );
}

export default PublicNavbar;