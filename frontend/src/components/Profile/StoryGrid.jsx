function StoryGrid() {
  const stories = [
    {
      id: 1,
      title: "The Kingdom of Ashes",
      genre: "Fantasy",
      reads: "15.2K",
      image:
        "https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 2,
      title: "Silent Hearts",
      genre: "Romance",
      reads: "8.9K",
      image:
        "https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 3,
      title: "Beyond the Stars",
      genre: "Sci-Fi",
      reads: "22.4K",
      image:
        "https://images.unsplash.com/photo-1495446815901-a7297e633e8d?auto=format&fit=crop&w=800&q=80",
    },
  ];

  return (
    <section className="story-grid">

      {stories.map((story) => (

        <div className="story-card" key={story.id}>

          <img
            src={story.image}
            alt={story.title}
            className="story-image"
          />

          <div className="story-info">

            <h3>{story.title}</h3>

            <p>{story.genre}</p>

            <span>{story.reads} Reads</span>

          </div>

        </div>

      ))}

    </section>
  );
}

export default StoryGrid;