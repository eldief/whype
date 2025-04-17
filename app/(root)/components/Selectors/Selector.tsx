import { Dispatch, SetStateAction } from 'react'
import {
  buttonWrapper,
  selector,
  selectorSelected,
  slider,
  sliderUnwrap,
  sliderWrap,
} from './styles'
import { cx } from '@/styled-system/css'
import { ActionType } from '../../types'

const Selectors = ({
  action,
  setAction,
}: {
  action: string
  setAction: Dispatch<SetStateAction<ActionType>>
}) => {
  return (
    <section className={buttonWrapper}>
      <div className={cx(slider, action === 'WRAP' ? sliderWrap : sliderUnwrap)} />
      <button
        className={cx(selector, action === 'WRAP' ? selectorSelected : '')}
        onClick={() => setAction('WRAP')}
      >
        {'Wrap'}
      </button>
      <button
        className={cx(selector, action === 'UNWRAP' ? selectorSelected : '')}
        onClick={() => setAction('UNWRAP')}
      >
        {'Unwrap'}
      </button>
    </section>
  )
}

export default Selectors
