import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Minus, Plus, Music, Sun, Moon, Eye, EyeOff, Play } from "lucide-react";
import backgroundMusic from "../../data/backgroundMusic";
import "./Reader.css";

const BACKGROUNDS = [
  { name: "Sepia", color: "#2a2420", border: "#c9a15c" },
  { name: "Parchment", color: "#f2e8d5", border: "#f2e8d5" },
  { name: "Midnight", color: "#12102a", border: "#12102a" },
  { name: "Forest", color: "#0f1a14", border: "#0f1a14" },
];

export default function ReaderToolbar({
  storyId,
  fontSize,
  onFontSizeChange,
  background,
  onBackgroundChange,
  currentTrack,
  onTrackSelect,
  mode,
  onModeToggle,
  chapterMenuVisible,
  onToggleChapterMenu,
}) {
  const [musicMenuOpen, setMusicMenuOpen] = useState(false);

  return (
    <div className="reader-toolbar">
      <Link to={`/story/${storyId}`} className="reader-exit-link">
        <ArrowLeft size={16} />
        Exit Reading Mode
      </Link>

      <div className="reader-toolbar-right">

        <div className="reader-font-control">
          <button
            className="reader-font-btn"
            onClick={() => onFontSizeChange(Math.max(14, fontSize - 2))}
            aria-label="Decrease font size"
          >
            A-
          </button>
          <span className="reader-font-size-label">{fontSize}px</span>
          <button
            className="reader-font-btn"
            onClick={() => onFontSizeChange(Math.min(28, fontSize + 2))}
            aria-label="Increase font size"
          >
            A+
          </button>
        </div>

        <div className="reader-bg-swatches">
          {BACKGROUNDS.map((bg) => (
            <button
              key={bg.name}
              className={`reader-bg-swatch ${background === bg.name ? "active" : ""}`}
              style={{ background: bg.color, borderColor: bg.border }}
              onClick={() => onBackgroundChange(bg.name)}
              aria-label={bg.name}
            />
          ))}
        </div>

        <div className="reader-music-wrap">
          <button
            className={`reader-icon-btn ${currentTrack !== "None" ? "active" : ""}`}
            onClick={() => setMusicMenuOpen((prev) => !prev)}
            aria-label="Background music"
          >
            <Music size={18} />
          </button>

          {musicMenuOpen && (
            <>
              <div className="reader-music-overlay" onClick={() => setMusicMenuOpen(false)} />
              <div className="reader-music-menu">
                {backgroundMusic.map((track) => (
                  <button
                    key={track.name}
                    className={`reader-music-option ${currentTrack === track.name ? "active" : ""}`}
                    onClick={() => {
                      onTrackSelect(track.name);
                      setMusicMenuOpen(false);
                    }}
                  >
                    {currentTrack === track.name && <Play size={12} />}
                    {track.name}
                  </button>
                ))}
              </div>
            </>
          )}
        </div>

        <button
          className={`reader-icon-btn ${chapterMenuVisible ? "active" : ""}`}
          onClick={onToggleChapterMenu}
          aria-label="Toggle chapter menu"
        >
          {chapterMenuVisible ? <Eye size={18} /> : <EyeOff size={18} />}
        </button>

       

      </div>
    </div>
  );
}