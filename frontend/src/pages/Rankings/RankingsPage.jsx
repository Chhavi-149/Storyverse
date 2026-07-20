import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import BackButton from "../../components/Common/BackButton";

import RankingsHero from "../../components/Rankings/RankingsHero";
import Leaderboard from "../../components/Rankings/Leaderboard";
import TopAuthors from "../../components/Rankings/TopAuthors";

import "../../components/Rankings/Rankings.css";

function RankingsPage() {
  return (
    <>
      <Navbar />

      <main className="rankings-page">

        <div className="page-top">
          <BackButton />
        </div>

        <RankingsHero />

        <Leaderboard />

        <TopAuthors />

      </main>

      <Footer />

    </>
  );
}

export default RankingsPage;