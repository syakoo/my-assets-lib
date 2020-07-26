import React from 'react'
import styled from 'styled-components'

import { MyLink } from '../MyLink'
// ____________________________________________________________________________
//
export const Card: React.FC = ({ children }) => {
  return <StyledCard>{children}</StyledCard>
}

export const LinkedCard: React.FC<MyLink> = ({ children, ...otherProps }) => {
  return (
    <StyledLinkedCard>
      <MyLink {...otherProps}>{children}</MyLink>
    </StyledLinkedCard>
  )
}

export const Title: React.FC<{ title: string }> = ({ title }) => {
  return <StyledTitle>{title}</StyledTitle>
}
// ____________________________________________________________________________
//

const StyledLinkedCard = styled.div`
  margin: 1em;
  a {
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    align-items: center;
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
  }
`

const StyledCard = styled.div`
  margin: 1em;
  padding: 0.5em;
  text-align: center;
`

const StyledTitle = styled.span`
  font-size: 0.8em;
`
