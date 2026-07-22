import { Link } from "react-router-dom";
import { Eye, Heart, BookOpen, Star, BookmarkPlus, Share2, Settings, PenLine } from "lucide-react";
import "./Story.css";

export default function StoryHero({
  story,
  isLiked,
  onLikeToggle,
  isBookmarked,
  onBookmarkToggle,
  onSettingsClick,
}) {
  return (
    <section className="story-hero">
      <div className="story-hero-container">

        <div className="story-breadcrumb">
          <Link to="/explore">Explore</Link>
          <span>›</span>
          <span className="story-breadcrumb-genre">{story.genre.toUpperCase()}</span>
          <span>›</span>
          <span className="story-breadcrumb-current">{story.title}</span>
        </div>

        <div className="story-hero-main">

          <div className="story-hero-cover">
            {story.cover ? (
              <img
                src={story.cover}
                alt={story.title}
                onError={(e) => { e.currentTarget.style.display = "none"; }}
              />
            ) : (
              <span className="story-hero-cover-placeholder">📖</span>
            )}
          </div>

          <div className="story-hero-info">

            <div className="story-hero-badges">
              <span className="story-hero-badge genre">{story.genre.toUpperCase()}</span>
              <span className={`story-hero-badge status status-${story.status.toLowerCase()}`}>
                {story.status.toUpperCase()}
              </span>
            </div>

            <h1 className="story-hero-title">{story.title}</h1>

            <div className="story-hero-author-row">
              <img src={story.authorAvatar} alt={story.author} />
              <div>
                <h4>{story.author}</h4>
                <p>Author</p>
              </div>
            </div>

            <p className="story-hero-excerpt">"{story.excerpt}"</p>

            <div className="story-hero-tags">
              {story.tags.map((tag) => (
                <span key={tag} className="story-hero-tag">#{tag.replace(/\s+/g, "").toUpperCase()}</span>
              ))}
            </div>

            <div className="story-hero-stats">
              <div className="story-stat-card">
                <Eye size={18} />
                <p>{story.views}</p>
                <span>Views</span>
              </div>
              <div className="story-stat-card">
                <Heart size={18} />
                <p>{story.likes}</p>
                <span>Likes</span>
              </div>
              <div className="story-stat-card">
                <BookOpen size={18} />
                <p>{story.chapters}</p>
                <span>Chapters</span>
              </div>
              <div className="story-stat-card">
                <Star size={18} />
                <p>{story.rating}</p>
                <span>Rating</span>
              </div>
            </div>

            <div className="story-hero-actions">
              <Link to={`/reader/${story.id}`} className="story-start-reading-btn">
                <BookOpen size={17} />
                Start Reading
              </Link>

              <button className="story-continue-btn">
                <PenLine size={17} />
                Continue Story
              </button>

              <button
                className={`story-icon-action-btn ${isLiked ? "active" : ""}`}
                onClick={onLikeToggle}
                aria-label="Like"
              >
                <Heart size={17} />
                {story.likes}
              </button>

              <button
                className={`story-icon-action-btn ${isBookmarked ? "active" : ""}`}
                onClick={onBookmarkToggle}
                aria-label="Bookmark"
              >
                <BookmarkPlus size={17} />
              </button>

              <button className="story-icon-action-btn" aria-label="Share">
                <Share2 size={17} />
              </button>

              <button className="story-icon-action-btn" onClick={onSettingsClick} aria-label="Settings">
                <Settings size={17} />
              </button>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}