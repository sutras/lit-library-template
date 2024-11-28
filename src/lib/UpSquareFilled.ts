import UpSquareFilledSvg from '@ant-design/icons-svg/lib/asn/UpSquareFilled'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('up-square-filled')
export default class UpSquareFilled extends AntdIcon {
  iconDefinition = UpSquareFilledSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'up-square-filled': UpSquareFilled
  }
}
