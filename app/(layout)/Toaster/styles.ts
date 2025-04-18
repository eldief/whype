import { css } from '@/styled-system/css'

export const list = css({
  position: 'fixed',
  zIndex: '100',
  bottom: {
    base: '4.2rem',
    tablet: '4.2rem',
  },
  right: {
    base: '1rem',
    tablet: '2rem',
  },
  width: {
    base: 'calc(100% - 2rem)',
    tablet: '20rem',
    laptop: '20rem',
  },
  display: 'flex',
  flexDirection: 'column-reverse',
})
