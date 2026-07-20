import "./Editor.css";

function EditorSidebar() {

  return (

    <aside className="editor-sidebar">

      <h3>Story Settings</h3>

      <label>Genre</label>

      <select>

        <option>Fantasy</option>
        <option>Romance</option>
        <option>Thriller</option>
        <option>Sci-Fi</option>

      </select>

      <label>Status</label>

      <select>

        <option>Draft</option>
        <option>Ongoing</option>
        <option>Completed</option>

      </select>

      <label>Visibility</label>

      <select>

        <option>Public</option>
        <option>Private</option>

      </select>

    </aside>

  );

}

export default EditorSidebar;