import { NextPage } from 'next'
import styled, { keyframes } from 'styled-components'

import { Logo } from '../components/Logo'
import { Layout } from '../components/Templates'

// ____________________________________________________________________________
//
const Home: NextPage = () => {
  return (
    <Layout>
      <Head>
        <div>
          <Logo />
        </div>
        <Title>My Assets Lib</Title>
      </Head>
      <Main>
        <h1>なにこれ</h1>
        <p>
          <a href="https://github.com/syakoo">syakoo</a>
          によって作られた、自作のSVGやReact Componentsを保管する図書館。
          自分用に作ったけれど、誰でも使って構いません。その代わりクオリティは保証しません。
          OSSなので、追加のAssetsやバグの報告、プルリクエストは歓迎しています。
        </p>
        <p>
          使う際は、
          <a href="https://github.com/syakoo/my-assets-lib">このリポジトリ</a>
          にスターをください。喜びます。
        </p>
      </Main>
    </Layout>
  )
}
// ____________________________________________________________________________
//
const slidein = keyframes`
  from {
    background-position: 50% 100%;
  }
  to {
    background-position: 50% 0%;
  }
`

const fadein = keyframes`
  from{
    opacity: 0;
    transform: translateY(-5%);
  }
  to {
    opacity: 1;
    transform: translateY(0%);
  }
`

const Head = styled.div`
  background: linear-gradient(
    0deg,
    ${(p) => p.theme.gray} 50%,
    ${(p) => p.theme.primary} 50%
  );
  background-size: 100% 200%;
  padding: 4rem 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  animation: ${slidein} 0.8s ease-in-out forwards;
  svg {
    width: 200px;
  }
`

const Title = styled.div`
  color: ${(p) => p.theme.gray};
  font-size: 4rem;
  font-weight: bold;
`

const Main = styled.main`
  margin: 1rem auto;
  padding: 1rem;
  max-width: 600px;
  color: ${(p) => p.theme.black};
  opacity: 0;
  animation: ${fadein} 0.2s 1s ease-in forwards;

  h1 {
    font-size: 2em;
    font-weight: bold;
    color: ${(p) => p.theme.primary};
  }
`

export default Home
