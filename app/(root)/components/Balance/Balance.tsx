'use client'

import { balance, balanceCol, balanceRow, balanceWrapper, rounded } from './styles'
import { formatUnits } from 'viem'
import formatWithSeparator from '@/utils/formatWithSeparator'
import Image from 'next/image'
import { ActionType, TokenState } from '../../types'
import { useAccount } from 'wagmi'
import { AnimatePresence, motion } from 'framer-motion'
import { balanceAnimation } from '@/app/animations'

const Balance = ({ state }: { state: TokenState }) => {
  const { isConnected } = useAccount()

  const isWrap = state.action === ActionType.WRAP
  const label = isWrap ? 'HYPE' : 'WHYPE'
  const icon = isWrap ? '/icons/hype.svg' : '/icons/whype.svg'

  const balanceState = state.balance
  const isError = balanceState?.isError ?? false
  const isLoading = balanceState?.isLoading && !isError
  const hasData = !!balanceState?.data?.value

  let displayValue = 'Balance: 0.000'

  if (!isConnected) {
    displayValue = 'Not connected'
  } else if (!state.isSupportedNetwork) {
    displayValue = 'Unsupported chain'
  } else if (isError) {
    displayValue = 'Balance: error'
  } else if (isLoading) {
    displayValue = 'Balance: loading...'
  } else if (hasData) {
    const { value, decimals } = balanceState!.data!
    displayValue = `Balance: ${formatWithSeparator(formatUnits(value, decimals), 3)}`
  }

  return (
    <section className={balance}>
      <AnimatePresence mode='wait' initial={false}>
        <motion.div key={label + '-balance'} className={balanceRow} {...balanceAnimation}>
          <Image src={icon} alt={`${label} icon`} width={36} height={36} className={rounded} />
          <div className={balanceCol}>
            <strong>{label}</strong>
            <small className={balanceWrapper}>{displayValue}</small>
          </div>
        </motion.div>
      </AnimatePresence>
    </section>
  )
}

export default Balance
