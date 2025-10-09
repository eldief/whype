import { Chain, defineChain } from 'viem'

export const hyperliquid = defineChain({
  id: 999,
  name: 'Hyperliquid',
  nativeCurrency: {
    decimals: 18,
    name: 'Hyperliquid',
    symbol: 'HYPE',
  },
  rpcUrls: {
    default: { http: ['https://rpc.hyperliquid.xyz/evm'] },
  },
  blockExplorers: {
    default: {
      name: 'HyperliquidExplorer',
      url: 'https://hyperevmscan.io/',
    },
  },
  testnet: false,
})

export const hyperliquidTestnet = defineChain({
  id: 998,
  name: 'Testnet Hyperliquid',
  nativeCurrency: {
    decimals: 18,
    name: 'Hyperliquid',
    symbol: 'HYPE',
  },
  rpcUrls: {
    default: { http: ['https://rpc.hyperliquid-testnet.xyz/evm'] },
  },
  blockExplorers: {
    default: {
      name: 'HyperliquidExplorer',
      url: 'https://testnet.purrsec.com/',
    },
  },
  testnet: true,
})

export const supportedChains: Chain[] = [hyperliquid, hyperliquidTestnet]
