import type { Metadata } from 'next'

import LINKS from '@/constants/links'
import { token } from '@/styled-system/tokens'

const brandColor = token('colors.primary.dark-green')

const buildMetaData = (): Metadata => {
  const defaultTitle = `WHype`
  const defaultDescription = 'W <> Hype'
  const hash = `${process.env.NEXT_PUBLIC_VERCEL_GIT_COMMIT_SHA?.slice(0, 7)}`
  const images = [
    {
      height: 600,
      url: '/cover.svg',
      width: 1200,
    },
  ]
  const shouldFollowAndIndex = process.env.NEXT_PUBLIC_VERCEL_ENV === 'production'

  return {
    alternates: {
      canonical: '/',
    },
    appleWebApp: { title: 'WHype' },
    applicationName: 'WHype',
    description: defaultDescription,
    icons: {
      icon: [
        {
          rel: 'icon',
          sizes: '96x96',
          type: 'image/svg+xml',
          url: `/favicon.svg?v=${hash}`,
        },
        {
          rel: 'icon',
          sizes: '96x96',
          type: 'image/png',
          url: `/favicon-96x96.png?v=${hash}`,
        },
        {
          rel: 'shortcut icon',
          url: `/favicon.ico?v=${hash}`,
        },
      ],
      apple: [
        {
          sizes: '180x180',
          url: `/apple-touch-icon.png?v=${hash}`,
        },
      ],
    },
    manifest: '/site.webmanifest',
    metadataBase: new URL(LINKS.SITE_URL),
    openGraph: {
      description: 'W <> Hype',
      images,
      title: 'WHype',
      type: 'website',
      url: '/',
      siteName: 'WHype',
    },
    other: {
      'msapplication-TileColor': brandColor,
    },
    robots: {
      follow: shouldFollowAndIndex,
      index: shouldFollowAndIndex,
    },
    title: defaultTitle,
    twitter: {
      card: 'summary_large_image',
      creator: '@eldief',
      description: defaultDescription,
      images,
      title: defaultTitle,
    },
  }
}

export default buildMetaData
