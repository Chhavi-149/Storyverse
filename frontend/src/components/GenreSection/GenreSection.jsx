import { Link } from "react-router-dom";
import { Crown, Star, Eye, Zap, Flame, TrendingUp, BookOpen } from "lucide-react";
import "./GenreSection.css";

const GENRES = [
  { name: "Fantasy", icon: Crown },
  { name: "Romance", icon: Star },
  { name: "Mystery", icon: Eye },
  { name: "Sci-Fi", icon: Zap },
  { name: "Horror", icon: Flame },
  { name: "Thriller", icon: TrendingUp },
  { name: "Historical", icon: BookOpen },
  { name: "Adventure", icon: BookOpen },
  { name: "Drama", icon: BookOpen },
  { name: "Poetry", icon: BookOpen },
  { name: "Literary Fiction", icon: BookOpen },
  { name: "Young Adult", icon: BookOpen },
];

export default function GenreSection() {
  return (
    <section className="genre-section">
      <div className="genre-section-container">

        <p className="genre-section-tag">EXPLORE BY GENRE</p>
        <h2 className="genre-section-title">Find Your World</h2>

        <div className="genre-section-grid">
          {GENRES.map(({ name, icon: Icon }) => (
            <Link
              key={name}
              to={`/explore?genre=${encodeURIComponent(name)}`}
              className="genre-section-pill"
            >
              <Icon size={16} />
              {name}
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}