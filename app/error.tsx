'use client'

import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

export default function Error({ error }: { error: Error }) {
  useEffect(() => {
    console.error(error)
  }, [error])

  const router = useRouter()
  router.replace('/')

  return <></>
}
