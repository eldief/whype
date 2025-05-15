import { css } from '@/styled-system/css'

export const main = css({
  width: '100%',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  flexGrow: 1,
  paddingY: '4rem',
  borderRadius: '0.25rem',
  borderX: '3px solid token(colors.primary.background)',
  borderY: '1.5px solid token(colors.primary.background)!',
})
