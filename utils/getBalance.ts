import { BalanceResult } from '@/app/(root)/types'

export const getBalance = (data?: BalanceResult['data']) => {
  if (!data) return 0
  return Number(data.value) / 10 ** data.decimals
}
