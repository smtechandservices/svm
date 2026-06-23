import Link from 'next/link';
import HeroSlider from '@/components/HeroSlider';
import SpecializationTabs from '@/components/SpecializationTabs';
import StatsSection from '@/components/StatsSection';
import TestimonialsSlider from '@/components/TestimonialsSlider';
import ClientsMarquee from '@/components/ClientsMarquee';
import { articles } from '@/app/articles/data';

const featuredServices = [
  {
    icon: 'ri-mail-send-line',
    title: 'Email Solutions',
    image: 'https://images.unsplash.com/photo-1596526131083-e8c633c948d2?auto=format&fit=crop&q=80&w=600',
    desc: 'Effective email communication is a cornerstone of modern business operations. Our solutions guarantee delivery speed, advanced spam filtering, and enterprise-grade encryption.',
  },
  {
    icon: 'ri-shield-flash-line',
    title: 'Backup & Disaster Recovery',
    image: 'https://images.unsplash.com/photo-1601597111158-2fceff292cdc?auto=format&fit=crop&q=80&w=600',
    desc: "In today's fast-paced digital market, data is your most valuable asset. We implement redundant hot-standby architectures that restore your systems immediately after any failure.",
  },
  {
    icon: 'ri-router-line',
    title: 'Network Design & Setup',
    image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&q=80&w=600',
    desc: 'A well-designed network is the backbone of any enterprise. We deliver fast, low-latency, and secure network architectures enabling seamless internal communication.',
  },
  {
    icon: 'ri-exchange-line',
    title: 'Relocation & Migration',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=600',
    desc: 'Relocating your IT infrastructure to a new datacenter, building, or cloud provider with zero user downtime. Complete data integrity verification at every step.',
  },
  {
    icon: 'ri-server-line',
    title: 'Server Management',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=600',
    desc: 'Comprehensive managed server infrastructure — from high-density blade servers to virtualization, OS support, and 24/7 monitoring to keep your operations running smoothly.',
  },
  {
    icon: 'ri-customer-service-line',
    title: 'IT Support & AMC',
    image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=600',
    desc: 'Secure your systems with planned checkups, preventative software audits, physical server maintenance, component replacements, and priority SLA support contracts.',
  },
];

const processSteps = [
  { n: '1', title: 'Brainstorming', desc: 'Understanding your system load, scaling requirements, security standards, and future capacity needs through detailed scoping sessions.' },
  { n: '2', title: 'Design & Architecture', desc: 'Drafting logical and physical topologies, redundancy maps, failover trees, and hardware specification lists.' },
  { n: '3', title: 'Deployment', desc: 'Configuring high-density servers, firewalls, switches, databases, and loading operating systems with full cutover planning.' },
  { n: '4', title: 'Optimization', desc: 'Final verification testing, response audits, and setting up remote tracking metrics for continuous performance monitoring.' },
];


