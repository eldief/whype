'use client'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { type PropsWithChildren } from 'react'
import { WagmiProvider } from 'wagmi'

import { wagmiConfig } from './config'
import { DynamicContextProvider, DynamicUserProfile } from '@dynamic-labs/sdk-react-core'
import { EthereumWalletConnectors } from '@dynamic-labs/ethereum'
import { DynamicWagmiConnector } from '@dynamic-labs/wagmi-connector'

const queryClient = new QueryClient()

const WalletProvider = ({ children }: PropsWithChildren) => {
  return (
    <DynamicContextProvider
      settings={{
        environmentId: process.env.NEXT_PUBLIC_DYNAMIC_ENVIRONMENT_ID!,
        appName: 'Whype',
        walletConnectors: [EthereumWalletConnectors],
      }}
    >
      <WagmiProvider config={wagmiConfig}>
        <QueryClientProvider client={queryClient}>
          <DynamicWagmiConnector>
            <DynamicUserProfile variant='modal' />
            {children}
          </DynamicWagmiConnector>
        </QueryClientProvider>
      </WagmiProvider>
    </DynamicContextProvider>
  )
}

export default WalletProvider
