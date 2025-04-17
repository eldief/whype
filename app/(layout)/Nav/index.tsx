'use client'

import { useAccountModal, useChainModal, useConnectModal } from '@rainbow-me/rainbowkit'
import Image from 'next/image'
import Link from 'next/link'
import { useAccount, useChainId } from 'wagmi'

import { addressButton, chainButton, connectButton, nav, icon } from './styles'
import { css } from '@/styled-system/css'
import PATHS from '@/constants/paths'
import { toShortAddress } from '@/utils/shortAddress'
import { getChainNameById } from '@/utils/toChainName'

const Nav = () => {
  const { address, isConnected } = useAccount()
  const { openAccountModal } = useAccountModal()
  const { openConnectModal } = useConnectModal()
  const { openChainModal } = useChainModal()
  const chainId = useChainId()

  return (
    <nav className={nav}>
      <Link href={PATHS.HOME} key='home'>
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
          {toShortAddress(address)}
        </button>
      )}
    </nav>
  )
}

export default Nav
