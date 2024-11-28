import DownSquareFilledSvg from '@ant-design/icons-svg/lib/asn/DownSquareFilled'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('down-square-filled')
export default class DownSquareFilled extends AntdIcon {
  iconDefinition = DownSquareFilledSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'down-square-filled': DownSquareFilled
  }
}
