import Navbar from "../../components/Navbar/Navbar";
import Hero from "../../components/Hero/Hero";
import Statistics from "../../components/Statistics/Statistics";
import FeaturedStories from "../../components/FeaturedStories/FeaturedStories";
import GenreSection from "../../components/GenreSection/GenreSection";
import TopWriters from "../../components/TopWriters/TopWriters";
import CollaborationCTA from "../../components/CollaborationCTA/CollaborationCTA";
import Testimonials from "../../components/Testimonials/Testimonials";
import FinalCTA from "../../components/FinalCTA/FinalCTA";
import Footer from "../../components/Footer/Footer";

function LandingPage() {
  return (
    <div className="bg-[#0B0907] text-white overflow-x-hidden">
      <Navbar />
      <Hero />
      <Statistics />
      <FeaturedStories />
      <GenreSection />
      <TopWriters />
      <CollaborationCTA />
      <Testimonials />
      <FinalCTA />
      <Footer />
    </div>
  );
}

export default LandingPage;