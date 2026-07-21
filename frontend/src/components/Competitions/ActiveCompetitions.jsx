import { Trophy, Clock, Users, PenLine, Flame, CheckCircle } from "lucide-react";
import activeCompetitions from "../../data/activeCompetitions";
import "./Competitions.css";

export default function ActiveCompetitions() {
  return (
    <section className="active-competitions-section">
      <div className="active-competitions-container">

        <p className="active-competitions-tag">OPEN NOW</p>
        <h2 className="active-competitions-title">Writing Competitions</h2>

        <div className="active-competitions-list">
          {activeCompetitions.map((comp) => (
            <div key={comp.id} className="competition-card">

              <div className="competition-card-cover">
                {comp.cover ? (
                  <img
                    src={comp.cover}
                    alt={comp.title}
                    onError={(e) => { e.currentTarget.style.display = "none"; }}
                  />
                ) : (
                  <span className="competition-cover-placeholder">📜</span>
                )}

                <span className={`competition-status-badge ${comp.status === "Open" ? "open" : "closing"}`}>
                  {comp.status === "Open" ? <CheckCircle size={13} /> : <Flame size={13} />}
                  {comp.status === "Open" ? "OPEN" : "CLOSING SOON"}
                </span>
              </div>

              <div className="competition-card-body">
                <div className="competition-card-main">

                  <h3>
                    <Trophy size={20} className="competition-trophy-icon" />
                    {comp.title}
                  </h3>
                  <p className="competition-organizer">Organized by {comp.organizer}</p>
                  <p className="competition-description">{comp.description}</p>

                  <div className="competition-tags">
                    <span className="competition-tag">GENRE: {comp.genre.toUpperCase()}</span>
                    <span className="competition-tag">ELIGIBILITY: {comp.eligibility.toUpperCase()}</span>
                    <span className="competition-tag competition-tag-entries">
                      <Users size={13} /> {comp.entries.toLocaleString()} ENTRIES
                    </span>
                  </div>

                </div>

                <div className="competition-card-side">
                  <p className="competition-prize-label">Prize Pool</p>
                  <p className="competition-prize-value">{comp.prizePool}</p>

                  <div className="competition-deadline">
                    <span><Clock size={14} /> Deadline</span>
                    <span className="competition-deadline-date">{comp.deadline}</span>
                  </div>

                  <button className="competition-apply-btn">
                    <PenLine size={16} />
                    Apply Now
                  </button>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}