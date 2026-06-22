'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import Image from 'next/image';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About Us' },
  { href: '/services', label: 'Services' },
  { href: '/solutions', label: 'Solutions' },
  { href: '/sap', label: 'SAP Services' },
  { href: '/products', label: 'Products' },
  { href: '/contact', label: 'Contact Us' },
];

export default function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-[1000] backdrop-blur-[12px] border-b transition-all duration-300 ${
        scrolled
          ? 'py-0 shadow-card'
          : ''
      }`}
      style={{
        background: 'rgba(255,255,255,0.95)',
        borderColor: 'rgba(14,165,233,0.15)',
      }}
    >
      <div className="container flex justify-between items-center py-5 transition-all duration-300"
        style={scrolled ? { paddingTop: '10px', paddingBottom: '10px' } : {}}>

        {/* Logo */}
        <Link href="/" className="font-heading font-extrabold text-[18px] text-slate-900" onClick={closeMenu}>
          <Image src="/logo.png" alt="SVM" width={64} height={64} className="h-[64px] w-auto object-contain flex-shrink-0" />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8 nav-menu" id="nav-menu">
          {navLinks.map(link => (
            <Link
              key={link.href}
              href={link.href}
              className={`nav-link${pathname === link.href ? ' active' : ''}`}
              onClick={closeMenu}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Mobile Nav */}
        <nav
          className={`md:hidden nav-menu${menuOpen ? ' active' : ''}`}
          id="nav-menu-mobile"
        >
          {navLinks.map(link => (
            <Link
              key={link.href}
              href={link.href}
              className={`nav-link text-[18px]${pathname === link.href ? ' active' : ''}`}
              onClick={closeMenu}
            >
              {link.label}
            </Link>
          ))}
          <Link href="/contact" className="btn-primary mt-4" onClick={closeMenu}>
            Get a Quote
          </Link>
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-5">
          <Link href="/contact" className="btn-primary hidden md:inline-flex">Get a Quote</Link>
          <button
            className="flex md:hidden flex-col gap-1.5 bg-transparent border-none p-1"
            aria-label="Open Menu"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span
              className="block w-7 h-0.5 bg-slate-900 transition-all duration-300"
              style={menuOpen ? { transform: 'rotate(45deg) translate(6px, 6px)' } : {}}
            />
            <span
              className="block w-7 h-0.5 bg-slate-900 transition-all duration-300"
              style={menuOpen ? { opacity: 0 } : {}}
            />
            <span
              className="block w-7 h-0.5 bg-slate-900 transition-all duration-300"
              style={menuOpen ? { transform: 'rotate(-45deg) translate(5px, -5px)' } : {}}
            />
          </button>
        </div>
      </div>
    </header>
  );
}
