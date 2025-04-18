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

const ErrorWrapper = ({ code }: { code: 404 | 500 }) => {
  const router = useRouter()
  const header = code === 500 ? 'An error has occurred' : 'Not found'

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
        <small className={errorHeader}>{header}</small>
        <section className={errorFieldWrapper}>{code}</section>
      </section>
      <section className={suspenceButtonWrapper}>
        <button className={suspenceButton} onClick={() => router.push('/')}>
          {'HOME'}
        </button>
      </section>
    </div>
  )
}

export default ErrorWrapper
