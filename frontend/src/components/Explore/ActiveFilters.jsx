function ActiveFilters() {
  return (
    <div className="flex flex-wrap items-center gap-3 mb-6">

      <span className="text-slate-400 text-sm">
        Filtered By:
      </span>

      <span className="px-3 py-1 rounded-full bg-amber-500/10 border border-amber-400 text-amber-400 text-sm">
        Fantasy
      </span>

      <span className="px-3 py-1 rounded-full bg-amber-500/10 border border-amber-400 text-amber-400 text-sm">
        Adventure
      </span>

    </div>
  );
}

export default ActiveFilters;