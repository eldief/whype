'use client'

import {
  errorHeader,
  errorWrapper,
  errorFieldWrapper,
  main,
  suspenceSelectors,
  suspenceBalanceWrapper,
  suspenceBalanceRow,
  suspenceIcon,
  suspenceCol,
  suspenceSymbol,
  suspenceBalance,
  suspenceButtonWrapper,
  suspenceButton,
  suspenceMaxButton,
  suspenceBalanceRowWrapper,
} from './styles'
import { useRouter } from 'next/navigation'

const ErrorWrapper = ({ code, message }: { code: 404 | 500; message: string }) => {
  const router = useRouter()

  return (
    <div className={main}>
      <section className={suspenceSelectors} />
      <section className={suspenceBalanceWrapper}>
        <div className={suspenceBalanceRowWrapper}>
          <div className={suspenceBalanceRow}>
            <span className={suspenceIcon} />
            <div className={suspenceCol}>
              <span className={suspenceSymbol} />
              <span className={suspenceBalance} />
            </div>
          </div>
          <span className={suspenceMaxButton} />
        </div>
      </section>
      <section className={errorWrapper}>
        <small className={errorHeader}>{message}</small>
        <section className={errorFieldWrapper}>{code}</section>
      </section>
      <section className={suspenceButtonWrapper}>
        <button className={suspenceButton} onClick={() => router.replace('/')}>
          {'HOME'}
        </button>
      </section>
    </div>
  )
}

export default ErrorWrapper
