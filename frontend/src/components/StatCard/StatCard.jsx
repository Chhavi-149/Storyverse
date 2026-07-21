import "./StatCard.css";

export default function StatCard({ icon: Icon, value, label }) {
  return (
    <div className="stat-card">
      <div className="stat-card-value">
        <Icon size={22} className="stat-card-icon" />
        {value}
      </div>
      <p className="stat-card-label">{label}</p>
    </div>
  );
}