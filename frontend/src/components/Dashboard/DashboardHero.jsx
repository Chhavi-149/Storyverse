import { Link } from "react-router-dom";
import "./DashboardHero.css";

function DashboardHero() {
  return (
    <section className="dashboard-hero">

      <div className="hero-left">

        <p className="hero-tag">
          Welcome Back 👋
        </p>

        <h1>
          Ready to continue your
          <span> writing journey?</span>
        </h1>

        <p className="hero-text">
          You have 3 drafts waiting and readers are
          eager for your next chapter.
        </p>

        <div className="hero-buttons">

          <Link
            to="/editor"
            className="hero-primary-btn"
          >
            Continue Writing
          </Link>

          <Link
            to="/explore"
            className="hero-secondary-btn"
          >
            Explore Stories
          </Link>

        </div>

      </div>

      <div className="hero-right">

        <div className="streak-card">

          <h3>🔥 Writing Streak</h3>

          <h2>5 Days</h2>

          <p>
            Keep writing today to continue your streak.
          </p>

        </div>

      </div>

    </section>
  );
}

export default DashboardHero;