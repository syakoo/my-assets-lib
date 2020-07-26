import { NextPage } from 'next'

import { Layout } from '../components/Templates'
import { NotFound } from '../components/NotFound'
// ____________________________________________________________________________
//
const Error404: NextPage = () => {
  return (
    <Layout>
      <NotFound />
    </Layout>
  )
}

export default Error404
