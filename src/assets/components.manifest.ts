import Breadcrumbs from './comps/Breadcrumbs/examples'
// ____________________________________________________________________________
//
export type ComponentsManifest = {
  name: string
  fileName: string
  examples: JSX.Element[]
}[]

export default [
  {
    name: 'パンくずリスト',
    fileName: 'Breadcrumbs',
    examples: Breadcrumbs,
  },
] as ComponentsManifest
