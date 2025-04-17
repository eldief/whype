import { Dispatch, SetStateAction } from 'react'
import { button } from './styles'
import { TokenState } from '../../types'
import { getBalance } from '@/utils/getBalance'

const MaxButton = ({
  state,
  setAmount,
}: {
  state: TokenState
  setAmount: Dispatch<SetStateAction<number | undefined>>
}) => {
  return (
    <button
      className={button}
      onClick={() => setAmount(getBalance(state.balance?.data))}
      disabled={Boolean(state?.error)}
    >
      <small>{'Max'}</small>
    </button>
  )
}

export default MaxButton
