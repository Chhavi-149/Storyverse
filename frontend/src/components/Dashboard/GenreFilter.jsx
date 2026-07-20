import { useState } from 'react';
import './DashboardLayout.css';
import './GenreFilter.css';

const GENRES = [
  'All',
  'Fantasy',
  'Romance',
  'Mystery',
  'Sci-Fi',
  'Horror',
  'Thriller',
  'Historical',
  'Adventure',
  'Drama',
  'Poetry',
  'Literary Fiction',
  'Young Adult',
];

export default function GenreFilter({ onSelect }) {
  const [active, setActive] = useState('All');

  const handleClick = (genre) => {
    setActive(genre);
    onSelect?.(genre);
  };

  return (
    <div className="dashboard-container genre-filter-container">
      {GENRES.map((genre) => {
        const isActive = active === genre;
        return (
          <button
            key={genre}
            onClick={() => handleClick(genre)}
            className={`genre-pill ${isActive ? 'active' : ''}`}
          >
            {genre}
          </button>
        );
      })}
    </div>
  );
}