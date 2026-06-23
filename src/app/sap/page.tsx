import type { Metadata } from 'next';
import Link from 'next/link';
import PageBanner from '@/components/PageBanner';

export const metadata: Metadata = {
  title: 'SAP Services',
  description: 'Unlock enterprise value with SVM\'s end-to-end SAP implementation, consulting, and support services.',
};

const sapServices = [
  { icon: 'ri-settings-4-line', title: 'SAP Implementation', desc: 'Full-cycle implementation of SAP ERP and S/4HANA tailored to your specific industry requirements and operational workflows.' },
  { icon: 'ri-refresh-line', title: 'SAP Migration & Upgrades', desc: 'Seamlessly migrate legacy systems to SAP S/4HANA with zero data loss and minimal business disruption.' },
  { icon: 'ri-customer-service-2-line', title: 'SAP Application Management', desc: 'Comprehensive AMS providing 24/7 support, troubleshooting, and continuous enhancement of your SAP landscape.' },
  { icon: 'ri-cloud-line', title: 'SAP Cloud Hosting', desc: 'Deploy and manage your SAP environment on AWS, Azure, or private cloud for ultimate scalability and disaster recovery.' },
  { icon: 'ri-shake-hands-line', title: 'SAP Consulting', desc: 'Strategic advisory services to help you build an SAP roadmap that aligns with your long-term business objectives.' },
  { icon: 'ri-code-s-slash-line', title: 'SAP Custom Development', desc: 'ABAP and Fiori development to create custom modules, reports, and user interfaces that bridge standard SAP gaps.' },
  { icon: 'ri-link-m', title: 'SAP Integration Services', desc: 'Connect SAP with third-party applications, CRM systems, and external databases using SAP PI/PO and Cloud Platform Integration.' },
  { icon: 'ri-shield-keyhole-line', title: 'SAP Security & GRC', desc: 'Ensure compliance and protect sensitive business data with robust SAP security roles and Governance, Risk, and Compliance solutions.' },
  { icon: 'ri-graduation-cap-line', title: 'SAP Corporate Training', desc: 'Role-based end-user training programs to ensure high adoption rates and maximize your SAP ROI.' },
];

export default function SAPPage() {
  return (
    <>
      <PageBanner title="Enterprise" highlight="SAP Services" crumb="SAP" />

      <section className="py-24" style={{ background: '#F5F4EF' }}>
        <div className="container">
          <div className="split-section mb-24 reveal">
            <div>
              <span className="section-tag">Enterprise Resource Planning</span>
              <h2 className="section-title">Unlock Business Value With <span className="gradient-text">SAP Solutions</span></h2>
              <p className="text-slate-body text-[16px] leading-relaxed mb-6">
                In today's fast-paced digital economy, an optimized SAP environment is the difference between a business that merely survives and one that scales exponentially.
              </p>
              <p className="text-slate-body text-[16px] leading-relaxed mb-8">
                SVM offers end-to-end SAP services — from initial consulting and architecture design to full-scale S/4HANA implementation and 24/7 post-go-live support. We help enterprises streamline operations, gain real-time analytics, and build resilient supply chains.
              </p>
              
              <div className="flex gap-4">
                <div className="flex items-center gap-2 text-[14px] font-bold text-navy bg-navy/10 px-4 py-2 rounded-full border border-navy/20">
                  <i className="ri-check-double-line" /> Certified SAP Partners
                </div>
                <div className="flex items-center gap-2 text-[14px] font-bold text-navy bg-navy/10 px-4 py-2 rounded-full border border-navy/20">
                  <i className="ri-check-double-line" /> Proven Methodology
                </div>
              </div>
            </div>

            <div className="relative min-h-[400px] rounded-4xl overflow-hidden flex items-center justify-center reveal-right" style={{ background: '#D4E8F2' }}>
              <div className="blob blob-pink" style={{ width: 300, height: 300, opacity: 0.6 }} />
              {/* SAP Abstract Graphic */}
              <div className="relative z-10 w-[80%] max-w-[340px] bg-white rounded-3xl p-8 shadow-card border border-[rgba(8,60,98,0.1)]">
                <div className="flex justify-center gap-2 mb-6">
                  <div className="w-16 h-16 rounded-xl bg-navy flex items-center justify-center text-white text-[28px]"><i className="ri-box-3-line" /></div>
                  <div className="w-16 h-16 rounded-xl bg-powder flex items-center justify-center text-navy text-[28px]"><i className="ri-bar-chart-box-line" /></div>
                </div>
                <div className="space-y-3">
                  <div className="h-2 w-full bg-powder rounded-full" />
                  <div className="h-2 w-4/5 bg-powder rounded-full" />
                  <div className="h-2 w-5/6 bg-powder rounded-full" />
                  <div className="h-2 w-2/3 bg-powder rounded-full" />
                </div>
                <div className="mt-6 pt-6 border-t border-navy/10 text-center">
                  <div className="text-[12px] font-bold uppercase tracking-widest text-navy">S/4HANA Ready</div>
                </div>
              </div>
            </div>
          </div>

          {/* SAP Services Grid */}
          <div className="text-center mb-16 reveal">
            <h2 className="section-title">Our SAP <span className="gradient-text">Capabilities</span></h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 reveal-stagger">
            {sapServices.map(s => (
              <div key={s.title} className="card hover-float">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5" style={{ background: '#083C62', color: 'white' }}>
                  <i className={`${s.icon} text-[22px]`} />
                </div>
                <h3 className="card-title">{s.title}</h3>
                <p className="card-desc">{s.desc}</p>
              </div>
            ))}
          </div>

          {/* Why SVM for SAP */}
          <div className="mt-24 p-10 md:p-16 rounded-4xl reveal relative overflow-hidden" style={{ background: '#083C62' }}>
            <div className="blob blob-blue" style={{ width: 400, height: 400, top: '-100px', right: '-100px', opacity: 0.1 }} />
            <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-[32px] md:text-[38px] font-extrabold font-heading text-white mb-6">Why Choose SVM for SAP?</h3>
                <p className="text-white/80 text-[16px] leading-relaxed mb-8">
                  We don't just install software; we engineer business transformation. Our consultants bring decades of industry-specific experience to ensure your SAP investment delivers measurable ROI.
                </p>
                <Link href="/contact" className="btn-primary" style={{ background: 'white', color: '#083C62' }}>
                  <span className="btn-icon" style={{ background: 'rgba(8,60,98,0.1)' }}><i className="ri-arrow-right-line" /></span>
                  Speak with an SAP Expert
                </Link>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { n: '50+', l: 'SAP Go-Lives' },
                  { n: '100+', l: 'Certified Consultants' },
                  { n: '24/7', l: 'AMS Support' },
                  { n: '0', l: 'Data Loss Incidents' },
                ].map(stat => (
                  <div key={stat.l} className="bg-white/10 border border-white/20 rounded-2xl p-6 text-center backdrop-blur-sm">
                    <div className="text-[32px] font-extrabold font-heading text-white mb-1">{stat.n}</div>
                    <div className="text-[12px] uppercase tracking-wider text-white/70">{stat.l}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </section>
    </>
  );
}
