import { Config } from 'wagmi'
import { WRAPPER_ABI } from '@/wagmi/abi'
import { estimateFeesPerGas, waitForTransactionReceipt, writeContract } from 'wagmi/actions'
import { parseUnits } from 'viem'
import { ToastMessage } from '@/app/(layout)/Toaster/types'

export const unwrapToken = async (
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
      args: [formattedAmount],
      functionName: 'withdraw',
      maxFeePerGas,
      maxPriorityFeePerGas,
    })

    addToast({
      message: `Unwrapping ${amount} WHYPE...`,
      type: 'default',
    })

    await waitForTransactionReceipt(config, { hash: tx })

    addToast({
      message: `Unwrapped ${amount} WHYPE`,
      type: 'success',
    })
  } catch (err: unknown) {
    if (err instanceof Error) {
      addToast({
        message: err?.message || 'Something went wrong.',
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
