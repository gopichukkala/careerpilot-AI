function JourneySection() {
  const journeySteps = [
    {
      icon: "📚",
      title: "Learn",
      description:
        "Follow AI-powered learning roadmaps, track progress, and strengthen your skills."
    },
    {
      icon: "🛠️",
      title: "Build",
      description:
        "Create professional resumes, portfolios, and showcase your projects."
    },
    {
      icon: "🚀",
      title: "Launch",
      description:
        "Prepare for placements, practice interviews, and discover opportunities."
    }
  ];

  return (
    <section className="bg-gradient-to-b from-slate-50 to-white py-24">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center">
          <h2 className="text-4xl font-bold text-slate-900">
            Everything You Need to Succeed
          </h2>

          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            From learning new skills to landing your dream job,
            CareerPilot AI supports every step of your journey.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-16">

          {journeySteps.map((step) => (
            <div
              key={step.title}
              className="bg-slate-50 rounded-2xl p-8 shadow-md hover:shadow-xl hover:-translate-y-2 transition duration-300"
            >
              <div className="text-5xl">{step.icon}</div>

              <h3 className="mt-6 text-2xl font-bold">
                {step.title}
              </h3>

              <p className="mt-4 text-gray-600 leading-7">
                {step.description}
              </p>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}

export default JourneySection;