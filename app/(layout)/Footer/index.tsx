import Link from 'next/link'
import { footer, content, separator, links } from './styles'
import { css } from '@/styled-system/css'
import LINKS from '@/constants/links'

const Footer = () => {
  return (
    <footer className={footer}>
      <Link href={LINKS.X} target='_blank' rel='noopener noreferrer' key='x-profile'>
        <small className={content}>{'Made by @eldief'}</small>
      </Link>
      <div className={css({ flexGrow: 1 })} />
      <div className={links}>
        <Link
          className={separator}
          href={LINKS.DOCS}
          target='_blank'
          rel='noopener noreferrer'
          key='docs'
        >
          <small className={content}>{'Docs'}</small>
        </Link>
        <Link
          className={separator}
          href={LINKS.GITHUB}
          target='_blank'
          rel='noopener noreferrer'
          key='github'
        >
          <small className={content}>{'Github'}</small>
        </Link>
        <Link href={LINKS.COMMIT_HASH} target='_blank' rel='noopener noreferrer' key='commit-hash'>
          <small className={content}>
            {process.env.NEXT_PUBLIC_VERCEL_GIT_COMMIT_SHA?.slice(0, 7) ?? 'commit1'}
          </small>
        </Link>
      </div>
    </footer>
  )
}

export default Footer
