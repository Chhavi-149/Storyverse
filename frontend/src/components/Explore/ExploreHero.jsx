import "./Explore.css";
import { Search } from "lucide-react";

function ExploreHero() {
  return (
    <section className="explore-hero">
      <h1>Discover Amazing Stories</h1>

      <p>
        Explore thousands of stories written by talented writers from around the
        world.
      </p>

      <div className="search-box">
        <Search size={20} />

        <input
          type="text"
          placeholder="Search by title, author or genre..."
        />
      </div>
    </section>
  );
}

export default ExploreHero;