import type { Metadata } from 'next';
import Link from 'next/link';
import PageBanner from '@/components/PageBanner';
import { articles } from './data';

export const metadata: Metadata = {
  title: 'Insights & Articles',
  description: 'Latest insights on IT infrastructure, cybersecurity, cloud migration, and SAP services.',
};

export default function ArticlesPage() {
  const featured = articles[0];
  const rest = articles.slice(1);

  return (
    <>
      <PageBanner title="Insights" highlight="& Articles" crumb="Insights" />

      <section className="py-24" style={{ background: '#F5F4EF' }}>
        <div className="container">
          
          {/* Categories Filter (Visual only for now) */}
          <div className="flex flex-wrap justify-center gap-3 mb-16 reveal">
            {['All Topics', 'Strategy', 'Cybersecurity', 'Cloud', 'SAP', 'Networking'].map((cat, i) => (
              <button 
                key={cat} 
                className={`px-5 py-2 rounded-full text-[14px] font-semibold transition-all duration-300 ${i === 0 ? 'bg-navy text-white border border-navy shadow-btn' : 'bg-white text-navy/70 border border-navy/20 hover:border-navy hover:text-navy'}`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Featured Article */}
          <div className="mb-20 reveal">
            <Link href={`/articles/${featured.slug}`} className="card flex flex-col md:flex-row gap-10 p-0 overflow-hidden group hover-float hover:no-underline">
              <div className="md:w-1/2 min-h-[300px] flex items-center justify-center relative overflow-hidden" style={{ background: '#D4E8F2' }}>
                <img src={featured.image} alt={featured.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-[#083C62]/20" />
              </div>
              <div className="md:w-1/2 p-10 md:p-12 flex flex-col justify-center">
                <div className="flex items-center gap-3 mb-5">
                  <span className="text-[11px] font-bold uppercase tracking-[1px] px-3 py-1 rounded-full text-navy bg-navy/10 border border-navy/15">
                    {featured.category}
                  </span>
                  <span className="text-[13px]" style={{ color: '#8A94A6' }}>
                    <i className="ri-calendar-line mr-1" />{featured.date}
                  </span>
                </div>
                <h2 className="text-[28px] md:text-[34px] font-bold font-heading text-slate-heading mb-4 leading-tight group-hover:text-navy transition-colors">
                  {featured.title}
                </h2>
                <p className="text-slate-body text-[16px] leading-relaxed mb-8">
                  {featured.excerpt}
                </p>
                <span className="inline-flex items-center gap-2 font-semibold text-[15px] text-navy group-hover:gap-3 transition-all duration-300 mt-auto">
                  Read Full Article <i className="ri-arrow-right-line" />
                </span>
              </div>
            </Link>
          </div>

          {/* Article Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 reveal-stagger">
            {rest.map(a => (
              <Link key={a.slug} href={`/articles/${a.slug}`} className="card flex flex-col p-0 overflow-hidden group hover-float hover:no-underline">
                <div className="h-[200px] flex items-center justify-center relative overflow-hidden" style={{ background: '#D4E8F2' }}>
                  <img src={a.image} alt={a.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-[#083C62]/10" />
                </div>
                <div className="p-8 flex-1 flex flex-col">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-[11px] font-bold uppercase tracking-[1px] px-3 py-1 rounded-full text-navy bg-navy/10 border border-navy/15">
                      {a.category}
                    </span>
                  </div>
                  <h3 className="card-title text-[20px] mb-3 group-hover:text-navy transition-colors">{a.title}</h3>
                  <p className="card-desc mb-6 flex-1 line-clamp-3">{a.excerpt}</p>
                  
                  <div className="flex items-center justify-between mt-auto pt-5 border-t border-navy/10">
                    <span className="text-[13px]" style={{ color: '#8A94A6' }}>{a.date}</span>
                    <span className="inline-flex items-center gap-1 font-semibold text-[13px] text-navy group-hover:gap-2 transition-all duration-300">
                      Read <i className="ri-arrow-right-line" />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

        </div>
      </section>

      {/* Newsletter Banner */}
      <section className="py-20" style={{ background: '#D4E8F2' }}>
        <div className="container max-w-[800px] text-center reveal">
          <i className="ri-mail-send-line text-[48px] text-navy mb-4 block" />
          <h3 className="text-[32px] font-bold font-heading text-slate-heading mb-4">Never Miss an Update</h3>
          <p className="text-slate-body text-[16px] mb-8">
            Subscribe to our newsletter for the latest insights on enterprise IT, cybersecurity, and cloud architecture delivered straight to your inbox.
          </p>
          <form className="flex max-w-[500px] mx-auto bg-white p-2 rounded-full shadow-card border border-navy/10">
            <input 
              type="email" 
              placeholder="Enter your business email" 
              required 
              className="flex-1 bg-transparent px-4 text-[15px] focus:outline-none text-slate-heading"
            />
            <button type="submit" className="btn-primary py-3 px-6">
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
