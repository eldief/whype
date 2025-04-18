import { defineConfig } from '@pandacss/dev'

export default defineConfig({
  // Whether to use css reset
  preflight: true,

  // Whether to update the .gitignore file.
  gitignore: true,

  // Specify aliased import path.
  importMap: '@/styled-system',

  // Where to look for your css declarations
  include: ['./app/**/*.{ts,tsx,js,jsx}'],

  // Files to exclude
  exclude: [],

  // Global styles
  globalCss: {
    '*': {
      fontWeight: 400,
    },

    html: {
      padding: 0,
      margin: 0,
      height: '100%',
      color: 'text.main',
      background: 'primary.background',
      textRendering: 'optimizeLegibility',
      WebkitFontSmoothing: 'antialiased',
      MozOsxFontSmoothing: 'auto',
      fontSize: '1.1rem',
      lineHeight: '1.5rem',
      WebkitTextSizeAdjust: '100%',
      MozTabSize: 4,
      tabSize: 4,
      msOverflowStyle: 'none',
      scrollbarWidth: 'none',
      scrollBehavior: 'smooth',
      '&::-webkit-scrollbar': {
        display: 'none',
      },
    },

    main: {
      position: 'relative',
      zIndex: 1,
    },
  },

  // Useful for theme customization
  theme: {
    breakpoints: {
      tablet: '744px',
      laptop: '1080px',
      desktop: '1440px',
      hd: '1920px',
    },
    tokens: {
      colors: {
        primary: {
          'light-green': { value: '#F6FEFD' },
          'mint-green': { value: '#50D2C1' },
          'mint-green-lighter': { value: '#97fbe4' },
          'dark-green': { value: '#072723' },
          'dark-blue': { value: '#0F1A1E' },
          'light-background': { value: '#474747' },
          background: { value: '#303030' },
          'dark-background': { value: '#212428' },
          error: { value: '#D24D57' },
        },
        text: {
          main: { value: '#FFFFFF' },
          black: { value: '#000000' },
          subtle: { value: '#939898' },
        },
      },
    },
  },

  // Wether to hash classnames for readability.
  hash: true,

  // Whether to minify the generated CSS
  minify: true,

  // Class name prefix
  prefix: 'whype',

  // The output directory for your css system
  outdir: 'styled-system',
})
