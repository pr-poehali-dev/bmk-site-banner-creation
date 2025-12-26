import type { Config } from 'tailwindcss';

export default {
  darkMode: ['class'],
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0EA5E9',
          foreground: '#FFFFFF',
          light: '#38BDF8',
          dark: '#0284C7'
        },
        secondary: {
          DEFAULT: '#FB923C',
          foreground: '#FFFFFF',
          light: '#FDBA74',
          dark: '#F97316'
        },
        accent: {
          DEFAULT: '#FBBF24',
          foreground: '#1F2937',
          light: '#FCD34D',
          dark: '#F59E0B'
        },
        background: '#FFFFFF',
        foreground: '#1F2937',
        muted: {
          DEFAULT: '#FEF3C7',
          foreground: '#78716C'
        },
        card: {
          DEFAULT: '#FFFFFF',
          foreground: '#1F2937'
        },
        border: '#E5E7EB',
        destructive: {
          DEFAULT: '#EF4444',
          foreground: '#FFFFFF'
        }
      },
      borderRadius: {
        lg: '1rem',
        md: '0.75rem',
        sm: '0.5rem'
      }
    }
  },
  plugins: [require('tailwindcss-animate')]
} satisfies Config;