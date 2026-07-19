import { Link } from "react-router-dom";
import { Clock, ChevronRight } from "lucide-react";

import { stories } from "../../data/mock";

const continueReading = [
  { ...stories[0], progress: 68, lastChapter: 23 },
  { ...stories[4], progress: 35, lastChapter: 14 },
  { ...stories[1], progress: 91, lastChapter: 20 },
];

function ContinueReading() {
  return (
    <section>
      <div className="flex items-center justify-between mb-5">
        <h2 className="font-serif text-xl font-bold text-ink flex items-center gap-2">
          <Clock size={18} className="text-gold" />
          Continue Reading
        </h2>

        <Link
          to="/bookmarks"
          className="text-sm nav-link flex items-center gap-1"
        >
          View all
          <ChevronRight size={14} />
        </Link>
      </div>

      <div className="space-y-3">
        {continueReading.map((story) => (
          <Link
            key={story.id}
            to={`/story/${story.id}`}
            style={{ textDecoration: "none" }}
          >
            <div
              className="flex gap-4 p-4 rounded-lg transition-all hover:bg-raised"
              style={{
                background: "#151310",
                border: "1px solid #2a2318",
              }}
            >
              <img
                src={story.cover}
                alt={story.title}
                className="w-14 h-20 object-cover rounded-md flex-shrink-0"
                style={{ background: "#1e1a15" }}
              />

              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between gap-2 mb-1">
                  <h3 className="font-serif font-bold text-ink text-sm leading-snug">
                    {story.title}
                  </h3>

                  <span className="badge">
                    {story.genre}
                  </span>
                </div>

                <p className="text-xs text-ink-dim mb-3">
                  Chapter {story.lastChapter} of {story.chapters}
                </p>

                <div className="progress-bar mb-1.5">
                  <div
                    className="progress-fill"
                    style={{
                      width: `${story.progress}%`,
                    }}
                  />
                </div>

                <p
                  className="text-xs"
                  style={{ color: "#5c4e3c" }}
                >
                  {story.progress}% complete
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

export default ContinueReading;