import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import "./CollaborationCTA.css";

const FEATURED_CONTINUATION = {
  chapter: 13,
  addedBy: "callum.vance",
  excerpt: '"She folded the map along the same crease her mother had—slowly, reverently—and tucked it into the lining of her coat..."',
  image: "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=1200&q=80",
};

export default function CollaborationCTA() {
  return (
    <section className="collab-cta-section">
      <div className="collab-cta-container">

        <div className="collab-cta-text">
          <p className="collab-cta-tag">UNIQUE FEATURE</p>
          <h2>Stories Don't Have to End Where One Writer Leaves Off.</h2>
          <p className="collab-cta-desc">
            Inkwell's collaborative continuation lets readers pick up where any story ends—
            adding chapters, alternate arcs, and new perspectives. The best continuations
            get voted to the top.
          </p>

          <Link to="/explore" className="collab-cta-btn">
            Try Collaborative Writing
            <ArrowRight size={18} />
          </Link>
        </div>

        <div className="collab-cta-visual">
          <img src={FEATURED_CONTINUATION.image} alt="" className="collab-cta-image" />

          <div className="collab-cta-caption-card">
            <p className="collab-cta-caption-meta">
              Chapter {FEATURED_CONTINUATION.chapter} — Added by @{FEATURED_CONTINUATION.addedBy}
            </p>
            <p className="collab-cta-caption-excerpt">
              {FEATURED_CONTINUATION.excerpt}
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}