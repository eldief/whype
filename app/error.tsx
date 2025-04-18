'use client'

import { useEffect } from 'react'
import ErrorWrapper from './(layout)/ErrorWrapper'

export default function Error({ error }: { error: Error }) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return <ErrorWrapper code={500} />
}
