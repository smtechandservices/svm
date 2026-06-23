'use client';
import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function ClientInit() {
  const pathname = usePathname();

  useEffect(() => {
    // 1. Scroll Reveal Logic
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          // Optional: stop observing once revealed
          // observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

    // Small delay to ensure DOM is fully painted after route change
    const initTimer = setTimeout(() => {
      const elements = document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-stagger');
      elements.forEach(el => observer.observe(el));
      
      const counters = document.querySelectorAll('.stat-number');
      counters.forEach(c => countObserver.observe(c));
    }, 100);

    // 2. Number Counter Logic
    const countObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const target = entry.target as HTMLElement;
          const endVal = parseFloat(target.getAttribute('data-target') || '0');
          const suffix = target.getAttribute('data-suffix') || '';
          
          let startVal = 0;
          const duration = 2000;
          const startTime = performance.now();

          const updateCounter = (currentTime: number) => {
            const elapsedTime = currentTime - startTime;
            if (elapsedTime < duration) {
              // Easing function (easeOutExpo)
              const progress = elapsedTime / duration;
              const currentVal = endVal * (1 - Math.pow(2, -10 * progress));
              target.innerText = Math.floor(currentVal) + suffix;
              requestAnimationFrame(updateCounter);
            } else {
              target.innerText = endVal + suffix;
            }
          };
          requestAnimationFrame(updateCounter);
          countObserver.unobserve(target);
        }
      });
    }, { threshold: 0.5 });

    // 3. Scroll to top button visibility
    const handleScroll = () => {
      const btn = document.getElementById('scroll-top-btn');
      if (btn) {
        if (window.scrollY > 400) btn.classList.add('visible');
        else btn.classList.remove('visible');
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      clearTimeout(initTimer);
      observer.disconnect();
      countObserver.disconnect();
      window.removeEventListener('scroll', handleScroll);
    };
  }, [pathname]);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <button id="scroll-top-btn" onClick={scrollToTop} aria-label="Scroll to top">
      <i className="ri-arrow-up-line" />
    </button>
  );
}
