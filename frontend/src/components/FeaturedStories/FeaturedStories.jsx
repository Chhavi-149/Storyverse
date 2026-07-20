import { Link } from "react-router-dom";
import "./FeaturedStories.css";

const stories = [
  {
    id: 1,
    title: "The Last Kingdom",
    author: "Emma Watson",
    image:
      "https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=500&q=80",
    genre: "Fantasy",
    rating: "4.9",
  },
  {
    id: 2,
    title: "Echoes of Tomorrow",
    author: "John Carter",
    image:
      "https://images.unsplash.com/photo-1495446815901-a7297e633e8d?auto=format&fit=crop&w=500&q=80",
    genre: "Sci-Fi",
    rating: "4.8",
  },
  {
    id: 3,
    title: "Midnight Secrets",
    author: "Sophia Lee",
    image:
      "https://images.unsplash.com/photo-1516979187457-637abb4f9353?auto=format&fit=crop&w=500&q=80",
    genre: "Mystery",
    rating: "4.9",
  },
];

function FeaturedStories() {
  return (
    <section className="featured">
      <div className="featured-container">

        <div className="featured-heading">
          <p>DISCOVER</p>
          <h2>Featured Stories</h2>
        </div>

        <div className="story-grid">
          {stories.map((story) => (
            <div className="story-card" key={story.id}>

              <img src={story.image} alt={story.title} />

              <div className="story-content">

                <span>{story.genre}</span>

                <h3>{story.title}</h3>

                <p>By {story.author}</p>

                <div className="story-footer">

                  <span>⭐ {story.rating}</span>

                  <Link
                    to="/story"
                    className="read-story-btn"
                  >
                    Read Story
                  </Link>

                </div>

              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default FeaturedStories;