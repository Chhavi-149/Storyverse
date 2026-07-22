import { Minus, Plus, Play } from "lucide-react";
import "./Story.css";

const BACKGROUNDS = [
  { name: "Sepia", color: "#2a2420", border: "#c9a15c" },
  { name: "Parchment", color: "#f2e8d5", border: "#f2e8d5" },
  { name: "Midnight", color: "#12102a", border: "#12102a" },
  { name: "Forest", color: "#0f1a14", border: "#0f1a14" },
];

export default function ReadingPreferences({
  fontSize,
  onFontSizeChange,
  background,
  onBackgroundChange,
  music,
  onMusicClick,
}) {
  return (
    <div className="reading-preferences-panel">
      <h3>Reading Preferences</h3>

      <div className="reading-preferences-row">

        <div className="reading-pref-group">
          <p className="reading-pref-label">FONT SIZE</p>
          <div className="font-size-control">
            <button onClick={() => onFontSizeChange(Math.max(14, fontSize - 2))} aria-label="Decrease font size">
              <Minus size={15} />
            </button>
            <span>{fontSize}px</span>
            <button onClick={() => onFontSizeChange(Math.min(28, fontSize + 2))} aria-label="Increase font size">
              <Plus size={15} />
            </button>
          </div>
        </div>

        <div className="reading-pref-group">
          <p className="reading-pref-label">BACKGROUND</p>
          <div className="background-swatch-row">
            {BACKGROUNDS.map((bg) => (
              <button
                key={bg.name}
                className={`background-swatch ${background === bg.name ? "active" : ""}`}
                style={{ background: bg.color, borderColor: bg.border }}
                onClick={() => onBackgroundChange(bg.name)}
                aria-label={bg.name}
              />
            ))}
          </div>
        </div>

        <div className="reading-pref-group">
          <p className="reading-pref-label">MUSIC</p>
          <button className="music-select-btn" onClick={onMusicClick}>
            <Play size={13} />
            {music === "None" ? "Ambient Off" : music}
          </button>
        </div>

      </div>
    </div>
  );
}