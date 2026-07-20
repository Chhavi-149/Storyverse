const OPPORTUNITIES = [
  { title: 'Midnight Manuscript', date: 'Aug 15', prize: '$2,500' },
  { title: 'Futures Unwritten', date: 'Sep 1', prize: '$1,800' },
];

export default function Opportunities() {
  return (
    <section className="rounded-lg border border-[#2a2724] bg-[#0f0e0c] p-6">
      <p className="mb-4 text-xs font-semibold tracking-wider text-[#c9a15c]">OPPORTUNITIES</p>
      <div className="space-y-4">
        {OPPORTUNITIES.map((o) => (
          <div key={o.title} className="flex items-center justify-between">
            <div>
              <h4 className="font-serif font-semibold text-[#f5f0e8]">{o.title}</h4>
              <p className="text-xs text-[#9a9488]">{o.date}</p>
            </div>
            <span className="rounded border border-[#3a352c] px-2 py-1 text-xs text-[#c9a15c]">{o.prize}</span>
          </div>
        ))}
      </div>
      <a href="#" className="mt-4 inline-block text-sm text-[#c9a15c] hover:underline">View all competitions ›</a>
    </section>
  );
}