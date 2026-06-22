'use client';
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';

export default function ClientInit() {
  const pathname = usePathname();
  const [showTop, setShowTop] = useState(false);

  // Scroll-reveal + stat counters — re-run on every route change
  useEffect(() => {
    // Scroll reveal
    const revealClasses = ['reveal', 'reveal-left', 'reveal-right', 'reveal-stagger'];
    const els = document.querySelectorAll(revealClasses.map(c => `.${c}`).join(','));

    const revealIO = new IntersectionObserver(
      entries => {
        entries.forEach(e => {
          if (e.isIntersecting) {
            e.target.classList.add('visible');
            revealIO.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12 },
    );
    els.forEach(el => revealIO.observe(el));

    // Stat counters
    const stats = document.querySelectorAll<HTMLElement>('.stat-number');
    const statIO = new IntersectionObserver(
      entries => {
        entries.forEach(e => {
          if (!e.isIntersecting) return;
          statIO.unobserve(e.target);
          const el = e.target as HTMLElement;
          const text = el.textContent?.trim() ?? '';
          const num = parseFloat(text.replace(/[^0-9.]/g, ''));
          const suffix = text.replace(/[0-9.]/g, '');
          let start = 0;
          const step = 16;
          const inc = num / (1800 / step);
          const timer = setInterval(() => {
            start += inc;
            if (start >= num) {
              start = num;
              clearInterval(timer);
            }
            el.textContent =
              (Number.isInteger(num) ? Math.round(start) : start.toFixed(1)) + suffix;
          }, step);
        });
      },
      { threshold: 0.5 },
    );
    stats.forEach(s => statIO.observe(s));

    return () => {
      revealIO.disconnect();
      statIO.disconnect();
    };
  }, [pathname]);

  // Scroll-to-top visibility
  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 400);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <button
      id="scroll-top-btn"
      aria-label="Back to top"
      className={showTop ? 'visible' : ''}
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
    >
      <i className="ri-arrow-up-line" />
    </button>
  );
}
