import "./DraftStories.css";

const DRAFTS = [
  { title: 'Untitled Draft', lastEdited: '2 days ago', words: 4210 },
];

export default function DraftStories() {
  return (
    <section className="draft-stories-container">
      <div className="section-heading">
        <h2>Your Draft Stories</h2>
        <a href="#">New draft +</a>
      </div>

      <div className="draft-list-box">
        {DRAFTS.length === 0 ? (
          <p className="draft-empty-text">
            You don't have any drafts yet. Start writing to see them here.
          </p>
        ) : (
          DRAFTS.map((draft) => (
            <div key={draft.title} className="draft-row-item">
              <div className="draft-info">
                <h3>{draft.title}</h3>
                <p>
                  Last edited {draft.lastEdited} · {draft.words.toLocaleString()} words
                </p>
              </div>
              <a href="#" className="draft-continue-link">Continue writing</a>
            </div>
          ))
        )}
      </div>
    </section>
  );
}