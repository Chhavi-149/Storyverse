import { PenTool, FileText, Sparkles, BookOpen } from "lucide-react";
import { Link } from "react-router-dom";

const ACTIONS = [
  {
    title: "Write New Draft",
    description: "Start a fresh chapter or scene outline",
    icon: PenTool,
    to: "/write",
  },
  {
    title: "Create Outline",
    description: "Structure plot arcs and character beats",
    icon: FileText,
    to: "/outlines/new",
  },
  {
    title: "AI Assistant",
    description: "Brainstorm ideas or fix writer's block",
    icon: Sparkles,
    to: "/ai-tools",
  },
  {
    title: "Browse Library",
    description: "Explore community books and inspiration",
    icon: BookOpen,
    to: "/explore",
  },
];

export default function QuickActions() {
  return (
    <div className="w-full">
      {/* Section Header */}
      <div className="mb-4 flex items-center justify-between">
        <h2 className="font-serif text-lg font-bold text-[#f5f0e8]">
          Quick Actions
        </h2>
      </div>

      {/* Grid Layout (2x2 on small/medium, 4x1 on full row if placed alone) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {ACTIONS.map((action) => {
          const Icon = action.icon;
          return (
            <Link
              key={action.title}
              to={action.to}
              className="group flex flex-col justify-between rounded-xl border border-[#2a2724] bg-[#12110e]/60 p-4 transition-all duration-200 hover:-translate-y-0.5 hover:border-[#c9a15c]/60 hover:bg-[#181613]"
            >
              <div>
                <div className="mb-3 inline-flex h-9 w-9 items-center justify-center rounded-lg bg-[#1c1a16] text-[#c9a15c] border border-[#2a2724] group-hover:border-[#c9a15c]/40 group-hover:bg-[#c9a15c] group-hover:text-[#0a0a0a] transition-all">
                  <Icon size={18} />
                </div>
                <h3 className="font-serif text-sm font-semibold text-[#f5f0e8] group-hover:text-[#c9a15c] transition-colors">
                  {action.title}
                </h3>
                <p className="mt-1 text-xs text-[#8e877d] line-clamp-2">
                  {action.description}
                </p>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}