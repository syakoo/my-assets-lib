import React from 'react'
import styled from 'styled-components'

// ____________________________________________________________________________
//
type InputText = {
  value: string
  setValue: (v: string) => void
} & React.InputHTMLAttributes<HTMLInputElement>
// ____________________________________________________________________________
//
export const InputText: React.FC<InputText> = ({
  value,
  setValue,
  ...otherProps
}) => {
  return (
    <StyledInput
      type="text"
      value={value}
      onChange={(e) => {
        e.preventDefault()
        setValue(e.target.value)
      }}
      {...otherProps}
    />
  )
}

const StyledInput = styled.input`
  font-size: 1.2em;
  padding: 0.5em;
  color: ${(p) => p.theme.black};
  box-sizing: border-box;
  :focus {
    outline-color: ${(p) => p.theme.primary};
  }
`
