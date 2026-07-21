import "./RecommendedStories.css";

import hollowParliamentCover from "../../assets/covers/hollow-parliament.jpg";
import forgottenSeaCover from "../../assets/covers/echoes-of-the-forgotten-sea.jpg";
import frequencyNineCover from "../../assets/covers/frequency-nine.jpg";
import lastConfessionCover from "../../assets/covers/last-confession.jpg";

const RECOMMENDED = [
  {
  title: "The Hollow Parliament",
  author: "Reza Tahir",
  genre: "THRILLER",
  cover: hollowParliamentCover,
},

{
  title: "Echoes of the Forgotten Sea",
  author: "Nneka Obi",
  genre: "HISTORICAL",
  cover: forgottenSeaCover,
},

{
  title: "Frequency Nine",
  author: "Jude Nakamura",
  genre: "SCI-FI",
  cover: frequencyNineCover,
},

{
  title: "The Last Confession",
  author: "Sofia Andrade",
  genre: "MYSTERY",
  cover: lastConfessionCover,
},
];

export default function RecommendedStories() {
  return (
    <section className="recommended-container">
      <h2 className="section-heading-title"><span>⚡</span> Recommended for You</h2>

      <div className="recommended-grid">
        {RECOMMENDED.map((story) => (
          <div key={story.title} className="recommended-card">
            <div className="recommended-cover">
  <img
    src={story.cover}
    alt={story.title}
    onError={(e) => {
      e.currentTarget.style.display = "none";
    }}
  />
</div>

            <div className="recommended-info">
              <span className="recommended-badge">{story.genre}</span>
              <h3>{story.title}</h3>
              <p>{story.author}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}