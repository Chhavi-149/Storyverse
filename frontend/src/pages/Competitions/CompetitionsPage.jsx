import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import BackButton from "../../components/Common/BackButton";

import CompetitionHero from "../../components/Competitions/CompetitionHero";
import ActiveCompetitions from "../../components/Competitions/ActiveCompetitions";
import UpcomingCompetitions from "../../components/Competitions/UpcomingCompetitions";
import PastWinners from "../../components/Competitions/PastWinners";

import "../../components/Competitions/Competitions.css";

function CompetitionsPage() {
  return (
    <>
      <Navbar />

      <main className="competitions-page">

        <div className="page-top">
          <BackButton />
        </div>

        <CompetitionHero />

        <ActiveCompetitions />

        <UpcomingCompetitions />

        <PastWinners />

      </main>

      <Footer />
    </>
  );
}

export default CompetitionsPage;