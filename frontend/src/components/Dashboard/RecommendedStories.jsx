import "./RecommendedStories.css";

const RECOMMENDED = [
  { title: 'The Hollow Parliament', author: 'Reza Tahir', genre: 'THRILLER' },
  { title: 'Echoes of the Forgotten Sea', author: 'Nneka Obi', genre: 'HISTORICAL' },
  { title: 'Frequency Nine', author: 'Jude Nakamura', genre: 'SCI-FI' },
  { title: 'The Last Confession', author: 'Sofia Andrade', genre: 'MYSTERY' },
];

export default function RecommendedStories() {
  return (
    <section className="recommended-container">
      <h2 className="section-heading-title"><span>⚡</span> Recommended for You</h2>

      <div className="recommended-grid">
        {RECOMMENDED.map((story) => (
          <div key={story.title} className="recommended-card">
            <div className="recommended-cover">📖</div>

            <div className="recommended-info">
              <span className="recommended-badge">{story.genre}</span>
              <h3>{story.title}</h3>
              <p>{story.author}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}