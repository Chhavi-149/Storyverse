import "./TopWriters.css";

const writers = [
  {
    name: "Emily Carter",
    genre: "Fantasy",
    followers: "124K",
    image: "https://i.pravatar.cc/150?img=32",
  },
  {
    name: "James Wilson",
    genre: "Sci-Fi",
    followers: "97K",
    image: "https://i.pravatar.cc/150?img=12",
  },
  {
    name: "Sophia Brown",
    genre: "Romance",
    followers: "142K",
    image: "https://i.pravatar.cc/150?img=45",
  },
  {
    name: "Daniel Lee",
    genre: "Mystery",
    followers: "89K",
    image: "https://i.pravatar.cc/150?img=15",
  },
];

function TopWriters() {
  return (
    <section className="writers">
      <div className="writers-container">

        <div className="writers-heading">
          <p>COMMUNITY</p>
          <h2>Meet Top Writers</h2>
        </div>

        <div className="writers-grid">
          {writers.map((writer) => (
            <div className="writer-card" key={writer.name}>

              <img src={writer.image} alt={writer.name} />

              <h3>{writer.name}</h3>

              <span>{writer.genre}</span>

              <p>{writer.followers} Followers</p>

              <button>Follow</button>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default TopWriters;