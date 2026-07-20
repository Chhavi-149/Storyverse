import { Link } from 'react-router-dom';
import { X } from 'lucide-react';

const LINKS = [
  { label: 'Home', to: '/dashboard' },
  { label: 'Explore', to: '/explore' },
  { label: 'Rankings', to: '/rankings' },
  { label: 'Competitions', to: '/competitions' },
];

export default function DashboardSidebar({ open, onClose }) {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 md:hidden">
      <div className="absolute inset-0 bg-black/60" onClick={onClose} />
      <div className="absolute left-0 top-0 h-full w-64 border-r border-[#2a2724] bg-[#0f0e0c] p-6">
        <button onClick={onClose} className="mb-6 text-[#c8c3ba]"><X size={22} /></button>
        <nav className="flex flex-col gap-4">
          {LINKS.map((l) => (
            <Link key={l.label} to={l.to} onClick={onClose} className="font-medium text-[#f5f0e8]">
              {l.label}
            </Link>
          ))}
        </nav>
      </div>
    </div>
  );
}