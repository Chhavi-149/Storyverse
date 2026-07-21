import { BookOpen, PenLine, Users, Crown } from "lucide-react";
import StatCard from "../StatCard/StatCard";
import "./Statistics.css";

const STATS = [
  { icon: BookOpen, value: "1.2M+", label: "Stories" },
  { icon: PenLine, value: "84K+", label: "Writers" },
  { icon: Users, value: "9.4M+", label: "Readers" },
  { icon: Crown, value: "340+", label: "Competitions" },
];

export default function Statistics() {
  return (
    <section className="statistics-section">
      <div className="statistics-container">
        {STATS.map((stat) => (
          <StatCard key={stat.label} icon={stat.icon} value={stat.value} label={stat.label} />
        ))}
      </div>
    </section>
  );
}