import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // mesh.ai inspired palette
        cream:   '#F5F4EF',      // warm off-white — primary background
        navy:    '#083C62',      // deep navy — primary CTA, accent cards
        'navy-light': '#0D4F82', // lighter navy for hovers
        'navy-dark':  '#052A45', // darker navy
        'powder': '#D4E8F2',     // soft powder blue — section alt bg
        'powder-dark': '#B8D4E8',// darker powder
        'slate-heading': '#1A2B4A', // very dark navy for headings
        'slate-body':    '#5A6474', // cool gray for body text
        'slate-muted':   '#8A94A6', // muted labels

        // Blob accent colors
        'blob-pink':  '#FFCCD5',
        'blob-green': '#C8F0D4',
        'blob-blue':  '#B8D8F0',
        'blob-peach': '#FFE0C8',

        // Legacy aliases kept for compatibility
        accent1: '#0D4F82',
        accent2: '#083C62',
      },
      fontFamily: {
        heading: ['var(--font-heading)', 'sans-serif'],  // DM Sans
        body:    ['var(--font-body)',    'sans-serif'],  // Inter
      },
      backgroundImage: {
        'gradient-navy': 'linear-gradient(135deg, #083C62 0%, #0D4F82 100%)',
        'gradient-hero': 'radial-gradient(circle at 60% 50%, rgba(212,232,242,0.6) 0%, rgba(245,244,239,0) 65%)',
        'gradient-card': 'linear-gradient(135deg, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.7) 100%)',
        'gradient-section': 'linear-gradient(180deg, #D4E8F2 0%, #E8F3F9 100%)',
      },
      animation: {
        float:       'float 7s ease-in-out infinite',
        'float-slow':'float 10s ease-in-out infinite',
        'blob-move': 'blobMove 12s ease-in-out infinite alternate',
        'fade-up':   'fadeUp 0.6s ease forwards',
        'fade-in':   'fadeIn 0.5s ease forwards',
        marquee:     'marqueeScroll 32s linear infinite',
        'spin-slow': 'spin 1s linear infinite',
        shimmer:     'shimmer 2s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%':      { transform: 'translateY(-18px) rotate(2deg)' },
        },
        blobMove: {
          '0%':   { transform: 'translate(0px, 0px) scale(1)' },
          '33%':  { transform: 'translate(20px, -15px) scale(1.05)' },
          '66%':  { transform: 'translate(-15px, 10px) scale(0.97)' },
          '100%': { transform: 'translate(0px, 0px) scale(1)' },
        },
        fadeUp: {
          from: { opacity: '0', transform: 'translateY(30px)' },
          to:   { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          from: { opacity: '0' },
          to:   { opacity: '1' },
        },
        marqueeScroll: {
          from: { transform: 'translateX(0)' },
          to:   { transform: 'translateX(-50%)' },
        },
        shimmer: {
          '0%':   { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
      boxShadow: {
        card:     '0 4px 24px -4px rgba(8,60,98,0.08)',
        'card-md':'0 8px 32px -6px rgba(8,60,98,0.12)',
        'card-lg':'0 16px 48px -8px rgba(8,60,98,0.16)',
        'navy':   '0 4px 20px rgba(8,60,98,0.25)',
        'navy-lg':'0 8px 32px rgba(8,60,98,0.35)',
        btn:      '0 4px 16px rgba(8,60,98,0.3)',
        'btn-hover': '0 8px 24px rgba(8,60,98,0.45)',
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
      },
      maxWidth: {
        site: '1280px',
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
      },
    },
  },
  plugins: [],
};

export default config;
