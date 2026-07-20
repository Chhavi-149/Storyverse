import { Link } from "react-router-dom";

import { Zap } from "lucide-react";
import { stories } from "../../data/mock";

function RecommendedStories() {
  return (
    <section>
      <div className="flex items-center justify-between mb-5">
        <h2 className="font-serif text-xl font-bold text-ink flex items-center gap-2">
          <Zap size={18} className="text-gold" />
          Recommended for You
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {stories.slice(2, 6).map((story) => (
          <Link
            key={story.id}
            to={`/story/${story.id}`}
            style={{ textDecoration: "none" }}
          >
            <div className="story-card flex gap-3 p-4">
              <img
                src={story.cover}
                alt={story.title}
                className="w-14 h-20 object-cover rounded-md shrink-0"
                style={{ background: "#1e1a15" }}
              />

              <div className="flex-1 min-w-0">
                <span className="badge mb-2 inline-block">
                  {story.genre}
                </span>

                <h3 className="font-serif font-bold text-ink text-sm leading-snug mb-1">
                  {story.title}
                </h3>

                <p className="text-xs text-ink-dim">
                  {story.author}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
       </section>
  );
}
export default RecommendedStories;

