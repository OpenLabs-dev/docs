import { openui } from '@openlabs/theme'
import { createPreset } from 'fumadocs-ui/tailwind-plugin'

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './content/**/*.{md,mdx}',
    './mdx-components.{ts,tsx}',
    './node_modules/fumadocs-ui/dist/**/*.js',
    './node_modules/@openlabs/theme/dist/**/*.{js,ts,tsx,jsx}',
  ],
  presets: [createPreset()],
  plugins: [openui()],
}
