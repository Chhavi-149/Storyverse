import "./NovelRankings.css";

const RANKINGS = [
  { rank: 1, title: "The Cartographer's Daughter", author: 'Miriam Osei', views: '142k' },
  { rank: 2, title: 'Salt & Starlight', author: 'Callum Vance', views: '99k' },
  { rank: 3, title: 'The Hollow Parliament', author: 'Reza Tahir', views: '76k' },
  { rank: 4, title: 'Echoes of the Forgotten Sea', author: 'Nneka Obi', views: '54k' },
];

export default function NovelRankings() {
  return (
    <section className="novel-rankings-card">
      <div className="novel-rankings-heading">
        <p><span>📈</span> NOVEL RANKINGS</p>
        <a href="#">All rankings</a>
      </div>

      <div className="novel-rankings-list">
        {RANKINGS.map((novel) => (
          <div key={novel.rank} className="novel-rank-row">
            <span className="novel-rank-number">{novel.rank}</span>

            <div className="novel-rank-info">
              <h4>{novel.title}</h4>
              <p>{novel.author}</p>
            </div>

            <span className="novel-rank-views">👁 {novel.views}</span>
          </div>
        ))}
      </div>
    </section>
  );
}