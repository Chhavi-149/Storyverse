import { useState, useMemo } from "react";
import DashboardNavbar from "../../components/Dashboard/DashboardNavbar";
import DashboardSidebar from "../../components/Dashboard/DashboardSidebar";
import NotificationsHeader from "../../components/Notifications/NotificationsHeader";
import NotificationsList from "../../components/Notifications/NotificationsList";
import Footer from "../../components/Footer/Footer";
import initialNotifications from "../../data/notifications";
import "../../components/Notifications/Notifications.css";

const PAGE_SIZE = 4;

const TAB_TYPE_FILTER = {
  Likes: "like",
  Comments: "comment",
  Follows: "follow",
  Competitions: "competition",
};

export default function NotificationsPage() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [notifications, setNotifications] = useState(initialNotifications);
  const [activeTab, setActiveTab] = useState("All");
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);

  const unreadCount = notifications.filter((n) => !n.read).length;

  const filtered = useMemo(() => {
    if (activeTab === "All") return notifications;
    if (activeTab === "Unread") return notifications.filter((n) => !n.read);
    const typeFilter = TAB_TYPE_FILTER[activeTab];
    return notifications.filter((n) => n.type === typeFilter);
  }, [notifications, activeTab]);

  const visible = filtered.slice(0, visibleCount);
  const hasMore = visibleCount < filtered.length;

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    setVisibleCount(PAGE_SIZE);
  };

  const handleMarkAllRead = () => {
    setNotifications((prev) => prev.map((n) => ({ ...n, read: true })));
  };

  const handleDeleteAll = () => {
    setNotifications([]);
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-[#f5f0e8]">

      <DashboardNavbar onOpenSidebar={() => setSidebarOpen(true)} />
      <DashboardSidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      <div className="notifications-page">
        <div className="notifications-container">
<NotificationsHeader
  unreadCount={unreadCount}
  totalCount={notifications.length}
  activeTab={activeTab}
  onTabChange={handleTabChange}
  onMarkAllRead={handleMarkAllRead}
  onDeleteAll={handleDeleteAll}
/>

<NotificationsList
  notifications={visible}
  onLoadMore={() => setVisibleCount((prev) => prev + PAGE_SIZE)}
  hasMore={hasMore}
  activeTab={activeTab}
/>

        </div>
      </div>

      <Footer />

    </div>
  );
}