import "./Story.css";

function StoryInfo() {
  return (
    <section className="story-info">

      <div className="info-card">

        <div>
          <h3>Chapters</h3>
          <p>24</p>
        </div>

        <div>
          <h3>Reads</h3>
          <p>48.7K</p>
        </div>

        <div>
          <h3>Votes</h3>
          <p>9.2K</p>
        </div>

        <div>
          <h3>Status</h3>
          <p>Completed</p>
        </div>

      </div>

      <div className="about-story">

        <h2>About this Story</h2>

        <p>
          In a kingdom forgotten by history, an ancient prophecy begins to
          unfold. A young warrior must navigate political conspiracies,
          forbidden magic, and dangerous alliances to prevent darkness from
          consuming the realm.
        </p>

      </div>

    </section>
  );
}

export default StoryInfo;