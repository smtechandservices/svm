import type { Metadata } from 'next';
import PageBanner from '@/components/PageBanner';

export const metadata: Metadata = {
  title: 'Solutions',
  description:
    'Discover our enterprise technology solutions including SD-WAN, Cloud infrastructure, security solutions, IoT deployment, and unified communications.',
};

const groups = [
  {
    icon: 'ri-swap-box-line',
    heading: 'Connectivity & Collaboration',
    cols: 3,
    items: [
      { title: 'Networking Solutions', desc: 'Active routing, switching, structured cabling configurations, and packet priority audits for lightning fast internal data transfers.' },
      { title: 'SD-WAN Solutions', desc: 'Software Defined WAN to securely link multiple remote branches or corporate offices directly to cloud servers, reducing ISP dependencies.' },
      { title: 'SDN (Software Defined Net)', desc: 'Enabling administrators to spin up, scale down, and route virtual local networks from a single, centralized programmatic dashboard.' },
      { title: 'Unified Communications', desc: 'Integrating chat, VoIP, video conferencing, and team files in a single, high-availability collaboration environment.' },
      { title: 'Wireless & Mobility', desc: 'Installing building-wide high-speed Wi-Fi 6 grids, setting up access logs, and securing roaming tablets and mobile devices.' },
      { title: 'Contact Centre Solutions', desc: 'Interactive Voice Response (IVR), automatic ticketing routing, and CRM integrations to speed up customer help channels.' },
    ],
  },
  {
    icon: 'ri-server-line',
    heading: 'Infrastructure & Virtualization',
    cols: 3,
    items: [
      { title: 'Data Center Architectures', desc: 'Physical space planning, server racks, backup generators, cooling, failover channels, and physical access controls.' },
      { title: 'Server and Storage', desc: 'Deploying high-density blade servers, storage networks (SAN/NAS), RAID backups, and auto-archival pipelines.' },
      { title: 'IT Virtualization Services', desc: 'Consolidating workload pools onto fewer physical hosts. Lower power consumption while boosting scalability.' },
    ],
  },
  {
    icon: 'ri-shield-keyhole-line',
    heading: 'Cybersecurity & IoT',
    cols: 2,
    items: [
      { title: 'Security Solutions', desc: 'Zero-trust authentication, edge firewalls, anti-ransomware scanning, and 24/7 security logging across all enterprise hosts.' },
      { title: 'IoT (Internet of Things)', desc: 'Linking operational sensors, barcode logs, smart cameras, and assembly lines to central IT analysis databases.' },
    ],
  },
  {
    icon: 'ri-slideshow-line',
    heading: 'Workspace & Applications',
    cols: 4,
    items: [
      { title: 'Boardroom Systems', desc: 'Smart projectors, acoustic setups, and seamless sharing hubs.' },
      { title: 'Cloud Solution', desc: 'Migration to AWS, GCP, Azure, or secure private cloud environments.' },
      { title: 'Application Solutions', desc: 'Custom middleware development and API linkages.' },
      { title: 'Enterprise Solution', desc: 'ERP setup, SAP maintenance, and large database linkages.' },
    ],
  },
];

const colsClass: Record<number, string> = {
  2: 'md:grid-cols-2',
  3: 'md:grid-cols-3',
  4: 'sm:grid-cols-2 lg:grid-cols-4',
};

export default function SolutionsPage() {
  return (
    <>
      <PageBanner title="Enterprise" highlight="Solutions" crumb="Solutions" />

      <section className="py-24">
        <div className="container">
          <div className="max-w-[650px] mx-auto text-center mb-16 reveal">
            <span className="section-tag">Business Architectures</span>
            <h2 className="section-title">
              Scalable Enterprise <span className="gradient-text">Technological Frameworks</span>
            </h2>
            <p className="text-slate-500 text-[16px]">
              Our solutions bridge standard physical workspaces, software assets, storage systems, and cloud hypervisors to drive business success.
            </p>
          </div>

          {groups.map(g => (
            <div key={g.heading} className="mb-20">
              <h2 className="text-[28px] font-bold font-heading text-slate-900 flex items-center gap-3 border-b border-black/[0.08] pb-3 mb-8">
                <i className={`${g.icon} text-accent1`} />
                {g.heading}
              </h2>
              <div className={`grid gap-8 reveal-stagger ${colsClass[g.cols]}`}>
                {g.items.map(item => (
                  <div key={item.title} className="card-glass">
                    <h3 className="card-title">{item.title}</h3>
                    <p className="card-desc">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
