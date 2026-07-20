const RANKINGS = [
  { rank: 1, title: "The Cartographer's Daughter", author: 'Miriam Osei', views: '142k' },
  { rank: 2, title: 'Salt & Starlight', author: 'Callum Vance', views: '99k' },
  { rank: 3, title: 'The Hollow Parliament', author: 'Reza Tahir', views: '76k' },
  { rank: 4, title: 'Echoes of the Forgotten Sea', author: 'Nneka Obi', views: '54k' },
];

export default function NovelRankings() {
  return (
    <section className="rounded-lg border border-[#2a2724] bg-[#0f0e0c] p-6">
      <div className="mb-4 flex items-center justify-between">
        <p className="text-xs font-semibold tracking-wider text-[#c9a15c]">📈 NOVEL RANKINGS</p>
        <a href="#" className="text-xs text-[#c9a15c] hover:underline">All rankings</a>
      </div>
      <div className="space-y-3">
        {RANKINGS.map((r) => (
          <div key={r.rank} className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span className="font-serif text-lg font-bold text-[#c9a15c]">{r.rank}</span>
              <div>
                <h4 className="font-serif text-sm font-semibold text-[#f5f0e8]">{r.title}</h4>
                <p className="text-xs text-[#9a9488]">{r.author}</p>
              </div>
            </div>
            <span className="text-xs text-[#9a9488]">👁 {r.views}</span>
          </div>
        ))}
      </div>
    </section>
  );
}