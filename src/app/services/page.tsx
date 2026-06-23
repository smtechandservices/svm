import type { Metadata } from 'next';
import Link from 'next/link';
import PageBanner from '@/components/PageBanner';

export const metadata: Metadata = {
  title: 'IT Services',
  description: 'Explore SVM’s comprehensive IT services including email solutions, server management, disaster recovery, and network design.',
};

const services = [
  {
    title: 'Email Solutions',
    icon: 'ri-mail-send-line',
    image: 'https://images.unsplash.com/photo-1596526131083-e8c633c948d2?auto=format&fit=crop&q=80&w=600',
    desc: 'Effective email communication is a cornerstone of modern business operations. Our solutions guarantee delivery speed, advanced spam filtering, and enterprise-grade encryption for all internal and external communication.',
  },
  {
    title: 'IT Service Management',
    icon: 'ri-customer-service-2-line',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=600',
    desc: 'Align your IT services with the needs of your business. We implement ITIL-compliant service desk operations to manage incidents, requests, and changes efficiently.',
  },
  {
    title: 'Virtualization Services',
    icon: 'ri-stack-line',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=600',
    desc: 'Reduce hardware footprint and improve resource utilization. We design and deploy robust VMware and Hyper-V environments for seamless workload distribution.',
  },
  {
    title: 'OS Support & Management',
    icon: 'ri-window-line',
    image: 'https://images.unsplash.com/photo-1629654297299-c8506221ca97?auto=format&fit=crop&q=80&w=600',
    desc: 'End-to-end administration for Windows Server, Linux, and Unix environments. We handle patch management, security hardening, and performance tuning.',
  },
  {
    title: 'Database Managed Services',
    icon: 'ri-database-2-line',
    image: 'https://images.unsplash.com/photo-1597852074816-d933c7d2b988?auto=format&fit=crop&q=80&w=600',
    desc: 'Keep your structured data secure and performant. We provide DBA services for SQL Server, Oracle, and open-source databases including clustering and tuning.',
  },
  {
    title: 'Network Performance',
    icon: 'ri-speed-up-line',
    image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&q=80&w=600',
    desc: 'Identify bottlenecks before they affect users. We deploy deep-packet inspection tools to optimize traffic flow and ensure high-priority applications get the bandwidth they need.',
  },
  {
    title: 'Annual Maintenance (AMC)',
    icon: 'ri-shield-check-line',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=600',
    desc: 'Secure your systems with planned checkups, preventative hardware audits, physical server maintenance, component replacements, and priority SLA contracts.',
  },
  {
    title: 'IT Facilities Management',
    icon: 'ri-building-line',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=600',
    desc: 'Outsource the daily operations of your server rooms and datacenters. We manage power, cooling, cabling, and physical access controls.',
  },
  {
    title: 'Backup & Disaster Recovery',
    icon: 'ri-refresh-line',
    image: 'https://images.unsplash.com/photo-1601597111158-2fceff292cdc?auto=format&fit=crop&q=80&w=600',
    desc: "Data is your most valuable asset. We implement redundant hot-standby architectures and encrypted offsite backups that restore your systems immediately after failure.",
  },
  {
    title: 'Network Architecture',
    icon: 'ri-router-line',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=600',
    desc: 'A well-designed network is the backbone of any enterprise. We deliver fast, low-latency, and secure network architectures enabling seamless internal communication.',
  },
  {
    title: 'Relocation & Migration',
    icon: 'ri-exchange-line',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=600',
    desc: 'Relocating your IT infrastructure to a new datacenter, building, or cloud provider with zero user downtime. Complete data integrity verification at every step.',
  },
  {
    title: 'IoT (Internet of Things)',
    icon: 'ri-sensor-line',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=600',
    desc: 'Connect physical devices to your corporate network securely. We design IoT gateways and sensor networks for manufacturing, logistics, and smart offices.',
  },
];

export default function ServicesPage() {
  return (
    <>
      <PageBanner title="IT Services" highlight="Portfolio" crumb="Services" />

      <section className="py-24" style={{ background: '#F5F4EF' }}>
        <div className="container">
          <div className="max-w-[700px] mx-auto text-center mb-16 reveal">
            <span className="section-tag">Our Expertise</span>
            <h2 className="section-title">Comprehensive <span className="gradient-text">IT Services</span></h2>
            <p className="text-slate-body text-[16px] leading-relaxed">
              Network Management & Security, IT Service Management, Email Solutions, Virtualization Services, OS Support, Database Management, and Backup & Disaster Recovery.
            </p>
          </div>

          {/* Bento grid layout for services */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 reveal-stagger">
            {services.map((s) => (
              <div key={s.title} className="card flex flex-col hover-float p-0 overflow-hidden h-full">
                <div className="h-[180px] relative overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={s.image} alt={s.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 hover:scale-105" />
                  <div className="absolute inset-0 bg-navy/10 mix-blend-multiply" />
                  <div className="absolute top-5 left-5 w-12 h-12 bg-white/90 backdrop-blur-md rounded-xl flex items-center justify-center shadow-lg">
                    <i className={`${s.icon} text-[24px] text-navy`} />
                  </div>
                </div>
                
                <div className="p-8 flex-1 flex flex-col">
                  <h3 className="card-title mb-3">{s.title}</h3>
                  <p className="card-desc mb-6 flex-1">{s.desc}</p>
                  <div className="mt-auto">
                    <Link href="/contact" className="inline-flex items-center gap-2 font-semibold text-[14px] text-navy hover:gap-3 transition-all duration-300">
                      Request Service <i className="ri-arrow-right-line" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-20">
            <div className="cta-banner text-center relative overflow-hidden">
              <div className="blob blob-blue" style={{ width: 300, height: 300, top: '-50px', right: '-50px', opacity: 0.15 }} />
              <div className="relative z-10">
                <h3 className="text-[32px] font-extrabold font-heading text-white mb-4">Need a Custom Service Level Agreement?</h3>
                <p className="text-white/80 text-[16px] max-w-[600px] mx-auto mb-8">
                  We tailor our managed services and support contracts to match your exact business hours, critical systems, and compliance requirements.
                </p>
                <Link href="/contact" className="btn-primary" style={{ background: 'white', color: '#083C62' }}>
                  Consult Our Experts
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
