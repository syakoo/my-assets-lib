import React from 'react'
import { Breadcrumbs, Item } from './'

const Ex = (
  <Breadcrumbs>
    <Item to="">ホーム</Item>
    <Item to="/components">Components</Item>
    <Item to="/components/Breadcrumbs">パンくずリスト</Item>
  </Breadcrumbs>
)

const Ex2 = (
  <Breadcrumbs>
    <Item to="" disabled>
      ホーム
    </Item>
    <Item to="/components">Components</Item>
    <Item to="/components/Breadcrumbs">パンくずリスト</Item>
  </Breadcrumbs>
)

const Ex3 = (
  <Breadcrumbs sep="☛☞">
    <Item to="">ホーム</Item>
    <Item to="/components">Components</Item>
    <Item to="/components/Breadcrumbs">パンくずリスト</Item>
  </Breadcrumbs>
)

export default [Ex, Ex2, Ex3]
