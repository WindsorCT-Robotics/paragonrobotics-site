import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        windsorRed: '#822224', // Add your custom color here
      },
    },
  },
  plugins: [],
}

export default config
