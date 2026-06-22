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
        accent1: '#0ea5e9',
        accent2: '#10b981',
        'footer-bg': '#F8FAFC',
      },
      fontFamily: {
        heading: ['var(--font-heading)', 'sans-serif'],
        body: ['var(--font-body)', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-accent': 'linear-gradient(135deg, #0ea5e9 0%, #10b981 100%)',
        'gradient-hero': 'radial-gradient(circle at 50% -20%, rgba(14,165,233,0.15) 0%, rgba(248,250,252,0) 60%)',
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 8s infinite alternate',
        'spin-slow': 'spin 0.8s linear infinite',
        'fade-in': 'fadeIn 0.5s ease',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-15px) rotate(2deg)' },
        },
        'pulse-glow': {
          '0%': { transform: 'scale(1)', opacity: '0.7' },
          '100%': { transform: 'scale(1.1)', opacity: '1' },
        },
        fadeIn: {
          from: { opacity: '0', transform: 'translateY(10px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
      },
      boxShadow: {
        card: '0 10px 30px -10px rgba(0,0,0,0.08)',
        'btn-glow': '0 4px 15px rgba(14,165,233,0.3)',
        'btn-glow-hover': '0 6px 20px rgba(14,165,233,0.5)',
        'cyan-glow': '0 0 15px rgba(14,165,233,0.4)',
      },
      maxWidth: {
        site: '1400px',
      },
    },
  },
  plugins: [],
};

export default config;
