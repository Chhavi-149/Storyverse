import { User, Lock, Moon, Bell, Eye, ShieldAlert } from "lucide-react";
import "./EditProfile.css";

const NAV_ITEMS = [
  { key: "Edit Profile", icon: User },
  { key: "Change Password", icon: Lock },
  { key: "Appearance", icon: Moon },
  { key: "Notifications", icon: Bell },
  { key: "Privacy", icon: Eye },
];

export default function SettingsSidebar({ activeSection, onSectionChange }) {
  return (
    <nav className="settings-nav">
      {NAV_ITEMS.map(({ key, icon: Icon }) => (
        <button
          key={key}
          className={`settings-nav-item ${activeSection === key ? "active" : ""}`}
          onClick={() => onSectionChange(key)}
        >
          <Icon size={17} />
          {key}
        </button>
      ))}

      <button
        className={`settings-nav-item danger ${activeSection === "Danger Zone" ? "active" : ""}`}
        onClick={() => onSectionChange("Danger Zone")}
      >
        <ShieldAlert size={17} />
        Danger Zone
      </button>
    </nav>
  );
}