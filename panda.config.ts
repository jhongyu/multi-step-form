import { defineConfig, defineGlobalStyles } from '@pandacss/dev'

const globalCss = defineGlobalStyles({
  'html, body': {
    height: '100%',
  },
})

export default defineConfig({
  // Whether to use css reset
  preflight: true,

  // Where to look for your css declarations
  include: ['./src/**/*.{js,jsx,ts,tsx}', './pages/**/*.{js,jsx,ts,tsx}'],

  // Files to exclude
  exclude: [],

  // Useful for theme customization
  theme: {
    extend: {
      tokens: {
        colors: {
          white: {
            value: 'hsl(0deg 0% 100%)',
          },
          denim: {
            value: 'hsl(213deg 96% 18%)',
          },
          gray: {
            value: 'hsl(231deg 11% 63%)',
          },
          lightBlue: {
            value: 'hsl(228deg 100% 83%)',
          },
          lightGray: {
            value: 'hsl(229deg 24% 87%)',
          },
          lighterGray: {
            value: 'hsl(231deg 100% 99%)',
          },
          orange: {
            value: 'hsl(23deg 100% 75%)',
          },
          pink: {
            value: 'hsl(354deg 91% 74%)',
          },
          purple: {
            value: 'hsl(243deg 100% 62%)',
          },
          red: {
            value: 'hsl(354deg 84% 57%)',
          },
          skyBlue: {
            value: 'hsl(206deg 94% 87%)',
          },
          blue: {
            value: 'hsl(213deg 72% 31%)',
          },
        },
      },
      semanticTokens: {
        colors: {
          bg: {
            value: 'hsl(218deg 100% 97%)',
          },
          border: {
            value: 'hsl(231deg 23% 87%)',
          },
        },
      },
    },
  },

  // The output directory for your css system
  outdir: 'styled-system',

  globalCss,
})
