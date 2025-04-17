import { CHAINS } from '@/wagmi/chains'

export function getChainNameById(id: number): string | undefined {
  const chain = CHAINS.find(chain => chain.id === id)
  return chain?.name
}
