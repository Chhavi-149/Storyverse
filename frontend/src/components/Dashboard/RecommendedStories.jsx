import { Link } from "react-router-dom";
import exploreStories from "../../data/exploreStories";
import "./RecommendedStories.css";

const RECOMMENDED_IDS = [3, 4, 5, 6];

export default function RecommendedStories() {
  const recommended = RECOMMENDED_IDS
    .map((id) => exploreStories.find((s) => s.id === id))
    .filter(Boolean);

  return (
    <section className="recommended-container">
      <h2 className="section-heading-title"><span>⚡</span> Recommended for You</h2>

      <div className="recommended-grid">
        {recommended.map((story) => (
          <Link key={story.id} to={`/story/${story.id}`} className="recommended-card-link">
            <div className="recommended-card">
              <div className="recommended-cover">📖</div>

              <div className="recommended-info">
                <span className="recommended-badge">{story.genre.toUpperCase()}</span>
                <h3>{story.title}</h3>
                <p>{story.author}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}