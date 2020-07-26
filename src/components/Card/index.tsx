import React from 'react'
import Link from 'next/link'
import styled from 'styled-components'

// ____________________________________________________________________________
//
export const Card: React.FC = ({ children }) => {
  return <StyledCard>{children}</StyledCard>
}

export const LinkedCard: React.FC<{ path: string }> = ({ children, path }) => {
  return (
    <Link href={path}>
      <StyledLinkedCard>{children}</StyledLinkedCard>
    </Link>
  )
}

export const Title: React.FC<{ title: string }> = ({ title }) => {
  return <StyledTitle>{title}</StyledTitle>
}
// ____________________________________________________________________________
//
const StyledCard = styled.div`
  margin: 1em;
  padding: 0.5em;
  text-align: center;
`

const StyledLinkedCard = styled.a`
  margin: 1em;
  padding: 0.5em;
  text-align: center;
  border-radius: 5px;
  cursor: pointer;
  text-decoration: none;
  color: ${(p) => p.theme.black};
  &:hover {
    box-shadow: 0px 0px 5px 1px ${(p) => p.theme.primary};
    background-color: ${(p) => p.theme.white};
    transition: 0.2s ease;
  }
`

const StyledTitle = styled.span`
  font-size: 0.8em;
`
