import "./Dashboard.css";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

import DashboardHeader from "../../components/Dashboard/DashboardHeader";
import CategoryTabs from "../../components/Dashboard/CategoryTabs";
import ContinueReading from "../../components/Dashboard/ContinueReading";
import TrendingStories from "../../components/Dashboard/TrendingStories";
import RecommendedStories from "../../components/Dashboard/RecommendedStories";
import WritingChallenge from "../../components/Dashboard/WritingChallenge";
import Opportunities from "../../components/Dashboard/Opportunities";
import TopWriters from "../../components/Dashboard/TopWriters";
import NovelRankings from "../../components/Dashboard/NovelRankings";

function DashboardPage() {
  return (
    <div className="min-h-screen bg-[#0B1120]">
      <Navbar />

      <main className="max-w-7xl mx-auto px-6 py-10">

        <DashboardHeader />

        <CategoryTabs />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

          {/* Left Side */}

          <div className="lg:col-span-2 space-y-8">
            <ContinueReading />
            <TrendingStories />
            <RecommendedStories />
          </div>

          {/* Right Side */}

          <div className="space-y-6">
            <WritingChallenge />
            <Opportunities />
            <TopWriters />
            <NovelRankings />
          </div>

        </div>

      </main>

      <Footer />
    </div>
  );
}

export default DashboardPage;