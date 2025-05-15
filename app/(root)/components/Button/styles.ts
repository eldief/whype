import { css } from '@/styled-system/css'

export const buttonWrapper = css({
  display: 'flex',
  flexDirection: 'row',
  width: '100%',
})

export const buttonContainer = css({
  width: '100%',
})

export const button = css({
  padding: '0.75rem',
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: '1rem',
  fontWeight: 'bold',
  transition: 'all 200ms ease',
  overflow: 'hidden',
  _enabled: {
    background: 'primary.mint-green',
    color: 'primary.dark-green',
    border: '1px solid token(colors.primary.light-background)',
  },
  _disabled: {
    cursor: 'not-allowed',
    background: 'primary.dark-background',
    border: '1px solid token(colors.primary.light-background)',
    color: 'text.subtle',
  },
  _hover: {
    _enabled: {
      cursor: 'pointer',
      background: 'primary.mint-green-lighter!',
    },
    _disabled: {
      cursor: 'not-allowed',
    },
  },
})
