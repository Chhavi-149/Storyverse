import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import "./FinalCTA.css";

export default function FinalCTA() {
  return (
    <section className="final-cta-section">
      <div className="final-cta-container">

        <p className="final-cta-tag">GET STARTED</p>

        <h2 className="final-cta-title">
          Your Story Is
          <br />
          <span className="final-cta-title-italic">Waiting to Be Told.</span>
        </h2>

        <p className="final-cta-subtext">
          Free to read. Free to write. Free to become the author you were meant to be.
        </p>

        <div className="final-cta-actions">
          <Link to="/signup" className="final-cta-btn-primary">
            Create Your Account
            <ArrowRight size={18} />
          </Link>
          <Link to="/explore" className="final-cta-btn-outline">
            Browse Stories
          </Link>
        </div>

      </div>
    </section>
  );
}