import "./Statistics.css";

function Statistics() {
  const stats = [
    {
      number: "1.2M+",
      label: "Stories Published",
    },
    {
      number: "84K+",
      label: "Active Writers",
    },
    {
      number: "15M+",
      label: "Monthly Readers",
    },
    {
      number: "120+",
      label: "Countries",
    },
  ];

  return (
    <section className="statistics">
      <div className="statistics-container">
        {stats.map((item) => (
          <div className="stat-card" key={item.label}>
            <h2>{item.number}</h2>
            <p>{item.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Statistics;