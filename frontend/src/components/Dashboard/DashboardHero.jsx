import { Search } from "lucide-react";

export default function DashboardHero() {
  const hour = new Date().getHours();

  const greeting =
    hour < 12
      ? "Good morning"
      : hour < 18
      ? "Good afternoon"
      : "Good evening";

  // Temporary user until Firebase Auth is added
  const user = {
    name: "Chhavi",
  };

  return (
    <div className="flex flex-col gap-6 py-8 md:flex-row md:items-end md:justify-between">
      <div>
        <p className="text-sm text-[#9a9488]">{greeting},</p>

        <h1 className="font-serif text-4xl font-bold text-[#f5f0e8]">
          Welcome back, {user.name}.
        </h1>
      </div>

      <div className="relative w-full max-w-md">
        <Search
          size={18}
          className="absolute left-4 top-1/2 -translate-y-1/2 text-[#8e877d]"
        />

        <input
          type="text"
          placeholder="Search stories, writers, genres..."
          className="w-full rounded-lg border border-[#2a2724] bg-[#161513] py-3 pl-11 pr-4 text-[#f5f0e8] placeholder:text-[#8e877d] focus:border-[#D4A43C] focus:outline-none"
        />
      </div>
    </div>
  );
}