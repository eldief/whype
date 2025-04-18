import { css } from '@/styled-system/css'

export const footer = css({
  width: '100%',
  height: '64px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: {
    base: '0.5rem 0.75rem',
    tablet: '1rem 2rem',
  },
  background: 'primary.dark-blue',
  borderRadius: '0.25rem',
  border: '3px solid token(colors.primary.background)',
  borderTop: '1.5px solid token(colors.primary.background)!',
})

export const links = css({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '1rem',
})

export const separator = css({
  paddingRight: '1rem',
  borderRight: '1px solid token(colors.primary.light-background)',
})

export const content = css({
  color: 'text.subtle',
})
