import { hyperliquidTestnet, hyperliquid } from './chains'

export const WHYPE_ADDRESSES: Record<number, `0x${string}`> = {
  [hyperliquid.id]: '0x5555555555555555555555555555555555555555',
  [hyperliquidTestnet.id]: '0x5555555555555555555555555555555555555555',
}
