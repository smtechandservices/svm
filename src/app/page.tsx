import Link from 'next/link';
import HeroSlider from '@/components/HeroSlider';
import SpecializationTabs from '@/components/SpecializationTabs';
import StatsSection from '@/components/StatsSection';
import TestimonialsSlider from '@/components/TestimonialsSlider';

const featuredServices = [
  {
    icon: 'ri-mail-send-line',
    title: 'Email Solutions',
    desc: 'Effective email communication is the cornerstone of modern business operations. Our solutions guarantee delivery speed, filtering, and enterprise encryption.',
  },
  {
    icon: 'ri-shield-flash-line',
    title: 'Backup & Disaster Recovery',
    desc: "In today's fast-paced digital market, data is your gold. A sudden hardware failure can be costly. We implement redundant hot-standby architectures.",
  },
  {
    icon: 'ri-router-line',
    title: 'Network Design & Setup',
    desc: 'A well-designed network is the backbone of any enterprise, enabling fast, low-latency, and safe database replication and internal communication.',
  },
  {
    icon: 'ri-server-line',
    title: 'Relocation & Migration',
    desc: 'Relocating your IT infrastructure, server clusters, or database storage to a new datacenter, building, or cloud provider with zero user downtime.',
  },
];

const processSteps = [
  { n: '1', title: 'Brainstorming', desc: 'Understanding your system load, scaling requirements, security standards, and future capacity needs.' },
  { n: '2', title: 'Design & Architecture', desc: 'Drafting logical and physical topologies, redundancy maps, failover trees, and hardware list specs.' },
  { n: '3', title: 'Deployment', desc: 'Configuring high-density servers, firewalls, switches, databases, and loading operating systems.' },
  { n: '4', title: 'Optimization & SEO', desc: 'Final verification testing, response audits, and setting up remote tracking metrics for performance.' },
];

const blogPosts = [
  {
    icon: 'ri-article-line',
    iconColor: 'text-accent1',
    date: 'January 11, 2026',
    title: 'How Business IT Consulting Drives Corporate Valuation',
    desc: 'Modern companies are only as fast as their data pathways. Discover how optimizing storage access, network hops, and hypervisor allocations directly improves company efficiency and ROI.',
  },
  {
    icon: 'ri-shield-keyhole-line',
    iconColor: 'text-accent2',
    date: 'January 05, 2026',
    title: "A Beginner's Guide to IT/OT Convergence in Factories",
    desc: 'Bridging information technology with industrial hardware is essential for real-time monitoring. Learn about edge devices, gateway protocols, and safety measures during integration.',
  },
];

export default function HomePage() {
  return (
    <>
      <HeroSlider />

      {/* Featured Services */}
      <section className="py-24">
        <div className="container">
          <div className="max-w-[650px] mx-auto text-center mb-16 reveal">
            <span className="section-tag">Services Portfolio</span>
            <h2 className="section-title">What Our Company <span className="gradient-text">Does For You</span></h2>
            <p className="text-slate-500 text-[16px]">
              We offer end-to-end IT services, network infrastructure design, database management, and active support models custom tailored for high-scale enterprise needs.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 reveal-stagger">
            {featuredServices.map(s => (
              <div key={s.title} className="card-glass">
                <div className="card-icon"><i className={s.icon} /></div>
                <h3 className="card-title">{s.title}</h3>
                <p className="card-desc mb-6">{s.desc}</p>
                <Link href="/services" className="inline-flex items-center gap-2 font-semibold text-[14px] text-accent1 hover:gap-3 transition-all duration-300">
                  Learn More <i className="ri-arrow-right-line" />
                </Link>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link href="/services" className="btn-primary">View All Services</Link>
          </div>
        </div>
      </section>

      {/* Specialization Tabs */}
      <section className="py-24 bg-white">
        <div className="container">
          <div className="max-w-[650px] mx-auto text-center mb-4 reveal">
            <span className="section-tag">Core Specialization</span>
            <h2 className="section-title">Our Expertise And <span className="gradient-text">Specialization</span></h2>
            <p className="text-slate-500 text-[16px]">
              We bring decades of cumulative experience across hardware architectures, virtualization stacks, hypervisors, and data security standards.
            </p>
          </div>
          <SpecializationTabs />
        </div>
      </section>

      {/* Process */}
      <section className="py-24">
        <div className="container">
          <div className="max-w-[650px] mx-auto text-center mb-16 reveal">
            <span className="section-tag">How We Work</span>
            <h2 className="section-title">Our Robust <span className="gradient-text">Delivery Model</span></h2>
            <p className="text-slate-500 text-[16px]">
              Save time and operational costs with our battle-tested engineering methodology that covers concepts to active deployment support.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 reveal-stagger">
            {processSteps.map(s => (
              <div key={s.n} className="card-glass pt-10 relative">
                <div className="process-step">{s.n}</div>
                <h4 className="text-[18px] font-bold font-heading text-slate-900 mb-3">{s.title}</h4>
                <p className="card-desc">{s.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link href="/about" className="btn-secondary">Learn More About Process</Link>
          </div>
        </div>
      </section>

      {/* Stats */}
      <StatsSection />

      {/* Testimonials */}
      <section className="py-24">
        <div className="container">
          <div className="max-w-[650px] mx-auto text-center mb-16 reveal">
            <span className="section-tag">Testimonials</span>
            <h2 className="section-title">See What Others <span className="gradient-text">Are Saying</span></h2>
            <p className="text-slate-500 text-[16px]">
              Don&apos;t just take our word for it. Read reviews from chief executives, project managers, and business operators who partner with us.
            </p>
          </div>
          <TestimonialsSlider />
        </div>
      </section>

      {/* Blog */}
      <section className="py-24 bg-white">
        <div className="container">
          <div className="max-w-[650px] mx-auto text-center mb-16 reveal">
            <span className="section-tag">Insights & Blog</span>
            <h2 className="section-title">Ultimate Insights <span className="gradient-text">& Inspiration</span></h2>
            <p className="text-slate-500 text-[16px]">
              Stay ahead of the curve with technological articles, guides, and strategic discussions written by our lead engineers.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 reveal-stagger">
            {blogPosts.map(b => (
              <div key={b.title} className="card-glass flex flex-col">
                <div className="blog-img-wrapper">
                  <i className={`${b.icon} ${b.iconColor} text-5xl`} />
                </div>
                <span className="text-[13px] font-semibold text-accent2 mb-3 block">
                  <i className="ri-calendar-line mr-1" /> {b.date}
                </span>
                <h3 className="card-title">{b.title}</h3>
                <p className="card-desc mb-6 flex-1">{b.desc}</p>
                <a href="#" className="inline-flex items-center gap-2 font-semibold text-[14px] text-accent1 hover:gap-3 transition-all duration-300">
                  Read Article <i className="ri-arrow-right-line" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