export default function HomePage() {
  return (
    <>
      <HeroSlider />

      {/* ── Featured Services ─────────────────────────────────── */}
      <section className="py-24" style={{ background: '#F5F4EF' }}>
        <div className="container">
          <div className="max-w-[620px] mx-auto text-center mb-16 reveal">
            <span className="section-tag">Services Portfolio</span>
            <h2 className="section-title">What SVM <span className="gradient-text">Does For You</span></h2>
            <p className="text-slate-body text-[16px] leading-relaxed">
              End-to-end IT services, network infrastructure design, database management, and active support models custom-tailored for enterprise needs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 reveal-stagger">
            {featuredServices.map(s => (
              <div key={s.title} className="card flex flex-col hover-float p-0 overflow-hidden">
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
                  <Link href="/services" className="inline-flex items-center gap-2 font-semibold text-[14px] text-navy hover:gap-3 transition-all duration-300 mt-auto">
                    Learn More <i className="ri-arrow-right-line" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/services" className="btn-primary">
              <span className="btn-icon"><i className="ri-arrow-right-line" /></span>
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* ── Why Choose Us — mesh.ai split section style ────────── */}
      <section className="py-24 relative overflow-hidden" style={{ background: '#D4E8F2' }}>
        {/* Blob decorations */}
        <div className="blob blob-pink" style={{ width: 350, height: 350, bottom: '-50px', right: '-80px', opacity: 0.4 }} />
        <div className="blob blob-green" style={{ width: 250, height: 250, top: '30px', left: '-60px', opacity: 0.35, animationDelay: '4s' }} />

        <div className="container relative z-10">
          <div className="split-section reveal">
            <div>
              <span className="section-tag">Consulting Excellence</span>
              <h2 className="section-title">Best Pathway To <span className="gradient-text">Our Clients</span></h2>
              <p className="text-slate-body text-[16px] leading-relaxed mb-8">
                Our consulting process begins with a thorough, end-to-end assessment of your current IT infrastructure, workflows, bottlenecks, and security gaps. We don't just implement solutions — we partner with you for long-term success.
              </p>

              <div className="space-y-5">
                {[
                  { icon: 'ri-customer-service-2-line', title: '24/7 Full Service Support', desc: 'Round-the-clock monitoring and remote support ensures minor anomalies are resolved before impacting your users.' },
                  { icon: 'ri-flashlight-line', title: 'Immediate Response', desc: 'Guaranteed SLA response times with active network administrators who solve system blocks quickly.' },
                  { icon: 'ri-message-3-line', title: 'Easy to Approach Us', desc: 'No complex support tickets or generic bots. Talk directly to senior systems designers who understand your network layout.' },
                ].map(p => (
                  <div key={p.title} className="flex items-start gap-4">
                    <div className="w-11 h-11 rounded-2xl flex items-center justify-center flex-shrink-0 mt-0.5" style={{ background: '#083C62' }}>
                      <i className={`${p.icon} text-white text-[18px]`} />
                    </div>
                    <div>
                      <div className="font-heading font-bold text-[16px] text-slate-heading mb-1">{p.title}</div>
                      <div className="text-slate-body text-[14px] leading-relaxed">{p.desc}</div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-10">
                <Link href="/about" className="btn-primary">
                  <span className="btn-icon"><i className="ri-arrow-right-line" /></span>
                  Learn More About Us
                </Link>
              </div>
            </div>

            {/* Right panel */}
            <div className="flex flex-col gap-5 reveal-right">
              {/* Main metric card */}
              <div className="card-navy rounded-4xl p-8">
                <div className="text-white/70 text-[13px] uppercase tracking-[1.5px] mb-2">Client Retention Rate</div>
                <div className="text-[56px] font-extrabold font-heading text-white leading-none mb-2">99%</div>
                <div className="text-white/70 text-[14px]">Year-over-year client satisfaction score across all service categories</div>
                <div className="mt-6 pt-6 border-t border-white/20 grid grid-cols-2 gap-4">
                  <div>
                    <div className="text-[24px] font-bold text-white font-heading">1800+</div>
                    <div className="text-white/60 text-[12px] mt-0.5">Enterprise Clients</div>
                  </div>
                  <div>
                    <div className="text-[24px] font-bold text-white font-heading">12+</div>
                    <div className="text-white/60 text-[12px] mt-0.5">Years of Operation</div>
                  </div>
                </div>
              </div>

              {/* Testimonial snippet */}
              <div className="card p-7">
                <div className="flex gap-1 mb-3">
                  {[...Array(5)].map((_, i) => <i key={i} className="ri-star-fill text-amber-400 text-[16px]" />)}
                </div>
                <p className="text-slate-body text-[14px] leading-relaxed italic mb-4">
                  &ldquo;SVM overhauled our regional datacenters with zero seconds of downtime. Simply outstanding support that we couldn&apos;t find anywhere else.&rdquo;
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full flex items-center justify-center text-[14px] font-bold text-white font-heading" style={{ background: '#083C62' }}>R</div>
                  <div>
                    <div className="font-semibold text-slate-heading text-[13px]">Rajesh Gupta</div>
                    <div className="text-muted text-[12px]">CFO, India Logistics Corp</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Specialization Tabs ──────────────────────────────────── */}
      <section className="py-24" style={{ background: '#F5F4EF' }}>
        <div className="container">
          <div className="max-w-[620px] mx-auto text-center mb-4 reveal">
            <span className="section-tag">Core Specialization</span>
            <h2 className="section-title">Our Expertise And <span className="gradient-text">Specialization</span></h2>
            <p className="text-slate-body text-[16px]">
              Decades of cumulative experience across hardware architectures, virtualization stacks, hypervisors, and data security standards.
            </p>
          </div>
          <SpecializationTabs />
        </div>
      </section>

      {/* ── Clients Marquee ──────────────────────────────────────── */}
      <ClientsMarquee />

      {/* ── Process — timeline style ─────────────────────────────── */}
      <section className="py-24" style={{ background: '#D4E8F2' }}>
        <div className="container">
          <div className="max-w-[620px] mx-auto text-center mb-16 reveal">
            <span className="section-tag">How We Work</span>
            <h2 className="section-title">Our Robust <span className="gradient-text">Delivery Model</span></h2>
            <p className="text-slate-body text-[16px]">
              Save time and operational costs with our battle-tested engineering methodology — from concept to active deployment support.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 reveal-stagger">
            {processSteps.map(s => (
              <div key={s.n} className="card pt-10 relative hover-float">
                <div className="process-step">{s.n}</div>
                <h4 className="text-[18px] font-bold font-heading text-slate-heading mb-3">{s.title}</h4>
                <p className="card-desc">{s.desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/about" className="btn-secondary">Learn More About Our Process</Link>
          </div>
        </div>
      </section>

      {/* ── Stats ────────────────────────────────────────────────── */}
      <StatsSection />

      {/* ── Testimonials ─────────────────────────────────────────── */}
      <section className="py-24" style={{ background: '#F5F4EF' }}>
        <div className="container">
          <div className="max-w-[620px] mx-auto text-center mb-16 reveal">
            <span className="section-tag">Testimonials</span>
            <h2 className="section-title">See What Others <span className="gradient-text">Are Saying</span></h2>
            <p className="text-slate-body text-[16px]">
              Don&apos;t just take our word for it. Read reviews from chief executives, project managers, and business operators.
            </p>
          </div>
          <TestimonialsSlider />
        </div>
      </section>

      {/* ── Blog ─────────────────────────────────────────────────── */}
      <section className="py-24" style={{ background: '#D4E8F2' }}>
        <div className="container">
          <div className="max-w-[620px] mx-auto text-center mb-16 reveal">
            <span className="section-tag">Insights & Blog</span>
            <h2 className="section-title">Ultimate Insights <span className="gradient-text">& Inspiration</span></h2>
            <p className="text-slate-body text-[16px]">
              Stay ahead of the curve with articles, guides, and strategic discussions written by our lead engineers.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 reveal-stagger">
            {articles.slice(0, 2).map(b => (
              <Link key={b.title} href={`/articles/${b.slug}`} className="card flex flex-col group hover:no-underline hover-float">
                <div className="blog-img-wrapper rounded-2xl mb-6 relative overflow-hidden" style={{ height: 180, background: '#D4E8F2' }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={b.image} alt={b.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-navy/10 mix-blend-multiply" />
                </div>
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-[11px] font-bold uppercase tracking-[1px] px-3 py-1 rounded-full text-navy bg-navy/10 border border-navy/15">{b.category}</span>
                  <span className="text-[13px]" style={{ color: '#8A94A6' }}><i className="ri-calendar-line mr-1" />{b.date}</span>
                </div>
                <h3 className="card-title">{b.title}</h3>
                <p className="card-desc mb-6 flex-1 line-clamp-3">{b.excerpt}</p>
                <span className="inline-flex items-center gap-2 font-semibold text-[14px] text-navy group-hover:gap-3 transition-all duration-300">
                  Read Article <i className="ri-arrow-right-line" />
                </span>
              </Link>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/articles" className="btn-primary">
              <span className="btn-icon"><i className="ri-arrow-right-line" /></span>
              View All Articles
            </Link>
          </div>
        </div>
      </section>

      {/* ── CTA Banner ───────────────────────────────────────────── */}
      <section className="py-16" style={{ background: '#F5F4EF' }}>
        <div className="container">
          <div className="cta-banner text-center relative overflow-hidden">
            <div className="blob blob-blue" style={{ width: 300, height: 300, top: '-80px', right: '-60px', opacity: 0.15 }} />
            <div className="blob blob-green" style={{ width: 200, height: 200, bottom: '-60px', left: '-40px', opacity: 0.1, animationDelay: '4s' }} />
            <div className="relative z-10">
              <span className="inline-flex items-center gap-2 text-[12px] font-bold uppercase tracking-[2.5px] text-white/70 mb-4">
                <span className="w-5 h-[2px] bg-white/70 rounded-full" /> Ready to Transform?
              </span>
              <h2 className="text-[36px] md:text-[44px] font-extrabold font-heading text-white mb-5 leading-tight">
                Let&apos;s Build Your IT Infrastructure <br className="hidden md:block" />Together
              </h2>
              <p className="text-white/75 text-[17px] max-w-[520px] mx-auto mb-10 leading-relaxed">
                Talk to our architects today for a free 30-minute consultation. No commitment — just expert advice tailored to your business.
              </p>
              <Link href="/contact" className="inline-flex items-center gap-3 bg-white text-navy font-heading font-bold text-[16px] px-8 py-4 rounded-full transition-all duration-300 hover:-translate-y-1" style={{ boxShadow: '0 8px 24px rgba(0,0,0,0.2)' }}>
                <span className="w-8 h-8 rounded-full bg-navy flex items-center justify-center">
                  <i className="ri-arrow-right-line text-white text-sm" />
                </span>
                Schedule a Free Consultation
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
