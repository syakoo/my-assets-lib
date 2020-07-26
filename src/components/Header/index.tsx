import React from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import styled from 'styled-components'

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
        <Link href="/">
          <a>My Assets Lib</a>
        </Link>
      </StyledLogo>
      <PageLinks>
        <PageLink className={pathname === '/svg' ? 'current' : ''} path="/svg">
          SVG
        </PageLink>
        <PageLink
          className={pathname === '/components' ? 'current' : ''}
          path="/components"
        >
          Components
        </PageLink>
      </PageLinks>
    </StyledNav>
  )
}

const PageLink: React.FC<PageLink> = ({ path, className, children }) => {
  return (
    <Link href={path}>
      <a className={className || ''}>{children}</a>
    </Link>
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
