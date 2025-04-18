import type { Metadata } from 'next'

import LINKS from '@/constants/links'
import { token } from '@/styled-system/tokens'

const brandColor = token('colors.primary.dark-green')

const buildMetaData = (): Metadata => {
  const name = 'WHYPE'
  const title = `Whype`
  const description = 'Easily wrap HYPE tokens into WHYPE'
  const hash = `${process.env.NEXT_PUBLIC_VERCEL_GIT_COMMIT_SHA?.slice(0, 7)}`
  const shouldFollowAndIndex = process.env.NEXT_PUBLIC_VERCEL_ENV === 'production'
  const images = [
    {
      height: 630,
      width: 1200,
      url: `${process.env.NEXT_PUBLIC_SITE_URL}/cover.png`,
    },
  ]

  return {
    alternates: {
      canonical: '/',
    },
    appleWebApp: { title: title },
    applicationName: title,
    description: description,
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
      description: description,
      images,
      title: title,
      type: 'website',
      url: '/',
      siteName: name,
    },
    other: {
      'msapplication-TileColor': brandColor,
    },
    robots: {
      follow: shouldFollowAndIndex,
      index: shouldFollowAndIndex,
    },
    title: title,
    twitter: {
      card: 'summary_large_image',
      creator: '@eldief',
      description: description,
      images,
      title: title,
    },
  }
}

export default buildMetaData
