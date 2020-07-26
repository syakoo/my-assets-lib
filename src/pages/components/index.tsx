import { NextPage } from 'next'
import { useRouter } from 'next/router'

import { Layout } from '../../components/Templates'
import { useEffect } from 'react'

// ____________________________________________________________________________
//
const Comps: NextPage = () => {
  const router = useRouter()
  useEffect(() => {
    router.replace('/components/[id]', '/components/0')
  }, [router])

  return <Layout></Layout>
}

// ____________________________________________________________________________
//

export default Comps
