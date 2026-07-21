import { useState } from "react";
import PublicNavbar from "../../components/Common/PublicNavbar";
import RankingsHero from "../../components/Rankings/RankingsHero";
import Leaderboard from "../../components/Rankings/Leaderboard";
import TopAuthors from "../../components/Rankings/TopAuthors";
import Footer from "../../components/Footer/Footer";

export default function RankingsPage() {
  const [filters, setFilters] = useState({ period: "Weekly", sortBy: "Most Viewed" });

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-[#f5f0e8]">

      <PublicNavbar />

      <RankingsHero onFilterChange={setFilters} />

      {filters.sortBy === "Top New Authors" ? (
        <div style={{ maxWidth: "80rem", margin: "0 auto", padding: "0 1.5rem 80px" }}>
          <TopAuthors />
        </div>
      ) : (
        <Leaderboard period={filters.period} sortBy={filters.sortBy} />
      )}

      <Footer />

    </div>
  );
}