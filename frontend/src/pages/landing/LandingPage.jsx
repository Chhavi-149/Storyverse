import PublicNavbar from "../../components/Common/PublicNavbar";
import Hero from "../../components/Hero/Hero";
import Statistics from "../../components/Statistics/Statistics";
import FeaturedStories from "../../components/FeaturedStories/FeaturedStories";
import GenreSection from "../../components/GenreSection/GenreSection";
import TopWriters from "../../components/TopWriters/TopWriters";
import CollaborationCTA from "../../components/CollaborationCTA/CollaborationCTA";
import Testimonials from "../../components/Testimonials/Testimonials";
import FinalCTA from "../../components/FinalCTA/FinalCTA";
import Footer from "../../components/Footer/Footer";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-[#f5f0e8]">

      <PublicNavbar />

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