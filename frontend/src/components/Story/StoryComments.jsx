import { useState } from "react";
import { MessageSquare, Heart } from "lucide-react";
import currentUser from "../../data/currentUser";
import "./Story.css";

export default function StoryComments({ comments, onAddComment }) {
  const [draft, setDraft] = useState("");
  const [likedIds, setLikedIds] = useState([]);

  const handlePost = () => {
    if (!draft.trim()) return;
    onAddComment(draft.trim());
    setDraft("");
  };

  const toggleLike = (id) => {
    setLikedIds((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    );
  };

  return (
    <section className="story-comments-section">
      <div className="story-comments-container">

        <div className="story-comments-heading">
          <MessageSquare size={20} />
          <h2>Comments</h2>
          <span className="story-comments-count">{comments.length}</span>
        </div>

        <div className="story-comment-input-row">
          <img src={currentUser.avatar} alt={currentUser.displayName} />
          <div className="story-comment-input-wrap">
            <textarea
              placeholder="Share your thoughts on this chapter..."
              value={draft}
              onChange={(e) => setDraft(e.target.value)}
            />
            <div className="story-comment-post-row">
              <button onClick={handlePost}>Post Comment</button>
            </div>
          </div>
        </div>

        <div className="story-comments-list">
          {comments.map((comment) => {
            const isLiked = likedIds.includes(comment.id);
            const displayLikes = comment.likes + (isLiked ? 1 : 0);

            return (
              <div key={comment.id} className="story-comment-row">
                <img src={comment.avatar} alt={comment.author} />

                <div className="story-comment-body">
                  <div className="story-comment-meta">
                    <h4>{comment.author}</h4>
                    <span>{comment.time}</span>
                  </div>

                  <p className="story-comment-text">{comment.text}</p>

                  <button
                    className={`story-comment-like-btn ${isLiked ? "active" : ""}`}
                    onClick={() => toggleLike(comment.id)}
                  >
                    <Heart size={14} />
                    {displayLikes}
                  </button>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}