import React from 'react'
import { Prism } from 'react-syntax-highlighter'
import styled from 'styled-components'

import coy from 'react-syntax-highlighter/dist/cjs/styles/prism/coy'
// ____________________________________________________________________________
//
type CodeBlock = {
  value: string
  language: string
}
// ____________________________________________________________________________
//
export const CodeBlock: React.FC<CodeBlock> = ({ value, language }) => (
  <div>
    <StyledCode>
      <Prism language={language} style={coy}>
        {value}
      </Prism>
      <CopyButton
        onClick={() => {
          const targetNode = document.getElementById(
            'code'
          ) as HTMLTextAreaElement
          targetNode.select()
          document.execCommand('copy')
        }}
      >
        Copy
      </CopyButton>
      <HiddenTextArea id="code" value={value} readOnly />
    </StyledCode>
  </div>
)

// ____________________________________________________________________________
//
const StyledCode = styled.div`
  position: relative;
  background-color: ${(p) => p.theme.white};
  text-align: left;
  padding: 0.5rem;
  pre {
    margin: 0px !important;
    overflow: auto !important;
    font-size: 0.9em !important;
  }
`

const CopyButton = styled.div`
  position: absolute;
  top: 0px;
  right: 0px;
  margin: 0.5em;
  cursor: pointer;
`

const HiddenTextArea = styled.textarea`
  opacity: 0;
  position: absolute;
`
