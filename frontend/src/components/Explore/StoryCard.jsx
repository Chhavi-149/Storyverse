import { Eye, Heart, BookOpen, Star } from "lucide-react";
import "./StoryCard.css";

export default function StoryCard({ story }) {
  const { title, author, genre, status, excerpt, cover, views, likes, chapters, rating } = story;

  return (
    <div className="story-card">

      <div className="story-card-cover">
        {cover ? (
          <img
            src={cover}
            alt={title}
            onError={(e) => { e.currentTarget.style.display = "none"; }}
          />
        ) : (
          <span className="story-card-cover-placeholder">📖</span>
        )}
        <span className="story-card-genre-badge">{genre}</span>
        {status && (
          <span className={`story-card-status-badge status-${status.toLowerCase()}`}>
            {status}
          </span>
        )}
      </div>

      <div className="story-card-body">
        <h3>{title}</h3>
        <p className="story-card-author">by {author}</p>
        <p className="story-card-excerpt">{excerpt}</p>

        <div className="story-card-stats">
          <span><Eye size={13} /> {views}</span>
          <span><Heart size={13} /> {likes}</span>
          <span><BookOpen size={13} /> {chapters} ch</span>
          <span className="story-card-rating"><Star size={13} /> {rating}</span>
        </div>
      </div>

    </div>
  );
}