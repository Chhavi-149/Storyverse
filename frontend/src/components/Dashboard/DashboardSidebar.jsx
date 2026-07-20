import { Link, useLocation } from 'react-router-dom';
import { X } from 'lucide-react';
import './DashboardSidebar.css';

const LINKS = [
  { label: 'Home', to: '/dashboard' },
  { label: 'Explore', to: '/explore' },
  { label: 'Rankings', to: '/rankings' },
  { label: 'Competitions', to: '/competitions' },
];

export default function DashboardSidebar({ open, onClose }) {
  const location = useLocation();

  if (!open) return null;

  return (
    <div className="sidebar-overlay-wrapper">
      {/* Dimmed Backdrop */}
      <div className="sidebar-backdrop" onClick={onClose} />

      {/* Slide-out Drawer */}
      <div className="sidebar-drawer">
        <div className="sidebar-header">
          <div className="sidebar-brand">
            <span className="text-[#c9a15c]">📖</span> Inkwell
          </div>
          <button 
            onClick={onClose} 
            className="sidebar-close-btn"
            aria-label="Close menu"
          >
            <X size={20} />
          </button>
        </div>

        {/* Links */}
        <nav className="sidebar-nav">
          {LINKS.map((link) => {
            const isActive = location.pathname === link.to;
            return (
              <Link
                key={link.label}
                to={link.to}
                onClick={onClose}
                className={`sidebar-link ${isActive ? 'active' : ''}`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </div>
  );
}