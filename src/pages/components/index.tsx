import { NextPage } from 'next'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

import { Layout } from '../../components/Templates'

import dict from '../../assets/components.manifest'
// ____________________________________________________________________________
//
const Comps: NextPage = () => {
  const router = useRouter()
  const item = dict[0]

  useEffect(() => {
    router.replace(`/components/${item.fileName}`)
  }, [router, item])

  return (
    <Layout>
      <h2>`/components/{item.fileName}`へリダイレクトします</h2>
    </Layout>
  )
}

// ____________________________________________________________________________
//

export default Comps
