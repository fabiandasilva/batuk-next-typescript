import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      screens: {
        'tablet': '640px',
        'desktop': '1024px',
      },
      fontFamily: {
        'custom': ['DINPRO', 'sans-serif'],
      },
      height: {
        '1/3': '13.33%',
    },
    backgroundColor: {
      'black-60': 'rgba(0, 0, 0, 0.71)',
    },
    },
  },
  plugins: [],
};

export default config;
