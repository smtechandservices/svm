export default function ClientsMarquee() {
  const clients = [
    'Elan', 'JK Paper Ltd.', 'Focus', 'Shree Jagannatha Temple',
    'Orient Tours', 'Satguru', 'Pentacare', 'Twiga Stationers',
    '1001 Events', 'Chor Bizarre', 'Golden Tulip', 'MNSYC'
  ];

  return (
    <div className="py-10 bg-white border-y border-[rgba(8,60,98,0.06)] overflow-hidden">
      <div className="container mb-6 text-center">
        <span className="text-[12px] font-bold uppercase tracking-[2px] text-slate-muted">Trusted by leading enterprises</span>
      </div>
      <div className="flex marquee-track">
        {[...clients, ...clients, ...clients].map((c, i) => (
          <div key={i} className="px-8 md:px-16 flex items-center justify-center opacity-60 hover:opacity-100 transition-opacity grayscale hover:grayscale-0">
            <span className="text-[22px] font-extrabold font-heading text-navy">{c}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
