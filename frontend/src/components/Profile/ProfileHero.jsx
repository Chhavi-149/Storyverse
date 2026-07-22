import { BookOpen, Eye, Users, Star } from "lucide-react";
import "./Profile.css";

export default function ProfileHero({ user, isOwnProfile, isFollowing, onFollowToggle }) {
  return (
    <section className="profile-hero">
      <div className="profile-hero-banner" />

      <div className="profile-hero-container">

        <div className="profile-hero-main">
          <img src={user.avatar} alt={user.displayName} className="profile-hero-avatar" />

          <div className="profile-hero-identity">
            <div className="profile-hero-name-row">
              <h1>{user.displayName}</h1>
              {user.badge && <span className="profile-hero-badge">{user.badge}</span>}
            </div>

            <p className="profile-hero-handle">
              @{user.username} · {user.tagline}
            </p>

            <p className="profile-hero-bio">{user.bio}</p>

            <div className="profile-hero-tags">
              {user.tags.map((tag) => (
                <span key={tag} className="profile-hero-tag">{tag.toUpperCase()}</span>
              ))}
            </div>
          </div>

          {!isOwnProfile && (
            <button
              className={`profile-follow-btn ${isFollowing ? "following" : ""}`}
              onClick={onFollowToggle}
            >
              {isFollowing ? "Following" : "Follow"}
            </button>
          )}
        </div>

        <div className="profile-hero-stats">
          <div className="profile-stat-card">
            <BookOpen size={20} className="profile-stat-icon" />
            <p className="profile-stat-value">{user.stats.stories}</p>
            <p className="profile-stat-label">Stories</p>
          </div>
          <div className="profile-stat-card">
            <Eye size={20} className="profile-stat-icon" />
            <p className="profile-stat-value">{user.stats.totalViews}</p>
            <p className="profile-stat-label">Total Views</p>
          </div>
          <div className="profile-stat-card">
            <Users size={20} className="profile-stat-icon" />
            <p className="profile-stat-value">{user.stats.followers}</p>
            <p className="profile-stat-label">Followers</p>
          </div>
          <div className="profile-stat-card">
            <Star size={20} className="profile-stat-icon" />
            <p className="profile-stat-value">{user.stats.avgRating}</p>
            <p className="profile-stat-label">Avg Rating</p>
          </div>
        </div>

      </div>
    </section>
  );
}