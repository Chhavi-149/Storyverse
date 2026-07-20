import { Link } from "react-router-dom";
import "./Dashboard.css";

function TopWriters() {

  const writers = [

    {
      id: 1,
      name: "Sophia Carter",
      followers: "42.8K",
      image:
        "https://i.pravatar.cc/150?img=32",
    },

    {
      id: 2,
      name: "Daniel Grey",
      followers: "39.1K",
      image:
        "https://i.pravatar.cc/150?img=15",
    },

    {
      id: 3,
      name: "Emily Woods",
      followers: "31.5K",
      image:
        "https://i.pravatar.cc/150?img=48",
    },

  ];

  return (

    <div className="sidebar-card">

      <p className="sidebar-tag">

        TOP WRITERS

      </p>

      {writers.map((writer, index) => (

        <Link
          key={writer.id}
          to="/profile"
          className="writer-card"
        >

          <span className="writer-rank">

            #{index + 1}

          </span>

          <img
            src={writer.image}
            alt={writer.name}
          />

          <div className="writer-info">

            <h4>

              {writer.name}

            </h4>

            <small>

              {writer.followers} Followers

            </small>

          </div>

        </Link>

      ))}

    </div>

  );

}

export default TopWriters;