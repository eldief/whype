import { hypeliquidTestnet, hyperliquid } from './chains'

export const WHYPE_ADDRESSES: Record<number, `0x${string}`> = {
  [hyperliquid.id]: '0x5555555555555555555555555555555555555555',
  [hypeliquidTestnet.id]: '0x5555555555555555555555555555555555555555',
}
