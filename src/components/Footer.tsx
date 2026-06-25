'use client';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'done'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setTimeout(() => {
      setStatus('done');
      setEmail('');
      setTimeout(() => setStatus('idle'), 2500);
    }, 1400);
  };

  const year = new Date().getFullYear();

  return (
    <footer className="border-t pt-20 pb-10 text-sm" style={{ background: '#EEF0EB', borderColor: 'rgba(8,60,98,0.1)' }}>
      <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-16">
        {/* Brand */}
        <div>
          <Link href="/" className="flex items-center gap-3 mb-5">
            <Image src="/logo.png" alt="SVM Projects and Consulting" width={48} height={48} className="h-[48px] w-auto" />
            <span className="flex flex-col leading-tight">
              <span className="text-[16px] font-extrabold font-heading text-slate-heading">SVM Projects and Consulting</span>
              <span className="text-[11px] font-medium tracking-[0.04em] text-navy">IT Managed Services</span>
            </span>
          </Link>
          <p className="leading-relaxed mb-5 text-[14px]" style={{ color: '#5A6474' }}>
            Empowering businesses with modern IT infrastructure solutions, secure networks, database systems, and premium IT/OT engineering services across India.
          </p>
          {/* Socials */}
          <div className="flex gap-3">
            {[
              { icon: 'ri-linkedin-fill', href: '#' },
              { icon: 'ri-twitter-x-line', href: '#' },
              { icon: 'ri-facebook-fill', href: '#' },
              { icon: 'ri-youtube-fill', href: '#' },
            ].map(s => (
              <a
                key={s.icon}
                href={s.href}
                className="w-9 h-9 rounded-xl flex items-center justify-center transition-all duration-200 hover:-translate-y-0.5"
                style={{ background: 'rgba(8,60,98,0.08)', color: '#083C62' }}
              >
                <i className={`${s.icon} text-[15px]`} />
              </a>
            ))}
          </div>
        </div>

        {/* Links */}
        <div>
          <h4 className="footer-col-title">Quick Links</h4>
          <ul className="space-y-3">
            {[
              ['/', 'Home'],
              ['/about', 'About Us'],
              ['/services', 'Services'],
              ['/solutions', 'Solutions'],
              ['/sap', 'SAP Services'],
              ['/products', 'Products'],
              ['/articles', 'Insights'],
              ['/contact', 'Contact Us'],
            ].map(([href, label]) => (
              <li key={href}>
                <Link href={href} className="text-[14px] hover:text-navy hover:pl-1 transition-all duration-300" style={{ color: '#5A6474' }}>
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="footer-col-title">Support & Info</h4>
          <div className="space-y-4">
            {[
              { icon: 'ri-mail-line', text: 'info@svmsystem.com' },
              { icon: 'ri-map-pin-line', text: 'Head Office: U-23, Budh Vihar Phase 1, Delhi 110086, India' },
              { icon: 'ri-map-pin-line', text: 'Rep Office: 306, 3rd floor Al Kazim building Burjuman' },
              { icon: 'ri-time-line', text: 'Mon – Sat: 9 AM – 6 PM' },
              { icon: 'ri-customer-service-2-line', text: '24/7 Monitoring & Response' },
            ].map(item => (
              <p key={item.text} className="flex items-start gap-3 text-[14px]" style={{ color: '#5A6474' }}>
                <i className={`${item.icon} text-navy mt-0.5 flex-shrink-0`} />
                {item.text}
              </p>
            ))}

            {/* Locations */}
            <div className="mt-4 pt-4" style={{ borderTop: '1px solid rgba(8,60,98,0.1)' }}>
              <div className="text-[12px] uppercase tracking-[1px] font-bold text-slate-heading mb-2">Serving in</div>
              <div className="flex flex-wrap gap-2">
                {['Mumbai', 'Bangalore', 'Chennai', 'Hyderabad', 'Zirakpur', 'Dubai'].map(city => (
                  <span key={city} className="text-[12px] px-2.5 py-1 rounded-full font-medium" style={{ background: 'rgba(8,60,98,0.08)', color: '#083C62' }}>{city}</span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter */}
        <div>
          <h4 className="footer-col-title">Newsletter</h4>
          <p className="leading-relaxed mb-4 text-[14px]" style={{ color: '#5A6474' }}>
            Subscribe to receive the latest tech insights, infrastructure guides, and security updates.
          </p>
          <form className="newsletter-form" onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="Your email address"
              required
              aria-label="Email for newsletter"
              value={email}
              onChange={e => setEmail(e.target.value)}
              className="flex-1 border rounded-full px-5 py-3 text-[14px] focus:outline-none focus:border-navy min-w-0 transition-all duration-300"
              style={{ background: '#FFFFFF', borderColor: 'rgba(8,60,98,0.15)', color: '#1A2B4A' }}
            />
            <button
              type="submit"
              aria-label="Subscribe"
              className="w-11 h-11 rounded-full flex items-center justify-center text-[16px] text-white flex-shrink-0 transition-all duration-300 hover:-translate-y-0.5"
              style={{ background: '#083C62', boxShadow: '0 4px 12px rgba(8,60,98,0.3)' }}
            >
              {status === 'loading' ? <i className="ri-loader-4-line spin" /> : status === 'done' ? <i className="ri-check-line" /> : <i className="ri-send-plane-fill" />}
            </button>
          </form>

          {/* Trust badges */}
          <div className="mt-6 grid grid-cols-2 gap-2">
            {[
              { icon: 'ri-award-line', label: 'ISO Certified' },
              { icon: 'ri-shield-check-line', label: '100% Secure' },
              { icon: 'ri-time-line', label: '12+ Years' },
              { icon: 'ri-trophy-line', label: 'Award Winning' },
            ].map(b => (
              <div key={b.label} className="flex items-center gap-2 text-[12px]" style={{ color: '#5A6474' }}>
                <i className={`${b.icon} text-navy text-[14px]`} />
                {b.label}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="container flex flex-wrap justify-between items-center gap-5 text-[13px] pt-8" style={{ borderTop: '1px solid rgba(8,60,98,0.1)', color: '#8A94A6' }}>
        <div>Copyright &copy; {year} SVM Projects and Consulting. All Rights Reserved.</div>
        <div className="flex gap-6">
          <a href="#" className="hover:text-navy transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-navy transition-colors">Terms & Conditions</a>
          <a href="#" className="hover:text-navy transition-colors">Cookie Policy</a>
        </div>
      </div>
    </footer>
  );
}
