import type { Metadata } from 'next';
import Link from 'next/link';
import PageBanner from '@/components/PageBanner';

export const metadata: Metadata = {
  title: 'SAP Services',
  description:
    'Expert SAP S/4HANA consulting, basis administration, migration, performance tuning, and ongoing support services from SVM Projects and Consulting.',
};

const tags = ['SAP S/4HANA', 'SAP ECC', 'SAP HANA DB', 'SAP BW/BI', 'SAP Basis', 'SAP Fiori', 'ABAP Development', 'SAP Ariba'];

const services = [
  { icon: 'ri-install-line', title: 'Implementation & Migration', desc: 'Greenfield and brownfield SAP S/4HANA implementations, system conversions from ECC 6.x, and selective data migration with full cutover planning.' },
  { icon: 'ri-server-2-line', title: 'SAP Basis Administration', desc: 'Day-to-day system management: transport management, kernel patching, support packs, background job scheduling, and user access administration.' },
  { icon: 'ri-speed-up-line', title: 'Performance Tuning', desc: 'Work process analysis, buffer sizing, database statistics, ABAP runtime traces, SQL optimizer hints, and OS-level kernel parameter reviews.' },
  { icon: 'ri-database-2-line', title: 'HANA Database Services', desc: 'SAP HANA installation, scale-out configuration, multi-tenant database container (MDC) setup, backup/recovery, and system replication for HA/DR.' },
  { icon: 'ri-arrow-up-circle-line', title: 'Upgrades & Patching', desc: 'SAP enhancement pack upgrades, SP stacks, kernel updates, and Unicode conversions — all executed with minimal disruption to live operations.' },
  { icon: 'ri-shield-star-line', title: 'SAP Security & Authorisation', desc: 'Role design and SoD analysis, GRC Access Control configuration, audit-ready authority-check remediation, and single sign-on setup.' },
  { icon: 'ri-cloud-line', title: 'SAP Cloud Integration', desc: 'SAP Integration Suite (CPI) flows, API Management, S/4HANA Cloud extensions, and Ariba/SuccessFactors connectivity via SAP BTP.' },
  { icon: 'ri-bar-chart-grouped-line', title: 'SAP BW / Analytics', desc: 'BW on HANA and BW/4HANA data modelling, query design, process chain scheduling, and SAP Analytics Cloud dashboard delivery.' },
  { icon: 'ri-customer-service-2-line', title: 'SAP Managed Services (AMS)', desc: 'Ongoing application management support: incident resolution, change requests, proactive monitoring via Solution Manager / Focused Run, and SLA reporting.' },
];

const advantages = [
  { icon: 'ri-trophy-line', title: 'SAP Certified Consultants', desc: 'All SAP team members hold current SAP certifications across Basis, ABAP, and functional modules.' },
  { icon: 'ri-time-line', title: '24 × 7 Support Coverage', desc: 'Round-the-clock monitoring and on-call incident response ensures maximum SAP uptime.' },
  { icon: 'ri-git-pull-request-line', title: 'Proven Methodology', desc: 'SAP Activate and Agile hybrid project frameworks ensure predictable delivery and scope control.' },
  { icon: 'ri-shield-check-line', title: 'Compliance-Ready', desc: 'All implementations adhere to GDPR, ISO 27001, and SOC 2 data-handling requirements by design.' },
];

export default function SapPage() {
  return (
    <>
      <PageBanner title="SAP" highlight="Services" crumb="SAP Services" />

      {/* Intro */}
      <section className="py-24">
        <div className="container grid md:grid-cols-2 gap-12 items-center reveal">
          <div>
            <span className="section-tag">Enterprise ERP</span>
            <h2 className="section-title">
              End-to-End <span className="gradient-text">SAP Expertise</span>
            </h2>
            <p className="text-slate-500 text-[16px] leading-loose mb-5">
              At <strong className="text-slate-900">SVM Projects and Consulting</strong>, our certified SAP consultants deliver complete lifecycle management — from greenfield S/4HANA implementations and system conversions to ongoing Basis administration, performance tuning, and strategic upgrades.
            </p>
            <p className="text-slate-500 text-[16px] leading-loose mb-8">
              We work across SAP ECC, SAP S/4HANA, SAP BW/BI, and SAP HANA database layers, ensuring your enterprise systems run at peak efficiency with maximum uptime.
            </p>
            <div className="flex flex-wrap gap-2.5">
              {tags.map(t => (
                <span key={t} className="tag">{t}</span>
              ))}
            </div>
          </div>
          <div className="card-glass flex items-center justify-center" style={{ minHeight: '320px' }}>
            <div className="text-center">
              <i className="ri-flow-chart text-accent1 block mb-5" style={{ fontSize: '80px' }} />
              <h3 className="card-title">SAP Certified Partner</h3>
              <p className="card-desc max-w-[260px] mx-auto">Trusted SAP advisory and managed services since 2012.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-24 bg-white">
        <div className="container">
          <div className="max-w-[650px] mx-auto text-center mb-16 reveal">
            <span className="section-tag">Core Offerings</span>
            <h2 className="section-title">
              Our SAP <span className="gradient-text">Service Portfolio</span>
            </h2>
            <p className="text-slate-500 text-[16px]">
              Comprehensive SAP services designed to maximise the value of your ERP investment.
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
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24">
        <div className="container">
          <div className="max-w-[650px] mx-auto text-center mb-16 reveal">
            <span className="section-tag">Why Choose Us</span>
            <h2 className="section-title">
              The <span className="gradient-text">SVM SAP Advantage</span>
            </h2>
            <p className="text-slate-500 text-[16px]">
              Our consultants combine deep functional knowledge with Basis and ABAP technical skills to deliver holistic SAP value.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 reveal-stagger">
            {advantages.map(a => (
              <div key={a.title} className="card-glass text-center">
                <i className={`${a.icon} text-accent1 block mb-4`} style={{ fontSize: '40px' }} />
                <h4 className="font-heading text-[18px] font-bold text-slate-900 mb-3">{a.title}</h4>
                <p className="text-slate-500 text-[14px] leading-relaxed">{a.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA banner */}
      <section
        className="py-20 border-y border-black/[0.08]"
        style={{ background: 'linear-gradient(135deg, rgba(14,165,233,0.08) 0%, rgba(16,185,129,0.05) 100%)' }}
      >
        <div className="container text-center reveal">
          <h2 className="section-title">
            Ready to transform your <span className="gradient-text">SAP landscape?</span>
          </h2>
          <p className="text-slate-500 text-[17px] max-w-[580px] mx-auto my-5">
            Talk to our SAP architects today for a free 30-minute scoping call. No commitment, just clarity.
          </p>
          <Link href="/contact" className="btn-primary" style={{ padding: '16px 44px', fontSize: '17px' }}>
            Schedule a Free Consultation
          </Link>
        </div>
      </section>
    </>
  );
}
