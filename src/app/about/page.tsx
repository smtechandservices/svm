import type { Metadata } from 'next';
import Link from 'next/link';
import PageBanner from '@/components/PageBanner';
import StatsSection from '@/components/StatsSection';

export const metadata: Metadata = {
  title: 'About Us',
  description:
    'Learn about our mission, IT/OT convergence expertise, team background, and consulting methodology at SVM Projects and Consulting.',
};

const pillars = [
  {
    icon: 'ri-customer-service-2-line',
    title: '24/7 Full Support',
    desc: 'We offer continuous round-the-clock monitoring and remote support, ensuring minor database anomalies are solved before impacting users.',
  },
  {
    icon: 'ri-flashlight-line',
    title: 'Immediate Response',
    desc: 'With a guaranteed SLA response time, our active network administrators solve system blocks quickly to maintain business operations.',
  },
  {
    icon: 'ri-message-3-line',
    title: 'Easy to Approach Us',
    desc: 'No complex support tickets or generic bots. Talk directly to senior systems designers who understand your exact network layout.',
  },
];

const processSteps = [
  { n: '1', title: 'Brainstorming', desc: 'Conducting scoping interviews to understand core challenges and requirements.' },
  { n: '2', title: 'Design Concept', desc: 'Creating architectural diagrams, wireframes, and database schema diagrams.' },
  { n: '3', title: 'Development', desc: 'Setting up codebases, deploying network components, and launching servers.' },
  { n: '4', title: 'Optimization', desc: 'Executing load tests, security reviews, and index optimizations.' },
];

export default function AboutPage() {
  return (
    <>
      <PageBanner title="About Our" highlight="Company" crumb="About Us" />

      {/* Who We Are */}
      <section className="py-24">
        <div className="container grid md:grid-cols-2 gap-12 items-center reveal">
          <div>
            <span className="section-tag">Who We Are</span>
            <h2 className="section-title">
              Bridging the Gap Between <span className="gradient-text">IT & Operations</span>
            </h2>
            <p className="text-slate-500 text-[16px] leading-loose mb-5">
              <strong className="text-slate-900">SVM Projects and Consulting</strong> was established to empower modern enterprises with seamless technological integrations. We specialize in information system planning, database clustering, networking setups, and cybersecurity strategies.
            </p>
            <p className="text-slate-500 text-[16px] leading-loose mb-8">
              Our core expertise includes <strong className="text-slate-900">IT/OT Convergence</strong> — integrating standard business information software (IT) with industrial physical equipment and machinery (OT). This integration allows business managers to gain real-time analytics, automate assembly logs, and secure high-risk infrastructure pathways.
            </p>
            <Link href="/contact" className="btn-primary">Connect with Experts</Link>
          </div>
          <div
            className="card-glass flex items-center justify-center relative"
            style={{ minHeight: '350px' }}
          >
            <div className="glow-circle" />
            <div className="text-center z-10">
              <i className="ri-government-line text-accent1 block mb-5" style={{ fontSize: '80px' }} />
              <h3 className="card-title">ISO Certified IT Provider</h3>
              <p className="card-desc max-w-[300px] mx-auto">
                Delivering enterprise grade uptime, reliability, and security since 2012.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-24 bg-white">
        <div className="container">
          <div className="max-w-[650px] mx-auto text-center mb-16 reveal">
            <span className="section-tag">Consulting Excellence</span>
            <h2 className="section-title">
              Best Pathway To Our <span className="gradient-text">Clients</span>
            </h2>
            <p className="text-slate-500 text-[16px]">
              Our consulting process begins with a thorough, end-to-end assessment of your current IT infrastructure, workflows, bottlenecks, and security gaps.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 reveal-stagger">
            {pillars.map(p => (
              <div key={p.title} className="card-glass">
                <div className="card-icon"><i className={p.icon} /></div>
                <h3 className="card-title">{p.title}</h3>
                <p className="card-desc">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-24">
        <div className="container">
          <div className="max-w-[650px] mx-auto text-center mb-16 reveal">
            <span className="section-tag">Methodology</span>
            <h2 className="section-title">
              Our Step-by-Step <span className="gradient-text">Process Map</span>
            </h2>
            <p className="text-slate-500 text-[16px]">
              We follow a rigorous methodology to ensure projects are delivered on time, within budget, and meeting performance expectations.
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
        </div>
      </section>

      {/* Stats */}
      <StatsSection />
    </>
  );
}
