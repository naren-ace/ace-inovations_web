import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'ace-blue': {
          DEFAULT: '#3B6FE8',
          50: '#EBF0FD',
          100: '#D6E1FB',
          200: '#ADC3F7',
          300: '#85A5F3',
          400: '#5C87EF',
          500: '#3B6FE8',
          600: '#1A52D6',
          700: '#1440A5',
          800: '#0E2E75',
          900: '#081C45',
        },
        'ace-violet': {
          DEFAULT: '#7B2D8E',
          50: '#F5ECFA',
          100: '#EBDAF5',
          200: '#D6B4EB',
          300: '#C28FE1',
          400: '#9E4DB8',
          500: '#7B2D8E',
          600: '#652476',
          700: '#4F1B5D',
          800: '#391345',
          900: '#230A2C',
        },
        'ace-cobalt': '#2E5BFF',
        'ace-slate': '#1A202C',
      },
      fontFamily: {
        heading: ['var(--font-outfit)', 'sans-serif'],
        body: ['var(--font-inter)', 'sans-serif'],
      },
      transitionDuration: {
        '400': '400ms',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}

export default config
