import { Link } from "react-router-dom";
import StoryCard from "../Explore/StoryCard";
import exploreStories from "../../data/exploreStories";
import "./Story.css";

const RELATED_COUNT = 3;

export default function RelatedStories({ currentStoryId, genre }) {
  const related = exploreStories
    .filter((s) => s.id !== currentStoryId)
    .sort((a, b) => (a.genre === genre ? -1 : 0) - (b.genre === genre ? -1 : 0))
    .slice(0, RELATED_COUNT);

  return (
    <section className="related-stories-section">
      <div className="related-stories-container">

        <h2 className="related-stories-title">More Stories You Might Like</h2>

        <div className="related-stories-grid">
          {related.map((story) => (
            <Link key={story.id} to={`/story/${story.id}`} className="related-story-link">
              <StoryCard story={story} />
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}