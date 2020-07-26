import fs from 'fs'
import { NextPage, GetStaticProps, GetStaticPaths } from 'next'
import { useMemo } from 'react'
import styled from 'styled-components'

import { Layout } from '../../../components/Templates'
import { CodeBlock } from '../../../components/CodeBlock'
import { Breadcrumbs, Item } from '../../../components/Breadcrumbs'
import { CenteringTemp } from '../../../components/Templates'

import dict from '../../../assets/svg.manifest'
// ____________________________________________________________________________
//
type SvgDetail = {
  svgName: string
  dataStr: string
}
// ____________________________________________________________________________
//
const SvgDetail: NextPage<SvgDetail> = ({ svgName, dataStr }) => {
  const item = useMemo(() => {
    return dict.find((i) => i.name === svgName)
  }, [svgName])

  return (
    <Layout>
      <>
        {item && (
          <>
            <CenteringTemp>
              <Breadcrumbs>
                <Item to="">ホーム</Item>
                <Item to="/svg">SVG</Item>
                <Item to={`/svg/${item.name}`}>{item.name}</Item>
              </Breadcrumbs>
              <Title>{item.name}</Title>
            </CenteringTemp>
            <StyledBox>
              <StyledSvgBlock>{item.data}</StyledSvgBlock>
              <div>
                <CodeBlock value={dataStr || ''} language="svg" />
              </div>
            </StyledBox>
          </>
        )}
      </>
    </Layout>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = dict.map((item) => `/svg/${item.name}`)
  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps<SvgDetail> = async ({ params }) => {
  const svgName = params.name as string
  const item = dict.find((it) => it.name === svgName)
  const dataStr = fs.readFileSync(`src/assets/svg/${item.fileName}`).toString()

  return {
    props: { svgName, dataStr },
  }
}
// ____________________________________________________________________________
//
const Title = styled.div`
  text-align: center;
  font-size: 2rem;
  font-weight: bold;
  color: ${(p) => p.theme.primary};
`

const StyledSvgBlock = styled.div`
  background-color: ${(p) => p.theme.white};
  border-radius: 4px;
`

const StyledBox = styled.div`
  display: flex;
  justify-content: center;
  & > div {
    min-width: 500px;
    margin: 0.5rem;
  }
`

export default SvgDetail
