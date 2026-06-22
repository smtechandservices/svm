'use client';
import { useState } from 'react';
import Link from 'next/link';
import PageBanner from '@/components/PageBanner';

const serviceOptions = [
  'Email Solutions', 'IT Service Management', 'Virtualization Services',
  'OS Support & Management', 'Database Managed Services', 'Network Performance Optimization',
  'Annual Maintenance Contract (AMC)', 'IT Facilities Managed Services', 'Backup & Disaster Recovery',
  'Network Architecture Design', 'Relocation Migration Plan', 'Cloud Solution',
  'SAP Services', 'IoT Integration', 'Other / General Inquiry',
];

const faqs = [
  {
    q: 'How fast do you respond to support tickets?',
    a: 'Under our standard AMC plan, we guarantee a 4-hour initial acknowledgement and a 24-hour resolution timeline for critical infrastructure issues.',
  },
  {
    q: 'Do you offer on-site visits for network setup?',
    a: 'Yes. Our certified field engineers are available for on-site assessments, structured cabling, hardware rack installations, and commissioning across India.',
  },
  {
    q: 'Can you help migrate our servers to the cloud?',
    a: 'Absolutely. We provide full-service cloud migration to AWS, GCP, Azure, or private cloud environments with comprehensive data integrity verification at each step.',
  },
  {
    q: 'Do you provide SAP and ERP system support?',
    a: 'Yes. Our SAP Services team covers system installation, basis administration, performance tuning, and upgrade management for SAP S/4HANA and classic SAP environments.',
  },
];

const infoCards = [
  { icon: 'ri-mail-send-line', label: 'Email Address', value: 'support@akinoconnect.com' },
  { icon: 'ri-map-pin-2-line', label: 'Office Location', value: 'North Delhi, India' },
  { icon: 'ri-time-line', label: 'Business Hours', value: 'Mon – Sat: 9:00 AM – 6:00 PM' },
  { icon: 'ri-customer-service-2-line', label: 'Support Model', value: '24 / 7 Monitoring & Response' },
];

