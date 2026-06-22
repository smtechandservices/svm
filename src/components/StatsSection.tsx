const stats = [
  { number: '12+', label: 'Years of Operation' },
  { number: '950+', label: 'Projects Completed' },
  { number: '99%', label: 'Client Satisfaction' },
  { number: '1800+', label: 'Connected Clients' },
];

export default function StatsSection() {
  return (
    <section className="bg-white border-y border-black/[0.06] py-20">
      <div className="container grid grid-cols-2 md:grid-cols-4 gap-5">
        {stats.map(s => (
          <div key={s.label} className="text-center">
            <div className="stat-number">{s.number}</div>
            <div className="text-[14px] uppercase tracking-[1px] text-slate-500">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
