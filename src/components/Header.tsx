'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import Image from 'next/image';

type DropdownItem = { href: string; label: string; icon: string; desc: string };
type NavLink = { href: string; label: string; children?: DropdownItem[] };

const navLinks: NavLink[] = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About Us' },
  {
    href: '/services',
    label: 'Services',
    children: [
      { href: '/services', label: 'Email Solutions', icon: 'ri-mail-send-line', desc: 'Enterprise email delivery & encryption' },
      { href: '/services', label: 'Backup & Recovery', icon: 'ri-hard-drive-2-line', desc: 'Redundant hot-standby architectures' },
      { href: '/services', label: 'Network Design', icon: 'ri-router-line', desc: 'Low-latency enterprise network setup' },
      { href: '/services', label: 'IT Migration', icon: 'ri-exchange-line', desc: 'Zero-downtime datacenter relocation' },
      { href: '/services', label: 'Server Management', icon: 'ri-server-line', desc: 'Managed server infrastructure & ops' },
      { href: '/services', label: 'IT Support', icon: 'ri-customer-service-line', desc: 'On-demand technical support plans' },
    ],
  },
  {
    href: '/solutions',
    label: 'Solutions',
    children: [
      { href: '/solutions', label: 'Cloud Solutions', icon: 'ri-cloud-line', desc: 'Hybrid & multi-cloud architectures' },
      { href: '/solutions', label: 'Cybersecurity', icon: 'ri-shield-flash-line', desc: 'Threat detection & compliance' },
      { href: '/solutions', label: 'IT Infrastructure', icon: 'ri-building-line', desc: 'End-to-end infrastructure design' },
      { href: '/solutions', label: 'Data Management', icon: 'ri-database-2-line', desc: 'Secure database & storage systems' },
      { href: '/solutions', label: 'Virtualization', icon: 'ri-stack-line', desc: 'Hypervisor & VM orchestration' },
      { href: '/solutions', label: 'Remote Work', icon: 'ri-remote-control-line', desc: 'Secure remote access & VPN setup' },
    ],
  },
  {
    href: '/sap',
    label: 'SAP Services',
    children: [
      { href: '/sap', label: 'SAP Implementation', icon: 'ri-settings-4-line', desc: 'Full-cycle SAP deployment & config' },
      { href: '/sap', label: 'SAP Support', icon: 'ri-customer-service-2-line', desc: 'Ongoing SAP maintenance & help desk' },
      { href: '/sap', label: 'SAP Migration', icon: 'ri-arrow-left-right-line', desc: 'Legacy to S/4HANA migration' },
      { href: '/sap', label: 'SAP Training', icon: 'ri-graduation-cap-line', desc: 'Role-based end-user training' },
      { href: '/sap', label: 'SAP Consulting', icon: 'ri-discuss-line', desc: 'Strategy & process optimisation' },
    ],
  },
  {
    href: '/products',
    label: 'Products',
    children: [
      { href: '/products', label: 'Hardware', icon: 'ri-cpu-line', desc: 'Servers, workstations & peripherals' },
      { href: '/products', label: 'Software Licenses', icon: 'ri-file-code-line', desc: 'Enterprise software & OS licensing' },
      { href: '/products', label: 'Networking Gear', icon: 'ri-wifi-line', desc: 'Switches, routers & access points' },
      { href: '/products', label: 'Security Appliances', icon: 'ri-lock-2-line', desc: 'Firewalls, UTM & endpoint security' },
      { href: '/products', label: 'Storage Solutions', icon: 'ri-hard-drive-line', desc: 'NAS, SAN & cloud storage arrays' },
    ],
  },
  { href: '/contact', label: 'Contact Us' },
];

