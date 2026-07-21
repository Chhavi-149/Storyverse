import { Users, Crown } from "lucide-react";
import topWriters from "../../data/topWriters";
import "./Rankings.css";

export default function TopAuthors() {
  const sorted = [...topWriters].sort((a, b) => a.rank - b.rank);

  return (
    <div className="top-authors-list">
      {sorted.map((writer) => (
        <div key={writer.rank} className="top-author-row">
          <span className="top-author-rank">
            {writer.rank <= 3 ? <Crown size={16} /> : writer.rank}
          </span>

          <img src={writer.avatar} alt={writer.name} className="top-author-avatar" />

          <div className="top-author-info">
            <h4>{writer.name}</h4>
            <p>
              <span className="leaderboard-genre-tag">{writer.genre}</span> · {writer.stories} stories
            </p>
          </div>

          <span className="top-author-followers">
            <Users size={13} /> {writer.followers}
          </span>
        </div>
      ))}
    </div>
  );
}