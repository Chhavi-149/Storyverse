import { MessageSquare, Heart, UserPlus, GitBranch, Trophy, Star, Bell, BellOff } from "lucide-react";
import "./Notifications.css";

const TYPE_BADGE_ICON = {
  comment: MessageSquare,
  like: Heart,
  follow: UserPlus,
  continuation: GitBranch,
};

const TYPE_STANDALONE_ICON = {
  competition: Trophy,
  achievement: Star,
  milestone: Bell,
};

export default function NotificationsList({ notifications, onLoadMore, hasMore, activeTab }) {
  if (notifications.length === 0) {
    return (
      <div className="notifications-empty">
        <BellOff size={40} className="notifications-empty-icon" />
        <h3>No notifications here</h3>
        <p>No {activeTab.toLowerCase()} notifications yet.</p>
      </div>
    );
  }

  return (
    <>
      <div className="notifications-list">
        {notifications.map((n) => {
          const BadgeIcon = TYPE_BADGE_ICON[n.type];
          const StandaloneIcon = TYPE_STANDALONE_ICON[n.type];

          return (
            <div key={n.id} className={`notification-item ${n.read ? "read" : "unread"}`}>

              {n.avatar ? (
                <div className="notification-avatar-wrap">
                  <img src={n.avatar} alt={n.actor} />
                  {BadgeIcon && (
                    <span className={`notification-type-badge ${n.type}`}>
                      <BadgeIcon size={10} />
                    </span>
                  )}
                </div>
              ) : (
                <div className="notification-icon-only">
                  {StandaloneIcon && <StandaloneIcon size={18} />}
                </div>
              )}

              <div className="notification-body">
                <p className="notification-text">
                  {n.actor && <strong>{n.actor}</strong>} {n.text}{" "}
                  {n.story && (
                    <span className="notification-story-link">"{n.story}"</span>
                  )}
                </p>
                <p className="notification-time">{n.time}</p>
              </div>

            </div>
          );
        })}
      </div>

      {hasMore && (
        <div className="notifications-load-more">
          <button onClick={onLoadMore}>Load older notifications</button>
        </div>
      )}
    </>
  );
}