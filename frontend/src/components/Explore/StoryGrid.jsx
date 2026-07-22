import { Link } from "react-router-dom";
import StoryCard from "./StoryCard";
import "./StoryGrid.css";

export default function StoryGrid({ stories, sortLabel, totalCount, onLoadMore, hasMore }) {
  return (
    <div className="story-grid-wrapper">

      <p className="story-grid-summary">
        Showing {stories.length} of {totalCount} stories · Sorted by {sortLabel}
      </p>

      <div className="story-grid">
        {stories.map((story) => (
          <Link key={story.id} to={`/story/${story.id}`} className="story-grid-card-link">
            <StoryCard story={story} />
          </Link>
        ))}
      </div>

      {hasMore && (
        <div className="story-grid-load-more">
          <button onClick={onLoadMore}>Load More Stories</button>
        </div>
      )}

    </div>
  );
}