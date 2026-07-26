import { useState, useRef } from "react";
import { ChevronLeft, ChevronRight, Highlighter, StickyNote, X, Trash2 } from "lucide-react";
import "./Reader.css";

const BACKGROUND_STYLES = {
  Sepia: { background: "#0d0906", color: "#e8dcc8" },
  Parchment: { background: "#f2e8d5", color: "#2a2420" },
  Midnight: { background: "#12102a", color: "#c9b8f5" },
  Forest: { background: "#0f1a14", color: "#a8d9b0" },
};

const NOTE_STYLES = [
  { emoji: "📌", color: "#c9a15c" },
  { emoji: "💭", color: "#7ba7d9" },
  { emoji: "🌟", color: "#e5b95c" },
  { emoji: "❤️", color: "#e07a8f" },
  { emoji: "🍃", color: "#7ecb9a" },
];

function renderParagraphWithMarks(text, paraHighlights, paraAnnotations, onAnnotationClick) {
  const markers = [
    ...paraHighlights.map((h) => ({ ...h, kind: "highlight" })),
    ...paraAnnotations.map((a) => ({ ...a, kind: "annotation" })),
  ].filter((m) => m.text && text.includes(m.text));

  if (markers.length === 0) return text;

  const escaped = markers.map((m) => m.text.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"));
  const pattern = new RegExp(`(${escaped.join("|")})`, "g");
  const parts = text.split(pattern);

  return parts.map((part, i) => {
    const marker = markers.find((m) => m.text === part);
    if (!marker) return part;

    if (marker.kind === "highlight") {
      return <mark key={i} className="reader-highlight">{part}</mark>;
    }

    return (
      <span key={i} className="reader-annotation-span" style={{ borderColor: marker.color }}>
        {part}
        <button
          className="reader-annotation-marker"
          style={{ color: marker.color }}
          onClick={(e) => { e.stopPropagation(); onAnnotationClick(marker); }}
        >
          {marker.emoji}
        </button>
      </span>
    );
  });
}

export default function ReaderContent({
  chapter,
  fontSize,
  background,
  chapterNumber,
  totalChapters,
  onPrevChapter,
  onNextChapter,
  highlights,
  onSaveHighlight,
  annotations,
  onSaveAnnotation,
  onDeleteAnnotation,
  scrollToHighlightId,
}) {
  const style = BACKGROUND_STYLES[background] || BACKGROUND_STYLES.Sepia;
  const contentRef = useRef(null);
  const [selectionPopup, setSelectionPopup] = useState(null);
  const [noteDraft, setNoteDraft] = useState(null);
  const [openAnnotation, setOpenAnnotation] = useState(null);

  const handleMouseUp = () => {
    const selection = window.getSelection();
    const text = selection?.toString().trim();

    if (!text || !contentRef.current) {
      setSelectionPopup(null);
      return;
    }

    const range = selection.getRangeAt(0);
    const anchorEl = range.startContainer.parentElement?.closest("[data-para-index]");
    if (!anchorEl) {
      setSelectionPopup(null);
      return;
    }

    const paraIndex = Number(anchorEl.dataset.paraIndex);
    const rect = range.getBoundingClientRect();
    const wrapperRect = contentRef.current.getBoundingClientRect();

    setSelectionPopup({
      text,
      paraIndex,
      top: rect.top - wrapperRect.top - 44,
      left: rect.left - wrapperRect.left + rect.width / 2,
    });
  };

  const handleSaveHighlightClick = () => {
    if (!selectionPopup) return;
    onSaveHighlight({
      chapterNumber,
      paraIndex: selectionPopup.paraIndex,
      text: selectionPopup.text,
    });
    setSelectionPopup(null);
    window.getSelection()?.removeAllRanges();
  };

  const handleOpenNoteEditor = () => {
    setNoteDraft({ ...selectionPopup, note: "", style: NOTE_STYLES[0] });
    setSelectionPopup(null);
  };

  const handleSaveNote = () => {
    if (!noteDraft || !noteDraft.note.trim()) return;
    onSaveAnnotation({
      chapterNumber,
      paraIndex: noteDraft.paraIndex,
      text: noteDraft.text,
      note: noteDraft.note.trim(),
      emoji: noteDraft.style.emoji,
      color: noteDraft.style.color,
    });
    setNoteDraft(null);
    window.getSelection()?.removeAllRanges();
  };

  const highlightsForChapter = (highlights || []).filter((h) => h.chapterNumber === chapterNumber);
  const annotationsForChapter = (annotations || []).filter((a) => a.chapterNumber === chapterNumber);

  return (
    <div style={{ background: style.background, color: style.color }}>
      <div
        className="reader-content-wrap"
        style={{ fontSize: `${fontSize}px`, position: "relative" }}
        ref={contentRef}
        onMouseUp={handleMouseUp}
      >

        <h1 className="reader-chapter-heading" style={{ fontSize: `${fontSize * 1.7}px` }}>
          Chapter {chapter.number} — {chapter.title}
        </h1>

        {chapter.content.map((paragraph, i) => {
          const paraHighlights = highlightsForChapter.filter((h) => h.paraIndex === i);
          const paraAnnotations = annotationsForChapter.filter((a) => a.paraIndex === i);
          const highlightMatch = paraHighlights.find((h) => h.id === scrollToHighlightId);

          return (
            <p
              key={i}
              className={`reader-paragraph ${highlightMatch ? "reader-paragraph-flash" : ""}`}
              data-para-index={i}
            >
              {renderParagraphWithMarks(paragraph, paraHighlights, paraAnnotations, setOpenAnnotation)}
            </p>
          );
        })}

        {selectionPopup && (
          <div
            className="reader-selection-popup-group"
            style={{ top: selectionPopup.top, left: selectionPopup.left }}
          >
            <button onClick={handleSaveHighlightClick}>
              <Highlighter size={14} />
              Highlight
            </button>
            <button onClick={handleOpenNoteEditor}>
              <StickyNote size={14} />
              Add Note
            </button>
          </div>
        )}

        {noteDraft && (
          <div className="reader-note-editor" style={{ top: noteDraft.top, left: noteDraft.left }}>
            <div className="reader-note-editor-header">
              <span>Add a note</span>
              <button onClick={() => setNoteDraft(null)}><X size={14} /></button>
            </div>

            <p className="reader-note-editor-quote">"{noteDraft.text}"</p>

            <textarea
              placeholder="Write your thought here..."
              value={noteDraft.note}
              onChange={(e) => setNoteDraft({ ...noteDraft, note: e.target.value })}
              autoFocus
            />

            <div className="reader-note-style-row">
              {NOTE_STYLES.map((s) => (
                <button
                  key={s.emoji}
                  className={`reader-note-style-btn ${noteDraft.style.emoji === s.emoji ? "active" : ""}`}
                  style={{ borderColor: s.color }}
                  onClick={() => setNoteDraft({ ...noteDraft, style: s })}
                >
                  {s.emoji}
                </button>
              ))}
            </div>

            <button className="reader-note-save-btn" onClick={handleSaveNote}>
              Save Note
            </button>
          </div>
        )}

        {openAnnotation && (
          <>
            <div className="reader-annotation-overlay" onClick={() => setOpenAnnotation(null)} />
            <div className="reader-annotation-popup">
              <div className="reader-annotation-popup-header">
                <span>{openAnnotation.emoji} Your Note</span>
                <button onClick={() => setOpenAnnotation(null)}><X size={14} /></button>
              </div>
              <p className="reader-annotation-popup-quote">"{openAnnotation.text}"</p>
              <p className="reader-annotation-popup-note">{openAnnotation.note}</p>
              <button
                className="reader-annotation-delete-btn"
                onClick={() => {
                  onDeleteAnnotation(openAnnotation.id);
                  setOpenAnnotation(null);
                }}
              >
                <Trash2 size={13} />
                Delete Note
              </button>
            </div>
          </>
        )}

        <div className="reader-chapter-nav">
          {chapterNumber > 1 ? (
            <button onClick={onPrevChapter}>
              <ChevronLeft size={16} />
              Previous Chapter
            </button>
          ) : <span />}

          <span className="reader-chapter-nav-label">
            Chapter {chapterNumber} of {totalChapters}
          </span>

          {chapterNumber < totalChapters ? (
            <button onClick={onNextChapter}>
              Next Chapter
              <ChevronRight size={16} />
            </button>
          ) : <span />}
        </div>

      </div>
    </div>
  );
}