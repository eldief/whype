import { buttonWrapper, selector, selectorSelected, slider } from './styles'
import { cx } from '@/styled-system/css'
import { ActionType } from '../../types'
import { AnimatePresence, motion } from 'framer-motion'
import { selectorAnimation } from '@/app/animations'

const Selectors = ({
  action,
  setAction,
}: {
  action: ActionType
  setAction: (action: ActionType) => void
}) => {
  return (
    <section className={buttonWrapper}>
      <AnimatePresence mode='wait' initial={false}>
        <motion.div
          key={action}
          className={slider}
          custom={action === ActionType.WRAP ? -1 : 1}
          initial='initial'
          animate='animate'
          exit='exit'
          variants={selectorAnimation}
        />
      </AnimatePresence>
      <button
        className={cx(selector, action === ActionType.WRAP ? selectorSelected : '')}
        onClick={() => setAction(ActionType.WRAP)}
      >
        {'Wrap'}
      </button>
      <button
        className={cx(selector, action === ActionType.UNWRAP ? selectorSelected : '')}
        onClick={() => setAction(ActionType.UNWRAP)}
      >
        {'Unwrap'}
      </button>
    </section>
  )
}

export default Selectors
