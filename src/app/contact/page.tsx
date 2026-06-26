'use client';
import { useState, Suspense, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import PageBanner from '@/components/PageBanner';

const faqs = [
  {
    q: 'Do you offer 24/7 technical support?',
    a: 'Yes, we provide round-the-clock monitoring and remote support through our Annual Maintenance Contracts (AMC) to ensure minor anomalies are resolved before they impact your users.',
  },
  {
    q: 'Can you assist with datacenter relocation?',
    a: 'Absolutely. We specialize in relocating IT infrastructure to new offices, datacenters, or cloud environments with zero user downtime and complete data integrity verification.',
  },
  {
    q: 'Do you implement SAP S/4HANA from scratch?',
    a: 'Yes, our certified SAP consultants handle full-cycle implementations, including requirement gathering, system architecture design, deployment, and post-go-live support.',
  },
  {
    q: 'What regions do you serve?',
    a: 'We serve enterprises across India and the UAE, with active deployments in major hubs including Delhi NCR, Mumbai, Bangalore, Chennai, Hyderabad, and Dubai.',
  },
];

function ContactContent() {
  const [openFaq, setOpenFaq] = useState<number>(0);
  const [status, setStatus] = useState<'idle' | 'loading' | 'done' | 'error'>('idle');

  const searchParams = useSearchParams();
  const querySubject = searchParams.get('subject') || '';
  const [subject, setSubject] = useState(querySubject);

  useEffect(() => {
    if (querySubject) setSubject(querySubject);
  }, [querySubject]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('loading');

    const form = e.currentTarget;
    const formData = new FormData(form);
    formData.append('access_key', process.env.NEXT_PUBLIC_WEB3FORMS_KEY ?? '');

    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      });
      const data = await res.json();

      if (data.success) {
        setStatus('done');
        form.reset();
        setSubject('');
        setTimeout(() => setStatus('idle'), 4000);
      } else {
        setStatus('error');
        setTimeout(() => setStatus('idle'), 4000);
      }
    } catch {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 4000);
    }
  };

  return (
    <>
      <PageBanner title="Contact" highlight="Us" crumb="Contact" />

      <section className="py-24" style={{ background: '#F5F4EF' }}>
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            
            {/* Left: Info */}
            <div className="reveal">
              <span className="section-tag">Let's Connect</span>
              <h2 className="section-title">Ready to Upgrade Your <span className="gradient-text">IT Infrastructure?</span></h2>
              <p className="text-slate-body text-[16px] leading-relaxed mb-10">
                Reach out to our systems architects for a free consultation. Whether you need a network overhaul, a cloud migration, or a dedicated support team, we're here to help.
              </p>

              <div className="space-y-6 mb-12">
                <div className="flex gap-4 p-5 rounded-2xl bg-white border border-[rgba(8,60,98,0.08)] shadow-card hover-float">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center bg-powder text-navy text-[20px] flex-shrink-0">
                    <i className="ri-map-pin-line" />
                  </div>
                  <div>
                    <h4 className="font-bold font-heading text-slate-heading text-[16px] mb-1">Head Office</h4>
                    <p className="text-slate-body text-[14px] leading-relaxed">
                      U-23, Budh Vihar Phase 1,<br />Delhi 110086, India
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 p-5 rounded-2xl bg-white border border-[rgba(8,60,98,0.08)] shadow-card hover-float">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center bg-powder text-navy text-[20px] flex-shrink-0">
                    <i className="ri-map-pin-user-line" />
                  </div>
                  <div>
                    <h4 className="font-bold font-heading text-slate-heading text-[16px] mb-1">Rep Office</h4>
                    <p className="text-slate-body text-[14px] leading-relaxed">
                      306, 3rd floor Al Kazim building<br />Burjuman
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 p-5 rounded-2xl bg-white border border-[rgba(8,60,98,0.08)] shadow-card hover-float">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center bg-powder text-navy text-[20px] flex-shrink-0">
                    <i className="ri-mail-line" />
                  </div>
                  <div>
                    <h4 className="font-bold font-heading text-slate-heading text-[16px] mb-1">Email Us</h4>
                    <a href="mailto:info@svmsystem.com" className="text-slate-body text-[14px] hover:text-navy transition-colors">info@svmsystem.com</a>
                  </div>
                </div>

                <div className="flex gap-4 p-5 rounded-2xl bg-white border border-[rgba(8,60,98,0.08)] shadow-card hover-float">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center bg-powder text-navy text-[20px] flex-shrink-0">
                    <i className="ri-phone-line" />
                  </div>
                  <div>
                    <h4 className="font-bold font-heading text-slate-heading text-[16px] mb-1">Call Us</h4>
                    <div className="text-slate-body text-[14px] mb-1">
                      <span className="font-semibold text-navy">India:</span> <a href="tel:+919250323946" className="hover:text-navy transition-colors">+91 9250323946</a>
                    </div>
                    <div className="text-slate-body text-[14px]">
                      <span className="font-semibold text-navy">Dubai:</span> <a href="tel:+971526753756" className="hover:text-navy transition-colors">+971 526753756</a>, <a href="tel:+971555830698" className="hover:text-navy transition-colors">+971 555830698</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Form */}
            <div className="card p-8 md:p-10 reveal-right">
              <h3 className="text-[24px] font-bold font-heading text-slate-heading mb-6">Send us a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-5">
                {/* honeypot */}
                <input type="checkbox" name="botcheck" className="hidden" />

                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-[13px] font-bold text-slate-heading mb-2">First Name</label>
                    <input type="text" name="first_name" required className="w-full bg-[#F5F4EF] border border-[rgba(8,60,98,0.1)] rounded-xl px-4 py-3 text-[14px] focus:outline-none focus:border-navy transition-colors" />
                  </div>
                  <div>
                    <label className="block text-[13px] font-bold text-slate-heading mb-2">Last Name</label>
                    <input type="text" name="last_name" required className="w-full bg-[#F5F4EF] border border-[rgba(8,60,98,0.1)] rounded-xl px-4 py-3 text-[14px] focus:outline-none focus:border-navy transition-colors" />
                  </div>
                </div>
                <div>
                  <label className="block text-[13px] font-bold text-slate-heading mb-2">Business Email</label>
                  <input type="email" name="email" required className="w-full bg-[#F5F4EF] border border-[rgba(8,60,98,0.1)] rounded-xl px-4 py-3 text-[14px] focus:outline-none focus:border-navy transition-colors" />
                </div>
                <div>
                  <label className="block text-[13px] font-bold text-slate-heading mb-2">Subject</label>
                  <select name="subject" required value={subject} onChange={(e) => setSubject(e.target.value)} className="w-full bg-[#F5F4EF] border border-[rgba(8,60,98,0.1)] rounded-xl px-4 py-3 text-[14px] focus:outline-none focus:border-navy transition-colors">
                    <option value="">Select an inquiry type</option>
                    {querySubject && !['IT Services', 'Network Design', 'SAP', 'Hardware', 'Other'].includes(querySubject) && (
                      <option value={querySubject}>{querySubject}</option>
                    )}
                    <option value="IT Services">Managed IT Services</option>
                    <option value="Network Design">Network Design</option>
                    <option value="SAP">SAP Implementation</option>
                    <option value="Hardware">Hardware / Products</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-[13px] font-bold text-slate-heading mb-2">Message</label>
                  <textarea name="message" rows={4} required className="w-full bg-[#F5F4EF] border border-[rgba(8,60,98,0.1)] rounded-xl px-4 py-3 text-[14px] focus:outline-none focus:border-navy transition-colors resize-none"></textarea>
                </div>
                <button type="submit" className="btn-primary w-full justify-center" disabled={status === 'loading'}>
                  {status === 'loading' && <i className="ri-loader-4-line spin text-xl" />}
                  {status === 'loading' && 'Sending…'}
                  {status === 'done' && 'Message Sent!'}
                  {status === 'error' && 'Failed — please try again'}
                  {status === 'idle' && 'Send Message'}
                </button>
              </form>
            </div>

          </div>
        </div>
      </section>

      {/* Map Graphic (Mesh.ai style - abstract representation instead of embed) */}
      <section className="py-20" style={{ background: '#D4E8F2' }}>
        <div className="container">
          <div className="card-navy rounded-4xl p-10 md:p-16 text-center relative overflow-hidden reveal">
            <div className="blob blob-blue" style={{ width: 400, height: 400, top: '-50px', left: '-100px', opacity: 0.1 }} />
            <h3 className="text-[28px] font-bold font-heading text-white mb-4 relative z-10">Supporting Businesses Nationwide</h3>
            <p className="text-white/80 text-[16px] max-w-[500px] mx-auto mb-10 relative z-10">
              Our engineers are deployed across India to provide rapid on-site support when remote troubleshooting isn't enough.
            </p>
            <div className="flex flex-wrap justify-center gap-4 relative z-10">
              {['Delhi NCR', 'Mumbai', 'Bangalore', 'Chennai', 'Hyderabad', 'Pune', 'Dubai'].map(city => (
                <div key={city} className="flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-5 py-2 text-[14px] text-white font-medium">
                  <i className="ri-map-pin-2-fill text-powder" /> {city}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24" style={{ background: '#F5F4EF' }}>
        <div className="container max-w-[800px] reveal">
          <div className="text-center mb-12">
            <h2 className="section-title">Frequently Asked <span className="gradient-text">Questions</span></h2>
          </div>
          
          <div className="space-y-4">
            {faqs.map((f, i) => (
              <div key={i} className="faq-item shadow-card">
                <button 
                  className="faq-question w-full focus:outline-none" 
                  onClick={() => setOpenFaq(openFaq === i ? -1 : i)}
                  aria-expanded={openFaq === i}
                >
                  {f.q}
                  <i className={`ri-arrow-down-s-line text-navy transition-transform duration-300 ${openFaq === i ? 'rotate-180' : ''}`} />
                </button>
                <div 
                  className="overflow-hidden transition-all duration-300 ease-in-out"
                  style={{ maxHeight: openFaq === i ? '300px' : '0px', opacity: openFaq === i ? 1 : 0 }}
                >
                  <div className="faq-answer">{f.a}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default function ContactPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-[#F5F4EF]" />}>
      <ContactContent />
    </Suspense>
  );
}