export default function ContactPage() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'done'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setTimeout(() => {
      setStatus('done');
      (e.target as HTMLFormElement).reset();
      setTimeout(() => setStatus('idle'), 2500);
    }, 1400);
  };

  return (
    <>
      <PageBanner title="Get In" highlight="Touch" crumb="Contact Us" />

      {/* Contact section */}
      <section className="py-24">
        <div className="container grid md:grid-cols-[1fr_1.1fr] gap-16 items-start">

          {/* Left: info */}
          <div>
            <span className="section-tag">Reach Us</span>
            <h2 className="section-title">
              Let&apos;s Start A <span className="gradient-text">Conversation</span>
            </h2>
            <p className="text-slate-500 text-[16px] leading-loose mb-10">
              Our consulting process begins with a thorough assessment of your current IT infrastructure, workflows, and pain points. Don&apos;t hesitate to connect with our team.
            </p>

            {infoCards.map(c => (
              <div
                key={c.label}
                className="flex items-start gap-5 p-7 bg-white/80 border border-black/[0.08] rounded-[20px] backdrop-blur-[12px] mb-4 hover:border-accent1/20 hover:translate-x-1 transition-all duration-300"
              >
                <div className="w-[52px] h-[52px] rounded-2xl flex items-center justify-center text-[22px] text-accent1 flex-shrink-0 border border-accent1/20"
                  style={{ background: 'rgba(14,165,233,0.1)' }}>
                  <i className={c.icon} />
                </div>
                <div>
                  <div className="text-[12px] uppercase tracking-[1px] text-slate-400 mb-1">{c.label}</div>
                  <div className="text-[16px] font-semibold text-slate-900">{c.value}</div>
                </div>
              </div>
            ))}

            {/* Map placeholder */}
            <div className="w-full h-[250px] bg-white border border-black/[0.08] rounded-2xl flex flex-col items-center justify-center gap-3 text-slate-400 text-[14px] mt-6">
              <i className="ri-map-2-line text-accent1 text-5xl" />
              <span>North Delhi, India</span>
            </div>
          </div>

          {/* Right: form */}
          <div className="card-glass" style={{ padding: '48px' }}>
            <h3 className="font-heading text-[26px] font-bold text-slate-900 mb-2">Send Us a Message</h3>
            <p className="text-slate-500 text-[14px] mb-9">Fill in the details below and a senior consultant will respond within 24 hours.</p>

            <form onSubmit={handleSubmit} noValidate>
              <div className="grid sm:grid-cols-2 gap-6">
                {[
                  { id: 'first-name', label: 'First Name', type: 'text', placeholder: 'e.g. Ramesh', required: true },
                  { id: 'last-name', label: 'Last Name', type: 'text', placeholder: 'e.g. Sharma', required: true },
                  { id: 'email', label: 'Email Address', type: 'email', placeholder: 'your@company.com', required: true },
                  { id: 'phone', label: 'Phone Number', type: 'tel', placeholder: '+91 98765 43210', required: false },
                  { id: 'company', label: 'Company Name', type: 'text', placeholder: 'Your Organization', required: false },
                ].map(f => (
                  <div key={f.id} className="flex flex-col gap-2">
                    <label htmlFor={f.id} className="font-heading text-[14px] font-semibold text-slate-900">{f.label}</label>
                    <input
                      id={f.id} name={f.id} type={f.type} placeholder={f.placeholder} required={f.required}
                      className="w-full bg-black/[0.03] border border-black/[0.08] rounded-xl px-5 py-3.5 text-[15px] text-slate-900 placeholder-slate-400 focus:outline-none focus:border-accent1 focus:shadow-[0_0_15px_rgba(14,165,233,0.1)] transition-all duration-300"
                    />
                  </div>
                ))}

                {/* Service select */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="service" className="font-heading text-[14px] font-semibold text-slate-900">Service of Interest</label>
                  <select
                    id="service" name="service"
                    className="w-full bg-black/[0.03] border border-black/[0.08] rounded-xl px-5 py-3.5 text-[15px] text-slate-900 focus:outline-none focus:border-accent1 transition-all duration-300"
                  >
                    <option value="" disabled>Select a Service</option>
                    {serviceOptions.map(o => (
                      <option key={o} value={o.toLowerCase().replace(/\s+/g, '-')}>{o}</option>
                    ))}
                  </select>
                </div>

                {/* Message */}
                <div className="sm:col-span-2 flex flex-col gap-2">
                  <label htmlFor="message" className="font-heading text-[14px] font-semibold text-slate-900">Your Message</label>
                  <textarea
                    id="message" name="message" rows={6}
                    placeholder="Describe your infrastructure, challenges, or requirements in detail..."
                    required
                    className="w-full bg-black/[0.03] border border-black/[0.08] rounded-xl px-5 py-3.5 text-[15px] text-slate-900 placeholder-slate-400 focus:outline-none focus:border-accent1 focus:shadow-[0_0_15px_rgba(14,165,233,0.1)] transition-all duration-300 resize-none"
                  />
                </div>

                {/* Submit */}
                <div className="sm:col-span-2">
                  <button
                    type="submit"
                    disabled={status === 'loading'}
                    className="w-full font-heading font-bold text-[16px] text-[#080B11] py-4 px-10 rounded-full transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_8px_25px_rgba(14,165,233,0.4)] disabled:opacity-70"
                    style={{ background: 'linear-gradient(135deg,#0ea5e9,#10b981)' }}
                  >
                    {status === 'loading' ? (
                      <span><i className="ri-loader-4-line spin" /> Sending…</span>
                    ) : status === 'done' ? (
                      <span><i className="ri-check-line" /> Message Sent!</span>
                    ) : (
                      <span>Send Message &nbsp;<i className="ri-send-plane-2-fill" /></span>
                    )}
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-white">
        <div className="container">
          <div className="max-w-[650px] mx-auto text-center mb-16 reveal">
            <span className="section-tag">FAQs</span>
            <h2 className="section-title">Common <span className="gradient-text">Questions</span></h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8 reveal-stagger">
            {faqs.map(f => (
              <div key={f.q} className="card-glass">
                <h3 className="font-heading text-[18px] font-bold text-slate-900 mb-3">{f.q}</h3>
                <p className="card-desc">{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
