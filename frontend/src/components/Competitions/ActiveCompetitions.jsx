import "./Competitions.css";

function ActiveCompetitions() {

  const competitions = [

    {
      id: 1,
      title: "Fantasy World Cup",
      prize: "₹10,000",
      genre: "Fantasy",
      days: "12 Days Left",
    },

    {
      id: 2,
      title: "Romance Challenge",
      prize: "₹7,500",
      genre: "Romance",
      days: "8 Days Left",
    },

    {
      id: 3,
      title: "Mystery Marathon",
      prize: "₹5,000",
      genre: "Mystery",
      days: "5 Days Left",
    },

  ];

  return (

    <section className="competition-section">

      <h2>🔥 Active Competitions</h2>

      <div className="competition-grid">

        {competitions.map((competition) => (

          <div
            className="competition-card"
            key={competition.id}
          >

            <span className="live-badge">
              LIVE
            </span>

            <h3>{competition.title}</h3>

            <p>Prize Pool</p>

            <h4>{competition.prize}</h4>

            <div className="competition-info">

              <span>{competition.genre}</span>

              <span>{competition.days}</span>

            </div>

            <button>
              Participate
            </button>

          </div>

        ))}

      </div>

    </section>

  );

}

export default ActiveCompetitions;