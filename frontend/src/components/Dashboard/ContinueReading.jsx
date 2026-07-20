import "./ContinueReading.css";

const READING_LIST = [
  { title: "The Cartographer's Daughter", chapter: 23, totalChapters: 34, genre: 'FANTASY', progress: 68, cover: '/assets/covers/cartographer.jpg' },
  { title: 'Frequency Nine', chapter: 14, totalChapters: 41, genre: 'SCI-FI', progress: 35, cover: '/assets/covers/frequency-nine.jpg' },
  { title: 'Salt & Starlight', chapter: 20, totalChapters: 22, genre: 'ROMANCE', progress: 91, cover: '/assets/covers/salt-starlight.jpg' },
];

export default function ContinueReading() {
  return (
    <section className="continue-reading-container">
      <div className="section-heading">
        <h2><span>🕐</span> Continue Reading</h2>
        <a href="#">View all ›</a>
      </div>

      <div className="reading-list-box">
        {READING_LIST.map((book) => (
          <div key={book.title} className="reading-row-item">

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
                <span className="genre-badge">{book.genre}</span>
              </div>

              <div className="progress-container">
                <div className="progress-track">
                  <div className="progress-fill" style={{ width: `${book.progress}%` }} />
                </div>
                <span className="progress-text">{book.progress}% complete</span>
              </div>
            </div>

          </div>
        ))}
      </div>
    </section>
  );
}