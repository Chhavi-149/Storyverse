import { Crown } from "lucide-react";
import { stories } from "../../data/mock";
import { Link } from "react-router-dom";

function NovelRankings() {
  return (
    <div
      className="rounded-xl p-5"
      style={{
        background: "#151310",
        border: "1px solid #2a2318",
      }}
    >
      <div className="flex items-center gap-2 mb-4">
        <Crown size={16} className="text-gold" />
        <p className="font-mono text-xs uppercase tracking-widest text-gold">
          Novel Rankings
        </p>
      </div>

      <div className="space-y-3">
        {stories.slice(0, 5).map((story, index) => (
          <Link
            key={story.id}
            to={`/story/${story.id}`}
            style={{ textDecoration: "none" }}
          >
            <div className="flex items-center gap-3">
              <span
                className="font-bold text-lg"
                style={{
                  width: "18px",
                  color:
                    index === 0
                      ? "#c4933a"
                      : index === 1
                      ? "#8a9aaa"
                      : index === 2
                      ? "#8a5a2a"
                      : "#5c4e3c",
                }}
              >
                {index + 1}
              </span>

              <img
                src={story.cover}
                alt={story.title}
                className="w-10 h-14 rounded object-cover"
              />

              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-ink truncate">
                  {story.title}
                </p>

                <p className="text-xs text-ink-dim truncate">
                  {story.author}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default NovelRankings;