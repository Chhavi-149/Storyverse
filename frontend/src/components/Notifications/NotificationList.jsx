import "./Notifications.css";

function NotificationList() {

  const notifications = [

    {
      icon: "❤️",
      title: "Sophia Carter liked your story.",
      time: "2 minutes ago",
    },

    {
      icon: "💬",
      title: "Emma Watson commented on Chapter 3.",
      time: "10 minutes ago",
    },

    {
      icon: "👤",
      title: "Ryan Brooks started following you.",
      time: "1 hour ago",
    },

    {
      icon: "🏆",
      title: "Your story entered the Top 10 Fantasy rankings.",
      time: "Yesterday",
    },

    {
      icon: "📚",
      title: "Daniel Grey bookmarked your story.",
      time: "2 days ago",
    },

  ];

  return (

    <section className="notification-section">

      {notifications.map((item, index) => (

        <div
          className="notification-card"
          key={index}
        >

          <div className="notification-icon">

            {item.icon}

          </div>

          <div className="notification-content">

            <h3>{item.title}</h3>

            <p>{item.time}</p>

          </div>

        </div>

      ))}

    </section>

  );
}

export default NotificationList;