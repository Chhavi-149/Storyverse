import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  Search,
  Bell,
  Bookmark,
  PenLine,
  ChevronDown,
  Menu,
  BookOpen,
  User,
  Settings,
  LogOut,
} from "lucide-react";
import "./DashboardNavbar.css";

const NAV_LINKS = [
  { label: "Home", to: "/dashboard" },
  { label: "Explore", to: "/explore" },
  { label: "Rankings", to: "/rankings" },
  { label: "Competitions", to: "/competitions" },
];

export default function DashboardNavbar({ onOpenSidebar }) {
  const navigate = useNavigate();
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [imgError, setImgError] = useState(false);

  const user = {
    name: "User",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&auto=format&fit=crop",
  };

  return (
    <header className="navbar-header">
      <div className="navbar-container">
        
        {/* Left: Mobile Menu & Logo */}
        <div className="navbar-left">
          <button
            onClick={onOpenSidebar}
            className="mobile-menu-btn"
            aria-label="Open sidebar"
          >
            <Menu size={20} />
          </button>

          <Link to="/dashboard" className="navbar-brand-link">
            <span className="navbar-brand-badge">
              <BookOpen size={20} className="stroke-[2.2]" />
            </span>
            <span className="navbar-brand-title">Inkwell</span>
          </Link>
        </div>

        {/* Center: Navigation Links */}
        <nav className="navbar-center-nav">
          {NAV_LINKS.map((link) => {
            const isActive = location.pathname === link.to;
            return (
              <Link
                key={link.label}
                to={link.to}
                className={`nav-pill ${isActive ? "active" : ""}`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Right: Controls & Profile */}
        <div className="navbar-right">
          {/* Search Icon */}
          <button className="icon-control-btn" aria-label="Search">
            <Search size={19} />
          </button>

          {/* Notifications */}
<button
  className="icon-control-btn"
  aria-label="Notifications"
  onClick={() => navigate("/notifications")}
>
  <Bell size={19} />
  <span className="notification-dot" />
</button>

          {/* Bookmark */}
         
<button
  className="icon-control-btn"
  aria-label="Bookmarks"
  onClick={() => navigate("/profile?tab=Bookmarks")}
>
  <Bookmark size={19} />
</button>

          {/* Write Button */}
          <button
            onClick={() => navigate("/editor")}
            className="navbar-write-btn"
          >
            <PenLine size={16} />
            <span>Write</span>
          </button>

          {/* User Avatar Dropdown */}
          <div className="profile-dropdown-wrapper">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="profile-trigger-btn"
            >
              <div className="avatar-frame">
                {!imgError ? (
                  <img
                    src={user.avatar}
                    alt={user.name}
                    className="avatar-img"
                    onError={() => setImgError(true)}
                  />
                ) : (
                  <div className="avatar-fallback">U</div>
                )}
              </div>

              <ChevronDown
                size={15}
                className={`chevron-icon ${menuOpen ? "open" : ""}`}
              />
            </button>

            {/* Dropdown Menu */}
{menuOpen && (
  <>
    <div
      className="dropdown-overlay"
      onClick={() => setMenuOpen(false)}
    />

    <div className="dropdown-menu">
      <Link
        to="/profile"
        onClick={() => setMenuOpen(false)}
        className="dropdown-item"
      >
        <User size={15} /> My Profile
      </Link>

      <Link
        to="/profile?tab=Stories"
        onClick={() => setMenuOpen(false)}
        className="dropdown-item"
      >
        <BookOpen size={15} /> My Stories
      </Link>

      <Link
        to="/profile?tab=Bookmarks"
        onClick={() => setMenuOpen(false)}
        className="dropdown-item"
      >
        <Bookmark size={15} /> Bookmarks
      </Link>

      <Link
        to="/edit-profile"
        onClick={() => setMenuOpen(false)}
        className="dropdown-item"
      >
        <Settings size={15} /> Settings
      </Link>

      <div className="dropdown-divider" />

      <button
        onClick={() => {
          setMenuOpen(false);
          navigate("/login");
        }}
        className="dropdown-item logout"
      >
        <LogOut size={15} /> Sign Out
      </button>
    </div>
  </>
)}
             
          </div>
        </div>
      </div>
    </header>
  );
}