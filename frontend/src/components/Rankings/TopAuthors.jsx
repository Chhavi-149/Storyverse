import "./Rankings.css";

function TopAuthors() {

  const authors = [

    {
      name: "Sophia Carter",
      stories: 32,
      followers: "8.4K",
    },

    {
      name: "Emma Watson",
      stories: 26,
      followers: "7.8K",
    },

    {
      name: "Daniel Grey",
      stories: 21,
      followers: "6.9K",
    },

  ];

  return (

    <section className="authors-section">

      <h2>✨ Featured Authors</h2>

      <div className="authors-grid">

        {authors.map((author, index) => (

          <div
            className="author-card"
            key={index}
          >

            <div className="author-avatar">

              {author.name.charAt(0)}

            </div>

            <h3>{author.name}</h3>

            <p>{author.stories} Stories</p>

            <span>{author.followers} Followers</span>

            <button>

              View Profile

            </button>

          </div>

        ))}

      </div>

    </section>

  );

}

export default TopAuthors;