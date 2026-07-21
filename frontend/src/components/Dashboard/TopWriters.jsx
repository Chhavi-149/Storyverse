import topWriters from "../../data/topWriters";
import "./TopWriters.css";

export default function TopWriters() {
  return (
    <section className="top-writers-card">
      <div className="top-writers-heading">
        <p>TOP WRITERS</p>
        <a href="#">See all</a>
      </div>

      <div className="top-writers-list">
        {topWriters.map((writer) => (
          <div key={writer.rank} className="top-writer-row">
            <span className="writer-rank">{writer.rank}</span>

            <div className="writer-avatar">
              <img src={writer.avatar} alt={writer.name} />
            </div>

            <div className="writer-info">
              <h4>{writer.name}</h4>
              <p>{writer.followers} followers</p>
            </div>

            <span className="writer-trophy">🏆</span>
          </div>
        ))}
      </div>
    </section>
  );
}