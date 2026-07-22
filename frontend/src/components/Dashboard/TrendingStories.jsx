import { Link } from "react-router-dom";
import exploreStories from "../../data/exploreStories";
import "./TrendingStories.css";

function parseCompactNumber(value) {
  const cleaned = value.toLowerCase().replace(/,/g, "");
  if (cleaned.endsWith("m")) return parseFloat(cleaned) * 1000000;
  if (cleaned.endsWith("k")) return parseFloat(cleaned) * 1000;
  return parseFloat(cleaned) || 0;
}

export default function TrendingStories() {
  const trending = [...exploreStories]
    .sort((a, b) => parseCompactNumber(b.views) - parseCompactNumber(a.views))
    .slice(0, 4);

  return (
    <section className="trending-container">
      <div className="section-heading">
        <h2><span>🔥</span> Trending Today</h2>
        <a href="#">Explore ›</a>
      </div>

      <div className="trending-grid">
        {trending.map((story, index) => (
          <Link key={story.id} to={`/story/${story.id}`} className="trending-card-link">
            <div className="trending-card">
              <span className="trending-rank">{index + 1}</span>

              <div className="trending-info">
                <h3>{story.title}</h3>
                <p className="trending-author">by {story.author}</p>
                <div className="trending-stats">
                  <span>👁 {story.views}</span>
                  <span>⭐ {story.rating}</span>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}