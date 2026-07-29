import "./Footer.css";
import { BookOpen } from "lucide-react";
import { Link } from "react-router-dom";

import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-about">

          <div className="footer-logo">
            <BookOpen size={28} />
            <h2>Inkwell</h2>
          </div>

          <p>
            A home for readers, writers and dreamers.
            Create stories, discover amazing authors,
            and build worlds together.
          </p>

          <div className="socials">
            <FaFacebookF />
            <FaInstagram />
            <FaTwitter />
            <FaLinkedinIn />
          </div>

        </div>

        <div className="footer-links">

          <h3>Quick Links</h3>

          <Link to="/explore">Explore</Link>
          <Link to="/competitions">Competitions</Link>
          <Link to="/rankings">Rankings</Link>
          {/* TODO: no /community route yet */}
          <a href="#">Community</a>

        </div>

        <div className="footer-links">

          <h3>Resources</h3>

          {/* TODO: create these pages + routes, then swap to <Link to="..."> */}
          <a href="#">Help Center</a>
          <a href="#">Terms</a>
          <a href="#">Privacy</a>
          <a href="#">Contact</a>

        </div>

      </div>

      <div className="footer-bottom">
        © 2026 Inkwell. All Rights Reserved.
      </div>
    </footer>
  );
}

export default Footer;