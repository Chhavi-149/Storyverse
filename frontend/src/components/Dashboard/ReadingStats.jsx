import {
  BookOpen,
  Eye,
  Heart,
  Flame,
} from "lucide-react";

import "./ReadingStats.css";

function ReadingStats() {
  const stats = [
    {
      icon: <BookOpen size={34} />,
      value: "12",
      label: "Stories Published",
    },
    {
      icon: <Eye size={34} />,
      value: "48.7K",
      label: "Total Reads",
    },
    {
      icon: <Heart size={34} />,
      value: "3.2K",
      label: "Followers",
    },
    {
      icon: <Flame size={34} />,
      value: "5 Days",
      label: "Writing Streak",
    },
  ];

  return (
    <section className="reading-stats">

      <h2>Your Statistics</h2>

      <div className="stats-grid">

        {stats.map((stat, index) => (

          <div
            className="stat-card"
            key={index}
          >

            <div className="stat-icon">
              {stat.icon}
            </div>

            <h3>{stat.value}</h3>

            <p>{stat.label}</p>

          </div>

        ))}

      </div>

    </section>
  );
}

export default ReadingStats;