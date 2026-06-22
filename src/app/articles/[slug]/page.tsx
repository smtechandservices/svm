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

const categoryColors: Record<string, string> = {
  Infrastructure: 'bg-sky-50 text-sky-600 border-sky-200',
  Cybersecurity:  'bg-rose-50 text-rose-600 border-rose-200',
  SAP:            'bg-amber-50 text-amber-600 border-amber-200',
  Cloud:          'bg-violet-50 text-violet-600 border-violet-200',
  Networking:     'bg-teal-50 text-teal-600 border-teal-200',
  Strategy:       'bg-emerald-50 text-emerald-600 border-emerald-200',
};

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params;
  const article = articles.find(a => a.slug === slug);
  if (!article) notFound();

  const related = articles.filter(a => a.slug !== slug).slice(0, 3);

  return (
    <>
      <PageBanner title={article.category} highlight="Article" crumb={article.category} />

      <section className="py-24">
        <div className="container">

          {/* Meta */}
          <div className="flex flex-wrap items-center gap-3 mb-6 reveal">
            <span className={`text-[12px] font-semibold px-3 py-1 rounded-full border ${categoryColors[article.category]}`}>
              {article.category}
            </span>
            <span className="text-slate-400 text-[13px]">{article.date}</span>
            <span className="text-slate-400 text-[13px]">{article.readTime}</span>
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-5xl font-extrabold font-heading text-slate-900 leading-tight mb-6 reveal">
            {article.title}
          </h1>

          {/* Excerpt */}
          <p className="text-[18px] text-slate-500 leading-relaxed border-l-4 border-accent1 pl-5 mb-12 reveal">
            {article.excerpt}
          </p>

          {/* Icon hero */}
          <div className="flex items-center justify-center h-[180px] rounded-3xl mb-12 bg-gradient-to-br from-sky-50 to-emerald-50 border border-black/[0.06] reveal">
            <i className={`${article.icon} text-accent1`} style={{ fontSize: 90 }} />
          </div>

          {/* Body */}
          <div className="space-y-7 reveal">
            {article.body.map((para, i) => (
              <p key={i} className="text-[16px] text-slate-600 leading-loose">
                {para}
              </p>
            ))}
          </div>

          {/* CTA */}
          <div className="card-glass mt-16 text-center reveal">
            <div className="glow-circle left-1/2 -translate-x-1/2 -top-20" />
            <span className="section-tag">Get Expert Help</span>
            <h3 className="section-title mb-4">
              Ready to <span className="gradient-text">Implement This?</span>
            </h3>
            <p className="card-desc mb-8 max-w-[500px] mx-auto">
              Our team has hands-on experience delivering exactly the solutions described in this article. Let us help you get it right the first time.
            </p>
            <Link href="/contact" className="btn-primary">Talk to Our Team</Link>
          </div>
        </div>
      </section>

      {/* Related */}
      <section className="py-24 bg-white">
        <div className="container">
          <div className="max-w-[600px] mx-auto text-center mb-14 reveal">
            <span className="section-tag">Keep Reading</span>
            <h2 className="section-title">
              Related <span className="gradient-text">Articles</span>
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 reveal-stagger">
            {related.map(a => (
              <Link
                key={a.slug}
                href={`/articles/${a.slug}`}
                className="card-glass flex flex-col group hover:no-underline"
              >
                <div className="flex items-center justify-center h-[90px] rounded-2xl mb-5 bg-gradient-to-br from-sky-50 to-emerald-50 border border-black/[0.06]">
                  <i className={`${a.icon} text-accent1`} style={{ fontSize: 40 }} />
                </div>
                <div className="flex items-center gap-3 mb-2">
                  <span className={`text-[11px] font-semibold px-2.5 py-0.5 rounded-full border ${categoryColors[a.category]}`}>
                    {a.category}
                  </span>
                  <span className="text-slate-400 text-[12px]">{a.readTime}</span>
                </div>
                <h4 className="text-[16px] font-bold font-heading text-slate-900 mb-2 group-hover:text-accent1 transition-colors leading-snug">
                  {a.title}
                </h4>
                <span className="inline-flex items-center gap-1.5 text-accent1 font-semibold text-[13px] mt-auto pt-4">
                  Read <i className="ri-arrow-right-line" />
                </span>
              </Link>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/articles" className="btn-secondary">← Back to All Articles</Link>
          </div>
        </div>
      </section>
    </>
  );
}
