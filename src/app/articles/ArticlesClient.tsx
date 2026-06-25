'use client';

import { useState } from 'react';
import Link from 'next/link';
import { articles } from './data';

const CATEGORIES = ['All Topics', ...Array.from(new Set(articles.map(a => a.category)))];

export default function ArticlesClient() {
  const [active, setActive] = useState('All Topics');

  const filtered = active === 'All Topics'
    ? articles
    : articles.filter(a => a.category === active);

  const featured = filtered[0];
  const rest = filtered.slice(1);

  return (
    <>
      {/* Categories Filter */}
      <div className="flex flex-wrap justify-center gap-3 mb-16 reveal">
        {CATEGORIES.map((cat) => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            className={`px-5 py-2 rounded-full text-[14px] font-semibold transition-all duration-300 ${
              cat === active
                ? 'bg-navy text-white border border-navy shadow-btn'
                : 'bg-white text-navy/70 border border-navy/20 hover:border-navy hover:text-navy'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {filtered.length === 0 ? (
        <div className="text-center py-24 text-slate-body text-[16px]">
          No articles in this category yet.
        </div>
      ) : (
        <>
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
          {rest.length > 0 && (
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
          )}
        </>
      )}
    </>
  );
}
