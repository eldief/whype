import { createConfig, http } from 'wagmi'
import { hyperliquid, hyperliquidTestnet } from './chains'

let singleton: ReturnType<typeof createConfig> | undefined

if (!singleton) {
  singleton = createConfig({
    chains: [hyperliquid, hyperliquidTestnet],
    transports: {
      [hyperliquid.id]: http(),
      [hyperliquidTestnet.id]: http(),
    },
    multiInjectedProviderDiscovery: false,
  })
}

export const wagmiConfig = singleton
