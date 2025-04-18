import { Config } from 'wagmi'
import { WRAPPER_ABI } from '@/wagmi/abi'
import { estimateFeesPerGas, waitForTransactionReceipt, writeContract } from 'wagmi/actions'
import { parseUnits } from 'viem'
import { ToastMessage } from '@/app/(layout)/Toaster/types'
import { hasShortMessage } from './utils'

export const wrapToken = async (
  config: Config,
  wrapperAddress: `0x${string}`,
  amount: number | undefined,
  decimals: number | undefined,
  addToast: (toast: Omit<ToastMessage, 'id'>) => void,
) => {
  if (!amount || !decimals) return

  try {
    const { maxFeePerGas, maxPriorityFeePerGas } = await estimateFeesPerGas(config)
    const formattedAmount = parseUnits(amount.toString(), decimals)

    const tx = await writeContract(config, {
      abi: WRAPPER_ABI,
      address: wrapperAddress,
      args: [],
      value: formattedAmount,
      functionName: 'deposit',
      maxFeePerGas,
      maxPriorityFeePerGas,
    })

    addToast({
      message: `Wrapping ${amount} HYPE...`,
      type: 'default',
    })

    await waitForTransactionReceipt(config, { hash: tx })

    addToast({
      message: `Wrapped ${amount} HYPE`,
      type: 'success',
    })
  } catch (err: unknown) {
    if (hasShortMessage(err)) {
      addToast({
        message: err.shortMessage,
        type: 'error',
      })
    } else if (err instanceof Error) {
      addToast({
        message: err.message,
        type: 'error',
      })
    } else {
      addToast({
        message: 'Unexpected error.',
        type: 'error',
      })
    }
  }
}
