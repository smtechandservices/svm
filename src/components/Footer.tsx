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
    <footer className="bg-slate-50 border-t border-black/[0.08] pt-20 pb-10 text-sm">
      <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-16">
        {/* About */}
        <div>
          <Link href="/" className="flex items-center gap-3 mb-4">
            <Image src="/logo.png" alt="SVM" width={52} height={52} className="h-[52px] w-auto" />
            <span className="flex flex-col leading-tight">
              <span className="text-[17px] font-extrabold text-slate-900 font-heading">SVM Projects and Consulting</span>
              <span className="text-[11px] font-medium text-accent1 tracking-[0.04em]">IT Managed Services</span>
            </span>
          </Link>
          <p className="text-slate-500 mt-4 leading-relaxed">
            Empowering businesses with modern IT infrastructure solutions, secure networks, database systems, and premium IT/OT engineering services.
          </p>
        </div>

        {/* Links */}
        <div>
          <h4 className="footer-col-title">Useful Links</h4>
          <ul className="space-y-3">
            {[
              ['/', 'Home'],
              ['/about', 'About Us'],
              ['/services', 'Services'],
              ['/solutions', 'Solutions'],
              ['/sap', 'SAP Services'],
              ['/products', 'Products'],
              ['/contact', 'Contact Us'],
            ].map(([href, label]) => (
              <li key={href}>
                <Link href={href} className="text-slate-500 hover:text-accent1 hover:pl-1 transition-all duration-300">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Info */}
        <div>
          <h4 className="footer-col-title">Support & Info</h4>
          <p className="flex items-center gap-2 text-slate-500 mb-3">
            <i className="ri-mail-line text-accent1" /> support@svm.com
          </p>
          <p className="flex items-center gap-2 text-slate-500 mb-3">
            <i className="ri-map-pin-line text-accent1" /> North Delhi, India
          </p>
          <p className="flex items-center gap-2 text-slate-500">
            <i className="ri-time-line text-accent1" /> Mon – Sat: 9 AM – 6 PM
          </p>
        </div>

        {/* Newsletter */}
        <div>
          <h4 className="footer-col-title">Newsletter</h4>
          <p className="text-slate-500 mb-4 leading-relaxed">
            Subscribe to receive the latest tech insights, guides, and infrastructure audits.
          </p>
          <form className="newsletter-form" onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="Your email address"
              required
              aria-label="Email for newsletter"
              value={email}
              onChange={e => setEmail(e.target.value)}
              className="flex-1 bg-white border border-black/[0.10] rounded-full px-5 py-3 text-[14px] text-slate-900 placeholder-slate-400 focus:outline-none focus:border-accent1 min-w-0"
            />
            <button
              type="submit"
              aria-label="Subscribe"
              className="w-11 h-11 rounded-full flex items-center justify-center text-[18px] text-[#080B11] flex-shrink-0 transition-all duration-300 hover:-translate-y-0.5"
              style={{ background: 'linear-gradient(135deg,#0ea5e9,#10b981)' }}
            >
              {status === 'loading' ? (
                <i className="ri-loader-4-line spin" />
              ) : status === 'done' ? (
                <i className="ri-check-line" />
              ) : (
                <i className="ri-send-plane-fill" />
              )}
            </button>
          </form>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="container border-t border-black/[0.08] pt-8 flex flex-wrap justify-between items-center gap-5 text-slate-500">
        <div>Copyright &copy; {year} SVM Projects and Consulting. All Rights Reserved.</div>
        <div className="flex gap-6">
          <a href="#" className="hover:text-accent1 transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-accent1 transition-colors">Terms & Conditions</a>
        </div>
      </div>
    </footer>
  );
}
