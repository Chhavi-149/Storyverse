import { useState, useEffect, useRef } from "react";
import { useParams, useNavigate, useSearchParams, Link } from "react-router-dom";
import PublicNavbar from "../../components/Common/PublicNavbar";
import ReaderToolbar from "../../components/Reader/ReaderToolbar";
import ReaderContent from "../../components/Reader/ReaderContent";
import ChapterListDrawer from "../../components/Reader/ChapterListDrawer";
import backgroundMusic from "../../data/backgroundMusic";
import { getStoryById, getStoryChapters } from "../../services/storyService";
import {
  getHighlightsForStory,
  saveHighlight,
  getAnnotationsForStory,
  saveAnnotation,
  deleteAnnotation,
} from "../../utils/readerStorage";
import "../../components/Reader/Reader.css";

export default function ReaderPage() {
  const { storyId, chapterNumber } = useParams();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const audioRef = useRef(null);

  const [story, setStory] = useState(null);
  const [chapters, setChapters] = useState([]);
  const [loading, setLoading] = useState(true);

  const currentChapterNum = Number(chapterNumber) || 1;
  const chapter = chapters.find((c) => c.number === currentChapterNum);

  const [fontSize, setFontSize] = useState(18);
  const [background, setBackground] = useState("Sepia");
  const [currentTrack, setCurrentTrack] = useState("None");
  const [mode, setMode] = useState("dark");
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [chapterMenuVisible, setChapterMenuVisible] = useState(true);
  const [highlights, setHighlights] = useState([]);
  const [annotations, setAnnotations] = useState([]);

  const scrollToHighlightId = searchParams.get("highlight")
    ? Number(searchParams.get("highlight"))
    : null;

  useEffect(() => {
    Promise.all([getStoryById(storyId), getStoryChapters(storyId)])
      .then(([storyData, chapterData]) => {
        setStory(storyData);
        setChapters(chapterData);
      })
      .catch((err) => console.error("Failed to load reader content:", err))
      .finally(() => setLoading(false));
  }, [storyId]);

  useEffect(() => {
    setHighlights(getHighlightsForStory(storyId));
    setAnnotations(getAnnotationsForStory(storyId));
  }, [storyId]);

  // Records last-read chapter so "Continue Story" on the Story page can resume here
  useEffect(() => {
    if (!story || !chapter) return;
    const progress = JSON.parse(localStorage.getItem("inkwell_last_read") || "{}");
    progress[storyId] = currentChapterNum;
    localStorage.setItem("inkwell_last_read", JSON.stringify(progress));
  }, [storyId, currentChapterNum, story, chapter]);

  useEffect(() => {
    if (!scrollToHighlightId) return;
    const el = document.querySelector(".reader-paragraph-flash");
    if (el) {
      setTimeout(() => el.scrollIntoView({ behavior: "smooth", block: "center" }), 200);
    }
  }, [scrollToHighlightId, highlights]);

  useEffect(() => {
    return () => {
      if (audioRef.current) audioRef.current.pause();
    };
  }, []);

  const handleTrackSelect = (trackName) => {
    setCurrentTrack(trackName);
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current = null;
    }
    const track = backgroundMusic.find((t) => t.name === trackName);
    if (track?.file) {
      const audio = new Audio(track.file);
      audio.loop = true;
      audio.volume = 0.4;
      audio.play().catch((err) => console.warn("Playback failed:", err.message));
      audioRef.current = audio;
    }
  };

  const handleSaveHighlight = (newHighlight) => {
    setHighlights(saveHighlight(storyId, newHighlight));
  };

  const handleSaveAnnotation = (newAnnotation) => {
    setAnnotations(saveAnnotation(storyId, newAnnotation));
  };

  const handleDeleteAnnotation = (annotationId) => {
    setAnnotations(deleteAnnotation(storyId, annotationId));
  };

  const goToChapter = (num) => {
    navigate(`/reader/${storyId}/${num}`);
    setDrawerOpen(false);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-[#0a0a0a] text-[#f5f0e8]">
        <PublicNavbar />
        <p style={{ textAlign: "center", padding: "120px 0", color: "#9a9488" }}>
          Loading chapter...
        </p>
      </div>
    );
  }

  if (!story || !chapter) {
    return (
      <div className="min-h-screen bg-[#0a0a0a] text-[#f5f0e8]">
        <PublicNavbar />
        <div style={{ textAlign: "center", padding: "120px 20px" }}>
          <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: "2rem", marginBottom: "16px" }}>
            Chapter not found
          </h1>
          <Link to="/explore" style={{ color: "#c9a15c", fontWeight: 700 }}>
            ← Back to Explore
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className={`reader-page mode-${mode}`}>
      <PublicNavbar />

      <ReaderToolbar
        storyId={story.id}
        fontSize={fontSize}
        onFontSizeChange={setFontSize}
        background={background}
        onBackgroundChange={setBackground}
        currentTrack={currentTrack}
        onTrackSelect={handleTrackSelect}
        mode={mode}
        onModeToggle={() => setMode((prev) => (prev === "light" ? "dark" : "light"))}
        chapterMenuVisible={chapterMenuVisible}
        onToggleChapterMenu={() => setChapterMenuVisible((prev) => !prev)}
      />

      <ReaderContent
        chapter={chapter}
        fontSize={fontSize}
        background={background}
        chapterNumber={currentChapterNum}
        totalChapters={chapters.length}
        onPrevChapter={() => goToChapter(currentChapterNum - 1)}
        onNextChapter={() => goToChapter(currentChapterNum + 1)}
        highlights={highlights}
        onSaveHighlight={handleSaveHighlight}
        annotations={annotations}
        onSaveAnnotation={handleSaveAnnotation}
        onDeleteAnnotation={handleDeleteAnnotation}
        scrollToHighlightId={scrollToHighlightId}
      />

      <ChapterListDrawer
        story={story}
        chapters={chapters}
        activeChapter={currentChapterNum}
        onSelectChapter={goToChapter}
        isOpen={drawerOpen}
        onOpen={() => setDrawerOpen(true)}
        onClose={() => setDrawerOpen(false)}
        visible={chapterMenuVisible}
        highlights={highlights}
        onJumpToHighlight={(h) => {
          if (h.chapterNumber === currentChapterNum) {
            setDrawerOpen(false);
            const el = document.querySelectorAll(".reader-paragraph")[h.paraIndex];
            if (el) el.scrollIntoView({ behavior: "smooth", block: "center" });
          } else {
            navigate(`/reader/${storyId}/${h.chapterNumber}?highlight=${h.id}`);
          }
        }}
      />
    </div>
  );
}