import Plus from './svg/plus.svg'
import Minus from './svg/minus.svg'
import Multiply from './svg/multiply.svg'
import Divide from './svg/divide.svg'
import SyakooLab from './svg/syakoo-lab.svg'
import MyAssetsLib from './svg/my-assets-lib.svg'
import Arrows from './svg/arrows.svg'
import Triangle from './svg/triangle.svg'
import Search from './svg/search.svg'
import Check from './svg/check.svg'
// ____________________________________________________________________________
//
type SVGItem = {
  name: string
  fileName: string
  data: JSX.Element
}
type SVGDictionaries = SVGItem[]
// ____________________________________________________________________________
//

export default [
  { name: 'check', fileName: 'check.svg', data: <Check /> },
  { name: 'search', fileName: 'search.svg', data: <Search /> },
  { name: 'triangle', fileName: 'triangle.svg', data: <Triangle /> },
  { name: 'arrows', fileName: 'arrows.svg', data: <Arrows /> },
  { name: 'divide', fileName: 'divide.svg', data: <Divide /> },
  { name: 'multiply', fileName: 'multiply.svg', data: <Multiply /> },
  { name: 'minus', fileName: 'minus.svg', data: <Minus /> },
  { name: 'plus', fileName: 'plus.svg', data: <Plus /> },
  { name: 'syakoo-lab', fileName: 'syakoo-lab.svg', data: <SyakooLab /> },
  {
    name: 'my-assets-lib',
    fileName: 'my-assets-lib.svg',
    data: <MyAssetsLib />,
  },
] as SVGDictionaries
