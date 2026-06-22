import type { Metadata } from 'next';
import Link from 'next/link';
import PageBanner from '@/components/PageBanner';

export const metadata: Metadata = {
  title: 'Services',
  description:
    'Explore our range of IT services including email solutions, database administration, virtualization, OS management, and network architecture design.',
};

const services = [
  { icon: 'ri-mail-volume-line', title: 'Email Solutions', desc: 'Effective email communication is the cornerstone of modern operations. We set up, manage, and encrypt corporate mail boxes, providing advanced spam filters and email archiving.' },
  { icon: 'ri-settings-5-line', title: 'IT Service Management', desc: 'Comprehensive monitoring, software licensing compliance, regular software deployments, OS configuration standards, and direct user assistance channels.' },
  { icon: 'ri-slideshow-3-line', title: 'Virtualization Services', desc: 'Maximize your server resources. We engineer hypervisor layers (VMware, Proxmox VE, Hyper-V) to run multiple virtual environments with balanced CPU, memory, and disk IOPS.' },
  { icon: 'ri-terminal-window-line', title: 'OS Support & Management', desc: 'Tuning and updating enterprise server environments (Linux RedHat/Ubuntu, Windows Server). Active patch management, registry optimization, and process monitoring.' },
  { icon: 'ri-database-line', title: 'Database Managed Services', desc: 'Ensure fast querying and zero data corruption. Our experts optimize database engines (MySQL, PostgreSQL, Oracle, MS SQL), build cluster backups, and tune indices.' },
  { icon: 'ri-pulse-line', title: 'Network Optimization', desc: 'Auditing active networks to detect data bottleneck choke points, bad switch configurations, packet collisions, or signal degradation. Minimize latency.' },
  { icon: 'ri-file-shield-2-line', title: 'Annual Maintenance (AMC)', desc: 'Secure your systems with planned checkups, preventative software audits, physical server cleaning, component replacements, and priority support SLAs.' },
  { icon: 'ri-community-line', title: 'IT Facilities Management', desc: 'Physical server room and datacenter maintenance: temperature monitoring, smart power routers, fire-suppression systems, and security camera integrations.' },
  { icon: 'ri-shield-flash-line', title: 'Backup & Disaster Recovery', desc: 'Implement reliable data duplication. In the event of system outages or hardware crashes, our hot-swappable architectures restore backups immediately.' },
  { icon: 'ri-git-commit-line', title: 'Network Architecture Design', desc: 'From initial structured cabling layouts to firewall policies, software-defined WAN setups, and virtual local area network (VLAN) allocations.' },
  { icon: 'ri-translate-2', title: 'Relocation & Migration', desc: 'Move physical racks or virtual environments to new locations or cloud providers with zero user disruption. Complete data integrity checks are run after migration.' },
];

export default function ServicesPage() {
  return (
    <>
      <PageBanner title="Our IT" highlight="Services" crumb="Services" />

      <section className="py-24">
        <div className="container">
          <div className="max-w-[650px] mx-auto text-center mb-16 reveal">
            <span className="section-tag">Expert Capabilities</span>
            <h2 className="section-title">
              Comprehensive IT <span className="gradient-text">Service Portfolio</span>
            </h2>
            <p className="text-slate-500 text-[16px]">
              We deliver specialized technical services with clear SLA matrices, active response teams, and detailed system audit reports.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 reveal-stagger">
            {services.map(s => (
              <div key={s.title} className="card-glass">
                <div className="card-icon"><i className={s.icon} /></div>
                <h3 className="card-title">{s.title}</h3>
                <p className="card-desc">{s.desc}</p>
              </div>
            ))}
          </div>

          {/* CTA card */}
          <div
            className="card-glass text-center mt-16"
            style={{
              borderColor: '#0ea5e9',
              background: 'radial-gradient(circle at top right, rgba(14,165,233,0.05), transparent)',
            }}
          >
            <h3 className="card-title">Need a custom Service Level Agreement (SLA)?</h3>
            <p className="card-desc max-w-[600px] mx-auto mb-6">
              We provide tailormade IT management contracts to match your specific compliance, uptime, and database throughput requirements.
            </p>
            <Link href="/contact" className="btn-primary">Request Custom Quote</Link>
          </div>
        </div>
      </section>
    </>
  );
}
