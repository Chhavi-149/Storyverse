import { useState } from "react";
import { X } from "lucide-react";

const sortOptions = [
  "Trending",
  "Newest",
  "Most Liked",
  "Most Viewed",
  "Top Rated",
];

const genres = [
  "Fantasy",
  "Romance",
  "Adventure",
  "Mystery",
  "Sci-Fi",
  "Horror",
  "Drama",
  "Comedy",
];

const languages = [
  "All Languages",
  "English",
  "Spanish",
  "French",
  "German",
  "Portuguese",
];

function FilterSidebar() {
  const [sortBy, setSortBy] = useState("Trending");
  const [selectedGenres, setSelectedGenres] = useState([]);
  const [language, setLanguage] = useState("All Languages");

  const toggleGenre = (genre) => {
    if (selectedGenres.includes(genre)) {
      setSelectedGenres(selectedGenres.filter((g) => g !== genre));
    } else {
      setSelectedGenres([...selectedGenres, genre]);
    }
  };

  return (
    <aside className="w-72 flex-shrink-0 space-y-6">

      {/* Sort */}

      <div className="bg-slate-900 rounded-2xl border border-slate-800 p-6">

        <h3 className="text-xs uppercase tracking-[0.3em] text-amber-400 mb-5">
          Sort By
        </h3>

        <div className="space-y-2">
          {sortOptions.map((option) => (
            <button
              key={option}
              onClick={() => setSortBy(option)}
              className={`w-full text-left px-4 py-2 rounded-lg transition ${
                sortBy === option
                  ? "bg-amber-500/10 text-amber-400"
                  : "text-slate-300 hover:bg-slate-800"
              }`}
            >
              {sortBy === option && "→ "}
              {option}
            </button>
          ))}
        </div>

      </div>

      {/* Genres */}

      <div className="bg-slate-900 rounded-2xl border border-slate-800 p-6">

        <h3 className="text-xs uppercase tracking-[0.3em] text-amber-400 mb-5">
          Genres
        </h3>

        <div className="flex flex-wrap gap-2">

          {genres.map((genre) => (
            <button
              key={genre}
              onClick={() => toggleGenre(genre)}
              className={`px-3 py-2 rounded-full border text-sm transition ${
                selectedGenres.includes(genre)
                  ? "border-amber-400 bg-amber-500/10 text-amber-400"
                  : "border-slate-700 text-slate-300 hover:border-amber-400"
              }`}
            >
              {genre}
            </button>
          ))}

        </div>

        {selectedGenres.length > 0 && (
          <button
            onClick={() => setSelectedGenres([])}
            className="flex items-center gap-2 mt-5 text-sm text-slate-400 hover:text-white"
          >
            <X size={14} />
            Clear Filters
          </button>
        )}

      </div>

      {/* Languages */}

      <div className="bg-slate-900 rounded-2xl border border-slate-800 p-6">

        <h3 className="text-xs uppercase tracking-[0.3em] text-amber-400 mb-5">
          Language
        </h3>

        <div className="space-y-2">

          {languages.map((lang) => (
            <button
              key={lang}
              onClick={() => setLanguage(lang)}
              className={`w-full text-left px-4 py-2 rounded-lg transition ${
                language === lang
                  ? "bg-amber-500/10 text-amber-400"
                  : "text-slate-300 hover:bg-slate-800"
              }`}
            >
              {lang}
            </button>
          ))}

        </div>

      </div>

    </aside>
  );
}

export default FilterSidebar;