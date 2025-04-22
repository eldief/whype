import { supportedChains } from '@/wagmi/chains'

export function getChainInfoById(id: string | number | undefined): {
  isSupported: boolean
  name?: string
} {
  const chain = supportedChains.find(chain => chain.id === Number(id))
  return {
    isSupported: !!chain,
    name: chain?.name,
  }
}
