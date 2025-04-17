import { getDefaultConfig } from '@rainbow-me/rainbowkit'
import { CHAINS } from './chains'

let singleton: ReturnType<typeof getDefaultConfig> | undefined

if (!singleton) {
  singleton = getDefaultConfig({
    appName: 'WHype',
    projectId: process.env.NEXT_PUBLIC_WALLET_CONNECT_ID!,
    chains: [CHAINS[0], CHAINS[1]],
    ssr: false,
  })
}

export const wagmiConfig = singleton
