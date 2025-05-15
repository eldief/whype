import { css } from '@/styled-system/css'

export const buttonWrapper = css({
  position: 'relative',
  display: 'flex',
  flexDirection: 'row',
  width: '100%',
  borderRadius: '1rem',
  justifyContent: 'space-evenly',
  background: 'primary.dark-background',
  border: '1px solid token(colors.primary.light-background)',
  overflow: 'hidden',
})

export const slider = css({
  position: 'absolute',
  top: '0',
  bottom: '0',
  width: '50%',
  borderRadius: '0.9rem',
  transition: 'left 0.2s ease',
  background: 'primary.light-background',
  zIndex: 0,
})

export const selector = css({
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '10px',
  padding: '0.25rem',
  zIndex: '1',
  color: 'text.subtle',
  _hover: {
    cursor: 'pointer',
  },
})

export const rounded = css({
  borderRadius: '100%',
})

export const selectorSelected = css({
  color: 'text.main',
})
