function WelcomeCard({ user }) {
  return (
    <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-3xl p-10 text-white shadow-lg">

      <h1 className="text-4xl font-bold">
        👋 Welcome Back, {user?.fullName || "Pilot"} 👋
      </h1>

      <p className="mt-4 text-blue-100 text-lg">
        Welcome back to CareerPilot AI.
      </p>

      <p className="mt-2 text-blue-200">
        Keep learning. Keep building. Keep growing.
      </p>

    </div>
  );
}

export default WelcomeCard;