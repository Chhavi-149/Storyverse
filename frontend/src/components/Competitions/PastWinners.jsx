import { useState, useEffect } from "react";
import { Trophy } from "lucide-react";
import { getPastWinners } from "../../services/rankingsService";
import "./Competitions.css";

export default function PastWinners() {
  const [pastWinners, setPastWinners] = useState([]);

  useEffect(() => {
    getPastWinners().then(setPastWinners).catch((err) => console.error(err));
  }, []);

  return (
    <section className="past-winners-section">
      <div className="past-winners-container">

        <p className="past-winners-tag">HALL OF FAME</p>
        <h2 className="past-winners-title">Past Winners</h2>

        <div className="past-winners-list">
          {pastWinners.map((winner) => (
            <div key={winner.id} className="past-winner-row">
              <span className="past-winner-trophy">
                <Trophy size={20} />
              </span>

              <div className="past-winner-info">
                <h4>{winner.story}</h4>
                <p>by {winner.author} · {winner.competition}</p>
              </div>

              <div className="past-winner-result">
                <span className="past-winner-placement">{winner.placement}</span>
                <span className="past-winner-prize">{winner.prize}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}