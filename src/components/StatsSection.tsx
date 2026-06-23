export default function StatsSection() {
  const stats = [
    { icon: 'ri-calendar-check-line', number: '12+',   label: 'Years of Expertise',    suffix: '' },
    { icon: 'ri-briefcase-4-line',    number: '950+',  label: 'Projects Delivered',     suffix: '' },
    { icon: 'ri-emotion-happy-line',  number: '99',    label: 'Client Satisfaction',    suffix: '%' },
    { icon: 'ri-shield-check-line',   number: '100',   label: 'Percent Secure Systems', suffix: '%' },
    { icon: 'ri-group-line',          number: '1800+', label: 'Happy Clients',          suffix: '' },
  ];

  return (
    <section className="py-20 relative overflow-hidden" style={{ background: '#083C62' }}>
      {/* Subtle blob decorations */}
      <div className="blob blob-blue" style={{ width: 400, height: 400, top: '-100px', right: '-100px', opacity: 0.08 }} />
      <div className="blob blob-green" style={{ width: 300, height: 300, bottom: '-80px', left: '-60px', opacity: 0.06, animationDelay: '5s' }} />

      <div className="container relative z-10">
        <div className="text-center mb-12">
          <span className="inline-flex items-center gap-2 text-[12px] font-bold uppercase tracking-[2.5px] text-white/60 mb-3">
            <span className="w-5 h-[2px] bg-white/60 rounded-full" /> By The Numbers
          </span>
          <h2 className="text-[32px] md:text-[38px] font-extrabold font-heading text-white">
            Our Track Record Speaks For Itself
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {stats.map((s) => (
            <div key={s.label} className="text-center p-6 rounded-3xl border border-white/10 hover:border-white/25 hover:bg-white/5 transition-all duration-300">
              <i className={`${s.icon} text-[30px] text-white/60 mb-4 block`} />
              <div
                className="stat-number mb-1"
                data-target={s.number.replace(/\D/g, '')}
                data-suffix={s.suffix + (s.number.includes('+') ? '+' : '')}
                style={{ color: '#FFFFFF' }}
              >
                {s.number}{s.suffix}
              </div>
              <div className="text-[13px] uppercase tracking-[1px]" style={{ color: 'rgba(255,255,255,0.55)' }}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
