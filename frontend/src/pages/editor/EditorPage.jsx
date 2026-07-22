import { useState, useRef, useEffect, useCallback } from "react";
import EditorToolbar from "../../components/Editor/EditorToolbar";
import EditorWorkspace from "../../components/Editor/EditorWorkspace";
import EditorSidebar from "../../components/Editor/EditorSidebar";
import backgroundMusic from "../../data/backgroundMusic";
import "../../components/Editor/Editor.css";

function stripHtml(html) {
  const div = document.createElement("div");
  div.innerHTML = html;
  return div.textContent || div.innerText || "";
}

export default function EditorPage() {
  const editorRef = useRef(null);
  const autosaveTimerRef = useRef(null);
  const audioRef = useRef(null);

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [genre, setGenre] = useState("");
  const [tags, setTags] = useState("");
  const [coverImage, setCoverImage] = useState(null);

  const [fontFamily, setFontFamily] = useState("Playfair Display");
  const [theme, setTheme] = useState("Parchment");
  const [music, setMusic] = useState("None");
  const [moods, setMoods] = useState([]);

  const [isSaved, setIsSaved] = useState(true);

  const plainText = stripHtml(content);
  const wordCount = plainText.trim() ? plainText.trim().split(/\s+/).length : 0;
  const charCount = plainText.length;
  const readTime = Math.max(1, Math.round(wordCount / 200));
  const paragraphCount = content
    ? (content.match(/<div>|<p>/g) || []).length || (plainText.trim() ? 1 : 0)
    : 0;

  const handleContentChange = useCallback((html) => {
    setContent(html);
    setIsSaved(false);

    if (autosaveTimerRef.current) clearTimeout(autosaveTimerRef.current);
    autosaveTimerRef.current = setTimeout(() => {
      setIsSaved(true);
    }, 1200);
  }, []);

  useEffect(() => {
    return () => {
      if (autosaveTimerRef.current) clearTimeout(autosaveTimerRef.current);
      if (audioRef.current) audioRef.current.pause();
    };
  }, []);

  // Runs directly inside the sidebar's onClick — not inside a useEffect —
  // so the browser treats it as a genuine user-initiated play() call.
  const handleMusicChange = (trackName) => {
    setMusic(trackName);

    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current = null;
    }

    const track = backgroundMusic.find((t) => t.name === trackName);
    if (track?.file) {
      const audio = new Audio(track.file);
      audio.loop = true;
      audio.volume = 0.4;
      audio.play().catch((err) => {
        console.warn("Playback failed:", err.message);
      });
      audioRef.current = audio;
    }
  };

  const toggleMood = (mood) => {
    setMoods((prev) =>
      prev.includes(mood) ? prev.filter((m) => m !== mood) : [...prev, mood]
    );
  };

  const handleSaveDraft = () => {
    const draft = { title, content, genre, tags, coverImage, savedAt: new Date().toISOString() };
    localStorage.setItem("inkwell_draft", JSON.stringify(draft));
    setIsSaved(true);
  };

  const handlePublish = () => {
    console.log("Publishing story:", { title, content, genre, tags, coverImage, moods, music });
    // Real publish logic (API/Firebase call) goes here later
  };

  return (
    <div className="editor-page">

      <div className="editor-main-column">
        <EditorToolbar
          editorRef={editorRef}
          onSaveDraft={handleSaveDraft}
          onPublish={handlePublish}
          isSaved={isSaved}
        />

        <EditorWorkspace
          title={title}
          onTitleChange={setTitle}
          content={content}
          onContentChange={handleContentChange}
          genre={genre}
          onGenreChange={setGenre}
          tags={tags}
          onTagsChange={setTags}
          coverImage={coverImage}
          onCoverChange={setCoverImage}
          fontFamily={fontFamily}
          theme={theme}
          wordCount={wordCount}
          readTime={readTime}
          editorRef={editorRef}
        />
      </div>

      <EditorSidebar
        fontFamily={fontFamily}
        onFontChange={setFontFamily}
        theme={theme}
        onThemeChange={setTheme}
        music={music}
        onMusicChange={handleMusicChange}
        moods={moods}
        onMoodToggle={toggleMood}
        wordCount={wordCount}
        charCount={charCount}
        readTime={readTime}
        paragraphCount={paragraphCount}
        isSaved={isSaved}
      />

    </div>
  );
}