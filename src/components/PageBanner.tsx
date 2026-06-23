import Link from 'next/link';

interface Props {
  title: string;
  crumb: string;
  highlight?: string;
}

export default function PageBanner({ title, crumb, highlight }: Props) {
  return (
    <div className="page-banner text-center relative z-10" style={{ borderBottom: '1px solid rgba(8,60,98,0.1)' }}>
      {/* Abstract blob decorations matching mesh.ai */}
      <div className="blob blob-pink" style={{ width: 400, height: 400, top: '-100px', left: '-100px', opacity: 0.5 }} />
      <div className="blob blob-blue" style={{ width: 300, height: 300, bottom: '-50px', right: '5%', opacity: 0.4, animationDelay: '2s' }} />

      <div className="container relative z-10 reveal">
        <h1 className="page-title">
          {title} {highlight && <span className="gradient-text">{highlight}</span>}
        </h1>
        
        <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border bg-white/50 backdrop-blur-sm text-[13px] font-semibold text-slate-heading" style={{ borderColor: 'rgba(8,60,98,0.15)' }}>
          <Link href="/" className="hover:text-navy transition-colors">Home</Link>
          <span className="text-navy/40">/</span>
          <span className="text-navy">{crumb}</span>
        </div>
      </div>
    </div>
  );
}
