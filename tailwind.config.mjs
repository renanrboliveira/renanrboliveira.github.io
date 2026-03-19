/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        surface: {
          DEFAULT: '#0A0A0A',
          light: '#FAFAFA',
          card: '#141414',
          'card-light': '#FFFFFF',
        },
        accent: {
          DEFAULT: '#3B82F6',
          hover: '#2563EB',
        },
        muted: '#888888',
        border: {
          DEFAULT: '#1F1F1F',
          light: '#E5E7EB',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      maxWidth: {
        content: '720px',
      },
    },
  },
  plugins: [],
};
