import RightSquareFilledSvg from '@ant-design/icons-svg/lib/asn/RightSquareFilled'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('right-square-filled')
export default class RightSquareFilled extends AntdIcon {
  iconDefinition = RightSquareFilledSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'right-square-filled': RightSquareFilled
  }
}
