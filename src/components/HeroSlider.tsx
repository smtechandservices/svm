'use client';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';

const slides = [
  {
    tagline: 'IT Infrastructure Leaders',
    title: 'Empowering Businesses With',
    highlight: 'Innovative IT Solutions',
    desc: 'From network architecture to cloud migration and SAP services — SVM delivers end-to-end technology solutions that drive growth, efficiency, and reliability for modern enterprises.',
    cta1: { label: "Let's Talk", href: '/contact' },
    cta2: { label: 'Explore Services', href: '/services' },
    stats: [
      { number: '12+', label: 'Years of Expertise' },
      { number: '1800+', label: 'Happy Clients' },
      { number: '950+', label: 'Projects Delivered' },
    ],
  },
  {
    tagline: 'Advanced Communication',
    title: 'Secure & Scalable',
    highlight: 'Email & Cloud Solutions',
    desc: 'We empower your enterprise with secure, scalable email platforms, hybrid cloud infrastructure, and seamless migration services that keep your business always connected.',
    cta1: { label: 'Get Started', href: '/contact' },
    cta2: { label: 'Email Services', href: '/services' },
    stats: [
      { number: '99%', label: 'Client Satisfaction' },
      { number: '24/7', label: 'Support Coverage' },
      { number: '100%', label: 'Secure Systems' },
    ],
  },
  {
    tagline: 'IT/OT Convergence Experts',
    title: 'Bridging IT Systems With',
    highlight: 'Operational Technology',
    desc: 'Seamlessly integrate information technology with operational systems to automate assembly lines, gain real-time analytics, and secure high-risk industrial infrastructure pathways.',
    cta1: { label: "Connect With Us", href: '/contact' },
    cta2: { label: 'Our Solutions', href: '/solutions' },
    stats: [
      { number: 'ISO', label: 'Certified Provider' },
      { number: '50+', label: 'Enterprise Clients' },
      { number: '6', label: 'Cities Covered' },
    ],
  },
];

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const rafRef = useRef<number>(0);

  useEffect(() => {
    const t = setInterval(() => setCurrent(c => (c + 1) % slides.length), 6500);
    return () => clearInterval(t);
  }, []);

  // Subtle particle canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const hero = canvas.parentElement;
    if (!hero) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let W = 0, H = 0;
    const COUNT = 30;

    interface P { x: number; y: number; r: number; vx: number; vy: number; alpha: number }
    let pts: P[] = [];

    const resize = () => {
      W = canvas.width = hero.offsetWidth;
      H = canvas.height = hero.offsetHeight;
    };

    const make = (): P => ({
      x: Math.random() * W, y: Math.random() * H,
      r: Math.random() * 3 + 1,
      vx: (Math.random() - 0.5) * 0.3,
      vy: (Math.random() - 0.5) * 0.3,
      alpha: Math.random() * 0.15 + 0.05,
    });

    const tick = () => {
      ctx.clearRect(0, 0, W, H);
      pts.forEach((p, i) => {
        p.x += p.vx; p.y += p.vy;
        if (p.x < 0 || p.x > W) p.vx *= -1;
        if (p.y < 0 || p.y > H) p.vy *= -1;
        ctx.save(); ctx.globalAlpha = p.alpha;
        ctx.fillStyle = '#083C62';
        ctx.beginPath(); ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2); ctx.fill();
        ctx.restore();
        for (let j = i + 1; j < pts.length; j++) {
          const q = pts[j];
          const d = Math.hypot(p.x - q.x, p.y - q.y);
          if (d < 150) {
            ctx.save();
            ctx.globalAlpha = (1 - d / 150) * 0.08;
            ctx.strokeStyle = '#083C62'; ctx.lineWidth = 1;
            ctx.beginPath(); ctx.moveTo(p.x, p.y); ctx.lineTo(q.x, q.y); ctx.stroke();
            ctx.restore();
          }
        }
      });
      rafRef.current = requestAnimationFrame(tick);
    };

    resize();
    pts = Array.from({ length: COUNT }, make);
    tick();
    window.addEventListener('resize', resize, { passive: true });
    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener('resize', resize);
    };
  }, []);

  const slide = slides[current];

  return (
    <section
      className="relative min-h-screen pt-[160px] md:pt-[180px] pb-20 overflow-hidden"
      style={{ background: '#F5F4EF' }}
    >
      <canvas ref={canvasRef} id="particles-canvas" />

      {/* Blob decorations — mesh.ai style */}
      <div className="blob blob-powder" style={{ width: 600, height: 600, top: '-100px', right: '-150px', opacity: 0.6 }} />
      <div className="blob blob-pink" style={{ width: 300, height: 300, bottom: '80px', left: '5%', opacity: 0.45, animationDelay: '3s' }} />
      <div className="blob blob-green" style={{ width: 200, height: 200, bottom: '200px', right: '15%', opacity: 0.35, animationDelay: '6s' }} />

      <div className="container relative z-10">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Text */}
          <div className="relative w-full min-h-[420px]">
            {slides.map((s, i) => (
              <div key={i} className={`hero-slide${i === current ? ' active' : ''}`}>
                <div className="max-w-[580px]">
                  {/* Tag */}
                  <div className="inline-flex items-center gap-2 mb-6">
                    <span className="w-8 h-[2px] rounded bg-navy" />
                    <span className="text-[13px] font-bold uppercase tracking-[2px] text-navy">{s.tagline}</span>
                  </div>

                  {/* Heading */}
                  <h1 className="font-heading text-[48px] max-md:text-[34px] font-extrabold leading-[1.1] mb-6 tracking-tight" style={{ color: '#1A2B4A' }}>
                    {s.title}{' '}
                    <span className="gradient-text">{s.highlight}</span>
                  </h1>

                  <p className="text-[17px] mb-10 leading-relaxed" style={{ color: '#5A6474' }}>{s.desc}</p>

                  {/* CTAs — mesh.ai style */}
                  <div className="flex gap-4 flex-wrap mb-12">
                    <Link href={s.cta1.href} className="btn-primary">
                      <span className="btn-icon"><i className="ri-arrow-right-line" /></span>
                      {s.cta1.label}
                    </Link>
                    <Link href={s.cta2.href} className="btn-secondary">{s.cta2.label}</Link>
                  </div>

                  {/* Mini stats */}
                  <div className="flex gap-8 flex-wrap">
                    {s.stats.map(st => (
                      <div key={st.label}>
                        <div className="text-[26px] font-extrabold font-heading" style={{ color: '#083C62' }}>{st.number}</div>
                        <div className="text-[12px] uppercase tracking-[1px]" style={{ color: '#8A94A6' }}>{st.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Visual card panel — mesh.ai product mockup style */}
          <div className="hidden md:flex flex-col gap-4 animate-float">
            {/* Main card */}
            <div className="card-navy rounded-4xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center">
                  <i className="ri-server-line text-white text-xl" />
                </div>
                <div>
                  <div className="text-white font-bold font-heading text-[15px]">Infrastructure Status</div>
                  <div className="text-white/60 text-[12px]">All systems operational</div>
                </div>
                <div className="ml-auto flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                  <span className="text-white/80 text-[12px]">Live</span>
                </div>
              </div>

              <div className="space-y-3">
                {[
                  { label: 'Network Uptime', val: '99.97%', w: '99.97' },
                  { label: 'Storage Health', val: '100%', w: '100' },
                  { label: 'Security Score', val: '98.4%', w: '98.4' },
                ].map(m => (
                  <div key={m.label}>
                    <div className="flex justify-between text-[13px] text-white/80 mb-1.5">
                      <span>{m.label}</span><span className="font-semibold text-white">{m.val}</span>
                    </div>
                    <div className="h-1.5 bg-white/20 rounded-full overflow-hidden">
                      <div className="h-full bg-white rounded-full" style={{ width: `${m.w}%` }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Two small cards */}
            <div className="grid grid-cols-2 gap-4">
              <div className="card p-6">
                <i className="ri-shield-check-fill text-navy text-2xl mb-3 block" />
                <div className="text-[22px] font-extrabold font-heading text-slate-heading">100%</div>
                <div className="text-[13px] text-slate-body mt-1">Data Secured</div>
              </div>
              <div className="card p-6">
                <i className="ri-customer-service-2-line text-navy text-2xl mb-3 block" />
                <div className="text-[22px] font-extrabold font-heading text-slate-heading">24 / 7</div>
                <div className="text-[13px] text-slate-body mt-1">Expert Support</div>
              </div>
            </div>
          </div>
        </div>

        {/* Slide dots */}
        <div className="flex justify-center gap-2.5 mt-12">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className="transition-all duration-300 rounded-full"
              style={{
                width: i === current ? 28 : 8,
                height: 8,
                background: i === current ? '#083C62' : 'rgba(8,60,98,0.2)',
              }}
              aria-label={`Slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
