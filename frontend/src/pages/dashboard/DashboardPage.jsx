import { useState } from "react";
import DashboardNavbar from "../../components/Dashboard/DashboardNavbar";
import DashboardSidebar from "../../components/Dashboard/DashboardSidebar";
import DashboardHero from "../../components/Dashboard/DashboardHero";
import GenreFilter from "../../components/Dashboard/GenreFilter";
import ContinueReading from "../../components/Dashboard/ContinueReading";
import WeeklyChallenge from "../../components/Dashboard/WeeklyChallenge";
import Opportunities from "../../components/Dashboard/Opportunities";
import TrendingStories from "../../components/Dashboard/TrendingStories";
import RecommendedStories from "../../components/Dashboard/RecommendedStories";
import TopWriters from "../../components/Dashboard/TopWriters";
import NovelRankings from "../../components/Dashboard/NovelRankings";

import Footer from "../../components/Footer/Footer";

import "../../components/Dashboard/DashboardLayout.css";

export default function DashboardPage() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-[#f5f0e8] selection:bg-[#c9a15c]/30">

      <DashboardNavbar onOpenSidebar={() => setSidebarOpen(true)} />
      <DashboardSidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      <main className="flex flex-col gap-16 py-12">

        {/* Hero + Genre Filter */}
        <div className="flex flex-col gap-6">
          <DashboardHero />
          <GenreFilter />
        </div>

        {/* Main Content Grid */}
        <div className="dashboard-container">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-3 items-start">

            {/* Left Column (~2/3 width) */}
            <div className="flex flex-col gap-16 lg:col-span-2">
              <ContinueReading />
              <TrendingStories />
              <RecommendedStories />
             
            </div>

            {/* Right Sidebar (~1/3 width) */}
            <div className="flex flex-col gap-10">
              <WeeklyChallenge />
              <Opportunities />
              <TopWriters />
              <NovelRankings />
            </div>

          </div>
        </div>

      </main>

      <Footer />

    </div>
  );
}