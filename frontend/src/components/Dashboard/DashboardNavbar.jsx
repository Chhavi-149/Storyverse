import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Search,
  Bell,
  Bookmark,
  PenLine,
  ChevronDown,
  Menu,
} from "lucide-react";

const NAV_LINKS = [
  { label: "Home", to: "/dashboard" },
  { label: "Explore", to: "/explore" },
  { label: "Rankings", to: "/rankings" },
  { label: "Competitions", to: "/competitions" },
];

export default function DashboardNavbar({ onOpenSidebar }) {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  // Dummy user (replace later with Firebase)
  const user = {
    name: "Miriam",
    avatar: "/assets/default-avatar.png",
  };

  return (
    <header className="sticky top-0 z-40 border-b border-[#2a2724] bg-[#0a0a0a]/95 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">

        {/* Left */}
        <div className="flex items-center gap-3">
          <button
            onClick={onOpenSidebar}
            className="text-[#c8c3ba] md:hidden"
          >
            <Menu size={22} />
          </button>

          <Link
            to="/dashboard"
            className="flex items-center gap-2"
          >
            <span className="flex h-8 w-8 items-center justify-center rounded-md bg-[#c9a15c] text-[#0a0a0a]">
              📖
            </span>

            <span className="font-serif text-lg font-semibold text-[#f5f0e8]">
              Inkwell
            </span>
          </Link>
        </div>

        {/* Center */}
        <nav className="hidden items-center gap-1 md:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.label}
              to={link.to}
              className="rounded-md px-4 py-2 text-sm font-medium text-[#c8c3ba] hover:text-[#f5f0e8]"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Right */}
        <div className="flex items-center gap-4">

          <button className="text-[#c8c3ba] hover:text-[#f5f0e8]">
            <Search size={19} />
          </button>

          <button className="relative text-[#c8c3ba] hover:text-[#f5f0e8]">
            <Bell size={19} />
            <span className="absolute -right-0.5 -top-0.5 h-2 w-2 rounded-full bg-[#c9a15c]" />
          </button>

          <button className="text-[#c8c3ba] hover:text-[#f5f0e8]">
            <Bookmark size={19} />
          </button>

          <button
            onClick={() => navigate("/write")}
            className="flex items-center gap-2 rounded-md bg-[#c9a15c] px-4 py-2 text-sm font-semibold text-[#0a0a0a] hover:bg-[#d4af6a]"
          >
            <PenLine size={16} />
            Write
          </button>

          {/* Profile Dropdown */}
          <div className="relative">

            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="flex items-center gap-1"
            >
              <img
                src={user.avatar}
                alt={user.name}
                className="h-9 w-9 rounded-full object-cover"
              />

              <ChevronDown
                size={16}
                className="text-[#c8c3ba]"
              />
            </button>

            {menuOpen && (
              <div className="absolute right-0 mt-2 w-44 rounded-md border border-[#2a2724] bg-[#161513] py-1 shadow-lg">

                <Link
                  to="/profile"
                  className="block px-4 py-2 text-sm text-[#c8c3ba] hover:text-[#f5f0e8]"
                >
                  My Profile
                </Link>

                <Link
                  to="/settings"
                  className="block px-4 py-2 text-sm text-[#c8c3ba] hover:text-[#f5f0e8]"
                >
                  Settings
                </Link>

                <button
                  onClick={() => navigate("/login")}
                  className="block w-full px-4 py-2 text-left text-sm text-[#c8c3ba] hover:text-[#f5f0e8]"
                >
                  Log Out
                </button>

              </div>
            )}

          </div>

        </div>
      </div>
    </header>
  );
}