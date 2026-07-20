import "./About.css";
import {
  PenSquare,
  BookOpen,
  Users
} from "lucide-react";

function Mission() {

  return (

    <section className="mission">

      <h2>

        Our Mission

      </h2>

      <div className="mission-grid">

        <div className="mission-card">

          <PenSquare size={42} />

          <h3>Write</h3>

          <p>

            Powerful tools that help every writer
            tell unforgettable stories.

          </p>

        </div>

        <div className="mission-card">

          <BookOpen size={42} />

          <h3>Read</h3>

          <p>

            Discover incredible worlds created by
            talented storytellers everywhere.

          </p>

        </div>

        <div className="mission-card">

          <Users size={42} />

          <h3>Collaborate</h3>

          <p>

            Connect with writers, exchange ideas,
            and build stories together.

          </p>

        </div>

      </div>

    </section>

  );

}

export default Mission;