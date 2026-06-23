'use client';
import { useState } from 'react';
import Link from 'next/link';
import { productsData } from '@/app/products/data';

export default function SpecializationTabs() {
  const [active, setActive] = useState(productsData[0].id);
  const activeSpec = productsData.find(s => s.id === active) || productsData[0];

  return (
    <div className="mt-12 reveal">
      {/* Tabs */}
      <div className="flex flex-wrap justify-center gap-3 mb-10">
        {productsData.map(s => (
          <button
            key={s.id}
            className={`tab-btn flex items-center gap-2 ${active === s.id ? 'active' : ''}`}
            onClick={() => setActive(s.id)}
            aria-selected={active === s.id}
          >
            <i className={`${s.icon} text-[18px]`} />
            {s.label}
          </button>
        ))}
      </div>

      {/* Content panel — mesh.ai bento style */}
      <div className="bg-white border border-[rgba(8,60,98,0.08)] rounded-[32px] p-8 md:p-12 transition-all duration-500 overflow-hidden relative" style={{ boxShadow: '0 12px 40px -12px rgba(8,60,98,0.1)' }}>
        {/* Subtle background blob inside card */}
        <div className="blob blob-powder" style={{ width: 400, height: 400, top: '-150px', right: '-150px', opacity: 0.5 }} />

        <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center relative z-10">
          <div>
            <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6" style={{ background: '#083C62', color: 'white' }}>
              <i className={`${activeSpec.icon} text-[28px]`} />
            </div>
            <h3 className="text-[28px] md:text-[34px] font-extrabold font-heading text-slate-heading mb-5 leading-tight">
              {activeSpec.title}
            </h3>
            <p className="text-slate-body text-[16px] leading-relaxed mb-8">
              {activeSpec.desc}
            </p>
            <ul className="space-y-3 mb-8">
              {activeSpec.features.slice(0, 3).map(f => (
                <li key={f} className="flex items-center gap-3 text-slate-heading font-medium text-[15px]">
                  <i className="ri-checkbox-circle-fill text-[18px]" style={{ color: '#0D4F82' }} />
                  {f}
                </li>
              ))}
            </ul>
            <Link href={`/products/${activeSpec.id}`} className="btn-secondary inline-block text-center">
              Explore {activeSpec.label}
            </Link>
          </div>

          {/* Visual representation - Real Image */}
          <div className="relative h-full min-h-[300px] rounded-2xl overflow-hidden shadow-xl" style={{ background: '#D4E8F2' }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img 
              src={activeSpec.image} 
              alt={activeSpec.title} 
              className="absolute inset-0 w-full h-full object-cover"
            />
            {/* Overlay to ensure text/UI stands out if needed, or just slight darkening */}
            <div className="absolute inset-0 bg-navy/10 mix-blend-multiply" />
          </div>
        </div>
      </div>
    </div>
  );
}
