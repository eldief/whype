'use client'

import { WHYPE_ADDRESSES } from '@/wagmi/tokens'
import Balance from './components/Balance/Balance'
import Button from './components/Button/Button'
import Input from './components/Input/Input'
import MaxButton from './components/MaxButton/MaxButton'
import Selectors from './components/Selectors/Selector'
import { useEffect, useMemo, useState } from 'react'
import { ActionType, TokenState } from './types'
import { useAccount, useBalance, useChainId } from 'wagmi'
import { wrapToken } from '@/wagmi/wrapToken'
import { unwrapToken } from '@/wagmi/unwrapToken'
import { balanceRow, main } from './styles'
import { useDynamicContext } from '@dynamic-labs/sdk-react-core'
import { getChainInfoById } from '@/utils/toChainName'

const Root = () => {
  const { address } = useAccount()
  const chainId = useChainId()
  const { network } = useDynamicContext()
  const { isSupported } = getChainInfoById(network)

  const hype = useBalance({
    address,
    query: {
      refetchInterval: 5000,
      refetchOnReconnect: true,
      refetchOnMount: true,
      refetchOnWindowFocus: true,
    },
  })

  const whype = useBalance({
    address,
    token: WHYPE_ADDRESSES[chainId],
    query: {
      refetchInterval: 5000,
      refetchOnReconnect: true,
      refetchOnMount: true,
      refetchOnWindowFocus: true,
    },
  })

  const balances = useMemo(
    () => ({
      WRAP: hype,
      UNWRAP: whype,
    }),
    [hype, whype],
  )

  const logos = useMemo(
    () => ({
      WRAP: '/icons/hype.svg',
      UNWRAP: '/icons/whype.svg',
    }),
    [],
  )

  const onClick = useMemo(
    () => ({
      WRAP: wrapToken,
      UNWRAP: unwrapToken,
    }),
    [],
  )

  const [action, setAction] = useState<ActionType>('WRAP')
  const [amount, setAmount] = useState<number | undefined>(undefined)
  const [error, setError] = useState<string | undefined>(undefined)

  useEffect(() => {
    setAmount(undefined)
    setError(undefined)
  }, [action, setAmount, setError])

  const currentState = useMemo<TokenState>(
    () => ({
      address,
      chainId,
      isSupportedNetwork: isSupported,
      wrapperAddress: WHYPE_ADDRESSES[chainId],
      action,
      amount,
      error,
      logoPath: logos[action],
      balance: balances[action],
      onClick: onClick[action],
    }),
    [action, address, amount, error, chainId, balances, logos, onClick, isSupported],
  )

  return (
    <div className={main}>
      <Selectors action={action} setAction={setAction} />
      <section className={balanceRow}>
        <Balance state={currentState} />
        <MaxButton state={currentState} setAmount={setAmount} />
      </section>
      <Input state={currentState} setAmount={setAmount} setError={setError} />
      <Button state={currentState} setAmount={setAmount} />
    </div>
  )
}

export default Root
export const dynamic = 'force-dynamic'
