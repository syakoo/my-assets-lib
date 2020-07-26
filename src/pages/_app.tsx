import { AppProps } from 'next/app'

// ____________________________________________________________________________
//
const App = ({ Component, pageProps }: AppProps): JSX.Element => {
  return (
    <>
      <Component {...pageProps} />
    </>
  )
}

export default App
