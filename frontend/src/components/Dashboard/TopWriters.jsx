import { Link } from "react-router-dom";
import { Trophy } from "lucide-react";
import { writers } from "../../data/mock";

function TopWriters() {
  return (
    <div
      className="rounded-xl p-5"
      style={{
        background: "#151310",
        border: "1px solid #2a2318",
      }}
    >
      <div className="flex items-center justify-between mb-4">
        <p className="font-mono text-xs uppercase tracking-widest text-gold">
          Top Writers
        </p>

        <Link
          to="/explore"
          className="text-xs nav-link"
        >
          See all
        </Link>
      </div>

      <div className="space-y-4">
        {writers.slice(0, 3).map((writer, index) => (
          <Link
            key={writer.id}
            to={`/profile/${writer.id}`}
            style={{ textDecoration: "none" }}
          >
            <div className="flex items-center gap-3">
              <span
                className="font-mono text-sm"
                style={{
                  color:
                    index === 0
                      ? "#c4933a"
                      : index === 1
                      ? "#8a9aaa"
                      : "#8a5a2a",
                  width: "16px",
                  flexShrink: 0,
                }}
              >
                {index + 1}
              </span>

              <img
                src={writer.avatar}
                alt={writer.name}
                className="avatar w-9 h-9"
              />

              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-ink truncate">
                  {writer.name}
                </p>

                <p className="text-xs text-ink-dim">
                  {(writer.followers / 1000).toFixed(1)}k followers
                </p>
              </div>

              <Trophy
                size={14}
                style={{
                  color:
                    index === 0
                      ? "#c4933a"
                      : index === 1
                      ? "#8a9aaa"
                      : "#8a5a2a",
                }}
              />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default TopWriters;