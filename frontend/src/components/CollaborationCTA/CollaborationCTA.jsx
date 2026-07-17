import "./CollaborationCTA.css";
import { PenSquare } from "lucide-react";

function CollaborationCTA() {
  return (
    <section className="collaboration">
      <div className="collaboration-card">

        <div className="collaboration-content">

          <p className="tag">COLLABORATE</p>

          <h2>
            Write Together.
            <br />
            Create Something Extraordinary.
          </h2>

          <p className="description">
            Invite co-authors, edit stories together in real time,
            exchange ideas, and build unforgettable worlds with
            writers from across the globe.
          </p>

          <button>
            <PenSquare size={20} />
            Start Collaborating
          </button>

        </div>

      </div>
    </section>
  );
}

export default CollaborationCTA;