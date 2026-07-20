import { Link, useLocation, useNavigate } from "react-router-dom";
import { BookOpen } from "lucide-react";
import "./PublicNavbar.css";

const NAV_LINKS = [
  { label: "Explore", to: "/explore" },
  { label: "Rankings", to: "/rankings" },
  { label: "Competitions", to: "/competitions" },
  
];

export default function PublicNavbar() {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <header className="public-navbar">
      <div className="public-navbar-container">

        <Link to="/" className="public-navbar-brand">
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
          <button
            className="public-login-btn"
            onClick={() => navigate("/login")}
          >
            Log In
          </button>
          <button
            className="public-write-btn"
            onClick={() => navigate("/signup")}
          >
            Start Writing
          </button>
        </div>

      </div>
    </header>
  );
}