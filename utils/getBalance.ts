import { UseBalanceReturnType } from 'wagmi'

export const getBalance = (data?: UseBalanceReturnType['data']) => {
  if (!data) return 0
  return Number(data.value) / 10 ** data.decimals
}
