import { Link } from "react-router-dom";
import "./RecommendedStories.css";

function RecommendedStories() {
  const stories = [
    {
      id: 1,
      title: "Whispers of the Night",
      author: "Sophia Carter",
      image:
        "https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=700&q=80",
    },
    {
      id: 2,
      title: "The Lost Throne",
      author: "Daniel Grey",
      image:
        "https://images.unsplash.com/photo-1495446815901-a7297e8d2852?auto=format&fit=crop&w=700&q=80",
    },
    {
      id: 3,
      title: "Scarlet Hearts",
      author: "Emily Woods",
      image:
        "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=700&q=80",
    },
  ];

  return (
    <section className="recommended-section">

      <div className="section-heading">

        <h2>Recommended For You</h2>

        <Link to="/explore">
          Browse More
        </Link>

      </div>

      <div className="recommended-grid">

        {stories.map((story) => (

          <Link
            key={story.id}
            to="/story"
            className="recommended-card"
          >

            <img
              src={story.image}
              alt={story.title}
            />

            <div className="recommended-content">

              <h3>{story.title}</h3>

              <p>{story.author}</p>

            </div>

          </Link>

        ))}

      </div>

    </section>
  );
}

export default RecommendedStories;