import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import PublicNavbar from "../../components/Common/PublicNavbar";
import StoryHero from "../../components/Story/StoryHero";
import ReadingPreferences from "../../components/Story/ReadingPreferences";
import StorySynopsis from "../../components/Story/StorySynopsis";
import StoryComments from "../../components/Story/StoryComments";
import RelatedStories from "../../components/Story/RelatedStories";
import Footer from "../../components/Footer/Footer";
import exploreStories from "../../data/exploreStories";
import storyComments from "../../data/storyComments";
import currentUser from "../../data/currentUser";
import "../../components/Story/Story.css";

export default function StoryPage() {
  const { storyId } = useParams();
  const story = exploreStories.find((s) => s.id === Number(storyId));

  const [isLiked, setIsLiked] = useState(false);
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [showPreferences, setShowPreferences] = useState(false);

  const [fontSize, setFontSize] = useState(18);
  const [background, setBackground] = useState("Sepia");
  const [music, setMusic] = useState("None");

  const [comments, setComments] = useState(storyComments[Number(storyId)] || []);

  const handleAddComment = (text) => {
    const newComment = {
      id: Date.now(),
      author: currentUser.displayName,
      avatar: currentUser.avatar,
      text,
      time: "Just now",
      likes: 0,
    };
    setComments((prev) => [newComment, ...prev]);
  };

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
        onLikeToggle={() => setIsLiked((prev) => !prev)}
        isBookmarked={isBookmarked}
        onBookmarkToggle={() => setIsBookmarked((prev) => !prev)}
        onSettingsClick={() => setShowPreferences((prev) => !prev)}
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