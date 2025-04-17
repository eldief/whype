import { css } from '@/styled-system/css'

export const list = css({
  position: 'fixed',
  zIndex: '100',
  bottom: {
    base: '0.5rem',
    tablet: '1rem',
  },
  right: {
    base: '0.5rem',
    tablet: '1rem',
  },

  width: {
    base: 'calc(100% - 1rem)',
    tablet: '20rem',
    laptop: '20rem',
  },
})
