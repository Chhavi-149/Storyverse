const DRAFTS = [
  { title: 'Untitled Draft', lastEdited: '2 days ago', words: 4210 },
];

export default function DraftStories() {
  return (
    <section>
      <div className="mb-4 flex items-center justify-between">
        <h2 className="font-serif text-xl font-semibold text-[#f5f0e8]">Your Draft Stories</h2>
        <a href="/write" className="text-sm text-[#c9a15c] hover:underline">New draft +</a>
      </div>
      <div className="divide-y divide-[#2a2724] rounded-md border border-[#2a2724] bg-[#0f0e0c]">
        {DRAFTS.map((d) => (
          <div key={d.title} className="flex items-center justify-between p-4">
            <div>
              <h3 className="font-serif font-semibold text-[#f5f0e8]">{d.title}</h3>
              <p className="text-xs text-[#9a9488]">Last edited {d.lastEdited} · {d.words} words</p>
            </div>
            <button className="text-sm text-[#c9a15c] hover:underline">Continue writing</button>
          </div>
        ))}
      </div>
    </section>
  );
}