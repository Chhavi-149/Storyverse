import { BookOpen, Menu } from "lucide-react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <header className="w-full border-b border-[#2B2118] bg-[#0B0907] sticky top-0 z-50">

      <div className="max-w-7xl mx-auto h-20 px-6 flex items-center justify-between">

        {/* Logo */}

        <Link
          to="/"
          className="flex items-center gap-3"
        >

          <div className="w-11 h-11 rounded-lg bg-[#D4A43C] flex items-center justify-center">

            <BookOpen
              size={22}
              className="text-black"
            />

          </div>

          <h1 className="text-3xl font-bold text-[#F5EFE5]">
            Inkwell
          </h1>

        </Link>

        {/* Desktop Navigation */}

        <nav className="hidden lg:flex items-center gap-12 text-[#C8B9A8]">

          <Link
            to="/explore"
            className="hover:text-[#D4A43C] transition"
          >
            Explore
          </Link>

          <Link
            to="/rankings"
            className="hover:text-[#D4A43C] transition"
          >
            Rankings
          </Link>

          <Link
            to="/competitions"
            className="hover:text-[#D4A43C] transition"
          >
            Competitions
          </Link>

          <Link
  to="/about"
  className="hover:text-[#D4A43C] transition"
>
  About
</Link>

        </nav>

        {/* Right Side */}

        <div className="flex items-center gap-4">

          <Link
            to="/login"
            className="hidden md:block border border-[#3A3028] text-[#F5EFE5] px-6 py-3 rounded-lg hover:border-[#D4A43C] transition"
          >
            Log In
          </Link>

          <Link
            to="/editor"
            className="bg-[#D4A43C] hover:bg-[#E5B54A] transition text-black font-semibold px-6 py-3 rounded-lg"
          >
            Start Writing
          </Link>

          <button className="lg:hidden text-white">

            <Menu size={28} />

          </button>

        </div>

      </div>

    </header>
  );
}

export default Navbar;