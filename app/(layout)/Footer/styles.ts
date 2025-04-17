import { css } from '@/styled-system/css'

export const footer = css({
  position: 'absolute',
  bottom: 0,
  zIndex: 10,

  width: '100%',
  height: '64px',

  display: 'flex',
  alignItems: 'center',

  padding: {
    base: '0.5rem 0.75rem',
    tablet: '1rem 2rem',
  },
  background: 'primary.dark-blue',
  borderRadius: '0.25rem',
  border: '3px solid token(colors.primary.background)',
  borderBottom: '1.5px solid token(colors.primary.background)!',
})

export const content = css({
  color: 'text.subtle',
})
