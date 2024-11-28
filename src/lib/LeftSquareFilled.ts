import LeftSquareFilledSvg from '@ant-design/icons-svg/lib/asn/LeftSquareFilled'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('left-square-filled')
export default class LeftSquareFilled extends AntdIcon {
  iconDefinition = LeftSquareFilledSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'left-square-filled': LeftSquareFilled
  }
}
