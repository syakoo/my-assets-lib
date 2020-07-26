import React from 'react'
import { useRouter } from 'next/router'
import styled from 'styled-components'

import { MyLink } from '../MyLink'
// ____________________________________________________________________________
//
type PageLink = {
  path: string
  className?: string
}
// ____________________________________________________________________________
//
export const Header: React.FC = () => {
  const { pathname } = useRouter()
  return (
    <StyledNav>
      <StyledLogo>
        <MyLink href="/">My Assets Lib</MyLink>
      </StyledLogo>
      <PageLinks>
        <MyLink className={pathname === '/svg' ? 'current' : ''} href="/svg">
          SVG
        </MyLink>
        <MyLink
          className={pathname === '/components' ? 'current' : ''}
          href="/components"
        >
          Components
        </MyLink>
      </PageLinks>
    </StyledNav>
  )
}

// ____________________________________________________________________________
//
const StyledNav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${(props) => props.theme.primary};
  padding: 1rem;
`

const StyledLogo = styled.div`
  a {
    font-weight: bold;
    font-size: 1.5rem;
    color: ${(props) => props.theme.white};
    text-decoration: none;
  }
`

const PageLinks = styled.div`
  display: flex;
  justify-content: right;
  a {
    color: ${(props) => props.theme.white};
    text-decoration: none;
    font-weight: bold;
    margin: auto 0.5rem;
    padding: 0.25rem 0px;
    &:not(.current) {
      opacity: 0.6;
      &:hover {
        text-decoration: underline;
      }
    }
  }
`
