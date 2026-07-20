import "./Explore.css";

function GenreFilter() {

  const genres = [
    "All",
    "Fantasy",
    "Romance",
    "Thriller",
    "Sci-Fi",
    "Mystery",
    "Horror",
    "Adventure",
  ];

  return (

    <section className="genre-section">

      {genres.map((genre) => (

        <button key={genre}>

          {genre}

        </button>

      ))}

    </section>

  );
}

export default GenreFilter;