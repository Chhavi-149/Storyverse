import "./Hero.css";
import { BookOpen, PenLine } from "lucide-react";

function Hero() {
  return (
    <section className="hero">

      <div className="hero-overlay"></div>

      <div className="hero-content">

        <div className="hero-badge">
          🔥 1.2M+ STORIES PUBLISHED
        </div>

        <h1 className="hero-title">
          Every Great Story
          <br />
          <span>Deserves a Stage.</span>
        </h1>

        <p className="hero-description">
          Inkwell is where writers craft worlds, readers lose themselves,
          and stories evolve through collaboration. Read, write,
          and compete with a global community of storytellers.
        </p>

        <div className="hero-buttons">

          <button className="primary-btn">
            <BookOpen size={20} />
            Start Reading
          </button>

          <button className="secondary-btn">
            <PenLine size={20} />
            Start Writing
          </button>

        </div>

        <div className="hero-users">

          <div className="avatars">

            <img src="https://i.pravatar.cc/40?img=1" alt="" />
            <img src="https://i.pravatar.cc/40?img=2" alt="" />
            <img src="https://i.pravatar.cc/40?img=3" alt="" />
            <img src="https://i.pravatar.cc/40?img=4" alt="" />

          </div>

          <p>
            Join <span>48,000+</span> writers already
          </p>

        </div>

      </div>

    </section>
  );
}

export default Hero;