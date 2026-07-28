import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Bookmark, Clock, Quote, PenLine } from "lucide-react";
import { useAuth } from "../../context/AuthContext";
import { getStoriesByAuthor, getDraft, getStoryById } from "../../services/storyService";
import achievements from "../../data/achievements";
import readingHistory from "../../data/readingHistory";
import exploreStories from "../../data/exploreStories";
import { getAllHighlights } from "../../utils/readerStorage";
import "./Profile.css";

const TABS = ["Stories", "Bookmarks", "Achievements", "History", "Highlights"];

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

function getEngagementKey(uid) {
  return `inkwell_engagement_${uid}`;
}

export default function ProfileTabs({ initialTab = "Stories" }) {
  const [activeTab, setActiveTab] = useState(TABS.includes(initialTab) ? initialTab : "Stories");
  const [myHighlights, setMyHighlights] = useState([]);
  const [myStories, setMyStories] = useState([]);
  const [storiesLoading, setStoriesLoading] = useState(true);
  const [bookmarkedStories, setBookmarkedStories] = useState([]);
  const [bookmarksLoading, setBookmarksLoading] = useState(true);
  const navigate = useNavigate();
  const { currentUser } = useAuth();

  useEffect(() => {
    setMyHighlights(getAllHighlights());
  }, []);

  // Real stories written by the logged-in user: anything they've published,
  // plus their current in-progress draft (if any), pulled straight from Firestore.
  useEffect(() => {
    if (!currentUser) {
      setMyStories([]);
      setStoriesLoading(false);
      return;
    }

    setStoriesLoading(true);
    Promise.all([getStoriesByAuthor(currentUser.uid), getDraft(currentUser.uid)])
      .then(([published, draft]) => {
        const combined = [...published];

        if (draft?.title?.trim()) {
          combined.unshift({
            id: `draft-${currentUser.uid}`,
            title: draft.title,
            genre: draft.genre || "Uncategorized",
            cover: draft.coverImage || "",
            views: "—",
            likes: "—",
            isDraft: true,
          });
        }

        setMyStories(combined);
      })
      .catch((err) => console.error("Failed to load your stories:", err))
      .finally(() => setStoriesLoading(false));
  }, [currentUser]);

  // Real bookmarks: story IDs the user has bookmarked, stored locally per-user,
  // resolved against Firestore to get each story's current details.
  useEffect(() => {
    if (!currentUser) {
      setBookmarksLoading(false);
      return;
    }
    const stored = localStorage.getItem(getEngagementKey(currentUser.uid));
    const bookmarkedIds = stored ? JSON.parse(stored).bookmarked || [] : [];

    if (bookmarkedIds.length === 0) {
      setBookmarkedStories([]);
      setBookmarksLoading(false);
      return;
    }

    setBookmarksLoading(true);
    Promise.all(bookmarkedIds.map((id) => getStoryById(id)))
      .then((results) => setBookmarkedStories(results.filter(Boolean)))
      .catch((err) => console.error("Failed to load bookmarks:", err))
      .finally(() => setBookmarksLoading(false));
  }, [currentUser, activeTab]);

  const handleStoryClick = (story) => {
    if (story.isDraft) {
      navigate("/editor");
    } else {
      navigate(`/story/${story.id}`);
    }
  };

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
          <>
            {storiesLoading && (
              <p className="profile-stories-loading">Loading your stories...</p>
            )}

            {!storiesLoading && myStories.length === 0 && (
              <div className="profile-stories-empty">
                <p>You haven't written any stories yet — published or drafted.</p>
                <button className="profile-write-cta" onClick={() => navigate("/editor")}>
                  <PenLine size={15} /> Start Writing
                </button>
              </div>
            )}

            {!storiesLoading && myStories.length > 0 && (
              <div className="profile-story-grid">
                {myStories.map((story) => (
                  <div
                    key={story.id}
                    className="profile-story-card"
                    onClick={() => handleStoryClick(story)}
                  >
                    <CoverThumb cover={story.cover} title={story.title} />
                    <span className="profile-story-genre">
                      {story.isDraft ? "Draft" : story.genre}
                    </span>
                    <h3>{story.title}</h3>
                    <div className="profile-story-stats">
                      <span>👁 {story.views}</span>
                      <span>♡ {story.likes}</span>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </>
        )}

        {activeTab === "Bookmarks" && (
          <div className="profile-bookmark-grid">
            {bookmarksLoading && (
              <p style={{ color: "#9a9488", padding: "20px 0" }}>Loading bookmarks...</p>
            )}

            {!bookmarksLoading && bookmarkedStories.length === 0 && (
              <p style={{ color: "#9a9488", padding: "20px 0" }}>
                You haven't bookmarked any stories yet. Click the bookmark icon on any story to save it here.
              </p>
            )}

            {bookmarkedStories.map((story) => (
              <div
                key={story.id}
                className="profile-bookmark-card"
                onClick={() => navigate(`/story/${story.id}`)}
                style={{ cursor: "pointer" }}
              >
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

        {activeTab === "Highlights" && (
          <div className="profile-highlights-list">
            {myHighlights.length === 0 && (
              <p className="profile-highlights-empty">
                You haven't saved any highlights yet. Select text while reading to save your favorite lines.
              </p>
            )}

            {myHighlights.map((h) => {
              const story = exploreStories.find((s) => s.id === h.storyId);
              if (!story) return null;

              return (
                <button
                  key={h.id}
                  className="profile-highlight-card"
                  onClick={() => navigate(`/reader/${h.storyId}/${h.chapterNumber}?highlight=${h.id}`)}
                >
                  <Quote size={16} className="profile-highlight-quote-icon" />
                  <p className="profile-highlight-text">"{h.text}"</p>
                  <div className="profile-highlight-meta">
                    <CoverThumb cover={story.cover} title={story.title} />
                    <div>
                      <h4>{story.title}</h4>
                      <p>Chapter {h.chapterNumber}</p>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        )}

      </div>
    </section>
  );
}