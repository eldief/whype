import { inputHeader, inputWrapper, inputField, inputFieldWrapper, errorMessage } from './styles'
import { NumericFormat } from 'react-number-format'
import { getBalance } from '@/utils/getBalance'
import { ActionType, TokenState } from '../../types'
import { Dispatch, SetStateAction, useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { slideInLeftAnimation, slideInRightAnimation } from '@/app/animations'

const Input = ({
  state,
  setAmount,
  setError,
}: {
  state: TokenState
  setAmount: Dispatch<SetStateAction<number | undefined>>
  setError: Dispatch<SetStateAction<string | undefined>>
}) => {
  useEffect(() => {
    const balance = getBalance(state.balance?.data)
    const isValid = state.amount == null || state.amount <= balance
    setError(isValid ? undefined : 'Insufficient balance')
  }, [state.amount, state.balance, setError])

  const header = state.action === ActionType.WRAP ? 'wrapping' : 'unwrapping'

  return (
    <section className={inputWrapper}>
      <AnimatePresence mode='wait' initial={false}>
        <motion.small
          key={header + '-action'}
          className={inputHeader}
          style={{ textAlign: state.action === ActionType.WRAP ? 'start' : 'end' }}
          {...(state.action === ActionType.WRAP ? slideInLeftAnimation : slideInRightAnimation)}
        >
          {`You're ${header}`}
        </motion.small>
      </AnimatePresence>
      <section className={inputFieldWrapper}>
        <NumericFormat
          allowNegative={false}
          autoComplete='off'
          className={inputField}
          id='quantity'
          inputMode='numeric'
          name='quantity'
          onValueChange={e => setAmount(e.floatValue)}
          placeholder='0'
          type='text'
          min={0}
          value={state.amount ?? ''}
        />
      </section>
      <small className={errorMessage}>{state.error}</small>
    </section>
  )
}

export default Input
