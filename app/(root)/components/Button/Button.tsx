import { button, buttonContainer, buttonWrapper } from './styles'
import { useAccount, useConfig } from 'wagmi'
import { TokenState } from '../../types'
import { useToast } from '@/app/(layout)/Toaster/context/ToastContext'
import { Dispatch, SetStateAction, useCallback } from 'react'
import { DynamicConnectButton, useDynamicContext } from '@dynamic-labs/sdk-react-core'

const Button = ({
  state,
  setAmount,
}: {
  state: TokenState
  setAmount: Dispatch<SetStateAction<number | undefined>>
}) => {
  const config = useConfig()
  const { isConnecting, isConnected } = useAccount()
  const { user } = useDynamicContext()
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
      {!isConnecting && !isConnected && !user && (
        <DynamicConnectButton buttonContainerClassName={buttonContainer} buttonClassName={button}>
          {'CONNECT'}
        </DynamicConnectButton>
      )}

      {isConnecting && !isConnected && !user && (
        <button className={button} disabled={true}>
          {'CONNECTING'}
        </button>
      )}

      {!isConnecting && isConnected && user && (
        <button
          className={button}
          disabled={!state.amount || Boolean(state?.error) || !state.isSupportedNetwork}
          onClick={handleClick}
        >
          {state.action}
        </button>
      )}
    </section>
  )
}

export default Button
