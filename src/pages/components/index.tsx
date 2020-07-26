import { NextPage } from 'next'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

import { Layout } from '../../components/Templates'
import B from '../../components/MyLink/withBase'

// ____________________________________________________________________________
//
const Comps: NextPage = () => {
  const router = useRouter()

  useEffect(() => {
    router.replace(B(`/components/0`))
  }, [router])

  return <Layout></Layout>
}

// ____________________________________________________________________________
//

export default Comps
