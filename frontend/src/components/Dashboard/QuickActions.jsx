import { Link } from "react-router-dom";
import {
  PenSquare,
  Compass,
  User,
  BookOpen,
} from "lucide-react";

import "./QuickActions.css";

function QuickActions() {
  return (
    <section className="quick-actions">

      <h2>Quick Actions</h2>

      <div className="actions-grid">

        <Link to="/editor" className="action-card">

          <PenSquare size={36} />

          <h3>New Story</h3>

          <p>
            Start writing your next masterpiece.
          </p>

        </Link>

        <Link to="/explore" className="action-card">

          <Compass size={36} />

          <h3>Explore</h3>

          <p>
            Discover trending stories.
          </p>

        </Link>

        <Link to="/profile" className="action-card">

          <User size={36} />

          <h3>Profile</h3>

          <p>
            View your profile and statistics.
          </p>

        </Link>

        <a href="#drafts" className="action-card">

          <BookOpen size={36} />

          <h3>My Drafts</h3>

          <p>
            Continue unfinished stories.
          </p>

        </a>

      </div>

    </section>
  );
}

export default QuickActions;