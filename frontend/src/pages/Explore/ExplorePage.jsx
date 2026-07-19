import "./Explore.css";

import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

import ExploreHeader from "../../components/Explore/ExploreHeader";
import FilterSidebar from "../../components/Explore/FilterSidebar";
import ActiveFilters from "../../components/Explore/ActiveFilters";
import StoryGrid from "../../components/Explore/StoryGrid";
import LoadMore from "../../components/Explore/LoadMore";

function ExplorePage() {
  return (
    <div className="min-h-screen bg-[#0B1120]">
      <Navbar />

      <main className="max-w-7xl mx-auto px-6 py-10">

        <ExploreHeader />

        <div className="flex gap-8 mt-8">

          {/* Sidebar */}

          <FilterSidebar />

          {/* Story Section */}

          <div className="flex-1">

            <ActiveFilters />

            <StoryGrid />

            <LoadMore />

          </div>

        </div>

      </main>

      <Footer />
    </div>
  );
}

export default ExplorePage;