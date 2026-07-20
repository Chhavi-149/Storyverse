import { Eye, Heart, BookOpen, Star } from "lucide-react";
import "./StoryCard.css";

export default function StoryCard({ story }) {
  return (
    <article className="story-card">

      <div className="story-cover">
        <span className="story-genre-badge">{story.genre}</span>
        {story.cover && (
          <img
            src={story.cover}
            alt={story.title}
            onError={(e) => { e.currentTarget.style.display = "none"; }}
          />
        )}
      </div>

      <div className="story-card-body">
        <h3 className="story-title">{story.title}</h3>
        <p className="story-author">by {story.author}</p>
        <p className="story-excerpt">{story.excerpt}</p>

        <div className="story-stats">
          <span><Eye size={14} /> {story.views}</span>
          <span><Heart size={14} /> {story.likes}</span>
          <span><BookOpen size={14} /> {story.chapters} ch</span>
          <span className="story-rating"><Star size={14} /> {story.rating}</span>
        </div>
      </div>

    </article>
  );
}