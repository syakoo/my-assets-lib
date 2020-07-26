import { AppProps } from 'next/app'
import Head from 'next/head'

import B from '../components/MyLink/withBase'
// ____________________________________________________________________________
//
const App = ({ Component, pageProps }: AppProps): JSX.Element => {
  return (
    <>
      <Head>
        <title>My Assets Lib</title>
        <link rel="shortcut icon" href={B('my-assets-lib.png')} />
        <meta property="description" content="SyakooのAssetsの図書館" />
        <meta property="og:title" content="My Assets Lib" />
        <meta
          property="og:image"
          content="https://syakoo.github.io/my-assets-lib/my-assets-lib.png"
        />
        <meta property="twitter:card" content="summary" />
        <meta property="twitter:site" content="@sako_data" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default App
