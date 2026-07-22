import { Link, useLocation, useNavigate } from "react-router-dom";
import { BookOpen, ChevronDown } from "lucide-react";
import { useState } from "react";
import { useAuth } from "../../context/AuthContext";
import "./PublicNavbar.css";

const NAV_LINKS = [
  { label: "Home", to: "/dashboard" },
  { label: "Explore", to: "/explore" },
  { label: "Rankings", to: "/rankings" },
  { label: "Competitions", to: "/competitions" },
];

export default function PublicNavbar() {
  const location = useLocation();
  const navigate = useNavigate();
  const { currentUser, logout } = useAuth();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="public-navbar">
      <div className="public-navbar-container">

        <Link to="/dashboard" className="public-navbar-brand">
          <span className="public-navbar-badge">
            <BookOpen size={20} />
          </span>
          <span className="public-navbar-title">Inkwell</span>
        </Link>

        <nav className="public-navbar-links">
          {NAV_LINKS.map((link) => {
            const isActive = location.pathname === link.to;
            return (
              <Link
                key={link.label}
                to={link.to}
                className={`public-nav-link ${isActive ? "active" : ""}`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="public-navbar-actions">
          {currentUser ? (
            <div className="public-profile-dropdown-wrapper">
              <button
                className="public-profile-trigger"
                onClick={() => setMenuOpen(!menuOpen)}
              >
                <div className="public-avatar-frame">
                  {currentUser.photo ? (
                    <img src={currentUser.photo} alt={currentUser.username} />
                  ) : (
                    <span>{currentUser.username?.charAt(0).toUpperCase() || "U"}</span>
                  )}
                </div>
                <ChevronDown size={15} className={menuOpen ? "open" : ""} />
              </button>

              {menuOpen && (
                <>
                  <div className="public-dropdown-overlay" onClick={() => setMenuOpen(false)} />
                  <div className="public-dropdown-menu">
                    <Link to="/profile" onClick={() => setMenuOpen(false)} className="public-dropdown-item">
                      My Profile
                    </Link>
                    <Link to="/edit-profile" onClick={() => setMenuOpen(false)} className="public-dropdown-item">
                      Settings
                    </Link>
                    <div className="public-dropdown-divider" />
                    <button
                      className="public-dropdown-item logout"
                      onClick={() => {
                        setMenuOpen(false);
                        logout();
                        navigate("/login");
                      }}
                    >
                      Sign Out
                    </button>
                  </div>
                </>
              )}
            </div>
          ) : (
            <>
              <button className="public-login-btn" onClick={() => navigate("/login")}>
                Log In
              </button>
              <button className="public-write-btn" onClick={() => navigate("/signup")}>
                Start Writing
              </button>
            </>
          )}
        </div>

      </div>
    </header>
  );
}