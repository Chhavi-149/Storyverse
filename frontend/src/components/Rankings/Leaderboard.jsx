import { useState, useEffect } from "react";
import { Eye, Star, ArrowUp, ArrowDown, Minus } from "lucide-react";
import { getNovelRankings } from "../../services/rankingsService";
import "./Rankings.css";

function parseCompactNumber(value) {
  if (typeof value === "number") return value;
  const cleaned = value.toLowerCase().replace(/,/g, "");
  if (cleaned.endsWith("m")) return parseFloat(cleaned) * 1000000;
  if (cleaned.endsWith("k")) return parseFloat(cleaned) * 1000;
  return parseFloat(cleaned) || 0;
}

const SORT_FIELDS = {
  "Most Viewed": "views",
  "Most Liked": "likes",
  "Most Commented": "comments",
};

function ChangeIndicator({ change }) {
  if (change === null || change === undefined) {
    return (
      <span className="rank-change neutral">
        <Minus size={13} />
      </span>
    );
  }
  if (change > 0) {
    return (
      <span className="rank-change up">
        <ArrowUp size={13} /> {change}
      </span>
    );
  }
  return (
    <span className="rank-change down">
      <ArrowDown size={13} /> {Math.abs(change)}
    </span>
  );
}

export default function Leaderboard({ period = "Weekly", sortBy = "Most Viewed" }) {
  const [novelRankings, setNovelRankings] = useState([]);

  useEffect(() => {
    getNovelRankings().then(setNovelRankings).catch((err) => console.error(err));
  }, []);

  const field = SORT_FIELDS[sortBy] || "views";

  const withStats = novelRankings.map((story) => ({
    ...story,
    ...story.stats[period],
  }));

  const sorted = [...withStats].sort(
    (a, b) => parseCompactNumber(b[field]) - parseCompactNumber(a[field])
  );

  const topThree = sorted.slice(0, 3);
  const rest = sorted.slice(3);

  return (
    <section className="leaderboard-section">
      <div className="leaderboard-container">

        <div className="leaderboard-top3-grid">
          {topThree.map((story, index) => (
            <div key={story.id} className={`top3-card rank-${index + 1}`}>
              <div className="top3-cover-wrap">
                {story.cover ? (
                  <img
                    src={story.cover}
                    alt={story.title}
                    onError={(e) => { e.currentTarget.style.display = "none"; }}
                  />
                ) : (
                  <span className="top3-cover-placeholder">📖</span>
                )}
                <span className="top3-rank-badge">{index + 1}</span>
              </div>

              <h3>{story.title}</h3>
              <p className="top3-author">{story.author}</p>

              <div className="top3-stats">
                <span><Eye size={13} /> {story.views}</span>
                <span><Star size={13} /> {story.rating}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="leaderboard-list">
          {rest.map((story, index) => (
            <div key={story.id} className="leaderboard-row">
              <span className="leaderboard-rank-number">{index + 4}</span>

              <div className="leaderboard-row-cover">
                {story.cover ? (
                  <img
                    src={story.cover}
                    alt={story.title}
                    onError={(e) => { e.currentTarget.style.display = "none"; }}
                  />
                ) : (
                  <span className="leaderboard-cover-placeholder">📖</span>
                )}
              </div>

              <div className="leaderboard-row-info">
                <h4>{story.title}</h4>
                <p>
                  {story.author} · <span className="leaderboard-genre-tag">{story.genre}</span>
                </p>
              </div>

              <div className="leaderboard-row-stats">
                <span><Eye size={13} /> {story.views}</span>
                <span>♡ {story.likes}</span>
                <ChangeIndicator change={story.change} />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}