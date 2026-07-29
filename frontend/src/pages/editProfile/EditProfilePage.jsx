import { useState, useEffect } from "react";
import DashboardNavbar from "../../components/Dashboard/DashboardNavbar";
import DashboardSidebar from "../../components/Dashboard/DashboardSidebar";
import SettingsSidebar from "../../components/EditProfile/SettingsSidebar";
import EditProfileForm from "../../components/EditProfile/EditProfileForm";
import ChangePasswordForm from "../../components/EditProfile/ChangePasswordForm";
import Footer from "../../components/Footer/Footer";
import { useAuth } from "../../context/AuthContext";
import { getUserProfile, updateUserProfile } from "../../services/userService";
import "../../components/EditProfile/EditProfile.css";

export default function EditProfilePage() {
  const { currentUser } = useAuth();
  const [dashboardSidebarOpen, setDashboardSidebarOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("Edit Profile");

  const [profile, setProfile] = useState(null);
  const [saveMessage, setSaveMessage] = useState("");

  useEffect(() => {
    if (!currentUser) return;
    getUserProfile(currentUser).then(setProfile);
  }, [currentUser]);

  const handleSave = async (updatedData) => {
    if (!currentUser) return;
    try {
      await updateUserProfile(currentUser.uid, {
        username: updatedData.username,
        website: updatedData.website,
        bio: updatedData.bio,
        photo: updatedData.avatar,
      });
      setProfile((prev) => ({
        ...prev,
        ...updatedData,
        displayName: updatedData.username,
      }));
      setSaveMessage("Profile updated!");
      setTimeout(() => setSaveMessage(""), 2500);
    } catch (err) {
      console.error(err);
      setSaveMessage("Couldn't save changes. Please try again.");
    }
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-[#f5f0e8]">

      <DashboardNavbar onOpenSidebar={() => setDashboardSidebarOpen(true)} />
      <DashboardSidebar open={dashboardSidebarOpen} onClose={() => setDashboardSidebarOpen(false)} />

      <div className="edit-profile-page">
        <div className="edit-profile-container">

          <p className="edit-profile-tag">ACCOUNT</p>
          <h1 className="edit-profile-title">Settings</h1>

          <div className="edit-profile-layout">
            <SettingsSidebar activeSection={activeSection} onSectionChange={setActiveSection} />

            {activeSection === "Edit Profile" && profile && (
              <div>
                <EditProfileForm user={profile} onSave={handleSave} />
                {saveMessage && (
                  <p style={{ color: "#c9a15c", marginTop: "8px" }}>{saveMessage}</p>
                )}
              </div>
            )}

            {activeSection === "Edit Profile" && !profile && (
              <p style={{ color: "#9a9488" }}>Loading profile...</p>
            )}

            {activeSection === "Change Password" && <ChangePasswordForm />}

            {activeSection !== "Edit Profile" && activeSection !== "Change Password" && (
              <div className="settings-panel">
                <h2>{activeSection}</h2>
                <p className="settings-placeholder-text">
                  This section hasn't been built yet — let me know if you'd like to design it next.
                </p>
              </div>
            )}

          </div>
        </div>
      </div>

      <Footer />

    </div>
  );
}