'use client'

import { RainbowKitProvider, darkTheme } from '@rainbow-me/rainbowkit'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { type PropsWithChildren } from 'react'
import { WagmiProvider } from 'wagmi'

import '@rainbow-me/rainbowkit/styles.css'
import { wagmiConfig } from './config'

const rainbowModalTheme = darkTheme({
  accentColor: '#97FCE4',
  accentColorForeground: '#000000',
  overlayBlur: 'small',
  borderRadius: 'small',
})

const queryClient = new QueryClient()

const WalletProvider = ({ children }: PropsWithChildren) => {
  return (
    <WagmiProvider config={wagmiConfig}>
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider
          appInfo={{
            appName: 'WHype',
          }}
          modalSize={'wide'}
          showRecentTransactions={true}
          theme={rainbowModalTheme}
        >
          {children}
        </RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  )
}

export default WalletProvider
