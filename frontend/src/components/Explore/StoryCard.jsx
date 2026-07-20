import { Link } from "react-router-dom";

import { Eye, Heart, BookOpen, Star } from "lucide-react";

function StoryCard({ story }) {
  return (
    <Link
      to={`/story/${story.id}`}
      className="block group"
    >
      <div className="bg-slate-900 rounded-2xl overflow-hidden border border-slate-800 hover:border-amber-400 transition-all duration-300 hover:shadow-xl hover:shadow-amber-500/10">

        {/* Cover Image */}

        <div className="relative h-56 overflow-hidden">

          <img
            src={story.cover}
            alt={story.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />

          <div className="absolute inset-0 bg-linear-to-t from-slate-950 via-transparent to-transparent" />

          <span className="absolute top-4 left-4 bg-amber-500 text-black text-xs font-semibold px-3 py-1 rounded-full">
            {story.genre}
          </span>

        </div>

        {/* Content */}

        <div className="p-5">

          <h3 className="text-xl font-bold text-white mb-1 line-clamp-1">
            {story.title}
          </h3>

          <p className="text-sm text-slate-400 mb-4">
            by {story.author}
          </p>

          <p className="text-sm text-slate-300 leading-6 line-clamp-2 mb-5">
            {story.excerpt}
          </p>

          <div className="flex items-center text-sm text-slate-400">

            <div className="flex items-center gap-1 mr-4">
              <Eye size={15} />
              {(story.views / 1000).toFixed(0)}k
            </div>

            <div className="flex items-center gap-1 mr-4">
              <Heart size={15} />
              {(story.likes / 1000).toFixed(1)}k
            </div>

            <div className="flex items-center gap-1 mr-4">
              <BookOpen size={15} />
              {story.chapters}
            </div>

            <div className="ml-auto flex items-center gap-1 text-amber-400">
              <Star fill="currentColor" size={15} />
              {story.rating}
            </div>

          </div>

        </div>

      </div>
       </Link>
  );
}
export default StoryCard;
