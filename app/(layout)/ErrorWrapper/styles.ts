import { css } from '@/styled-system/css'

export const main = css({
  marginX: 'auto',
  width: '100%',
  maxWidth: '420px',
  display: 'flex',
  flexDirection: 'column',
  borderRadius: '0.25rem',
  padding: '0.5rem',
  gap: '1rem',
})

export const suspenceSelectors = css({
  display: 'flex',
  width: '100%',
  height: '37.2px',
  borderRadius: '1rem',
  background: 'primary.dark-background',
  // border: '1px solid token(colors.primary.light-background)'
})

export const suspenceBalanceWrapper = css({
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',
  justifyContent: 'space-between',
  borderRadius: '0.25rem',
})

export const suspenceBalanceRowWrapper = css({
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
})

export const suspenceBalanceRow = css({
  width: '100%',
  height: '38.72px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'start',
  gap: '10px',
})

export const suspenceIcon = css({
  width: '32px',
  height: '32px',
  rounded: '100%',
  background: 'primary.dark-background',
})

export const suspenceCol = css({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'start',
  justifyContent: 'start',
  gap: '5px',
})

export const suspenceSymbol = css({
  width: '5rem',
  height: '20px',
  borderRadius: '1rem',
  background: 'primary.dark-background',
})

export const suspenceBalance = css({
  width: '8rem',
  height: '15px',
  borderRadius: '1rem',
  background: 'primary.dark-background',
})

export const suspenceMaxButton = css({
  width: '42.66px',
  height: '28.4px',
  borderRadius: '0.25rem',
  background: 'primary.dark-background',
})

export const errorWrapper = css({
  position: 'relative',
  height: '9rem',
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  borderRadius: '1rem',
  justifyContent: 'start',
  background: 'primary.dark-background',
  border: '1px solid token(colors.primary.light-background)',
  overflow: 'hidden',
  padding: '0.5rem',
})

export const errorHeader = css({
  width: '100%',
  alignSelf: 'start',
  color: 'text.subtle',
  paddingX: '0.25rem',
})

export const errorFieldWrapper = css({
  display: 'flex',
  flexDirection: 'row',
  width: '100%',
  height: '100%',
  justifyContent: 'center',
  alignItems: 'center',
  marginX: 'auto',
  fontSize: '4rem',
})

export const suspenceButtonWrapper = css({
  display: 'flex',
  flexDirection: 'row',
  width: '100%',
})

export const suspenceButton = css({
  padding: '0.75rem',
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: '1rem',
  fontWeight: 'bold',
  transition: 'all 200ms ease',
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
