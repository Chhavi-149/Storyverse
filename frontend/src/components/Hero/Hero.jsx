import { Link } from "react-router-dom";
import { Flame, BookOpen, PenLine } from "lucide-react";
import "./Hero.css";

const AVATARS = [
  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=100&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=100&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=100&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=100&auto=format&fit=crop",
];

export default function Hero() {
  return (
    <section className="landing-hero">
      <div className="landing-hero-content">

        <div className="landing-hero-badge">
          <Flame size={14} />
          1.2M+ Stories Published
        </div>

        <h1 className="landing-hero-title">
          Every Great Story
          <br />
          <span className="landing-hero-title-italic">Deserves a Stage.</span>
        </h1>

        <p className="landing-hero-subtext">
          Inkwell is where writers craft worlds, readers lose themselves,
          and stories evolve through collaboration. Read, write, and
          compete with a global community of storytellers.
        </p>

        <div className="landing-hero-actions">
          <Link to="/explore" className="landing-hero-btn-primary">
            <BookOpen size={18} />
            Start Reading
          </Link>
          <Link to="/signup" className="landing-hero-btn-outline">
            <PenLine size={18} />
            Start Writing
          </Link>
        </div>

        <div className="landing-hero-social-proof">
          <div className="landing-hero-avatars">
            {AVATARS.map((src, i) => (
              <img key={i} src={src} alt="" className="landing-hero-avatar" />
            ))}
          </div>
          <p>
            Join <strong>48,000+</strong> writers already publishing
          </p>
        </div>

      </div>

      <div className="landing-hero-scroll">
        <span>SCROLL</span>
        <div className="landing-hero-scroll-line" />
      </div>
    </section>
  );
}