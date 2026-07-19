import { Link } from "react-router-dom";
import "./Story.css";

function RelatedStories() {

  const stories = [

    {
      id: 1,
      title: "Crimson Empire",
      author: "Emily Woods",
      image:
        "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=700&q=80",
    },

    {
      id: 2,
      title: "Moonlit Curse",
      author: "Ryan Brooks",
      image:
        "https://images.unsplash.com/photo-1495446815901-a7297e8d2852?auto=format&fit=crop&w=700&q=80",
    },

    {
      id: 3,
      title: "Kingdom of Ash",
      author: "Daniel Grey",
      image:
        "https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=700&q=80",
    },

  ];

  return (

    <section className="related-stories">

      <h2>You May Also Like</h2>

      <div className="related-grid">

        {stories.map((story) => (

          <Link
            key={story.id}
            to="/story"
            className="related-card"
          >

            <img
              src={story.image}
              alt={story.title}
            />

            <div>

              <h3>{story.title}</h3>

              <p>{story.author}</p>

            </div>

          </Link>

        ))}

      </div>

    </section>

  );
}

export default RelatedStories;