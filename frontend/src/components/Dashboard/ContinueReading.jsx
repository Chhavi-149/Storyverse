const READING_LIST = [
  { title: "The Cartographer's Daughter", chapter: 23, totalChapters: 34, genre: 'FANTASY', progress: 68, cover: '/assets/covers/cartographer.jpg' },
  { title: 'Frequency Nine', chapter: 14, totalChapters: 41, genre: 'SCI-FI', progress: 35, cover: '/assets/covers/frequency-nine.jpg' },
  { title: 'Salt & Starlight', chapter: 20, totalChapters: 22, genre: 'ROMANCE', progress: 91, cover: '/assets/covers/salt-starlight.jpg' },
];

export default function ContinueReading() {
  return (
    <section>
      <div className="mb-4 flex items-center justify-between">
        <h2 className="font-serif text-xl font-semibold text-[#f5f0e8]">🕐 Continue Reading</h2>
        <a href="#" className="text-sm text-[#c9a15c] hover:underline">View all ›</a>
      </div>
      <div className="divide-y divide-[#2a2724] rounded-md border border-[#2a2724] bg-[#0f0e0c]">
        {READING_LIST.map((book) => (
          <div key={book.title} className="flex gap-4 p-4">
            <img src={book.cover} alt={book.title} className="h-16 w-12 rounded object-cover" />
            <div className="flex-1">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="font-serif font-semibold text-[#f5f0e8]">{book.title}</h3>
                  <p className="text-sm text-[#9a9488]">Chapter {book.chapter} of {book.totalChapters}</p>
                </div>
                <span className="rounded border border-[#3a352c] px-2 py-0.5 text-xs text-[#c8c3ba]">{book.genre}</span>
              </div>
              <div className="mt-3 h-1.5 w-full rounded-full bg-[#2a2724]">
                <div className="h-1.5 rounded-full bg-[#c9a15c]" style={{ width: `${book.progress}%` }} />
              </div>
              <p className="mt-1 text-xs text-[#9a9488]">{book.progress}% complete</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}