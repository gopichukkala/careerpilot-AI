import { useState } from "react";
import { Link } from "react-router-dom";
import InputField from "../components/InputField";
import PublicNavbar from "../components/PublicNavbar";

function Register() {
  const [fullName, setFullName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  return (
    <>
      <PublicNavbar />

      <div className="min-h-screen bg-slate-50 flex pt-20">

        {/* Left Side */}
        <div className="hidden lg:flex w-1/2 bg-gradient-to-br from-blue-600 to-indigo-700 text-white p-16 flex-col justify-center">

          <h1 className="text-5xl font-bold leading-tight">
            Start Your
            <br />
            Career Journey 🚀
          </h1>

          <p className="mt-6 text-lg text-blue-100">
            Join CareerPilot AI and build your future with personalized career guidance.
          </p>

          <div className="mt-12 space-y-4 text-lg">
            <p>🎓 Personalized Learning Roadmaps</p>
            <p>📄 Smart ATS Resume Builder</p>
            <p>💼 Placement Preparation</p>
            <p>🤖 AI Career Mentor</p>
          </div>

        </div>

        {/* Right Side */}
        <div className="flex-1 flex items-center justify-center px-8">

          <div className="bg-white shadow-xl rounded-3xl p-10 w-full max-w-md">

            <h2 className="text-3xl font-bold text-slate-900">
              Create Account
            </h2>

            <p className="text-gray-500 mt-2 mb-8">
              Create your CareerPilot AI account.
            </p>

            <InputField
              label="Full Name"
              placeholder="Enter your full name"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
            />

            <InputField
              label="Username"
              placeholder="Choose a username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />

            <InputField
              label="Email Address"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <InputField
              label="Password"
              type="password"
              placeholder="Create a password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <InputField
              label="Confirm Password"
              type="password"
              placeholder="Confirm your password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />

            <label className="flex items-center gap-2 text-sm my-5">
              <input type="checkbox" />
              I agree to the Terms & Conditions
            </label>

            <button className="w-full bg-blue-600 hover:bg-blue-700 transition text-white py-3 rounded-xl font-semibold">
              Create Account
            </button>

            <p className="text-center mt-6 text-gray-600">
              Already have an account?{" "}
              <Link
                to="/login"
                className="text-blue-600 font-semibold hover:underline"
              >
                Login
              </Link>
            </p>

          </div>

        </div>

      </div>
    </>
  );
}

export default Register;