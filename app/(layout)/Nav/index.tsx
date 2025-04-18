'use client'

import { useAccountModal, useChainModal, useConnectModal } from '@rainbow-me/rainbowkit'
import Image from 'next/image'
import Link from 'next/link'
import { useAccount, useChainId } from 'wagmi'

import { addressButton, chainButton, connectButton, nav, icon } from './styles'
import { css } from '@/styled-system/css'
import { toShortAddress } from '@/utils/shortAddress'
import { getChainNameById } from '@/utils/toChainName'
import { useEffect, useState } from 'react'

const Nav = () => {
  const [width, setWidth] = useState<number>(744)
  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth)
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const { address, isConnected } = useAccount()
  const { openAccountModal } = useAccountModal()
  const { openConnectModal } = useConnectModal()
  const { openChainModal } = useChainModal()
  const chainId = useChainId()

  return (
    <nav className={nav}>
      <Link href={'/'} key='home'>
        <Image
          src={'/icons/hype-to-whype.svg'}
          alt='The site logo'
          width={40}
          height={40}
          className={icon}
        />
      </Link>

      <div className={css({ flexGrow: 1 })} />

      {!isConnected && (
        <button className={connectButton} onClick={openConnectModal}>
          Connect
        </button>
      )}

      {isConnected && (
        <button className={chainButton} onClick={openChainModal}>
          {getChainNameById(chainId)}
        </button>
      )}

      {isConnected && (
        <button className={addressButton} onClick={openAccountModal}>
          {width > 744 ? toShortAddress(address, 6) : toShortAddress(address, 3)}
        </button>
      )}
    </nav>
  )
}

export default Nav
