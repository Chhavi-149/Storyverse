import "./About.css";

function Team() {

  const team=[

    {
      name:"Chhavi",
      role:"Frontend & UI Designer",
      image:"https://i.pravatar.cc/150?img=5"
    },

    {
      name:"Devangee",
      role:"Backend Developer",
      image:"https://i.pravatar.cc/150?img=47"
    }

  ];

  return(

    <section className="team">

      <h2>

        Meet The Creators

      </h2>

      <div className="team-grid">

        {team.map((member,index)=>(

          <div
            className="team-card"
            key={index}
          >

            <img
              src={member.image}
              alt={member.name}
            />

            <h3>

              {member.name}

            </h3>

            <p>

              {member.role}

            </p>

          </div>

        ))}

      </div>

    </section>

  );

}

export default Team;