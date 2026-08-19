import { button, buttonContainer, buttonWrapper } from './styles'
import { useConnection, useConfig } from 'wagmi'
import { TokenState, ActionType } from '../../types'
import { useToast } from '@/app/(layout)/Toaster/context/ToastContext'
import { Dispatch, SetStateAction, useCallback } from 'react'
import { DynamicConnectButton, useDynamicContext } from '@dynamic-labs/sdk-react-core'
import { AnimatePresence, motion } from 'framer-motion'
import { slideInLeftAnimation, slideInRightAnimation } from '@/app/animations'
import { useMounted } from '@/utils/useMounted'

const Button = ({
  state,
  setAmount,
}: {
  state: TokenState
  setAmount: Dispatch<SetStateAction<number | undefined>>
}) => {
  const config = useConfig()
  const mounted = useMounted()
  const { isConnecting, isConnected } = useConnection()
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
      {!mounted && (
        <button className={button} disabled={true}>
          {'CONNECTING'}
        </button>
      )}

      {mounted && !isConnecting && !isConnected && !user && (
        <DynamicConnectButton buttonContainerClassName={buttonContainer} buttonClassName={button}>
          {'CONNECT'}
        </DynamicConnectButton>
      )}

      {mounted && isConnecting && !isConnected && !user && (
        <button className={button} disabled={true}>
          {'CONNECTING'}
        </button>
      )}

      {mounted && !isConnecting && isConnected && user && (
        <button
          className={button}
          disabled={!state.amount || Boolean(state?.error) || !state.isSupportedNetwork}
          onClick={handleClick}
        >
          <AnimatePresence mode='wait' initial={false}>
            <motion.span
              key={state.action}
              {...(state.action === ActionType.WRAP ? slideInLeftAnimation : slideInRightAnimation)}
            >
              {state.action}
            </motion.span>
          </AnimatePresence>
        </button>
      )}
    </section>
  )
}

export default Button
