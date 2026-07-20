import "./TopWriters.css";

const TOP_WRITERS = [
  { rank: 1, name: 'Miriam Osei', followers: '48.2k' },
  { rank: 2, name: 'Callum Vance', followers: '31.4k' },
  { rank: 3, name: 'Reza Tahir', followers: '24.6k' },
];

export default function TopWriters() {
  return (
    <section className="top-writers-card">
      <div className="top-writers-heading">
        <p>TOP WRITERS</p>
        <a href="#">See all</a>
      </div>

      <div className="top-writers-list">
        {TOP_WRITERS.map((writer) => (
          <div key={writer.rank} className="top-writer-row">
            <span className="writer-rank">{writer.rank}</span>

            <div className="writer-avatar">{writer.name.charAt(0)}</div>

            <div className="writer-info">
              <h4>{writer.name}</h4>
              <p>{writer.followers} followers</p>
            </div>

            <span className="writer-trophy">🏆</span>
          </div>
        ))}
      </div>
    </section>
  );
}