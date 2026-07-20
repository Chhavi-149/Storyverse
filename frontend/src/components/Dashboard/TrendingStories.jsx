import { Link } from "react-router-dom";
import "./Dashboard.css";

function TrendingStories() {

  const stories = [

    {
      id:1,
      title:"The Cartographer's Daughter",
      author:"Sophia Carter",
      image:"https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=800&q=80",
      reads:"142K",
      rating:"4.9"
    },

    {
      id:2,
      title:"Midnight Secrets",
      author:"Emily Woods",
      image:"https://images.unsplash.com/photo-1495446815901-a7297e633e8d?auto=format&fit=crop&w=800&q=80",
      reads:"126K",
      rating:"4.8"
    }

  ];

  return (

    <section className="trending-stories">

      <div className="section-header">

        <h2>Trending Today</h2>

        <Link to="/explore">

          View All

        </Link>

      </div>

      <div className="trending-grid">

        {stories.map((story,index)=>(

          <Link
            key={story.id}
            to="/story"
            className="trending-card"
          >

            <img
              src={story.image}
              alt={story.title}
            />

            <div className="trending-content">

              <span className="trending-rank">

                #{index+1}

              </span>

              <h3>

                {story.title}

              </h3>

              <p>

                by {story.author}

              </p>

              <div className="trending-footer">

                <span>

                  👁 {story.reads}

                </span>

                <span>

                  ⭐ {story.rating}

                </span>

              </div>

            </div>

          </Link>

        ))}

      </div>

    </section>

  );

}

export default TrendingStories;