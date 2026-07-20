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
          <StoryCard key={story.id} story={story} />
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