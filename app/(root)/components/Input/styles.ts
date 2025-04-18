import { css } from '@/styled-system/css'

export const inputWrapper = css({
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

export const inputHeader = css({
  width: '100%',
  alignSelf: 'start',
  color: 'text.subtle',
  paddingX: '0.25rem',
})

export const inputFooter = css({
  display: 'flex',
  height: 'max-content',
  width: '100%',
  borderTop: '1px solid token(colors.primary.light-background)',
})

export const inputFieldWrapper = css({
  display: 'flex',
  flexDirection: 'row',
  width: '100%',
  justifyContent: 'center',
  alignItems: 'center',
  marginX: 'auto',
})

export const inputField = css({
  width: '100%',
  height: '100%',
  textAlign: 'center',
  outline: 'none',
  fontSize: '4rem',
})

export const errorMessage = css({
  height: '1rem',
  width: '100%',
  color: 'primary.error',
  textAlign: 'center',
})
