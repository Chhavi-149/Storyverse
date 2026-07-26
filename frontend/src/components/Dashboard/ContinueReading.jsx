import { Link } from "react-router-dom";
import readingProgress from "../../data/readingProgress";
import exploreStories from "../../data/exploreStories";
import "./ContinueReading.css";

export default function ContinueReading() {
  const readingList = readingProgress
    .map((entry) => {
      const story = exploreStories.find((s) => s.id === entry.storyId);
      return story ? { ...story, ...entry } : null;
    })
    .filter(Boolean);

  return (
    <section className="continue-reading-container">
      <div className="section-heading">
        <h2><span>🕐</span> Continue Reading</h2>
        <a href="#">View all ›</a>
      </div>

      <div className="reading-list-box">
        {readingList.map((book) => (
          <Link key={book.storyId} to={`/story/${book.storyId}`} className="reading-row-item-link">
            <div className="reading-row-item">

              <div className="cover-wrapper">
                <span className="cover-placeholder">📖</span>
                {book.cover && (
                  <img
                    src={book.cover}
                    alt={book.title}
                    onError={(e) => { e.currentTarget.style.display = 'none'; }}
                  />
                )}
              </div>

              <div className="reading-info-content">
                <div className="reading-info-header">
                  <div>
                    <h3>{book.title}</h3>
                    <p>Chapter {book.chapter} of {book.totalChapters}</p>
                  </div>
                  <span className="genre-badge">{book.genre.toUpperCase()}</span>
                </div>

                <div className="progress-container">
                  <div className="progress-track">
                    <div className="progress-fill" style={{ width: `${book.progress}%` }} />
                  </div>
                  <span className="progress-text">{book.progress}% complete</span>
                </div>
              </div>

            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}