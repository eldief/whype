import { css } from '@/styled-system/css'

export const addressButton = css({
  padding: '0.25rem 0.5rem',
  border: '1px solid token(colors.primary.mint-green)',
  borderRadius: '0.25rem',
  _hover: {
    cursor: 'pointer',
    border: '1px solid token(colors.primary.mint-green-lighter)',
  },
})

export const chainButton = css({
  // maxWidth: '10rem',
  padding: '0.25rem 0.5rem',
  border: '1px solid token(colors.primary.mint-green)',
  borderRadius: '0.25rem',
  marginRight: '0.5rem',
  whiteSpace: 'nowrap',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  _hover: {
    cursor: 'pointer',
    border: '1px solid token(colors.primary.mint-green-lighter)',
  },
})

export const connectButton = css({
  padding: '0.25rem 1rem',
  rounded: '0.5rem',
  background: 'primary.mint-green',
  color: 'primary.dark-green',
  transition: 'all 200ms ease',
  _hover: {
    cursor: 'pointer',
    background: 'primary.mint-green-lighter!',
  },
})

export const nav = css({
  position: 'sticky',
  top: 0,
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

export const icon = css({
  borderRadius: '100%',
  marginRight: '4rem',
})
