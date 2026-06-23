import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import PageBanner from '@/components/PageBanner';
import { articles } from '../data';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return articles.map(a => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = articles.find(a => a.slug === slug);
  if (!article) return {};
  return { title: article.title, description: article.excerpt };
}

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params;
  const article = articles.find(a => a.slug === slug);
  if (!article) notFound();

  const related = articles.filter(a => a.slug !== slug).slice(0, 3);

  return (
    <>
      <PageBanner title={article.category} highlight="Insight" crumb={article.category} />

      <section className="py-24" style={{ background: '#F5F4EF' }}>
        <div className="container max-w-[900px]">

          {/* Meta */}
          <div className="flex flex-wrap items-center gap-3 mb-8 reveal text-center justify-center">
            <span className="text-[12px] font-bold uppercase tracking-[1px] px-3 py-1 rounded-full text-navy bg-navy/10 border border-navy/15">
              {article.category}
            </span>
            <span className="text-[14px]" style={{ color: '#8A94A6' }}>{article.date}</span>
            <span className="text-[14px]" style={{ color: '#8A94A6' }}>&bull;</span>
            <span className="text-[14px]" style={{ color: '#8A94A6' }}>{article.readTime}</span>
          </div>

          {/* Title */}
          <h1 className="text-[36px] md:text-[48px] font-extrabold font-heading text-slate-heading leading-tight mb-10 reveal text-center">
            {article.title}
          </h1>

          {/* Excerpt */}
          <p className="text-[20px] text-slate-body leading-relaxed border-l-4 border-navy pl-6 mb-16 reveal font-medium italic">
            {article.excerpt}
          </p>

          {/* Icon hero / Abstract Header */}
          <div className="flex items-center justify-center h-[240px] rounded-4xl mb-16 relative overflow-hidden reveal shadow-card border border-[rgba(8,60,98,0.1)]" style={{ background: '#D4E8F2' }}>
            <div className="blob blob-pink" style={{ width: 300, height: 300, opacity: 0.5 }} />
            <div className="blob blob-blue" style={{ width: 250, height: 250, bottom: '-50px', right: '10%', opacity: 0.4, animationDelay: '2s' }} />
            <i className={`${article.icon} text-navy relative z-10 opacity-90`} style={{ fontSize: 100 }} />
          </div>

          {/* Body */}
          <div className="space-y-8 reveal text-[17px] text-slate-body leading-loose">
            {article.body.map((para, i) => (
              <p key={i}>
                {para}
              </p>
            ))}
          </div>

          {/* CTA */}
          <div className="card-navy rounded-4xl mt-24 text-center reveal p-12 relative overflow-hidden">
            <div className="blob blob-powder" style={{ width: 400, height: 400, top: '-150px', left: '-150px', opacity: 0.15 }} />
            <div className="relative z-10">
              <span className="inline-flex items-center gap-2 text-[12px] font-bold uppercase tracking-[2.5px] text-white/70 mb-4">
                <span className="w-5 h-[2px] bg-white/70 rounded-full" /> Expert Consultation
              </span>
              <h3 className="text-[32px] font-extrabold font-heading text-white mb-4">
                Ready to Implement This Strategy?
              </h3>
              <p className="text-white/80 text-[16px] mb-8 max-w-[600px] mx-auto leading-relaxed">
                Our team has hands-on experience delivering the exact solutions described in this article. Let us help you get it right the first time.
              </p>
              <Link href="/contact" className="btn-primary" style={{ background: 'white', color: '#083C62' }}>
                <span className="btn-icon" style={{ background: 'rgba(8,60,98,0.1)' }}><i className="ri-arrow-right-line" /></span>
                Talk to Our Team
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Related Articles */}
      <section className="py-24" style={{ background: '#D4E8F2' }}>
        <div className="container">
          <div className="text-center mb-16 reveal">
            <h2 className="section-title">Related <span className="gradient-text">Articles</span></h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 reveal-stagger">
            {related.map(a => (
              <Link key={a.slug} href={`/articles/${a.slug}`} className="card flex flex-col p-0 overflow-hidden group hover-float hover:no-underline">
                <div className="h-[180px] flex items-center justify-center relative overflow-hidden" style={{ background: '#F5F4EF' }}>
                  <i className={`${a.icon} text-[48px] text-navy opacity-80`} />
                </div>
                <div className="p-8 flex-1 flex flex-col">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-[11px] font-bold uppercase tracking-[1px] px-3 py-1 rounded-full text-navy bg-navy/10 border border-navy/15">
                      {a.category}
                    </span>
                    <span className="text-[12px]" style={{ color: '#8A94A6' }}>{a.readTime}</span>
                  </div>
                  <h4 className="card-title text-[18px] mb-2 group-hover:text-navy transition-colors leading-snug">
                    {a.title}
                  </h4>
                  <span className="inline-flex items-center gap-1.5 text-navy font-semibold text-[13px] mt-auto pt-4 group-hover:gap-2 transition-all duration-300">
                    Read <i className="ri-arrow-right-line" />
                  </span>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-16">
            <Link href="/articles" className="btn-secondary">
              ← Back to All Articles
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
