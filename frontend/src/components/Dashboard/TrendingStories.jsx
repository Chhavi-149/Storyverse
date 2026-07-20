import "./TrendingStories.css";

const TRENDING = [
  { rank: 1, title: "The Cartographer's Daughter", author: 'Miriam Osei', views: '142k', rating: 4.8 },
  { rank: 2, title: 'Salt & Starlight', author: 'Callum Vance', views: '99k', rating: 4.9 },
  { rank: 3, title: 'The Hollow Parliament', author: 'Reza Tahir', views: '76k', rating: 4.6 },
  { rank: 4, title: 'Echoes of the Forgotten Sea', author: 'Nneka Obi', views: '54k', rating: 4.7 },
];

export default function TrendingStories() {
  return (
    <section className="trending-container">
      <div className="section-heading">
        <h2><span>🔥</span> Trending Today</h2>
        <a href="#">Explore ›</a>
      </div>

      <div className="trending-grid">
        {TRENDING.map((story) => (
          <div key={story.rank} className="trending-card">
            <span className="trending-rank">{story.rank}</span>

            <div className="trending-info">
              <h3>{story.title}</h3>
              <p className="trending-author">by {story.author}</p>
              <div className="trending-stats">
                <span>👁 {story.views}</span>
                <span>⭐ {story.rating}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}