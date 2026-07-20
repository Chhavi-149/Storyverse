import "./FinalCTA.css";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

function FinalCTA() {
  return (
    <section className="final-cta">

      <div className="cta-container">

        <p className="cta-tag">
          JOIN THOUSANDS OF STORYTELLERS
        </p>

        <h2>
          Your Next
          <span> Bestseller </span>
          Starts Here.
        </h2>

        <p className="cta-description">
          Whether you're writing your very first chapter or publishing your
          tenth novel, Inkwell gives you the tools and community to bring your
          imagination to life.
        </p>

        <Link
          to="/signup"
          className="cta-button"
        >
          Start Your Journey

          <ArrowRight size={20} />
        </Link>

      </div>

    </section>
  );
}

export default FinalCTA;