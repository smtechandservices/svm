import type { Metadata } from 'next';
import Link from 'next/link';
import PageBanner from '@/components/PageBanner';
import { productsData } from './data';

export const metadata: Metadata = {
  title: 'Hardware & Products',
  description: 'Enterprise hardware, licensing, and networking gear from SVM. Partnered with global leaders to bring you the best in IT infrastructure.',
};

export default function ProductsPage() {
  return (
    <>
      <PageBanner title="Hardware" highlight="& Products" crumb="Products" />

      <section className="py-24" style={{ background: '#F5F4EF' }}>
        <div className="container">
          <div className="max-w-[700px] mx-auto text-center mb-16 reveal">
            <span className="section-tag">Partner Network</span>
            <h2 className="section-title">Enterprise-Grade <span className="gradient-text">Hardware</span></h2>
            <p className="text-slate-body text-[16px] leading-relaxed">
              We partner with global technology leaders to source, supply, and configure the physical infrastructure that powers your business.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 reveal-stagger">
            {productsData.map((p) => (
              <div key={p.category} className="card flex flex-col hover-float p-0 overflow-hidden">
                {/* Image Header */}
                <div className="h-[200px] relative overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img 
                    src={p.image} 
                    alt={p.category} 
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-navy/20 mix-blend-multiply" />
                  <div className="absolute top-4 left-4 w-12 h-12 bg-white/90 backdrop-blur-md rounded-xl flex items-center justify-center shadow-lg">
                    <i className={`${p.icon} text-[24px] text-navy`} />
                  </div>
                </div>
                
                <div className="p-8 flex-1 flex flex-col">
                  <h3 className="card-title text-[22px] mb-4">{p.category}</h3>
                  <p className="card-desc mb-6 flex-1">{p.desc}</p>
                  
                  <ul className="space-y-2 mb-8 pt-6 border-t border-navy/10">
                    {p.features.slice(0, 3).map(f => (
                      <li key={f} className="flex items-center gap-2 text-[14px] text-slate-heading font-medium">
                        <i className="ri-checkbox-circle-fill text-navy" /> {f}
                      </li>
                    ))}
                  </ul>

                  <div className="grid grid-cols-2 gap-4 mt-auto">
                    <Link href={`/products/${p.id}`} className="btn-primary w-full justify-center">
                      Details
                    </Link>
                    <Link href="/contact" className="btn-secondary w-full justify-center text-center">
                      Quote
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* OEM Partners Section */}
      <section className="py-24" style={{ background: '#D4E8F2' }}>
        <div className="container text-center reveal">
          <h3 className="text-[28px] font-bold font-heading text-slate-heading mb-4">Authorized Partners With Global OEMs</h3>
          <p className="text-slate-body text-[16px] max-w-[600px] mx-auto mb-12">
            Our strong relationships with hardware manufacturers ensure you get the best pricing, genuine warranties, and prioritized support for all your physical infrastructure.
          </p>
          
          <div className="flex flex-wrap justify-center gap-8 opacity-60 grayscale">
            <span className="text-[24px] font-extrabold font-heading text-navy">Cisco</span>
            <span className="text-[24px] font-extrabold font-heading text-navy">Dell EMC</span>
            <span className="text-[24px] font-extrabold font-heading text-navy">HPE</span>
            <span className="text-[24px] font-extrabold font-heading text-navy">Fortinet</span>
            <span className="text-[24px] font-extrabold font-heading text-navy">VMware</span>
            <span className="text-[24px] font-extrabold font-heading text-navy">NetApp</span>
          </div>
        </div>
      </section>
    </>
  );
}
