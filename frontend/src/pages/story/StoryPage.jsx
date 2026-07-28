import { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import PublicNavbar from "../../components/Common/PublicNavbar";
import StoryHero from "../../components/Story/StoryHero";
import ReadingPreferences from "../../components/Story/ReadingPreferences";
import StorySynopsis from "../../components/Story/StorySynopsis";
import StoryComments from "../../components/Story/StoryComments";
import RelatedStories from "../../components/Story/RelatedStories";
import Footer from "../../components/Footer/Footer";
import { useAuth } from "../../context/AuthContext";
import { getStoryById, getComments, addComment } from "../../services/storyService";
import "../../components/Story/Story.css";

function getEngagementKey(uid) {
  return `inkwell_engagement_${uid}`;
}

function loadEngagement(uid) {
  if (!uid) return { liked: [], bookmarked: [] };
  const stored = localStorage.getItem(getEngagementKey(uid));
  return stored ? JSON.parse(stored) : { liked: [], bookmarked: [] };
}

function saveEngagement(uid, data) {
  if (!uid) return;
  localStorage.setItem(getEngagementKey(uid), JSON.stringify(data));
}

export default function StoryPage() {
  const { storyId } = useParams();
  const navigate = useNavigate();
  const { currentUser } = useAuth();

  const [story, setStory] = useState(null);
  const [loading, setLoading] = useState(true);
  const [comments, setComments] = useState([]);

  const [engagement, setEngagement] = useState(() => loadEngagement(currentUser?.uid));
  const [showPreferences, setShowPreferences] = useState(false);
  const [fontSize, setFontSize] = useState(18);
  const [background, setBackground] = useState("Sepia");
  const [music, setMusic] = useState("None");
  const [shareCopied, setShareCopied] = useState(false);

  const isLiked = engagement.liked.includes(Number(storyId));
  const isBookmarked = engagement.bookmarked.includes(Number(storyId));

  useEffect(() => {
    setLoading(true);
    getStoryById(storyId)
      .then(setStory)
      .catch((err) => console.error("Failed to load story:", err))
      .finally(() => setLoading(false));

    getComments(storyId)
      .then((fetched) =>
        setComments(
          fetched.map((c) => ({
            ...c,
            time: c.createdAt?.toDate?.().toLocaleDateString() || "Just now",
          }))
        )
      )
      .catch((err) => console.error("Failed to load comments:", err));
  }, [storyId]);

  const toggleEngagement = (key) => {
    if (!currentUser) return;
    setEngagement((prev) => {
      const list = prev[key];
      const id = Number(storyId);
      const updated = list.includes(id) ? list.filter((i) => i !== id) : [...list, id];
      const next = { ...prev, [key]: updated };
      saveEngagement(currentUser.uid, next);
      return next;
    });
  };

  const handleContinueStory = () => {
    const progress = JSON.parse(localStorage.getItem("inkwell_last_read") || "{}");
    const lastChapter = progress[storyId] || 1;
    navigate(`/reader/${storyId}/${lastChapter}`);
  };

  const handleShare = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setShareCopied(true);
      setTimeout(() => setShareCopied(false), 2000);
    } catch (err) {
      console.error("Copy failed:", err);
    }
  };

  const handleAddComment = async (text) => {
    if (!currentUser) return;
    await addComment(storyId, {
      text,
      author: currentUser.username,
      avatar: currentUser.photo || "",
    });
    setComments((prev) => [
      {
        id: Date.now(),
        text,
        author: currentUser.username,
        avatar: currentUser.photo || "",
        likes: 0,
        time: "Just now",
      },
      ...prev,
    ]);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-[#0a0a0a] text-[#f5f0e8]">
        <PublicNavbar />
        <p style={{ textAlign: "center", padding: "120px 0", color: "#9a9488" }}>
          Loading story...
        </p>
      </div>
    );
  }

  if (!story) {
    return (
      <div className="min-h-screen bg-[#0a0a0a] text-[#f5f0e8]">
        <PublicNavbar />
        <div style={{ textAlign: "center", padding: "120px 20px" }}>
          <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: "2rem", marginBottom: "16px" }}>
            Story not found
          </h1>
          <p style={{ color: "#9a9488", marginBottom: "24px" }}>
            This story doesn't exist or may have been removed.
          </p>
          <Link to="/explore" style={{ color: "#c9a15c", fontWeight: 700 }}>
            ← Back to Explore
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-[#f5f0e8]">
      <PublicNavbar />

      <StoryHero
        story={story}
        isLiked={isLiked}
        onLikeToggle={() => toggleEngagement("liked")}
        isBookmarked={isBookmarked}
        onBookmarkToggle={() => toggleEngagement("bookmarked")}
        onSettingsClick={() => setShowPreferences((prev) => !prev)}
        onContinueStory={handleContinueStory}
        onShare={handleShare}
        shareCopied={shareCopied}
      />

      {showPreferences && (
        <ReadingPreferences
          fontSize={fontSize}
          onFontSizeChange={setFontSize}
          background={background}
          onBackgroundChange={setBackground}
          music={music}
          onMusicClick={() => setMusic((prev) => (prev === "None" ? "Ambient Off" : "None"))}
        />
      )}

      <StorySynopsis story={story} />

      <StoryComments comments={comments} onAddComment={handleAddComment} />

      <RelatedStories currentStoryId={story.id} genre={story.genre} />

      <Footer />
    </div>
  );
}