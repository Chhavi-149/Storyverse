import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

import DashboardHero from "../../components/Dashboard/DashboardHero";
import ContinueReading from "../../components/Dashboard/ContinueReading";
import QuickActions from "../../components/Dashboard/QuickActions";
import DraftStories from "../../components/Dashboard/DraftStories";
import ReadingStats from "../../components/Dashboard/ReadingStats";
import RecommendedStories from "../../components/Dashboard/RecommendedStories";

import "../../components/Dashboard/Dashboard.css";

function DashboardPage() {
  return (
    <>
      <Navbar />

      <main className="dashboard-page">

        <DashboardHero />

        <ContinueReading />

        <QuickActions />

        <DraftStories />

        <ReadingStats />

        <RecommendedStories />

      </main>

      <Footer />
    </>
  );
}

export default DashboardPage;