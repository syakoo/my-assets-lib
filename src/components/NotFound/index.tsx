import React from 'react'
import Link from 'next/link'
import styled from 'styled-components'

// ____________________________________________________________________________
//
export const NotFound: React.FC = () => {
  return (
    <div>
      <Title>404 Not Found</Title>
      <div style={{ textAlign: 'center' }}>
        <Link href="/">
          <a>ホームへ戻る</a>
        </Link>
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
