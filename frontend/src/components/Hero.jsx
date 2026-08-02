function Hero() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-20 lg:py-28">
      <div className="grid lg:grid-cols-2 gap-16 items-center">

        {/* Left Content */}
        <div>

          <p className="text-blue-600 font-semibold tracking-wide uppercase">
            AI Powered Career Platform
          </p>

          <h1 className="mt-4 text-5xl lg:text-6xl font-bold leading-tight text-slate-900">
            Your Journey from
            <span className="text-blue-600"> Classroom </span>
            to
            <span className="text-blue-600"> Career </span>
            Starts Here.
          </h1>

          <p className="mt-6 text-lg text-gray-600 leading-8">
            Learn smarter, build your professional profile,
            prepare for placements, and confidently launch your
            career with AI guiding you every step of the way.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">

            <button className="bg-blue-600 text-white px-7 py-3 rounded-xl font-semibold hover:bg-blue-700 transition">
              Start Your Journey
            </button>

            <button className="border border-blue-600 text-blue-600 px-7 py-3 rounded-xl font-semibold hover:bg-blue-50 transition">
              Login
            </button>

          </div>

        </div>

        {/* Right Side */}
        <div className="flex justify-center">

          <div className="bg-white shadow-xl rounded-3xl p-8 w-full max-w-md">

            <div className="space-y-6">

              <div className="flex items-center gap-4">
                <div className="text-3xl">🏫</div>
                <div>
                  <h3 className="font-bold">Learn</h3>
                  <p className="text-sm text-gray-500">
                    Build strong fundamentals.
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="text-3xl">📚</div>
                <div>
                  <h3 className="font-bold">Build</h3>
                  <p className="text-sm text-gray-500">
                    Create your resume and portfolio.
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="text-3xl">🎓</div>
                <div>
                  <h3 className="font-bold">Prepare</h3>
                  <p className="text-sm text-gray-500">
                    Get placement ready.
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="text-3xl">💼</div>
                <div>
                  <h3 className="font-bold">Launch</h3>
                  <p className="text-sm text-gray-500">
                    Begin your professional career.
                  </p>
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Hero;