import { useState } from "react";
import { Eye, Heart, MessageSquare, TrendingUp } from "lucide-react";
import "./Rankings.css";

const PERIODS = ["Daily", "Weekly", "Monthly", "All Time"];

const SORT_OPTIONS = [
  { label: "Most Viewed", icon: Eye },
  { label: "Most Liked", icon: Heart },
  { label: "Most Commented", icon: MessageSquare },
  { label: "Top New Authors", icon: TrendingUp },
];

export default function RankingsHero({ onFilterChange }) {
  const [period, setPeriod] = useState("Weekly");
  const [sortBy, setSortBy] = useState("Most Viewed");

  const handlePeriodChange = (value) => {
    setPeriod(value);
    onFilterChange?.({ period: value, sortBy });
  };

  const handleSortChange = (value) => {
    setSortBy(value);
    onFilterChange?.({ period, sortBy: value });
  };

  return (
    <section className="rankings-hero">
      <div className="rankings-hero-container">

        <p className="rankings-hero-tag">LEADERBOARD</p>
        <h1 className="rankings-hero-title">Novel Rankings</h1>
        <p className="rankings-hero-subtext">
          The most-read, most-loved stories on Inkwell right now.
        </p>

        <div className="rankings-period-tabs">
          {PERIODS.map((p) => (
            <button
              key={p}
              className={`rankings-period-tab ${period === p ? "active" : ""}`}
              onClick={() => handlePeriodChange(p)}
            >
              {p}
            </button>
          ))}
        </div>

        <div className="rankings-sort-pills">
          {SORT_OPTIONS.map(({ label, icon: Icon }) => (
            <button
              key={label}
              className={`rankings-sort-pill ${sortBy === label ? "active" : ""}`}
              onClick={() => handleSortChange(label)}
            >
              <Icon size={15} />
              {label}
            </button>
          ))}
        </div>

      </div>
    </section>
  );
}