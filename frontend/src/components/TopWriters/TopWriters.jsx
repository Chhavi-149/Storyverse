import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import topWriters from "../../data/topWriters";
import "./TopWriters.css";

export default function TopWriters() {
  return (
    <section className="top-writers-landing-section">
      <div className="top-writers-landing-container">

        <div className="top-writers-landing-heading">
          <div>
            <p className="top-writers-landing-tag">COMMUNITY</p>
            <h2>The Voices Behind the Words</h2>
          </div>
          <Link to="/rankings" className="top-writers-landing-link">
            Full rankings <ChevronRight size={16} />
          </Link>
        </div>

        <div className="top-writers-landing-grid">
          {topWriters.map((writer) => (
            <div key={writer.rank} className="top-writer-landing-card">
              <div className="top-writer-landing-avatar-wrap">
                <img src={writer.avatar} alt={writer.name} />
                <span className="top-writer-landing-rank">{writer.rank}</span>
              </div>

              <h3>{writer.name}</h3>
              <span className="top-writer-landing-genre">{writer.genre}</span>

              <p className="top-writer-landing-stats">
                {writer.stories} stories<br />
                {writer.followers} followers
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}