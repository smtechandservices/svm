import type { Metadata } from 'next';
import Link from 'next/link';
import PageBanner from '@/components/PageBanner';

export const metadata: Metadata = {
  title: 'IT Solutions',
  description: 'SVM provides enterprise IT solutions spanning networking, cloud architecture, security, and unified communications.',
};

const solutionGroups = [
  {
    category: 'Connectivity & Networks',
    desc: 'Build the foundation of your enterprise communication with high-speed, secure, and scalable network architectures.',
    items: [
      { icon: 'ri-router-line', title: 'Networking Solutions', desc: 'Enterprise core and edge switching, routing, and high-availability architecture design.' },
      { icon: 'ri-wifi-line', title: 'Wireless & Mobility', desc: 'Campus-wide secure Wi-Fi 6 deployments and mobile device management (MDM) integration.' },
      { icon: 'ri-shape-fill', title: 'SDN (Software Defined)', desc: 'Abstract network control for agile, programmatic infrastructure provisioning across data centers.' },
      { icon: 'ri-route-line', title: 'SD-WAN', desc: 'Securely connect branch offices directly to the cloud while reducing MPLS costs and improving latency.' },
    ],
  },
  {
    category: 'Infrastructure & Cloud',
    desc: 'Modernize your workloads with flexible compute and storage solutions tailored for hybrid environments.',
    items: [
      { icon: 'ri-server-line', title: 'Server & Storage', desc: 'High-density compute nodes, SAN/NAS arrays, and tiered storage for active data and archives.' },
      { icon: 'ri-cloud-line', title: 'Cloud Solutions', desc: 'Migration, optimization, and management of AWS, Azure, and private cloud deployments.' },
      { icon: 'ri-building-4-line', title: 'Data Center', desc: 'End-to-end physical data center design including power, cooling, racks, and structured cabling.' },
      { icon: 'ri-stack-line', title: 'IT Virtualization', desc: 'Consolidate hardware footprints using VMware or Hyper-V to maximize resource utilization.' },
    ],
  },
  {
    category: 'Security & Enterprise',
    desc: 'Protect your assets and streamline your core business operations with enterprise-grade solutions.',
    items: [
      { icon: 'ri-shield-keyhole-line', title: 'Security Solutions', desc: 'Next-gen firewalls, zero-trust network access (ZTNA), and endpoint detection & response.' },
      { icon: 'ri-briefcase-4-line', title: 'Enterprise Solutions', desc: 'ERP integrations, custom line-of-business applications, and workflow automation.' },
      { icon: 'ri-apps-line', title: 'Application Solutions', desc: 'Hosting, scaling, and load-balancing for mission-critical enterprise web applications.' },
    ],
  },
  {
    category: 'Workspace & Collaboration',
    desc: 'Equip your teams to communicate effectively from the office or anywhere in the world.',
    items: [
      { icon: 'ri-discuss-line', title: 'Unified Communication', desc: 'Integration of voice, video, messaging, and presence across all corporate devices.' },
      { icon: 'ri-video-chat-line', title: 'Boardroom & Conference', desc: 'High-definition video conferencing hardware and room booking systems.' },
      { icon: 'ri-customer-service-2-line', title: 'Contact Centre', desc: 'Omnichannel customer support platforms with CRM integration and call analytics.' },
    ],
  },
];

export default function SolutionsPage() {
  return (
    <>
      <PageBanner title="Enterprise" highlight="Solutions" crumb="Solutions" />

      <section className="py-24" style={{ background: '#F5F4EF' }}>
        <div className="container">
          <div className="max-w-[700px] mx-auto text-center mb-20 reveal">
            <span className="section-tag">Technology Stack</span>
            <h2 className="section-title">Architecting The <span className="gradient-text">Future of Work</span></h2>
            <p className="text-slate-body text-[16px] leading-relaxed">
              We deploy advanced technology solutions across four core domains to help businesses operate faster, scale easier, and stay protected against emerging threats.
            </p>
          </div>

          <div className="space-y-24">
            {solutionGroups.map((group, gIdx) => (
              <div key={group.category} className="reveal-stagger">
                {/* Group Header */}
                <div className="flex flex-col md:flex-row gap-6 md:items-center justify-between border-b pb-6 mb-10" style={{ borderColor: 'rgba(8,60,98,0.1)' }}>
                  <div>
                    <h3 className="text-[28px] font-bold font-heading text-slate-heading mb-2">{group.category}</h3>
                    <p className="text-slate-body text-[15px] max-w-[500px]">{group.desc}</p>
                  </div>
                  <div className="hidden md:block">
                    <span className="w-12 h-12 rounded-full flex items-center justify-center font-bold font-heading text-[18px] text-navy bg-navy/10 border border-navy/20">
                      0{gIdx + 1}
                    </span>
                  </div>
                </div>

                {/* Group Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {group.items.map(item => (
                    <div key={item.title} className="card p-7 hover-float">
                      <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5" style={{ background: '#083C62', color: 'white' }}>
                        <i className={`${item.icon} text-[22px]`} />
                      </div>
                      <h4 className="font-bold font-heading text-[18px] text-slate-heading mb-3">{item.title}</h4>
                      <p className="text-slate-body text-[14px] leading-relaxed">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-24 text-center reveal border-t pt-16" style={{ borderColor: 'rgba(8,60,98,0.1)' }}>
            <h3 className="text-[28px] font-bold font-heading text-slate-heading mb-4">Not sure which solution fits your business?</h3>
            <p className="text-slate-body text-[16px] mb-8 max-w-[600px] mx-auto">
              Our solutions architects can perform a comprehensive audit of your current infrastructure and recommend a strategic modernization path.
            </p>
            <Link href="/contact" className="btn-primary">
              <span className="btn-icon"><i className="ri-arrow-right-line" /></span>
              Schedule an Audit
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
