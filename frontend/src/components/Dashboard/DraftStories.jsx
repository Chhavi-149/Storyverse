import { Link } from "react-router-dom";
import "./DraftStories.css";

function DraftStories() {
  const drafts = [
    {
      id: 1,
      title: "The Crimson Crown",
      updated: "Updated 2 hours ago",
      words: "3,245 words",
    },
    {
      id: 2,
      title: "Echoes of Eternity",
      updated: "Updated Yesterday",
      words: "8,120 words",
    },
    {
      id: 3,
      title: "The Last Ember",
      updated: "Updated 3 days ago",
      words: "1,980 words",
    },
  ];

  return (
    <section id="drafts" className="draft-stories">

      <div className="section-heading">

        <h2>Your Drafts</h2>

        <Link to="/editor">
          New Story
        </Link>

      </div>

      <div className="draft-list">

        {drafts.map((draft) => (

          <div className="draft-card" key={draft.id}>

            <div>

              <h3>{draft.title}</h3>

              <p>{draft.updated}</p>

              <span>{draft.words}</span>

            </div>

            <div className="draft-buttons">

              <Link
                to="/editor"
                className="continue-btn"
              >
                Continue
              </Link>

              <button className="delete-btn">
                Delete
              </button>

            </div>

          </div>

        ))}

      </div>

    </section>
  );
}

export default DraftStories;