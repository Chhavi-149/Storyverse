import { Link } from "react-router-dom";
import "./ContinueReading.css";

function ContinueReading() {
  const stories = [
    {
      id: 1,
      title: "The Silent Kingdom",
      chapter: "Chapter 12",
      progress: 68,
      image:
        "https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=600&q=80",
    },
    {
      id: 2,
      title: "Moonlit Secrets",
      chapter: "Chapter 8",
      progress: 42,
      image:
        "https://images.unsplash.com/photo-1495446815901-a7297e633e8?auto=format&fit=crop&w=600&q=80",
    },
  ];

  return (
    <section className="continue-reading">

      <div className="section-heading">
        <h2>Continue Reading</h2>
        <Link to="/explore">View All</Link>
      </div>

      <div className="reading-grid">

        {stories.map((story) => (

          <Link
            key={story.id}
            to="/story"
            className="reading-card"
          >

            <img
              src={story.image}
              alt={story.title}
            />

            <div className="reading-info">

              <h3>{story.title}</h3>

              <p>{story.chapter}</p>

              <div className="progress-bar">

                <div
                  className="progress-fill"
                  style={{
                    width: `${story.progress}%`,
                  }}
                />

              </div>

              <span>{story.progress}% Completed</span>

            </div>

          </Link>

        ))}

      </div>

    </section>
  );
}

export default ContinueReading;