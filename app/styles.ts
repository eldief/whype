import { css } from '@/styled-system/css'

export const layoutWrapper = css({
  position: 'relative',
  height: 'min-content',
  minHeight: '100dvh',
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  backgroundAttachment: 'fixed',
  backgroundBlendMode: 'overlay',
  backgroundColor: 'primary.dark-blue',
})
