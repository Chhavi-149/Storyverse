import "./Competitions.css";
import { Trophy, Users, Medal } from "lucide-react";

function CompetitionHero() {
  return (
    <section className="competition-hero">

      <div className="competition-overlay"></div>

      <div className="competition-content">

        <span className="competition-badge">
          🏆 Weekly & Monthly Challenges
        </span>

        <h1>
          Compete.
          <br />
          <span>Write. Win.</span>
        </h1>

        <p>
          Join writing competitions, challenge your creativity,
          earn exclusive rewards, and climb the Inkwell rankings.
        </p>

        <div className="competition-stats">

          <div>
            <Trophy size={30} />
            <h3>24</h3>
            <span>Active Events</span>
          </div>

          <div>
            <Users size={30} />
            <h3>18K+</h3>
            <span>Participants</span>
          </div>

          <div>
            <Medal size={30} />
            <h3>₹2L+</h3>
            <span>Total Prize Pool</span>
          </div>

        </div>

      </div>

    </section>
  );
}

export default CompetitionHero;