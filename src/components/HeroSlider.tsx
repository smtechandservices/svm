'use client';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';

const slides = [
  {
    tagline: 'Welcome to Future of IT',
    title: 'Empowering Businesses With',
    highlight: 'Innovative Solutions',
    desc: 'We empower you with digital transformation through innovative technological solutions that drive growth, efficiency, and reliability.',
    cta1: { label: "Let's Talk", href: '/contact' },
    cta2: { label: 'Explore Services', href: '/services' },
  },
  {
    tagline: 'Advanced Communication',
    title: 'Secure & Smart',
    highlight: 'Emailing Solutions',
    desc: 'We empower your enterprise with secure, scalable, and highly available digital messaging and collaboration platforms.',
    cta1: { label: 'Get Started', href: '/contact' },
    cta2: { label: 'Email Services', href: '/services' },
  },
  {
    tagline: 'IT/OT Convergence',
    title: 'Operational Technology',
    highlight: 'ITOT Integration',
    desc: 'Seamlessly bridge the gap between information technology systems and operational technology systems to automate and scale operations.',
    cta1: { label: "Let's Connect", href: '/contact' },
    cta2: { label: 'Our Solutions', href: '/solutions' },
  },
];

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const rafRef = useRef<number>(0);

  // Slider auto-advance
  useEffect(() => {
    const t = setInterval(() => setCurrent(c => (c + 1) % slides.length), 6000);
    return () => clearInterval(t);
  }, []);

  // Particle canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const hero = canvas.parentElement;
    if (!hero) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const ACCENT = '#0ea5e9';
    const COUNT = 60;
    let W = 0, H = 0;

    interface P { x: number; y: number; r: number; vx: number; vy: number; alpha: number }
    let pts: P[] = [];

    const resize = () => {
      W = canvas.width = hero.offsetWidth;
      H = canvas.height = hero.offsetHeight;
    };

    const make = (): P => ({
      x: Math.random() * W, y: Math.random() * H,
      r: Math.random() * 2 + 0.5,
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
      alpha: Math.random() * 0.5 + 0.1,
    });

    const line = (a: P, b: P) => {
      const d = Math.hypot(a.x - b.x, a.y - b.y);
      if (d > 120) return;
      ctx.save();
      ctx.globalAlpha = (1 - d / 120) * 0.4;
      ctx.strokeStyle = ACCENT; ctx.lineWidth = 0.8;
      ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y); ctx.stroke();
      ctx.restore();
    };

    const tick = () => {
      ctx.clearRect(0, 0, W, H);
      pts.forEach((p, i) => {
        p.x += p.vx; p.y += p.vy;
        if (p.x < 0 || p.x > W) p.vx *= -1;
        if (p.y < 0 || p.y > H) p.vy *= -1;
        ctx.save(); ctx.globalAlpha = p.alpha;
        ctx.fillStyle = ACCENT;
        ctx.beginPath(); ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2); ctx.fill();
        ctx.restore();
        for (let j = i + 1; j < pts.length; j++) line(p, pts[j]);
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

  return (
    <section
      className="relative min-h-screen pt-[140px] overflow-hidden"
      style={{ backgroundColor: '#DDE8F4', backgroundImage: 'var(--gradient-hero)' }}
    >
      <canvas ref={canvasRef} id="particles-canvas" />

      <div className="container grid md:grid-cols-2 gap-10 items-center relative z-10">
        {/* Slider */}
        <div className="relative w-full h-[calc(100vh-140px)] min-h-[500px]">
          {slides.map((s, i) => (
            <div key={i} className={`hero-slide${i === current ? ' active' : ''}`}>
              <div className="max-w-[650px]">
                <span className="block text-[14px] font-bold uppercase tracking-[2px] text-accent1 mb-5">
                  {s.tagline}
                </span>
                <h1 className="font-heading text-[56px] max-md:text-[36px] font-extrabold leading-[1.1] text-slate-900 mb-6 tracking-tight">
                  {s.title}{' '}
                  <span className="gradient-text">{s.highlight}</span>
                </h1>
                <p className="text-lg text-slate-500 mb-10">{s.desc}</p>
                <div className="flex gap-4 flex-wrap">
                  <Link href={s.cta1.href} className="btn-primary">{s.cta1.label}</Link>
                  <Link href={s.cta2.href} className="btn-secondary">{s.cta2.label}</Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Graphic */}
        <div className="hidden md:flex relative items-center justify-center w-full h-full">
          <div className="glow-circle" />
          <svg
            className="w-[90%] max-w-[500px] h-auto z-10 animate-float"
            viewBox="0 0 500 500"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient id="netGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#0ea5e9" />
                <stop offset="100%" stopColor="#10b981" />
              </linearGradient>
            </defs>
            <g stroke="url(#netGrad)" strokeWidth="1.5" strokeOpacity="0.6">
              <line x1="250" y1="100" x2="150" y2="200" />
              <line x1="250" y1="100" x2="350" y2="200" />
              <line x1="150" y1="200" x2="100" y2="350" />
              <line x1="150" y1="200" x2="250" y2="300" />
              <line x1="350" y1="200" x2="400" y2="350" />
              <line x1="350" y1="200" x2="250" y2="300" />
              <line x1="250" y1="300" x2="100" y2="350" />
              <line x1="250" y1="300" x2="400" y2="350" />
              <line x1="100" y1="350" x2="250" y2="420" />
              <line x1="400" y1="350" x2="250" y2="420" />
            </g>
            <g fill="#0ea5e9">
              <circle cx="250" cy="100" r="8" filter="drop-shadow(0 0 8px #0ea5e9)" />
              <circle cx="150" cy="200" r="6" />
              <circle cx="350" cy="200" r="6" />
              <circle cx="250" cy="300" r="8" filter="drop-shadow(0 0 8px #0ea5e9)" />
              <circle cx="100" cy="350" r="6" />
              <circle cx="400" cy="350" r="6" />
              <circle cx="250" cy="420" r="8" />
            </g>
            <path
              d="M 250 100 Q 200 250 250 300 T 250 420"
              fill="none"
              stroke="#10b981"
              strokeWidth="2"
              strokeDasharray="5,5"
              strokeOpacity="0.6"
            />
          </svg>
        </div>
      </div>
    </section>
  );
}
