import StoryCard from "./StoryCard";
import "./Explore.css";

function StoryGrid() {

  const stories = [

    {
      id:1,
      title:"Whispers of the Night",
      author:"Sophia Carter",
      genre:"Fantasy",
      image:"https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=700&q=80"
    },

    {
      id:2,
      title:"Scarlet Hearts",
      author:"Emily Woods",
      genre:"Romance",
      image:"https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=700&q=80"
    },

    {
      id:3,
      title:"The Lost Throne",
      author:"Daniel Grey",
      genre:"Adventure",
      image:"https://images.unsplash.com/photo-1495446815901-a7297e8d2852?auto=format&fit=crop&w=700&q=80"
    },

    {
      id:4,
      title:"Silent Echo",
      author:"Ava Stone",
      genre:"Mystery",
      image:"https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=700&q=80"
    },

    {
      id:5,
      title:"Broken Destiny",
      author:"Ryan Brooks",
      genre:"Thriller",
      image:"https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=700&q=80"
    },

    {
      id:6,
      title:"Infinite Worlds",
      author:"Lucas Reed",
      genre:"Sci-Fi",
      image:"https://images.unsplash.com/photo-1516979187457-637abb4f9353?auto=format&fit=crop&w=700&q=80"
    }

  ];

  return(

    <section className="story-grid">

      {stories.map((story)=>(

        <StoryCard
          key={story.id}
          story={story}
        />

      ))}

    </section>

  );

}

export default StoryGrid;