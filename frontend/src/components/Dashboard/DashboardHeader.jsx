import { Search } from "lucide-react";

function DashboardHeader() {
  return (
    <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10">
      
      <div>
        <p className="text-ink-dim text-sm mb-1">
          Good evening,
        </p>

        <h1 className="font-serif text-3xl font-bold text-ink">
          Welcome back, Devangee.
        </h1>
      </div>

      <div className="relative max-w-sm w-full">
        <Search
          size={16}
          className="absolute left-3 top-1/2 -translate-y-1/2"
          style={{ color: "#5c4e3c" }}
        />

        <input
          type="text"
          placeholder="Search stories, writers, genres..."
          className="input-story"
          style={{ paddingLeft: "38px" }}
        />
      </div>

    </div>
  );
}

export default DashboardHeader;