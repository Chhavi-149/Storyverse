import "./Opportunities.css";

const OPPORTUNITIES = [
  { title: 'Midnight Manuscript', date: 'Aug 15', prize: '$2,500' },
  { title: 'Futures Unwritten', date: 'Sep 1', prize: '$1,800' },
];

export default function Opportunities() {
  return (
    <section className="opportunities-card">
      <p className="opportunities-heading">OPPORTUNITIES</p>

      <div className="opportunities-list">
        {OPPORTUNITIES.map((opp) => (
          <div key={opp.title} className="opportunity-row">
            <div className="opportunity-info">
              <h4>{opp.title}</h4>
              <p>{opp.date}</p>
            </div>
            <span className="opportunity-prize">{opp.prize}</span>
          </div>
        ))}
      </div>

      <a href="#" className="opportunities-link">
        View all competitions ›
      </a>
    </section>
  );
}