import competitionStats from "../../data/competitionStats";
import "./Competitions.css";

export default function CompetitionHero() {
  return (
    <section className="competitions-hero">
      <div className="competitions-hero-container">

        <p className="competitions-hero-tag">INKWELL COMPETITIONS</p>

        <h1 className="competitions-hero-title">
          Write for
          <br />
          <span className="competitions-hero-title-italic">Glory & Prizes.</span>
        </h1>

        <p className="competitions-hero-subtext">
          Enter competitions curated for writers at every level. Win cash prizes, publication
          opportunities, and the recognition your voice deserves.
        </p>

        <div className="competitions-hero-stats">
          {competitionStats.map((stat) => (
            <div key={stat.label} className="competitions-hero-stat">
              <p className="competitions-hero-stat-value">{stat.value}</p>
              <p className="competitions-hero-stat-label">{stat.label}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}