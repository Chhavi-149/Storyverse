import { Link } from "react-router-dom";
import { Eye, Heart, BookOpen, Star, BookmarkPlus, Share2, Settings, PenLine } from "lucide-react";
import "./Story.css";

function parseCount(val) {
  if (typeof val === "number") return val;
  if (!val) return 0;
  const str = String(val).trim().toLowerCase();
  if (str.endsWith("k")) return Math.round(parseFloat(str) * 1000);
  if (str.endsWith("m")) return Math.round(parseFloat(str) * 1000000);
  return parseInt(str, 10) || 0;
}

function formatCount(n) {
  if (n >= 1000000) return (n / 1000000).toFixed(1).replace(/\.0$/, "") + "M";
  if (n >= 1000) return (n / 1000).toFixed(1).replace(/\.0$/, "") + "k";
  return String(n);
}

export default function StoryHero({
  story,
  isLiked,
  onLikeToggle,
  isBookmarked,
  onBookmarkToggle,
  onSettingsClick,
  onContinueStory,
  onShare,
  shareCopied,
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
  <p>{formatCount(parseCount(story.likes) + (isLiked ? 1 : 0))}</p>
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
              <Link to={`/reader/${story.id}/1`} className="story-start-reading-btn">
                <BookOpen size={17} />
                Start Reading
              </Link>

             <button className="story-continue-btn" onClick={onContinueStory}>
             <PenLine size={17} />
              Continue Story
             </button>

              <button
  className={`story-icon-action-btn ${isLiked ? "active" : ""}`}
  onClick={onLikeToggle}
  aria-label="Like"
>
  <Heart size={17} />
  {formatCount(parseCount(story.likes) + (isLiked ? 1 : 0))}
</button>

              <button
                className={`story-icon-action-btn ${isBookmarked ? "active" : ""}`}
                onClick={onBookmarkToggle}
                aria-label="Bookmark"
              >
                <BookmarkPlus size={17} />
              </button>

              <button className="story-icon-action-btn" onClick={onShare} aria-label="Share">
  <Share2 size={17} />
</button>
{shareCopied && (
  <span style={{ fontSize: "13px", color: "#c9a15c", marginLeft: "6px" }}>
    Link copied!
  </span>
)}

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