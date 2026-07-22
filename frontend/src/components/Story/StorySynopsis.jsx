import { BookText } from "lucide-react";
import "./Story.css";

export default function StorySynopsis({ story }) {
  return (
    <section className="story-synopsis-section">
      <div className="story-synopsis-container">

        <div className="story-synopsis-heading">
          <BookText size={20} />
          <h2>Synopsis</h2>
        </div>

        <p className="story-synopsis-text">{story.blurb}</p>

      </div>
    </section>
  );
}