import CountUp from 'react-countup';

const stats = [
  { label: 'Lanzamientos', value: 285 },
  { label: 'Cohetes activos', value: 3 },
  { label: 'Cápsulas', value: 9 },
  { label: 'Misiones tripuladas', value: 11 },
];

export default function StatsCounter() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-center text-white mt-12">
      {stats.map((stat, index) => (
        <div key={index} className="bg-black bg-opacity-40 rounded-xl py-6 shadow-md hover:scale-105 transition-transform">
          <h3 className="text-4xl font-bold text-cyan-400">
            <CountUp end={stat.value} duration={6} />
          </h3>
          <p className="text-lg mt-2">{stat.label}</p>
        </div>
      ))}
    </div>
  );
}
