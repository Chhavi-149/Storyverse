import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

const competitions = [
  {
    title: "Midnight Manuscript",
    prize: "$2,500",
    deadline: "Aug 15",
  },
  {
    title: "Futures Unwritten",
    prize: "$1,800",
    deadline: "Sep 1",
  },
];

function Opportunities() {
  return (
    <div
      className="rounded-xl p-5"
      style={{
        background: "#151310",
        border: "1px solid #2a2318",
      }}
    >
      <p className="font-mono text-xs uppercase tracking-widest text-gold mb-4">
        Opportunities
      </p>

      <div className="space-y-3">
        {competitions.map((competition, index) => (
          <Link
            key={index}
            to="/explore"
            style={{ textDecoration: "none" }}
          >
            <div
              className="flex items-center justify-between py-2.5 border-b"
              style={{ borderColor: "#2a2318" }}
            >
              <div>
                <p className="text-sm font-medium text-ink">
                  {competition.title}
                </p>

                <p className="text-xs text-ink-dim">
                  {competition.deadline}
                </p>
              </div>

              <span className="badge badge-gold">
                {competition.prize}
              </span>
            </div>
          </Link>
        ))}
      </div>

      <Link
        to="/explore"
        className="text-sm text-gold mt-3 flex items-center gap-1 hover:text-gold-light transition-colors"
        style={{ textDecoration: "none" }}
      >
        View all competitions
        <ChevronRight size={14} />
      </Link>
    </div>
  );
}

export default Opportunities;