import { useState } from "react";
import { Search, SlidersHorizontal } from "lucide-react";

function ExploreHeader() {
  const [search, setSearch] = useState("");
  const [showFilters, setShowFilters] = useState(false);

  return (
    <div className="mb-10">

      {/* Heading */}

      <p className="text-xs uppercase tracking-[0.3em] text-amber-400 mb-2">
        Discover
      </p>

      <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
        Explore Stories
      </h1>

      {/* Search Bar */}

      <div className="relative max-w-2xl">

        <Search
          size={18}
          className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
        />

        <input
          type="text"
          placeholder="Search by title, author, or genre..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full rounded-xl border border-slate-700 bg-slate-900 text-white py-4 pl-12 pr-14 outline-none focus:border-amber-400 transition-all"
        />

        <button
          onClick={() => setShowFilters(!showFilters)}
          className={`absolute right-3 top-1/2 -translate-y-1/2 p-2 rounded-lg transition-all ${
            showFilters
              ? "text-amber-400 bg-slate-800"
              : "text-gray-400 hover:bg-slate-800"
          }`}
        >
          <SlidersHorizontal size={18} />
        </button>

      </div>

    </div>
  );
}

export default ExploreHeader;