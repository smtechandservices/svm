import type { Metadata } from 'next';
import PageBanner from '@/components/PageBanner';
import ArticlesClient from './ArticlesClient';

export const metadata: Metadata = {
  title: 'Insights & Articles',
  description: 'Latest insights on IT infrastructure, cybersecurity, cloud migration, and SAP services.',
};

export default function ArticlesPage() {
  return (
    <>
      <PageBanner title="Insights" highlight="& Articles" crumb="Insights" />

      <section className="py-24" style={{ background: '#F5F4EF' }}>
        <div className="container">
          <ArticlesClient />
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
