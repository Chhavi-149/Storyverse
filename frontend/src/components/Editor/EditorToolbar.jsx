import "./Editor.css";

function EditorToolbar() {
  return (
    <header className="editor-toolbar">

      <input
        type="text"
        placeholder="Story Title..."
        className="story-title-input"
      />

      <div className="toolbar-buttons">

        <button>Save Draft</button>

        <button className="publish-btn">
          Publish
        </button>

      </div>

    </header>
  );
}

export default EditorToolbar;