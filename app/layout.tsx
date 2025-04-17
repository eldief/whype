import type { Viewport } from 'next'
import './globals.css'
import { token } from '@/styled-system/tokens'
import buildMetaData from '@/utils/buildMetaData'
import Main from './(layout)/Main'
import WalletProvider from '@/wagmi'
import Nav from './(layout)/Nav'
import Footer from './(layout)/Footer'
import { serif } from './fonts'
import Toaster from './(layout)/Toaster'
import { ToastProvider } from './(layout)/Toaster/context/ToastContext'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body className={serif.className}>
        <WalletProvider>
          <ToastProvider>
            <Nav />
            <Main>{children}</Main>
            <Footer />
            <Toaster />
          </ToastProvider>
        </WalletProvider>
      </body>
    </html>
  )
}

export const metadata = buildMetaData()
export const viewport: Viewport = {
  themeColor: token('colors.primary.background'),
}
