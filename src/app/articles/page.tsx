import type { Metadata } from 'next';
import Link from 'next/link';
import PageBanner from '@/components/PageBanner';
import { articles } from './data';

export const metadata: Metadata = {
  title: 'Articles',
  description:
    'Insights, guides, and best practices on IT infrastructure, cybersecurity, cloud, networking, and SAP from the SVM consulting team.',
};

const categoryColors: Record<string, string> = {
  Infrastructure: 'bg-sky-50 text-sky-600 border-sky-200',
  Cybersecurity:  'bg-rose-50 text-rose-600 border-rose-200',
  SAP:            'bg-amber-50 text-amber-600 border-amber-200',
  Cloud:          'bg-violet-50 text-violet-600 border-violet-200',
  Networking:     'bg-teal-50 text-teal-600 border-teal-200',
  Strategy:       'bg-emerald-50 text-emerald-600 border-emerald-200',
};

export default function ArticlesPage() {
  const [featured, ...rest] = articles;

  return (
    <>
      <PageBanner title="Insights &" highlight="Articles" crumb="Articles" />

      {/* Featured */}
      <section className="py-24">
        <div className="container">
          <div className="max-w-[700px] mx-auto text-center mb-14 reveal">
            <span className="section-tag">Latest</span>
            <h2 className="section-title">
              Featured <span className="gradient-text">Article</span>
            </h2>
          </div>

          <Link
            href={`/articles/${featured.slug}`}
            className="card-glass flex flex-col md:flex-row gap-10 items-center group reveal hover:no-underline"
          >
            <div className="w-full md:w-[220px] shrink-0 flex items-center justify-center h-[160px] rounded-2xl bg-gradient-to-br from-sky-50 to-emerald-50 border border-black/[0.06]">
              <i className={`${featured.icon} text-accent1`} style={{ fontSize: 72 }} />
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-4">
                <span className={`text-[12px] font-semibold px-3 py-1 rounded-full border ${categoryColors[featured.category]}`}>
                  {featured.category}
                </span>
                <span className="text-slate-400 text-[13px]">{featured.date}</span>
                <span className="text-slate-400 text-[13px]">{featured.readTime}</span>
              </div>
              <h3 className="text-[22px] font-bold font-heading text-slate-900 mb-3 group-hover:text-accent1 transition-colors">
                {featured.title}
              </h3>
              <p className="card-desc mb-5">{featured.excerpt}</p>
              <span className="inline-flex items-center gap-2 text-accent1 font-semibold text-[14px]">
                Read Article <i className="ri-arrow-right-line" />
              </span>
            </div>
          </Link>
        </div>
      </section>

      {/* Grid */}
      <section className="py-24 bg-white">
        <div className="container">
          <div className="max-w-[700px] mx-auto text-center mb-14 reveal">
            <span className="section-tag">All Articles</span>
            <h2 className="section-title">
              More from <span className="gradient-text">Our Team</span>
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 reveal-stagger">
            {rest.map(article => (
              <Link
                key={article.slug}
                href={`/articles/${article.slug}`}
                className="card-glass flex flex-col group hover:no-underline"
              >
                <div className="flex items-center justify-center h-[100px] rounded-2xl mb-6 bg-gradient-to-br from-sky-50 to-emerald-50 border border-black/[0.06]">
                  <i className={`${article.icon} text-accent1`} style={{ fontSize: 44 }} />
                </div>
                <div className="flex items-center gap-3 mb-3">
                  <span className={`text-[11px] font-semibold px-2.5 py-0.5 rounded-full border ${categoryColors[article.category]}`}>
                    {article.category}
                  </span>
                  <span className="text-slate-400 text-[12px]">{article.readTime}</span>
                </div>
                <h3 className="card-title text-[18px] mb-3 group-hover:text-accent1 transition-colors">
                  {article.title}
                </h3>
                <p className="card-desc text-[14px] flex-1">{article.excerpt}</p>
                <span className="inline-flex items-center gap-1.5 text-accent1 font-semibold text-[13px] mt-5">
                  Read Article <i className="ri-arrow-right-line" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
