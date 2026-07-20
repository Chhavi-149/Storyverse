import { Search, SlidersHorizontal } from "lucide-react";
import "./ExploreHero.css";

export default function ExploreHero({ searchValue, onSearchChange, onFilterClick }) {
  return (
    <section className="explore-hero-section">
      <div className="explore-hero-container">

        <p className="explore-hero-tag">DISCOVER</p>
        <h1 className="explore-hero-title">Explore Stories</h1>

        <div className="explore-search-wrapper">
          <Search size={18} className="explore-search-icon" />
          <input
            type="text"
            placeholder="Search by title, author, or genre..."
            className="explore-search-input"
            value={searchValue}
            onChange={(e) => onSearchChange?.(e.target.value)}
          />
          <button
            className="explore-filter-btn"
            onClick={onFilterClick}
            aria-label="Filters"
          >
            <SlidersHorizontal size={18} />
          </button>
        </div>

      </div>
    </section>
  );
}