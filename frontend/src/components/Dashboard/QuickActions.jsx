export default function QuickActions() {
  return (
    <section className="rounded-lg border border-[#3a2f1c] bg-gradient-to-br from-[#1a140a] to-[#0f0e0c] p-6">
      <p className="mb-1 text-xs font-semibold tracking-wider text-[#c9a15c]">WEEKLY CHALLENGE</p>
      <h3 className="mb-2 font-serif text-xl font-bold text-[#f5f0e8]">Write in the Dark</h3>
      <p className="mb-4 text-sm text-[#c8c3ba]">
        Begin your story with the sentence: "The last candle went out at midnight."
      </p>
      <div className="mb-4 flex items-center gap-4 text-xs text-[#9a9488]">
        <span>⏳ 3 days left</span>
        <span>🔥 2,841 entries</span>
      </div>
      <button className="w-full rounded-md bg-[#c9a15c] py-2.5 text-sm font-semibold text-[#0a0a0a] hover:bg-[#d4af6a]">
        Accept Challenge
      </button>
    </section>
  );
}