import Link from 'next/link'
import { footer, content, separator, links } from './styles'
import { css } from '@/styled-system/css'
import PATHS from '@/constants/paths'

const Footer = () => {
  return (
    <footer className={footer}>
      <Link href={PATHS.X} target='_blank' rel='noopener noreferrer' key='docs'>
        <small className={content}>{'Made by @eldief'}</small>
      </Link>
      <div className={css({ flexGrow: 1 })} />
      <div className={links}>
        <Link
          className={separator}
          href={PATHS.DOCS}
          target='_blank'
          rel='noopener noreferrer'
          key='docs'
        >
          <small className={content}>{'Docs'}</small>
        </Link>
        <Link href={PATHS.DOCS} target='_blank' rel='noopener noreferrer' key='docs'>
          <small className={content}>{'Github'}</small>
        </Link>
      </div>
    </footer>
  )
}

export default Footer
