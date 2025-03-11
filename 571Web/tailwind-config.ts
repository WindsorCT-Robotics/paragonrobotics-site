import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        wred: '#822224', // Custom color
      },
      fontFamily: {
        evliEmpire: ['EvliEmpire', 'sans-serif'], // Custom font family
      },
    },
  },
  plugins: [],
}

export default config
