import { useState } from "react";
import "./ExploreSidebar.css";

const SORT_OPTIONS = ["Trending", "Newest", "Most Liked", "Most Viewed", "Top Rated"];

const GENRES = [
  "Fantasy", "Romance", "Mystery", "Sci-Fi", "Horror",
  "Thriller", "Historical", "Adventure", "Drama", "Poetry",
  "Literary Fiction", "Young Adult",
];

const LANGUAGES = ["All Languages", "English", "Spanish", "French", "Portuguese", "German"];

export default function ExploreSidebar({ onFilterChange }) {
  const [sortBy, setSortBy] = useState("Trending");
  const [selectedGenres, setSelectedGenres] = useState([]);
  const [language, setLanguage] = useState("All Languages");

  const handleSortChange = (option) => {
    setSortBy(option);
    onFilterChange?.({ sortBy: option, genres: selectedGenres, language });
  };

  const toggleGenre = (genre) => {
    const updated = selectedGenres.includes(genre)
      ? selectedGenres.filter((g) => g !== genre)
      : [...selectedGenres, genre];
    setSelectedGenres(updated);
    onFilterChange?.({ sortBy, genres: updated, language });
  };

  const handleLanguageChange = (lang) => {
    setLanguage(lang);
    onFilterChange?.({ sortBy, genres: selectedGenres, language: lang });
  };

  return (
    <aside className="explore-sidebar">

      <div className="explore-sidebar-card">
        <p className="explore-sidebar-heading">SORT BY</p>
        <div className="sort-options-list">
          {SORT_OPTIONS.map((option) => (
            <button
              key={option}
              className={`sort-option-btn ${sortBy === option ? "active" : ""}`}
              onClick={() => handleSortChange(option)}
            >
              {sortBy === option && <span className="sort-arrow">→</span>}
              {option}
            </button>
          ))}
        </div>
      </div>

      <div className="explore-sidebar-card">
        <p className="explore-sidebar-heading">GENRE</p>
        <div className="genre-chip-grid">
          {GENRES.map((genre) => (
            <button
              key={genre}
              className={`genre-chip-btn ${selectedGenres.includes(genre) ? "active" : ""}`}
              onClick={() => toggleGenre(genre)}
            >
              {genre}
            </button>
          ))}
        </div>
      </div>

      <div className="explore-sidebar-card">
        <p className="explore-sidebar-heading">LANGUAGE</p>
        <div className="language-options-list">
          {LANGUAGES.map((lang) => (
            <button
              key={lang}
              className={`language-option-btn ${language === lang ? "active" : ""}`}
              onClick={() => handleLanguageChange(lang)}
            >
              {lang}
            </button>
          ))}
        </div>
      </div>

    </aside>
  );
}