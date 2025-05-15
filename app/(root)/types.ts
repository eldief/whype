import { Config, UseBalanceReturnType } from 'wagmi'
import { ToastMessage } from '../(layout)/Toaster/types'

export const ActionType = {
  WRAP: 'WRAP',
  UNWRAP: 'UNWRAP',
} as const

export type ActionType = (typeof ActionType)[keyof typeof ActionType]

export interface TokenState {
  address?: `0x${string}`
  wrapperAddress: `0x${string}`
  chainId: number
  isSupportedNetwork: boolean
  action: ActionType
  amount?: number
  error?: string
  logoPath: string
  balance: UseBalanceReturnType<{
    decimals: number
    formatted: string
    symbol: string
    value: bigint
  }>
  onClick: (
    config: Config,
    wrapperAddress: `0x${string}`,
    amount: number | undefined,
    decimals: number | undefined,
    addToast: (toast: Omit<ToastMessage, 'id'>) => void,
  ) => void | Promise<void>
}
