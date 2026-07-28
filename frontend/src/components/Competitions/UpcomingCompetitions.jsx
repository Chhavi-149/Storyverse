import { useState, useEffect } from "react";
import { CalendarClock, DollarSign } from "lucide-react";
import { getUpcomingCompetitions } from "../../services/rankingsService";
import "./Competitions.css";

export default function UpcomingCompetitions() {
  const [upcomingCompetitions, setUpcomingCompetitions] = useState([]);

  useEffect(() => {
    getUpcomingCompetitions().then(setUpcomingCompetitions).catch((err) => console.error(err));
  }, []);

  return (
    <section className="upcoming-competitions-section">
      <div className="upcoming-competitions-container">

        <p className="upcoming-competitions-tag">COMING SOON</p>
        <h2 className="upcoming-competitions-title">Upcoming Competitions</h2>

        <div className="upcoming-competitions-grid">
          {upcomingCompetitions.map((comp) => (
            <div key={comp.id} className="upcoming-competition-card">
              <span className="upcoming-competition-genre">{comp.genre}</span>

              <h3>{comp.title}</h3>
              <p className="upcoming-competition-organizer">Organized by {comp.organizer}</p>

              <div className="upcoming-competition-meta">
                <span><CalendarClock size={14} /> Opens {comp.opensDate}</span>
                <span><DollarSign size={14} /> {comp.expectedPrize} expected</span>
              </div>

              <button className="upcoming-notify-btn">Notify Me</button>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}