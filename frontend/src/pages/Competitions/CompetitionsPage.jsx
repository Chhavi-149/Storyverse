import PublicNavbar from "../../components/Common/PublicNavbar";
import CompetitionHero from "../../components/Competitions/CompetitionHero";
import ActiveCompetitions from "../../components/Competitions/ActiveCompetitions";
import WritingResources from "../../components/Competitions/WritingResources";
import UpcomingCompetitions from "../../components/Competitions/UpcomingCompetitions";
import PastWinners from "../../components/Competitions/PastWinners";
import Footer from "../../components/Footer/Footer";

export default function CompetitionsPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-[#f5f0e8]">

      <PublicNavbar />

      <CompetitionHero />
      <ActiveCompetitions />
      <WritingResources />
      <UpcomingCompetitions />
      <PastWinners />

      <Footer />

    </div>
  );
}