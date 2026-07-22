import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import StoryCard from "../Explore/StoryCard";
import exploreStories from "../../data/exploreStories";
import "./FeaturedStories.css";

const FEATURED_COUNT = 6;

export default function FeaturedStories() {
  const featured = exploreStories.slice(0, FEATURED_COUNT);

  return (
    <section className="featured-stories-section">
      <div className="featured-stories-container">

        <div className="featured-stories-heading">
          <div>
            <p className="featured-stories-tag">FEATURED</p>
            <h2>Stories Worth Losing Sleep Over</h2>
          </div>
          <Link to="/explore" className="featured-stories-view-all">
            View all <ChevronRight size={16} />
          </Link>
        </div>

        <div className="featured-stories-grid">
          {featured.map((story) => (
            <Link key={story.id} to={`/story/${story.id}`} className="featured-story-link">
              <StoryCard story={story} />
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}