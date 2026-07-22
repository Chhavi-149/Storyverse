import { useState } from "react";
import { Bookmark, Clock } from "lucide-react";
import myStories from "../../data/myStories";
import bookmarkedStories from "../../data/bookmarkedStories";
import achievements from "../../data/achievements";
import readingHistory from "../../data/readingHistory";
import "./Profile.css";

const TABS = ["Stories", "Bookmarks", "Achievements", "History"];

function CoverThumb({ cover, title }) {
  return (
    <div className="profile-card-cover">
      {cover ? (
        <img src={cover} alt={title} onError={(e) => { e.currentTarget.style.display = "none"; }} />
      ) : (
        <span className="profile-cover-placeholder">📖</span>
      )}
    </div>
  );
}

export default function ProfileTabs({ initialTab = "Stories" }) {
  const [activeTab, setActiveTab] = useState(TABS.includes(initialTab) ? initialTab : "Stories");

  return (
    <section className="profile-tabs-section">
      <div className="profile-tabs-container">

        <div className="profile-tabs-bar">
          {TABS.map((tab) => (
            <button
              key={tab}
              className={`profile-tab-btn ${activeTab === tab ? "active" : ""}`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>

        {activeTab === "Stories" && (
          <div className="profile-story-grid">
            {myStories.map((story) => (
              <div key={story.id} className="profile-story-card">
                <CoverThumb cover={story.cover} title={story.title} />
                <span className="profile-story-genre">{story.genre}</span>
                <h3>{story.title}</h3>
                <div className="profile-story-stats">
                  <span>👁 {story.views}</span>
                  <span>♡ {story.likes}</span>
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === "Bookmarks" && (
          <div className="profile-bookmark-grid">
            {bookmarkedStories.map((story) => (
              <div key={story.id} className="profile-bookmark-card">
                <CoverThumb cover={story.cover} title={story.title} />
                <div className="profile-bookmark-info">
                  <span className="profile-story-genre">{story.genre}</span>
                  <h3>{story.title}</h3>
                  <p>{story.author}</p>
                  <span className="profile-bookmarked-label">
                    <Bookmark size={12} /> Bookmarked
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === "Achievements" && (
          <div className="profile-achievements-grid">
            {achievements.map((achievement) => (
              <div key={achievement.id} className="profile-achievement-card">
                <span className="profile-achievement-emoji">{achievement.emoji}</span>
                <h4>{achievement.title}</h4>
                <p>{achievement.description}</p>
              </div>
            ))}
          </div>
        )}

        {activeTab === "History" && (
          <div className="profile-history-list">
            {readingHistory.map((entry) => (
              <div key={entry.id} className="profile-history-row">
                <CoverThumb cover={entry.cover} title={entry.title} />
                <div className="profile-history-info">
                  <h4>{entry.title}</h4>
                  <p>{entry.author}</p>
                  <span className="profile-history-time">
                    <Clock size={12} /> {entry.readWhen}
                  </span>
                </div>
                <div className="profile-history-progress-track">
                  <div
                    className="profile-history-progress-fill"
                    style={{ width: `${entry.progress}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        )}

      </div>
    </section>
  );
}