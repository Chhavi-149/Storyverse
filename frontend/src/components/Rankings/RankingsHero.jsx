import "./Rankings.css";
import { Trophy, Crown, Star } from "lucide-react";

function RankingsHero() {
  return (

    <section className="rankings-hero">

      <div className="rankings-overlay"></div>

      <div className="rankings-content">

        <span className="rankings-badge">

          👑 Hall of Fame

        </span>

        <h1>

          Top Writers
          <br />

          <span>Lead the Storyverse.</span>

        </h1>

        <p>

          Climb the leaderboard by publishing incredible
          stories, earning readers, collecting likes,
          and participating in competitions.

        </p>

        <div className="rankings-stats">

          <div>

            <Trophy size={30} />

            <h3>50K+</h3>

            <span>Stories Published</span>

          </div>

          <div>

            <Crown size={30} />

            <h3>8K+</h3>

            <span>Active Writers</span>

          </div>

          <div>

            <Star size={30} />

            <h3>2M+</h3>

            <span>Total Reads</span>

          </div>

        </div>

      </div>

    </section>

  );
}

export default RankingsHero;