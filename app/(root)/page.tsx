'use client'

import { WHYPE_ADDRESSES } from '@/wagmi/tokens'
import Balance from './components/Balance/Balance'
import Button from './components/Button/Button'
import Input from './components/Input/Input'
import MaxButton from './components/MaxButton/MaxButton'
import Selectors from './components/Selectors/Selector'
import { useMemo, useState } from 'react'
import { ActionType, BalanceResult, TokenState } from './types'
import { useConnection, useBalance, useChainId, useReadContract } from 'wagmi'
import { wrapToken } from '@/wagmi/wrapToken'
import { unwrapToken } from '@/wagmi/unwrapToken'
import { balanceRow, main } from './styles'
import { useDynamicContext } from '@dynamic-labs/sdk-react-core'
import { getChainInfoById } from '@/utils/toChainName'
import { isAddress } from 'viem'
import { WRAPPER_ABI } from '@/wagmi/abi'

const Root = () => {
  const { address } = useConnection()
  const chainId = useChainId()
  const { network } = useDynamicContext()
  const { isSupported } = getChainInfoById(network)

  const enabled = !!address && isAddress(address)

  const hype = useBalance({
    address,
    query: {
      refetchInterval: 5000,
      refetchOnReconnect: true,
      refetchOnMount: true,
      refetchOnWindowFocus: true,
      enabled,
    },
  })

  const whypeBalanceOf = useReadContract({
    abi: WRAPPER_ABI,
    address: WHYPE_ADDRESSES[chainId],
    functionName: 'balanceOf',
    args: [address!],
    query: {
      refetchInterval: 5000,
      refetchOnReconnect: true,
      refetchOnMount: true,
      refetchOnWindowFocus: true,
      enabled,
    },
  })

  const whypeDecimals = useReadContract({
    abi: WRAPPER_ABI,
    address: WHYPE_ADDRESSES[chainId],
    functionName: 'decimals',
    query: {
      enabled,
    },
  })

  const whype = useMemo<BalanceResult>(
    () => ({
      data:
        whypeBalanceOf.data != null && whypeDecimals.data != null
          ? { value: whypeBalanceOf.data as bigint, decimals: Number(whypeDecimals.data) }
          : undefined,
      isError: whypeBalanceOf.isError || whypeDecimals.isError,
      isLoading: whypeBalanceOf.isLoading || whypeDecimals.isLoading,
    }),
    [
      whypeBalanceOf.data,
      whypeBalanceOf.isError,
      whypeBalanceOf.isLoading,
      whypeDecimals.data,
      whypeDecimals.isError,
      whypeDecimals.isLoading,
    ],
  )

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

  const handleActionChange = (action: ActionType) => {
    setAmount(undefined)
    setError(undefined)
    setAction(action)
  }

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
      <Selectors action={action} setAction={handleActionChange} />
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
