import { PenTool, Hourglass, Flame } from "lucide-react";
import "./WeeklyChallenge.css";

function WeeklyChallenge() {
  return (
    <div className="weekly-challenge">

      <PenTool className="watermark-icon" size={64} strokeWidth={1.5} />

      <p className="sidebar-tag">
        Weekly Challenge
      </p>

      <h3>
        Write in the Dark
      </h3>

      <p className="sidebar-text">
        Begin your story with the sentence: "The last candle went out at midnight."
      </p>

      <div className="challenge-stats">
        <span>
          <Hourglass size={14} />
          3 days left
        </span>
        <span>
          <Flame size={14} />
          2,841 entries
        </span>
      </div>

      <div className="challenge-footer">
        <button>
          Accept Challenge
        </button>
      </div>

    </div>
  );
}

export default WeeklyChallenge;