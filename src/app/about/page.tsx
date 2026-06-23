import type { Metadata } from 'next';
import PageBanner from '@/components/PageBanner';
import StatsSection from '@/components/StatsSection';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Learn about SVM, our mission, consulting excellence, and our team of IT infrastructure experts.',
};

export default function AboutPage() {
  return (
    <>
      <PageBanner title="About" highlight="SVM" crumb="About Us" />

      {/* ── Intro ──────────────────────────────────────────────── */}
      <section className="py-24" style={{ background: '#F5F4EF' }}>
        <div className="container split-section">
          <div className="reveal">
            <span className="section-tag">Who We Are</span>
            <h2 className="section-title">Innovate To Transform Your <span className="gradient-text">IT Infrastructure</span></h2>
            <p className="text-slate-body text-[16px] leading-relaxed mb-6">
              From servers to mainframes to storage systems and software, we lay the foundation for the next-gen IT architecture and infrastructure for businesses.
            </p>
            <p className="text-slate-body text-[16px] leading-relaxed mb-8">
              Data centre infrastructure is all the physical components that make up a data centre. It includes servers, storage arrays, networking equipment, power, and cooling systems.
            </p>
            <ul className="space-y-4 mb-8">
              {[
                'Expert system architecture designers',
                'ISO certified security workflows',
                'Pan-India service delivery network',
              ].map(item => (
                <li key={item} className="flex items-center gap-3 font-semibold text-[15px] text-slate-heading">
                  <i className="ri-check-line text-navy text-[20px]" /> {item}
                </li>
              ))}
            </ul>
            <Link href="/contact" className="btn-primary">
              <span className="btn-icon"><i className="ri-arrow-right-line" /></span>
              Partner With Us
            </Link>
          </div>

          <div 
            className="relative min-h-[400px] rounded-4xl overflow-hidden flex items-center justify-center reveal-right bg-cover bg-center" 
            style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1000)' }}
          >
            <div className="absolute inset-0 bg-[#083C62]/40" />
            <div className="relative z-10 w-[80%] max-w-[340px] bg-white rounded-3xl p-8 shadow-card border border-[rgba(8,60,98,0.1)] text-center">
              <i className="ri-building-4-line text-[48px] text-navy mb-4 block" />
              <h3 className="font-heading font-extrabold text-[24px] text-slate-heading mb-2">Our Mission</h3>
              <p className="text-slate-body text-[14px] leading-relaxed">
                To build resilient, high-performance IT environments that enable businesses to scale without limits or security compromises.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Stats ──────────────────────────────────────────────── */}
      <StatsSection />

      {/* ── Consulting Excellence ──────────────────────────────── */}
      <section className="py-24" style={{ background: '#D4E8F2' }}>
        <div className="container">
          <div className="max-w-[700px] mx-auto text-center mb-16 reveal">
            <span className="section-tag">Our Approach</span>
            <h2 className="section-title">Consulting <span className="gradient-text">Excellence</span></h2>
            <p className="text-slate-body text-[16px] leading-relaxed">
              Our consulting process begins with a thorough assessment of your current IT infrastructure, workflows, and pain points.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 reveal-stagger">
            {[
              { icon: 'ri-customer-service-2-line', title: '24/7 Full Service Support', desc: 'Round-the-clock monitoring and remote support ensures anomalies are resolved before impacting users.' },
              { icon: 'ri-flashlight-line', title: 'Immediate Response', desc: 'Guaranteed SLA response times with active network administrators who solve system blocks quickly.' },
              { icon: 'ri-message-3-line', title: 'Easy to Approach us', desc: 'No complex support tickets. Talk directly to senior systems designers who understand your layout.' },
            ].map(c => (
              <div key={c.title} className="card text-center hover-float">
                <div className="w-16 h-16 rounded-full mx-auto mb-6 flex items-center justify-center text-white text-[24px]" style={{ background: '#083C62' }}>
                  <i className={c.icon} />
                </div>
                <h3 className="card-title">{c.title}</h3>
                <p className="card-desc">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Leadership Quotes ──────────────────────────────────── */}
      <section className="py-24" style={{ background: '#F5F4EF' }}>
        <div className="container">
          <div className="text-center mb-16 reveal">
            <span className="section-tag">Leadership</span>
            <h2 className="section-title">Message from the <span className="gradient-text">Founders</span></h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 reveal-stagger">
            <div className="card-navy">
              <div className="text-[60px] text-white/20 font-serif leading-none absolute top-6 left-6">"</div>
              <p className="text-[16px] text-white/90 leading-relaxed italic relative z-10 mb-8 pt-4">
                Our financial strategy focuses on transparency, integrity, and long-term value creation. We aim to maintain resilience, improve efficiency, and invest smartly to stay future-ready and ensure sustainable success in an ever-changing business environment.
              </p>
              <div className="flex items-center gap-4 border-t border-white/20 pt-6">
                <div className="w-12 h-12 rounded-full bg-white text-navy flex items-center justify-center font-bold text-[18px]">R</div>
                <div>
                  <div className="font-bold text-white text-[16px]">Rajesh Gupta</div>
                  <div className="text-white/70 text-[13px]">CFO</div>
                </div>
              </div>
            </div>

            <div className="card-navy">
              <div className="text-[60px] text-white/20 font-serif leading-none absolute top-6 left-6">"</div>
              <p className="text-[16px] text-white/90 leading-relaxed italic relative z-10 mb-8 pt-4">
                We believe in open and consistent communication across all levels. This reduces misunderstandings, enhances decision-making, and ensures alignment within teams, helping us maintain a collaborative culture that drives success throughout the entire organization.
              </p>
              <div className="flex items-center gap-4 border-t border-white/20 pt-6">
                <div className="w-12 h-12 rounded-full bg-white text-navy flex items-center justify-center font-bold text-[18px]">R</div>
                <div>
                  <div className="font-bold text-white text-[16px]">RK Sharma</div>
                  <div className="text-white/70 text-[13px]">Director</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
