import { PenTool } from "lucide-react";
import "./Dashboard.css";

function WeeklyChallenge() {

  return (

    <div className="sidebar-card">

      <div className="challenge-icon">

        <PenTool size={26} />

      </div>

      <p className="sidebar-tag">

        WEEKLY CHALLENGE

      </p>

      <h3>

        Write in the Dark

      </h3>

      <p className="sidebar-text">

        Begin your story with a mysterious letter that changes
        your protagonist's life forever.

      </p>

      <div className="challenge-footer">

        <span>

          ⏳ 3 Days Left

        </span>

        <button>

          Join

        </button>

      </div>

    </div>

  );

}

export default WeeklyChallenge;