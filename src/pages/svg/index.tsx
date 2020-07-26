import { NextPage } from 'next'
import { useState, useMemo } from 'react'
import styled from 'styled-components'

import { Layout } from '../../components/Templates'
import { InputText } from '../../components/CustomInputs'
import { LinkedCard, Title } from '../../components/Card'
import { Breadcrumbs, Item } from '../../components/Breadcrumbs'
import { CenteringTemp } from '../../components/Templates'

import dict from '../../assets/svg.manifest'
// ____________________________________________________________________________
//
const SvgList: NextPage = () => {
  const [searchKey, setSearchKey] = useState('')

  const data = useMemo(() => {
    if (!searchKey) return dict
    const filteredData = dict.filter((item) =>
      item.name.toLowerCase().includes(searchKey.toLowerCase())
    )
    return filteredData
  }, [searchKey])

  return (
    <Layout>
      <CenteringTemp>
        <Breadcrumbs>
          <Item to="/">ホーム</Item>
          <Item to="svg/">SVG</Item>
        </Breadcrumbs>
        <InputForm>
          <InputText
            value={searchKey}
            setValue={setSearchKey}
            placeholder="Search for ..."
          />
        </InputForm>
      </CenteringTemp>
      <SVGList>
        {data.map((item, i) => (
          <LinkedCard href="/svg/[name]" as={`/svg/${item.name}`} key={i}>
            {item.data}
            <Title title={item.name} />
          </LinkedCard>
        ))}
      </SVGList>
    </Layout>
  )
}
// ____________________________________________________________________________
//
const SVGList = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  align-items: start;
  margin: 1em;
  svg {
    width: 100px;
    height: 100px;
  }
`

const InputForm = styled.div`
  font-size: 1.2rem;
  margin: 1rem auto;
  input {
    width: 100%;
  }
`

export default SvgList
