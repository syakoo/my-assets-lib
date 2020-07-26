import fs from 'fs'
import { NextPage, GetStaticProps, GetStaticPaths } from 'next'
import { useMemo } from 'react'
import styled from 'styled-components'
import jsx2str from 'react-element-to-jsx-string'

import { Layout } from '../../../components/Templates'
import { Breadcrumbs, Item } from '../../../components/Breadcrumbs'
import { CenteringTemp } from '../../../components/Templates'
import { CodeBlock } from '../../../components/CodeBlock'
import { MyLink } from '../../../components/MyLink'
import { Title } from '../../../components/PageTitle'

import dict from '../../../assets/components.manifest'
// ____________________________________________________________________________
//
type CompDetail = {
  name: string
  exampleCodes: string[]
  dataStr: string
}
// ____________________________________________________________________________
//
const Comps: NextPage<CompDetail> = ({ name, exampleCodes, dataStr }) => {
  const item = useMemo(() => {
    return dict.find((it) => it.name === name)
  }, [name])

  return (
    <Layout>
      <Grids>
        <Sidebar>
          <div style={{ margin: '0px 0.5em' }}>
            <Breadcrumbs>
              <Item to="/">ホーム</Item>
              <Item to="/components">Components</Item>
            </Breadcrumbs>
          </div>
          <Selection>
            {dict.map((it, i) => (
              <MyLink
                key={i}
                href="/components/[name]"
                as={`/components/${it.fileName}`}
                className={it.name === name ? 'selected' : ''}
                title={it.name}
              >
                {it.name}
              </MyLink>
            ))}
          </Selection>
        </Sidebar>
        <MainDiv>
          <div style={{ textAlign: 'center' }}>
            <Title>{name}</Title>
          </div>
          <ExampleList>
            {exampleCodes.map((exCode, i) => (
              <div key={i}>
                {item.examples[i]}
                <ExampleCode>
                  <CodeBlock value={exCode} language="tsx" />
                </ExampleCode>
              </div>
            ))}
          </ExampleList>
          <CenteringTemp>
            <CodeBlock value={dataStr} language="tsx" />
          </CenteringTemp>
        </MainDiv>
      </Grids>
    </Layout>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = dict.map((_, i) => `/components/${i}`)
  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps<CompDetail> = async ({
  params,
}) => {
  const id = params.id as string
  const item = dict[+id]
  const dataStr = fs
    .readFileSync(`src/assets/comps/${item.fileName}/index.tsx`)
    .toString()
  const exampleCodes = item.examples.map((ex) => jsx2str(ex))

  return {
    props: { name: item.name, dataStr, exampleCodes },
  }
}
// ____________________________________________________________________________
//
const Grids = styled.div`
  display: grid;
  grid-template-columns: 300px 1fr;
`

const Sidebar = styled.div`
  grid-column: 1 / 2;
  background-color: ${(p) => p.theme.white};
  margin-right: 1rem;
`

const MainDiv = styled.div`
  grid-column: 2 / 3;
`

const Selection = styled.div`
  padding: 1rem 0px;
  height: 100%;
  > a {
    display: block;
    padding: 0.5em 1em;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    text-decoration: none;
    cursor: pointer;

    &:hover {
      background-color: ${(p) => p.theme.gray};
      transition: 0.2s ease;
    }
    &.selected {
      font-weight: bold;
      background-color: ${(p) => p.theme.gray};
      color: ${(p) => p.theme.primary};
    }
  }
`

const ExampleList = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  align-items: flex-start;
  margin-bottom: 1rem;
  & > div {
    margin: 1rem;
    padding: 0.5rem;
    background-color: ${(p) => p.theme.white};
    border-radius: 4px;
    pre {
      font-size: 0.8em !important;
      max-width: 500px;
      overflow: auto;
    }
  }
`

const ExampleCode = styled.div`
  border-top: 2px solid ${(p) => p.theme.gray};
  overflow: hidden;
`

export default Comps
