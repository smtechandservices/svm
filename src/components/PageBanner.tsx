import Link from 'next/link';

interface Props {
  title: string;
  highlight: string;
  crumb: string;
}

export default function PageBanner({ title, highlight, crumb }: Props) {
  return (
    <section className="page-banner">
      <div className="container">
        <h1 className="page-title">
          {title} <span className="gradient-text">{highlight}</span>
        </h1>
        <div className="flex items-center gap-2 text-sm text-slate-500">
          <Link href="/" className="hover:text-accent1 transition-colors">Home</Link>
          <span className="text-slate-400">/</span>
          <span className="text-accent1">{crumb}</span>
        </div>
      </div>
    </section>
  );
}
