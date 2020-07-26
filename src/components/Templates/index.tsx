import React from 'react'
import styled from 'styled-components'
import { ThemeProvider, createGlobalStyle } from 'styled-components'

import { Header } from '../Header'
// ____________________________________________________________________________
//
const theme = {
  primary: 'palevioletred',
  secondary: '#FFE500',
  white: '#ffffff',
  black: '#454545',
  gray: '#eeeeee',
}
const GlobalStyle = createGlobalStyle<typeof theme>`
  body {
    background-color: ${(p) => p.gray};
    color: ${(p) => p.black};
    margin: 0px;
    font-family: Lato, Noto Sans JP, 游ゴシック Medium, 游ゴシック体, Yu Gothic Medium, YuGothic, ヒラギノ角ゴ ProN, Hiragino Kaku Gothic ProN, メイリオ, Meiryo, ＭＳ Ｐゴシック, MS PGothic, sans-serif;
  }
`
// ____________________________________________________________________________
//
export const Layout: React.FC = ({ children }) => (
  <ThemeProvider theme={theme}>
    <GlobalStyle {...theme} />
    <Header />
    {children}
  </ThemeProvider>
)
export const CenteringTemp: React.FC = ({ children }) => (
  <CenteringDiv>{children}</CenteringDiv>
)
// ____________________________________________________________________________
//
const CenteringDiv = styled.div`
  width: 600px;
  margin: auto;
`
