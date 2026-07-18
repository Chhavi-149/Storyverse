import { useState } from "react";

function StoryTabs() {
  const [activeTab, setActiveTab] = useState("published");

  return (
    <section className="story-tabs-section">

      <div className="story-tabs">

        <button
          className={activeTab === "published" ? "tab active" : "tab"}
          onClick={() => setActiveTab("published")}
        >
          Published
        </button>

        <button
          className={activeTab === "drafts" ? "tab active" : "tab"}
          onClick={() => setActiveTab("drafts")}
        >
          Drafts
        </button>

        <button
          className={activeTab === "bookmarks" ? "tab active" : "tab"}
          onClick={() => setActiveTab("bookmarks")}
        >
          Bookmarks
        </button>

      </div>

      <div className="tab-content">

        {activeTab === "published" && (
          <p className="empty-message">
            Published stories will appear here.
          </p>
        )}

        {activeTab === "drafts" && (
          <p className="empty-message">
            Draft stories will appear here.
          </p>
        )}

        {activeTab === "bookmarks" && (
          <p className="empty-message">
            Saved stories will appear here.
          </p>
        )}

      </div>

    </section>
  );
}

export default StoryTabs;