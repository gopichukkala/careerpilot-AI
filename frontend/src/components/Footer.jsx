function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid md:grid-cols-3 gap-10">

          {/* Brand */}
          <div>
            <h2 className="text-2xl font-bold text-blue-400">
              CareerPilot AI 🚀
            </h2>

            <p className="mt-4 text-gray-400 leading-7">
              Helping students transform their journey from the classroom
              to a successful career using AI-powered guidance.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold">
              Quick Links
            </h3>

            <ul className="mt-4 space-y-3 text-gray-400">
              <li className="hover:text-white cursor-pointer">Home</li>
              <li className="hover:text-white cursor-pointer">About</li>
              <li className="hover:text-white cursor-pointer">FAQs</li>
              <li className="hover:text-white cursor-pointer">Contact</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold">
              Contact
            </h3>

            <p className="mt-4 text-gray-400">
              support@careerpilotai.com
            </p>

            <p className="mt-2 text-gray-400">
              Empowering students with AI.
            </p>
          </div>

        </div>

        <div className="border-t border-slate-700 mt-12 pt-6 text-center text-gray-500">
          © 2026 CareerPilot AI. All Rights Reserved.
        </div>

      </div>
    </footer>
  );
}

export default Footer;