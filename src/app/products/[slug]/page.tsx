import { notFound } from 'next/navigation';
import Link from 'next/link';
import PageBanner from '@/components/PageBanner';
import { productsData } from '../data';
import type { Metadata } from 'next';

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const product = productsData.find((p) => p.id === slug);
  if (!product) return {};
  
  return {
    title: product.title,
    description: product.desc,
  };
}

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = productsData.find((p) => p.id === slug);

  if (!product) {
    notFound();
  }

  return (
    <>
      <PageBanner title={product.category} highlight="Details" crumb={product.title} />

      <section className="py-24" style={{ background: '#F5F4EF' }}>
        <div className="container">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            {/* Visual Header */}
            <div className="relative min-h-[400px] rounded-4xl overflow-hidden shadow-2xl reveal">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img 
                src={product.image} 
                alt={product.title} 
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-navy/20 mix-blend-multiply" />
            </div>

            {/* Content */}
            <div className="reveal-right">
              <span className="text-[11px] font-bold uppercase tracking-[1px] px-3 py-1 rounded-full text-navy bg-navy/10 border border-navy/15 mb-4 inline-block">
                {product.category}
              </span>
              <h2 className="text-[34px] md:text-[42px] font-extrabold font-heading text-slate-heading mb-6 leading-tight">
                {product.title}
              </h2>
              <p className="text-slate-body text-[16px] leading-relaxed mb-8">
                {product.desc}
              </p>
              
              <h3 className="font-heading font-bold text-slate-heading text-[20px] mb-4">Key Features & Capabilities</h3>
              <ul className="space-y-4 mb-10">
                {product.features.map(f => (
                  <li key={f} className="flex items-center gap-3 text-slate-heading font-medium text-[15px]">
                    <div className="w-6 h-6 rounded-full bg-navy/10 flex items-center justify-center flex-shrink-0">
                      <i className="ri-check-line text-navy" />
                    </div>
                    {f}
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-4">
                <Link href="/contact" className="btn-primary">
                  Request a Quote
                </Link>
                <Link href="/products" className="btn-secondary">
                  Back to Products
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Consult Section */}
      <section className="py-20" style={{ background: '#083C62' }}>
        <div className="container text-center reveal">
          <h3 className="text-[28px] font-bold font-heading text-white mb-4">Need a Custom {product.category} Solution?</h3>
          <p className="text-white/80 text-[16px] max-w-[600px] mx-auto mb-8">
            Our enterprise architects can design and deploy a solution tailored exactly to your operational requirements and compliance standards.
          </p>
          <Link href="/contact" className="btn-primary bg-white text-navy hover:bg-[#F5F4EF] border-none">
            Speak with an Architect
          </Link>
        </div>
      </section>
    </>
  );
}
