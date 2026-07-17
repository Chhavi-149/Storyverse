import "./GenreSection.css";
import {
  Sparkles,
  Heart,
  Ghost,
  Rocket,
  ScrollText,
  Shield,
} from "lucide-react";

const genres = [
  {
    icon: <Sparkles size={34} />,
    title: "Fantasy",
    stories: "25K Stories",
  },
  {
    icon: <Heart size={34} />,
    title: "Romance",
    stories: "40K Stories",
  },
  {
    icon: <Ghost size={34} />,
    title: "Horror",
    stories: "18K Stories",
  },
  {
    icon: <Rocket size={34} />,
    title: "Sci-Fi",
    stories: "22K Stories",
  },
  {
    icon: <ScrollText size={34} />,
    title: "Historical",
    stories: "12K Stories",
  },
  {
    icon: <Shield size={34} />,
    title: "Adventure",
    stories: "30K Stories",
  },
];

function GenreSection() {
  return (
    <section className="genre-section">
      <div className="genre-container">

        <div className="genre-heading">
          <p>BROWSE</p>
          <h2>Explore By Genre</h2>
        </div>

        <div className="genre-grid">
          {genres.map((genre) => (
            <div className="genre-card" key={genre.title}>
              <div className="genre-icon">{genre.icon}</div>

              <h3>{genre.title}</h3>

              <p>{genre.stories}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default GenreSection;