import { Link } from "react-router-dom";

function DashboardNavbar() {
  return (
    <nav className="bg-white shadow-sm border-b sticky top-0 z-50">
      <div className="max-w-7xl mx-auto h-20 px-8 flex items-center justify-between">

        {/* Logo */}
        <Link to="/dashboard" className="flex items-center gap-2">
          <span className="text-2xl">🚀</span>
          <span className="text-2xl font-bold text-blue-600">
            CareerPilot AI
          </span>
        </Link>

        {/* Right Side */}
        <div className="flex items-center gap-6">

          <button className="text-2xl hover:scale-110 transition">
            🔔
          </button>

          <div className="flex items-center gap-3">

            <div className="w-11 h-11 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold">
              G
            </div>

            <div>
              <p className="font-semibold text-slate-900">
                Gopi
              </p>

              <p className="text-sm text-gray-500">
                AI & DS Student
              </p>
            </div>

          </div>

        </div>

      </div>
    </nav>
  );
}

export default DashboardNavbar;