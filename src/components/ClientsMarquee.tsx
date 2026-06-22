import Image from 'next/image';

const logos = [
  { src: '/clients/client-1.png', alt: 'Client 1' },
  { src: '/clients/client-2.png', alt: 'Client 2' },
  { src: '/clients/client-3.png', alt: 'Client 3' },
  { src: '/clients/client-4.png', alt: 'Client 4' },
  { src: '/clients/client-5.png', alt: 'Client 5' },
  { src: '/clients/client-6.png', alt: 'Client 6' },
  { src: '/clients/client-7.png', alt: 'Client 7' },
  { src: '/clients/client-8.png', alt: 'Client 8' },
];

export default function ClientsMarquee() {
  const items = [...logos, ...logos];

  return (
    <section className="py-16 border-y border-black/[0.06] overflow-hidden bg-white">
      <div className="container mb-10 text-center reveal">
        <span className="section-tag">Trusted By</span>
        <h2 className="section-title">
          Companies That <span className="gradient-text">Trust Us</span>
        </h2>
      </div>

      <div className="relative">
        <div className="absolute left-0 top-0 h-full w-24 z-10 pointer-events-none"
          style={{ background: 'linear-gradient(to right, white, transparent)' }} />
        <div className="absolute right-0 top-0 h-full w-24 z-10 pointer-events-none"
          style={{ background: 'linear-gradient(to left, white, transparent)' }} />

        <div className="flex marquee-track gap-12">
          {items.map((logo, i) => (
            <div key={i} className="flex items-center justify-center flex-shrink-0 h-14 px-4 opacity-60 hover:opacity-100 transition-opacity duration-300 grayscale hover:grayscale-0">
              <Image
                src={logo.src}
                alt={logo.alt}
                width={140}
                height={56}
                className="h-10 w-auto object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
