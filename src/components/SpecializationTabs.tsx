'use client';
import Link from 'next/link';
import { useState } from 'react';

const tabs = [
  {
    id: 'compute',
    label: 'Compute',
    icon: 'ri-cpu-line',
    title: 'Enterprise Compute Systems',
    desc: 'At SVM Projects and Consulting, we understand the importance of compute power and high scalability. Our IT infrastructure products and custom compute designs are optimized for heavy virtualization and transaction systems.',
    items: [
      'High-density Blade & Rack Servers',
      'Cloud Hypervisor Integration (VMware, Proxmox, Hyper-V)',
      'Automatic Load Balancing & Scalability',
    ],
  },
  {
    id: 'storage',
    label: 'Data Storage',
    icon: 'ri-database-2-line',
    title: 'Highly Available Data Storage',
    desc: 'Keep your storage accessible and secure at all times. We configure enterprise storage networks (SAN/NAS) featuring multi-pathing, auto-tiering, and rapid snapshot restoration.',
    items: [
      'All-Flash arrays and hybrid SSD arrays',
      'Redundant backup storage clusters',
      'Compliance-based archiving & retrieval',
    ],
  },
  {
    id: 'security',
    label: 'Security',
    icon: 'ri-shield-user-line',
    title: 'Zero-Trust Cybersecurity',
    desc: 'While digital transformation is a necessity, system security is the main concern. We constantly verify the integrity of your storage and network paths to protect from ransomware, intrusions, and phishing threats.',
    items: [
      'End-point protection and firewall audits',
      'Multi-factor authentication (MFA) rollouts',
      '24/7 Security Operations Center (SOC) logs',
    ],
  },
  {
    id: 'networking',
    label: 'Networking',
    icon: 'ri-wifi-line',
    title: 'Next-Gen Network Engineering',
    desc: 'We design, develop, install, and manage information networks for growing businesses. We work closely with you to provide scalable, software-defined, and cost-effective networking topologies.',
    items: [
      'SDN (Software Defined Networking)',
      'SD-WAN configuration for multi-branch sites',
      'Multi-Gigabit Fiber & PoE Switching',
    ],
  },
  {
    id: 'kvm',
    label: 'KVM Solutions',
    icon: 'ri-keyboard-box-line',
    title: 'KVM & Workspace Ergonomics',
    desc: 'Security and reliability are vital for critical operations rooms. With a wide range of KVM solutions, matrices, and IT peripherals, we create integrated multi-function control centers.',
    items: [
      'Secure KVM matrices for control rooms',
      'Desktop virtualization and workspace consolidation',
      'Ergonomic hardware switching solutions',
    ],
  },
  {
    id: 'infra',
    label: 'Infrastructure',
    icon: 'ri-server-fill',
    title: 'Innovating Infrastructure',
    desc: 'From server racks to mainframes to backup generators and cooling systems, we design the core framework of next-gen datacenters. Ensure physical safety, power efficiency, and redundant routing.',
    items: [
      'Smart rack systems and structural cabling',
      'Energy-efficient cooling & UPS planning',
      'Facility access logging & physical security',
    ],
  },
];

export default function SpecializationTabs() {
  const [active, setActive] = useState('compute');
  const tab = tabs.find(t => t.id === active)!;

  return (
    <div className="mt-10">
      {/* Tab buttons */}
      <div className="flex justify-center gap-3 mb-12 flex-wrap">
        {tabs.map(t => (
          <button
            key={t.id}
            className={`tab-btn${active === t.id ? ' active' : ''}`}
            onClick={() => setActive(t.id)}
          >
            {t.label}
          </button>
        ))}
      </div>

      {/* Active panel */}
      <div className="card-glass grid md:grid-cols-2 gap-8 items-center animate-fade-in" key={active}>
        <div>
          <h3 className="font-heading text-[32px] font-bold text-slate-900 mb-6">{tab.title}</h3>
          <p className="text-slate-500 text-[16px] leading-loose mb-8">{tab.desc}</p>
          <ul className="space-y-3 mb-8">
            {tab.items.map(item => (
              <li key={item} className="flex items-center gap-2 text-slate-700">
                <i className="ri-checkbox-circle-fill text-accent1" /> {item}
              </li>
            ))}
          </ul>
          <Link href="/contact" className="btn-primary">Get Started</Link>
        </div>
        <div className="flex items-center justify-center">
          <i className={`${tab.icon} text-accent1`} style={{ fontSize: '180px', opacity: 0.15 }} />
        </div>
      </div>
    </div>
  );
}
