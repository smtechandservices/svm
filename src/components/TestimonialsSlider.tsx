'use client';
import { useEffect, useState } from 'react';

const slides = [
  {
    quote: '"SVM Projects and Consulting completely overhauled our regional datacenters. Their migration strategy resulted in zero seconds of system downtime, allowing our logistics platform to execute without hitches. Simply outstanding support!"',
    author: 'Mr. Deepak',
    role: 'CEO, India Logistics Corp',
  },
  {
    quote: '"The network optimization and SD-WAN rollouts we ordered from their team cut our database communication latencies by 45%. Their consultants are easy to approach and very technical."',
    author: 'Mattie Warner',
    role: 'Founder & CEO, TechMatrix',
  },
  {
    quote: '"Our office relocation was extremely stressful until SVM took over. They handled cabling, switches, security cameras, and cloud synchronization in record time. We highly recommend their AMC contracts."',
    author: 'Ramesh Kumar',
    role: 'Managing Director, Capital Finserve',
  },
];

export default function TestimonialsSlider() {
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setIdx(i => (i + 1) % slides.length), 8000);
    return () => clearInterval(t);
  }, []);

  const prev = () => setIdx(i => (i - 1 + slides.length) % slides.length);
  const next = () => setIdx(i => (i + 1) % slides.length);

  return (
    <div className="max-w-[800px] mx-auto">
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${idx * 100}%)` }}
        >
          {slides.map((s, i) => (
            <div key={i} className="testimonial-slide flex-shrink-0 w-full">
              {/* Avatar */}
              <div
                className="w-14 h-14 rounded-full flex items-center justify-center text-[22px] font-extrabold font-heading text-[#080B11] mx-auto mb-4 border-2"
                style={{
                  background: 'linear-gradient(135deg,#0ea5e9,#10b981)',
                  borderColor: 'rgba(14,165,233,0.3)',
                }}
              >
                {s.author[0]}
              </div>
              <div className="glow-divider" />
              <p className="text-[20px] italic text-slate-800 leading-relaxed mb-8">{s.quote}</p>
              <div className="font-heading font-bold text-[18px] text-accent1">{s.author}</div>
              <div className="text-[14px] text-slate-400 uppercase tracking-[1px] mt-1">{s.role}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Controls */}
      <div className="flex justify-center gap-3 mt-10">
        <button
          onClick={prev}
          className="w-11 h-11 rounded-full bg-white/80 border border-black/[0.08] flex items-center justify-center text-slate-900 hover:border-accent1 hover:text-accent1 transition-all duration-300"
          aria-label="Previous"
        >
          <i className="ri-arrow-left-s-line text-xl" />
        </button>
        <button
          onClick={next}
          className="w-11 h-11 rounded-full bg-white/80 border border-black/[0.08] flex items-center justify-center text-slate-900 hover:border-accent1 hover:text-accent1 transition-all duration-300"
          aria-label="Next"
        >
          <i className="ri-arrow-right-s-line text-xl" />
        </button>
      </div>
    </div>
  );
}
