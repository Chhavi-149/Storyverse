import { useState, useEffect } from "react";
import { BookOpen, Flame, ChevronRight } from "lucide-react";
import { getWritingResources } from "../../services/rankingsService";
import "./Competitions.css";

const TYPE_ICONS = {
  GUIDE: BookOpen,
  WORKSHOP: BookOpen,
  VIDEO: Flame,
};

export default function WritingResources() {
  const [writingResources, setWritingResources] = useState([]);

  useEffect(() => {
    getWritingResources().then(setWritingResources).catch((err) => console.error(err));
  }, []);

  return (
    <section className="writing-resources-section">
      <div className="writing-resources-container">

        <p className="writing-resources-tag">LEARN</p>
        <h2 className="writing-resources-title">Writing Resources</h2>

        <div className="writing-resources-grid">
          {writingResources.map((resource) => {
            const Icon = TYPE_ICONS[resource.type] || BookOpen;
            return (
              <a key={resource.id} href="#" className="writing-resource-card">
                <span className="writing-resource-icon">
                  <Icon size={18} />
                </span>

                <div className="writing-resource-info">
                  <h4>{resource.title}</h4>
                  <div className="writing-resource-meta">
                    <span className="writing-resource-type">{resource.type}</span>
                    <span className="writing-resource-duration">{resource.duration}</span>
                  </div>
                </div>

                <ChevronRight size={18} className="writing-resource-arrow" />
              </a>
            );
          })}
        </div>

      </div>
    </section>
  );
}