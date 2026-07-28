import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import DashboardNavbar from "../../components/Dashboard/DashboardNavbar";
import DashboardSidebar from "../../components/Dashboard/DashboardSidebar";
import ProfileHero from "../../components/Profile/ProfileHero";
import ProfileTabs from "../../components/Profile/ProfileTabs";
import Footer from "../../components/Footer/Footer";
import { useAuth } from "../../context/AuthContext";
import { getUserProfile } from "../../services/userService";

export default function ProfilePage() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [searchParams] = useSearchParams();
  const [isFollowing, setIsFollowing] = useState(false);

  const { currentUser } = useAuth();
  const [profile, setProfile] = useState(null);

  const initialTab = searchParams.get("tab") || "Stories";

  // No backend/user-id routing yet, so every /profile view is treated as the logged-in user's own profile.
  const isOwnProfile = true;

  useEffect(() => {
    if (!currentUser) return;
    getUserProfile(currentUser).then(setProfile);
  }, [currentUser]);

  if (!profile) {
    return (
      <div className="min-h-screen bg-[#0a0a0a] text-[#f5f0e8]">
        <DashboardNavbar onOpenSidebar={() => setSidebarOpen(true)} />
        <p style={{ textAlign: "center", padding: "120px 0", color: "#9a9488" }}>
          Loading profile...
        </p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-[#f5f0e8]">

      <DashboardNavbar onOpenSidebar={() => setSidebarOpen(true)} />
      <DashboardSidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      <ProfileHero
        user={profile}
        isOwnProfile={isOwnProfile}
        isFollowing={isFollowing}
        onFollowToggle={() => setIsFollowing((prev) => !prev)}
      />

      <ProfileTabs initialTab={initialTab} />

      <Footer />

    </div>
  );
}
