import React from 'react'
import styled from 'styled-components'

import { MyLink } from '../MyLink'
// ____________________________________________________________________________
//
export const NotFound: React.FC = () => {
  return (
    <div>
      <Title>404 Not Found</Title>
      <div style={{ textAlign: 'center' }}>
        <MyLink href="/">ホームへ戻る</MyLink>
      </div>
    </div>
  )
}
// ____________________________________________________________________________
//
const Title = styled.div`
  font-size: 4rem;
  text-align: center;
  margin: 1rem;
  font-weight: bold;
  color: ${(p) => p.theme.primary};
`
