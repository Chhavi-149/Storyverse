import { PenTool, Hourglass, Flame } from "lucide-react";
import { useNavigate } from "react-router-dom";
import "./WeeklyChallenge.css";

function WeeklyChallenge() {
  const navigate = useNavigate();

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
        <button onClick={() => navigate("/editor")}>
          Accept Challenge
        </button>
      </div>

    </div>
  );
}

export default WeeklyChallenge;