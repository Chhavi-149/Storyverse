import { useState } from 'react';
import DashboardNavbar from "../../components/Dashboard/DashboardNavbar";
import DashboardSidebar from "../../components/Dashboard/DashboardSidebar";
import DashboardHero from "../../components/Dashboard/DashboardHero";
import GenreFilter from "../../components/Dashboard/GenreFilter";
import ContinueReading from "../../components/Dashboard/ContinueReading";
import QuickActions from "../../components/Dashboard/QuickActions";
import Opportunities from "../../components/Dashboard/Opportunities";
import NovelRankings from "../../components/Dashboard/NovelRankings";
import DraftStories from "../../components/Dashboard/DraftStories";

import "../../components/Dashboard/Dashboard.css";

const TRENDING = [
  { rank: 1, title: "The Cartographer's Daughter", author: 'Miriam Osei', views: '142k', rating: 4.8 },
  { rank: 2, title: 'Salt & Starlight', author: 'Callum Vance', views: '99k', rating: 4.9 },
  { rank: 3, title: 'The Hollow Parliament', author: 'Reza Tahir', views: '76k', rating: 4.6 },
  { rank: 4, title: 'Echoes of the Forgotten Sea', author: 'Nneka Obi', views: '54k', rating: 4.7 },
];

const RECOMMENDED = [
  { title: 'The Hollow Parliament', author: 'Reza Tahir', genre: 'THRILLER', cover: '/assets/covers/hollow-parliament.jpg' },
  { title: 'Echoes of the Forgotten Sea', author: 'Nneka Obi', genre: 'HISTORICAL', cover: '/assets/covers/echoes.jpg' },
  { title: 'Frequency Nine', author: 'Jude Nakamura', genre: 'SCI-FI', cover: '/assets/covers/frequency-nine.jpg' },
  { title: 'The Last Confession', author: 'Sofia Andrade', genre: 'MYSTERY', cover: '/assets/covers/last-confession.jpg' },
];

const TOP_WRITERS = [
  { rank: 1, name: 'Miriam Osei', followers: '48.2k', avatar: '/assets/writers/miriam.jpg' },
  { rank: 2, name: 'Callum Vance', followers: '31.4k', avatar: '/assets/writers/callum.jpg' },
  { rank: 3, name: 'Reza Tahir', followers: '24.6k', avatar: '/assets/writers/reza.jpg' },
];

export default function Dashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-[#f5f0e8]">
      <DashboardNavbar onOpenSidebar={() => setSidebarOpen(true)} />
      <DashboardSidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      <main className="mx-auto max-w-7xl px-6">
        <DashboardHero />
        <GenreFilter />

        <div className="mt-10 grid grid-cols-1 gap-10 lg:grid-cols-3">
          <div className="space-y-12 lg:col-span-2">
            <ContinueReading />

            <section>
              <div className="mb-4 flex items-center justify-between">
                <h2 className="font-serif text-xl font-semibold">🔥 Trending Today</h2>
                <a href="#" className="text-sm text-[#c9a15c] hover:underline">Explore ›</a>
              </div>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                {TRENDING.map((t) => (
                  <div key={t.rank} className="rounded-md border border-[#2a2724] bg-[#0f0e0c] p-4">
                    <span className="font-serif text-2xl font-bold text-[#5b564c]">{t.rank}</span>
                    <h3 className="font-serif font-semibold">{t.title}</h3>
                    <p className="mb-2 text-sm text-[#9a9488]">by {t.author}</p>
                    <div className="flex gap-4 text-xs text-[#9a9488]">
                      <span>👁 {t.views}</span>
                      <span>⭐ {t.rating}</span>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="mb-4 font-serif text-xl font-semibold">⚡ Recommended for You</h2>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                {RECOMMENDED.map((r) => (
                  <div key={r.title} className="flex gap-4 rounded-md border border-[#2a2724] bg-[#0f0e0c] p-4">
                    <img src={r.cover} alt={r.title} className="h-16 w-14 rounded object-cover" />
                    <div>
                      <span className="mb-1 inline-block rounded border border-[#3a352c] px-2 py-0.5 text-xs text-[#c8c3ba]">{r.genre}</span>
                      <h3 className="font-serif font-semibold">{r.title}</h3>
                      <p className="text-sm text-[#9a9488]">{r.author}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <DraftStories />
          </div>

          <div className="space-y-6">
            <QuickActions />
            <Opportunities />

            <section className="rounded-lg border border-[#2a2724] bg-[#0f0e0c] p-6">
              <div className="mb-4 flex items-center justify-between">
                <p className="text-xs font-semibold tracking-wider text-[#c9a15c]">TOP WRITERS</p>
                <a href="#" className="text-xs text-[#c9a15c] hover:underline">See all</a>
              </div>
              <div className="space-y-3">
                {TOP_WRITERS.map((w) => (
                  <div key={w.rank} className="flex items-center gap-3">
                    <span className="text-sm text-[#9a9488]">{w.rank}</span>
                    <img src={w.avatar} alt={w.name} className="h-9 w-9 rounded-full object-cover" />
                    <div className="flex-1">
                      <h4 className="text-sm font-semibold">{w.name}</h4>
                      <p className="text-xs text-[#9a9488]">{w.followers} followers</p>
                    </div>
                    <span>🏆</span>
                  </div>
                ))}
              </div>
            </section>

            <NovelRankings />
          </div>
        </div>
      </main>

      <footer className="mt-16 border-t border-[#2a2724] px-6 py-12">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 md:grid-cols-4">
          <div>
            <div className="mb-3 flex items-center gap-2">
              <span className="flex h-8 w-8 items-center justify-center rounded-md bg-[#c9a15c] text-[#0a0a0a]">📖</span>
              <span className="font-serif text-lg font-semibold">Inkwell</span>
            </div>
            <p className="text-sm text-[#9a9488]">
              Where stories find their voice, and readers find their worlds. Write, read, and compete on the world's most immersive storytelling platform.
            </p>
          </div>
          <div>
            <h4 className="mb-3 text-xs font-semibold tracking-wider text-[#c9a15c]">READ</h4>
            <ul className="space-y-2 text-sm text-[#9a9488]">
              <li>Explore Stories</li><li>Novel Rankings</li><li>Trending Genres</li><li>New Releases</li>
            </ul>
          </div>
          <div>
            <h4 className="mb-3 text-xs font-semibold tracking-wider text-[#c9a15c]">WRITE</h4>
            <ul className="space-y-2 text-sm text-[#9a9488]">
              <li>Start Writing</li><li>Writing Guide</li><li>Competitions</li><li>My Stories</li>
            </ul>
          </div>
          <div>
            <h4 className="mb-3 text-xs font-semibold tracking-wider text-[#c9a15c]">COMPANY</h4>
            <ul className="space-y-2 text-sm text-[#9a9488]">
              <li>About</li><li>Contact</li><li>Privacy Policy</li><li>Terms of Service</li>
            </ul>
          </div>
        </div>
        <p className="mt-10 text-center text-xs text-[#5b564c]">© 2026 Inkwell. All rights reserved.</p>
      </footer>
    </div>
  );
}