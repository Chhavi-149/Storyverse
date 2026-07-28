import { useState, useEffect } from "react";
import {
  Undo2, Redo2, Bold, Italic, AlignLeft, List,
  Quote, Type, Sparkles, Check, Save, Send,
} from "lucide-react";
import "./Editor.css";

const FONT_SIZES = ["14px", "16px", "18px", "20px", "24px"];

export default function EditorToolbar({ editorRef, onSaveDraft, onPublish, isSaved, isPublishing }) {
  const [fontSizeIndex, setFontSizeIndex] = useState(1);

  const runCommand = (command, value = null) => {
    editorRef.current?.focus();
    document.execCommand(command, false, value);
  };

  const handleTextSize = () => {
    const nextIndex = (fontSizeIndex + 1) % FONT_SIZES.length;
    setFontSizeIndex(nextIndex);
    runCommand("fontSize", "3"); // fallback; real size applied via CSS below
    if (editorRef.current) {
      editorRef.current.style.fontSize = FONT_SIZES[nextIndex];
    }
  };

  return (
    <div className="editor-toolbar">

      <div className="editor-toolbar-left">
        <button className="toolbar-icon-btn" onClick={() => runCommand("undo")} aria-label="Undo">
          <Undo2 size={18} />
        </button>
        <button className="toolbar-icon-btn" onClick={() => runCommand("redo")} aria-label="Redo">
          <Redo2 size={18} />
        </button>

        <span className="toolbar-divider" />

        <button className="toolbar-icon-btn" onClick={() => runCommand("bold")} aria-label="Bold">
          <Bold size={18} />
        </button>
        <button className="toolbar-icon-btn" onClick={() => runCommand("italic")} aria-label="Italic">
          <Italic size={18} />
        </button>
        <button className="toolbar-icon-btn" onClick={() => runCommand("justifyCenter")} aria-label="Align">
          <AlignLeft size={18} />
        </button>
        <button className="toolbar-icon-btn" onClick={() => runCommand("insertUnorderedList")} aria-label="List">
          <List size={18} />
        </button>
        <button className="toolbar-icon-btn" onClick={() => runCommand("formatBlock", "blockquote")} aria-label="Quote">
          <Quote size={18} />
        </button>
        <button className="toolbar-icon-btn" onClick={handleTextSize} aria-label="Text size">
          <Type size={18} />
        </button>

        <span className="toolbar-divider" />

        <button className="toolbar-ai-btn">
          <Sparkles size={16} />
          AI Prompt
        </button>
      </div>

      <div className="editor-toolbar-right">
        <span className={`toolbar-saved-status ${isSaved ? "saved" : "unsaved"}`}>
          <Check size={15} />
          {isSaved ? "Saved" : "Unsaved changes"}
        </span>

        <button className="toolbar-save-draft-btn" onClick={onSaveDraft}>
          <Save size={16} />
          Save Draft
        </button>

        <button className="toolbar-publish-btn" onClick={onPublish} disabled={isPublishing}>
          <Send size={16} />
          {isPublishing ? "Publishing..." : "Publish"}
        </button>
      </div>

    </div>
  );
}