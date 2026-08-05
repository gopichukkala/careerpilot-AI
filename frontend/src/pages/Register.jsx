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

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [acceptedTerms, setAcceptedTerms] = useState(false);

  // Password Strength Function
  const getPasswordStrength = (password) => {
    if (password.length === 0) {
      return { text: "", color: "", width: "0%" };
    }

    let score = 0;

    if (password.length >= 8) score++;
    if (/[A-Z]/.test(password)) score++;
    if (/[0-9]/.test(password)) score++;
    if (/[^A-Za-z0-9]/.test(password)) score++;

    if (score <= 1)
      return {
        text: "🔴 Weak",
        color: "bg-red-500",
        width: "25%",
      };

    if (score === 2)
      return {
        text: "🟡 Medium",
        color: "bg-yellow-500",
        width: "50%",
      };

    if (score === 3)
      return {
        text: "🔵 Good",
        color: "bg-blue-500",
        width: "75%",
      };

    return {
      text: "🟢 Strong",
      color: "bg-green-500",
      width: "100%",
    };
  };

  const strength = getPasswordStrength(password);

 const handleRegister = async () => {
  if (!fullName.trim()) {
    setError("Please enter your full name.");
    return;
  }

  if (!username.trim()) {
    setError("Please enter a username.");
    return;
  }

  if (!email.trim()) {
    setError("Please enter your email.");
    return;
  }

  if (!/\S+@\S+\.\S+/.test(email)) {
    setError("Please enter a valid email address.");
    return;
  }

  if (!password) {
    setError("Please create a password.");
    return;
  }

  if (!confirmPassword) {
    setError("Please confirm your password.");
    return;
  }

  if (password !== confirmPassword) {
    setError("Passwords do not match.");
    return;
  }

  if (!acceptedTerms) {
    setError("Please accept the Terms & Conditions.");
    return;
  }

  setError("");
  setLoading(true);

  try {
    const response = await fetch("http://127.0.0.1:5000/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        fullName,
        username,
        email,
        password,
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      setError(data.message);
    } else {
      alert(data.message);

      setFullName("");
      setUsername("");
      setEmail("");
      setPassword("");
      setConfirmPassword("");
      setAcceptedTerms(false);
    }
  } catch (error) {
    setError("Server Error. Please try again.");
  }

  setLoading(false);
};

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
              onChange={(e) => {
                setFullName(e.target.value);
                setError("");
              }}
            />

            <InputField
              label="Username"
              placeholder="Choose a username"
              value={username}
              onChange={(e) => {
                setUsername(e.target.value);
                setError("");
              }}
            />

            <InputField
              label="Email Address"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                setError("");
              }}
            />

            <InputField
              label="Password"
              type="password"
              placeholder="Create a password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                setError("");
              }}
            />

            {/* Password Strength */}
            {password && (
              <div className="mb-5">
                <div className="flex justify-between text-sm mb-2">
                  <span>Password Strength</span>
                  <span className="font-medium">{strength.text}</span>
                </div>

                <div className="w-full h-2 bg-gray-200 rounded-full">
                  <div
                    className={`${strength.color} h-2 rounded-full transition-all duration-300`}
                    style={{ width: strength.width }}
                  ></div>
                </div>
              </div>
            )}

            <InputField
              label="Confirm Password"
              type="password"
              placeholder="Confirm your password"
              value={confirmPassword}
              onChange={(e) => {
                setConfirmPassword(e.target.value);
                setError("");
              }}
            />

            {confirmPassword && (
              <p
                className={`mt-2 mb-5 text-sm font-medium ${
                  password === confirmPassword
                    ? "text-green-600"
                    : "text-red-600"
                }`}
              >
                {password === confirmPassword
                  ? "✅ Passwords Match"
                  : "❌ Passwords do not match"}
              </p>
            )}

            <label className="flex items-center gap-2 text-sm my-5">
              <input
                type="checkbox"
                checked={acceptedTerms}
                onChange={(e) => {
                  setAcceptedTerms(e.target.checked);
                  setError("");
                }}
              />
              I agree to the Terms & Conditions
            </label>

            {error && (
              <div className="mb-4 rounded-lg border border-red-300 bg-red-100 px-4 py-3 text-red-700">
                ⚠ {error}
              </div>
            )}

            <button
              onClick={handleRegister}
              disabled={loading}
              className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 transition text-white py-3 rounded-xl font-semibold"
            >
              {loading ? "Creating Account..." : "Create Account"}
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