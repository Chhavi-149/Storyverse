import "./Rankings.css";

function Leaderboard() {

  const writers = [

    {
      rank: 1,
      name: "Sophia Carter",
      points: "15,240",
    },

    {
      rank: 2,
      name: "Emma Watson",
      points: "14,980",
    },

    {
      rank: 3,
      name: "Daniel Grey",
      points: "14,210",
    },

    {
      rank: 4,
      name: "Ryan Brooks",
      points: "13,760",
    },

    {
      rank: 5,
      name: "Olivia Stone",
      points: "13,140",
    },

  ];

  return (

    <section className="leaderboard-section">

      <h2>🏆 Leaderboard</h2>

      <div className="leaderboard">

        {writers.map((writer) => (

          <div
            className="leaderboard-row"
            key={writer.rank}
          >

            <span className="rank">

              #{writer.rank}

            </span>

            <span className="writer-name">

              {writer.name}

            </span>

            <span className="writer-points">

              ⭐ {writer.points}

            </span>

          </div>

        ))}

      </div>

    </section>

  );

}

export default Leaderboard;