import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    // colors: {
    //   primary: '#7e22ce',

    //   white: {
    //     title: '#18181b',
    //     subtitle: '#27272a',
    //     paragraph: '#3f3f46',
    //     background: '#f4f4f5'
    //   },
    //   black: {
    //     title: '#e4e4e7',
    //     subtitle: '#d4d4d8',
    //     paragraph: '#71717aj',
    //     background: '#27272a'
    //   },
    // },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
export default config
