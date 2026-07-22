import { useState, useRef, useEffect } from "react";
import { ListOrdered, X, Quote } from "lucide-react";
import "./Reader.css";

export default function ChapterListDrawer({
  story,
  chapters,
  activeChapter,
  onSelectChapter,
  isOpen,
  onOpen,
  onClose,
  visible,
  highlights,
  onJumpToHighlight,
}) {
  const [position, setPosition] = useState(() => {
    const saved = localStorage.getItem("inkwell_chapter_toggle_pos");
    return saved ? JSON.parse(saved) : { top: window.innerHeight / 2, left: window.innerWidth - 20 };
  });
  const [drawerTab, setDrawerTab] = useState("Chapters");
  const dragInfo = useRef({ dragging: false, moved: false, offsetX: 0, offsetY: 0 });

  const handlePointerDown = (e) => {
    dragInfo.current.dragging = true;
    dragInfo.current.moved = false;
    dragInfo.current.offsetX = e.clientX - position.left;
    dragInfo.current.offsetY = e.clientY - position.top;
  };

  useEffect(() => {
    const handlePointerMove = (e) => {
      if (!dragInfo.current.dragging) return;
      dragInfo.current.moved = true;

      const newLeft = Math.min(
        window.innerWidth - 20,
        Math.max(60, e.clientX - dragInfo.current.offsetX)
      );
      const newTop = Math.min(
        window.innerHeight - 20,
        Math.max(80, e.clientY - dragInfo.current.offsetY)
      );

      setPosition({ top: newTop, left: newLeft });
    };

    const handlePointerUp = () => {
      if (dragInfo.current.dragging) {
        localStorage.setItem("inkwell_chapter_toggle_pos", JSON.stringify(position));
      }
      dragInfo.current.dragging = false;
    };

    window.addEventListener("mousemove", handlePointerMove);
    window.addEventListener("mouseup", handlePointerUp);
    return () => {
      window.removeEventListener("mousemove", handlePointerMove);
      window.removeEventListener("mouseup", handlePointerUp);
    };
  }, [position]);

  const handleToggleClick = () => {
    if (!dragInfo.current.moved) onOpen();
  };

  if (!visible) return null;

  return (
    <>
      {!isOpen && (
        <button
          className="chapter-drawer-toggle draggable"
          style={{ top: position.top, left: position.left, right: "auto", transform: "translate(-100%, -50%)" }}
          onMouseDown={handlePointerDown}
          onClick={handleToggleClick}
        >
          <ListOrdered size={16} />
          Chapters
        </button>
      )}

      {isOpen && (
        <>
          <div className="chapter-drawer-overlay" onClick={onClose} />
          <div className="chapter-drawer">

            <div className="chapter-drawer-header">
              <h3 style={{ fontFamily: "'Playfair Display', serif", color: "#f5f0e8", fontSize: "1.1rem", fontWeight: 700 }}>
                {drawerTab === "Chapters" ? "Chapters" : "Highlights"}
              </h3>
              <button className="chapter-drawer-close" onClick={onClose} aria-label="Close">
                <X size={18} />
              </button>
            </div>

            <div className="chapter-drawer-story-info">
              <div className="chapter-drawer-cover">
                {story.cover ? (
                  <img
                    src={story.cover}
                    alt={story.title}
                    onError={(e) => { e.currentTarget.style.display = "none"; }}
                  />
                ) : (
                  <span>📖</span>
                )}
              </div>
              <div>
                <h4>{story.title}</h4>
                <p>{story.author}</p>
              </div>
            </div>

            <div className="chapter-drawer-tabs">
              <button
                className={`chapter-drawer-tab ${drawerTab === "Chapters" ? "active" : ""}`}
                onClick={() => setDrawerTab("Chapters")}
              >
                <ListOrdered size={14} />
                Chapters
              </button>
              <button
                className={`chapter-drawer-tab ${drawerTab === "Highlights" ? "active" : ""}`}
                onClick={() => setDrawerTab("Highlights")}
              >
                <Quote size={14} />
                Highlights {highlights.length > 0 && <span>{highlights.length}</span>}
              </button>
            </div>

            {drawerTab === "Chapters" && (
              <div className="chapter-drawer-list">
                {chapters.map((chapter) => (
                  <button
                    key={chapter.number}
                    className={`chapter-drawer-item ${activeChapter === chapter.number ? "active" : ""}`}
                    onClick={() => onSelectChapter(chapter.number)}
                  >
                    <span>{chapter.number}</span>
                    {chapter.title}
                  </button>
                ))}
              </div>
            )}

            {drawerTab === "Highlights" && (
              <div className="chapter-drawer-highlights-list">
                {highlights.length === 0 && (
                  <p className="chapter-drawer-highlights-empty">
                    No highlights saved yet for this story. Select any text while reading to save it.
                  </p>
                )}

                {highlights.map((h) => (
                  <button
                    key={h.id}
                    className="chapter-drawer-highlight-item"
                    onClick={() => onJumpToHighlight(h)}
                  >
                    <p className="chapter-drawer-highlight-text">"{h.text}"</p>
                    <span className="chapter-drawer-highlight-chapter">Chapter {h.chapterNumber}</span>
                  </button>
                ))}
              </div>
            )}

          </div>
        </>
      )}
    </>
  );
}