import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import JourneySection from "../components/JourneySection";
import WhyChooseUs from "../components/WhyChooseUs";
import Footer from "../components/Footer";
function LandingPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />
      <Hero />
      <JourneySection />
      <WhyChooseUs />
      <Footer />
    </div>
  );
}

export default LandingPage;