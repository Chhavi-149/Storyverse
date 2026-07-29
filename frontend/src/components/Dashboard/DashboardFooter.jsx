import "./DashboardFooter.css";
import { Link } from "react-router-dom";

// Map each visible label to its real route.
// Labels not in this map have no page yet, so they stay as "#".
const LINK_ROUTES = {
  "Explore Stories": "/explore",
  "Novel Rankings": "/rankings",
  "Start Writing": "/editor",
  "Competitions": "/competitions",
};

const FOOTER_LINKS = {
  READ: ['Explore Stories', 'Novel Rankings', 'Trending Genres', 'New Releases'],
  WRITE: ['Start Writing', 'Writing Guide', 'Competitions', 'My Stories'],
  COMPANY: ['About', 'Contact', 'Privacy Policy', 'Terms of Service'],
};

export default function DashboardFooter() {
  return (
    <footer className="dashboard-footer">
      <div className="dashboard-container footer-grid">

        <div className="footer-brand">
          <div className="footer-logo">
            <span className="footer-logo-badge">📖</span>
            <span className="footer-logo-title">Inkwell</span>
          </div>
          <p>
            Where stories find their voice, and readers find their worlds.
            Write, read, and compete on the world's most immersive storytelling platform.
          </p>
        </div>

        {Object.entries(FOOTER_LINKS).map(([heading, links]) => (
          <div key={heading} className="footer-column">
            <h4>{heading}</h4>
            <ul>
              {links.map((link) => {
                const route = LINK_ROUTES[link];
                return (
                  <li key={link}>
                    {route ? (
                      <Link to={route}>{link}</Link>
                    ) : (
                      <a href="#">{link}</a>
                    )}
                  </li>
                );
              })}
            </ul>
          </div>
        ))}

      </div>

      <div className="dashboard-container footer-bottom">
        <p>© 2026 Inkwell. All rights reserved.</p>
        <p>Crafted for storytellers everywhere.</p>
      </div>
    </footer>
  );
}