import React, { ReactElement, Fragment } from 'react'
import styled from 'styled-components'

// ____________________________________________________________________________
//
type Breadcrumbs = {
  children: readonly ReactElement<Item>[]
  sep?: string
}
type Item = {
  to: string
  disabled?: boolean
  isCurrent?: boolean
}
// ____________________________________________________________________________
//
export const Breadcrumbs: React.FC<Breadcrumbs> = ({ children, sep }) => {
  return (
    <StyledList>
      {children.map((Child, i) => (
        <Fragment key={i}>
          {React.cloneElement(Child, {
            isCurrent: i === children.length - 1,
          })}
          {i === children.length - 1 || <Sep>{sep || '>'}</Sep>}
        </Fragment>
      ))}
    </StyledList>
  )
}

export const Item: React.FC<Item> = ({ to, disabled, isCurrent, children }) => {
  if (disabled) {
    return <span>{children}</span>
  }
  if (isCurrent) {
    return <span>{children}</span>
  }
  return (
    <a href={to}>
      <span>{children}</span>
    </a>
  )
}
// ____________________________________________________________________________
//
const StyledList = styled.div`
  margin: 0.5em 0px;
  font-size: 0.9em;
  a {
    text-decoration: none;
    color: palevioletred;
    &:hover {
      text-decoration: underline;
    }
  }
`

const Sep = styled.span`
  margin: auto 0.5em;
  opacity: 0.5;
`
