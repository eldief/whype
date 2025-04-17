import Link from 'next/link'
import { footer, content } from './styles'
import { css } from '@/styled-system/css'
import PATHS from '@/constants/paths'

const Footer = () => {
  return (
    <footer className={footer}>
      <div className={css({ flexGrow: 1 })} />
      <Link href={PATHS.DOCS} target='_blank' rel='noopener noreferrer' key='docs'>
        <small className={content}>{'Docs'}</small>
      </Link>
    </footer>
  )
}

export default Footer
