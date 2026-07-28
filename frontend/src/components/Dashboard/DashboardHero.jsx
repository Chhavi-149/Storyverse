import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Search } from "lucide-react";
import { useAuth } from "../../context/AuthContext";
import "./DashboardLayout.css";
import "./DashboardHero.css";

export default function DashboardHero() {
  const { currentUser } = useAuth();
  const navigate = useNavigate();
  const [searchValue, setSearchValue] = useState("");

  const hour = new Date().getHours();
  const greeting =
    hour < 12 ? "Good morning" : hour < 18 ? "Good afternoon" : "Good evening";

  const userName = currentUser?.username || "there";

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (!searchValue.trim()) return;
    navigate(`/explore?q=${encodeURIComponent(searchValue.trim())}`);
  };

  return (
    <section className="hero-section">
      <div className="dashboard-container hero-container">

        <div className="hero-greeting">
          <p className="greeting-subtext">{greeting},</p>
          <h1 className="greeting-title">Welcome back, {userName}.</h1>
        </div>

        <form className="hero-search-wrapper" onSubmit={handleSearchSubmit}>
          <Search size={16} className="search-icon" />
          <input
            type="text"
            placeholder="Search stories, writers, genres..."
            className="search-input"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
          />
        </form>

      </div>
    </section>
  );
}