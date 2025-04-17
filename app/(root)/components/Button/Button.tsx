import { button, buttonWrapper } from './styles'
import { useAccount, useConfig } from 'wagmi'
import { useConnectModal } from '@rainbow-me/rainbowkit'
import { TokenState } from '../../types'
import { useToast } from '@/app/(layout)/Toaster/context/ToastContext'
import { Dispatch, SetStateAction, useCallback } from 'react'

const Button = ({
  state,
  setAmount,
}: {
  state: TokenState
  setAmount: Dispatch<SetStateAction<number | undefined>>
}) => {
  const { isConnecting, isConnected } = useAccount()
  const { openConnectModal } = useConnectModal()
  const config = useConfig()
  const { addToast } = useToast()

  const handleClick = useCallback(() => {
    if (state.onClick) {
      state.onClick(
        config,
        state.wrapperAddress,
        state?.amount,
        state.balance.data?.decimals,
        addToast,
      )
      setAmount(undefined)
    }
  }, [state, config, addToast, setAmount])

  return (
    <section className={buttonWrapper}>
      {!isConnecting && !isConnected && (
        <button className={button} onClick={openConnectModal} disabled={Boolean(state?.error)}>
          {'CONNECT'}
        </button>
      )}
      {(isConnecting || isConnected) && (
        <button
          className={button}
          disabled={!state.amount || Boolean(state?.error)}
          onClick={handleClick}
        >
          {state.action}
        </button>
      )}
    </section>
  )
}

export default Button
