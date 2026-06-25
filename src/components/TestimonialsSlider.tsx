'use client';
import { useState, useEffect } from 'react';

const testimonials = [
  {
    text: "“Our financial strategy focuses on transparency, integrity, and long-term value creation. We aim to maintain resilience, improve efficiency, and invest smartly to stay future-ready and ensure sustainable success in an ever-changing business environment.”",
    author: 'Vinod Sharma',
    role: 'VP of Sales',
    rating: 5,
  },
  {
    text: "“We believe in open and consistent communication across all levels. This reduces misunderstandings, enhances decision-making, and ensures alignment within teams, helping us maintain a collaborative culture that drives success throughout the entire organization.”",
    author: 'Satya Narayan Sharma',
    role: 'Director',
    rating: 5,
  },
  {
    text: "“Our core values and behaviours guide everything we do. By aligning them with our strategic goals, we remain committed to excellence, empower strong performance, and consistently deliver results that exceed the expectations of our stakeholders and partners.”",
    author: 'Vinod Sharma',
    role: 'VP of Sales',
    rating: 5,
  },
];

export default function TestimonialsSlider() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setCurrent(c => (c + 1) % testimonials.length), 8000);
    return () => clearInterval(t);
  }, []);

  return (
    <div className="relative max-w-[800px] mx-auto reveal">
      {/* Abstract quotation mark decoration */}
      <div className="absolute -top-10 -left-6 text-[120px] leading-none font-serif text-navy/5 z-0 select-none pointer-events-none">
        &ldquo;
      </div>

      <div className="overflow-hidden relative z-10">
        <div
          className="testimonials-track"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {testimonials.map((t, i) => (
            <div key={i} className="testimonial-slide">
              <div className="card p-10 md:p-14">
                {/* Rating */}
                <div className="flex justify-center gap-1.5 mb-8">
                  {[...Array(t.rating)].map((_, idx) => (
                    <i key={idx} className="ri-star-fill text-amber-400 text-[20px]" />
                  ))}
                </div>
                
                {/* Quote */}
                <p className="text-[18px] md:text-[22px] text-slate-heading font-heading leading-relaxed mb-10">
                  {t.text}
                </p>
                
                {/* Author */}
                <div className="flex items-center justify-center gap-4">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center text-[18px] font-bold text-white font-heading" style={{ background: '#083C62' }}>
                    {t.author.charAt(0)}
                  </div>
                  <div className="text-left">
                    <div className="font-bold text-slate-heading font-heading text-[16px]">{t.author}</div>
                    <div className="text-slate-body text-[13px]">{t.role}</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Custom navigation dots */}
      <div className="flex justify-center gap-3 mt-8">
        {testimonials.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className="w-3 h-3 rounded-full transition-all duration-300"
            style={{ background: i === current ? '#083C62' : 'rgba(8,60,98,0.2)' }}
            aria-label={`Testimonial ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
