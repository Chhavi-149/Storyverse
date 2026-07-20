import StoryCard from "./StoryCard";
import stories from "../../data/stories";

function StoryGrid() {
  return (
    <>
      <p className="text-slate-400 mb-6">
        Showing {stories.length} stories
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {stories.map((story) => (
          <StoryCard
            key={story.id}
            story={story}
          />
        ))}
      </div>
    </>
  );
}
export default StoryGrid;