import { Config } from 'tailwindcss'
import tailwindAnimate from 'tailwindcss-animate'
import daisyui from 'daisyui'
import themes from 'daisyui/src/theming/themes'

const config: Config = {
    darkMode: ["class"],
    content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  plugins: [tailwindAnimate, daisyui],
  daisyui: {
    themes: [
      "light",
      "dark",
      "cupcake",
      "emerald",
      "corporate",
      "synthwave",
      "retro",
      "cyberpunk"
    ],
    base: true,
    styled: true,
    utils: true,
    prefix: "",
    logs: false,
  },
}

export default config
  
  
