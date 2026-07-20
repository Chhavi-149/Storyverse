const genres = [
  "Fantasy",
  "Romance",
  "Mystery",
  "Sci-Fi",
  "Adventure",
  "Thriller",
];

function CategoryTabs() {
  return (
    <div className="mb-10">
      <div
        className="flex gap-2 overflow-x-auto pb-2"
        style={{ scrollbarWidth: "none" }}
      >
        {["All", ...genres].map((genre) => (
          <button
            key={genre}
            className="genre-pill shrink-0"
            style={
              genre === "All"
                ? {
                    background: "#c4933a20",
                    borderColor: "#c4933a50",
                    color: "#e8b96a",
                  }
                : {}
            }
          >
            {genre}
          </button>
        ))}
      </div>
    </div>
  );
}

export default CategoryTabs;