import { useState, useMemo, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import PublicNavbar from "../../components/Common/PublicNavbar";
import ExploreHero from "../../components/Explore/ExploreHero";
import ExploreSidebar from "../../components/Explore/ExploreSidebar";
import StoryGrid from "../../components/Explore/StoryGrid";
import Footer from "../../components/Footer/Footer";
import { getAllStories } from "../../services/storyService";

const PAGE_SIZE = 6;

const SORT_COMPARATORS = {
  Trending: (a, b) => parseFloat(b.views) - parseFloat(a.views),
  Newest: (a, b) => b.id - a.id,
  "Most Liked": (a, b) => parseFloat(b.likes) - parseFloat(a.likes),
  "Most Viewed": (a, b) => parseFloat(b.views) - parseFloat(a.views),
  "Top Rated": (a, b) => b.rating - a.rating,
};

export default function ExplorePage() {
  const [searchParams] = useSearchParams();
  const genreFromUrl = searchParams.get("genre");
  const initialGenres = genreFromUrl ? [genreFromUrl] : [];
  const initialSearch = searchParams.get("q") || "";

  const [allStories, setAllStories] = useState([]);
  const [loading, setLoading] = useState(true);

  const [searchValue, setSearchValue] = useState(initialSearch);
  const [filters, setFilters] = useState({
    sortBy: "Trending",
    genres: initialGenres,
    language: "All Languages",
  });
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);

  useEffect(() => {
    getAllStories()
      .then(setAllStories)
      .catch((err) => console.error("Failed to load stories:", err))
      .finally(() => setLoading(false));
  }, []);

  const filteredStories = useMemo(() => {
    let result = [...allStories];

    if (searchValue.trim()) {
      const query = searchValue.toLowerCase();
      result = result.filter(
        (story) =>
          story.title.toLowerCase().includes(query) ||
          story.author.toLowerCase().includes(query) ||
          story.genre.toLowerCase().includes(query)
      );
    }

    if (filters.genres.length > 0) {
      result = result.filter((story) => filters.genres.includes(story.genre));
    }

    if (filters.language !== "All Languages") {
      result = result.filter((story) => story.language === filters.language);
    }

    const comparator = SORT_COMPARATORS[filters.sortBy];
    if (comparator) {
      result.sort(comparator);
    }

    return result;
  }, [allStories, searchValue, filters]);

  const visibleStories = filteredStories.slice(0, visibleCount);
  const hasMore = visibleCount < filteredStories.length;

  const handleSearchChange = (value) => {
    setSearchValue(value);
    setVisibleCount(PAGE_SIZE);
  };

  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
    setVisibleCount(PAGE_SIZE);
  };

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + PAGE_SIZE);
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-[#f5f0e8]">

      <PublicNavbar />

      <ExploreHero searchValue={searchValue} onSearchChange={handleSearchChange} />

      <div style={{ maxWidth: "80rem", margin: "0 auto", padding: "0 1.5rem 64px" }}>
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-4 items-start">

          <div className="lg:col-span-1">
            <ExploreSidebar onFilterChange={handleFilterChange} initialGenres={initialGenres} />
          </div>

          <div className="lg:col-span-3">
            {loading ? (
              <p style={{ textAlign: "center", padding: "60px 0", color: "#9a9488" }}>
                Loading stories...
              </p>
            ) : (
              <StoryGrid
                stories={visibleStories}
                sortLabel={filters.sortBy}
                totalCount={filteredStories.length}
                onLoadMore={handleLoadMore}
                hasMore={hasMore}
              />
            )}
          </div>

        </div>
      </div>

      <Footer />

    </div>
  );
}