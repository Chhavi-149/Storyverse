import "./Editor.css";

function EditorWorkspace() {
  return (
    <section className="editor-workspace">

      <input
        type="text"
        className="chapter-title"
        placeholder="Chapter Title..."
      />

      <textarea
        className="story-editor"
        placeholder="Start writing your story here..."
      />

      <div className="word-count">

        <span>Words: 0</span>

        <span>Reading Time: 0 min</span>

      </div>

    </section>
  );
}

export default EditorWorkspace;