import { useState } from 'react';

const GENRES = ['All','Fantasy','Romance','Mystery','Sci-Fi','Horror','Thriller','Historical','Adventure','Drama','Poetry','Literary Fiction','Young Adult'];

export default function GenreFilter({ onSelect }) {
  const [active, setActive] = useState('All');

  const handleClick = (genre) => {
    setActive(genre);
    onSelect?.(genre);
  };

  return (
    <div className="scrollbar-hide flex gap-2 overflow-x-auto pb-2">
      {GENRES.map((genre) => (
        <button
          key={genre}
          onClick={() => handleClick(genre)}
          className={`shrink-0 rounded-full px-4 py-2 text-sm font-medium transition ${
            active === genre
              ? 'bg-[#c9a15c] text-[#0a0a0a]'
              : 'bg-[#161513] text-[#c8c3ba] hover:text-[#f5f0e8]'
          }`}
        >
          {genre}
        </button>
      ))}
    </div>
  );
}