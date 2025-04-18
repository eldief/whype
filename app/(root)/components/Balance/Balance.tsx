'use client'

import { balance, balanceCol, balanceRow, balanceWrapper, rounded } from './styles'
import { formatUnits } from 'viem'
import formatWithSeparator from '@/utils/formatWithSeparator'
import Image from 'next/image'
import { TokenState } from '../../types'

const Balance = ({ state }: { state: TokenState }) => {
  const label = state.action === 'WRAP' ? 'HYPE' : 'WHYPE'
  const icon = state.action === 'WRAP' ? '/icons/hype.svg' : '/icons/whype.svg'

  const isError = state.balance?.isError ?? false
  const isLoading = state.balance?.isLoading && !isError
  const hasData = state.balance?.data && state.balance.data.value

  let displayValue = '0.000'
  if (isError) {
    displayValue = 'Error'
  } else if (isLoading) {
    displayValue = 'Loading...'
  } else if (hasData) {
    displayValue = formatWithSeparator(
      formatUnits(state.balance.data!.value, state.balance.data!.decimals),
      3,
    )!
  }

  return (
    <section className={balance}>
      <div className={balanceRow}>
        <Image src={icon} alt={`${label} icon`} width={32} height={32} className={rounded} />
        <div className={balanceCol}>
          <strong>{label}</strong>
          <small className={balanceWrapper}>
            {'Balance: '}
            {displayValue}
          </small>
        </div>
      </div>
    </section>
  )
}

export default Balance
