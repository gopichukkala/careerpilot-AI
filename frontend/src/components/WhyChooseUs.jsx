function WhyChooseUs() {
  const features = [
    {
      icon: "🤖",
      title: "AI Career Buddy",
      description:
        "Get personalized career guidance and recommendations based on your goals."
    },
    {
      icon: "📄",
      title: "Smart Resume Builder",
      description:
        "Create ATS-friendly resumes with AI suggestions and professional templates."
    },
    {
      icon: "📊",
      title: "Progress Tracking",
      description:
        "Monitor your learning streaks, badges, and career readiness score."
    },
    {
      icon: "🎯",
      title: "Placement Ready",
      description:
        "Practice aptitude, coding, communication, and interview skills in one place."
    }
  ];

  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center">
          <p className="text-blue-600 uppercase tracking-widest font-semibold">
            Why CareerPilot AI?
          </p>

          <h2 className="mt-3 text-4xl font-bold text-slate-900">
            Everything Needed for Your Placement Journey
          </h2>

          <p className="mt-4 max-w-2xl mx-auto text-gray-600">
            One platform that helps you learn, build, prepare, and achieve your dream career.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">

          {features.map((feature) => (
            <div
              key={feature.title}
              className="bg-white rounded-2xl shadow-md p-8 hover:shadow-xl hover:-translate-y-2 transition duration-300"
            >
              <div className="text-5xl">
                {feature.icon}
              </div>

              <h3 className="mt-5 text-xl font-bold">
                {feature.title}
              </h3>

              <p className="mt-4 text-gray-600">
                {feature.description}
              </p>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default WhyChooseUs;