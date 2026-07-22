import { useState } from "react";
import DashboardNavbar from "../../components/Dashboard/DashboardNavbar";
import DashboardSidebar from "../../components/Dashboard/DashboardSidebar";
import SettingsSidebar from "../../components/EditProfile/SettingsSidebar";
import EditProfileForm from "../../components/EditProfile/EditProfileForm";
import Footer from "../../components/Footer/Footer";
import currentUser from "../../data/currentUser";
import "../../components/EditProfile/EditProfile.css";

export default function EditProfilePage() {
  const [dashboardSidebarOpen, setDashboardSidebarOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("Edit Profile");

  const handleSave = (updatedData) => {
    console.log("Saving profile changes:", updatedData);
    // Real save logic (API/Firebase call) goes here later
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

            {activeSection === "Edit Profile" && (
              <EditProfileForm user={currentUser} onSave={handleSave} />
            )}

            {activeSection !== "Edit Profile" && (
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