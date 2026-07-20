import "./Competitions.css";

function UpcomingCompetitions() {

  const upcoming = [

    {
      title: "Sci-Fi Showdown",
      date: "Starts July 28",
    },

    {
      title: "Historical Fiction Fest",
      date: "Starts August 2",
    },

    {
      title: "Poetry Slam",
      date: "Starts August 10",
    },

  ];

  return (

    <section className="competition-section">

      <h2>📅 Upcoming Competitions</h2>

      <div className="upcoming-grid">

        {upcoming.map((item,index)=>(

          <div
            className="upcoming-card"
            key={index}
          >

            <h3>{item.title}</h3>

            <p>{item.date}</p>

          </div>

        ))}

      </div>

    </section>

  );

}

export default UpcomingCompetitions;