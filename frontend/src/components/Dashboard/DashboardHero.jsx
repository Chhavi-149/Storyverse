import { Search } from "lucide-react";
import "./DashboardLayout.css";
import "./DashboardHero.css";

export default function DashboardHero({ user: propUser }) {
  const hour = new Date().getHours();

  const greeting =
    hour < 12 ? "Good morning" : hour < 18 ? "Good afternoon" : "Good evening";

  const storedUser = JSON.parse(
    localStorage.getItem("inkwell_current_user") || "{}"
  );
  const userName = propUser?.username || storedUser?.username || "Miriam";

  return (
    <section className="hero-section">
      <div className="dashboard-container hero-container">

        <div className="hero-greeting">
          <p className="greeting-subtext">{greeting},</p>
          <h1 className="greeting-title">Welcome back, {userName}.</h1>
        </div>

        <div className="hero-search-wrapper">
          <Search size={16} className="search-icon" />
          <input
            type="text"
            placeholder="Search stories, writers, genres..."
            className="search-input"
          />
        </div>

      </div>
    </section>
  );
}