import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        marker: ['var(--font-marker)'],
        covered: ['var(--font-covered)'],
        caveat: ['var(--font-caveat)'],
        dancing: ['var(--font-dancing)'],
        nothing: ['var(--font-nothing)'],
        indie: ['var(--font-indie)'],
        shadows: ['var(--font-shadows)'],
        satisfy: ['var(--font-satisfy)'],
        kalam: ['var(--font-kalam)'],
      },
    },
  },
  plugins: [],
}
export default config
