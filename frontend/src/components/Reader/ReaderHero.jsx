import { Link } from "react-router-dom";
import "./Reader.css";

function ReaderHero() {
  return (
    <section className="reader-hero">

      <span className="reader-genre">
        Fantasy
      </span>

      <h1>Whispers of the Night</h1>

      <h2>Chapter 1 • The Beginning</h2>

      <p className="reader-author">
        by{" "}
        <Link to="/profile">
          Sophia Carter
        </Link>
      </p>

      <Link
        to="/story"
        className="back-story-btn"
      >
        ← Back to Story
      </Link>

    </section>
  );
}

export default ReaderHero;