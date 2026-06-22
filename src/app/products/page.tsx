import type { Metadata } from 'next';
import Link from 'next/link';
import PageBanner from '@/components/PageBanner';

export const metadata: Metadata = {
  title: 'Products',
  description:
    'Browse our hardware and software product offerings including rack servers, SAN storage, hardware firewalls, PoE switches, KVM consoles, and rack cabling.',
};

const products = [
  {
    icon: 'ri-cpu-line',
    title: 'Compute Hardware',
    desc: 'High-density Blade servers, 1U/2U Rack servers, and custom database hosts configured with redundant power supplies, ECC memory, and fast processors.',
  },
  {
    icon: 'ri-database-2-line',
    title: 'Data Storage Systems',
    desc: 'Keep your data accessible and secure. We supply Enterprise NAS systems, high-throughput SAN arrays, SSD cache drives, and automated tape loaders.',
  },
  {
    icon: 'ri-shield-keyhole-line',
    title: 'Security Hardware',
    desc: 'Enterprise hardware firewalls, intrusion detection appliances, unified threat gateways, smart biometric locks, and security camera servers.',
  },
  {
    icon: 'ri-router-line',
    title: 'Networking Equipment',
    desc: 'Multi-gigabit PoE switches, core fiber routers, dual-band outdoor Wi-Fi access points, optical transceivers, and SFP connection accessories.',
  },
  {
    icon: 'ri-keyboard-line',
    title: 'KVM & Consolidation',
    desc: 'Multi-port KVM consoles, secure workspace matrices, and hardware desktop switches. Enable operators to switch control pools without delay.',
  },
  {
    icon: 'ri-server-line',
    title: 'Facility Infrastructure',
    desc: 'Physical components: smart server racks, vertical cable organizers, high-capacity UPS units, smart power rails, and cooling duct systems.',
  },
];

export default function ProductsPage() {
  return (
    <>
      <PageBanner title="Product" highlight="Offerings" crumb="Products" />

      <section className="py-24">
        <div className="container">
          <div className="max-w-[650px] mx-auto text-center mb-16 reveal">
            <span className="section-tag">Equipment & Hardware</span>
            <h2 className="section-title">
              High-Performance IT <span className="gradient-text">Hardware & Infrastructure</span>
            </h2>
            <p className="text-slate-500 text-[16px]">
              We supply, install, and configure enterprise hardware from leading global manufacturers, backed by full replacement warranties and active AMC plans.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 reveal-stagger">
            {products.map(p => (
              <div key={p.title} className="card-glass flex flex-col">
                <div className="card-icon"><i className={p.icon} /></div>
                <h3 className="card-title">{p.title}</h3>
                <p className="card-desc mb-6 flex-1">{p.desc}</p>
                <Link
                  href="/contact"
                  className="btn-secondary text-center"
                >
                  Get Quote
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
