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
          DEFAULT: '#6D28D9',
          50: '#F3ECFB',
          100: '#E7D9F7',
          200: '#CFB3EF',
          300: '#B78DE7',
          400: '#9F67DF',
          500: '#6D28D9',
          600: '#5A1FB5',
          700: '#461891',
          800: '#33116D',
          900: '#1F0A49',
        },
        'ace-cobalt': '#2E5BFF',
        'ace-slate': '#1A202C',
      },
      fontFamily: {
        heading: ['Space Grotesk', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}

export default config
