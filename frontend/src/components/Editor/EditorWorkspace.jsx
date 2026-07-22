import { useRef, useState, useEffect } from "react";
import { ArrowLeft, Tag, Image as ImageIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";
import "./Editor.css";

const GENRES = [
  "Fantasy", "Romance", "Mystery", "Sci-Fi", "Horror",
  "Thriller", "Historical", "Adventure", "Drama", "Poetry",
  "Literary Fiction", "Young Adult",
];

const THEME_STYLES = {
  Parchment: { background: "#f2e8d5", color: "#2a2420" },
  Midnight: { background: "#0d0d1a", color: "#e5e0f5" },
  Forest: { background: "#0f1a14", color: "#dcead9" },
  Ember: { background: "#1a0d0d", color: "#f0d9d0" },
};
export default function EditorWorkspace({
  title,
  onTitleChange,
  content,
  onContentChange,
  genre,
  onGenreChange,
  tags,
  onTagsChange,
  coverImage,
  onCoverChange,
  fontFamily,
  theme,
  wordCount,
  readTime,
  editorRef,
}) {
  const navigate = useNavigate();
  const fileInputRef = useRef(null);
  const [genreOpen, setGenreOpen] = useState(false);

  useEffect(() => {
    if (editorRef.current && editorRef.current.innerHTML !== content) {
      editorRef.current.innerHTML = content || "";
    }
  }, []);

  const handleInput = () => {
    onContentChange(editorRef.current.innerHTML);
  };

  const handleCoverSelect = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onloadend = () => onCoverChange(reader.result);
    reader.readAsDataURL(file);
  };

  const themeStyle = THEME_STYLES[theme] || THEME_STYLES.Parchment;

  return (
    <div className="editor-workspace">

      <div className="editor-workspace-topbar">
        <button className="editor-back-btn" onClick={() => navigate(-1)} aria-label="Go back">
          <ArrowLeft size={20} />
        </button>

        <input
          type="text"
          className="editor-title-input"
          placeholder="Your Story Title..."
          value={title}
          onChange={(e) => onTitleChange(e.target.value)}
        />
      </div>

      <div className="editor-meta-row">

        <div className="editor-genre-select">
          <button className="editor-genre-trigger" onClick={() => setGenreOpen(!genreOpen)}>
            <Tag size={15} />
            {genre || "Select Genre"}
          </button>
          {genreOpen && (
            <div className="editor-genre-dropdown">
              {GENRES.map((g) => (
                <button
                  key={g}
                  className="editor-genre-option"
                  onClick={() => { onGenreChange(g); setGenreOpen(false); }}
                >
                  {g}
                </button>
              ))}
            </div>
          )}
        </div>

        <input
          type="text"
          className="editor-tags-input"
          placeholder="Tags (comma-separated)"
          value={tags}
          onChange={(e) => onTagsChange(e.target.value)}
        />

        <button className="editor-cover-btn" onClick={() => fileInputRef.current.click()}>
          <ImageIcon size={15} />
          {coverImage ? "Change Cover" : "Add Cover"}
        </button>
        <input
          type="file"
          accept="image/*"
          ref={fileInputRef}
          onChange={handleCoverSelect}
          hidden
        />

        <div className="editor-word-stats">
          <span>{wordCount} words</span>
          <span>{readTime} min read</span>
        </div>

      </div>

      <div
  className="editor-canvas"
  style={{
    background: themeStyle.background,
    color: themeStyle.color,
    fontFamily: `"${fontFamily}", ${
      fontFamily === "DM Mono" ? "monospace" : "serif"
    }`,
  }}
>
        <div
          ref={editorRef}
          className="editor-canvas-content"
          contentEditable
          suppressContentEditableWarning
          onInput={handleInput}
          data-placeholder="Begin your story here... Let the words flow."
        />
      </div>

    </div>
  );
}