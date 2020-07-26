import Plus from './svg/plus.svg'
import Minus from './svg/minus.svg'
import Multiply from './svg/multiply.svg'
import Divide from './svg/divide.svg'
import SyakooLab from './svg/syakoo-lab.svg'
import MyAssetsLib from './svg/my-assets-lib.svg'
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
