import type { PropsWithChildren } from 'react'
import { main } from './styles'

const Main = ({ children }: PropsWithChildren) => {
  return <div className={main}>{children}</div>
}

export default Main
