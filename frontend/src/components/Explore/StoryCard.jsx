import { Link } from "react-router-dom";
import "./Explore.css";

function StoryCard({ story }) {
  return (
    <Link to="/story" className="story-card">

      <img
        src={story.image}
        alt={story.title}
      />

      <div className="story-content">

        <h3>{story.title}</h3>

        <p>{story.author}</p>

        <span>{story.genre}</span>

      </div>

    </Link>
  );
}

export default StoryCard;