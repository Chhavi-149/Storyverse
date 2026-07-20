import { Link } from "react-router-dom";
import "./Dashboard.css";

function RecommendedStories() {

  const stories = [

    {
      id:1,
      title:"Whispers of the Night",
      author:"Sophia Carter",
      genre:"Fantasy",
      rating:"4.9",
      image:"https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=800&q=80",
    },

    {
      id:2,
      title:"Echoes of Tomorrow",
      author:"Daniel Grey",
      genre:"Sci-Fi",
      rating:"4.8",
      image:"https://images.unsplash.com/photo-1495446815901-a7297e633e8d?auto=format&fit=crop&w=800&q=80",
    },

    {
      id:3,
      title:"Crimson Empire",
      author:"Emily Woods",
      genre:"Adventure",
      rating:"4.7",
      image:"https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=800&q=80",
    },

    {
      id:4,
      title:"Moonlit Curse",
      author:"Ryan Brooks",
      genre:"Mystery",
      rating:"4.8",
      image:"https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=800&q=80",
    }

  ];

  return (

    <section className="recommended-section">

      <div className="section-header">

        <h2>Recommended For You</h2>

        <Link to="/explore">

          View All

        </Link>

      </div>

      <div className="recommended-grid">

        {stories.map((story)=>(

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

              <span className="recommended-genre">

                {story.genre}

              </span>

              <h3>

                {story.title}

              </h3>

              <p>

                by {story.author}

              </p>

              <div className="recommended-footer">

                ⭐ {story.rating}

              </div>

            </div>

          </Link>

        ))}

      </div>

    </section>

  );

}

export default RecommendedStories;