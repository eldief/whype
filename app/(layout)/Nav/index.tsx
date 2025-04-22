'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useAccount } from 'wagmi'

import {
  chainButton,
  connectButton,
  nav,
  icon,
  iconWrapper,
  chainName,
  invalidChainName,
} from './styles'
import { css } from '@/styled-system/css'
import { toShortAddress } from '@/utils/shortAddress'
import { getChainInfoById } from '@/utils/toChainName'
import { useEffect, useState } from 'react'
import { DynamicConnectButton, useDynamicContext } from '@dynamic-labs/sdk-react-core'

const Nav = () => {
  const [width, setWidth] = useState<number>(744)

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth)
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const { isConnected, isConnecting } = useAccount()
  const { user, primaryWallet, setShowDynamicUserProfile, network } = useDynamicContext()
  const { isSupported, name } = getChainInfoById(network)

  return (
    <nav className={nav}>
      <Link href={'/'} key='home' className={iconWrapper}>
        <Image
          src={'/icons/hype-to-whype.svg'}
          alt='The site logo'
          width={40}
          height={40}
          className={icon}
        />
      </Link>

      <div className={css({ flexGrow: 1 })} />

      {!isConnecting && !isConnected && !user && (
        <DynamicConnectButton buttonClassName={connectButton}>{'Connect'}</DynamicConnectButton>
      )}

      {isConnecting && !isConnected && !user && (
        <span className={connectButton}>{'Connecting'}</span>
      )}

      {!isConnecting && isConnected && user && (
        <button className={chainButton} onClick={() => setShowDynamicUserProfile(true)}>
          {!isSupported && <small className={invalidChainName}>{'Unsupported chain'}</small>}
          {isSupported && <small className={chainName}>{name}</small>}
          <span>
            {width > 744
              ? toShortAddress(primaryWallet?.address, 6)
              : toShortAddress(primaryWallet?.address, 4)}
          </span>
        </button>
      )}
    </nav>
  )
}

export default Nav
