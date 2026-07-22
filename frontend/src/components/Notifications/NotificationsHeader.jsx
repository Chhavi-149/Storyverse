import { useNavigate } from "react-router-dom";
import { Check, Settings, Trash2 } from "lucide-react";
import "./Notifications.css";

const TABS = ["All", "Unread", "Likes", "Comments", "Follows", "Competitions"];

export default function NotificationsHeader({
  unreadCount,
  totalCount,
  activeTab,
  onTabChange,
  onMarkAllRead,
  onDeleteAll,
}) {
  const navigate = useNavigate();

  return (
    <div className="notifications-header-wrap">

      <div className="notifications-header">
        <div>
          <p className="notifications-tag">INBOX</p>
          <div className="notifications-title-row">
            <h1>Notifications</h1>
            {unreadCount > 0 && (
              <span className="notifications-count-badge">{unreadCount}</span>
            )}
          </div>
        </div>

        <div className="notifications-actions">
          {totalCount > 0 && (
            <button className="notifications-mark-read-btn" onClick={onMarkAllRead}>
              <Check size={15} />
              Mark all read
            </button>
          )}

          <button
            className="notifications-icon-btn"
            aria-label="Notification settings"
            onClick={() => navigate("/edit-profile")}
          >
            <Settings size={18} />
          </button>

          {totalCount > 0 && (
            <button
              className="notifications-icon-btn danger"
              aria-label="Delete all notifications"
              onClick={onDeleteAll}
            >
              <Trash2 size={18} />
            </button>
          )}
        </div>
      </div>

      <div className="notifications-tabs">
        {TABS.map((tab) => (
          <button
            key={tab}
            className={`notifications-tab-btn ${activeTab === tab ? "active" : ""}`}
            onClick={() => onTabChange(tab)}
          >
            {tab}
            {tab === "Unread" && unreadCount > 0 && (
              <span className="notifications-tab-count">{unreadCount}</span>
            )}
          </button>
        ))}
      </div>

    </div>
  );
}