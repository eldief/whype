import { css } from '@/styled-system/css'

export const button = css({
  padding: '0 0.4rem',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: '0.25rem',
  transition: 'all 200ms ease',
  border: '1px solid token(colors.primary.mint-green)',
  // background: 'primary.mint-green',
  _hover: {
    cursor: 'pointer',
    border: '1px solid token(colors.primary.mint-green-lighter)',
  },
})
