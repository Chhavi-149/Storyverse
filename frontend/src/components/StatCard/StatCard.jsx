function StatCard({ number, label }) {
  return (
    <div className="bg-[#1B1612] rounded-2xl p-8 text-center border border-yellow-500/20 hover:border-yellow-500 transition duration-300">

      <h2 className="text-4xl font-bold text-yellow-500">
        {number}
      </h2>

      <p className="mt-3 text-gray-400">
        {label}
      </p>

    </div>
  );
}

export default StatCard;