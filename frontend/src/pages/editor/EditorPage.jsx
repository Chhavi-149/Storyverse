import { useState, useRef, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import EditorToolbar from "../../components/Editor/EditorToolbar";
import EditorWorkspace from "../../components/Editor/EditorWorkspace";
import EditorSidebar from "../../components/Editor/EditorSidebar";
import backgroundMusic from "../../data/backgroundMusic";
import { useAuth } from "../../context/AuthContext";
import { publishStory, saveDraft } from "../../services/storyService";
import "../../components/Editor/Editor.css";

function stripHtml(html) {
  const div = document.createElement("div");
  div.innerHTML = html;
  return div.textContent || div.innerText || "";
}

export default function EditorPage() {
  const navigate = useNavigate();
  const { currentUser } = useAuth();

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
  const [isPublishing, setIsPublishing] = useState(false);
  const [publishError, setPublishError] = useState("");

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

  const handleSaveDraft = async () => {
    if (!currentUser) {
      setPublishError("Please log in to save a draft.");
      return;
    }
    try {
      await saveDraft({ title, content, genre, tags, coverImage, author: currentUser });
      setIsSaved(true);
    } catch (err) {
      console.error(err);
      setPublishError("Couldn't save draft. Please try again.");
    }
  };

  const handlePublish = async () => {
    if (!currentUser) {
      setPublishError("Please log in to publish.");
      return;
    }
    setPublishError("");
    setIsPublishing(true);
    try {
      const published = await publishStory({
        title,
        content,
        genre,
        tags,
        coverImage,
        author: currentUser,
      });
      navigate(`/story/${published.id}`);
    } catch (err) {
      console.error(err);
      setPublishError(err.message || "Publishing failed. Please try again.");
    } finally {
      setIsPublishing(false);
    }
  };

  return (
    <div className="editor-page">

      <div className="editor-main-column">
        <EditorToolbar
          editorRef={editorRef}
          onSaveDraft={handleSaveDraft}
          onPublish={handlePublish}
          isSaved={isSaved}
          isPublishing={isPublishing}
        />

        {publishError && (
          <p style={{ color: "#e05252", textAlign: "center", padding: "8px 0" }}>
            {publishError}
          </p>
        )}

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