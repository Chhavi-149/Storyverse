import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import BackButton from "../../components/Common/BackButton";

import NotificationsHero from "../../components/Notifications/NotificationsHero";
import NotificationList from "../../components/Notifications/NotificationList";

import "../../components/Notifications/Notifications.css";

function NotificationsPage() {
  return (
    <>
      <Navbar />

      <main className="notifications-page">

        <div className="page-top">
          <BackButton />
        </div>

        <NotificationsHero />

        <NotificationList />

      </main>

      <Footer />
    </>
  );
}

export default NotificationsPage;