import { Link } from "react-router-dom";
import { Flame, Eye, Star, ChevronRight } from "lucide-react";
import { stories } from "../../data/mock";

function TrendingStories() {
  return (
    <section>
      <div className="flex items-center justify-between mb-5">
        <h2 className="font-serif text-xl font-bold text-ink flex items-center gap-2">
          <Flame size={18} className="text-gold" />
          Trending Today
        </h2>

        <Link
          to="/explore"
          className="text-sm nav-link flex items-center gap-1"
        >
          Explore
          <ChevronRight size={14} />
        </Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {stories.slice(0, 4).map((story, i) => (
          <Link
            key={story.id}
            to={`/story/${story.id}`}
            style={{ textDecoration: "none" }}
          >
            <div className="story-card flex gap-3 p-4">
              <div
                className="font-mono text-2xl font-bold flex-shrink-0 w-7 text-center"
                style={{
                  color:
                    i === 0
                      ? "#c4933a"
                      : i === 1
                      ? "#8a9aaa"
                      : i === 2
                      ? "#8a5a2a"
                      : "#3a3020",
                }}
              >
                {i + 1}
              </div>

              <div className="flex-1 min-w-0">
                <h3 className="font-serif font-bold text-ink text-sm leading-snug mb-1">
                  {story.title}
                </h3>

                <p className="text-xs text-ink-dim mb-2">
                  by {story.author}
                </p>

                <div className="flex gap-3 text-xs text-ink-faint">
                  <span className="flex items-center gap-1">
                    <Eye size={11} />
                    {(story.views / 1000).toFixed(0)}k
                  </span>

                  <span className="flex items-center gap-1">
                    <Star size={11} className="text-gold" />
                    {story.rating}
                  </span>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

export default TrendingStories;