export default function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [openMobile, setOpenMobile] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const closeMenu = () => { setMenuOpen(false); setOpenMobile(null); };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-[1000] backdrop-blur-[12px] border-b transition-all duration-300 ${scrolled ? 'py-0 shadow-card' : ''}`}
      style={{ background: 'rgba(255,255,255,0.95)', borderColor: 'rgba(14,165,233,0.15)' }}
    >
      <div
        className="container flex justify-between items-center py-5 transition-all duration-300"
        style={scrolled ? { paddingTop: '10px', paddingBottom: '10px' } : {}}
      >
        {/* Logo */}
        <Link href="/" onClick={closeMenu}>
          <Image src="/logo.png" alt="SVM" width={64} height={64} className="h-[64px] w-auto object-contain flex-shrink-0" />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-7">
          {navLinks.map(link => (
            link.children ? (
              <div key={link.href} className="relative group">
                {/* trigger */}
                <Link
                  href={link.href}
                  className={`nav-link inline-flex items-center gap-1${pathname === link.href ? ' active' : ''}`}
                >
                  {link.label}
                  <i className="ri-arrow-down-s-line text-[16px] transition-transform duration-200 group-hover:rotate-180" />
                </Link>

                {/* dropdown panel */}
                <div className="absolute top-full left-1/2 -translate-x-1/2 pt-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 translate-y-2 group-hover:translate-y-0 z-50">
                  <div className="bg-white rounded-2xl shadow-[0_8px_40px_-8px_rgba(0,0,0,0.18)] border border-black/[0.07] p-3 w-[480px] grid grid-cols-2 gap-1">
                    {link.children.map(child => (
                      <Link
                        key={child.label}
                        href={child.href}
                        className="flex items-start gap-3 px-4 py-3 rounded-xl hover:bg-slate-50 transition-colors duration-150 group/item"
                      >
                        <span className="w-9 h-9 rounded-xl flex items-center justify-center text-accent1 flex-shrink-0 mt-0.5"
                          style={{ background: 'rgba(14,165,233,0.08)', border: '1px solid rgba(14,165,233,0.15)' }}>
                          <i className={`${child.icon} text-[17px]`} />
                        </span>
                        <span>
                          <span className="block text-[14px] font-semibold text-slate-900 font-heading group-hover/item:text-accent1 transition-colors duration-150">{child.label}</span>
                          <span className="block text-[12px] text-slate-500 mt-0.5 leading-snug">{child.desc}</span>
                        </span>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <Link
                key={link.href}
                href={link.href}
                className={`nav-link${pathname === link.href ? ' active' : ''}`}
                onClick={closeMenu}
              >
                {link.label}
              </Link>
            )
          ))}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-5">
          <Link href="/contact" className="btn-primary hidden md:inline-flex">Get a Quote</Link>
          <button
            className="flex md:hidden flex-col gap-1.5 bg-transparent border-none p-1"
            aria-label="Open Menu"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span className="block w-7 h-0.5 bg-slate-900 transition-all duration-300"
              style={menuOpen ? { transform: 'rotate(45deg) translate(6px, 6px)' } : {}} />
            <span className="block w-7 h-0.5 bg-slate-900 transition-all duration-300"
              style={menuOpen ? { opacity: 0 } : {}} />
            <span className="block w-7 h-0.5 bg-slate-900 transition-all duration-300"
              style={menuOpen ? { transform: 'rotate(-45deg) translate(5px, -5px)' } : {}} />
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <nav
        className={`md:hidden nav-menu${menuOpen ? ' active' : ''}`}
        id="nav-menu-mobile"
      >
        {navLinks.map(link => (
          link.children ? (
            <div key={link.href} className="w-full">
              <button
                className={`nav-link text-[18px] w-full flex items-center justify-between${pathname === link.href ? ' active' : ''}`}
                onClick={() => setOpenMobile(openMobile === link.href ? null : link.href)}
              >
                {link.label}
                <i className={`ri-arrow-down-s-line text-[18px] transition-transform duration-200${openMobile === link.href ? ' rotate-180' : ''}`} />
              </button>
              {openMobile === link.href && (
                <div className="mt-2 ml-4 flex flex-col gap-1">
                  {link.children.map(child => (
                    <Link
                      key={child.label}
                      href={child.href}
                      onClick={closeMenu}
                      className="flex items-center gap-3 py-2.5 px-3 rounded-xl hover:bg-slate-50 transition-colors"
                    >
                      <i className={`${child.icon} text-accent1 text-[18px]`} />
                      <span className="text-[15px] font-medium text-slate-700">{child.label}</span>
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ) : (
            <Link
              key={link.href}
              href={link.href}
              className={`nav-link text-[18px]${pathname === link.href ? ' active' : ''}`}
              onClick={closeMenu}
            >
              {link.label}
            </Link>
          )
        ))}
        <Link href="/contact" className="btn-primary mt-4" onClick={closeMenu}>
          Get a Quote
        </Link>
      </nav>
    </header>
  );
}
