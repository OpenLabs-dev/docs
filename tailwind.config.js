import { openui } from '@openlabs/ui/tailwind'
import { createPreset } from 'fumadocs-ui/tailwind-plugin'

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './content/**/*.{md,mdx}',
    './mdx-components.{ts,tsx}',
    './node_modules/fumadocs-ui/dist/**/*.js',
    './node_modules/@openlabs/ui/dist/**/*.{js,ts,tsx,mdx}',
  ],
  presets: [createPreset()],
  plugins: [openui()],
}
