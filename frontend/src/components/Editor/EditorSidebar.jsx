import { useState } from "react";
import { Palette, Music, Play } from "lucide-react";
import backgroundMusic from "../../data/backgroundMusic";
import "./Editor.css";

const FONTS = ["Playfair Display", "Georgia", "DM Mono", "Times New Roman"];

const THEMES = [
  { name: "Parchment", bg: "#f2e8d5", text: "#2a2420" },
  { name: "Midnight", bg: "#12102a", text: "#c9b8f5" },
  { name: "Forest", bg: "#0f1a14", text: "#a8d9b0" },
  { name: "Ember", bg: "#1f0f0d", text: "#e0a898" },
];



const MOODS = [
  "Mysterious", "Romantic", "Thrilling", "Dark",
  "Hopeful", "Melancholic", "Epic", "Whimsical",
];

const DAILY_GOAL_WORDS = 1000;

export default function EditorSidebar({
  fontFamily,
  onFontChange,
  theme,
  onThemeChange,
  music,
  onMusicChange,
  moods,
  onMoodToggle,
  wordCount,
  charCount,
  readTime,
  paragraphCount,
  isSaved,
}) {
  const [activeTab, setActiveTab] = useState("Settings");

  const goalPercent = Math.min(100, Math.round((wordCount / DAILY_GOAL_WORDS) * 100));
  const circumference = 2 * Math.PI * 42;
  const strokeOffset = circumference - (goalPercent / 100) * circumference;

  return (
    <aside className="editor-sidebar">

      <div className="editor-sidebar-tabs">
        <button
          className={`editor-sidebar-tab ${activeTab === "Settings" ? "active" : ""}`}
          onClick={() => setActiveTab("Settings")}
        >
          Settings
        </button>
        <button
          className={`editor-sidebar-tab ${activeTab === "Goals" ? "active" : ""}`}
          onClick={() => setActiveTab("Goals")}
        >
          Goals
        </button>
      </div>

      {activeTab === "Settings" && (
        <div className="editor-sidebar-content">

          <p className="editor-sidebar-heading">FONT</p>
          <div className="editor-font-list">
            {FONTS.map((font) => (
              <button
                key={font}
                className={`editor-font-option ${fontFamily === font ? "active" : ""}`}
                style={{ fontFamily: font }}
                onClick={() => onFontChange(font)}
              >
                {font}
              </button>
            ))}
          </div>

          <p className="editor-sidebar-heading">
            <Palette size={13} /> THEME
          </p>
          <div className="editor-theme-grid">
            {THEMES.map((t) => (
              <button
                key={t.name}
                className={`editor-theme-swatch ${theme === t.name ? "active" : ""}`}
                style={{ background: t.bg, color: t.text }}
                onClick={() => onThemeChange(t.name)}
              >
                {t.name}
              </button>
            ))}
          </div>

          <p className="editor-sidebar-heading">
            <Music size={13} /> BACKGROUND MUSIC
          </p>
         <div className="editor-music-list">
  {backgroundMusic.map((track) => (
    <button
      key={track.name}
      className={`editor-music-option ${music === track.name ? "active" : ""}`}
      onClick={() => onMusicChange(track.name)}
    >
      {music === track.name && <Play size={12} className="editor-music-play-icon" />}
      {music !== track.name && <span className="editor-music-radio" />}
      {track.name}
    </button>
  ))}
</div>

          <p className="editor-sidebar-heading">MOOD</p>
          <div className="editor-mood-grid">
            {MOODS.map((mood) => (
              <button
                key={mood}
                className={`editor-mood-chip ${moods.includes(mood) ? "active" : ""}`}
                onClick={() => onMoodToggle(mood)}
              >
                {mood}
              </button>
            ))}
          </div>

        </div>
      )}

      {activeTab === "Goals" && (
        <div className="editor-sidebar-content">

          <p className="editor-sidebar-heading">◎ DAILY GOAL</p>
          <div className="daily-goal-card">
            <svg width="90" height="90" viewBox="0 0 100 100" className="daily-goal-ring">
              <circle cx="50" cy="50" r="42" fill="none" stroke="#2a2724" strokeWidth="8" />
              <circle
                cx="50" cy="50" r="42" fill="none"
                stroke="#c9a15c" strokeWidth="8" strokeLinecap="round"
                strokeDasharray={circumference}
                strokeDashoffset={strokeOffset}
                transform="rotate(-90 50 50)"
              />
              <text x="50" y="58" textAnchor="middle" className="daily-goal-ring-text">
                {wordCount}
              </text>
            </svg>

            <div className="daily-goal-info">
              <p className="daily-goal-target">/ {DAILY_GOAL_WORDS} words</p>
              <p className="daily-goal-percent">{goalPercent}% of daily goal</p>
            </div>
          </div>

          <p className="editor-sidebar-heading">SESSION STATS</p>
          <div className="session-stats-list">
            <div className="session-stat-row">
              <span>Words</span>
              <strong>{wordCount}</strong>
            </div>
            <div className="session-stat-row">
              <span>Characters</span>
              <strong>{charCount}</strong>
            </div>
            <div className="session-stat-row">
              <span>Est. Read Time</span>
              <strong>{readTime} min</strong>
            </div>
            <div className="session-stat-row">
              <span>Paragraphs</span>
              <strong>{paragraphCount}</strong>
            </div>
          </div>

          <p className="editor-sidebar-heading">AUTOSAVE</p>
          <div className="autosave-status">
            <span className={`autosave-dot ${isSaved ? "saved" : "unsaved"}`} />
            {isSaved ? "All changes saved" : "Saving..."}
          </div>

        </div>
      )}

    </aside>
  );
}