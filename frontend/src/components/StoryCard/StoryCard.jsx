import { Link } from "react-router-dom";

function StoryCard({ title, author, genre, rating }) {
  return (
    <Link
      to="/story"
      className="block bg-[#1B1612] rounded-2xl p-6 border border-yellow-500/20 hover:border-yellow-500 transition duration-300 hover:scale-[1.02]"
    >

      <div className="h-40 rounded-xl bg-[#2A231C] flex items-center justify-center text-5xl">
        📖
      </div>

      <h3 className="text-xl font-bold text-white mt-5">
        {title}
      </h3>

      <p className="text-gray-400 mt-2">
        by {author}
      </p>

      <div className="flex justify-between items-center mt-6">

        <span className="bg-yellow-500/20 text-yellow-400 px-3 py-1 rounded-full text-sm">
          {genre}
        </span>

        <span className="text-yellow-500">
          ⭐ {rating}
        </span>

      </div>

    </Link>
  );
}

export default StoryCard;