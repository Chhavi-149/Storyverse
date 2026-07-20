import "./About.css";

function Community() {

  const stats = [

    {
      number:"48K+",
      label:"Writers"
    },

    {
      number:"1.2M+",
      label:"Stories"
    },

    {
      number:"250K+",
      label:"Readers"
    },

    {
      number:"95+",
      label:"Countries"
    }

  ];

  return (

    <section className="community">

      <h2>

        Our Community

      </h2>

      <div className="community-grid">

        {stats.map((item,index)=>(

          <div
            className="community-card"
            key={index}
          >

            <h3>

              {item.number}

            </h3>

            <p>

              {item.label}

            </p>

          </div>

        ))}

      </div>

    </section>

  );

}

export default Community;