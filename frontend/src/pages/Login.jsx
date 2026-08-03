import { useState } from "react";
import { Link } from "react-router-dom";
import InputField from "../components/InputField";
import PublicNavbar from "../components/PublicNavbar";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <>
      <PublicNavbar />

      <div className="min-h-screen bg-slate-50 flex">

        {/* Left Side */}
        <div className="hidden lg:flex w-1/2 bg-gradient-to-br from-blue-600 to-indigo-700 text-white p-16 flex-col justify-center">

          <h1 className="text-5xl font-bold leading-tight">
            Welcome Back,
            <br />
            Pilot 🚀
          </h1>

          <p className="mt-6 text-lg text-blue-100">
            Continue navigating your career journey with CareerPilot AI.
          </p>

          <div className="mt-12 space-y-4 text-lg">
            <p>🎓 Learn Skills</p>
            <p>💼 Prepare for Placements</p>
            <p>📄 Build ATS Resume</p>
            <p>🤖 AI Career Guidance</p>
          </div>

        </div>

        {/* Right Side */}
        <div className="flex-1 flex items-center justify-center px-8">

          <div className="bg-white shadow-xl rounded-3xl p-10 w-full max-w-md">

            <h2 className="text-3xl font-bold text-slate-900">
              Login
            </h2>

            <p className="text-gray-500 mt-2 mb-8">
              Continue your CareerPilot AI journey.
            </p>

            <InputField
              label="Email or Username"
              placeholder="Enter your email or username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />

            <InputField
              label="Password"
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <div className="flex justify-between items-center text-sm mb-6">
              <label className="flex items-center gap-2">
                <input type="checkbox" />
                Remember Me
              </label>

              <button className="text-blue-600 hover:underline">
                Forgot Password?
              </button>
            </div>

            <button className="w-full bg-blue-600 hover:bg-blue-700 transition text-white py-3 rounded-xl font-semibold">
              Login
            </button>

            <p className="text-center mt-6 text-gray-600">
              Don't have an account?{" "}
              <Link
                to="/register"
                className="text-blue-600 font-semibold hover:underline"
              >
                Create Account
              </Link>
            </p>

          </div>

        </div>

      </div>
    </>
  );
}

export default Login;